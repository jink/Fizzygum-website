// Generated by CoffeeScript 1.12.7
window.GrayscalePaletteNodeCreatorButtonWdgt_coffeSource = 'class GrayscalePaletteNodeCreatorButtonWdgt extends CreatorButtonWdgt\n\n  constructor: ->\n    super\n    @appearance = new GrayscalePalettePatchProgrammingIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @toolTipMessage = "grayscale palette"\n\n  createWidgetToBeHandled: ->\n    switcherooWm = new WindowWdgt nil, nil, new GrayPaletteMorph(), true\n    switcherooWm.rawSetExtent new Point 200, 200\n    return switcherooWm\n\n\n';
