// Generated by CoffeeScript 1.12.7
window.ModifiedTextTriangleAnnotationWdgt_coffeSource = '# REQUIRES globalFunctions\n# REQUIRES UpperRightInternalHaloMixin\n\nclass ModifiedTextTriangleAnnotationWdgt extends Widget\n\n  @augmentWith UpperRightInternalHaloMixin, @name\n  positionWithinParent: "topLeft"\n\n  constructor: (parent = nil, @proportionOfParent = 0, @fixedSize = 10) ->\n    super()\n    @appearance = new UpperRightTriangleAppearance @, @positionWithinParent\n\n    # this morph has triangular shape and we want it\n    # to only react to pointer events happening\n    # within tha shape\n    @noticesTransparentClick = false\n\n    size = WorldMorph.preferencesAndSettings.handleSize\n    @silentRawSetExtent new Point size, size\n    if parent\n      parent.add @\n    @updateResizerPosition()\n\n\n';
