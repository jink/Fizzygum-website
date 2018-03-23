// Generated by CoffeeScript 1.12.7
window.SimplePlainTextWdgt_coffeSource = '# REQUIRES ControllerMixin\n\n# A multi-line, optionally word-wrapping string.\n# It\'s not "contained": it will literally blurt itself out allover the\n# screen. For "contained" text (the only practical solution for long\n# text) use the SimplePlainTextWdgtScrollPanelWdgt, since that\n# one... scrolls.\n#\n# SimplePlainTextWdgt is a compatibility layer that lets us use the new\n# TextMorph2 with the current ScrollPanelWdgt and the current layout mechanism (which\n# we\'d want to change with a more generic one but it\'s a complex process).\n#\n# This Widget can do stuff that the TextMorph2 is not quite ready to do (i.e. can\n# adjust its vertical size to fit its contents in the given width, which is what\n# "normal" text editing looks like.\n#\n# TextMorph2 could also be used to do that, but it could do that within a larger\n# layout rework that has not been done yet. Note that TextMorph2 can do a bunch more\n# stuff (e.g. lets you edit in "centered" text, can fit the text to any given\n# bound etc...)\n\nclass SimplePlainTextWdgt extends TextMorph2\n\n  @augmentWith ControllerMixin\n\n  constructor: (\n   @text = "SimplePlainText",\n   @originallySetFontSize = 12,\n   @fontName = @justArialFontStack,\n   @isBold = false,\n   @isItalic = false,\n   #@isNumeric = false,\n   @color = (new Color 0, 0, 0),\n   @backgroundColor = nil,\n   @backgroundTransparency = nil\n   ) ->\n\n    super\n    @silentRawSetBounds new Rectangle 0,0,400,40\n    @fittingSpecWhenBoundsTooLarge = FittingSpecTextInLargerBounds.FLOAT\n    @fittingSpecWhenBoundsTooSmall = FittingSpecTextInSmallerBounds.SCALEDOWN\n    @maxTextWidth = true\n    @reLayout()\n\n\n  colloquialName: ->\n    "text"\n\n  initialiseDefaultWindowContentLayoutSpec: ->\n    super\n    @layoutSpecDetails.canSetHeightFreely = false\n\n  openTargetPropertySelector: (ignored, ignored2, theTarget) ->\n    debugger\n    [menuEntriesStrings, functionNamesStrings] = theTarget.stringSetters()\n    menu = new MenuMorph @, false, @, true, true, "choose target property:"\n    for i in [0...menuEntriesStrings.length]\n      menu.addMenuItem menuEntriesStrings[i], true, @, "setTargetAndActionWithOnesPickedFromMenu", nil, nil, nil, nil, nil, theTarget, functionNamesStrings[i]\n    if menuEntriesStrings.length == 0\n      menu = new MenuMorph @, false, @, true, true, "no target properties available"\n    menu.popUpAtHand()\n\n  stringSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!", "text"\n    functionNamesStrings.push "bang", "setText"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n    menu.removeMenuItem "soft wrap"\n    menu.removeMenuItem "soft wrap".tick()\n    menu.removeMenuItem "soft wrap"\n\n    menu.removeMenuItem "←☓→ don\'t expand to fill"\n    menu.removeMenuItem "←→ expand to fill"\n    menu.removeMenuItem "→← shrink to fit"\n    menu.removeMenuItem "→⋯← crop to fit"\n\n    menu.removeMenuItem "header line"\n    menu.removeMenuItem "no header line"\n\n    menu.removeMenuItem "↑ align top"\n    menu.removeMenuItem "⍿ align middle"\n    menu.removeMenuItem "↓ align bottom"\n\n    menu.addLine()\n    menu.addMenuItem "set target", true, @, "openTargetSelector", "select another morph\\nwhose numerical property\\nwill be " + "controlled by this one"\n\n    if @amIDirectlyInsideScrollPanelWdgt()\n      childrenNotCarets = @parent.children.filter (m) ->\n        !(m instanceof CaretMorph)\n      if childrenNotCarets.length == 1\n        menu.addLine()\n        if @parent.parent.isTextLineWrapping\n          menu.addMenuItem "☒ soft wrap", true, @, "softWrapOff"\n        else\n          menu.addMenuItem "☐ soft wrap", true, @, "softWrapOn"\n\n    menu.removeConsecutiveLines()\n\n\n  softWrapOn: ->\n    debugger\n\n    @parent.parent.isTextLineWrapping = true\n    @maxTextWidth = true\n\n    @parent.fullRawMoveTo @parent.parent.position()\n    @parent.rawSetExtent @parent.parent.extent()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  softWrapOff: ->\n\n    @parent.parent.isTextLineWrapping = false\n    @maxTextWidth = nil\n\n    @reLayout()\n\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  # the bang makes the node fire the current output value\n  bang: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @updateTarget()\n\n  # This is also invoked for example when you take a slider\n  # and set it to target this.\n  setText: (theTextContent, stringFieldMorph, connectionsCalculationToken, superCall) ->\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    super theTextContent, stringFieldMorph, connectionsCalculationToken, true\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n    @updateTarget()\n\n  updateTarget: ->\n    if @action and @action != ""\n      @target[@action].call @target, @text, nil, @connectionsCalculationToken\n    return\n\n  reactToTargetConnection: ->\n    @updateTarget()\n\n  toggleShowBlanks: ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n  \n  toggleWeight: ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n  \n  toggleItalic: ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  toggleIsPassword: ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  rawSetExtent: (aPoint) ->\n    super\n    @reLayout()\n\n  setFontSize: (sizeOrMorphGivingSize, morphGivingSize) ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  setFontName: (ignored1, ignored2, theNewFontName) ->\n    super\n    @reLayout()\n    @refreshScrollPanelWdgtOrVerticalStackIfIamInIt()\n\n  blendInWithPanelColor: ->\n    if @backgroundColor.eq WorldMorph.preferencesAndSettings.editableItemBackgroundColor\n      @setBackgroundColor new Color 249, 249, 249\n\n  contrastOutFromPanelColor: ->\n    if @backgroundColor.eq new Color 249, 249, 249\n      @setBackgroundColor WorldMorph.preferencesAndSettings.editableItemBackgroundColor\n\n  reLayout: ->\n    super()\n\n    if @maxTextWidth? and @maxTextWidth != 0\n      @softWrap = true\n      [@wrappedLines,@wrappedLineSlots,@widthOfPossiblyCroppedText,@heightOfPossiblyCroppedText] =\n        @breakTextIntoLines @text, @originallySetFontSize, @extent()\n      width = @width()\n    else\n      @softWrap = false\n      veryWideExtent = new Point 10000000, 10000000\n      [@wrappedLines,@wrappedLineSlots,@widthOfPossiblyCroppedText,@heightOfPossiblyCroppedText] =\n        @breakTextIntoLines @text, @originallySetFontSize, veryWideExtent\n      width = @widthOfPossiblyCroppedText\n\n    height = @wrappedLines.length *  Math.ceil fontHeight @originallySetFontSize\n    @silentRawSetExtent new Point width, height\n\n    @changed()\n    @notifyChildrenThatParentHasReLayouted()\n\n';
