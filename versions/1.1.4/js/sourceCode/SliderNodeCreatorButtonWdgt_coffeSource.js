// Generated by CoffeeScript 1.12.7
window.SliderNodeCreatorButtonWdgt_coffeSource = 'class SliderNodeCreatorButtonWdgt extends CreatorButtonWdgt\n\n  constructor: ->\n    super\n    @appearance = new SliderNodeIconAppearance @, WorldMorph.preferencesAndSettings.iconDarkLineColor\n    @toolTipMessage = "slider node"\n\n  createWidgetToBeHandled: ->\n    switcherooWdgt = new SliderMorph nil, nil, nil, nil, nil, true\n    return switcherooWdgt\n\n\n';
