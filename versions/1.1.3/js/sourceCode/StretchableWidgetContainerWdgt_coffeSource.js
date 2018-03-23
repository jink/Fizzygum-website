// Generated by CoffeeScript 1.12.7
window.StretchableWidgetContainerWdgt_coffeSource = '# REQUIRES StretchablePanelWdgt\n\n# We need this because we need a panel that keeps its content\n# all in the same relative positions and sizes when its\n# resized, so you can drag and drop it inside stacks\n# and resizable windows and it doesn\'t mangle the contents\n# when it\'s resized. The way to achieve that is to\n# have a container and a type of panel that works together\n# to "cristallize" a specific width/height ratio as soon\n# as there is one element dropped/added in the panel.\n# So when the panel is empty, you can give it any shape you\n# want, but as soon as there is one element, it sticks\n# to the ratio it has.\n\nclass StretchableWidgetContainerWdgt extends Widget\n\n  ratio: nil\n  contents: nil\n\n  constructor: (contents) ->\n    debugger\n    super new Point 300, 300\n    \n    if !contents?\n      contents = new StretchablePanelWdgt()\n\n    @add contents\n    @contents = contents\n\n    @rawSetExtent new Point 300, 300\n    @contents.rawSetExtent new Point @width(), @height()\n    @invalidateLayout()\n\n  # actually\n  # ends up in the Panel inside it\n  add: (aMorph, position = nil, layoutSpec = LayoutSpec.ATTACHEDAS_FREEFLOATING, beingDropped) ->\n    debugger\n    if !@contents? or (aMorph instanceof ModifiedTextTriangleAnnotationWdgt) or\n     (aMorph instanceof HandleMorph)\n      super\n    else\n      @contents.add aMorph, position, layoutSpec, beingDropped\n      @grandChildAdded?()\n\n  setRatio: (@ratio) ->\n    @layoutSpecDetails?.canSetHeightFreely = false\n\n  resetRatio: ->\n    if @ratio?\n      @ratio = nil\n      @layoutSpecDetails?.canSetHeightFreely = true\n      @invalidateLayout()\n\n\n  colloquialName: ->\n    "stretchable panel"\n\n  initialiseDefaultWindowContentLayoutSpec: ->\n    super\n    @layoutSpecDetails.canSetHeightFreely = !@ratio?\n\n\n  widthWithoutSpacing: ->\n    height = @height()\n    width = @width()\n\n    if @ratio?\n      widthBasedOnHeight = height * @ratio\n      heightBasedOnWidth = width / @ratio\n\n      if widthBasedOnHeight <= width\n        return widthBasedOnHeight\n\n      else if heightBasedOnWidth <= height\n        return width\n\n    else\n        return width\n\n  rawResizeToWithoutSpacing: ->\n    if @ratio?\n      @rawSetExtent new Point @widthWithoutSpacing(), Math.round(@widthWithoutSpacing()/@ratio)\n      @invalidateLayout()\n\n  rawSetWidthSizeHeightAccordingly: (newWidth) ->\n    debugger\n    childrenNotHandlesNorCarets = @contents.children.filter (m) ->\n      !((m instanceof HandleMorph) or (m instanceof CaretMorph))\n\n    if childrenNotHandlesNorCarets.length != 0\n      if !@ratio?\n        @ratio = @width() / @height()\n        @layoutSpecDetails?.canSetHeightFreely = false\n      @rawSetExtent new Point newWidth, Math.round(newWidth/@ratio)\n      @invalidateLayout()\n    else\n      @rawSetExtent new Point newWidth, @height()\n      @invalidateLayout()\n\n\n  rawSetExtent: (extent) ->\n\n    if extent.eq @extent()\n      return\n\n    super\n    @doLayout @bounds\n\n\n  doLayout: (newBoundsForThisLayout) ->\n    if !window.recalculatingLayouts\n      debugger\n\n    #console.log "spanel @contents: " + @contents + " doLayout 1"\n\n\n    if !newBoundsForThisLayout?\n      if @desiredExtent?\n        newBoundsForThisLayout = @desiredExtent\n        @desiredExtent = nil\n      else\n        newBoundsForThisLayout = @extent()\n\n      if @desiredPosition?\n        newBoundsForThisLayout = (new Rectangle @desiredPosition).setBoundsWidthAndHeight newBoundsForThisLayout\n        @desiredPosition = nil\n      else\n        newBoundsForThisLayout = (new Rectangle @position()).setBoundsWidthAndHeight newBoundsForThisLayout\n\n    if @isCollapsed()\n      @layoutIsValid = true\n      @notifyChildrenThatParentHasReLayouted()\n      return\n\n    #console.log "spanel @contents: " + @contents + " doLayout 2"\n\n    debugger\n\n\n    @rawSetBounds newBoundsForThisLayout\n\n    #console.log "spanel @contents: " + @contents + " doLayout 3"\n\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Widget. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    height = @height()\n    width = @width()\n\n    if @ratio?\n      widthBasedOnHeight = height * @ratio\n      heightBasedOnWidth = width / @ratio\n\n       # p0 is the origin, the origin being in the top-left corner\n      p0 = @topLeft()\n\n      if widthBasedOnHeight <= width\n        p0 = p0.add new Point (width - widthBasedOnHeight) / 2 , 0\n        newExtent = new Point widthBasedOnHeight, height\n\n      else if heightBasedOnWidth <= height\n        p0 = p0.add new Point 0 , (height - heightBasedOnWidth) / 2\n        newExtent = new Point width, heightBasedOnWidth\n\n      newBounds = (new Rectangle p0).setBoundsWidthAndHeight newExtent\n      #console.log "spanel @contents: " + @contents + " bounds: " + newBounds.round()\n      @contents.doLayout newBounds.round()\n\n    else\n      @contents.doLayout @bounds\n\n\n\n    trackChanges.pop()\n    @fullChanged()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n  # same as simpledocumentscrollpanel, you can lock the contents.\n  # worth factoring it out as a mixin?\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n\n    childrenNotHandlesNorCarets = @children.filter (m) ->\n      !((m instanceof HandleMorph) or (m instanceof CaretMorph))\n\n    if childrenNotHandlesNorCarets? and childrenNotHandlesNorCarets.length > 0\n      menu.addLine()\n      if !@dragsDropsAndEditingEnabled\n        menu.addMenuItem "enable editing", true, @, "enableDragsDropsAndEditing", "lets you drag content in and out"\n      else\n        menu.addMenuItem "disable editing", true, @, "disableDragsDropsAndEditing", "prevents dragging content in and out"\n\n    menu.removeConsecutiveLines()\n\n  enableDragsDropsAndEditing: (triggeringWidget) ->\n    debugger\n    if !triggeringWidget? then triggeringWidget = @\n    if @dragsDropsAndEditingEnabled\n      return\n    @parent?.makePencilYellow?()\n    if @parent? and @parent != triggeringWidget and @parent instanceof SimpleSlideWdgt\n      @parent.enableDragsDropsAndEditing @\n    else\n      super @\n\n  disableDragsDropsAndEditing: (triggeringWidget) ->\n    debugger\n    if !triggeringWidget? then triggeringWidget = @\n    if !@dragsDropsAndEditingEnabled\n      return\n    @parent?.makePencilClear?()\n    if @parent? and @parent != triggeringWidget and @parent instanceof SimpleSlideWdgt\n      @parent.disableDragsDropsAndEditing @\n    else\n      super @\n';
