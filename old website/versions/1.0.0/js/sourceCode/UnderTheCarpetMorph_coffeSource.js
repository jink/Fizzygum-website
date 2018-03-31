// Generated by CoffeeScript 1.10.0
window.UnderTheCarpetMorph_coffeSource = '# UnderTheCarpetMorph //////////////////////////////////////////////////////\n\nclass UnderTheCarpetMorph extends BoxMorph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  # panes:\n  scrollFrame: null\n  buttonClose: null\n  resizer: null\n\n  constructor: (target) ->\n    super()\n\n    @silentRawSetExtent new Point 340, 270\n    @color = new Color 60, 60, 60\n    @padding = 5\n    @buildAndConnectChildren()\n  \n  setTarget: (target) ->\n    @target = target\n    @currentProperty = null\n    @buildAndConnectChildren()\n  \n  buildAndConnectChildren: ->\n    @attribs = []\n\n    # remove existing panes\n    @fullDestroyChildren()\n\n    # label\n    @label = new TextMorph "Under the carpet"\n    @label.fontSize = WorldMorph.preferencesAndSettings.menuFontSize\n    @label.isBold = true\n    @label.color = new Color 255, 255, 255\n    @add @label\n\n    # Check which objects end with the word Morph\n    theWordMorph = "Morph"\n\n    @scrollFrame = new ScrollFrameMorph()\n\n    @add @scrollFrame\n\n    # close button\n    @buttonClose = new TriggerMorph true, @\n    @buttonClose.setLabel "close"\n    @buttonClose.action = "removeFromTree"\n\n    @add @buttonClose\n\n    # resizer\n    @resizer = new HandleMorph @\n\n    # update layout\n    @layoutSubmorphs()\n  \n  layoutSubmorphs: ->\n    super()\n    trackChanges.push false\n\n    # label\n    x = @left() + @cornerRadius\n    y = @top() + @cornerRadius\n    r = @right() - @cornerRadius\n    w = r - x\n    @label.fullRawMoveTo new Point x, y\n    @label.rawSetWidth w\n    if @label.height() > (@height() - 50)\n      @rawSetHeight @label.height() + 50\n      @changed()\n\n    # scrollFrame\n    y = @label.bottom() + 2\n    w = @width() - @cornerRadius\n    w -= @cornerRadius\n    b = @bottom() - (2 * @cornerRadius) - WorldMorph.preferencesAndSettings.handleSize\n    h = b - y\n    @scrollFrame.fullRawMoveTo new Point x, y\n    @scrollFrame.rawSetExtent new Point w, h\n\n    # close button\n    x = @scrollFrame.left()\n    y = @scrollFrame.bottom() + @cornerRadius\n    h = WorldMorph.preferencesAndSettings.handleSize\n    w = @scrollFrame.width() - h - @cornerRadius\n    @buttonClose.fullRawMoveTo new Point x, y\n    @buttonClose.rawSetExtent new Point w, h\n    trackChanges.pop()\n    @changed()\n  \n';