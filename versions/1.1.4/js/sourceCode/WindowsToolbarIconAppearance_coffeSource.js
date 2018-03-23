// Generated by CoffeeScript 1.12.7
window.WindowsToolbarIconAppearance_coffeSource = 'class WindowsToolbarIconAppearance extends IconAppearance\n\n  constructor: (@morph) ->\n    super\n    @preferredSize = new Point 100, 100\n    @specificationSize = new Point 100, 100\n\n  paintFunction: (context) ->\n    #// Color Declarations\n    if @ownColorInsteadOfWidgetColor? then iconColorString = @ownColorInsteadOfWidgetColor.toString() else iconColorString = @morph.color.toString()\n\n    #// Oval Drawing\n    @oval context, 11, 11, 6, 6\n    context.fillStyle = iconColorString\n    context.fill()\n    #// Oval 2 Drawing\n    @oval context, 22, 11, 6, 6\n    context.fillStyle = iconColorString\n    context.fill()\n    #// window bar bottom Drawing\n    context.beginPath()\n    context.moveTo 5, 24\n    context.lineTo 91, 24\n    context.strokeStyle = iconColorString\n    context.lineWidth = 4\n    context.stroke()\n    #// window border Drawing\n    context.beginPath()\n    context.rect 4, 4, 88, 88\n    context.strokeStyle = iconColorString\n    context.lineWidth = 3.5\n    context.lineJoin = \'round\'\n    context.stroke()\n';
