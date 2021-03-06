// Generated by CoffeeScript 1.12.7
window.Rectangle_coffeSource = '# REQUIRES DeepCopierMixin\n\n# Just like the Point class, this class has a "new on change"\n# policy (also often called "immutable data structures").\n# This means that any time you change any part of a\n# Rectangle, a *new* Rectangle is created, the old one is\n# left unchanged.\n# The reason for this is that as manipulation and assignments\n# of (parts of) Rectangles is done a lot, it gets\n# difficult otherwise to understand how one change to\n# (part of) a Rectangle propagates because of the\n# assignments that may have happened.\n# In this "new on change" policy things are easier - a change\n# doesn\'t affect any other Rectangle ever apart from the\n# new one.\n# So for example you never change the @bounds property of\n# a Widget in-place ever, rather\n# you rather replace it with a new Rectangle.\n# Also this means that as you create a Rectangle from another,\n# you can have the new Rectangle pointing directly at the old\n# origin and corner, because we are guaranteed that *those*\n# will never change.\n# Also another effect is that you never need to copy() a\n# Rectangle. This is because the one you have will never change\n# and the new operations you put it through will just create\n# new ones.\n# The drawback is that "new on change" policy means that a bunch\n# of Rectangles are created for potentially a great\n# number of transient transformations which would\n# otherwise be cheaper to just do\n# in place. The problem with mixing the two approaches\n# is that using in-place changes poisons the other approach,\n# so the two approaches can only be mixed with great care, so\n# it should probably only be done in "optimisation" phase\n# if profiling shows it\'s actually a problem.\n\nclass Rectangle\n\n  @augmentWith DeepCopierMixin\n\n  origin: nil # a Point\n  corner: nil # a Point\n  @EMPTY: new Rectangle()\n  \n  constructor: (left = 0, top = 0, right = 0, bottom = 0) ->\n    \n    if (typeof(left) is "number") and (typeof(top) is "number") and (typeof(right) is "number") and (typeof(bottom) is "number")\n      @origin = new Point left, top\n      @corner = new Point right, bottom\n    else if (left instanceof Point) and (typeof(top) is "number") and (typeof(right) is "number")\n      @origin = left\n      @corner = new Point top, right\n    else if (typeof(left) is "number") and (typeof(top) is "number") and (right instanceof Point)\n      @origin = new Point left, top\n      @corner = right\n    else if (left instanceof Point) and (top instanceof Point)\n      @origin = left\n      @corner = top\n    else if left instanceof Point\n      @origin = left\n      @corner = new Point 0, 0\n    else if left instanceof Rectangle\n      @origin = left.origin\n      @corner = top.origin\n  \n  \n  # Rectangle string representation: e.g. \'[0@0 | 160@80]\'\n  toString: ->\n    "[" + @origin + " | " + @extent() + "]"\n\n  onlyContainingIntegers: ->\n    if Math.floor(@origin.x) == @origin.x and\n      Math.floor(@origin.y) == @origin.y and\n      Math.floor(@corner.x) == @corner.x and\n      Math.floor(@corner.y) == @corner.y\n        return true\n    else\n      return false\n\n  debugIfFloats: ->\n    #if !@onlyContainingIntegers()\n    #  debugger\n\n  prepareBeforeSerialization: ->\n    @debugIfFloats()\n    @className = @constructor.name\n    @classVersion = "0.0.1"\n    @serializerVersion = "0.0.1"\n    for property of @\n      if @[property]?\n        if typeof @[property] == \'object\'\n          if !@[property].className?\n            if @[property].prepareBeforeSerialization?\n              @[property].prepareBeforeSerialization()\n  \n  # Rectangle copying:\n  copy: ->\n    @debugIfFloats()\n    new @constructor @left(), @top(), @right(), @bottom()\n  \n  # Rectangle accessing - setting:\n  setTo: (left, top, right, bottom) ->\n    @debugIfFloats()\n    # note: all inputs are optional and can be omitted\n    @origin = new Point(\n      left or ((if (left is 0) then 0 else @left())),\n      top or ((if (top is 0) then 0 else @top())))\n    @corner = new Point(\n      right or ((if (right is 0) then 0 else @right())),\n      bottom or ((if (bottom is 0) then 0 else @bottom())))\n\n  # Rectangle accessing - setting\n  # This is used to create a bound with the specified\n  # width and height: the corner needs to be displaced\n  # of (width, bound) in respect to the origin \n  setBoundsWidthAndHeight: (width, height) ->\n    copy = @copy()\n    if (typeof(width) is "number") and (typeof(height) is "number")\n      copy.corner = new Point(\n        width + copy.origin.x,\n        height + copy.origin.y\n      )\n    else if (width instanceof Point)\n      copy.corner = new Point(\n        width.x + copy.origin.x,\n        width.y + copy.origin.y\n      )\n    return copy\n  \n  # Rectangle accessing - getting:\n  area: ->\n    @debugIfFloats()\n    #requires width() and height() to be defined\n    w = @width()\n    return 0  if w < 0\n    Math.max w * @height(), 0\n  \n  bottom: ->\n    @debugIfFloats()\n    @corner.y\n  \n  bottomCenter: ->\n    @debugIfFloats()\n    new Point @center().x, @bottom()\n  \n  bottomLeft: ->\n    @debugIfFloats()\n    new Point @origin.x, @corner.y\n  \n  bottomRight: ->\n    @debugIfFloats()\n    @corner.copy()\n  \n  boundingBox: ->\n    @debugIfFloats()\n    @\n  \n  center: ->\n    @debugIfFloats()\n    @origin.add @corner.subtract(@origin).floorDivideBy(2)\n  \n  corners: ->\n    @debugIfFloats()\n    [@origin, @bottomLeft(), @corner, @topRight()]\n  \n  extent: ->\n    @debugIfFloats()\n    @corner.subtract @origin\n  \n  isEmpty: ->\n    @debugIfFloats()\n    return ((@width() <= 0) or (@height() <= 0))\n\n  isNotEmpty: ->\n    !@isEmpty()\n  \n  height: ->\n    @debugIfFloats()\n    @corner.y - @origin.y\n  \n  left: ->\n    @debugIfFloats()\n    @origin.x\n  \n  leftCenter: ->\n    @debugIfFloats()\n    new Point @left(), @center().y\n  \n  right: ->\n    @debugIfFloats()\n    @corner.x\n  \n  rightCenter: ->\n    @debugIfFloats()\n    new Point @right(), @center().y\n  \n  top: ->\n    @debugIfFloats()\n    @origin.y\n  \n  topCenter: ->\n    @debugIfFloats()\n    new Point @center().x, @top()\n  \n  topLeft: ->\n    @debugIfFloats()\n    @origin\n  \n  topRight: ->\n    @debugIfFloats()\n    new Point @corner.x, @origin.y\n  \n  width: ->\n    @debugIfFloats()\n    @corner.x - @origin.x\n  \n  position: ->\n    @debugIfFloats()\n    @origin\n  \n  # Rectangle comparison:\n  eq: (aRect) ->\n    if !aRect? then return false\n    @debugIfFloats()\n    @origin.eq(aRect.origin) and @corner.eq(aRect.corner)\n  \n  abs: ->\n    @debugIfFloats()\n    newOrigin = @origin.abs()\n    newCorner = @corner.max newOrigin\n    newOrigin.corner newCorner\n  \n  # Rectangle functions:\n  insetBy: (delta) ->\n    @debugIfFloats()\n    # delta can be either a Point or a Number\n    result = new @constructor()\n    result.origin = @origin.add delta\n    result.corner = @corner.subtract delta\n    result.debugIfFloats()\n    result\n\n  rightHalf: ->\n    @debugIfFloats()\n    result = new @constructor()\n    result.origin = @origin.add new Point Math.round(@width()/2),0\n    result.corner = @corner.copy()\n    result.debugIfFloats()\n    result\n  \n  expandBy: (delta) ->\n    @debugIfFloats()\n    # delta can be either a Point or a Number\n    result = new @constructor()\n    result.origin = @origin.subtract delta\n    result.corner = @corner.add delta\n    result.debugIfFloats()\n    result\n  \n  growBy: (delta) ->\n    @debugIfFloats()\n    # delta can be either a Point or a Number\n    result = new @constructor()\n    result.origin = @origin.copy()\n    result.corner = @corner.add delta\n    result.debugIfFloats()\n    result\n  \n  # Note that "negative" rectangles can come\n  # out of this operation. E.g.\n  # new Rectangle(10,10,20,20).intersect(new Rectangle(15,25,19,25))\n  # gives a rectangle with the corner above the origin.\n  intersect: (aRect) ->\n    @debugIfFloats()\n    a = @zeroIfNegative()\n    b = aRect.zeroIfNegative()\n    if a.isEmpty() or b.isEmpty()\n      return @constructor.EMPTY\n    result = new @constructor()\n    result.origin = a.origin.max b.origin\n    result.corner = a.corner.min b.corner\n    result = result.zeroIfNegative()\n    result.debugIfFloats()\n    result\n\n  zeroIfNegative: () ->\n    @debugIfFloats()\n    if @isEmpty()\n      return @constructor.EMPTY\n    return @\n  \n  merge: (aRect) ->\n    @debugIfFloats()\n    a = @zeroIfNegative()\n    b = aRect.zeroIfNegative()\n    if a.isEmpty()\n      return b\n    if b.isEmpty()\n      return a\n    result = new @constructor()\n    result.origin = a.origin.min b.origin\n    result.corner = a.corner.max aRect.corner\n    result.debugIfFloats()\n    result\n  \n  round: ->\n    @origin.round().corner @corner.round()\n\n  floor: ->\n    @origin.floor().corner @corner.floor()\n\n  ceil: ->\n    @origin.ceil().corner @corner.ceil()\n  \n  spread: ->\n    @debugIfFloats()\n    # round me by applying floor() to my origin and ceil() to my corner\n    @origin.floor().corner @corner.ceil()\n  \n  amountToTranslateWithin: (aRect) ->\n    @debugIfFloats()\n    #\n    #    Answer a Point, delta, such that self + delta is forced within\n    #    aRectangle. when all of me cannot be made to fit, prefer to keep\n    #    my topLeft inside. Taken from Squeak.\n    #\n    dx = aRect.right() - @right()  if @right() > aRect.right()\n    dy = aRect.bottom() - @bottom()  if @bottom() > aRect.bottom()\n    dx = aRect.left() - @left()  if (@left() + dx) < aRect.left()\n    dy = aRect.top() - @top()  if (@top() + dy) < aRect.top()\n    new Point dx, dy\n  \n  toLocalCoordinatesOf: (aMorph) ->\n    new @constructor @origin.x - aMorph.left(),@origin.y - aMorph.top(),@corner.x - aMorph.left(),@corner.y - aMorph.top()\n  \n  # Rectangle testing:\n  containsPoint: (aPoint) ->\n    @debugIfFloats()\n    @origin.le(aPoint) and aPoint.lt(@corner)\n  \n  containsRectangle: (aRect) ->\n    @debugIfFloats()\n    aRect.origin.ge(@origin) and aRect.corner.le(@corner)\n\n  isIntersecting: (aRect) ->\n    @debugIfFloats()\n    ro = aRect.origin\n    rc = aRect.corner\n    rc.x >= @origin.x and\n      rc.y >= @origin.y and\n      ro.x <= @corner.x and\n      ro.y <= @corner.y\n  \n  \n  # Rectangle transforming:\n  scaleBy: (scale) ->\n    @debugIfFloats()\n    # scale can be either a Point or a scalar\n    o = @origin.multiplyBy scale\n    c = @corner.multiplyBy scale\n    new @constructor o.x, o.y, c.x, c.y\n  \n  translateBy: (factor) ->\n    @debugIfFloats()\n    # factor can be either a Point or a scalar\n    o = @origin.add factor\n    c = @corner.add factor\n    new @constructor o.x, o.y, c.x, c.y\n  \n  translateTo: (aPoint) ->\n    @debugIfFloats()\n    c = @corner\n    new @constructor aPoint.x, aPoint.y, c.x, c.y\n  \n  \n  # Rectangle converting:\n  asArray: ->\n    @debugIfFloats()\n    [@left(), @top(), @right(), @bottom()]\n  \n  asArray_xywh: ->\n    @debugIfFloats()\n    [@left(), @top(), @width(), @height()]\n';
