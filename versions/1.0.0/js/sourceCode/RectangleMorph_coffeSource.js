// Generated by CoffeeScript 1.10.0
window.RectangleMorph_coffeSource = '# RectangleMorph /////////////////////////////////////////////////////////\n# a plain rectangular Morph. Because it\'s so basic, it\'s the building\n# block of many more complex constructions, for example containers\n# , clipping windows, and clipping windows which allow content to be\n# scrolled (clipping is particularly easy to do along a rectangular\n# path and it allows many optimisations and it\'s a very common case)\n# It\'s important that the basic unadulterated version of\n# rectangle doesn\'t draw a border, to keep this basic\n# and versatile, so for example there is no case where the children\n# are painted over the border, which would look bad.\n\n\nclass RectangleMorph extends Morph\n  # this is so we can create objects from the object class name \n  # (for the deserialization process)\n  namedClasses[@name] = @prototype\n\n  constructor: (extent, color) ->\n    super()\n    @appearance = new RectangularAppearance @\n    @silentRawSetExtent(extent) if extent?\n    @color = color if color?';