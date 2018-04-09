// Generated by CoffeeScript 1.12.7
window.BoldButtonWdgt_coffeSource = '# REQUIRES HighlightableMixin\n# REQUIRES ParentStainerMixin\n\nclass BoldButtonWdgt extends Widget\n\n  @augmentWith HighlightableMixin, @name\n  @augmentWith ParentStainerMixin, @name\n\n  color_hover: new Color 90, 90, 90\n  color_pressed: new Color 128, 128, 128\n  color_normal: new Color 230, 230, 230\n\n  constructor: ->\n    super\n    @appearance = new BoldIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @actionableAsThumbnail = true\n    @editorContentPropertyChangerButton = true\n    @toolTipMessage = "bold"\n\n  mouseClickLeft: ->\n    if world.lastNonTextPropertyChangerButtonClickedOrDropped?.toggleWeight?\n      world.lastNonTextPropertyChangerButtonClickedOrDropped.toggleWeight()\n';
