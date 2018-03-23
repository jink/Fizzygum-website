// Generated by CoffeeScript 1.12.7
window.BoldIconAppearance_coffeSource = 'class BoldIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    #// Group\n    #// outline Drawing\n    context.beginPath()\n    context.moveTo 75.92, 47.24\n    context.bezierCurveTo 85.02, 49.36, 95.98, 49.61, 97, 71.59\n    context.bezierCurveTo 98.07, 94.8, 70.84, 98, 57.27, 98\n    context.lineTo 8.55, 98\n    context.lineTo 8.55, 90.39\n    context.bezierCurveTo 12.99, 90.39, 16.57, 89.15, 16.57, 89.15\n    context.bezierCurveTo 20.91, 85.53, 20.85, 86.37, 20.85, 81.2\n    context.bezierCurveTo 20.85, 81.2, 21.98, 19.78, 19.89, 14.29\n    context.bezierCurveTo 17.81, 8.8, 12.94, 9.89, 8.55, 9.89\n    context.lineTo 8.55, 2.27\n    context.lineTo 54.51, 2.27\n    context.bezierCurveTo 65.49, 2.27, 73.27, 3.25, 77.84, 5.2\n    context.bezierCurveTo 82.41, 7.16, 92.52, 13, 92.61, 26.35\n    context.bezierCurveTo 92.71, 40.39, 84.36, 45.13, 75.92, 47.24\n    context.closePath()\n    context.moveTo 47.19, 53.84\n    context.lineTo 46.91, 87.96\n    context.bezierCurveTo 46.91, 87.96, 66.46, 92.43, 68.11, 74.5\n    context.bezierCurveTo 70, 54, 54.4, 53.79, 47.19, 53.84\n    context.closePath()\n    context.moveTo 64.86, 28.27\n    context.bezierCurveTo 63.71, 11.55, 54.07, 12.59, 47.18, 12.64\n    context.lineTo 47.18, 43.33\n    context.bezierCurveTo 47.18, 43.33, 66, 45, 64.86, 28.27\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// letter B bold Drawing\n    context.beginPath()\n    context.moveTo 68.76, 47.43\n    context.bezierCurveTo 77.24, 49.4, 93.05, 49.64, 94, 70.25\n    context.bezierCurveTo 95, 92, 69.62, 95, 56.97, 95\n    context.lineTo 11.55, 95\n    context.lineTo 11.55, 92.55\n    context.bezierCurveTo 15.69, 92.55, 19.96, 91.39, 19.96, 91.39\n    context.bezierCurveTo 24, 88, 23.94, 84.1, 23.94, 79.26\n    context.bezierCurveTo 23.94, 79.26, 25, 17, 23.06, 11.85\n    context.bezierCurveTo 21.11, 6.71, 15.65, 7.72, 11.55, 7.72\n    context.lineTo 11.55, 5.27\n    context.lineTo 54.39, 5.27\n    context.bezierCurveTo 64.63, 5.27, 71.88, 6.19, 76.14, 8.02\n    context.bezierCurveTo 80.4, 9.85, 89.82, 15.33, 89.91, 27.84\n    context.bezierCurveTo 90, 41, 76.63, 45.44, 68.76, 47.43\n    context.closePath()\n    context.moveTo 44.77, 50.79\n    context.lineTo 44.52, 90.28\n    context.bezierCurveTo 44.52, 90.28, 71, 95, 70.8, 72.98\n    context.bezierCurveTo 70.57, 47.79, 51.49, 50.75, 44.77, 50.79\n    context.closePath()\n    context.moveTo 67.77, 28.77\n    context.bezierCurveTo 66.54, 7.54, 51.18, 10.26, 44.77, 10.3\n    context.lineTo 44.77, 45.63\n    context.bezierCurveTo 44.77, 45.63, 69, 50, 67.77, 28.77\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n\n';
