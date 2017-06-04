// Generated by CoffeeScript 1.10.0
window.CaretMorph_coffeSource = '# CaretMorph /////////////////////////////////////////////////////////\n\n# I mark where the caret is in a String/Text while editing\n\nclass CaretMorph extends BlinkerMorph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  keyDownEventUsed: false\n  target: null\n  originalContents: null\n  slot: null\n  viewPadding: 1\n  currentCaretFontSize: null\n\n  constructor: (@target) ->\n    # additional properties:\n    @originalContents = @target.text\n    @slot = @target.text.length\n    super()\n\n    # font could be really small I guess?\n    @minimumExtent = new Point 1,1\n\n    if (@target instanceof TextMorph) and (@target.alignment != \'left\')\n      @target.setAlignmentToLeft()\n    @adjustAccordingToTargetText()\n\n  adjustAccordingToTargetText: ->\n    @updateDimension()\n    @gotoSlot @slot\n\n  justBeforeBeingPainted: ->\n    @adjustAccordingToTargetText()\n\n  updateDimension: ->\n    ls = fontHeight @target.actualFontSizeUsedInRendering()\n    if ls != @currentCaretFontSize\n      @currentCaretFontSize = ls\n      @rawSetExtent new Point Math.max(Math.floor(ls / 20), 1), ls\n  \n  # CaretMorph event processing:\n  processKeyPress: (charCode, symbol, shiftKey, ctrlKey, altKey, metaKey) ->\n    # @inspectKeyEvent event\n    if @keyDownEventUsed\n      @keyDownEventUsed = false\n      @updateDimension()\n      return null\n    if ctrlKey\n      @ctrl charCode\n    # in Chrome/OSX cmd-a and cmd-z\n    # don\'t trigger a keypress so this\n    # function invocation here does\n    # nothing.\n    else if metaKey\n      @cmd charCode\n    else\n      @insert symbol, shiftKey\n    # notify target\'s parent of key event\n    @target.escalateEvent "reactToKeystroke", charCode, symbol, shiftKey, ctrlKey, altKey, metaKey\n    @updateDimension()\n  \n  processKeyDown: (scanCode, shiftKey, ctrlKey, altKey, metaKey) ->\n    # @inspectKeyEvent event\n    @keyDownEventUsed = false\n    if ctrlKey\n      @ctrl scanCode\n      # notify target\'s parent of key event\n      @target.escalateEvent "reactToKeystroke", scanCode, null, shiftKey, ctrlKey, altKey, metaKey\n      @updateDimension()\n      return\n    else if metaKey\n      @cmd scanCode\n      # notify target\'s parent of key event\n      @target.escalateEvent "reactToKeystroke", scanCode, null, shiftKey, ctrlKey, altKey, metaKey\n      @updateDimension()\n      return\n    switch scanCode\n      when 37\n        @goLeft shiftKey\n        @keyDownEventUsed = true\n      when 39\n        @goRight shiftKey\n        @keyDownEventUsed = true\n      when 38\n        @goUp shiftKey\n        @keyDownEventUsed = true\n      when 40\n        @goDown shiftKey\n        @keyDownEventUsed = true\n      when 36\n        @goHome shiftKey\n        @keyDownEventUsed = true\n      when 35\n        @goEnd shiftKey\n        @keyDownEventUsed = true\n      when 46\n        @deleteRight()\n        @keyDownEventUsed = true\n      when 8\n        @deleteLeft()\n        @keyDownEventUsed = true\n      when 13\n        # we can\'t check the class using instanceof\n        # because TextMorphs are instances of StringMorphs\n        # but they want the enter to insert a carriage return.\n        if @target.constructor.name == "StringMorph" or @target.constructor.name == "StringMorph2"\n          @accept()\n        else\n          @insert "\\n"\n        @keyDownEventUsed = true\n      when 27\n        @cancel()\n        @keyDownEventUsed = true\n      else\n    # @inspectKeyEvent event\n    # notify target\'s parent of key event\n    @target.escalateEvent "reactToKeystroke", scanCode, null, shiftKey, ctrlKey, altKey, metaKey\n    @updateDimension()\n  \n  \n  gotoSlot: (slot) ->\n    # check that slot is within the allowed boundaries of\n    # of zero and text length.\n    length = @target.text.length\n    @slot = (if slot < 0 then 0 else (if slot > length then length else slot))\n\n    pos = @target.slotCoordinates @slot\n    if pos?\n      if @parent and @target.isScrollable\n        right = @parent.right() - @viewPadding\n        left = @parent.left() + @viewPadding\n        if pos.x > right\n          @target.fullRawMoveLeftSideTo @target.left() + right - pos.x\n          pos.x = right\n        if pos.x < left\n          left = Math.min @parent.left(), left\n          @target.fullRawMoveLeftSideTo @target.left() + left - pos.x\n          pos.x = left\n        if @target.right() < right and right - @target.width() < left\n          pos.x += right - @target.right()\n          @target.fullRawMoveRightSideTo right\n      #console.log "moving caret to: " + pos\n      @show()\n      @fullRawMoveTo pos.floor()\n\n      if @parent and @parent.parent instanceof ScrollFrameMorph and @target.isScrollable\n        @parent.parent.scrollCaretIntoView @\n  \n  goLeft: (shift) ->\n    if !shift and @target.firstSelectedSlot()?\n      @gotoSlot @target.firstSelectedSlot()\n      @updateSelection shift\n    else\n      @updateSelection shift\n      @gotoSlot @slot - 1\n      @updateSelection shift\n      @clearSelectionIfStartAndEndMeet shift\n    @target.caretHorizPositionForVertMovement = @slot\n  \n  goRight: (shift, howMany) ->\n    if !shift and @target.lastSelectedSlot()?\n      @gotoSlot @target.lastSelectedSlot()\n      @updateSelection shift\n    else\n      @updateSelection shift\n      @gotoSlot @slot + (howMany || 1)\n      @updateSelection shift\n      @clearSelectionIfStartAndEndMeet shift\n    @target.caretHorizPositionForVertMovement = @slot\n  \n  goUp: (shift) ->\n    if !shift and @target.lastSelectedSlot()?\n      @gotoSlot @target.firstSelectedSlot()\n      @updateSelection shift\n    else\n      @updateSelection shift\n      @gotoSlot @target.upFrom @slot\n      @updateSelection shift\n      @clearSelectionIfStartAndEndMeet shift\n  \n  goDown: (shift) ->\n    if !shift and @target.lastSelectedSlot()?\n      @gotoSlot @target.lastSelectedSlot()\n      @updateSelection shift\n    else\n      @updateSelection shift\n      @gotoSlot @target.downFrom @slot\n      @updateSelection shift\n      @clearSelectionIfStartAndEndMeet shift\n  \n  goHome: (shift) ->\n    @updateSelection shift\n    @gotoSlot @target.startOfLine @slot\n    @updateSelection shift\n    @clearSelectionIfStartAndEndMeet shift\n  \n  goEnd: (shift) ->\n    @updateSelection shift\n    @gotoSlot @target.endOfLine @slot\n    @updateSelection shift\n    @clearSelectionIfStartAndEndMeet shift\n  \n  gotoPos: (aPoint) ->\n    slotToGoTo = @target.slotAt aPoint\n    @gotoSlot slotToGoTo\n    @show()\n    return slotToGoTo\n\n  clearSelectionIfStartAndEndMeet: (shift) ->\n    if shift\n      #console.log "@target.startMark: " + @target.startMark + " @target.endMark: " + @target.endMark\n      if @target.startMark == @target.endMark\n        #console.log "clearSelectionIfStartAndEndMeet clearing selection"\n        @target.clearSelection()\n\n  updateSelection: (shift) ->\n    if shift\n      if (@target.endMark is null) and (@target.startMark is null)\n        @target.selectBetween @slot, @slot\n      else if @target.endMark isnt @slot\n        @target.setEndMark @slot\n    else\n      @target.clearSelection()\n  \n  # CaretMorph editing.\n\n  # User presses enter on a stringMorph\n  accept: ->\n    world.stopEditing()\n    @escalateEvent "accept", null\n  \n  # User presses ESC\n  cancel: ->\n    @undo()\n    world.stopEditing()\n    @escalateEvent \'cancel\', null\n    \n  # User presses CTRL-Z or CMD-Z\n  # Note that this is not a real undo,\n  # what we are doing here is just reverting\n  # all the changes and sort-of-resetting the\n  # state of the target.\n  undo: ->\n    @target.setText @originalContents\n    @target.clearSelection()\n    @gotoSlot 0\n  \n  insert: (symbol, shiftKey) ->\n    debugger\n    if symbol is "\\t"\n      @target.escalateEvent \'reactToEdit\', @target\n      if shiftKey\n        return @target.backTab @target\n      return @target.tab @target\n    \n    # if the target "isNumeric", then only accept\n    # numbers and "-" and "." as input\n    if not @target.isNumeric or not isNaN(parseFloat(symbol)) or symbol in ["-", "."]\n      if @target.selection() isnt ""\n        @gotoSlot @target.firstSelectedSlot()\n        @target.deleteSelection()\n      text = @target.text\n      text = text.slice(0, @slot) + symbol + text.slice(@slot)\n      @target.setText text\n      @goRight false, symbol.length\n      @updateDimension()\n  \n  ctrl: (scanCodeOrCharCode) ->\n    # ctrl-a apparently can come from either\n    # keypress or keydown\n    # 64 is for keydown\n    # 97 is for keypress\n    # in Chrome on OSX there is no keypress\n    switch scanCodeOrCharCode\n      when 97, 65\n        @target.selectAll()\n      # ctrl-z arrives both via keypress and\n      # keydown but 90 here matches the keydown only\n      when 90\n        @undo()\n      # unclear which keyboard needs ctrl\n      # to be pressed to give a keypressed\n      # event for {}[]@\n      # but this is what this catches\n      when 123\n        @insert "{"\n      when 125\n        @insert "}"\n      when 91\n        @insert "["\n      when 93\n        @insert "]"\n      when 64\n        @insert "@"\n  \n  # these two arrive only from\n  # keypressed, at least in Chrome/OSX\n  # 65 and 90 are both scan codes.\n  cmd: (scanCode) ->\n    # CMD-A\n    switch scanCode\n      when 65\n        @target.selectAll()\n      # CMD-Z\n      when 90\n        @undo()\n  \n  deleteRight: ->\n    if @target.selection() isnt ""\n      @gotoSlot @target.firstSelectedSlot()\n      @target.deleteSelection()\n    else\n      text = @target.text\n      text = text.slice(0, @slot) + text.slice(@slot + 1)\n      @target.setText text    \n  \n  deleteLeft: ->\n    if @target.selection()\n      @gotoSlot @target.firstSelectedSlot()\n      @target.deleteSelection()\n    else\n      text = @target.text\n      @target.setText text.substring(0, @slot - 1) + text.substr(@slot)\n      @goLeft()\n\n    @updateSelection false\n    @gotoSlot @slot\n    @updateSelection false\n    @clearSelectionIfStartAndEndMeet false\n  \n  # CaretMorph utilities:\n  inspectKeyEvent: (event) ->\n    # private\n    @inform "Key pressed: " + String.fromCharCode(event.charCode) + "\\n------------------------" + "\\ncharCode: " + event.charCode + "\\nkeyCode: " + event.keyCode + "\\naltKey: " + event.altKey + "\\nctrlKey: " + event.ctrlKey  + "\\ncmdKey: " + event.metaKey\n';
