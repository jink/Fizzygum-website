// Generated by CoffeeScript 1.12.7
window.BouncerWdgt_coffeSource = '# bounces within the parent. Veeery similar to the good old\n# AtomMorph from Squeak\nclass BouncerWdgt extends Widget\n\n  velocity: nil\n\n  constructor: ->\n    super()\n    @fps = 60\n    world.addSteppingMorph @\n    @rawSetExtent new Point 5, 5\n\n    @appearance = new RectangularAppearance @\n\n    while !@velocity? or @velocity.x == 0 or @velocity.y == 0\n      @velocity = new Point getRandomInt(-10,10), getRandomInt(-10,10)\n\n  \n  step: ->\n    p = @position()\n    vx = @velocity.x\n    vy = @velocity.y\n    px = p.x + vx\n    py = p.y + vy\n\n    bounced = false\n\n    if px > @parent.right()\n      px = @parent.right() - (px - @parent.right())\n      vx = - vx\n      bounced = true\n\n    if py > @parent.bottom()\n      py = @parent.bottom() - (py - @parent.bottom())\n      vy = - vy\n      bounced = true\n\n    if px < @parent.left()\n      px = @parent.left() - (px - @parent.left())\n      vx = - vx\n      bounced = true\n\n    if py < @parent.top()\n      py = @parent.top() - (py - @parent.top())\n      vy = - vy\n      bounced = true\n\n    @fullMoveTo new Point px, py\n    if bounced\n        @velocity = new Point vx, vy\n';