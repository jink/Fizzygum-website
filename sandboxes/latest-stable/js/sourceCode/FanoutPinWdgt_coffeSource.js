// Generated by CoffeeScript 1.12.7
window.FanoutPinWdgt_coffeSource = 'class FanoutPinWdgt extends Widget\n\n  @augmentWith ControllerMixin\n\n  inputValue: nil\n  target: nil\n  action: nil\n\n  constructor: (@color) ->\n    super\n    @appearance = new FanoutPinAppearance @\n\n  setInput: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @inputValue = newvalue\n    @updateTarget()\n\n  stringSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!"\n    functionNamesStrings.push "bang"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n  numericalSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!"\n    functionNamesStrings.push "bang"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n  colorSetters: (menuEntriesStrings, functionNamesStrings) ->\n    [menuEntriesStrings, functionNamesStrings] = super menuEntriesStrings, functionNamesStrings\n    menuEntriesStrings.push "bang!"\n    functionNamesStrings.push "bang"\n    return @deduplicateSettersAndSortByMenuEntryString menuEntriesStrings, functionNamesStrings\n\n\n  # the bang makes the node fire the current output value\n  bang: (newvalue, ignored, connectionsCalculationToken, superCall) ->\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @updateTarget()\n\n\n  updateTarget: ->\n    if @action and @action != ""\n      @target[@action].call @target, @inputValue, nil, @connectionsCalculationToken\n    return    \n\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n    menu.addLine()\n    if world.isIndexPage\n      menu.addMenuItem "connect to ➜", true, @, "openTargetSelector", "connect to\\nanother widget"\n    else\n      menu.addMenuItem "set target", true, @, "openTargetSelector", "choose another morph\\nwhose color property\\n will be" + " controlled by this one"\n\n  openTargetPropertySelector: (ignored, ignored2, theTarget) ->\n    [menuEntriesStrings, functionNamesStrings] = theTarget.allSetters()\n    menu = new MenuMorph @, false, @, true, true, "choose target property:"\n    for i in [0...menuEntriesStrings.length]\n      menu.addMenuItem menuEntriesStrings[i], true, @, "setTargetAndActionWithOnesPickedFromMenu", nil, nil, nil, nil, nil, theTarget, functionNamesStrings[i]\n    if menuEntriesStrings.length == 0\n      menu = new MenuMorph @, false, @, true, true, "no target properties available"\n    menu.popUpAtHand()\n\n  reactToTargetConnection: ->\n    @parent.updateTarget()\n';
