// Generated by CoffeeScript 1.12.7
window.ColorPaletteNodeCreatorButtonWdgt_coffeSource = 'class ColorPaletteNodeCreatorButtonWdgt extends CreatorButtonWdgt\n\n  constructor: ->\n    super\n    @appearance = new ColorPalettePatchProgrammingIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @toolTipMessage = "color palette"\n\n  createWidgetToBeHandled: ->\n    switcherooWm = new WindowWdgt nil, nil, new ColorPaletteMorph(), true\n    switcherooWm.rawSetExtent new Point 200, 200\n    return switcherooWm\n\n\n';
