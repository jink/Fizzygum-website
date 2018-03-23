// Generated by CoffeeScript 1.12.7
window.IconicDesktopSystemShortcutWdgt_coffeSource = '# REQUIRES HighlightableMixin\n\n# a "shortcut" (for friends) is a reference to something else.\n# What does it mean? That if you duplicate the shortcut you just\n# duplicate a reference, and opening either one will open the\n# SAME referenced widget. Note that you can\'t show TWO\n# "SAME widget"s at the same time, so opening a shortcut is likely\n# to move the referenced widget from a location to another.\n#\n# If you want to duplicate the referencED widget instead, just\n# duplicate that one, and create a reference FOR THE COPY.\n#\n# So, for example, is the Fizzypaint launcher icon a reference?\n# NO, because if you duplicate the launcher, and open both of the\n# launchers, you don\'t get to the SAME widget, you get to two entirely\n# separate Fizzypaint instances that have different lifes and can be\n# shown both at the same time on the screen.\n\nclass IconicDesktopSystemShortcutWdgt extends IconicDesktopSystemLinkWdgt\n\n  @augmentWith HighlightableMixin, @name\n\n  color_hover: new Color 90, 90, 90\n  color_pressed: new Color 128, 128, 128\n  color_normal: new Color 0, 0, 0\n\n  reactToDropOf: (droppedWidget) ->\n\n  constructor: (@target, @title, @icon) ->\n    if !@title?\n      @title = @target.colloquialName()\n\n    super @title, @icon\n    world.widgetsReferencingOtherWidgets.push @\n\n  destroy: ->\n    super\n    world.widgetsReferencingOtherWidgets.remove @\n\n  alignCopiedMorphToReferenceTracker: (cloneOfMe) ->\n    if world.widgetsReferencingOtherWidgets.indexOf(@) != -1\n      world.widgetsReferencingOtherWidgets.push cloneOfMe\n\n';
