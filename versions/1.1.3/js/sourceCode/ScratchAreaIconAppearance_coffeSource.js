// Generated by CoffeeScript 1.12.7
window.ScratchAreaIconAppearance_coffeSource = '# based on https://thenounproject.com/term/organization/153374/\nclass ScratchAreaIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    colorString = \'rgb(0, 0, 0)\'\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 40.5, 118.5\n    context.lineTo 40.5, 184.5\n    context.lineTo 145.5, 184.5\n    context.lineTo 145.5, 92.5\n    context.lineTo 40.5, 92.5\n    context.lineTo 67.5, 67.5\n    context.lineTo 78.5, 67.5\n    context.lineCap = \'round\'\n    context.lineJoin = \'round\'\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 2 Drawing\n    context.beginPath()\n    context.moveTo 146, 185\n    context.lineTo 172.83, 159.74\n    context.lineTo 172.29, 102.66\n    context.lineTo 190, 87\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 3 Drawing\n    context.beginPath()\n    context.moveTo 172.5, 102.5\n    context.lineTo 161.5, 112.5\n    context.strokeStyle = colorString\n    context.lineWidth = 5.5\n    context.stroke()\n    #// Bezier 4 Drawing\n    context.beginPath()\n    context.moveTo 19.5, 117.5\n    context.bezierCurveTo 127.5, 117.5, 127.5, 117.5, 127.5, 117.5\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval Drawing\n    @arc context, 128.5, 94.5, 33, 49, 180, 273, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 2 Drawing\n    @arc context, 22, 93, 33, 49, 180, 273, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 3 Drawing\n    @arc context, 135, 93, 26, 49, 266, 355, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 4 Drawing\n    @arc context, 162.5, 67.5, 26, 49, 266, 355, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 5 Drawing\n    context.beginPath()\n    context.moveTo 103.5, 67.5\n    context.lineTo 172, 67.5\n    context.lineTo 146, 92.5\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 5 Drawing\n    @arc context, -9.5, 76, 51, 49, 254, 339, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 6 Drawing\n    @arc context, 17, 52.5, 51, 49, 254, 339, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 6 Drawing\n    context.beginPath()\n    context.moveTo 10, 77\n    context.lineTo 37, 53\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 7 Drawing\n    context.beginPath()\n    context.moveTo 65.5, 68\n    context.lineTo 72, 56\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 8 Drawing\n    context.beginPath()\n    context.moveTo 89.5, 45.5\n    context.lineTo 105.5, 45.5\n    context.strokeStyle = colorString\n    context.lineWidth = 4\n    context.stroke()\n    #// Bezier 9 Drawing\n    context.beginPath()\n    context.moveTo 150.5, 45.5\n    context.lineTo 188, 45\n    context.lineCap = \'round\'\n    context.lineJoin = \'round\'\n    context.strokeStyle = colorString\n    context.lineWidth = 4\n    context.stroke()\n    #// Oval 7 Drawing\n    @arc context, 171.5, 45.5, 33, 49, 180, 273, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 8 Drawing\n    @arc context, 92, 80, 18, 18.5, 181, 0, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 10 Drawing\n    context.beginPath()\n    context.moveTo 83, 59.5\n    context.lineTo 83.5, 73.5\n    context.lineTo 98.5, 73.5\n    context.lineTo 98, 58\n    context.lineTo 83, 59.5\n    context.closePath()\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Bezier 11 Drawing\n    context.beginPath()\n    context.moveTo 106.5, 39.5\n    context.lineTo 117.5, 20.5\n    context.lineTo 139.5, 20.5\n    context.lineTo 149.5, 38.5\n    context.lineTo 138.5, 57.5\n    context.lineTo 116.5, 57.5\n    context.lineTo 106.5, 39.5\n    context.closePath()\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n    #// Oval 9 Drawing\n    @arc context, 64.5, 27, 22.5, 23.5, 181, 180, false\n    context.strokeStyle = colorString\n    context.lineWidth = 4.5\n    context.stroke()\n\n';
