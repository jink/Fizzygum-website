// Generated by CoffeeScript 1.12.7
window.UncollapsedStateIconAppearance_coffeSource = 'class UncollapsedStateIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 400, 400\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    colorString = \'rgba(51, 0, 0, 1)\'\n    #// Bezier Drawing\n    context.beginPath()\n    context.moveTo 45.5, 137.5\n    context.lineTo 200.93, 288.5\n    context.lineTo 362.5, 133.5\n    context.miterLimit = 30\n    context.strokeStyle = colorString\n    context.lineWidth = 30\n    context.stroke()\n';
