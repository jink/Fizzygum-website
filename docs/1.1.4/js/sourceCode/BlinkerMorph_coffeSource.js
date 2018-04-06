// Generated by CoffeeScript 1.12.7
window.BlinkerMorph_coffeSource = '# can be used for text caret\n\nclass BlinkerMorph extends Widget\n\n  constructor: (@fps = 2) ->\n    world.addSteppingMorph @\n    super()\n    @appearance = new RectangularAppearance @\n    @color = new Color 0, 0, 0\n  \n  # BlinkerMorph stepping:\n  step: ->\n    # if we are recording or playing a test\n    # then there is a flag we need to check that allows\n    # the world to control all the animations.\n    # This is so there is a consistent check\n    # when taking/comparing\n    # screenshots.\n    # So we check here that flag, and make the\n    # caret is always going to be visible.\n    if AutomatorRecorderAndPlayer? and\n     AutomatorRecorderAndPlayer.animationsPacingControl and\n     AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE\n      return\n \n    # in all other cases just\n    # do like usual, i.e. toggle\n    # visibility at the fps\n    # specified in the constructor.\n    @toggleVisibility()\n';