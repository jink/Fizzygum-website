// Generated by CoffeeScript 1.12.7
window.ArrowSEIconAppearance_coffeSource = 'class ArrowSEIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    #// Bezier 2 Drawing\n    context.beginPath()\n    context.moveTo 93.37, 16.62\n    context.lineTo 63.07, 16.76\n    context.bezierCurveTo 63.07, 16.76, 63.03, 27.36, 62.96, 42.39\n    context.lineTo 27.8, 7.23\n    context.lineTo 6.91, 28.12\n    context.lineTo 42.07, 63.28\n    context.lineTo 16.42, 63.39\n    context.lineTo 16.3, 93.7\n    context.lineTo 93.01, 93.34\n    context.lineTo 93.37, 16.62\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 91.03, 18.96\n    context.lineTo 65.48, 19.07\n    context.bezierCurveTo 65.48, 19.07, 65.42, 33.4, 65.36, 47.52\n    context.lineTo 27.98, 10.14\n    context.lineTo 9.82, 28.3\n    context.lineTo 47.2, 65.68\n    context.lineTo 18.74, 65.8\n    context.lineTo 18.63, 91.36\n    context.lineTo 90.7, 91.02\n    context.lineTo 91.03, 18.96\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n';
