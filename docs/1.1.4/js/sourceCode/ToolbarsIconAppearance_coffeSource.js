// Generated by CoffeeScript 1.12.7
window.ToolbarsIconAppearance_coffeSource = 'class ToolbarsIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    toolbarsHeaderLineColorString = \'rgb(255, 255, 255)\'\n    toolbarsHeaderBackgroundColorString = \'rgb(170, 170, 170)\'\n\n    #// Group 23\n    #// Bezier 2 Drawing\n    context.beginPath()\n    context.moveTo 41.5, 6.5\n    context.lineTo 58.5, 6.5\n    context.lineTo 58.5, 28.5\n    context.bezierCurveTo 58.5, 28.5, 62.75, 24, 66.5, 23.5\n    context.bezierCurveTo 70.25, 23, 75.5, 29.5, 75.5, 26.5\n    context.bezierCurveTo 75.5, 23.5, 78.25, 22, 76.5, 19.5\n    context.bezierCurveTo 74.75, 17, 70.25, 18, 68.5, 16.5\n    context.bezierCurveTo 66.75, 15, 67.75, 14.25, 69.5, 13.5\n    context.bezierCurveTo 71.25, 12.75, 72, 10.25, 75.5, 13.5\n    context.bezierCurveTo 79, 16.75, 81.5, 21.5, 83.5, 26.5\n    context.bezierCurveTo 85.5, 31.5, 83.5, 33.5, 83.5, 33.5\n    context.lineTo 60.5, 40.5\n    context.lineTo 76.5, 84.5\n    context.lineTo 58.5, 82.5\n    context.lineTo 58.5, 92.5\n    context.lineTo 39.5, 92.5\n    context.lineTo 39.5, 82.5\n    context.lineTo 22.5, 84.5\n    context.lineTo 37.5, 40.5\n    context.lineTo 30.5, 40.5\n    context.lineTo 15.5, 33.5\n    context.bezierCurveTo 15.5, 33.5, 15.75, 24.5, 18.5, 19.5\n    context.bezierCurveTo 21.25, 14.5, 23.5, 14.25, 26.5, 13.5\n    context.bezierCurveTo 29.5, 12.75, 31.5, 15, 30.5, 16.5\n    context.bezierCurveTo 29.5, 18, 24.5, 17, 22.5, 19.5\n    context.bezierCurveTo 20.5, 22, 20.5, 25.5, 22.5, 26.5\n    context.bezierCurveTo 24.5, 27.5, 26, 23, 30.5, 23.5\n    context.bezierCurveTo 35, 24, 41.5, 28.5, 41.5, 28.5\n    context.lineTo 41.5, 6.5\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    context.strokeStyle = outlineColorString\n    context.lineWidth = 7\n    context.stroke()\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 38.85, 36.81\n    context.lineTo 22.35, 84.12\n    context.bezierCurveTo 22.35, 84.12, 28.76, 82.81, 38.85, 82.22\n    context.lineTo 38.85, 36.81\n    context.closePath()\n    context.moveTo 60.15, 36.81\n    context.lineTo 60.15, 82.22\n    context.bezierCurveTo 70.24, 82.81, 76.65, 84.12, 76.65, 84.12\n    context.lineTo 60.15, 36.81\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n    #// toolbar 3\n    #// Group 13\n    #// Rectangle 12 Drawing\n    context.beginPath()\n    context.rect 41.5, 16.5, 16, 15\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 12 Drawing\n    context.beginPath()\n    context.moveTo 46.42, 21.12\n    context.lineTo 52.58, 21.12\n    context.lineTo 52.58, 26.88\n    context.lineTo 46.42, 26.88\n    context.lineTo 46.42, 21.12\n    context.closePath()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Rectangle 13 Drawing\n    context.beginPath()\n    context.rect 41.5, 7.5, 16, 9\n    context.fillStyle = toolbarsHeaderBackgroundColorString\n    context.fill()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 13 Drawing\n    context.beginPath()\n    context.moveTo 43.96, 12.16\n    context.lineTo 55.04, 12.16\n    context.strokeStyle = toolbarsHeaderLineColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Group 14\n    #// Rectangle 14 Drawing\n    context.beginPath()\n    context.rect 41.5, 31.5, 16, 16\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 14 Drawing\n    context.beginPath()\n    context.moveTo 46.42, 36.42\n    context.lineTo 52.58, 36.42\n    context.lineTo 52.58, 42.58\n    context.lineTo 46.42, 42.58\n    context.lineTo 46.42, 36.42\n    context.closePath()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Group 15\n    #// Rectangle 15 Drawing\n    context.beginPath()\n    context.rect 41.5, 47.5, 16, 15\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 15 Drawing\n    context.beginPath()\n    context.moveTo 46.42, 52.12\n    context.lineTo 52.58, 52.12\n    context.lineTo 52.58, 57.88\n    context.lineTo 46.42, 57.88\n    context.lineTo 46.42, 52.12\n    context.closePath()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Group 16\n    #// Rectangle 16 Drawing\n    context.beginPath()\n    context.rect 41.5, 62.5, 16, 15\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 16 Drawing\n    context.beginPath()\n    context.moveTo 46.42, 67.12\n    context.lineTo 52.58, 67.12\n    context.lineTo 52.58, 72.88\n    context.lineTo 46.42, 72.88\n    context.lineTo 46.42, 67.12\n    context.closePath()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Group 17\n    #// Rectangle 17 Drawing\n    context.beginPath()\n    context.rect 41.5, 77.5, 16, 15\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 17 Drawing\n    context.beginPath()\n    context.moveTo 46.42, 82.12\n    context.lineTo 52.58, 82.12\n    context.lineTo 52.58, 87.88\n    context.lineTo 46.42, 87.88\n    context.lineTo 46.42, 82.12\n    context.closePath()\n    context.strokeStyle = iconColorString\n    context.lineWidth = 1\n    context.stroke()\n    #// Bezier 3 Drawing\n    context.beginPath()\n    context.moveTo 37.99, 38.14\n    context.bezierCurveTo 36.88, 38.4, 35.77, 38.4, 34.83, 38.4\n    context.bezierCurveTo 30.29, 38.4, 27.21, 37.19, 24.39, 36.06\n    context.bezierCurveTo 21.91, 35.11, 15.67, 33.9, 15.58, 33.29\n    context.bezierCurveTo 14.73, 29.22, 19.09, 16.93, 24.13, 13.56\n    context.bezierCurveTo 25.93, 12.35, 27.81, 12.35, 29.35, 13.47\n    context.bezierCurveTo 30.55, 14.34, 30.89, 15.63, 30.38, 16.85\n    context.bezierCurveTo 29.78, 18.32, 23.98, 19.44, 22.1, 19.7\n    context.bezierCurveTo 22.36, 21.61, 22.5, 24.5, 23.33, 26.9\n    context.bezierCurveTo 25.38, 25.6, 29.78, 22.91, 32, 23.51\n    context.bezierCurveTo 33.46, 23.94, 37.85, 25.24, 38.45, 29.57\n    context.strokeStyle = iconColorString\n    context.lineWidth = 3\n    context.miterLimit = 4\n    context.lineCap = \'round\'\n    context.stroke()\n    #// Bezier 4 Drawing\n    context.beginPath()\n    context.moveTo 60.96, 38.14\n    context.bezierCurveTo 62.07, 38.4, 63.18, 38.4, 64.12, 38.4\n    context.bezierCurveTo 68.66, 38.4, 71.73, 37.19, 74.56, 36.06\n    context.bezierCurveTo 77.04, 35.11, 83.28, 33.9, 83.37, 33.29\n    context.bezierCurveTo 84.22, 29.22, 79.86, 16.93, 74.81, 13.56\n    context.bezierCurveTo 73.02, 12.35, 71.14, 12.35, 69.6, 13.47\n    context.bezierCurveTo 68.4, 14.34, 68.06, 15.63, 68.57, 16.85\n    context.bezierCurveTo 69.17, 18.32, 74.96, 19.44, 76.85, 19.7\n    context.bezierCurveTo 76.59, 21.61, 76.45, 24.5, 75.62, 26.9\n    context.bezierCurveTo 73.56, 25.6, 69.17, 22.91, 66.95, 23.51\n    context.bezierCurveTo 65.49, 23.94, 61.1, 25.24, 60.5, 29.57\n    context.strokeStyle = iconColorString\n    context.lineWidth = 3\n    context.miterLimit = 4\n    context.lineCap = \'round\'\n    context.stroke()\n\n';