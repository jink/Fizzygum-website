// Generated by CoffeeScript 1.10.0
window.AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels_coffeSource = '# \n\n\nclass AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels extends AutomatorCommand\n\n  @replayFunction: (automatorRecorderAndPlayer, commandBeingPlayed) ->\n    automatorRecorderAndPlayer.turnOnHidingOfMorphsNumberIDInLabels()\n\n\n  constructor: (automatorRecorderAndPlayer) ->\n    super(automatorRecorderAndPlayer)\n    # it\'s important that this is the same name of\n    # the class cause we need to use the static method\n    # replayFunction to replay the command\n    @automatorCommandName = "AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels"\n';