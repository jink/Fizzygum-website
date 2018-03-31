// Generated by CoffeeScript 1.10.0
window.ContainerMixin_coffeSource = '# //////////////////////////////////////////////////////////\n#      THIS MIXIN IS TEMPORARY. JUST STARTED IT.\n# //////////////////////////////////////////////////////////\n\n# these comments below needed to figure out dependencies between classes\n# REQUIRES globalFunctions\n\n#   1) a container has potentially a background and\n#   2) some padding\n#   3) it resizes itself so to *at least contain* all the morphs attached to it (i.e. it could be bigger).\n# It doesn’t need to be rectangular.\n# [TODO] Also it can draw a border of its own cause of the padding, you can add enough padding so the border is drawn correctly, maybe the padding can be automatically determined based on the border color.\n\nContainerMixin =\n  # klass properties here:\n  # none\n\n  # instance properties to follow:\n  onceAddedClassProperties: (fromClass) ->\n    @addInstanceProperties fromClass,\n      setTarget: ->\n        choices = world.plausibleTargetAndDestinationMorphs @\n        if choices.length > 0\n          menu = new MenuMorph false, @, true, true, "choose target:"\n          #choices.push @world()\n          choices.forEach (each) =>\n            menu.addItem each.toString().slice(0, 50) + " ➜", false, @, "setTargetSetter", null, null, null, null, null,each\n        else\n          menu = new MenuMorph false, @, true, true, "no targets available"\n        menu.popUpAtHand @firstContainerMenu()\n\n      adjustBounds: ->\n        newBounds = @subMorphsMergedFullBounds()\n        if newBounds\n          if @padding?\n            newBounds = newBounds.expandBy @padding\n        else\n          newBounds = @boundingBox()\n\n        unless @boundingBox().eq newBounds\n          @silentRawSetBounds newBounds\n          @changed()\n          @reLayout()\n          \n';