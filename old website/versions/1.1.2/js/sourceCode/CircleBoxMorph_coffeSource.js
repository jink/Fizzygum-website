// Generated by CoffeeScript 1.12.7
window.CircleBoxMorph_coffeSource = '# I can be used for sliders\n\nclass CircleBoxMorph extends Widget\n\n\n  constructor: ->\n    super()\n    @appearance = new CircleBoxyAppearance(@)\n    @silentRawSetExtent new Point 20, 100\n\n  colloquialName: ->\n    return "circle-box"\n  \n  autoOrientation: ->\n    if @height() > @width()\n      orientation = "vertical"\n    else\n      orientation = "horizontal"\n';