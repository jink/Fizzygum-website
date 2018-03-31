// Generated by CoffeeScript 1.10.0
window.EmptyButtonMorph_coffeSource = '# EmptyButtonMorph ////////////////////////////////////////////////////////\n\n# sends a message to a target object when pressed.\n# Doesn\'t have any particular shape, but can host\n# a morph to be used as "face"\n\n# REQUIRES HighlightableMixin\n\nclass EmptyButtonMorph extends Morph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  @augmentWith HighlightableMixin, @name\n\n  target: null\n  action: null\n  dataSourceMorphForTarget: null\n  morphEnv: null\n \n \n  doubleClickAction: null\n  argumentToAction1: null\n  argumentToAction2: null\n \n  hint: null\n \n  closesUnpinnedMenus: true\n  \n  # tells if the button represents a morph, in which\n  # case we are going to highlight the Morph on hover\n  representsAMorph: false\n\n\n  # overrides to superclass\n  color: new Color 255, 255, 255\n\n  constructor: (\n      @closesUnpinnedMenus = true,\n      @target = null,\n      @action = null,\n\n      @faceMorph = null,\n\n      @dataSourceMorphForTarget = null,\n      @morphEnv,\n      @hint = null,\n\n      @doubleClickAction = null,\n      @argumentToAction1 = null,\n      @argumentToAction2 = null,\n      @representsAMorph = false\n      ) ->\n\n    # additional properties:\n\n    super()\n\n    #@color = new Color 255, 152, 152\n    #@color = new Color 255, 255, 255\n    if @faceMorph?\n      @add @faceMorph\n      @layoutSubmorphs()\n  \n  layoutSubmorphs: (morphStartingTheChange = null) ->\n    super()\n    if @faceMorph.parent == @\n      @faceMorph.setBounds @bounds\n\n  # TODO\n  getTextDescription: ->\n\n    \n  # TriggerMorph action:\n  trigger: ->\n    if @action\n      if typeof @action is "function"\n        console.log "trigger invoked with function"\n        debugger\n        @action.call @target, @dataSourceMorphForTarget\n      else # assume it\'s a String\n        #console.log "@target: " + @target + " @morphEnv: " + @morphEnv\n        @target[@action].call @target, @dataSourceMorphForTarget, @morphEnv, @argumentToAction1, @argumentToAction2\n    return\n\n  triggerDoubleClick: ->\n    # same as trigger() but use doubleClickAction instead of action property\n    # note that specifying a doubleClickAction is optional\n    return  unless @doubleClickAction\n    if typeof @target is "function"\n      if typeof @doubleClickAction is "function"\n        @target.call @dataSourceMorphForTarget, @doubleClickAction.call(), this\n      else\n        @target.call @dataSourceMorphForTarget, @doubleClickAction, this\n    else\n      if typeof @doubleClickAction is "function"\n        @doubleClickAction.call @target\n      else # assume it\'s a String\n        @target[@doubleClickAction]()  \n\n  \n  mouseClickLeft: ->\n    if @closesUnpinnedMenus\n      @propagateKillMenus()\n    @trigger()\n    @escalateEvent "mouseClickLeft"\n\n  mouseDoubleClick: ->\n    @triggerDoubleClick()\n\n  # you shouldn\'t be able to floatDragging a compound\n  # morphs containing a trigger by dragging the trigger\n  # User might still move the trigger itself though\n  # (if it\'s unlocked)\n  rootForGrab: ->\n    if @isFloatDraggable()\n      return super()\n    null\n  \n  # TriggerMorph bubble help:\n  startCountdownForBubbleHelp: (contents) ->\n    SpeechBubbleMorph.createInAWhileIfHandStillContainedInMorph @, contents\n';