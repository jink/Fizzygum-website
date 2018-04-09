// Generated by CoffeeScript 1.12.7
window.BasementWdgt_coffeSource = 'class BasementWdgt extends BoxMorph\n\n  # panes:\n  scrollPanel: nil\n  resizer: nil\n\n  hideUsedWdgtsOnButton: nil\n  hideUsedWdgtsOffButton: nil\n  hideUsedWdgtsToggle: nil\n\n  showingLostItemsOnly: false\n\n  constructor: ->\n    super()\n\n    @silentRawSetExtent new Point 340, 270\n    @color = new Color 60, 60, 60\n    @padding = 5\n    @buildAndConnectChildren()\n\n  colloquialName: ->\n    "Basement"\n\n  closeFromContainerWindow: (containerWindow) ->\n    # remove ourselves from\n    # the window\n    @removeFromTree()\n    # here we are just removing the empty window\n    # there is nothing in it\n    containerWindow.fullDestroy()\n  \n  empty: ->\n    @scrollPanel?.contents?.fullDestroyChildren()\n  \n  buildAndConnectChildren: ->\n\n    @scrollPanel = new ScrollPanelWdgt()\n    @add @scrollPanel\n\n    @hideUsedWdgtsOnButton = new SimpleButtonMorph true, @, "showAllWidgets", "☒ only show lost items"\n    @hideUsedWdgtsOffButton = new SimpleButtonMorph true, @, "hideUsedWidgets", "☐ only show lost items"\n    @hideUsedWdgtsToggle = new ToggleButtonMorph @hideUsedWdgtsOffButton, @hideUsedWdgtsOnButton, 0\n    @add @hideUsedWdgtsToggle\n\n\n    # resizer\n    @resizer = new HandleMorph @\n\n    @invalidateLayout()\n\n\n  # this is a very basic garbage collection mechanism\n  # we basically try to find out which items in the basement\n  # are still referenced somehow and which aren\'t\n  # it\'s based on the idea that "referencing" widgets\n  # are kept in a list, and we can just scan those and mark\n  # everything they reference as "reachable".\n  doGC: ->\n    world.incrementalGcSessionId++\n    newGcSessionId = world.incrementalGcSessionId\n\n    # precondition: the BasementWdgt is on the desktop.\n    # first, take all orphan references and mark them as visited so we\n    # get them out of the way immediately. They are unreachable by\n    # definition (remember, the BasementWdgt is on screen, so they\n    # are not even in the basement!) and\n    # so they don\'t make their target reacheable.\n    for eachReferencingMorph in world.widgetsReferencingOtherWidgets\n      if eachReferencingMorph.isOrphan()\n        eachReferencingMorph.markReferenceAsVisited newGcSessionId\n\n    # then, take all remaining references, filter OUT the ones in the\n    # basement (so: get the non-orphan non-basement references, which means\n    # they are reachable from the desktop without going via the basement)\n    # and for each:\n    #  - mark what they reach (and their parents) as reachable\n    #     (note that what they reach MIGHT be in the basement)\n    #  - mark them as visited so we don\'t visit again\n    for eachReferencingMorph in world.widgetsReferencingOtherWidgets\n      if !eachReferencingMorph.wasReferenceVisited newGcSessionId\n        if !eachReferencingMorph.isInBasement()\n          eachReferencingMorph.target.markItAndItsParentsAsReachable newGcSessionId\n          eachReferencingMorph.markReferenceAsVisited newGcSessionId\n\n    # then, take all remaining references (which by exclusion at this point\n    # must be the references the basement) and,\n    # if they are reachable, then we have to mark what they reference\n    # as reachable.\n    # How do we know if they are reachable?\n    # They are reachable if one of their parents is reachable.\n    # Then:\n    #   - mark what it references (and parents) as reacheable\n    #   - mark it as visited so we don\'t visit again\n    # Note that this a progressive search, because a reference might\n    # make another reference reacheable, which might make another\n    # reference reachable... in those chains we have to keep\n    # searching until we find no new references\n    newReachableReferencesUncovered = true\n    while newReachableReferencesUncovered\n      newReachableReferencesUncovered = false\n      for eachReferencingMorph in world.widgetsReferencingOtherWidgets\n        if !eachReferencingMorph.wasReferenceVisited newGcSessionId\n          if eachReferencingMorph.isInBasementButReachable newGcSessionId\n            newReachableReferencesUncovered = true\n            eachReferencingMorph.target.markItAndItsParentsAsReachable newGcSessionId\n            eachReferencingMorph.markReferenceAsVisited newGcSessionId\n\n    return newGcSessionId\n\n  hideUsedWidgets: ->\n    @showingLostItemsOnly = true\n\n    newGcSessionId = @doGC()\n\n    # now we have an idea of which children in the basement\n    # are reachable and which aren\'t\n    referencedChildren = []\n\n    for eachChild in @scrollPanel.contents.children\n      if eachChild.isInBasementButReachable newGcSessionId\n        if referencedChildren.indexOf eachChild == -1\n          referencedChildren.push eachChild\n\n    for eachChild in referencedChildren\n      eachChild.hide()\n\n  showAllWidgets: ->\n    @showingLostItemsOnly = false\n    for eachChild in @scrollPanel.contents.children\n      eachChild.show()\n\n  # if a child has been added to the scrollPanel,\n  # the scrollPanel checks its parent to see if it\n  # has this callback. We use this callback because\n  # we want to make\n  # sure that the "only show lost items"\n  # filter is respected. Just re-invoke the\n  # methods that calculate the visibility\n  childAddedInScrollPanel: ->\n    if @showingLostItemsOnly\n      @hideUsedWidgets()\n    else\n      @showAllWidgets()\n\n\n  doLayout: (newBoundsForThisLayout) ->\n    #if !window.recalculatingLayouts\n    #  debugger\n\n    if !newBoundsForThisLayout?\n      if @desiredExtent?\n        newBoundsForThisLayout = @desiredExtent\n        @desiredExtent = nil\n      else\n        newBoundsForThisLayout = @extent()\n\n      if @desiredPosition?\n        newBoundsForThisLayout = (new Rectangle @desiredPosition).setBoundsWidthAndHeight newBoundsForThisLayout\n        @desiredPosition = nil\n      else\n        newBoundsForThisLayout = (new Rectangle @position()).setBoundsWidthAndHeight newBoundsForThisLayout\n\n    if @isCollapsed()\n      @layoutIsValid = true\n      @notifyChildrenThatParentHasReLayouted()\n      return\n\n    @rawSetBounds newBoundsForThisLayout\n\n    trackChanges.push false\n\n    x = @left() + @cornerRadius\n    y = @top() + @cornerRadius\n    r = @right() - @cornerRadius\n    w = r - x\n\n    # scrollPanel\n    y = @top() + 2\n    w = @width() - @cornerRadius\n    w -= @cornerRadius\n    b = @bottom() - (2 * @cornerRadius) - WorldMorph.preferencesAndSettings.handleSize\n    h = b - y\n    @scrollPanel.fullRawMoveTo new Point x, y\n    @scrollPanel.rawSetExtent new Point w, h\n\n    # hideUsedWdgts toggle button\n    x = @scrollPanel.left()\n    y = @scrollPanel.bottom() + @cornerRadius\n    h = WorldMorph.preferencesAndSettings.handleSize\n    w = @scrollPanel.width() - h - @cornerRadius\n    @hideUsedWdgtsToggle.doLayout (new Rectangle  0,0,w,h).translateBy new Point x, y\n    trackChanges.pop()\n\n    @layoutIsValid = true\n    @notifyChildrenThatParentHasReLayouted()\n';
