// Generated by CoffeeScript 1.12.7
window.DiffingPatchNodeWdgt_coffeSource = '# REQUIRES ControllerMixin\n\nclass DiffingPatchNodeWdgt extends Widget\n\n  @augmentWith ControllerMixin\n\n  tempPromptEntryField: nil\n  defaultContents: nil\n  textMorph: nil\n\n  output: nil\n\n  input1: nil\n  input2: nil\n\n  # we need to keep track of which inputs are\n  # connected becayse we wait for those to be\n  # all updated before the node fires\n  setInput1IsConnected: false\n  setInput2IsConnected: false\n  setInput1HotIsConnected: false\n  setInput2HotConnected: false\n\n  # to keep track of whether each input is\n  # up-to-date or not\n  input1connectionsCalculationToken: 314\n  input2connectionsCalculationToken: 314\n\n  # the external padding is the space between the edges\n  # of the container and all of its internals. The reason\n  # you often set this to zero is because windows already put\n  # contents inside themselves with a little padding, so this\n  # external padding is not needed. Useful to keep it\n  # separate and know that it\'s working though.\n  externalPadding: 0\n  # the internal padding is the space between the internal\n  # components. It doesn\'t necessarily need to be equal to the\n  # external padding\n  internalPadding: 5\n\n  constructor: (@defaultContents = "") ->\n    super new Point 200,400\n    @buildAndConnectChildren()\n    @input1 = ""\n    @input2 = ""\n\n  colloquialName: ->\n    "Diffing patch node"\n\n  setInput1: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    debugger\n    if !superCall and connectionsCalculationToken == @input1connectionsCalculationToken then return else if !connectionsCalculationToken? then @input1connectionsCalculationToken = getRandomInt -20000, 20000 else @input1connectionsCalculationToken = connectionsCalculationToken\n    @input1 = newvalue\n    @updateTarget @input1connectionsCalculationToken\n\n  setInput2: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    debugger\n    if !superCall and connectionsCalculationToken == @input2connectionsCalculationToken then return else if !connectionsCalculationToken? then @input2connectionsCalculationToken = getRandomInt -20000, 20000 else @input2connectionsCalculationToken = connectionsCalculationToken\n    @input1 = newvalue\n    @updateTarget @input2connectionsCalculationToken\n\n  setInput1Hot: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    debugger\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @input1 = newvalue\n    @updateTarget @connectionsCalculationToken, false, true\n\n  setInput2Hot: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    debugger\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @input2 = newvalue\n    @updateTarget @connectionsCalculationToken, false, true\n\n  # the bang makes the node fire the current output value\n  bang: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    debugger\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @updateTarget @connectionsCalculationToken, true\n\n  openTargetPropertySelector: (ignored, ignored2, theTarget) ->\n    [menuEntriesStrings, functionNamesStrings] = theTarget.numericalSetters()\n    menu = new MenuMorph @, false, @, true, true, "choose target property:"\n    for i in [0...menuEntriesStrings.length]\n      menu.addMenuItem menuEntriesStrings[i], true, @, "setTargetAndActionWithOnesPickedFromMenu", nil, nil, nil, nil, nil, theTarget, functionNamesStrings[i]\n    if menuEntriesStrings.length == 0\n      menu = new MenuMorph @, false, @, true, true, "no target properties available"\n    menu.popUpAtHand()\n\n  updateTarget: (tokenToCheckIfEqual, directFireViaBang, fireViaHotInput) ->\n    debugger\n\n    if !@setInput1IsConnected and\n     !@setInput2IsConnected and\n     !@setInput1HotIsConnected and\n     !@setInput2HotIsConnected\n      return\n\n    okToFire = true\n    if @setInput1IsConnected\n      if @input1connectionsCalculationToken != tokenToCheckIfEqual\n        okToFire = false\n    if @setInput2IsConnected\n      if @input2connectionsCalculationToken != tokenToCheckIfEqual\n        okToFire = false\n\n    # if we are firing via bang then we use\n    # the existing output value, we don\'t\n    # recalculate a new one\n    if (okToFire or fireViaHotInput) and !directFireViaBang\n      # note that we calculate an output value\n      # even if this node has no target. This\n      # is because the node might be visualising the\n      # output in some other way.\n      @doCalculation()\n\n    # if all the connected inputs are fresh OR we\n    # are firing via bang, then at this point we\n    # are going to update the target with the output\n    # value.\n    if okToFire or fireViaHotInput or directFireViaBang      \n      @fireOutputToTarget tokenToCheckIfEqual\n\n    return    \n\n  fireOutputToTarget: (calculationToken) ->\n    # mark this node as fired.\n    # if the update DOES come from the "bang!", then\n    # @connectionsCalculationToken has already been updated\n    # but we keep it simple and re-assign it here, not\n    # worth complicating things with an additional check\n    @connectionsCalculationToken = calculationToken\n\n    if @action and @action != ""\n      @target[@action].call @target, @output, nil, @connectionsCalculationToken\n\n  reactToTargetConnection: ->\n    # we generate a new calculation token, that\'s OK because\n    # we are definitely not in the middle of the calculation here\n    # but we might be starting a new chain of calculations\n    @fireOutputToTarget getRandomInt -20000, 20000\n\n  doCalculation: ->\n    debugger\n    @output = @formattedDiff @input1, @input2\n    @textMorph.setText @output\n\n\n  stringSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!", "in1", "in2", "in1 hot", "in2 hot"\n    functionNamesStrings.push "bang", "setInput1", "setInput2", "setInput1Hot", "setInput2Hot"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n  numericalSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!", "in1", "in2", "in1 hot", "in2 hot"\n    functionNamesStrings.push "bang", "setInput1", "setInput2", "setInput1Hot", "setInput2Hot"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n    menu.addLine()\n    menu.addMenuItem "set target", true, @, "openTargetSelector", "select another morph\\nwhose numerical property\\nwill be " + "controlled by this one"\n\n\n  buildAndConnectChildren: ->\n    debugger\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    @tempPromptEntryField = new SimplePlainTextScrollPanelWdgt @defaultContents, false, 5\n    @tempPromptEntryField.disableDrops()\n    @tempPromptEntryField.contents.disableDrops()\n    @tempPromptEntryField.color = new Color 255, 255, 255\n\n    @textMorph = @tempPromptEntryField.textWdgt\n    @textMorph.backgroundColor = new Color 0,0,0,0\n    @textMorph.setFontName nil, nil, @textMorph.monoFontStack\n    @textMorph.isEditable = true\n    @textMorph.enableSelecting()\n\n    @add @tempPromptEntryField\n\n\n    @invalidateLayout()\n\n  doLayout: (newBoundsForThisLayout) ->\n    if !window.recalculatingLayouts\n      debugger\n\n    if @isCollapsed()\n      @layoutIsValid = true\n      @notifyChildrenThatParentHasReLayouted()\n      return\n\n    super\n    debugger\n\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Widget. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    textHeight = @height() - 2 * @externalPadding\n    textBottom = @top() + @externalPadding + textHeight\n\n    if @tempPromptEntryField.parent == @\n      @tempPromptEntryField.fullRawMoveTo new Point @left() + @externalPadding, @top() + @externalPadding\n      @tempPromptEntryField.rawSetExtent new Point @width() - 2 * @externalPadding, textHeight\n\n\n\n    trackChanges.pop()\n    @fullChanged()\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n  # Simple Diff function\n  # (C) Paul Butler 2008 <http://www.paulbutler.org/>\n  # https://github.com/paulgb/simplediff/blob/master/coffeescript/simplediff.coffee\n  diff: (before, after) ->\n      # Find the differences between two lists. Returns a list of pairs, where the first value\n      # is in [\'+\',\'-\',\'=\'] and represents an insertion, deletion, or no change for that list.\n      # The second value of the pair is the element.\n\n      # Build a hash map with elements from before as keys, and\n      # a list of indexes as values\n      ohash = {}\n      for val, i in before\n          if val not of ohash\n              ohash[val] = []\n          ohash[val].push i\n\n      # Find the largest substring common to before and after\n      lastRow = (0 for i in [0 ... before.length])\n      subStartBefore = subStartAfter = subLength = 0\n      for val, j in after\n          thisRow = (0 for i in [0 ... before.length])\n          for k in ohash[val] ? []\n              thisRow[k] = (if k and lastRow[k - 1] then 1 else 0) + 1\n              if thisRow[k] > subLength\n                  subLength = thisRow[k]\n                  subStartBefore = k - subLength + 1\n                  subStartAfter = j - subLength + 1\n          lastRow = thisRow\n\n      # If no common substring is found, assume that an insert and\n      # delete has taken place\n      if subLength == 0\n          [].concat(\n              (if before.length then [[\'-\', before]] else []),\n              (if after.length then [[\'+\', after]] else []),\n          )\n\n      # Otherwise, the common substring is considered to have no change, and we recurse\n      # on the text before and after the substring\n      else\n          [].concat(\n              @diff(before[...subStartBefore], after[...subStartAfter]),\n              [[\'=\', after[subStartAfter...subStartAfter + subLength]]],\n              @diff(before[subStartBefore + subLength...], after[subStartAfter + subLength...])\n          )\n\n  # The below functions are intended for simple tests and experimentation; you will want to write more sophisticated wrapper functions for real use\n\n  stringDiff: (before, after) ->\n      # Returns the difference between the before and after strings when split on whitespace. Considers punctuation a part of the word\n      @diff(before.split(/[ ]+/), after.split(/[ ]+/))\n\n  formattedDiff: (before, after) ->\n      con =\n          \'=\': ((x) -> x),\n          \'+\': ((x) -> \'+(\' + x + \')\'),\n          \'-\': ((x) -> \'-(\' + x + \')\')\n      ((con[a])(b.join \' \') for [a, b] in @stringDiff(before, after)).join \' \'\n\n';
