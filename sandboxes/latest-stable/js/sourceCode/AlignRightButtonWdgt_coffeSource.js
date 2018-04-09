// Generated by CoffeeScript 1.12.7
window.AlignRightButtonWdgt_coffeSource = '# REQUIRES HighlightableMixin\n# REQUIRES ParentStainerMixin\n\nclass AlignRightButtonWdgt extends Widget\n\n  @augmentWith HighlightableMixin, @name\n  @augmentWith ParentStainerMixin, @name\n\n  color_hover: new Color 90, 90, 90\n  color_pressed: new Color 128, 128, 128\n  color_normal: new Color 230, 230, 230\n\n  constructor: (@color) ->\n    super\n    @appearance = new AlignRightIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @actionableAsThumbnail = true\n    @editorContentPropertyChangerButton = true\n    @toolTipMessage = "align right"\n\n  mouseClickLeft: ->\n    if world.lastNonTextPropertyChangerButtonClickedOrDropped?.alignRight?\n      world.lastNonTextPropertyChangerButtonClickedOrDropped.alignRight()\n    else if world.lastNonTextPropertyChangerButtonClickedOrDropped?\n      lastNonTextPropertyChangerButtonClickedOrDropped = world.lastNonTextPropertyChangerButtonClickedOrDropped.findRootForGrab()\n      if lastNonTextPropertyChangerButtonClickedOrDropped?.layoutSpec? and\n       lastNonTextPropertyChangerButtonClickedOrDropped.layoutSpec == LayoutSpec.ATTACHEDAS_VERTICAL_STACK_ELEMENT\n        lastNonTextPropertyChangerButtonClickedOrDropped.layoutSpecDetails.setAlignmentToRight()\n\n\n';
