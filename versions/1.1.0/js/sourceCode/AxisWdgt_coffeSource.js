// Generated by CoffeeScript 1.12.7
window.AxisWdgt_coffeSource = 'class AxisWdgt extends Widget\n\n  majorDimLine: nil\n  ticksRectangles: nil\n  labelsTextBoxes: nil\n  min: 0\n  max: 0\n\n  constructor: (@min = -15, @max = 15) ->\n    debugger\n    super()\n    @ticksRectangles = []\n    @labelsTextBoxes = []\n    @buildAndConnectChildren()\n\n  buildAndConnectChildren: ->\n\n    @majorDimLine = new RectangleMorph()\n    @majorDimLine.minimumExtent = new Point 1,1\n\n    @add @majorDimLine\n\n    numberOfTicks = @max - @min + 1\n    for i in [0 ... numberOfTicks]\n      @ticksRectangles[i] = new RectangleMorph()\n      @ticksRectangles[i].minimumExtent = new Point 1,1\n      @add @ticksRectangles[i]\n\n      @labelsTextBoxes[i] = new StringMorph2 ""\n      @labelsTextBoxes[i].fittingSpecWhenBoundsTooLarge = FittingSpecTextInLargerBounds.SCALEUP\n      @labelsTextBoxes[i].fittingSpecWhenBoundsTooSmall = FittingSpecTextInSmallerBounds.SCALEDOWN\n      @add @labelsTextBoxes[i]\n\n    @invalidateLayout()\n\n  rawSetExtent: (aPoint) ->\n    super\n    @invalidateLayout()\n\n  # TODO some duplication of code here with\n  # the method below\n  distanceOfAxisOriginFromEdge: ->\n    height = @height()\n    width = @width()\n\n    numberOfTicks = @max - @min + 1\n    if height > width\n      # vert axis\n      tickHeight = height/(numberOfTicks + 1)\n      return new Point -5, tickHeight\n    else\n      # horiz axis\n      tickHeight = width/(numberOfTicks + 1)\n      return new Point tickHeight, 5 \n\n\n  doLayout: (newBoundsForThisLayout) ->\n    if !window.recalculatingLayouts\n      debugger\n\n    if !newBoundsForThisLayout?\n      if @desiredExtent?\n        newBoundsForThisLayout = @desiredExtent\n        @desiredExtent = nil\n      else\n        newBoundsForThisLayout = @extent()\n\n      if @desiredPosition?\n        newBoundsForThisLayout = (new Rectangle @desiredPosition).setBoundsWidthAndHeight newBoundsForThisLayout\n        @desiredPosition = nil\n      else\n        newBoundsForThisLayout = (new Rectangle @position()).setBoundsWidthAndHeight newBoundsForThisLayout\n\n    if @isCollapsed()\n      @layoutIsValid = true\n      @notifyChildrenThatParentHasReLayouted()\n      return\n\n    debugger\n    @rawSetBounds newBoundsForThisLayout\n\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Widget. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    height = @height()\n    width = @width()\n\n    numberOfTicks = @max - @min + 1\n    if height > width\n      tickHeight = height/(numberOfTicks + 1)\n    else\n      tickHeight = width/(numberOfTicks + 1)\n    heightOfTheDrawnBar = (numberOfTicks - 1) * tickHeight\n\n    thickness = 2\n    labelSizeReduction = 0.7\n    labelSpace = tickHeight* labelSizeReduction\n\n    if height > width\n      @majorDimLine.fullRawMoveTo new Point @right() - 5, @top() + tickHeight\n      @majorDimLine.setExtent new Point thickness, heightOfTheDrawnBar\n    else\n      @majorDimLine.fullRawMoveTo new Point @left() + tickHeight, @top() + 5\n      @majorDimLine.setExtent new Point heightOfTheDrawnBar, thickness \n\n    for i in [0 ... numberOfTicks]\n      if height > width\n        @ticksRectangles[i].fullRawMoveTo new Point @right()-10, @top() + tickHeight + Math.round(i * tickHeight)\n        @ticksRectangles[i].setExtent new Point 5 + thickness, thickness\n\n        @labelsTextBoxes[i].setText "" + (@max - i)\n        @labelsTextBoxes[i].fullRawMoveTo new Point @left(), @top() + tickHeight + Math.round(i * tickHeight) - labelSpace/2\n        @labelsTextBoxes[i].setExtent new Point width - 10, labelSpace\n        @labelsTextBoxes[i].alignMiddle()\n        @labelsTextBoxes[i].alignRight()\n\n      else\n        @ticksRectangles[i].fullRawMoveTo new Point @left() + tickHeight + Math.round(i * tickHeight), @top() + 5\n        @ticksRectangles[i].setExtent new Point thickness, 5 + thickness\n\n        @labelsTextBoxes[i].setText "" + (@min + i)\n        @labelsTextBoxes[i].fullRawMoveTo new Point @left() + tickHeight + Math.round(i * tickHeight) - labelSpace/2, @top() + 5 + 5\n        @labelsTextBoxes[i].setExtent new Point labelSpace, height - 10\n        @labelsTextBoxes[i].alignTop()\n        @labelsTextBoxes[i].alignCenter()\n\n\n    trackChanges.pop()\n    @fullChanged()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()';
