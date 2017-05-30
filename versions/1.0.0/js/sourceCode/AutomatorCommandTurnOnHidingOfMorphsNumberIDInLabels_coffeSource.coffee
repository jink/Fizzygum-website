window.AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels_coffeSource = '''
# 


class AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels extends AutomatorCommand

  @replayFunction: (automatorRecorderAndPlayer, commandBeingPlayed) ->
    automatorRecorderAndPlayer.turnOnHidingOfMorphsNumberIDInLabels()


  constructor: (automatorRecorderAndPlayer) ->
    super(automatorRecorderAndPlayer)
    # it's important that this is the same name of
    # the class cause we need to use the static method
    # replayFunction to replay the command
    @automatorCommandName = "AutomatorCommandTurnOnHidingOfMorphsNumberIDInLabels"

'''