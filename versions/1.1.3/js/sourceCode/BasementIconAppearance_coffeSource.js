// Generated by CoffeeScript 1.12.7
window.BasementIconAppearance_coffeSource = 'class BasementIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    # Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n    outlineColorString = WorldMorph.preferencesAndSettings.outlineColorString\n    # outline Drawing\n    context.beginPath()\n    context.moveTo 49.93, 6\n    context.lineTo 49.93, 6\n    context.bezierCurveTo 49.66, 6.01, 49.39, 6.09, 49.16, 6.24\n    context.lineTo 2.75, 36\n    context.lineTo 2.75, 36\n    context.bezierCurveTo 2, 36.48, 1.77, 40.4, 2.24, 41.18\n    context.bezierCurveTo 2.54, 41.66, 3.05, 41.96, 3.6, 41.96\n    context.lineTo 8.38, 41.96\n    context.lineTo 8.38, 90.35\n    context.lineTo 8.38, 90.35\n    context.bezierCurveTo 8.38, 91.26, 9.1, 92, 9.98, 92\n    context.lineTo 90.02, 92\n    context.lineTo 90.02, 92\n    context.bezierCurveTo 90.9, 92, 91.62, 91.26, 91.62, 90.35\n    context.lineTo 91.62, 41.96\n    context.lineTo 96.4, 41.96\n    context.lineTo 96.4, 41.96\n    context.bezierCurveTo 97.28, 41.96, 98, 41.22, 98, 40.3\n    context.bezierCurveTo 98, 39.73, 97.72, 36.3, 97.25, 36\n    context.lineTo 50.84, 6.24\n    context.lineTo 50.84, 6.24\n    context.bezierCurveTo 50.56, 6.07, 50.25, 5.99, 49.93, 6\n    context.lineTo 49.93, 6\n    context.closePath()\n    context.fillStyle = outlineColorString\n    context.fill()\n    # basement Drawing\n    context.beginPath()\n    context.moveTo 50.43, 9\n    context.lineTo 50.43, 9\n    context.bezierCurveTo 50.18, 9.01, 49.93, 9.09, 49.71, 9.22\n    context.lineTo 5.72, 36.91\n    context.lineTo 5.72, 36.91\n    context.bezierCurveTo 5.01, 37.36, 4.79, 38.31, 5.24, 39.03\n    context.bezierCurveTo 5.52, 39.48, 6, 39.75, 6.53, 39.75\n    context.lineTo 11.05, 39.75\n    context.lineTo 11.05, 87.46\n    context.lineTo 11.05, 87.46\n    context.bezierCurveTo 11.05, 88.31, 11.73, 89, 12.57, 89\n    context.lineTo 21.67, 89\n    context.lineTo 21.67, 89\n    context.bezierCurveTo 22.51, 89, 23.19, 88.31, 23.19, 87.46\n    context.lineTo 23.19, 45.91\n    context.lineTo 77.81, 45.91\n    context.lineTo 77.81, 87.46\n    context.lineTo 77.81, 87.46\n    context.bezierCurveTo 77.81, 88.31, 78.49, 89, 79.33, 89\n    context.lineTo 88.43, 89\n    context.lineTo 88.43, 89\n    context.bezierCurveTo 89.27, 89, 89.95, 88.31, 89.95, 87.46\n    context.lineTo 89.95, 39.75\n    context.lineTo 94.48, 39.75\n    context.lineTo 94.48, 39.75\n    context.bezierCurveTo 95.31, 39.75, 95.99, 39.06, 95.99, 38.21\n    context.bezierCurveTo 95.99, 37.68, 95.72, 37.19, 95.28, 36.91\n    context.lineTo 51.3, 9.23\n    context.lineTo 51.29, 9.22\n    context.bezierCurveTo 51.03, 9.06, 50.73, 8.99, 50.43, 9\n    context.lineTo 50.43, 9\n    context.closePath()\n    context.moveTo 50.5, 12.35\n    context.lineTo 89.15, 36.68\n    context.lineTo 88.43, 36.68\n    context.lineTo 88.43, 36.68\n    context.bezierCurveTo 87.59, 36.68, 86.91, 37.37, 86.91, 38.22\n    context.lineTo 86.91, 85.93\n    context.lineTo 80.84, 85.93\n    context.lineTo 80.84, 44.37\n    context.lineTo 80.84, 44.37\n    context.bezierCurveTo 80.84, 43.52, 80.16, 42.83, 79.33, 42.83\n    context.lineTo 21.67, 42.83\n    context.lineTo 21.67, 42.83\n    context.bezierCurveTo 20.84, 42.83, 20.16, 43.52, 20.16, 44.37\n    context.lineTo 20.16, 85.93\n    context.lineTo 14.09, 85.93\n    context.lineTo 14.09, 38.22\n    context.lineTo 14.09, 38.22\n    context.bezierCurveTo 14.09, 37.37, 13.41, 36.68, 12.57, 36.68\n    context.lineTo 11.85, 36.68\n    context.lineTo 50.5, 12.35\n    context.closePath()\n    context.moveTo 54.87, 52.06\n    context.lineTo 54.87, 52.06\n    context.bezierCurveTo 54.79, 52.06, 54.71, 52.07, 54.64, 52.08\n    context.lineTo 48.82, 52.08\n    context.lineTo 48.82, 52.08\n    context.bezierCurveTo 47.98, 52.08, 47.31, 52.77, 47.31, 53.62\n    context.lineTo 47.31, 66.12\n    context.lineTo 40.55, 63.17\n    context.lineTo 40.55, 63.17\n    context.bezierCurveTo 40.29, 63, 39.98, 62.92, 39.67, 62.94\n    context.lineTo 39.65, 62.94\n    context.bezierCurveTo 39.4, 62.95, 39.16, 63.02, 38.95, 63.14\n    context.lineTo 30.3, 66.92\n    context.lineTo 30.31, 66.92\n    context.bezierCurveTo 30.06, 66.97, 29.82, 67.09, 29.63, 67.26\n    context.lineTo 29.62, 67.27\n    context.bezierCurveTo 29.6, 67.29, 29.58, 67.31, 29.56, 67.33\n    context.lineTo 29.58, 67.31\n    context.bezierCurveTo 29.56, 67.33, 29.54, 67.35, 29.52, 67.37\n    context.lineTo 29.52, 67.37\n    context.lineTo 29.52, 67.38\n    context.bezierCurveTo 29.12, 67.76, 28.96, 68.34, 29.11, 68.88\n    context.lineTo 29.1, 80.26\n    context.lineTo 29.11, 80.25\n    context.bezierCurveTo 29.09, 80.39, 29.1, 80.52, 29.12, 80.66\n    context.lineTo 29.12, 80.65\n    context.bezierCurveTo 29.13, 80.67, 29.13, 80.69, 29.14, 80.7\n    context.lineTo 29.13, 80.69\n    context.bezierCurveTo 29.14, 80.71, 29.14, 80.73, 29.14, 80.75\n    context.lineTo 29.14, 80.74\n    context.bezierCurveTo 29.15, 80.77, 29.15, 80.79, 29.16, 80.82\n    context.lineTo 29.16, 80.83\n    context.bezierCurveTo 29.17, 80.84, 29.17, 80.85, 29.17, 80.86\n    context.lineTo 29.18, 80.87\n    context.bezierCurveTo 29.19, 80.91, 29.2, 80.95, 29.22, 80.99\n    context.lineTo 29.22, 80.99\n    context.bezierCurveTo 29.22, 80.99, 29.22, 81, 29.23, 81.01\n    context.lineTo 29.23, 81.02\n    context.bezierCurveTo 29.25, 81.06, 29.27, 81.1, 29.29, 81.14\n    context.lineTo 29.28, 81.13\n    context.bezierCurveTo 29.29, 81.15, 29.3, 81.16, 29.31, 81.18\n    context.lineTo 29.31, 81.18\n    context.bezierCurveTo 29.5, 81.51, 29.81, 81.76, 30.18, 81.88\n    context.lineTo 38.98, 85.73\n    context.lineTo 38.99, 85.73\n    context.bezierCurveTo 39, 85.74, 39.02, 85.75, 39.03, 85.76\n    context.lineTo 39.02, 85.75\n    context.bezierCurveTo 39.1, 85.79, 39.17, 85.82, 39.24, 85.84\n    context.lineTo 39.24, 85.84\n    context.bezierCurveTo 39.45, 85.91, 39.68, 85.93, 39.9, 85.91\n    context.lineTo 39.89, 85.91\n    context.lineTo 39.88, 85.91\n    context.bezierCurveTo 39.91, 85.91, 39.95, 85.9, 39.98, 85.89\n    context.lineTo 39.99, 85.89\n    context.bezierCurveTo 40.01, 85.89, 40.03, 85.89, 40.04, 85.88\n    context.lineTo 40.04, 85.89\n    context.bezierCurveTo 40.07, 85.88, 40.11, 85.87, 40.14, 85.86\n    context.lineTo 40.14, 85.86\n    context.bezierCurveTo 40.16, 85.86, 40.18, 85.85, 40.19, 85.85\n    context.lineTo 40.18, 85.85\n    context.bezierCurveTo 40.21, 85.84, 40.25, 85.83, 40.28, 85.81\n    context.lineTo 40.28, 85.81\n    context.bezierCurveTo 40.34, 85.79, 40.39, 85.76, 40.45, 85.73\n    context.lineTo 47.31, 82.73\n    context.lineTo 47.31, 84.39\n    context.lineTo 47.31, 84.39\n    context.bezierCurveTo 47.31, 85.24, 47.98, 85.93, 48.82, 85.93\n    context.lineTo 67.03, 85.93\n    context.lineTo 67.03, 85.93\n    context.bezierCurveTo 67.87, 85.93, 68.55, 85.24, 68.55, 84.39\n    context.lineTo 68.55, 69\n    context.lineTo 68.55, 53.62\n    context.lineTo 68.55, 53.62\n    context.bezierCurveTo 68.55, 52.77, 67.87, 52.08, 67.03, 52.08\n    context.lineTo 61.2, 52.08\n    context.lineTo 61.2, 52.08\n    context.bezierCurveTo 61.11, 52.06, 61.03, 52.06, 60.94, 52.06\n    context.lineTo 60.94, 52.06\n    context.bezierCurveTo 60.86, 52.06, 60.78, 52.07, 60.71, 52.08\n    context.lineTo 55.13, 52.08\n    context.lineTo 55.13, 52.08\n    context.bezierCurveTo 55.04, 52.06, 54.96, 52.06, 54.87, 52.06\n    context.closePath()\n    context.moveTo 50.34, 55.16\n    context.lineTo 53.37, 55.16\n    context.lineTo 53.37, 59.48\n    context.lineTo 53.37, 59.49\n    context.bezierCurveTo 53.23, 60.33, 53.78, 61.13, 54.6, 61.28\n    context.bezierCurveTo 54.79, 61.31, 54.97, 61.31, 55.16, 61.27\n    context.lineTo 55.14, 61.27\n    context.bezierCurveTo 55.16, 61.27, 55.18, 61.27, 55.2, 61.27\n    context.lineTo 55.2, 61.26\n    context.bezierCurveTo 55.21, 61.26, 55.22, 61.26, 55.23, 61.26\n    context.lineTo 55.23, 61.26\n    context.bezierCurveTo 55.31, 61.24, 55.4, 61.21, 55.48, 61.17\n    context.lineTo 55.49, 61.17\n    context.bezierCurveTo 55.5, 61.17, 55.51, 61.16, 55.51, 61.16\n    context.lineTo 55.51, 61.16\n    context.bezierCurveTo 55.53, 61.15, 55.54, 61.14, 55.56, 61.14\n    context.lineTo 55.64, 61.1\n    context.lineTo 55.64, 61.1\n    context.bezierCurveTo 55.64, 61.1, 55.65, 61.09, 55.66, 61.09\n    context.lineTo 57.9, 59.95\n    context.lineTo 60.26, 61.14\n    context.lineTo 60.25, 61.14\n    context.bezierCurveTo 60.52, 61.28, 60.82, 61.33, 61.12, 61.29\n    context.lineTo 61.12, 61.29\n    context.bezierCurveTo 61.17, 61.29, 61.23, 61.28, 61.28, 61.26\n    context.lineTo 61.29, 61.26\n    context.bezierCurveTo 61.31, 61.26, 61.32, 61.25, 61.34, 61.25\n    context.lineTo 61.33, 61.25\n    context.bezierCurveTo 61.36, 61.24, 61.39, 61.24, 61.41, 61.23\n    context.lineTo 61.42, 61.23\n    context.bezierCurveTo 61.43, 61.23, 61.44, 61.22, 61.44, 61.22\n    context.lineTo 61.43, 61.22\n    context.bezierCurveTo 61.52, 61.19, 61.61, 61.15, 61.7, 61.11\n    context.lineTo 61.71, 61.1\n    context.lineTo 61.71, 61.09\n    context.bezierCurveTo 61.76, 61.07, 61.8, 61.04, 61.85, 61.01\n    context.lineTo 61.84, 61.01\n    context.lineTo 61.85, 61.01\n    context.bezierCurveTo 61.89, 60.97, 61.93, 60.94, 61.97, 60.9\n    context.lineTo 61.97, 60.91\n    context.bezierCurveTo 62, 60.88, 62.03, 60.85, 62.06, 60.81\n    context.lineTo 62.07, 60.81\n    context.bezierCurveTo 62.34, 60.52, 62.48, 60.13, 62.48, 59.73\n    context.lineTo 62.48, 55.16\n    context.lineTo 65.51, 55.16\n    context.lineTo 65.51, 67.46\n    context.lineTo 61.32, 67.46\n    context.lineTo 61.3, 67.46\n    context.bezierCurveTo 61.18, 67.43, 61.06, 67.42, 60.94, 67.42\n    context.lineTo 60.94, 67.42\n    context.bezierCurveTo 60.83, 67.42, 60.72, 67.43, 60.6, 67.46\n    context.lineTo 55.25, 67.46\n    context.lineTo 55.23, 67.46\n    context.bezierCurveTo 55.11, 67.43, 54.99, 67.42, 54.87, 67.42\n    context.lineTo 54.88, 67.42\n    context.bezierCurveTo 54.76, 67.42, 54.65, 67.43, 54.53, 67.46\n    context.lineTo 50.34, 67.46\n    context.lineTo 50.34, 55.16\n    context.closePath()\n    context.moveTo 56.41, 55.16\n    context.lineTo 59.44, 55.16\n    context.lineTo 59.44, 57.28\n    context.lineTo 58.58, 56.85\n    context.lineTo 58.59, 56.85\n    context.bezierCurveTo 58.36, 56.74, 58.11, 56.68, 57.85, 56.69\n    context.lineTo 57.85, 56.69\n    context.bezierCurveTo 57.64, 56.69, 57.43, 56.75, 57.24, 56.84\n    context.lineTo 56.41, 57.26\n    context.lineTo 56.41, 55.16\n    context.closePath()\n    context.moveTo 39.72, 66.16\n    context.lineTo 44.98, 68.46\n    context.lineTo 39.72, 70.76\n    context.lineTo 37.57, 69.83\n    context.lineTo 34.45, 68.46\n    context.lineTo 39.72, 66.16\n    context.closePath()\n    context.moveTo 50.34, 70.54\n    context.lineTo 53.37, 70.54\n    context.lineTo 53.37, 74.87\n    context.lineTo 53.37, 74.86\n    context.bezierCurveTo 53.21, 75.7, 53.75, 76.5, 54.57, 76.67\n    context.bezierCurveTo 54.63, 76.68, 54.68, 76.68, 54.73, 76.69\n    context.lineTo 54.74, 76.69\n    context.bezierCurveTo 54.79, 76.69, 54.85, 76.7, 54.9, 76.7\n    context.lineTo 54.89, 76.7\n    context.bezierCurveTo 55.17, 76.7, 55.45, 76.61, 55.69, 76.46\n    context.lineTo 57.9, 75.34\n    context.lineTo 60.26, 76.53\n    context.lineTo 60.27, 76.54\n    context.bezierCurveTo 60.35, 76.58, 60.45, 76.61, 60.54, 76.64\n    context.lineTo 60.54, 76.64\n    context.bezierCurveTo 60.58, 76.65, 60.63, 76.66, 60.67, 76.67\n    context.lineTo 60.69, 76.67\n    context.bezierCurveTo 60.78, 76.69, 60.88, 76.7, 60.98, 76.7\n    context.lineTo 60.99, 76.7\n    context.lineTo 61, 76.7\n    context.lineTo 61.01, 76.7\n    context.bezierCurveTo 61.84, 76.67, 62.49, 75.97, 62.48, 75.13\n    context.lineTo 62.48, 70.54\n    context.lineTo 65.51, 70.54\n    context.lineTo 65.51, 82.85\n    context.lineTo 50.34, 82.85\n    context.lineTo 50.34, 80.51\n    context.lineTo 50.34, 80.51\n    context.bezierCurveTo 50.34, 80.45, 50.34, 80.4, 50.34, 80.35\n    context.lineTo 50.34, 70.54\n    context.closePath()\n    context.moveTo 56.41, 70.54\n    context.lineTo 59.44, 70.54\n    context.lineTo 59.44, 72.68\n    context.lineTo 58.58, 72.24\n    context.lineTo 58.58, 72.24\n    context.bezierCurveTo 58.35, 72.13, 58.09, 72.07, 57.83, 72.09\n    context.lineTo 57.84, 72.09\n    context.bezierCurveTo 57.63, 72.09, 57.42, 72.15, 57.23, 72.24\n    context.lineTo 56.41, 72.66\n    context.lineTo 56.41, 70.54\n    context.closePath()\n    context.moveTo 32.14, 70.8\n    context.lineTo 33.06, 71.2\n    context.lineTo 36.37, 72.65\n    context.lineTo 38.2, 73.45\n    context.lineTo 38.2, 82.03\n    context.lineTo 32.14, 79.38\n    context.lineTo 32.14, 70.8\n    context.closePath()\n    context.moveTo 47.3, 70.8\n    context.lineTo 47.3, 79.38\n    context.lineTo 41.24, 82.03\n    context.lineTo 41.24, 73.45\n    context.lineTo 47.3, 70.8\n    context.closePath()\n    context.fillStyle = iconColorString\n    context.fill()\n';
