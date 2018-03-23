// Generated by CoffeeScript 1.12.7
window.ReconfigurablePaintWdgt_coffeSource = 'class ReconfigurablePaintWdgt extends StretchableEditableWdgt\n\n  mainCanvas: nil\n  overlayCanvas: nil\n  pencilToolButton: nil\n  brushToolButton: nil\n  toothpasteToolButton: nil\n  eraserToolButton: nil\n  highlightedToolIconColor: new Color 245, 126, 0\n\n\n  colloquialName: ->   \n    "Drawings Maker"\n\n  representativeIcon: ->\n    new PaintBucketIconWdgt()\n\n\n  isToolPressed: (buttonToCheckIfPressed) ->\n    whichButtonIsSelected = @toolsPanel.whichButtonSelected()\n    if whichButtonIsSelected?\n      if whichButtonIsSelected == buttonToCheckIfPressed.parent\n        return true\n      else\n        return false\n    return false\n\n  # normally a button injects new code only when\n  # is pressed, BUT here we make it so we inject new\n  # code also if the tool is selected, without it to\n  # be re-pressed. In order to do that, we\n  # simply listen to a notification of new code being\n  # available from a button, we check if it\'s selected\n  # and in that case we tell the button to actually\n  # inject the code.\n  newCodeToInjectFromButton: (whichButtonHasNewCode) ->\n    debugger\n    if @isToolPressed whichButtonHasNewCode\n      whichButtonHasNewCode.injectCodeIntoTarget()\n\n  createNewStretchablePanel: ->\n    # mainCanvas\n    @stretchableWidgetContainer = new StretchableWidgetContainerWdgt new StretchableCanvasWdgt()\n    @stretchableWidgetContainer.disableDrops()\n    @add @stretchableWidgetContainer\n\n    @mainCanvas = @stretchableWidgetContainer.contents\n\n    # overlayCanvas\n    @overlayCanvas = new CanvasGlassTopWdgt()\n    @overlayCanvas.underlyingCanvasMorph = @mainCanvas\n    @overlayCanvas.disableDrops()\n    @mainCanvas.add @overlayCanvas\n\n    # if you clear the overlay to perfectly\n    # transparent, then we need to set this flag\n    # otherwise the pointer won\'t be reported\n    # as moving inside the canvas.\n    # If you give the overlay canvas even the smallest\n    # tint then you don\'t need this flag.\n    @overlayCanvas.noticesTransparentClick = true\n\n\n    @overlayCanvas.injectProperty "mouseLeave", """\n        # don\'t leave any trace behind then the pointer\n        # moves out.\n        (pos) ->\n            context = @backBufferContext\n            context.setTransform 1, 0, 0, 1, 0, 0\n            context.clearRect 0, 0, @width() * pixelRatio, @height() * pixelRatio\n            @changed()\n    """\n\n  createToolsPanel: ->\n    @toolsPanel = new RadioButtonsHolderMorph()\n    @add @toolsPanel\n\n    pencilButtonOff = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new Pencil2IconMorph()\n    pencilButtonOff.alpha = 0.1\n    pencilButtonOff.sourceCodeToBeInjected = """\n        mouseMove = (pos, mouseButton) ->\n            if world.hand.draggingSomething() then return\n            context = @backBufferContext\n            context.setTransform 1, 0, 0, 1, 0, 0\n            context.clearRect 0, 0, @width() * pixelRatio, @height() * pixelRatio\n            context.scale pixelRatio, pixelRatio\n\n            # give it a little bit of a tint so\n            # you can see the canvas when you take it\n            # apart from the paint tool.\n            #context.fillStyle = (new Color 0,255,0,0.5).toString()\n            #context.fillRect 0, 0, @width(), @height()\n\n            context.translate -@bounds.origin.x, -@bounds.origin.y\n            context.translate pos.x, pos.y\n\n            context.beginPath()\n            context.lineWidth="2"\n\n            if mouseButton == \'left\'\n                contextMain = @underlyingCanvasMorph.getContextForPainting()\n                contextMain.translate pos.x, pos.y\n\n                contextMain.beginPath()\n                contextMain.lineWidth="2"\n                contextMain.fillStyle = "black"\n                contextMain.rect(-2,-2,4,4)\n                contextMain.fill()\n                @underlyingCanvasMorph.changed()\n\n            else\n                context.strokeStyle="red"\n                context.rect(-2,-2,4,4)\n                context.stroke()\n            @changed()\n        """\n\n    pencilButtonOn = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new Pencil2IconMorph @highlightedToolIconColor\n    pencilButtonOn.alpha = 0.1\n    pencilButtonOn.sourceCodeToBeInjected = "mouseMove = -> return"\n\n    @pencilToolButton = new ToggleButtonMorph pencilButtonOff, pencilButtonOn\n\n\n\n\n    brushToolButtonOff = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new BrushIconMorph()\n    brushToolButtonOff.alpha = 0.1\n\n    brushToolButtonOff.sourceCodeToBeInjected = """\n        mouseMove = (pos, mouseButton) ->\n            if world.hand.draggingSomething() then return\n            context = @backBufferContext\n            context.setTransform 1, 0, 0, 1, 0, 0\n            context.clearRect 0, 0, @width() * pixelRatio, @height() * pixelRatio\n            context.scale pixelRatio, pixelRatio\n\n            context.translate -@bounds.origin.x, -@bounds.origin.y\n            context.translate pos.x, pos.y\n\n            context.beginPath()\n            context.lineWidth="2"\n\n            if mouseButton == \'left\'\n                context.fillStyle = "red"\n\n                contextMain = @underlyingCanvasMorph.getContextForPainting()\n                contextMain.translate pos.x, pos.y\n                contextMain.fillStyle = "black"\n\n                # the brush is 16 x 16, so center it\n                contextMain.translate -8, -8\n\n                # for convenience, the brush has been\n                # drawn first using 6x6 squares, so now\n                # scale those back\n                contextMain.scale 1/6, 1/6\n\n                contextMain.beginPath()\n                contextMain.rect 48, 0, 6, 6\n                contextMain.rect 36, 6, 6, 6\n                contextMain.rect 54, 6, 6, 6\n                contextMain.rect 66, 6, 6, 6\n                contextMain.rect 30, 12, 12, 6\n                contextMain.rect 48, 12, 6, 6\n                contextMain.rect 72, 12, 6, 6\n                contextMain.rect 12, 18, 36, 6\n                contextMain.rect 60, 18, 6, 6\n                contextMain.rect 78, 18, 6, 6\n                contextMain.rect 24, 24, 42, 6\n                contextMain.rect 72, 24, 6, 6\n                contextMain.rect 90, 24, 6, 6\n                contextMain.rect 18, 30, 42, 6\n                contextMain.rect 66, 30, 6, 6\n                contextMain.rect 18, 36, 36, 6\n                contextMain.rect 6, 36, 6, 6\n                contextMain.rect 60, 36, 12, 6\n                contextMain.rect 78, 36, 6, 6\n                contextMain.rect 90, 36, 6, 6\n                contextMain.rect 24, 42, 36, 6\n                contextMain.rect 66, 42, 12, 6\n                contextMain.rect 6, 48, 6, 6\n                contextMain.rect 18, 48, 6, 6\n                contextMain.rect 30, 48, 12, 6\n                contextMain.rect 54, 48, 6, 6\n                contextMain.rect 78, 48, 6, 6\n                contextMain.rect 36, 54, 6, 12\n                contextMain.rect 48, 54, 6, 6\n                contextMain.rect 60, 54, 12, 6\n                contextMain.rect 90, 54, 6, 6\n                contextMain.rect 6, 60, 6, 6\n                contextMain.rect 18, 60, 12, 6\n                contextMain.rect 54, 60, 6, 12\n                contextMain.rect 78, 60, 6, 6\n                contextMain.rect 0, 66, 6, 6\n                contextMain.rect 42, 66, 6, 12\n                contextMain.rect 66, 66, 6, 6\n                contextMain.rect 18, 72, 6, 6\n                contextMain.rect 30, 72, 6, 6\n                contextMain.rect 60, 78, 6, 6\n                contextMain.rect 78, 78, 6, 6\n                contextMain.rect 12, 84, 6, 6\n                contextMain.rect 36, 84, 6, 6\n                contextMain.rect 54, 84, 6, 6\n                contextMain.rect 42, 90, 6, 6\n                contextMain.rect 18, 6, 6, 6\n                contextMain.rect 6, 24, 6, 6\n                contextMain.rect 0, 42, 6, 6\n                contextMain.fill()\n\n\n                @underlyingCanvasMorph.changed()\n\n            else\n                context.strokeStyle="green"\n            context.rect(-5,-5,10,10)\n            context.stroke()\n            @changed()\n        """\n\n    brushToolButtonOn = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new BrushIconMorph @highlightedToolIconColor\n    brushToolButtonOn.alpha = 0.1\n    brushToolButtonOn.sourceCodeToBeInjected = "mouseMove = -> return"\n    @brushToolButton = new ToggleButtonMorph brushToolButtonOff, brushToolButtonOn\n\n\n    toothpasteToolButtonOff = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new ToothpasteIconMorph()\n    toothpasteToolButtonOff.alpha = 0.1\n\n    toothpasteToolButtonOff.sourceCodeToBeInjected = """\n        # Toothpaste graphics\n        # original implementation by Ward Cunningham, from Tektronix Smalltalk\n        # implementation of Smalltalk 80\n        # on the Magnolia (1980-1983) and the Tek 4404 (1984)\n        # "Draw spheres ala Ken Knowlton, Computer Graphics, v15 n4 p352."\n\n        paintBrush = (contextMain) ->\n            contextMain.save()\n            # the brush is 16 x 16, so center it\n            contextMain.translate -8, -8\n\n            # for convenience, the brush has been\n            # drawn first using 6x6 squares, so now\n            # scale those back\n            contextMain.scale 1/6, 1/6\n\n            contextMain.beginPath()\n            contextMain.rect 48, 0, 6, 6\n            contextMain.rect 36, 6, 6, 6\n            contextMain.rect 54, 6, 6, 6\n            contextMain.rect 66, 6, 6, 6\n            contextMain.rect 30, 12, 12, 6\n            contextMain.rect 48, 12, 6, 6\n            contextMain.rect 72, 12, 6, 6\n            contextMain.rect 12, 18, 36, 6\n            contextMain.rect 60, 18, 6, 6\n            contextMain.rect 78, 18, 6, 6\n            contextMain.rect 24, 24, 42, 6\n            contextMain.rect 72, 24, 6, 6\n            contextMain.rect 90, 24, 6, 6\n            contextMain.rect 18, 30, 42, 6\n            contextMain.rect 66, 30, 6, 6\n            contextMain.rect 18, 36, 36, 6\n            contextMain.rect 6, 36, 6, 6\n            contextMain.rect 60, 36, 12, 6\n            contextMain.rect 78, 36, 6, 6\n            contextMain.rect 90, 36, 6, 6\n            contextMain.rect 24, 42, 36, 6\n            contextMain.rect 66, 42, 12, 6\n            contextMain.rect 6, 48, 6, 6\n            contextMain.rect 18, 48, 6, 6\n            contextMain.rect 30, 48, 12, 6\n            contextMain.rect 54, 48, 6, 6\n            contextMain.rect 78, 48, 6, 6\n            contextMain.rect 36, 54, 6, 12\n            contextMain.rect 48, 54, 6, 6\n            contextMain.rect 60, 54, 12, 6\n            contextMain.rect 90, 54, 6, 6\n            contextMain.rect 6, 60, 6, 6\n            contextMain.rect 18, 60, 12, 6\n            contextMain.rect 54, 60, 6, 12\n            contextMain.rect 78, 60, 6, 6\n            contextMain.rect 0, 66, 6, 6\n            contextMain.rect 42, 66, 6, 12\n            contextMain.rect 66, 66, 6, 6\n            contextMain.rect 18, 72, 6, 6\n            contextMain.rect 30, 72, 6, 6\n            contextMain.rect 60, 78, 6, 6\n            contextMain.rect 78, 78, 6, 6\n            contextMain.rect 12, 84, 6, 6\n            contextMain.rect 36, 84, 6, 6\n            contextMain.rect 54, 84, 6, 6\n            contextMain.rect 42, 90, 6, 6\n            contextMain.rect 18, 6, 6, 6\n            contextMain.rect 6, 24, 6, 6\n            contextMain.rect 0, 42, 6, 6\n            contextMain.fill()\n\n            contextMain.restore()\n\n        # you\'d be tempted to initialise the queue\n        # on mouseDown but it would be a bad idea\n        # because the mouse could come "already-pressed"\n        # from outside the canvas\n        initialiseQueueIfNeeded = ->\n            if !@queue?\n                @queue = [0..24].map -> nil\n            console.log "resetting the queue"\n\n        mouseUpLeft = ->\n            if world.hand.draggingSomething() then return\n            if @queue?\n                console.log "draining the queue"\n                contextMain = @underlyingCanvasMorph.getContextForPainting()\n                \n                until @queue.length == 0\n                    console.log @queue.length + " more point left to drain"\n                    previousPos = @queue[0]\n                    @queue.shift()\n                    if previousPos?\n                        contextMain.save()\n                        contextMain.translate previousPos.x, previousPos.y\n                        contextMain.fillStyle = "white"\n                        @paintBrush contextMain\n                        contextMain.restore()\n                delete @queue\n\n        mouseMove = (pos, mouseButton) ->\n            if world.hand.draggingSomething() then return\n            context = @backBufferContext\n            context.setTransform 1, 0, 0, 1, 0, 0\n            context.clearRect 0, 0, @width() * pixelRatio, @height() * pixelRatio\n            context.scale pixelRatio, pixelRatio\n\n            context.translate -@bounds.origin.x, -@bounds.origin.y\n            context.translate pos.x, pos.y\n\n            context.beginPath()\n            context.lineWidth="2"\n\n            if mouseButton == \'left\'\n                @initialiseQueueIfNeeded()\n                @queue.push pos\n                context.fillStyle = "red"\n\n                contextMain = @underlyingCanvasMorph.getContextForPainting()\n                \n                contextMain.save()\n                contextMain.translate pos.x, pos.y\n                contextMain.fillStyle = "black"\n                #@paintBrush contextMain\n                contextMain.beginPath()\n                contextMain.arc 0,0,9,0,2*Math.PI\n                contextMain.fill()\n                contextMain.restore()\n\n\n                previousPos = @queue[0]\n                @queue.shift()\n                if previousPos?\n                    contextMain.save()\n                    contextMain.translate previousPos.x, previousPos.y\n                    contextMain.fillStyle = "white"\n                    @paintBrush contextMain\n                    contextMain.restore()\n\n\n                @underlyingCanvasMorph.changed()\n\n            else\n                context.strokeStyle="green"\n            context.rect(-5,-5,10,10)\n            context.stroke()\n            @changed()\n        """\n\n    toothpasteToolButtonOn = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new ToothpasteIconMorph @highlightedToolIconColor\n    toothpasteToolButtonOn.alpha = 0.1\n    toothpasteToolButtonOn.sourceCodeToBeInjected = "mouseMove = -> return"\n    @toothpasteToolButton = new ToggleButtonMorph toothpasteToolButtonOff, toothpasteToolButtonOn\n\n\n    eraserToolButtonOff = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new EraserIconMorph()\n    eraserToolButtonOff.alpha = 0.1\n\n    eraserToolButtonOff.sourceCodeToBeInjected = """\n        mouseMove = (pos, mouseButton) ->\n            if world.hand.draggingSomething() then return\n            context = @backBufferContext\n            context.setTransform 1, 0, 0, 1, 0, 0\n            context.clearRect 0, 0, @width() * pixelRatio, @height() * pixelRatio\n            context.scale pixelRatio, pixelRatio\n\n            context.translate -@bounds.origin.x, -@bounds.origin.y\n            context.translate pos.x, pos.y\n\n            context.beginPath()\n            context.lineWidth="2"\n\n            if mouseButton == \'left\'\n                context.fillStyle = "red"\n\n                contextMain = @underlyingCanvasMorph.getContextForPainting()\n                contextMain.translate pos.x, pos.y\n\n                contextMain.beginPath()\n                contextMain.lineWidth="2"\n                contextMain.fillStyle = (new Color 255, 255, 255).toString()\n                contextMain.rect(-5,-5,10,10)\n                contextMain.fill()\n                @underlyingCanvasMorph.changed()\n\n            else\n                context.strokeStyle="green"\n            context.rect(-5,-5,10,10)\n            context.stroke()\n            @changed()\n        """\n\n    eraserToolButtonOn = new CodeInjectingSimpleRectangularButtonMorph @, @overlayCanvas, new EraserIconMorph @highlightedToolIconColor\n    eraserToolButtonOn.alpha = 0.1\n    eraserToolButtonOn.sourceCodeToBeInjected = "mouseMove = -> return"\n    @eraserToolButton = new ToggleButtonMorph eraserToolButtonOff, eraserToolButtonOn\n\n\n    pencilAnnotation = new EditableMarkMorph @pencilToolButton, pencilButtonOff, "editInjectableSource"\n    brushAnnotation = new EditableMarkMorph @brushToolButton, brushToolButtonOff, "editInjectableSource"\n    toothpasteAnnotation = new EditableMarkMorph @toothpasteToolButton, toothpasteToolButtonOff, "editInjectableSource"\n    eraserAnnotation = new EditableMarkMorph @eraserToolButton, eraserToolButtonOff, "editInjectableSource"\n\n    @toolsPanel.add @pencilToolButton\n    @toolsPanel.add @brushToolButton\n    @toolsPanel.add @toothpasteToolButton\n    @toolsPanel.add @eraserToolButton\n\n    @pencilToolButton.toggle()\n    @invalidateLayout()\n\n  reLayout: ->\n\n    # here we are disabling all the broken\n    # rectangles. The reason is that all the\n    # submorphs of the inspector are within the\n    # bounds of the parent Widget. This means that\n    # if only the parent morph breaks its rectangle\n    # then everything is OK.\n    # Also note that if you attach something else to its\n    # boundary in a way that sticks out, that\'s still\n    # going to be painted and moved OK.\n    trackChanges.push false\n\n    # label\n    labelLeft = @left() + @externalPadding\n    labelTop = @top() + @externalPadding\n    labelRight = @right() - @externalPadding\n    labelWidth = labelRight - labelLeft\n    labelBottom = @top() + @externalPadding\n\n    # tools -------------------------------\n\n    if @toolsPanel? and @toolsPanel.parent == @\n        toolButtonSize = new Point 93, 55\n    else\n        toolButtonSize = new Point 0, 0\n\n    eachPaneWidth = Math.floor(@width() - 2 * @externalPadding)\n\n    if @toolsPanel? and @toolsPanel.parent == @\n      eachPaneWidth -= Math.floor(@internalPadding + toolButtonSize.width())\n\n    b = @bottom() - (2 * @externalPadding)\n\n\n    if @toolsPanel? and @toolsPanel.parent == @\n      @toolsPanel.fullRawMoveTo new Point @left() + @externalPadding, labelBottom\n      @toolsPanel.rawSetExtent new Point 2 * @internalPadding + toolButtonSize.width(), @height() - 2 * @externalPadding\n\n      if @pencilToolButton.parent == @toolsPanel\n        buttonBounds = new Rectangle new Point @toolsPanel.left() + @internalPadding, labelBottom + @internalPadding\n        buttonBounds = buttonBounds.setBoundsWidthAndHeight toolButtonSize\n        @pencilToolButton.doLayout buttonBounds\n\n      if @brushToolButton.parent == @toolsPanel\n        buttonBounds = new Rectangle new Point @toolsPanel.left() + @internalPadding, @pencilToolButton.bottom() + @internalPadding\n        buttonBounds = buttonBounds.setBoundsWidthAndHeight toolButtonSize\n        @brushToolButton.doLayout buttonBounds\n\n      if @toothpasteToolButton.parent == @toolsPanel\n        buttonBounds = new Rectangle new Point @toolsPanel.left() + @internalPadding, @brushToolButton.bottom() + @internalPadding\n        buttonBounds = buttonBounds.setBoundsWidthAndHeight toolButtonSize\n        @toothpasteToolButton.doLayout buttonBounds\n\n      if @eraserToolButton.parent == @toolsPanel\n        buttonBounds = new Rectangle new Point @toolsPanel.left() + @internalPadding, @toothpasteToolButton.bottom() + @internalPadding\n        buttonBounds = buttonBounds.setBoundsWidthAndHeight toolButtonSize\n        @eraserToolButton.doLayout buttonBounds \n\n    # stretchableWidgetContainer --------------------------\n    if @toolsPanel? and @toolsPanel.parent == @\n      stretchableWidgetContainerWidth = @width() - @toolsPanel.width() - 2*@externalPadding - @internalPadding\n    else\n      stretchableWidgetContainerWidth = @width() - 2*@externalPadding\n\n    b = @bottom() - (2 * @externalPadding)\n    stretchableWidgetContainerHeight =  @height() - 2 * @externalPadding\n    stretchableWidgetContainerBottom = labelBottom + stretchableWidgetContainerHeight\n\n    if @toolsPanel? and @toolsPanel.parent == @\n      stretchableWidgetContainerLeft = @toolsPanel.right() + @internalPadding\n    else\n      stretchableWidgetContainerLeft = @left() + @externalPadding\n\n    if @stretchableWidgetContainer.parent == @\n      @stretchableWidgetContainer.fullRawMoveTo new Point stretchableWidgetContainerLeft, labelBottom\n      @stretchableWidgetContainer.setExtent new Point stretchableWidgetContainerWidth, stretchableWidgetContainerHeight\n\n\n    trackChanges.pop()\n    if AutomatorRecorderAndPlayer? and AutomatorRecorderAndPlayer.state != AutomatorRecorderAndPlayer.IDLE and AutomatorRecorderAndPlayer.alignmentOfMorphIDsMechanism\n      world.alignIDsOfNextMorphsInSystemTests()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n';