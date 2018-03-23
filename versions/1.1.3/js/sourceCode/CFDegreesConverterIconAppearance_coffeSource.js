// Generated by CoffeeScript 1.12.7
window.CFDegreesConverterIconAppearance_coffeSource = 'class CFDegreesConverterIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    #// degrees writings\n    #// degrees F\n    #// degrees of F outline Drawing\n    @oval context, 67, 6.5, 13, 13\n    context.fillStyle = \'rgb(170, 170, 170)\'\n    context.fill()\n    #// F letter outline Drawing\n    context.beginPath()\n    context.moveTo 82, 16\n    context.lineTo 82, 37\n    context.moveTo 82, 16\n    context.lineTo 93.5, 16\n    context.moveTo 82, 26\n    context.lineTo 87, 26\n    context.strokeStyle = outlineColorString\n    context.lineWidth = 7\n    context.lineCap = \'round\'\n    context.stroke()\n    #// degrees of F Drawing\n    @oval context, 70, 9.5, 7, 7\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2.5\n    context.stroke()\n    #// F letter Drawing\n    context.beginPath()\n    context.moveTo 95, 16.49\n    context.bezierCurveTo 95, 17.35, 94.26, 18.06, 93.36, 18.06\n    context.lineTo 83.53, 18.06\n    context.bezierCurveTo 83.53, 18.06, 83.53, 20.47, 83.53, 23.56\n    context.bezierCurveTo 83.68, 23.52, 83.84, 23.5, 84, 23.5\n    context.lineTo 86, 23.5\n    context.bezierCurveTo 87.1, 23.5, 88, 24.4, 88, 25.5\n    context.bezierCurveTo 88, 26.6, 87.1, 27.5, 86, 27.5\n    context.lineTo 84, 27.5\n    context.bezierCurveTo 83.84, 27.5, 83.68, 27.48, 83.53, 27.44\n    context.bezierCurveTo 83.53, 32.18, 83.53, 36.94, 83.53, 36.94\n    context.bezierCurveTo 83.53, 37.81, 82.79, 38.52, 81.89, 38.52\n    context.bezierCurveTo 80.99, 38.52, 80.25, 37.81, 80.25, 36.94\n    context.bezierCurveTo 80.25, 36.94, 80.25, 36.14, 80.25, 34.86\n    context.bezierCurveTo 80.25, 29.66, 80.25, 16.49, 80.25, 16.49\n    context.bezierCurveTo 80.25, 15.62, 80.99, 14.92, 81.89, 14.92\n    context.lineTo 93.36, 14.92\n    context.bezierCurveTo 94.26, 14.92, 95, 15.62, 95, 16.49\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n    #// degrees C\n    #// degrees of C outline Drawing\n    @oval context, 2.5, 6.5, 13, 13\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// C letter outline Drawing\n    context.beginPath()\n    context.moveTo 23.94, 40.02\n    context.bezierCurveTo 16.42, 40.02, 10.28, 33.76, 10.28, 26.07\n    context.bezierCurveTo 10.28, 18.39, 16.42, 12.13, 23.94, 12.13\n    context.bezierCurveTo 27.56, 12.13, 32.1, 14.34, 33.55, 16.17\n    context.bezierCurveTo 35, 18, 34.15, 19.76, 33.56, 20.36\n    context.bezierCurveTo 32.99, 20.97, 31.82, 21.91, 29.42, 21.37\n    context.bezierCurveTo 27.01, 20.84, 28.89, 18.46, 23.94, 18.23\n    context.bezierCurveTo 19, 18, 16, 23, 16.32, 26.07\n    context.bezierCurveTo 16.64, 29.15, 18.09, 33.92, 23.94, 33.92\n    context.bezierCurveTo 26.76, 33.92, 27.01, 31.56, 29.42, 30.78\n    context.bezierCurveTo 31.82, 30, 32.99, 31.19, 33.56, 31.79\n    context.bezierCurveTo 34.15, 32.39, 34.14, 35.38, 33.55, 35.98\n    context.bezierCurveTo 30.97, 38.58, 27.56, 40.02, 23.94, 40.02\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// C letter Drawing\n    context.beginPath()\n    context.moveTo 23.64, 38.02\n    context.bezierCurveTo 17.38, 38.02, 12.28, 32.66, 12.28, 26.07\n    context.bezierCurveTo 12.28, 19.49, 17.38, 14.13, 23.64, 14.13\n    context.bezierCurveTo 26.65, 14.13, 29.48, 15.36, 31.63, 17.59\n    context.bezierCurveTo 32.12, 18.11, 32.13, 18.96, 31.64, 19.47\n    context.bezierCurveTo 31.16, 19.99, 30.35, 20, 29.85, 19.48\n    context.bezierCurveTo 28.19, 17.75, 25.99, 16.79, 23.64, 16.79\n    context.bezierCurveTo 18.77, 16.79, 14.81, 20.95, 14.81, 26.07\n    context.bezierCurveTo 14.81, 31.2, 18.77, 35.36, 23.64, 35.36\n    context.bezierCurveTo 25.98, 35.36, 28.19, 34.41, 29.85, 32.67\n    context.bezierCurveTo 30.35, 32.16, 31.16, 32.17, 31.64, 32.68\n    context.bezierCurveTo 32.13, 33.2, 32.12, 34.05, 31.63, 34.56\n    context.bezierCurveTo 29.48, 36.79, 26.65, 38.02, 23.64, 38.02\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n    #// degrees of C Drawing\n    @oval context, 5.5, 9.5, 7, 7\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2.5\n    context.stroke()\n    #// thermometer with lines\n    #// thermometer outline Drawing\n    context.beginPath()\n    context.moveTo 51.3, 2\n    context.bezierCurveTo 44.58, 1.97, 38.95, 6.05, 38.92, 12.2\n    context.lineTo 38.92, 64.3\n    context.bezierCurveTo 34.19, 67.67, 32, 72.85, 32, 78.71\n    context.bezierCurveTo 32, 88.82, 40.17, 98, 51.34, 98\n    context.bezierCurveTo 62.5, 98, 70.67, 88.82, 70.67, 78.71\n    context.bezierCurveTo 70.67, 72.84, 68.47, 67.64, 63.72, 64.27\n    context.bezierCurveTo 63.52, 45.14, 64, 30.33, 63.69, 12.2\n    context.bezierCurveTo 63.72, 6.05, 58.09, 1.97, 51.3, 2\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    #// thermometer Drawing\n    context.beginPath()\n    context.moveTo 51.31, 4.82\n    context.bezierCurveTo 45.82, 4.79, 41.22, 8.56, 41.19, 14.24\n    context.lineTo 41.19, 64.94\n    context.bezierCurveTo 37.33, 68.05, 34.78, 72.83, 34.78, 78.24\n    context.bezierCurveTo 34.78, 87.57, 42.22, 95.18, 51.34, 95.18\n    context.bezierCurveTo 60.46, 95.18, 67.89, 87.57, 67.89, 78.24\n    context.bezierCurveTo 67.89, 72.82, 65.33, 68.02, 61.45, 64.91\n    context.bezierCurveTo 61.29, 47.26, 61.68, 30.98, 61.42, 14.24\n    context.bezierCurveTo 61.45, 8.56, 56.85, 4.79, 51.31, 4.82\n    context.closePath()\n    context.moveTo 51.28, 8.59\n    context.bezierCurveTo 54.1, 8.56, 57.77, 10.44, 57.74, 14.24\n    context.bezierCurveTo 57.8, 31.68, 57.77, 48.05, 57.77, 65.76\n    context.bezierCurveTo 57.77, 66.38, 58.08, 66.98, 58.58, 67.32\n    context.bezierCurveTo 61.98, 69.69, 64.21, 73.69, 64.21, 78.24\n    context.bezierCurveTo 64.21, 85.53, 58.47, 91.41, 51.34, 91.41\n    context.bezierCurveTo 44.2, 91.41, 38.46, 85.53, 38.46, 78.24\n    context.bezierCurveTo 38.46, 73.71, 40.68, 69.7, 44.07, 67.32\n    context.bezierCurveTo 44.55, 66.99, 44.86, 66.4, 44.87, 65.79\n    context.lineTo 44.87, 14.24\n    context.bezierCurveTo 44.9, 10.44, 47.66, 8.56, 51.28, 8.59\n    context.closePath()\n    context.moveTo 47.4, 49.18\n    context.bezierCurveTo 46.76, 49.82, 46.74, 50.5, 46.74, 50.97\n    context.lineTo 46.74, 70.18\n    context.bezierCurveTo 44.02, 71.81, 42.14, 74.76, 42.14, 78.21\n    context.bezierCurveTo 42.14, 83.38, 46.28, 87.62, 51.34, 87.62\n    context.bezierCurveTo 56.39, 87.62, 60.53, 83.38, 60.53, 78.21\n    context.bezierCurveTo 60.53, 74.77, 58.65, 71.84, 55.93, 70.21\n    context.lineTo 55.93, 50.97\n    context.bezierCurveTo 55.94, 50.29, 55.55, 49.61, 54.96, 49.29\n    context.bezierCurveTo 54.37, 48.98, 53.61, 49.03, 53.06, 49.41\n    context.bezierCurveTo 51.61, 49.96, 50.53, 48.82, 49.38, 48.59\n    context.bezierCurveTo 48.61, 48.43, 47.98, 48.79, 47.4, 49.18\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n    #// thermometer lines\n    #// thermometer line 9 Drawing\n    context.beginPath()\n    context.moveTo 47, 16\n    context.lineTo 56, 16\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 7 Drawing\n    context.beginPath()\n    context.moveTo 47, 23.5\n    context.lineTo 56, 23.5\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 5 Drawing\n    context.beginPath()\n    context.moveTo 47, 31\n    context.lineTo 56, 31\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 3 Drawing\n    context.beginPath()\n    context.moveTo 47, 38.5\n    context.lineTo 56, 38.5\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 1 Drawing\n    context.beginPath()\n    context.moveTo 47, 46\n    context.lineTo 56, 46\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 8 Drawing\n    context.beginPath()\n    context.moveTo 51.5, 19.75\n    context.lineTo 56, 19.75\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 6 Drawing\n    context.beginPath()\n    context.moveTo 51.5, 27.25\n    context.lineTo 56, 27.25\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 4 Drawing\n    context.beginPath()\n    context.moveTo 51.5, 34.75\n    context.lineTo 56, 34.75\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n    #// thermometer line 2 Drawing\n    context.beginPath()\n    context.moveTo 51.5, 42.25\n    context.lineTo 56, 42.25\n    context.strokeStyle = iconColorString\n    context.lineWidth = 2\n    context.lineCap = \'round\'\n    context.stroke()\n';
