// Generated by CoffeeScript 1.12.7
window.TextMorph2_coffeSource = '# these comments below needed to figure out dependencies between classes\n# REQUIRES LRUCache\n\n# A multi-line, word-wrapping String\n\nclass TextMorph2 extends StringMorph2\n\n  wrappedLines: []\n  wrappedLineSlots: []\n  softWrap: true\n  #emptyCharacter: \'^\'\n\n  backgroundColor: nil\n\n  #additional properties for ad-hoc evaluation:\n  receiver: nil\n  heightOfPossiblyCroppedText: nil\n  widthOfPossiblyCroppedText: nil\n\n  constructor: (\n   @text = "TextMorph2",\n   @originallySetFontSize = WorldMorph.preferencesAndSettings.normalTextFontSize,\n   @fontName = @justArialFontStack,\n   @isBold = false,\n   @isItalic = false,\n   #@isNumeric = false,\n   @color,\n   @backgroundColor = nil,\n   @backgroundTransparency = nil\n   ) ->\n\n    super(\n      @text,\n      @originallySetFontSize,\n      @fontName,\n      @isBold,\n      @isItalic,\n      false, # isHeaderLine\n      false, # isNumeric\n      @color,\n      @backgroundColor,\n      @backgroundTransparency\n      )\n    # override inherited properties:\n    @markedTextColor = new Color 255, 255, 255\n    @markedBackgoundColor = new Color 60, 60, 120\n    @textPossiblyCroppedToFit = @transformTextOneToOne @text\n    @noticesTransparentClick = true\n\n    @fittingSpecWhenBoundsTooLarge = FittingSpecTextInLargerBounds.SCALEUP\n    @fittingSpecWhenBoundsTooSmall = FittingSpecTextInSmallerBounds.CROP\n  \n\n  # there are many factors beyond the font size that affect\n  # the measuring, such as font style, but we only pass\n  # the font size here because is the one we are going to\n  # change when we do the binary search for trying to\n  # see the largest fitting size.\n  doesTextFitInExtent: (text = (@transformTextOneToOne @text), overrideFontSize) ->\n    if text == ""\n      return true\n    doesItFit = @breakTextIntoLines text, overrideFontSize, @extent()\n    return doesItFit\n\n  getParagraphs: (text) ->\n    cacheKey = hashCode text\n    paragraphs = world.cacheForTextParagraphSplits.get cacheKey\n    if paragraphs? then return paragraphs\n    paragraphs = text.split "\\n"\n    world.cacheForTextParagraphSplits.set cacheKey, paragraphs\n    paragraphs\n\n  getWordsOfParapraph: (eachParagraph) ->\n    cacheKey = hashCode eachParagraph\n    wordsOfThisParagraph = world.cacheForParagraphsWordsSplits.get cacheKey\n    if wordsOfThisParagraph? then return wordsOfThisParagraph\n    wordsOfThisParagraph = eachParagraph.split " "\n    wordsOfThisParagraph.push "\\n"\n    world.cacheForParagraphsWordsSplits.set cacheKey, wordsOfThisParagraph\n    wordsOfThisParagraph\n\n  replaceLastSpaceWithInvisibleCarriageReturn: (string) ->\n    string = string.substr(0, string.length-1)\n    string = string + @emptyCharacter\n\n  getWrappingData: (overrideFontSize, maxTextWidth, eachParagraph, wordsOfThisParagraph) ->\n    cacheKey = @buildCanvasFontProperty(overrideFontSize) + "-" + maxTextWidth + "-" + hashCode eachParagraph\n    wrappingData = world.cacheForParagraphsWrappingData.get cacheKey\n\n\n    if wrappingData? then return wrappingData\n    wrappedLinesOfThisParagraph = []\n    wrappedLineSlotsOfThisParagraph = []\n    maxWrappedLineWidthOfThisParagraph = 0\n\n    currentLine = ""\n    slotsInParagraph = 0\n\n    # currently unused because token-level wrapping\n    # is commented-out, see below\n    carryoverFromWrappingLine = ""\n\n    for word in wordsOfThisParagraph\n\n      # TOKEN-LEVEL WRAPPING i.e.\n      # handling a single token that is too long.\n      # This works with the manual tests I\'ve done so far\n      # BUT it brought up a logical error, because the\n      # following can happen: when the line wraps,\n      # it pushes down the lines. In doing so, the text\n      # might resize. In doing so, the line doesn\'t need\n      # to wrap anymore, and hence the text can embiggen,\n      # and hence the line wraps...\n      # In other words there is no fixed point in the font\n      # size...\n      # So this can be done only if the textbox is\n      # constrained horizontally but not vertically...\n\n      #if !word.substr(0, word.length-1).contains(" ")\n      #  console.log ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"\n      #  console.log "> no space word: " + word\n      #  checkingLongerSingleWorld = Math.ceil @measureText overrideFontSize, word\n      #  console.log "> length of: " + word + " : " + checkingLongerSingleWorld\n      #  console.log "> maxTextWidth: " + maxTextWidth\n      #\n      #  while checkingLongerSingleWorld > maxTextWidth\n      #    console.log "> " + word + " is too long at overrideFontSize: " + overrideFontSize\n      #    maxLengthNotOverflowing = 0\n      #    for scanning in [0..word.length]\n      #      subword = word.substring 0, scanning\n      #      checkingLongerSingleWorld2 = Math.ceil @measureText overrideFontSize, subword\n      #      console.log "> length at size " + overrideFontSize + " of subword: " + subword + " : " + checkingLongerSingleWorld2\n      #      if checkingLongerSingleWorld2 > maxTextWidth\n      #        maxLengthNotOverflowing = scanning - 1\n      #        break\n      #    console.log "> maxLengthNotOverflowing: " + maxLengthNotOverflowing\n      #    if maxLengthNotOverflowing == 0\n      #      word = word.substring 1, word.length\n      #    else\n      #      currentLineCanStayInLine = word.substring 0, maxLengthNotOverflowing\n      #      carryoverFromWrappingLine = word.substring maxLengthNotOverflowing, word.length\n      #      console.log "> part that is not overflowing: " + currentLineCanStayInLine\n      #      console.log "> part that is overflowing: " + carryoverFromWrappingLine\n      #      slotsInParagraph += currentLineCanStayInLine.length\n      #      wrappedLinesOfThisParagraph.push currentLineCanStayInLine\n      #      wrappedLineSlotsOfThisParagraph.push slotsInParagraph\n      #      word = carryoverFromWrappingLine\n      #    checkingLongerSingleWorld = Math.ceil @measureText overrideFontSize, word\n\n      if word is "\\n"\n        # we reached the end of the line in the\n        # original text, so push the line and the\n        # slotsInParagraph count in the arrays\n        currentLine = @replaceLastSpaceWithInvisibleCarriageReturn currentLine\n        wrappedLinesOfThisParagraph.push currentLine\n        wrappedLineSlotsOfThisParagraph.push slotsInParagraph\n        maxWrappedLineWidthOfThisParagraph = Math.max maxWrappedLineWidthOfThisParagraph, Math.ceil @measureText overrideFontSize, currentLine\n        currentLine = ""\n      else\n        if maxTextWidth > 0 # there is a width limit, we might have to wrap\n          # there is a width limit, so we need\n          # to check whether we overflowed it. So create\n          # a prospective line and then check its width.\n          lineForOverflowTest = currentLine + word + " "\n          w = Math.ceil @measureText overrideFontSize, lineForOverflowTest\n          if w > maxTextWidth\n            # ok we just overflowed the available space,\n            # so we need to push the line *without the last word*\n            # and the corresponding "slotsInParagraph" number in the\n            # respective arrays.\n            # the new line is going to only contain the\n            # word that has caused the overflow.\n\n            currentLine = @replaceLastSpaceWithInvisibleCarriageReturn currentLine\n            # if we don\'t do this test there is a strange behaviour\n            # when one types a very long word\n            if currentLine != @emptyCharacter\n              wrappedLinesOfThisParagraph.push currentLine\n              wrappedLineSlotsOfThisParagraph.push slotsInParagraph\n              maxWrappedLineWidthOfThisParagraph = Math.max maxWrappedLineWidthOfThisParagraph, Math.ceil @measureText overrideFontSize, currentLine\n            currentLine = word + " "\n          else\n            # no overflow happened, so just proceed as normal\n            currentLine = lineForOverflowTest\n        else # there is no width limit, we never have to wrap\n          currentLine = currentLine + word + " "\n        slotsInParagraph += word.length + 1\n\n    # words of this paragraph have been scanned\n    wrappingDataCacheEntry = [wrappedLinesOfThisParagraph,wrappedLineSlotsOfThisParagraph,maxWrappedLineWidthOfThisParagraph, slotsInParagraph]\n    world.cacheForParagraphsWrappingData.set cacheKey, wrappingDataCacheEntry\n    wrappingData = wrappingDataCacheEntry\n\n  # there are many factors beyond the font size that affect\n  # how the text wraps, such as font style, but we only pass\n  # the font size here because is the one we are going to\n  # change when we do the binary search for trying to\n  # see the largest fitting size.\n  getTextWrappingData: (overrideFontSize, maxTextWidth, text, paragraphs, justCheckIfItFitsInThisExtent) ->\n    if @ instanceof SimplePlainTextWdgt\n      justCheckIfItFitsInThisExtent = null\n      overrideFontSize = @originallySetFontSize\n\n    cacheKey = @buildCanvasFontProperty(overrideFontSize) + "-" + maxTextWidth + "-" + hashCode(text) + "-" + justCheckIfItFitsInThisExtent\n    textWrappingData = world.cacheForTextWrappingData.get cacheKey\n    if textWrappingData? then return textWrappingData\n    wrappedLinesOfWholeText = []\n    wrappedLineSlotsOfWholeText = [0]\n    maxWrappedLineWidthOfWholeText = 0\n    cumulativeSlotAcrossText = 0\n    previousCumulativeSlotAcrossText = 0\n\n    for eachParagraph in paragraphs\n\n      wordsOfThisParagraph = @getWordsOfParapraph eachParagraph\n\n      ## ////////////////////////////////////////////////////////////////\n\n      ## You want this method to be FAST because it would be done\n      ## a dozen times for each resize (while the painting is\n      ## only done once!)\n      ## you can have the words per paragraph, and cache all\n      ## operations below by paragraph (and font size and width),\n      ## the cache would return\n      ## two arrays "linesHit" and "lineslotsHit" AND the\n      ## "maxlinewidthHit" which you can\n      ## concatenate to the "running" ones\n      ## basically a) make two nested forach, outer by paragraph and\n      ## inner by words.\n      ## Then cache the hell out of each loop.\n\n      ## LATER FOR ANOTHER TIME IS TO MAKE THE PAINTING ALSO FAST.\n      ## You\'d also love to cache the bitmap of each paragraph\n      ## rather than keeping one huge bitmap.\n      ## so this wouldn\'t be a BackBuffer anymore\n      ## SO you need to REMOVE the mixin from this class.\n      ## cause there would be a paint method and it would\n      ## compose the \n      ## it would be much better to handle AND in theory\n      ## the single bitmaps per paragraph would be easy\n      ## to cache and could be created\n      ## only on demand if they ever get damaged.\n      ## GET THE stringMorph2 to cache the actual bitmap that they\n      ## generate so you can use that too from here, cause there\n      ## might be a lot of reuse rather than re-painting the\n      ## text all the times or even a paragraph.\n\n      # takes the text, word by word, and re-flows\n      # it according to the available width for the\n      # text (if there is such limit).\n      # The end result is an array of lines\n      # called @wrappedLines, which contains the string for\n      # each line (excluding the end of lines).\n      # Also another array is created, called\n      # @wrappedLineSlots, which memorises how many characters\n      # of the text have been consumed up to each line\n      #  example: original text: "Hello\\nWorld"\n      # then @wrappedLines[0] = "Hello" @wrappedLines[1] = "World"\n      # and @wrappedLineSlots[0] = 6, @wrappedLineSlots[1] = 11\n      # Note that this algorithm doesn\'t work in case\n      # of single non-spaced words that are longer than\n      # the allowed width.\n      \n      wrappingData = @getWrappingData overrideFontSize, maxTextWidth, eachParagraph, wordsOfThisParagraph\n\n      # we either cache-hit wrappingData or we re-built it\n      [wrappedLinesOfThisParagraph, wrappedLineSlotsOfThisParagraph, maxWrappedLineWidthOfThisParagraph, slotsInParagraph] = wrappingData\n\n      previousCumulativeSlotAcrossText = cumulativeSlotAcrossText\n      cumulativeSlotAcrossText += slotsInParagraph\n      wrappedLinesOfWholeText = wrappedLinesOfWholeText.concat wrappedLinesOfThisParagraph\n      advancedWrappedLineSlotsOfThisParagraph =  wrappedLineSlotsOfThisParagraph.map (i) -> i + previousCumulativeSlotAcrossText\n      #alert "unadvanced wrappedLineSlotsOfThisParagraph: " + wrappedLineSlotsOfThisParagraph + " advanced: " + advancedWrappedLineSlotsOfThisParagraph\n      wrappedLineSlotsOfWholeText = wrappedLineSlotsOfWholeText.concat advancedWrappedLineSlotsOfThisParagraph\n      maxWrappedLineWidthOfWholeText = Math.max maxWrappedLineWidthOfWholeText, maxWrappedLineWidthOfThisParagraph\n\n      if justCheckIfItFitsInThisExtent?\n        heightOfPossiblyCroppedText = (wrappedLineSlotsOfWholeText.length - 1) * Math.ceil(fontHeight overrideFontSize)\n        #console.log "heightOfPossiblyCroppedText: " + heightOfPossiblyCroppedText + " justCheckIfItFitsInThisExtent: " + justCheckIfItFitsInThisExtent\n        if heightOfPossiblyCroppedText > justCheckIfItFitsInThisExtent.y or maxWrappedLineWidthOfWholeText > justCheckIfItFitsInThisExtent.x\n          world.cacheForTextWrappingData.set cacheKey, false\n          return false\n\n\n    # here all paragraphs have been visited\n    #alert "wrappedLineSlotsOfWholeText: " + wrappedLineSlotsOfWholeText\n\n    if justCheckIfItFitsInThisExtent?\n      world.cacheForTextWrappingData.set cacheKey, true\n      return true\n    heightOfPossiblyCroppedText = wrappedLinesOfWholeText.length * Math.ceil(fontHeight overrideFontSize)\n    textWrappingDataCacheEntry = [wrappedLinesOfWholeText, wrappedLineSlotsOfWholeText, maxWrappedLineWidthOfWholeText, heightOfPossiblyCroppedText]\n    world.cacheForTextWrappingData.set cacheKey, textWrappingDataCacheEntry\n    textWrappingData = textWrappingDataCacheEntry\n\n  # there are many factors beyond the font size that affect\n  # how the text is broken, such as font style, but we only pass\n  # the font size here because is the one we are going to\n  # change when we do the binary search for trying to\n  # see the largest fitting size.\n  breakTextIntoLines: (text = (@transformTextOneToOne @text), overrideFontSize, justCheckIfItFitsInThisExtent) ->\n    \n    if @ instanceof SimplePlainTextWdgt\n      overrideFontSize = @originallySetFontSize\n\n    # Easy, lazy way to get soft-wrapping.\n    # TODO you can actually simplify lots of code in the\n    # case of soft-wrapping as really there is a lot\n    # less to measure and the wrapping becomes trivial.\n    # Also testing if it fits in an extent can be made\n    # really easy.\n    if @softWrap\n      morphWidth = @width()\n    else\n      morphWidth = Number.MAX_VALUE\n\n    cacheKey = hashCode(text) + "-" + @buildCanvasFontProperty(overrideFontSize) + "-" + morphWidth + "-" + justCheckIfItFitsInThisExtent\n    textWrappingData = world.cacheForTextBreakingIntoLinesTopLevel.get cacheKey\n    if textWrappingData? then return textWrappingData\n\n    #console.log "breakTextIntoLines // " + " morphWidth: " + morphWidth + " overrideFontSize: " + overrideFontSize\n\n    \n    ## // this section only needs to be re-done when @text changes ////\n    # put all the text in an array, word by word\n    # >>> avoid to do this double-split, jus split by spacing and then\n    # you\'ll find and remove the newline in the running code\n    # below.\n    # put all the text in an array, word by word\n\n    paragraphs = @getParagraphs text\n\n    textWrappingData = @getTextWrappingData overrideFontSize, morphWidth, text, paragraphs, justCheckIfItFitsInThisExtent\n\n\n    world.cacheForTextBreakingIntoLinesTopLevel.set cacheKey, textWrappingData\n    return textWrappingData\n\n  # adjust the data models behind the text. E.g.\n  # is it going to be shown as cropped? What size\n  # is it going to be? How is the text broken down\n  # into rows?\n  # this method doesn\'t draw anything.\n  reflowText: ->\n    super\n    [@wrappedLines,@wrappedLineSlots,@widthOfPossiblyCroppedText,@heightOfPossiblyCroppedText] =\n      @breakTextIntoLines @textPossiblyCroppedToFit, @fittingFontSize\n\n    # a changed() is already done in the\n    # super but adding it here as well for clarity\n\n    return @heightOfPossiblyCroppedText\n\n  createBufferCacheKey: ->\n    return super() +  "-" + @softWrap\n\n  # no changes of position or extent should be\n  # performed in here\n  createRefreshOrGetBackBuffer: ->\n    \n    cacheKey = @createBufferCacheKey()\n\n    cacheHit = world.cacheForImmutableBackBuffers.get cacheKey\n    if cacheHit?\n      # we might have hit a previously cached\n      # backBuffer but here we are interested in\n      # knowing whether the buffer we are gonna paint\n      # is the same as the one being shown now. If\n      # not, then we mark the caret as broken.\n      if @backBuffer != cacheHit[0]\n        if world.caret?\n          world.caret.changed()      \n      return cacheHit\n\n    contentHeight = @reflowText()\n\n    if @ instanceof SimplePlainTextWdgt\n      contentHeight = @wrappedLines.length *  Math.ceil fontHeight @originallySetFontSize\n\n    # if we are calculating a new buffer then\n    # for sure we have to mark the caret as broken\n    if world.caret?\n      world.caret.changed()      \n\n    backBuffer = newCanvas()\n    backBufferContext = backBuffer.getContext "2d"\n\n    backBuffer.width = @width() * pixelRatio\n    backBuffer.height = @height() * pixelRatio\n\n    backBufferContext.scale pixelRatio, pixelRatio\n    backBufferContext.font = @buildCanvasFontProperty()\n    backBufferContext.textAlign = "left"\n    backBufferContext.textBaseline = "bottom"\n\n    # paint the background so we have a better sense of\n    # where the text is fitting into.\n    # paintRectangle here is passed logical pixels\n    # rather than actual pixels, contrary to how it\'s used\n    # most other places. This is because it\'s inside\n    # the scope of the "scale pixelRatio, pixelRatio".\n    if @backgroundColor\n      backBufferContext.save()\n      backBufferContext.fillStyle = @backgroundColor.toString()\n      backBufferContext.globalAlpha = @backgroundTransparency\n      backBufferContext.fillRect  0,\n          0,\n          Math.round(@width()),\n          Math.round(@height())\n      backBufferContext.restore()\n\n    textVerticalPosition = @textVerticalPosition contentHeight\n\n    # now draw the actual text\n    backBufferContext.fillStyle = @color.toString()\n    i = 0\n    for line in @wrappedLines\n      width = Math.ceil(@measureText nil, line)\n      x = switch @horizontalAlignment\n        when AlignmentSpecHorizontal.RIGHT\n          @width() - width\n        when AlignmentSpecHorizontal.CENTER\n          (@width() - width) / 2\n        else # \'left\'\n          0\n      y = (i + 1) * Math.ceil fontHeight @fittingFontSize\n      i++\n\n      # you\'d think that we don\'t need to eliminate the invisible character\n      # to draw the text, as it\'s supposed to be, well, invisible.\n      # Unfortunately some fonts do draw it, so we indeed have to eliminate\n      # it.\n      backBufferContext.fillText (@eliminateInvisibleCharacter line), x, y + textVerticalPosition\n\n      # header line\n      # TODO string2 has very similar code, can be factored-out\n      # paying attention that in string2 some variables with the same\n      # name as here actually have slightly different meaning\n      if @isHeaderLine and @wrappedLines.length <= 1\n        debugger\n        heightOfText = fontHeight @fittingFontSize\n        textHorizontalPosition = x\n        textVertPosition = y + textVerticalPosition\n        widthOfText = width\n        backBufferContext.strokeStyle = new Color 198, 198, 198\n        backBufferContext.beginPath()\n        backBufferContext.moveTo 0, textVertPosition - heightOfText / 2\n        backBufferContext.lineTo textHorizontalPosition - 5, textVertPosition - heightOfText / 2\n        backBufferContext.moveTo textHorizontalPosition + widthOfText + 5, textVertPosition - heightOfText / 2\n        backBufferContext.lineTo @width(), textVertPosition - heightOfText / 2\n        backBufferContext.stroke()\n\n    @drawSelection backBufferContext\n\n    cacheEntry = [backBuffer, backBufferContext]\n    world.cacheForImmutableBackBuffers.set cacheKey, cacheEntry\n    return cacheEntry\n\n\n  # TextMorph measuring ////\n\n  # answer the logical position point of the given index ("slot")\n  # i.e. the row and the column where a particular character is.\n  slotRowAndColumn: (slot) ->\n\n    #if !window.globCounter2? then window.globCounter2 = 0\n    #window.globCounter2++\n    #console.log "slotRowAndColumn " + window.globCounter2\n\n    @reflowText()\n    idx = 0\n    # Note that this solution scans all the characters\n    # in all the rows up to the slot. This could be\n    # done a lot quicker by stopping at the first row\n    # such that @wrappedLineSlots[theRow] <= slot\n    # You could even do a binary search if one really\n    # wanted to, because the contents of @wrappedLineSlots are\n    # in order, as they contain a cumulative count...\n    for row in [0...@wrappedLines.length]\n      idx = @wrappedLineSlots[row]\n      for col in [0...@wrappedLines[row].length]\n        return [row, col]  if idx is slot\n        idx += 1\n    [@wrappedLines.length - 1, @wrappedLines[@wrappedLines.length - 1].length - 1]\n  \n  # Answer the position (in pixels) of the given index ("slot")\n  # where the caret should be placed.\n  # This is in absolute world coordinates.\n  # This function assumes that the text is left-justified.\n  slotCoordinates: (slot) ->\n\n    #if !window.globCounter3? then window.globCounter3 = 0\n    #window.globCounter3++\n    #console.log "slotCoordinates " + window.globCounter3\n\n    # this makes it so when you type and the string becomes too big\n    # then the edit stops to be directly in the screen and the\n    # popout for editing takes over.\n    if (@transformTextOneToOne @text) != @textPossiblyCroppedToFit and @fittingSpecWhenBoundsTooSmall == FittingSpecTextInSmallerBounds.CROP\n      world.stopEditing()\n      @edit()\n      return nil\n\n    @reflowText()\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n\n    lineWidth = @measureText nil, @wrappedLines[slotRow]\n    xOffset = Math.ceil @measureText nil, (@wrappedLines[slotRow]).substring(0,slotColumn)\n    yOffset = slotRow * Math.ceil fontHeight @fittingFontSize\n\n    textVerticalPosition = @textVerticalPosition @heightOfPossiblyCroppedText\n    textHorizontalPosition = @textHorizontalPosition lineWidth\n\n    x = @left() + xOffset + textHorizontalPosition\n    y = @top() + yOffset + textVerticalPosition\n    #alert "slotCoordinates slot:" + slot + " x,y: " + x + ", " + y\n    new Point x, y\n\n\n  slotAtRow: (row, xPosition) ->\n\n    if row > @wrappedLines.length\n      return @textPossiblyCroppedToFit.length\n    \n    return @wrappedLineSlots[Math.max(row - 1, 0)] +\n      @slotAtSingleLineString xPosition, @wrappedLines[row - 1]\n\n\n  pointIsAboveFirstLine: (aPoint) ->\n    textVerticalPosition = @textVerticalPosition @heightOfPossiblyCroppedText\n\n    if aPoint.y - @top() < textVerticalPosition\n      return 0\n\n    return false\n  \n  # Returns the slot (index) closest to the given point\n  # so the caret can be moved accordingly\n  # This function assumes that the text is left-justified.\n  slotAt: (aPoint) ->\n\n    if (isPointBeforeFirstLine = @pointIsAboveFirstLine aPoint) != false\n      return isPointBeforeFirstLine\n\n    textVerticalPosition = @textVerticalPosition @heightOfPossiblyCroppedText\n\n    row = 0\n\n    while aPoint.y - @top() > textVerticalPosition + row * Math.ceil fontHeight @fittingFontSize\n      row += 1\n    row = Math.max row, 1\n\n    return @slotAtRow row, aPoint.x\n\n  \n  upFrom: (slot) ->\n    # answer the slot above the given one\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n    if slotRow < 1\n      return 0\n    return @slotAtRow slotRow, (@slotCoordinates @caretHorizPositionForVertMovement).x\n    above = @wrappedLines[slotRow - 1]\n    if above.length < slotColumn - 1\n      return @wrappedLineSlots[slotRow - 1] + above.length\n    @wrappedLineSlots[slotRow - 1] + slotColumn\n  \n  downFrom: (slot) ->\n    # answer the slot below the given one\n    [slotRow, slotColumn] = @slotRowAndColumn slot\n    if slotRow > @wrappedLines.length - 2\n      return @textPossiblyCroppedToFit.length\n    return @slotAtRow(slotRow+2, (@slotCoordinates @caretHorizPositionForVertMovement).x)\n    below = @wrappedLines[slotRow + 1]\n    if below.length < slotColumn - 1\n      return @wrappedLineSlots[slotRow + 1] + below.length\n    @wrappedLineSlots[slotRow + 1] + slotColumn\n  \n  startOfLine: (slot) ->\n    # answer the first slot (index) of the line for the given slot\n    @wrappedLineSlots[@slotRowAndColumn(slot).y]\n  \n  endOfLine: (slot) ->\n    # answer the slot (index) indicating the EOL for the given slot\n    @startOfLine(slot) + @wrappedLines[@slotRowAndColumn(slot).y].length - 1\n\n  toggleSoftWrap: ->\n    @softWrap = not @softWrap\n    @changed()\n    world.stopEditing()\n\n  addMorphSpecificMenuEntries: (morphOpeningThePopUp, menu) ->\n    super\n    menu.addLine()\n    if @softWrap\n      menu.addMenuItem "soft wrap".tick(), true, @, "toggleSoftWrap"\n    else\n      menu.addMenuItem "soft wrap", true, @, "toggleSoftWrap"\n    menu.addLine()\n\n    if @parent?.parent?.parent? and (@parent.parent.parent instanceof ConsoleWdgt)\n      if @currentlySelecting()\n        menu.addMenuItem "run selection", true, @parent.parent.parent, "doSelection"\n      menu.addMenuItem "run contents", true, @parent.parent.parent, "doAll"\n    else\n      menu.addMenuItem "run contents", true, @, "doContents"\n  \n  setAlignmentToLeft: ->\n    @alignment = "left"\n    @changed()\n  \n  setAlignmentToRight: ->\n    @alignment = "right"\n    @changed()\n  \n  setAlignmentToCenter: ->\n    @alignment = "center"\n    @changed()\n  \n  # TextMorph evaluation. This menu is placed as the\n  # "overridingContextMenu" in the Inspector panes, where\n  # the text contents is executed against the target Widget\n  evaluationMenu: ->\n    menu = @buildHierarchyMenu()\n\n    if @text.length > 0\n      menu.prependLine()\n      menu.prependMenuItem "select all", true, @, "selectAllAndEdit"\n      menu.prependMenuItem "do all", true, @, "doAll"\n\n    # only show the do it / show it / inspect it entries\n    # if there is actually something selected.\n    if @selection().replace(/^\\s\\s*/, \'\').replace(/\\s\\s*$/, \'\') != \'\'\n      menu.prependLine()\n      menu.prependMenuItem "inspect selection", true, @, "inspectSelection", "evaluate the\\nselected expression\\nand inspect the result"\n      menu.prependMenuItem "show selection", true, @, "showSelection", "evaluate the\\nselected expression\\nand show the result"\n      menu.prependMenuItem "do selection", true, @, "doSelection", "evaluate the\\nselected expression"\n    menu\n\n  # StringMorph2 editing:\n  edit: ->\n    # when you edit a TextMorph, potentially\n    # you need to change the alignment of the\n    # text, because managing the caret with\n    # alignments other than the top-left\n    # ones is complex. So during editing\n    # we might change the alignment, hence\n    # ths method here with @changed()\n    @changed()\n    return super\n\n  selectAllAndEdit: ->\n    @edit()\n    @selectAll()\n\n  doAll: ->\n    @receiver.evaluateString @text\n   \n  # this is set by the inspector. It tells the TextMorph\n  # that any following doSelection/showSelection/inspectSelection\n  # action needs to be done apropos a particular obj,\n  # and also replaces the normal context menu with the evaluation Menu\n  # because if you right click in these panes of the Inspector you\n  # want to "run" code that has been typed\n  setReceiver: (obj) ->\n    @receiver = obj\n    @overridingContextMenu = @evaluationMenu\n  \n  doSelection: ->\n    @receiver.evaluateString @selection()\n    @edit()\n\n  doContents: ->\n    if @receiver?\n      @receiver.evaluateString @text\n    else\n      @evaluateString @text\n\n  showSelection: ->\n    result = @receiver.evaluateString @selection()\n    if result? then @inform result\n  \n  inspectSelection: ->\n    # evaluateString is a pimped-up eval in\n    # the Widget class.\n    result = @receiver.evaluateString @selection()\n    if result? then @spawnInspector result\n\n  # selects the whole line (if it\'s wrapped, just\n  # what sits on the very line, not what wraps\n  # above or under). Just like normal editors.\n  mouseTripleClick: ->\n    if @isEditable\n      [row, column] = @slotRowAndColumn world.caret?.slot\n      slotBeginOfLine = @slotAtRow row + 1, 0\n      slotsInRow = @wrappedLineSlots[row + 1]\n      @selectBetween slotBeginOfLine, slotsInRow\n      world.caret?.gotoSlot slotsInRow\n\n\n\n';
