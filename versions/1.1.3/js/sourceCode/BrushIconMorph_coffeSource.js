// Generated by CoffeeScript 1.12.7
window.BrushIconMorph_coffeSource = '# to try it:\n#   world.create(new PencilIconMorph()\n# or\n#   world.create(new PencilIconMorph(new Point(200,200),"color = \'rgb(226, 0, 75)\'\\ncontext.beginPath()\\ncontext.moveTo 23, 103\\ncontext.lineTo 93, 178\\ncontext.strokeStyle = color\\ncontext.stroke()"))\n\nclass BrushIconMorph extends IconMorph\n\n\n  constructor: (@color) ->\n    super\n    @appearance = new BrushIconAppearance @\n    @toolTipMessage = "brush"\n';
