// Generated by CoffeeScript 1.12.7
window.IconicDesktopSystemFolderShortcutWdgt_coffeSource = 'class IconicDesktopSystemFolderShortcutWdgt extends IconicDesktopSystemShortcutWdgt\n\n  _acceptsDrops: true\n\n  reactToDropOf: (droppedWidget) ->\n    debugger\n    if droppedWidget instanceof IconicDesktopSystemLinkWdgt\n      @target.contents.contents.add droppedWidget\n    else\n      droppedWidget.createReferenceAndClose nil, @target.contents.contents\n\n  constructor: (@target, @title) ->\n    super @target, @title, new GenericShortcutIconWdgt new FolderIconWdgt()\n\n  mouseDoubleClick: ->\n    if @target.destroyed\n      @inform "The referenced item\\nis dead!"\n      return\n\n    if @target.isAncestorOf @\n      @inform "The referenced item is\\nalready open and containing\\nwhat you just clicked on!"\n      return\n\n    # the target could be hidden if it\'s been hidden in the\n    # basement view "only show lost items"\n    @target.show()\n\n    myPosition = @positionAmongSiblings()\n    whatToBringUp = @target.findRootForGrab()\n    # things like draggable graphs have no root for grab,\n    # however since they are in the basement "directly" on their own\n    # it\'s OK to bring those up (as opposed to things\n    # that are part of other widgets that are in the basement,\n    # in that case you\'d tear it off an existing widget and it\n    # would probably be a bad thing)\n    if !whatToBringUp? and @target.isDirectlyInBasement()\n      whatToBringUp = @target\n    if !whatToBringUp?\n      @inform "The referenced item does exist\\nhowever it\'s part of something\\nthat can\'t be grabbed!"\n    else\n      # let\'s make SURE what we are bringing up is\n      # visible\n      whatToBringUp.show()\n      whatToBringUp.spawnNextTo @, world\n      whatToBringUp.rememberFractionalSituationInHoldingPanel()\n      whatToBringUp.setTitle? @label.text\n\n';