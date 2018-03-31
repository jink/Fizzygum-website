window.OverlayCanvasMorph_coffeSource = '''
# OverlayCanvasMorph //////////////////////////////////////////////////////////

class OverlayCanvasMorph extends CanvasMorph
  # this is so we can create objects from the object class name 
  # (for the deserialization process)
  namedClasses[@name] = @prototype

  underlyingCanvasMorph: null

  constructor: ->
  	super
  	@color = null

  isFloatDraggable: ->
    false
'''