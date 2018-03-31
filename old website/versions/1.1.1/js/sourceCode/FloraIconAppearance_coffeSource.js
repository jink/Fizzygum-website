// Generated by CoffeeScript 1.12.7
window.FloraIconAppearance_coffeSource = 'class FloraIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    colorString = \'rgb(0, 0, 0)\'\n    #// Oval Drawing\n    @arc context, 101.5, 46.5, 77, 77, 193, 259, false\n    context.strokeStyle = colorString\n    context.lineWidth = 3\n    context.stroke()\n    #// Oval 2 Drawing\n    @arc context, 25.5, 46.5, 77, 77, 281, 347, false\n    context.strokeStyle = colorString\n    context.lineWidth = 3\n    context.stroke()\n    #// Oval 3 Drawing\n    @arc context, 71.5, 16.5, 62, 62, 357, 183, false\n    context.strokeStyle = colorString\n    context.lineWidth = 3\n    context.stroke()\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 101.5, 73.5\n    context.lineTo 101.5, 110.5\n    context.strokeStyle = colorString\n    context.lineWidth = 3\n    context.stroke()\n    #// Bezier 2 Drawing\n    context.beginPath()\n    context.moveTo 48.5, 108.5\n    context.lineTo 154.5, 108.5\n    context.lineCap = \'round\'\n    context.strokeStyle = colorString\n    context.lineWidth = 4\n    context.stroke()\n    #// Bezier 3 Drawing\n    context.beginPath()\n    context.moveTo 47.5, 108.5\n    context.lineTo 54.5, 133.5\n    context.lineTo 150.5, 133.5\n    context.lineTo 154.5, 109.5\n    context.lineCap = \'round\'\n    context.strokeStyle = colorString\n    context.lineWidth = 4\n    context.stroke()\n    #// Bezier 4 Drawing\n    context.beginPath()\n    context.moveTo 57, 134\n    context.lineTo 74, 192\n    context.lineTo 132, 192\n    context.lineTo 147, 133\n    context.strokeStyle = colorString\n    context.lineWidth = 4\n    context.stroke()\n    #// Oval 4 Drawing\n    @oval context, 99, 7, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 5 Drawing\n    @oval context, 86, 19, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 6 Drawing\n    @oval context, 86, 32, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 7 Drawing\n    @oval context, 99, 19, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 8 Drawing\n    @oval context, 112, 19, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 9 Drawing\n    @oval context, 99, 32, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 10 Drawing\n    @oval context, 112, 32, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n    #// Oval 11 Drawing\n    @oval context, 99, 44, 4, 4\n    context.fillStyle = colorString\n    context.fill()\n';