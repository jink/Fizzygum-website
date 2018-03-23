// Generated by CoffeeScript 1.12.7
window.MenuItemMorph_coffeSource = '# I automatically determine my bounds\n\nclass MenuItemMorph extends TriggerMorph\n\n  # labelString can also be a Widget or a Canvas or a tuple: [icon, string]\n  constructor: (ifInsidePopUpThenClosesUnpinnedPopUpsWhenClicked, target, action, labelString, fontSize, fontStyle, centered, environment, morphEnv, toolTipMessage, color, bold, italic, doubleClickAction, argumentToAction1, argumentToAction2, representsAMorph) ->\n    #console.log "menuitem constructing"\n    super ifInsidePopUpThenClosesUnpinnedPopUpsWhenClicked, target, action, labelString, fontSize, fontStyle, centered, environment, morphEnv, toolTipMessage, color, bold, italic, doubleClickAction, argumentToAction1, argumentToAction2, representsAMorph \n    @actionableAsThumbnail = true\n\n  getTextDescription: ->\n    if @textDescription?\n      return @textDescription + " (adhoc description of menu item)"\n    if @labelString\n      textWithoutLocationOrInstanceNo = @labelString.replace /#\\d*/, ""\n      return textWithoutLocationOrInstanceNo + " (text in button)"\n    else\n      return super()\n  \n  # in theory this would be the right thing to do\n  # but a bunch of tests break and it\'s not worth it\n  # as we are going to remake the whole layout system anyways\n  #reLayout: ->\n  #  @label.setExtent @extent().subtract (@label.bounds.origin.subtract @.bounds.origin)\n\n  isTicked: ->\n    @label.text.isTicked()\n\n  toggleTick: ->\n    if @label.text.isTicked()\n      @label.text = @label.text.toggleTick()\n      @label.reLayout()\n      @label.changed()\n    else if @label.text.isUnticked()\n      @label.text = @label.text.toggleTick()\n      @label.reLayout()\n      @label.changed()\n\n\n  createLabel: ->\n    # console.log "menuitem createLabel"\n    if isString @labelString\n      @label = @createLabelString @labelString\n    else if @labelString instanceof Array      \n      # assume its pattern is: [icon, string] \n      @label = new Widget()\n      @label.alpha = 0 # transparent\n\n      icon = @createIcon @labelString[0]\n      @label.add icon\n      lbl = @createLabelString @labelString[1]\n      @label.add lbl\n\n      lbl.fullRawMoveCenterTo icon.center()\n      lbl.fullRawMoveLeftSideTo icon.right() + 4\n      @label.rawSetBounds icon.boundingBox().merge lbl.boundingBox()\n    else # assume it\'s either a Widget or a Canvas\n      @label = @createIcon @labelString\n\n    @add @label\n  \n    w = @width()\n    @silentRawSetExtent @label.extent().add new Point 8, 0\n    @silentRawSetWidth w\n    np = @position().add new Point 4, 0\n    @label.silentFullRawMoveTo np\n  \n\n  createIcon: (source) ->\n    # source can be either a Widget or an HTMLCanvasElement\n    icon = new Widget()\n    icon.backBuffer = (if source instanceof Widget then source.fullImage() else source)\n    icon.backBufferContext = icon.backBuffer.getContext "2d"\n\n    # adjust shadow dimensions\n    if source instanceof Widget and source.hasShadow()\n      src = icon.backBuffer\n      icon.backBuffer = newCanvas(\n        source.fullBounds().extent().subtract(\n          @shadowBlur * 2).scaleBy pixelRatio)\n      icon.backBufferContext = icon.backBuffer.getContext "2d"\n      icon.backBufferContext.drawImage src, 0, 0\n\n    icon.silentRawSetWidth icon.backBuffer.width\n    icon.silentRawSetHeight icon.backBuffer.height\n    icon\n\n  createLabelString: (string) ->\n    # console.log "menuitem createLabelString"\n    lbl = new TextMorph string, @fontSize, @fontStyle\n    lbl.setColor @labelColor\n    lbl  \n\n  shrinkToTextSize: ->\n    # \'5\' is to add some padding between\n    # the text and the button edge\n    @rawSetWidth @widthOfLabel() + 5\n\n  widthOfLabel: ->\n    @label.width()\n\n  # MenuItemMorph events:\n  mouseEnter: ->\n    #console.log "@target: " + @target + " @morphEnv: " + @morphEnv\n    \n    # this could be a way to catch menu entries that should cause\n    # an highlighting but don\'t\n    #if @labelString.indexOf("a ") == 0 and !@representsAMorph\n    #  debugger\n\n    if @representsAMorph\n      morphToBeHighlighted = nil\n      if @argumentToAction1?\n        # this first case handles when you pick a morph\n        # as a target\n        morphToBeHighlighted = @argumentToAction1\n      else\n        # this second case handles when you attach to a morph\n        morphToBeHighlighted = @target\n      morphToBeHighlighted.turnOnHighlight()\n    unless @isListItem()\n      @state = @STATE_HIGHLIGHTED\n      @changed()\n    if @toolTipMessage\n      @startCountdownForBubbleHelp @toolTipMessage\n  \n  mouseLeave: ->\n    if @representsAMorph\n      morphToBeHighlighted = nil\n      if @argumentToAction1?\n        # this first case handles when you pick a morph\n        # as a target\n        morphToBeHighlighted = @argumentToAction1\n      else\n        # this second case handles when you attach to a morph\n        morphToBeHighlighted = @target\n      morphToBeHighlighted.turnOffHighlight()\n    unless @isListItem()\n      @state = @STATE_NORMAL\n      @changed()\n    world.hand.destroyToolTips()  if @toolTipMessage\n  \n  mouseDownLeft: (pos) ->\n    if @isListItem()\n      @parent.unselectAllItems()\n      @escalateEvent "mouseDownLeft", pos\n    @state = @STATE_PRESSED\n    @changed()\n    super\n  \n  isListItem: ->\n    return @parent.isListContents  if @parent\n    false\n  \n  isSelectedListItem: ->\n    return @state is @STATE_PRESSED if @isListItem()\n    false\n';
