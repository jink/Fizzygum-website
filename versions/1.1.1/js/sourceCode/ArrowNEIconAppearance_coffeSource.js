// Generated by CoffeeScript 1.12.7
window.ArrowNEIconAppearance_coffeSource = 'class ArrowNEIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    #// Bezier 2 Drawing\n    context.beginPath()\n    context.moveTo 16.12, 7.13\n    context.lineTo 16.26, 37.43\n    context.bezierCurveTo 16.26, 37.43, 26.86, 37.47, 41.89, 37.54\n    context.lineTo 6.73, 72.7\n    context.lineTo 27.62, 93.59\n    context.lineTo 62.78, 58.43\n    context.lineTo 62.89, 84.08\n    context.lineTo 93.2, 84.2\n    context.lineTo 92.84, 7.49\n    context.lineTo 16.12, 7.13\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 18.46, 9.47\n    context.lineTo 18.57, 35.02\n    context.bezierCurveTo 18.57, 35.02, 32.9, 35.08, 47.02, 35.14\n    context.lineTo 9.64, 72.52\n    context.lineTo 27.8, 90.68\n    context.lineTo 65.18, 53.3\n    context.lineTo 65.3, 81.76\n    context.lineTo 90.86, 81.87\n    context.lineTo 90.52, 9.8\n    context.lineTo 18.46, 9.47\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n\n';