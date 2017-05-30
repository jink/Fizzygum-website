// Generated by CoffeeScript 1.10.0
window.TextMorph_coffeSource = '# TextMorph ///////////////////////////////////////////////////////////\n# these comments below needed to figure out dependencies between classes\n\n# I am a multi-line, word-wrapping String\n\n\nclass TextMorph extends StringMorph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  words: []\n  lines: []\n  lineSlots: []\n  alignment: null\n  maxTextWidth: null\n  maxLineWidth: 0\n  backgroundColor: null\n\n  #additional properties for ad-hoc evaluation:\n  receiver: null\n\n  constructor: (\n    @text = (if text is "" then text else "TextMorph"),\n    @fontSize = 12,\n    @fontStyle = "sans-serif",\n    @isBold = false,\n    @isItalic = false,\n    @alignment = "left",\n    @maxTextWidth = 0,\n    @fontName = "",\n    @shadowOffset = (new Point 0, 0),\n    @shadowColor = null\n    ) ->\n\n      super \\\n        @text,\n        @fontSize,\n        @fontStyle,\n        @isBold,\n        @isItalic,\n        null,\n        @shadowOffset,\n        @shadowColor,\n        null,\n        @fontName\n      # override inherited properties:\n      @markedTextColor = new Color 255, 255, 255\n      @markedBackgoundColor = new Color 60, 60, 120\n      @color = new Color 0, 0, 0\n      @noticesTransparentClick = true\n  \n  breakTextIntoLines: ->\n    paragraphs = @text.split "\\n"\n    canvas = newCanvas()\n    context = canvas.getContext "2d"\n    context.scale pixelRatio, pixelRatio\n    currentLine = ""\n    slot = 0\n    context.font = @buildCanvasFontProperty()\n    @maxLineWidth = 0\n    @lines = []\n    @lineSlots = [0]\n    @words = []\n    \n    # put all the text in an array, word by word\n    paragraphs.forEach (p) =>\n      @words = @words.concat p.split " "\n      @words.push "\\n"\n\n    # takes the text, word by word, and re-flows\n    # it according to the available width for the\n    # text (if there is such limit).\n    # The end result is an array of lines\n    # called @lines, which contains the string for\n    # each line (excluding the end of lines).\n    # Also another array is created, called\n    # @lineSlots, which memorises how many characters\n    # of the text have been consumed up to each line\n    #  example: original text: "Hello\\nWorld"\n    # then @lines[0] = "Hello" @lines[1] = "World"\n    # and @lineSlots[0] = 6, @lineSlots[1] = 11\n    # Note that this algorithm doesn\'t work in case\n    # of single non-spaced words that are longer than\n    # the allowed width.\n    @words.forEach (word) =>\n      if word is "\\n"\n        # we reached the end of the line in the\n        # original text, so push the line and the\n        # slots count in the arrays\n        @lines.push currentLine\n        @lineSlots.push slot\n        @maxLineWidth = Math.max @maxLineWidth, Math.ceil context.measureText(currentLine).width\n        currentLine = ""\n      else\n        if @maxTextWidth > 0\n          # there is a width limit, so we need\n          # to check whether we overflowed it. So create\n          # a prospective line and then check its width.\n          lineForOverflowTest = currentLine + word + " "\n          w = Math.ceil(context.measureText(lineForOverflowTest).width)\n          if w > @maxTextWidth\n            # ok we just overflowed the available space,\n            # so we need to push the old line and its\n            # "slot" number to the respective arrays.\n            # the new line is going to only contain the\n            # word that has caused the overflow.\n            @lines.push currentLine\n            @lineSlots.push slot\n            @maxLineWidth = Math.max @maxLineWidth, Math.ceil context.measureText(currentLine).width\n            currentLine = word + " "\n          else\n            # no overflow happened, so just proceed as normal\n            currentLine = lineForOverflowTest\n        else\n          currentLine = currentLine + word + " "\n        slot += word.length + 1\n  \n\n  reLayout: ->\n    super()\n    ANimage = newCanvas()\n    context = ANimage.getContext "2d"\n    context.font = @buildCanvasFontProperty()\n    @breakTextIntoLines()\n\n    shadowWidth = Math.abs @shadowOffset.x\n    shadowHeight = Math.abs @shadowOffset.y\n    height = @lines.length * (Math.ceil(fontHeight @fontSize) + shadowHeight)\n    if @maxTextWidth is 0\n      @silentRawSetExtent new Point @maxLineWidth + shadowWidth, height\n    else\n      @silentRawSetExtent new Point @maxTextWidth + shadowWidth, height\n    @parent.layoutChanged()  if @parent.layoutChanged  if @parent\n    @notifyChildrenThatParentHasReLayouted()\n\n  # no changes of position or extent should be\n  # performed in here\n  createRefreshOrGetBackBuffer: ->\n\n    cacheKey =\n      @extent().toString()  + "-" +\n      @buildCanvasFontProperty()  + "-" +\n      @alignment  + "-" +\n      @backgroundColor?.toString()  + "-" +\n      @color.toString()  + "-" +\n      hashCode(@text)  + "-" +\n      @startMark  + "-" +\n      @endMark  + "-" +\n      @markedBackgoundColor.toString()\n\n    cacheHit = world.cacheForImmutableBackBuffers.get cacheKey\n    if cacheHit? then return cacheHit\n\n\n    backBuffer = newCanvas()\n    backBufferContext = backBuffer.getContext "2d"\n\n    shadowWidth = Math.abs @shadowOffset.x\n    shadowHeight = Math.abs @shadowOffset.y\n\n\n    backBuffer.width = @width() * pixelRatio\n    backBuffer.height = @height() * pixelRatio\n\n    # changing the canvas size resets many of\n    # the properties of the canvas, so we need to\n    # re-initialise the font and alignments here\n    backBufferContext.scale pixelRatio, pixelRatio\n    backBufferContext.font = @buildCanvasFontProperty()\n    backBufferContext.textAlign = "left"\n    backBufferContext.textBaseline = "bottom"\n\n    # fill the background, if desired\n    if @backgroundColor\n      backBufferContext.fillStyle = @backgroundColor.toString()\n      backBufferContext.fillRect 0, 0, @width(), @height()\n\n    # draw the shadow, if any\n    if @shadowColor\n      offx = Math.max @shadowOffset.x, 0\n      offy = Math.max @shadowOffset.y, 0\n      #console.log \'shadow x: \' + offx + " y: " + offy\n      backBufferContext.fillStyle = @shadowColor.toString()\n      i = 0\n      for line in @lines\n        width = Math.ceil(backBufferContext.measureText(line).width) + shadowWidth\n        x = switch @alignment\n          when "right"\n            @width() - width\n          when "center"\n            (@width() - width) / 2\n          else # \'left\'\n            0\n        y = (i + 1) * (Math.ceil(fontHeight @fontSize) + shadowHeight) - shadowHeight\n        i++\n        backBufferContext.fillText line, x + offx, y + offy\n\n    # now draw the actual text\n    offx = Math.abs Math.min @shadowOffset.x, 0\n    offy = Math.abs Math.min @shadowOffset.y, 0\n    #console.log \'maintext x: \' + offx + " y: " + offy\n    backBufferContext.fillStyle = @color.toString()\n    i = 0\n    for line in @lines\n      width = Math.ceil(backBufferContext.measureText(line).width) + shadowWidth\n      x = switch @alignment\n        when "right"\n          @width() - width\n        when "center"\n          (@width() - width) / 2\n        else # \'left\'\n          0\n      y = (i + 1) * (Math.ceil(fontHeight @fontSize) + shadowHeight) - shadowHeight\n      i++\n      backBufferContext.fillText line, x + offx, y + offy\n\n    # Draw the selection. This is done by re-drawing the\n    # selected text, one character at the time, just with\n    # a background rectangle.\n    start = Math.min @startMark, @endMark\n    stop = Math.max @startMark, @endMark\n    for i in [start...stop]\n      p = @slotCoordinates(i).subtract @position()\n      c = @text.charAt i\n      backBufferContext.fillStyle = @markedBackgoundColor.toString()\n      backBufferContext.fillRect p.x, p.y, Math.ceil(backBufferContext.measureText(c).width) + 1, Math.ceil(fontHeight @fontSize)\n      backBufferContext.fillStyle = @markedTextColor.toString()\n      backBufferContext.fillText c, p.x, p.y + Math.ceil fontHeight @fontSize\n\n    cacheEntry = [backBuffer, backBufferContext]\n    world.cacheForImmutableBackBuffers.set cacheKey, cacheEntry\n    return cacheEntry\n  \n  rawSetExtent: (aPoint) ->\n    unless aPoint.eq @extent()\n      #console.log "move 18"\n      @breakNumberOfRawMovesAndResizesCaches()\n      @maxTextWidth = Math.max aPoint.x, 0\n      @reLayout()\n      @changed()\n  \n  # TextMorph measuring ////\n\n  # answer the logical position point of the given index ("slot")\n  # i.e. the row and the column where a particular character is.\n  slotRowAndColumn: (slot) ->\n    idx = 0\n    # Note that this solution scans all the characters\n    # in all the rows up to the slot. This could be\n    # done a lot quicker by stopping at the first row\n    # such that @lineSlots[theRow] <= slot\n    # You could even do a binary search if one really\n    # wanted to, because the contents of @lineSlots are\n    # in order, as they contain a cumulative count...\n    for row in [0...@lines.length]\n      idx = @lineSlots[row]\n      for col in [0...@lines[row].length]\n        return [row, col]  if idx is slot\n        idx += 1\n    [@lines.length - 1, @lines[@lines.length - 1].length - 1]\n  \n  # Answer the position (in pixels) of the given index ("slot")\n  # where the caret should be placed.\n  # This is in absolute world coordinates.\n  # This function assumes that the text is left-justified.\n  slotCoordinates: (slot) ->\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n    shadowHeight = Math.abs @shadowOffset.y\n    yOffset = slotRow * (Math.ceil(fontHeight @fontSize) + shadowHeight)\n    xOffset = Math.ceil @backBufferContext.measureText((@lines[slotRow]).substring(0,slotColumn)).width\n    x = @left() + xOffset\n    y = @top() + yOffset\n    new Point x, y\n  \n  # Returns the slot (index) closest to the given point\n  # so the caret can be moved accordingly\n  # This function assumes that the text is left-justified.\n  slotAt: (aPoint) ->\n    charX = 0\n    row = 0\n    col = 0\n    shadowHeight = Math.abs @shadowOffset.y\n    row += 1  while aPoint.y - @top() > (Math.ceil(fontHeight @fontSize) + shadowHeight) * row\n    row = Math.max row, 1\n    while aPoint.x - @left() > charX\n      charX += Math.ceil @backBufferContext.measureText(@lines[row - 1][col]).width\n      col += 1\n    @lineSlots[Math.max(row - 1, 0)] + col - 1\n  \n  upFrom: (slot) ->\n    # answer the slot above the given one\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n    return slot  if slotRow < 1\n    above = @lines[slotRow - 1]\n    return @lineSlots[slotRow - 1] + above.length  if above.length < slotColumn - 1\n    @lineSlots[slotRow - 1] + slotColumn\n  \n  downFrom: (slot) ->\n    # answer the slot below the given one\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n    return slot  if slotRow > @lines.length - 2\n    below = @lines[slotRow + 1]\n    return @lineSlots[slotRow + 1] + below.length  if below.length < slotColumn - 1\n    @lineSlots[slotRow + 1] + slotColumn\n  \n  startOfLine: (slot) ->\n    # answer the first slot (index) of the line for the given slot\n    @lineSlots[@slotRowAndColumn(slot).y]\n  \n  endOfLine: (slot) ->\n    # answer the slot (index) indicating the EOL for the given slot\n    @startOfLine(slot) + @lines[@slotRowAndColumn(slot).y].length - 1\n  \n  # TextMorph menus:\n  developersMenu: ->\n    menu = super()\n    menu.addLine()\n    menu.addItem "align left", true, @, "setAlignmentToLeft"  if @alignment isnt "left"\n    menu.addItem "align right", true, @, "setAlignmentToRight"  if @alignment isnt "right"\n    menu.addItem "align center", true, @, "setAlignmentToCenter"  if @alignment isnt "center"\n    menu.addItem "run contents", true, @, "doContents"\n    menu\n  \n  setAlignmentToLeft: ->\n    @alignment = "left"\n    @reLayout()\n    @changed()\n  \n  setAlignmentToRight: ->\n    @alignment = "right"\n    @reLayout()\n    @changed()\n  \n  setAlignmentToCenter: ->\n    @alignment = "center"\n    @reLayout()\n    @changed()  \n  \n  # TextMorph evaluation:\n  evaluationMenu: ->\n    menu = @hierarchyMenu()\n\n    if @text.length > 0\n      menu.prependLine()\n      menu.prependItem "select all", true, @, "selectAllAndEdit"\n      menu.prependItem "do all", true, @, "doAll"\n\n    # only show the do it / show it / inspect it entries\n    # if there is actually something selected.\n    if @selection().replace(/^\\s\\s*/, \'\').replace(/\\s\\s*$/, \'\') != \'\'\n      menu.prependLine()\n      menu.prependItem "inspect selection", true, @, "inspectSelection", "evaluate the\\nselected expression\\nand inspect the result"\n      menu.prependItem "show selection", true, @, "showSelection", "evaluate the\\nselected expression\\nand show the result"\n      menu.prependItem "do selection", true, @, "doSelection", "evaluate the\\nselected expression"\n    menu\n\n  selectAllAndEdit: ->\n    @edit()\n    @selectAll()\n\n  # TODO this can be done more\n  # abstractly, bypassing the\n  # actual selection and doSelection...\n  doAll: ->\n    @edit()\n    @selectAll()\n    @doSelection()\n    @clearSelection()\n\n  # this is set by the inspector. It tells the TextMorph\n  # that any following doSelection/showSelection/inspectSelection action needs to be\n  # done apropos a particular obj\n  setReceiver: (obj) ->\n    @receiver = obj\n    @customContextMenu = @evaluationMenu\n  \n  doSelection: ->\n    @receiver.evaluateString @selection()\n    @edit()\n\n  doContents: ->\n    if @receiver?\n      @receiver.evaluateString @text\n    else\n      @evaluateString @text\n\n  showSelection: ->\n    result = @receiver.evaluateString @selection()\n    if result? then @inform result\n  \n  inspectSelection: ->\n    # evaluateString is a pimped-up eval in\n    # the Morph class.\n    result = @receiver.evaluateString @selection()\n    if result? then @spawnInspector result\n';