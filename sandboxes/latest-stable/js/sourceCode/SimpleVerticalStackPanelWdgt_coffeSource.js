// Generated by CoffeeScript 1.12.7
window.SimpleVerticalStackPanelWdgt_coffeSource = '# REQUIRES ClippingAtRectangularBoundsMixin\n\n\nclass SimpleVerticalStackPanelWdgt extends Widget\n\n  # stacks don\'t necessarily enforce a width on contents\n  # so the contents could stick out, so we clip at the bounds\n  @augmentWith ClippingAtRectangularBoundsMixin, @name\n\n  _acceptsDrops: true\n  tight: true\n  constrainContentWidth: true\n  # used to avoid recursively re-entering the\n  # adjustContentsBounds function\n  _adjustingContentsBounds: false\n\n  colloquialName: ->\n    "stack"\n\n  add: (aMorph, position = nil, layoutSpec = LayoutSpec.ATTACHEDAS_FREEFLOATING, beingDropped, unused, positionOnScreen) ->\n    aMorph.rawResizeToWithoutSpacing()\n\n    # find out WHERE to add the widget. Find the existing widget in the\n    # stack that is at the same height, and put the new\n    # widget after it\n\n    childrenNotHandlesNorCarets = @children.filter (m) ->\n      !((m instanceof HandleMorph) or (m instanceof CaretMorph))\n\n    # The vertical stack just lays down\n    # the children in the exact sibling order, so all we have to do\n    # is to count up to the child at the same height, say it\'s\n    # child "n", then are going to add the new widget in position\n    # "n+1".\n    # (conveniently, "add" supports an argument to insert a widget\n    # in a specific order among the siblings.)\n    positionNumberAmongSiblings = nil\n    if (childrenNotHandlesNorCarets.length > 0) and (positionOnScreen instanceof Point)\n      positionNumberAmongSiblings = 0\n      for eachChild in childrenNotHandlesNorCarets\n        positionNumberAmongSiblings++\n        if eachChild.top() < positionOnScreen.y and eachChild.bottom() > positionOnScreen.y\n          break\n\n    if positionNumberAmongSiblings?\n      super aMorph, positionNumberAmongSiblings, layoutSpec, beingDropped\n    else\n      super\n\n  constructor: (extent, color, @padding, @constrainContentWidth = true) ->\n    super()\n    @appearance = new RectangularAppearance @\n    @silentRawSetExtent(extent) if extent?\n    @color = color if color?\n\n  childRemoved: ->\n    if @amIPanelOfScrollPanelWdgt()\n      @parent.adjustContentsBounds()\n      @parent.adjustScrollBars()\n      return\n    @adjustContentsBounds()\n\n  reactToDropOf: ->\n    if @amIPanelOfScrollPanelWdgt()\n      @parent.adjustContentsBounds()\n      @parent.adjustScrollBars()\n      return\n    @adjustContentsBounds()\n\n  initialiseDefaultWindowContentLayoutSpec: ->\n    super\n    @layoutSpecDetails.canSetHeightFreely = false\n\n  availableWidthForContents: ->\n    @width() - 2 * @padding\n\n  adjustContentsBounds: ->\n    # avoid recursively re-entering this function\n    if @_adjustingContentsBounds then return else @_adjustingContentsBounds = true\n    @padding = 5\n    totalPadding = 2 * @padding\n\n    stackHeight = 0\n    verticalPadding = 0\n\n    childrenNotHandlesNorCarets = @children.filter (m) ->\n      !((m instanceof HandleMorph) or (m instanceof CaretMorph))\n\n    childrenNotHandlesNorCarets.forEach (morph) =>\n      if morph.layoutSpec != LayoutSpec.ATTACHEDAS_VERTICAL_STACK_ELEMENT\n        morph.initialiseDefaultVerticalStackLayoutSpec()\n        morph.layoutSpecDetails.rememberInitialDimensions morph, @\n        morph.setLayoutSpec LayoutSpec.ATTACHEDAS_VERTICAL_STACK_ELEMENT\n\n    childrenNotHandlesNorCarets.forEach (morph) =>\n      verticalPadding += @padding\n\n      if !@constrainContentWidth\n        recommendedElementWidth = morph.width()\n        # if the stack doesn\'t contrain the positions of the\n        # contents then it\'s much harder to right/left/center align\n        # things, because for example imagine this case: you\n        # remove an element from the stack. Now, something that was\n        # centered ends up defining the new bounds of the Stack.\n        # But hey, that shouldn\'t have happened because that element\n        # was centered, so it could not possibly define the bounds...\n        # So the determination of the bounds becomes rather more\n        # complex, we are skipping that for the time being: if a stack\n        # doesn\'t contrain the widths of the contents then everything in\n        # it looks left-aligned\n        leftPosition = @left() + @padding\n      else\n        recommendedElementWidth = morph.layoutSpecDetails.getWidthInStack()\n\n        # this re-layouts each widget to fit the width.\n        morph.rawSetWidthSizeHeightAccordingly recommendedElementWidth\n\n        # the SimplePlainTextWdgt just needs this to be different from null\n        # while the TextMorph actually uses this number\n        if (morph instanceof TextMorph) or (morph instanceof SimplePlainTextWdgt)\n          morph.maxTextWidth = recommendedElementWidth\n\n        if morph.layoutSpecDetails.alignment == \'right\'\n          leftPosition = @left() + @width() - @padding - recommendedElementWidth\n        else if morph.layoutSpecDetails.alignment == \'center\'\n          leftPosition = @left() + Math.floor (@width() - recommendedElementWidth) / 2\n        else\n          # we hope here that  morph.layoutSpecDetails.alignment == \'left\'\n          leftPosition = @left() + @padding\n\n\n      morph.fullRawMoveTo new Point leftPosition, @top() + verticalPadding + stackHeight\n      stackHeight += morph.height()\n\n    newHeight = stackHeight + verticalPadding + @padding\n\n    if !@tight or childrenNotHandlesNorCarets.length == 0\n      newHeight = Math.max newHeight, @height()\n\n    @rawSetHeight newHeight\n    @_adjustingContentsBounds = false\n\n  rawSetExtent: (aPoint) ->\n    unless aPoint.eq @extent()\n      #console.log "move 15"\n      @breakNumberOfRawMovesAndResizesCaches()\n      super aPoint\n      @adjustContentsBounds()\n';
