// Generated by CoffeeScript 1.12.7
window.StretchableEditableWdgt_coffeSource = '# REQUIRES KeepsRatioWhenInVerticalStackMixin\n\nclass StretchableEditableWdgt extends Widget\n\n  @augmentWith KeepsRatioWhenInVerticalStackMixin, @name\n\n  toolsPanel: nil\n  stretchableWidgetContainer: nil\n\n  # the external padding is the space between the edges\n  # of the container and all of its internals. The reason\n  # you often set this to zero is because windows already put\n  # contents inside themselves with a little padding, so this\n  # external padding is not needed. Useful to keep it\n  # separate and know that it\'s working though.\n  externalPadding: 0\n  # the internal padding is the space between the internal\n  # components. It doesn\'t necessarily need to be equal to the\n  # external padding\n  internalPadding: 5\n\n  providesAmenitiesForEditing: true\n\n  constructor: ->\n    super\n    @buildAndConnectChildren()\n    @invalidateLayout()\n\n  colloquialName: ->\n    "Generic panel"\n\n  representativeIcon: ->\n    new GenericPanelIconWdgt()\n\n\n  createToolsPanel: ->\n\n  createNewStretchablePanel: ->\n    @stretchableWidgetContainer = new StretchableWidgetContainerWdgt()\n    @add @stretchableWidgetContainer\n\n\n  reLayout: ->\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Widget. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    labelBottom = @top() + @externalPadding\n\n\n    # stretchableWidgetContainer --------------------------\n\n    stretchableWidgetContainerWidth = @width() - 2*@externalPadding\n    \n    b = @bottom() - (2 * @externalPadding)\n    stretchableWidgetContainerHeight =  @height() - 2 * @externalPadding\n    stretchableWidgetContainerBottom = labelBottom + stretchableWidgetContainerHeight\n    stretchableWidgetContainerLeft = @left() + @externalPadding\n\n    if @stretchableWidgetContainer.parent == @\n      @stretchableWidgetContainer.fullRawMoveTo new Point stretchableWidgetContainerLeft, labelBottom\n      @stretchableWidgetContainer.setExtent new Point stretchableWidgetContainerWidth, stretchableWidgetContainerHeight\n\n    # ----------------------------------------------\n\n\n    trackChanges.pop()\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n  rawSetExtent: (aPoint) ->\n    super\n    @reLayout()\n\n  hasStartingContentBeenChangedByUser: ->\n    @stretchableWidgetContainer?.ratio?\n\n  closeFromContainerWindow: (containerWindow) ->\n\n    if !@hasStartingContentBeenChangedByUser() and !world.anyReferenceToWdgt containerWindow\n      # there is no real contents to save\n      containerWindow.fullDestroy()\n    else if !world.anyReferenceToWdgt containerWindow\n      prompt = new SaveShortcutPromptWdgt @, containerWindow\n      prompt.popUpAtHand()\n    else\n      containerWindow.close()\n\n  editButtonPressedFromWindowBar: ->\n    if @dragsDropsAndEditingEnabled\n      @disableDragsDropsAndEditing @\n    else\n      @enableDragsDropsAndEditing @\n\n  constrainToRatio: ->\n    if @layoutSpecDetails?\n      @layoutSpecDetails.canSetHeightFreely = false\n      # force a resize, so the slide and the window\n      # it\'s in will take the right ratio, and hence\n      # the content will take the whole window it\'s in.\n      # Note that the height of 0 here is ignored since\n      # "rawSetWidthSizeHeightAccordingly" will\n      # calculate the height.\n      if @stretchableWidgetContainer?.ratio?\n        @rawSetExtent new Point @width(), 0\n\n  enableDragsDropsAndEditing: (triggeringWidget) ->\n    if !triggeringWidget? then triggeringWidget = @\n    if @dragsDropsAndEditingEnabled\n      return\n    @parent?.makePencilYellow?()\n    @dragsDropsAndEditingEnabled = true\n    @createToolsPanel()\n    @stretchableWidgetContainer.enableDragsDropsAndEditing @\n\n\n  # while in editing mode, the slide can take any dimension\n  # and if the content has already a decided ratio then\n  # the container will adjust the content within the given\n  # space so that the content will keep ratio.\n  #\n  # However, when NOT in editing mode, then we\n  # want the content to force the ratio of the window\n  # it might be in, so that\n  # 1) it takes the whole window rather than a\n  #    a letterboxed part, so it looks neat\n  # 2) if we drop the slide in\n  #    a document then it will take a height proportional\n  #    to the given width, which is what looks natural.\n  rawSetWidthSizeHeightAccordingly: (newWidth) ->\n    if @layoutSpecDetails?.canSetHeightFreely\n     super\n     return\n\n    if !@stretchableWidgetContainer?\n     super\n     return\n\n    if !@stretchableWidgetContainer.ratio?\n     super\n     return\n\n    @rawSetExtent new Point newWidth, Math.round(newWidth / @stretchableWidgetContainer.ratio)\n\n\n  disableDragsDropsAndEditing: (triggeringWidget) ->\n    if !triggeringWidget? then triggeringWidget = @\n    if !@dragsDropsAndEditingEnabled\n      return\n    @parent?.makePencilClear?()\n    @dragsDropsAndEditingEnabled = false\n    if @toolsPanel?\n      @toolsPanel.unselectAll?()\n      @toolsPanel.destroy()\n      @toolsPanel = nil\n    @stretchableWidgetContainer.disableDragsDropsAndEditing @\n    @invalidateLayout()\n\n  buildAndConnectChildren: ->\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    @createNewStretchablePanel()\n    @createToolsPanel()\n\n    @invalidateLayout()\n\n  childPickedUp: (childPickedUp) ->\n    if childPickedUp == @stretchableWidgetContainer\n      @createNewStretchablePanel()\n      @invalidateLayout()\n\n  # same as simpledocumentscrollpanel, you can lock the contents.\n  # worth factoring it out as a mixin?\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n\n    childrenNotHandlesNorCarets = @children.filter (m) ->\n      !((m instanceof HandleMorph) or (m instanceof CaretMorph))\n\n    if childrenNotHandlesNorCarets? and childrenNotHandlesNorCarets.length > 0\n      menu.addLine()\n      if !@dragsDropsAndEditingEnabled\n        menu.addMenuItem "enable editing", true, @, "enableDragsDropsAndEditing", "lets you drag content in and out"\n      else\n        menu.addMenuItem "disable editing", true, @, "disableDragsDropsAndEditing", "prevents dragging content in and out"\n\n    menu.removeConsecutiveLines()\n';
