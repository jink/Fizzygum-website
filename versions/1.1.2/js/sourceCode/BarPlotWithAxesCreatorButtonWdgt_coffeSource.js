// Generated by CoffeeScript 1.12.7
window.BarPlotWithAxesCreatorButtonWdgt_coffeSource = 'class BarPlotWithAxesCreatorButtonWdgt extends CreatorButtonWdgt\n\n  constructor: ->\n    super\n    @appearance = new BarPlotIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @toolTipMessage = "bar plot"\n\n  createWidgetToBeHandled: ->\n    switcherooWm = new WindowWdgt nil, nil, new PlotWithAxesWdgt(new ExampleBarPlotWdgt()), true, true\n    switcherooWm.rawSetExtent new Point 200, 200\n\n    return switcherooWm\n';
