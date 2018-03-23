// Generated by CoffeeScript 1.12.7
window.GlassBoxTopWdgt_coffeSource = '# REQUIRES HighlightableMixin\n# REQUIRES WidgetCreatorAndSmartPlacerOnClickMixin\n\n# If the widget in the tool panel doesn\'t\n# need to be interactive (i.e. it\'s just there\n# to be dragged out, then we should put\n# this glass top on it, so that it prevents\n# mouse actions to reach the widget, and it\n# provides a larger target area to grab the\n# widget)\n\nclass GlassBoxTopWdgt extends Widget\n\n  @augmentWith HighlightableMixin, @name\n  @augmentWith WidgetCreatorAndSmartPlacerOnClickMixin, @name\n\n  createWidgetToBeHandled: ->\n    widgetToBeHandled = @parent.children[0].fullCopy()\n    widgetToBeHandled.isTemplate = false\n    return widgetToBeHandled\n\n  # grab the widget inside the glass box\n  # i.e. the first child of my parent\n  # i.e. the first child of the glass box bottom\n  findRootForGrab: ->\n    return @parent.children[0]\n\n  setColor: (theColor, ignored, connectionsCalculationToken, superCall) ->\n    if !superCall and connectionsCalculationToken == @connectionsCalculationToken then return else if !connectionsCalculationToken? then @connectionsCalculationToken = getRandomInt -20000, 20000 else @connectionsCalculationToken = connectionsCalculationToken\n    @parent?.setColor theColor, ignored, connectionsCalculationToken\n';
