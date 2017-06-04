// Generated by CoffeeScript 1.10.0
window.FridgeMagnetsMorph_coffeSource = '# FridgeMagnetsMorph //////////////////////////////////////////////////////\n\nclass FridgeMagnetsMorph extends WindowMorph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  # panes:\n  fridge: null\n  codeOutput: null\n  magnetsBox: null\n  visualOutput: null\n\n  dragTheTilesHereHeader: null\n  tilesBinHeader: null\n  liveCodeLangOutputHeader: null\n  outputAnimationHeader: null\n\n\n  constructor: ->\n    super "Fizzytiles"\n  \n  buildAndConnectChildren: ->\n    if AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    super\n\n    # visual output\n    @visualOutput = new FridgeMagnetsCanvasMorph()\n    @visualOutput.disableDrops()\n    @add @visualOutput\n    \n    # source code output pane\n    @codeOutput = new FizzytilesCodeMorph "",null,null,null,null,null,(new Color 255, 250, 245), 1\n    @codeOutput.fridgeMagnetsCanvas = @visualOutput\n    @codeOutput.isEditable = true\n    @codeOutput.enableSelecting()\n    @codeOutput.togglefittingSpecWhenBoundsTooLarge()\n    @add @codeOutput\n\n    # fridge\n    @fridge = new FridgeMorph()\n    @fridge.fridgeMagnetsCanvas = @visualOutput\n    @fridge.sourceCodeHolder = @codeOutput\n    @add @fridge\n\n    # magnets box\n    @magnetsBox = new FrameMorph()\n    @add @magnetsBox\n\n\n    # sample magnets -------------------------------\n    @scale = new MagnetMorph true, @\n    @scale.setLabel "scale"\n    @scale.alignCenter()\n    @magnetsBox.add @scale\n\n    @rotate = new MagnetMorph true, @\n    @rotate.setLabel "rotate"\n    @rotate.alignCenter()\n    @magnetsBox.add @rotate\n\n    @box = new MagnetMorph true, @\n    @box.setLabel "box"\n    @box.alignCenter()\n    @magnetsBox.add @box\n\n    @move = new MagnetMorph true, @\n    @move.setLabel "move"\n    @move.alignCenter()\n    @magnetsBox.add @move\n\n    # ----------------------------------------------\n\n    # headers --------------------------------------\n    @dragTheTilesHereHeader = new StringMorph2 "drag tiles here"\n    @dragTheTilesHereHeader.toggleHeaderLine()\n    @dragTheTilesHereHeader.alignCenter()\n    @add @dragTheTilesHereHeader\n\n    @tilesBinHeader = new StringMorph2 "tiles bin"\n    @tilesBinHeader.toggleHeaderLine()\n    @tilesBinHeader.alignCenter()\n    @add @tilesBinHeader\n\n    @liveCodeLangOutputHeader = new StringMorph2 "LiveCodeLang output"\n    @liveCodeLangOutputHeader.toggleHeaderLine()\n    @liveCodeLangOutputHeader.alignCenter()\n    @add @liveCodeLangOutputHeader\n\n    @outputAnimationHeader = new StringMorph2 "output animation"\n    @outputAnimationHeader.toggleHeaderLine()\n    @outputAnimationHeader.alignCenter()\n    @add @outputAnimationHeader\n    # -----------------------------------------------\n\n\n    # update layout\n    @layoutSubmorphs()\n\n  \n  layoutSubmorphs: (morphStartingTheChange = null) ->\n    super morphStartingTheChange\n    console.log "fixing the layout of the inspector"\n\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Morph. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    # label\n    labelLeft = @left() + @padding\n    labelTop = @top() + @padding\n    labelRight = @right() - @padding\n    labelWidth = labelRight - labelLeft\n    labelBottom = labelTop + @label.height() + 2\n\n    classDiagrHeight = Math.floor(@height() / 2)\n    eachPaneWidth = Math.floor( (@width() - 4*@padding) / 3) \n\n\n    # fridge\n    fridgeWidth = eachPaneWidth\n    b = @bottom() - (2 * @padding) - WorldMorph.preferencesAndSettings.handleSize\n    fridgeHeight = b - labelBottom - classDiagrHeight\n    fridgeBottom = labelBottom + fridgeHeight + classDiagrHeight\n    fridgeLeft = @fridge.left()\n\n    magnetsBoxLeft = labelLeft + eachPaneWidth + @padding\n    magnetsBoxWidth = eachPaneWidth\n    magnetsBoxHeight = b - labelBottom - (15 + 2*@padding)\n\n    if @fridge.parent == @\n      @fridge.fullRawMoveTo new Point magnetsBoxLeft, labelBottom + 15 + 2*@padding\n      @fridge.rawSetExtent new Point eachPaneWidth, fridgeHeight\n\n    if @liveCodeLangOutputHeader.parent == @\n      @liveCodeLangOutputHeader.fullRawMoveTo new Point magnetsBoxLeft, @fridge.bottom() + @padding\n      @liveCodeLangOutputHeader.rawSetExtent new Point eachPaneWidth, 15\n\n    # codeOutput\n    if @codeOutput.parent == @\n      @codeOutput.fullRawMoveTo new Point magnetsBoxLeft, labelBottom + classDiagrHeight\n      @codeOutput.rawSetExtent new Point fridgeWidth, fridgeHeight\n\n    if @dragTheTilesHereHeader.parent == @\n      @dragTheTilesHereHeader.fullRawMoveTo new Point magnetsBoxLeft, @label.bottom() + @padding\n      @dragTheTilesHereHeader.rawSetExtent new Point eachPaneWidth, 15\n\n    if @tilesBinHeader.parent == @\n      @tilesBinHeader.fullRawMoveTo new Point @left() + @padding, @label.bottom() + @padding\n      @tilesBinHeader.rawSetExtent new Point eachPaneWidth, 15\n\n    # magnets box\n    detailRight = fridgeLeft + eachPaneWidth\n    if @magnetsBox.parent == @\n      @magnetsBox.fullRawMoveTo new Point labelLeft, labelBottom + 15 + 2*@padding\n      @magnetsBox.rawSetExtent new Point(eachPaneWidth, magnetsBoxHeight).round()\n\n    # visual output\n    visualOutputLeft = labelLeft + eachPaneWidth + @padding + eachPaneWidth + @padding\n    visualOutputWidth = eachPaneWidth\n    visualOutputRight = visualOutputLeft + visualOutputWidth\n    if @visualOutput.parent == @\n      @visualOutput.fullRawMoveTo new Point visualOutputLeft, labelBottom + 15 + 2*@padding\n      @visualOutput.rawSetExtent new Point(eachPaneWidth, magnetsBoxHeight).round()\n\n    if @outputAnimationHeader.parent == @\n      @outputAnimationHeader.fullRawMoveTo new Point visualOutputLeft, @label.bottom() + @padding\n      @outputAnimationHeader.rawSetExtent new Point eachPaneWidth, 15\n\n\n    # sample magnets -------------------------------\n    if @scale.parent == @magnetsBox\n      @scale.fullRawMoveTo new Point @magnetsBox.left() + @padding, @magnetsBox.top() + @padding\n\n    if @rotate.parent == @magnetsBox\n      @rotate.fullRawMoveTo new Point @magnetsBox.left() + @padding, @scale.bottom() + @padding\n\n    if @box.parent == @magnetsBox\n      @box.fullRawMoveTo new Point @magnetsBox.left() + @padding, @rotate.bottom() + @padding\n\n    if @move.parent == @magnetsBox\n      @move.fullRawMoveTo new Point @magnetsBox.left() + @padding, @box.bottom() + @padding\n\n    # ----------------------------------------------\n\n\n    trackChanges.pop()\n    @changed()\n    if AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n';
