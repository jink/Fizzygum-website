// Generated by CoffeeScript 1.12.7
window.ShadowInfo_coffeSource = '# REQUIRES DeepCopierMixin\n\nclass ShadowInfo\n\n  @augmentWith DeepCopierMixin\n\n  offset: nil\n  alpha: 0\n\n  # alpha should be between zero (transparent)\n  # and one (fully opaque)\n  constructor: (@offset = new Point(7, 7), @alpha = 0.2) ->\n    @offset.debugIfFloats()\n\n\n  @noShadow: ->\n    new ShadowInfo new Point(0, 0), 0\n';
