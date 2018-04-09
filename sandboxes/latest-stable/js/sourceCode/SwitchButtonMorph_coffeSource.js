// Generated by CoffeeScript 1.12.7
window.SwitchButtonMorph_coffeSource = 'class SwitchButtonMorph extends Widget\n\n  buttons: nil\n \n  # careful: Objects are shared with all the instances of this class.\n  # if you modify it, then all the objects will get the change\n  # but if you replace it with a new Color, then that will only affect the\n  # specific object instance. Same behaviour as with arrays.\n  # see: https://github.com/jashkenas/coffee-script/issues/2501#issuecomment-7865333\n  highlightColor: new Color 192, 192, 192\n  # see note above about Colors and shared objects\n  pressColor: new Color 128, 128, 128\n \n  ifInsidePopUpThenClosesUnpinnedPopUpsWhenClicked: true\n  \n  buttonShown: 0\n\n  # overrides to superclass\n  color: new Color 255, 255, 255\n\n  constructor: (@buttons) ->\n\n    # additional properties:\n\n    super()\n\n    #@color = new Color 255, 152, 152\n    #@color = new Color 255, 255, 255\n    for eachButton in @buttons\n      @add eachButton\n\n    @invalidateLayout()\n  \n  # so that when you duplicate a "selected" toggle\n  # and you pick it up and you attach it somewhere else\n  # it gets automatically unselected\n  iHaveBeenAddedTo: (whereTo, beingDropped) ->\n    @resetSwitchButton()\n\n  doLayout: (newBoundsForThisLayout) ->\n    #if !window.recalculatingLayouts\n    #  debugger\n\n    if !newBoundsForThisLayout?\n      if @desiredExtent?\n        newBoundsForThisLayout = @desiredExtent\n        @desiredExtent = nil\n      else\n        newBoundsForThisLayout = @extent()\n\n      if @desiredPosition?\n        newBoundsForThisLayout = (new Rectangle @desiredPosition).setBoundsWidthAndHeight newBoundsForThisLayout\n        @desiredPosition = nil\n      else\n        newBoundsForThisLayout = (new Rectangle @position()).setBoundsWidthAndHeight newBoundsForThisLayout\n\n\n    @rawSetBounds newBoundsForThisLayout\n\n    counter = 0\n    for eachButton in @buttons\n      if eachButton.parent == @\n        eachButton.doLayout @bounds\n        if counter % @buttons.length == @buttonShown\n          eachButton.show()\n        else\n          eachButton.hide()\n      counter++\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n\n\n  # TODO\n  getTextDescription: ->\n\n  # if one calls "isSelected" it probably means that this SwitchButton\n  # has two buttons: a "selected" button and an "unselected" button\n  isSelected: ->\n    return @buttonShown != 0  \n\n  mouseClickLeft: ->\n    @buttonShown++\n    @buttonShown = @buttonShown % @buttons.length\n\n    @invalidateLayout()\n    @escalateEvent "mouseClickLeft", @\n\n  resetSwitchButton: ->\n    @buttonShown = 0\n    @invalidateLayout()\n';
