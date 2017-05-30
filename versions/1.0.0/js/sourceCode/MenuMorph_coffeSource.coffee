window.MenuMorph_coffeSource = '''
# MenuMorph ///////////////////////////////////////////////////////////

class MenuMorph extends BoxMorph
  # this is so we can create objects from the object class name 
  # (for the deserialization process)
  namedClasses[@name] = @prototype

  target: null
  title: null
  environment: null
  fontSize: null
  items: null
  label: null
  isListContents: false
  killThisMenuIfClickOnDescendantsTriggers: true
  killThisMenuIfClickOutsideDescendants: true
  tempPromptEntryField: null

  constructor: (@isListContents = false, @target, @killThisMenuIfClickOutsideDescendants = true, @killThisMenuIfClickOnDescendantsTriggers = true, @title = null, @environment = null, @fontSize = null) ->
    # console.log "menu constructor"
    @items = []
    # console.log "menu super"
    if AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism
      world.alignIDsOfNextMorphsInSystemTests()
    if !@isListContents
      if @killThisMenuIfClickOutsideDescendants
        @onClickOutsideMeOrAnyOfMyChildren "destroy"
    super()

    if !@isListContents
      world.freshlyCreatedMenus.push @
      world.openMenus.push @
    # important not to traverse all the children for stepping through, because
    # there could be a lot of entries for example in the inspector the number
    # of properties of an object - there could be a 100 of those and we don't
    # want to traverse them all. Setting step to null (as opposed to nop)
    # achieves that.      

  propagateKillMenus: ->
    if @killThisMenuIfClickOnDescendantsTriggers
      if @parent?
        @parent.propagateKillMenus()
      @markForDestruction()

  isPinned: ->
    return !(@killThisMenuIfClickOnDescendantsTriggers or @killThisMenuIfClickOutsideDescendants)

  pin: ->
    @killThisMenuIfClickOnDescendantsTriggers = false
    @killThisMenuIfClickOutsideDescendants = false
    @onClickOutsideMeOrAnyOfMyChildren null
    world.add @

  # StringMorph menus:
  developersMenu: ->
    menu = super()
    menu.addLine()
    menu.addItem "pin", false, @, "pin"
    menu
  
  addItem: (
      labelString,
      closesUnpinnedMenus = true,
      target,
      action,
      hint,
      color,
      bold = false,
      italic = false,
      doubleClickAction, # optional, when used as list contents
      argumentToAction1,
      argumentToAction2,
      representsAMorph = false
      ) ->
    # labelString is normally a single-line string. But it can also be one
    # of the following:
    #     * a multi-line string (containing line breaks)
    #     * an icon (either a Morph or a Canvas)
    #     * a tuple of format: [icon, string]
    @items.push [
      localize(labelString or "close"),
      closesUnpinnedMenus,
      target,
      action,
      hint,
      color,
      bold,
      italic,
      doubleClickAction,
      argumentToAction1,
      argumentToAction2,
      representsAMorph
    ]

  prependItem: (
      labelString,
      closesUnpinnedMenus,
      target,
      action,
      hint,
      color,
      bold = false,
      italic = false,
      doubleClickAction, # optional, when used as list contents
      argumentToAction1,
      argumentToAction2,
      representsAMorph
      ) ->
    # labelString is normally a single-line string. But it can also be one
    # of the following:
    #     * a multi-line string (containing line breaks)
    #     * an icon (either a Morph or a Canvas)
    #     * a tuple of format: [icon, string]
    @items.unshift [
      localize(labelString or "close"),
      closesUnpinnedMenus,
      target,
      action,
      hint,
      color,
      bold,
      italic,
      doubleClickAction,
      argumentToAction1,
      argumentToAction2,
      representsAMorph
    ]
  

  addLine: (width) ->
    @items.push [0, width or 1]

  prependLine: (width) ->
    @items.unshift [0, width or 1]
  
  createLabel: ->
    # console.log "menu create label"
    if @label?
      @label = @label.destroy()
    text = new TextMorph(localize(@title),
      @fontSize or WorldMorph.preferencesAndSettings.menuFontSize,
      WorldMorph.preferencesAndSettings.menuFontName, true, false, "center")
    text.alignment = "center"
    text.color = new Color 255, 255, 255
    text.backgroundColor = new Color 60,60,60

    @label = new BoxMorph 3
    @label.add text
    if WorldMorph.preferencesAndSettings.isFlat
      @label.cornerRadius = 0
    @label.color = new Color 60,60,60
    @label.rawSetExtent text.extent().add 2
    @label.text = text

  reLayout: ->
    # console.log "menu update rendering"
    super()

    # no point in breaking a rectangle for each menu entry,
    # let's hold on the broken rects and then issue
    # a fullChanged() at the end.
    trackChanges.push false

    isLine = false
    @fullDestroyChildren()

    unless @isListContents
      @cornerRadius = if WorldMorph.preferencesAndSettings.isFlat then 0 else 5
    @color = new Color 255, 255, 255
    @silentRawSetExtent new Point 0, 0
    y = @top()
    x = @left() + 2
    @notifyChildrenThatParentHasReLayouted()


    unless @isListContents
      if @title
        @createLabel()
        @label.fullRawMoveTo @position().add 2
        @add @label
        y = @label.bottom()
      else
        y = @top()
    y += 1

    # note that menus can contain:
    # strings, colorpickers,
    # sliders, menuItems (which are buttons)
    # and divider lines.
    # console.log "menu @items.length " + @items.length
    @items.forEach (tuple) =>
      isLine = false
      # string, color picker and slider
      if tuple instanceof StringFieldMorph or
        tuple instanceof ColorPickerMorph or
        tuple instanceof SliderMorph
          item = tuple
      # line. A thin Morph is used
      # to draw the line.
      else if tuple[0] is 0
        isLine = true
        item = new RectangleMorph()
        item.setMinimumExtent new Point 5,1
        item.color = new Color 60,60,60
        item.rawSetHeight tuple[1]
      # menuItem
      else
        # console.log "menu creating MenuItemMorph "
        item = new MenuItemMorph(
          tuple[1], # closes unpinned menus
          tuple[2], # target
          tuple[3], # action
          tuple[0], # label
          @fontSize or WorldMorph.preferencesAndSettings.menuFontSize,
          WorldMorph.preferencesAndSettings.menuFontName,
          false,
          @target, # environment
          @environment, # environment2
          tuple[4], # bubble help hint
          tuple[5], # color
          tuple[6], # bold
          tuple[7], # italic
          tuple[8],  # doubleclick action
          tuple[9],  # argument to action 1
          tuple[10],  # argument to action 2
          tuple[11]  # does it represent a Morph?
          )
        if !@environment?
          item.dataSourceMorphForTarget = item
          item.morphEnv = @target
        #if tuple[1] == null
        #  debugger
        #  item.environment = item
      y += 1  if isLine
      item.fullRawMoveTo new Point x, y
      # we do a silentAdd here because we are going
      # to update all the morphs again later in
      # adjustWidthsOfMenuEntries
      # (cause we need to know the maximum width first)
      @silentAdd item
      #console.log "item added: " + item.bounds
      y = y + item.height()
      y += 1  if isLine
  
    @adjustWidthsOfMenuEntries()
    fb = @fullBounds()
    #console.log "fb: " + fb
    # add some padding to the right and bottom of the menu
    @silentRawSetExtent fb.extent().add 2
    trackChanges.pop()
    @fullChanged()
  
  maxWidthOfMenuEntries: ->
    w = 0
    #if @parent instanceof FrameMorph
    #  if @parent.scrollFrame instanceof ScrollFrameMorph
    #    w = @parent.scrollFrame.width()    
    @children.forEach (item) ->
      if item instanceof MenuItemMorph
        w = Math.max(w, item.children[0].width() + 8)
      else if (item instanceof StringFieldMorph) or
        (item instanceof ColorPickerMorph) or
        (item instanceof SliderMorph)
          w = Math.max w, item.width()
      #console.log "maxWidthOfMenuEntries: width of item " + item + " : " + w

    if @label
      w = Math.max w, @label.width()
      #console.log "maxWidthOfMenuEntries: label width : " + w
    w
  
  # makes all the elements of this menu the
  # right width.
  adjustWidthsOfMenuEntries: ->
    w = @maxWidthOfMenuEntries()
    #console.log "maxWidthOfMenuEntries " + w
    @children.forEach (item) =>
      trackChanges.push false
      item.rawSetWidth w
      if item is @label
        item.text.fullRawMoveTo item.center().subtract item.text.extent().floorDivideBy 2
      #console.log "new width of " + item + " : " + item.width()
      trackChanges.pop()

  
  unselectAllItems: ->
    @children.forEach (item) ->
      if item instanceof MenuItemMorph
        item.state = item.STATE_NORMAL

    @changed()

  destroy: ->
    WorldMorph.numberOfAddsAndRemoves++
    super()
    if !@isListContents
      world.openMenus.remove @


  itemSelected: ->
    unless @isListContents
      @destroy()

  justDropped: ->
    if @isPinned()
      @removeShadowMorph()
    else
      @addFullShadow()


  popup: (morphToAttachTo, pos) ->
    # console.log "menu popup"
    @silentFullRawMoveTo pos
    morphToAttachTo.add @
    # the @fullRawMoveWithin method
    # needs to know the extent of the morph
    # so it must be called after the morphToAttachTo.add
    # method. If you call before, there is
    # nopainting happening and the morph doesn't
    # know its extent.
    @fullRawMoveWithin world
    if AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism
      world.alignIDsOfNextMorphsInSystemTests()
    # shadow must be added after the morph
    # has been placed somewhere because
    # otherwise there is no visible image
    # to base the shadow on
    # P.S. this is the thing that causes the MenuMorph buffer
    # to be painted after the creation.
    @addFullShadow()
    @fullChanged()

  # shadow is added to a morph by
  # the HandMorph while floatDragging
  addFullShadow: (offset = new Point(2, 2), alpha = 0.8, color) ->
    super offset, alpha, color
  
  popUpAtHand: (morphToAttachTo)->
    if !morphToAttachTo?
      morphToAttachTo = world
    @popup morphToAttachTo, world.hand.position()
  
  popUpCenteredAtHand: (world) ->
    @popup world, world.hand.position().subtract @extent().floorDivideBy 2
  
  popUpCenteredInWorld: (world) ->
    @popup world, world.center().subtract @extent().floorDivideBy 2


'''