window.MorphicNode_coffeSource = '''
# Morphic node class only cares about the
# parent/child connection between
# morphs. It's good to connect/disconnect
# morphs and to find parents or children
# who satisfy particular properties.
# OUT OF SCOPE:
# It's important to note that this layer
# knows nothing about visibility, targets,
# image buffers, dirty rectangles, events,
# position and extent (and hence bounds).
# Please no invocations to changed or fullChanged
# or updateBackBuffer in here, and no
# touching of any of the out-of-scope properties
# mentioned.

class MorphicNode

  parent: null
  # "children" is an ordered list of the immediate
  # children of this node. First child is at the
  # back relative to other children, last child is at the
  # top.
  # This makes intuitive sense if you think for example
  # at a textMorph being added to a box morph: it is
  # added to the children list of the box morph, at the end,
  # and it's painted on top (otherwise it wouldn't be visible).
  # Note that when you add a morph A to a morph B, it doesn't
  # mean that A is cointained in B. The two potentially might
  # not even overlap.
  # The shadow is added as the first child, and it's
  # actually a special child that gets drawn before the
  # others.
  children: null

  rootCache: null
  rootCacheChecker: null

  checkFirstFrameParentCache: null
  cachedFirstFrameParent: null

  constructor: (@parent = null, @children = []) ->

  
  # MorphicNode string representation: e.g. 'a MorphicNode[3]'
  toString: ->
    if @children?
      childrenLength = @children.length
    else
      childrenLength = "-"
    "a MorphicNode" + "[" + childrenLength + "]"

  # currently unused in ZK
  childrenTopToBottom: ->
    arrayShallowCopyAndReverse @children
  
  # MorphicNode accessing:
  addChild: (aMorphicNode, position = null) ->
    WorldMorph.numberOfAddsAndRemoves++
    @invalidateFullBoundsCache @
    @invalidateFullClippedBoundsCache @
    if !position?
      @children.push aMorphicNode
    else
      @children.splice position, 0, aMorphicNode
    aMorphicNode.parent = @
    ## @connectValuesToAddedChild aMorphicNode
  
  # currently used to add the shadow. The shadow
  # is in the background in respect to everything
  # else so it's drawn as the first child
  # (after the morph itself, but the shadow has a hole
  # or semi-transparency for it)
  addChildFirst: (aMorphicNode) ->
    
    @addChild aMorphicNode, 0

  # used from bringToForegroud method
  # for example when you
  # click morphs around... they
  # pop to the foreground
  moveAsLastChild: ->
    return unless @parent?
    idx = @parent.children.indexOf @
    if idx == -1
      return
    # check if already last child
    # i.e. topmost
    if idx == @parent.children.length - 1
      return
    @parent.children.splice idx, 1
    @parent.children.push @
    # whoever invoked this should probably
    # do a fullChanged() we don't do it
    # here because it seems like a lower-level
    # function calling a higher-level one.
  
  removeChild: (aMorphicNode) ->
    # remove the array element from the
    # array
    WorldMorph.numberOfAddsAndRemoves++
    @invalidateFullBoundsCache @
    @invalidateFullClippedBoundsCache @
    @children.remove aMorphicNode
    aMorphicNode.parent = null
    ## @disconnectValuesFromRemovedChild aMorphicNode
  
  # is this Morph attached to neither the world nor to
  # the hand?
  isOrphan: ->
    root = @root()
    if root == world or root == world.hand
      return false
    return true

  # MorphicNode functions:
  SLOWroot: ->
    if @parent?
      return @parent.SLOWroot()
    else
      return @

  # MorphicNode functions:
  root: ->
    if @rootCacheChecker == WorldMorph.numberOfAddsAndRemoves
      #console.log "cache hit root"
      result = @rootCache
    else
  
      theRoot = @
      if @parent?
        theRoot = @parent.root()

      @rootCacheChecker = WorldMorph.numberOfAddsAndRemoves
      @rootCache = theRoot
      result = @rootCache

    if world.doubleCheckCachedMethodsResults
      if result != @SLOWroot()
        debugger
        alert "root is broken"

    return result

  # returns the path of this morph in terms
  # of children positions relative to the world.
  # Meaning that if the morph is not attached to the
  # world or if it's attached to the hand, then
  # null is returned.
  # Example: [0, 2, 1] means that this morph is
  # at
  #  world.children[0].children[2].children[1]
  pathOfChildrenPositionsRelativeToWorld: (pathSoFar) ->
    if !pathSoFar?
      pathSoFar = 
        actualPath: []
        lengthOfChildrenArrays: []

    if @parent?
      pathSoFar.actualPath.push @parent.children.indexOf @
      pathSoFar.lengthOfChildrenArrays.push @parent.children.length
      @parent.pathOfChildrenPositionsRelativeToWorld pathSoFar
    else
      if @ == world
        pathSoFar.actualPath.reverse()
        pathSoFar.lengthOfChildrenArrays.reverse()
        return pathSoFar
      else
        return null

  
  # currently unused
  depth: ->
    return 0  unless @parent
    @parent.depth() + 1
  
  # Returns all the internal AND terminal nodes in the subtree starting
  # at this node - including this node.
  # Remember that the @children property already sorts morphs
  # from bottom to top

  allChildrenBottomToTop: ->
    result = [@] # includes myself
    @children.forEach (child) ->
      result = result.concat child.allChildrenBottomToTop()
    result

  allChildrenTopToBottom: ->
    return allChildrenTopToBottomSuchThat -> true

  # the easiest way here would be to just return
  #   arrayShallowCopyAndReverse(@allChildrenBottomToTop())
  # but that's slower.
  # So we do the proper visit here instead.
  allChildrenTopToBottomSuchThat: (predicate) ->
    collected = []


    # if I have children, then start from the top
    # one (i.e. the last in the array) towards the bottom
    # one and concatenate their respective
    # top-to-bottom lists
    for morphNumber in [@children.length-1..0] by -1
      morph = @children[morphNumber]
      collected = collected.concat morph.allChildrenTopToBottomSuchThat predicate

    # base case: after we checked all the
    # children, we add ourselves to the last position
    # of the list since this node is at the bottom of all of
    # its children...
    if predicate.call null, @
      collected.push @ # include myself

    return collected


  # A shorthand to run a function on all the internal/terminal nodes in the subtree
  # starting at this node - including this node.
  # Note that the function first runs on this node
  # (which is, when painted, the very bottom-est morph of them all)
  # and the proceeds by visiting the first child
  # which is the most "bottom" of the children
  # (i.e. when painted, the first child in the "children" array
  # and its children are painted just above the parent node)
  # and then recursively depht-first all its children
  # and then the second - bottomest child and children etc.
  # Also note that there is a more elegant implementation where
  # we just use @allChildrenBottomToTop() but that would mean to create
  # all the intermediary arrays with also all the unneeded node elements,
  # there is no need for that.
  # This is the simplest and cheapest way to visit all Morphs in
  # a tree of morphs.
  forAllChildrenBottomToTop: (aFunction) ->
    aFunction.call null, @
    if @children.length
      @children.forEach (child) ->
        child.forAllChildrenBottomToTop aFunction
  
  # not used in ZK so far
  allLeafsBottomToTop: ->
    if @children.length == 0
      return [@]
    result = []
    @children.forEach (child) ->
      result = result.concat child.allLeafsBottomToTop()
    return result

  # Return all "parent" nodes from the root up to this node (including both)
  allParentsBottomToTop: ->
    if @parent?
      someParents = @parent.allParentsBottomToTop()
      someParents.push @
      return someParents
    else
      return [@]
  
  # Return all "parent" nodes from this node up to the root (including both)
  # Implementation commented-out below works but it's probably
  # slower than the one given, because concat is slower than pushing just
  # an array element, since concat does a shallow copy of both parts of
  # the array...
  #   allParentsTopToBottom: ->
  #    # includes myself
  #    result = [@]
  #    if @parent?
  #      result = result.concat(@parent.allParentsTopToBottom())
  #    result

  allParentsTopToBottom: ->
    return @allParentsBottomToTop().reverse()

  # this should be quicker than allParentsTopToBottomSuchThat
  # cause there are no concats making shallow copies.
  allParentsBottomToTopSuchThat: (predicate) ->
    result = []
    if @parent?
      result = @parent.allParentsBottomToTopSuchThat predicate
    if predicate.call(null, @)
      result.push @
    result

  allParentsTopToBottomSuchThat: (predicate) ->
    collected = []
    if predicate.call null, @
      collected = [@] # include myself
    if @parent?
      collected = collected.concat @parent.allParentsTopToBottomSuchThat predicate
    return collected

  # quicker version that doesn't need us
  # to create any intermediate arrays
  # but rather just loops up the chain
  # and lets us return as soon as
  # we find a match
  isAncestorOf: (morph) ->
    if !morph?
      # this happens when in a test, you select
      # a menu entry that doesn't exist.
      # so it's a good thing that we block the test
      # and let the user navigate through the world
      # to find the state of affairs that caused
      # the problem.
      console.log "failed to find morph in test: " + window.world.automatorRecorderAndPlayer.name
      console.log "trying to find item with text label: " +  window.world.automatorRecorderAndPlayer.automatorCommandsSequence[window.world.automatorRecorderAndPlayer.indexOfTestCommandBeingPlayedFromSequence].textLabelOfClickedItem
      console.log "...you can likely fix the test by correcting the label above in the test"
      debugger
    # test the morph itself
    if morph is @
      return true
    examinedMorph = morph
    # could use recursion, but
    # a loop will do too
    while examinedMorph.parent?
      examinedMorph = examinedMorph.parent
      if examinedMorph is @
        return true
    return false

  # The direct children of the parent of this node. (current node not included)
  # never used in ZK
  # There is an alternative solution here below, in comment,
  # but I believe to be slower because it requires applying a function to
  # all the children. My version below just required an array copy, then
  # finding an element and splicing it out. I didn't test it so I don't
  # even know whether it works, but gut feeling...
  #  siblings: ->
  #    return []  unless @parent
  #    @parent.children.filter (child) =>
  #      child isnt @
  siblings: ->
    return []  unless @parent
    siblings = arrayShallowCopy @parent.children
    # now remove myself
    siblings.remove @
    return siblings

  firstSiblingsSuchThat: (predicate) ->
    for eachSibling in @parent.children
      if predicate.call null, eachSibling
        return eachSibling
    return null

  amITheFirstSibling: ->
    if @parent.children[0] == @
      return true
    return false

  amITheLastSibling: ->
    if @parent.children[@parent.children.length - 1] == @
      return true
    return false

  positionAmongSiblings: ->
    theCount = 0
    for eachSibling in @parent.children
      if eachSibling == @
        return theCount
      theCount++

  siblingBeforeMeIsA: (theConstructor) ->
    if @amITheFirstSibling()
      return false
    if @parent.children[@positionAmongSiblings()-1] instanceof theConstructor
      return true
    return false

  siblingAfterMeIsA: (theConstructor) ->
    if @amITheLastSibling()
      return false
    if @parent.children[@positionAmongSiblings()+1] instanceof theConstructor
      return true
    return false


  # find how many siblings before me
  # satisfy a property
  # This is used when figuring out
  # how many buttons before a particular button
  # are labeled in the same way,
  # in the test system.
  # (so that we can say: automatically
  # click on the nth button labelled "X")
  howManySiblingsBeforeMeSuchThat: (predicate) ->
    theCount = 0
    for eachSibling in @parent.children
      if eachSibling == @
        return theCount
      if predicate.call null, eachSibling
        theCount++
    return theCount

  lastSiblingBeforeMeSuchThat: (predicate) ->
    theCount = 0
    indexOfMorph = null
    for eachSibling in @parent.children
      if eachSibling == @
        break
      if predicate.call null, eachSibling
        indexOfMorph = theCount
      theCount++

    if indexOfMorph?
      return @parent.children[indexOfMorph]
    else
      return null

  firstSiblingAfterMeSuchThat: (predicate) ->
    searchActuallyOngoing = false
    for eachSibling in @parent.children
      if searchActuallyOngoing
        if predicate.call null, eachSibling
          return eachSibling
      if eachSibling == @
        searchActuallyOngoing = true
    return null

  # find the nth child satisfying
  # a property.
  # This is used when finding
  # the nth buttons of a menu
  # having a particular label.
  # (so that we can say: automatically
  # click on the nth button labelled "X")
  nthChildSuchThat: (n, predicate) ->
    theCount = 0
    for eachChild in @children
      if predicate.call null, eachChild
        theCount++
        if theCount is n
          return eachChild
    return null

  firstChildSuchThat: (predicate) ->
    @nthChildSuchThat 1, predicate

  SLOWfirstFrameParent: (morphToStartFrom = @) ->
    if morphToStartFrom.parent?
      if morphToStartFrom.parent instanceof FrameMorph
        return morphToStartFrom.parent
      else
        return morphToStartFrom.parent.SLOWfirstFrameParent()
    else
      return null

  firstFrameParent: (morphToStartFrom = @) ->
    if @checkFirstFrameParentCache == WorldMorph.numberOfAddsAndRemoves
      if world.doubleCheckCachedMethodsResults
        if @cachedFirstFrameParent != @SLOWfirstFrameParent morphToStartFrom
          debugger
          alert "firstFrameParent is broken (cached)"

    if morphToStartFrom.parent?
      if morphToStartFrom.parent instanceof FrameMorph
        result = morphToStartFrom.parent
      else
        result = morphToStartFrom.parent.firstFrameParent()
    else
      result =  null

    if world.doubleCheckCachedMethodsResults
      if result != @SLOWfirstFrameParent morphToStartFrom
        debugger
        alert "firstFrameParent is broken (uncached)"

    @checkFirstFrameParentCache = WorldMorph.numberOfAddsAndRemoves
    @cachedFirstFrameParent = result


  
  # returns the first parent (going up from this node) that is of a particular class
  # (includes this particular node)
  # This is a subcase of "parentThatIsAnyOf".
  parentThatIsA: (constructors...) ->
    # including myself
    for eachConstructor in constructors
      if @ instanceof eachConstructor
        return [@, eachConstructor]
    return null  unless @parent
    @parent.parentThatIsA constructors...

  # checks whether the morph is a child,
  # directly or indirectly, of a specified
  # supposed ancestor morph
  # this is currently unused
  isADescendantOf: (theSupposedAncestorMorph) ->
    if @ == theSupposedAncestorMorph
      return true
    if !@parent?
      return false
    return @parent.isADescendantOf theSupposedAncestorMorph
  

  # There would be another, simpler, implementation
  # which is also slower, where you first collect all
  # the children from top to bottom and then do the
  # test on each. But this is more efficient - we don't
  # need to create that entire list to start with, we
  # just navigate through the children arrays depth-first
  # (in reverse order though, see below)
  # and stop at the first morph that satisfies the test.
  topMorphSuchThat: (predicate) ->
    # base case - I am a leaf child, so I just test
    # the predicate on myself and return myself
    # if I satisfy, else I return null
    if @children.length == 0
      if predicate.call null, @
        return @
      else
        return null
    # if I have children, then start to test from
    # the top one (the last one in the array)
    # and proceed to test "towards the back" i.e.
    # testing elements of the array towards 0
    # If you find any morph satisfying, the search is
    # over.
    for morphNumber in [@children.length-1..0] by -1
      morph = @children[morphNumber]
      foundMorph = morph.topMorphSuchThat predicate
      if foundMorph?
        return foundMorph
    # now that all children are tested, test myself
    if predicate.call null, @
      return @
    else
      return null
    # ok none of my children nor me test positive,
    # so return null.
    return null

  topmostChildSuchThat: (predicate) ->
    # start to test from
    # the top one (the last one in the array)
    # and proceed to test "towards the back" i.e.
    # testing elements of the array towards 0
    # If you find any child that satisfies, the search is
    # over.
    for morphNumber in [@children.length-1..0] by -1
      morph = @children[morphNumber]
      if predicate.call null, morph
        return morph
    # ok none of my children test positive,
    # so return null.
    return null

  collectAllChildrenBottomToTopSuchThat: (predicate) ->
    collected = []
    if predicate.call(null, @)
      collected = [@] # include myself
    @children.forEach (child) ->
      collected = collected.concat(child.collectAllChildrenBottomToTopSuchThat(predicate))
    return collected


'''