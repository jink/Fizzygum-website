// Generated by CoffeeScript 1.10.0
var MixedClassKeywords, Mousetrap, _KEYCODE_MAP, _MAP, _REVERSE_MAP, _SHIFT_MAP, _SPECIAL_ALIASES, _addEvent, _bindMultiple, _bindSequence, _bindSingle, _callbacks, _characterFromEvent, _directMap, _eventModifiers, _fireCallback, _getMatches, _getReverseMap, _handleCharacter, _handleKey, _ignoreNextKeyup, _isModifier, _modifiersMatch, _pickBestAction, _resetSequenceTimer, _resetSequences, _resetTimer, _sequenceLevels, _sequenceType, aSourceHasBeenLoaded, aTestScriptHasBeenLoaded, arrayShallowCopy, arrayShallowCopyAndReverse, boot, compileAndEvalAllSrcFiles, continueBooting, continueBooting2, decamelize, degreesToRadians, detect, extend, fade, fontHeight, generate_inclusion_order, getBlurredShadowSupport, getDocumentPositionOf, getMinimumFontHeight, getParameterByName, hashCode, howManySourcesCompiledAndEvalled, howManySourcesLoaded, howManyTestManifestsLoaded, i, isFunction, isNil, isObject, isString, loadAllSources, loadKlass, loadTestManifests, localize, morphicVersion, namedClasses, newCanvas, noOperation, nop, radiansToDegrees, sizeOf, trackChanges, visit, world,
  slice = [].slice,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  hasProp = {}.hasOwnProperty;

MixedClassKeywords = ['onceAddedClassProperties', 'included'];

namedClasses = {};

HTMLCanvasElement.prototype.deepCopy = function(doSerialize, objOriginalsClonedAlready, objectClones, allMorphsInStructure) {
  var cloneOfMe, ctx, haveIBeenCopiedAlready, positionInObjClonesArray;
  haveIBeenCopiedAlready = objOriginalsClonedAlready.indexOf(this);
  if (haveIBeenCopiedAlready >= 0) {
    if (doSerialize) {
      return "$" + haveIBeenCopiedAlready;
    } else {
      return objectClones[haveIBeenCopiedAlready];
    }
  }
  positionInObjClonesArray = objOriginalsClonedAlready.length;
  objOriginalsClonedAlready.push(this);
  cloneOfMe = newCanvas(new Point(this.width, this.height));
  ctx = cloneOfMe.getContext("2d");
  ctx.drawImage(this, 0, 0);
  if (doSerialize) {
    cloneOfMe = {};
  }
  objectClones.push(cloneOfMe);
  if (doSerialize) {
    cloneOfMe.className = "Canvas";
    cloneOfMe.width = this.width;
    cloneOfMe.height = this.height;
    cloneOfMe.data = this.toDataURL();
    return "$" + positionInObjClonesArray;
  }
  return cloneOfMe;
};

CanvasRenderingContext2D.prototype.rebuildDerivedValue = function(objectIBelongTo, myPropertyName) {
  return objectIBelongTo[myPropertyName] = objectIBelongTo.backBuffer.getContext("2d");
};

if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    var element, j, len, results1;
    results1 = [];
    for (j = 0, len = this.length; j < len; j++) {
      element = this[j];
      if (callback(element)) {
        results1.push(element);
      }
    }
    return results1;
  };
}

Array.prototype.deepCopy = function(doSerialize, objOriginalsClonedAlready, objectClones, allMorphsInStructure) {
  var cloneOfMe, haveIBeenCopiedAlready, i, j, positionInObjClonesArray, ref;
  haveIBeenCopiedAlready = objOriginalsClonedAlready.indexOf(this);
  if (haveIBeenCopiedAlready >= 0) {
    if (doSerialize) {
      return "$" + haveIBeenCopiedAlready;
    } else {
      return objectClones[haveIBeenCopiedAlready];
    }
  }
  positionInObjClonesArray = objOriginalsClonedAlready.length;
  objOriginalsClonedAlready.push(this);
  cloneOfMe = [];
  objectClones.push(cloneOfMe);
  for (i = j = 0, ref = this.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    if (this[i] == null) {
      cloneOfMe[i] = null;
    } else if (typeof this[i] === 'object') {
      if (this[i].deepCopy == null) {
        debugger;
      }
      cloneOfMe[i] = this[i].deepCopy(doSerialize, objOriginalsClonedAlready, objectClones, allMorphsInStructure);
    } else {
      cloneOfMe[i] = this[i];
    }
  }
  if (doSerialize) {
    return "$" + positionInObjClonesArray;
  }
  return cloneOfMe;
};

Array.prototype.chunk = function(chunkSize) {
  var array;
  array = this;
  return [].concat.apply([], array.map(function(elem, i) {
    if (i % chunkSize) {
      return [];
    } else {
      return [array.slice(i, i + chunkSize)];
    }
  }));
};

Array.prototype.remove = function() {
  var arg, args, index, j, len, output;
  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
  output = [];
  for (j = 0, len = args.length; j < len; j++) {
    arg = args[j];
    index = this.indexOf(arg);
    if (index !== -1) {
      output.push(this.splice(index, 1));
    }
  }
  if (args.length === 1) {
    output = output[0];
  }
  return output;
};

Array.prototype.unique = function() {
  var j, key, output, ref, results1, value;
  output = {};
  for (key = j = 0, ref = this.length; 0 <= ref ? j < ref : j > ref; key = 0 <= ref ? ++j : --j) {
    output[this[key]] = this[key];
  }
  results1 = [];
  for (key in output) {
    value = output[key];
    results1.push(value);
  }
  return results1;
};

if (typeof String.prototype.camelize === 'undefined') {
  String.prototype.camelize = function() {
    return this.replace(/(?:^|[-])(\w)/g, function(_, c) {
      if (c) {
        return c.toUpperCase();
      } else {
        return '';
      }
    });
  };
}

if (typeof String.prototype.contains === 'undefined') {
  String.prototype.contains = function(it) {
    return this.indexOf(it) !== -1;
  };
}

if (typeof String.prototype.isLetter === 'undefined') {
  String.prototype.isLetter = function() {
    return this.length === 1 && this.match(/[a-z]/i);
  };
}

CanvasRenderingContext2D.prototype.clipToRectangle = function(al, at, w, h) {
  this.beginPath();
  this.moveTo(Math.round(al), Math.round(at));
  this.lineTo(Math.round(al) + Math.round(w), Math.round(at));
  this.lineTo(Math.round(al) + Math.round(w), Math.round(at) + Math.round(h));
  this.lineTo(Math.round(al), Math.round(at) + Math.round(h));
  this.lineTo(Math.round(al), Math.round(at));
  this.closePath();
  return this.clip();
};

fade = function(eid, initOp, finalOp, TimeToFade, time) {
  var curTick, elapsedTicks, newOp;
  if (initOp === 0) {
    document.getElementById(eid).style.visibility = 'visible';
  }
  curTick = new Date().getTime();
  elapsedTicks = curTick - time;
  newOp = initOp + (finalOp - initOp) * elapsedTicks / TimeToFade;
  if (Math.abs(newOp - initOp) > Math.abs(finalOp - initOp)) {
    document.getElementById(eid).style.opacity = finalOp;
    if (finalOp === 0) {
      document.getElementById(eid).style.visibility = 'hidden';
    }
    return;
  }
  document.getElementById(eid).style.opacity = newOp;
  setTimeout('fade( \'' + eid + '\',' + initOp + ',' + finalOp + ',' + TimeToFade + ',' + time + ')', TimeToFade / 100);
};

decamelize = function(str, sep) {
  if ((typeof str) !== 'string') {
    throw new TypeError("Expected a string");
  }
  return str.replace(/([a-z\d])([A-Z])/g, '$1' + (sep || '_') + '$2').toLowerCase();
};

getParameterByName = function(name) {
  var regex, results;
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  results = regex.exec(location.search);
  if (results != null) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  } else {
    return null;
  }
};

Object.prototype.augmentWith = function(obj, fromClass) {
  var key, ref, value;
  for (key in obj) {
    value = obj[key];
    if (indexOf.call(MixedClassKeywords, key) < 0) {
      this[key] = value;
    }
  }
  if ((ref = obj.onceAddedClassProperties) != null) {
    ref.apply(this, [fromClass]);
  }
  return this;
};

Object.prototype.addInstanceProperties = function(fromClass, obj) {
  var key, ref, value;
  for (key in obj) {
    value = obj[key];
    if (!(indexOf.call(MixedClassKeywords, key) < 0)) {
      continue;
    }
    this.prototype[key] = value;
    if (fromClass != null) {
      if (isFunction(value)) {
        this.prototype[key + "_class_injected_in"] = fromClass;
        console.log("addingClassToMixin " + key + "_class_injected_in");
      }
    }
  }
  if ((ref = obj.included) != null) {
    ref.apply(this);
  }
  return this;
};

arrayShallowCopy = function(anArray) {
  return anArray.concat();
};

arrayShallowCopyAndReverse = function(anArray) {
  return anArray.concat().reverse();
};

hashCode = function(stringToBeHashed) {
  var char, hash, i, j, ref;
  hash = 0;
  if (stringToBeHashed.length === 0) {
    return hash;
  }
  for (i = j = 0, ref = stringToBeHashed.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    char = stringToBeHashed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
};

nop = function() {
  return function() {
    return null;
  };
};

noOperation = function() {
  return null;
};

isFunction = function(functionToCheck) {
  return typeof functionToCheck === "function";
};

localize = function(string) {
  return string;
};

isNil = function(thing) {
  return thing === undefined || thing === null;
};

detect = function(list, predicate) {
  var element, j, len;
  for (j = 0, len = list.length; j < len; j++) {
    element = list[j];
    if (predicate.call(null, element)) {
      return element;
    }
  }
  return null;
};

sizeOf = function(object) {
  var key, size;
  size = 0;
  key = void 0;
  for (key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      size += 1;
    }
  }
  return size;
};

isString = function(target) {
  return typeof target === "string" || target instanceof String;
};

isObject = function(target) {
  return (target != null) && (typeof target === "object" || target instanceof Object);
};

degreesToRadians = function(degrees) {
  return degrees * Math.PI / 180;
};

radiansToDegrees = function(radians) {
  return radians * 180 / Math.PI;
};

fontHeight = function(fontSize) {
  var minHeight;
  minHeight = Math.max(fontSize, WorldMorph.preferencesAndSettings.minimumFontHeight);
  return Math.ceil(minHeight * 1.2);
};

newCanvas = function(extentPoint) {
  var canvas, ext;
  if (extentPoint != null) {
    extentPoint.debugIfFloats();
  }
  ext = extentPoint || {
    x: 0,
    y: 0
  };
  canvas = document.createElement("canvas");
  canvas.width = Math.ceil(ext.x);
  canvas.height = Math.ceil(ext.y);
  return canvas;
};

getMinimumFontHeight = function() {
  var canvas, ctx, data, j, k, maxX, ref, ref1, size, str, x, y;
  str = "I";
  size = 50;
  canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  ctx = canvas.getContext("2d");
  ctx.font = "1px serif";
  maxX = Math.ceil(ctx.measureText(str).width);
  ctx.fillStyle = "black";
  ctx.textBaseline = "bottom";
  ctx.fillText(str, 0, size);
  for (y = j = 0, ref = size; 0 <= ref ? j < ref : j > ref; y = 0 <= ref ? ++j : --j) {
    for (x = k = 0, ref1 = maxX; 0 <= ref1 ? k < ref1 : k > ref1; x = 0 <= ref1 ? ++k : --k) {
      data = ctx.getImageData(x, y, 1, 1);
      if (data.data[3] !== 0) {
        return size - y + 1;
      }
    }
  }
  return 0;
};

getBlurredShadowSupport = function() {
  var ctx, source, target;
  source = document.createElement("canvas");
  source.width = 10;
  source.height = 10;
  ctx = source.getContext("2d");
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.beginPath();
  ctx.arc(5, 5, 5, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  target = document.createElement("canvas");
  target.width = 10;
  target.height = 10;
  ctx = target.getContext("2d");
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(0, 0, 255, 1)";
  ctx.drawImage(source, 0, 0);
  if (ctx.getImageData(0, 0, 1, 1).data[3]) {
    return true;
  } else {
    return false;
  }
};

getDocumentPositionOf = function(aDOMelement) {
  var offsetParent, pos;
  if (aDOMelement === null) {
    return {
      x: 0,
      y: 0
    };
  }
  pos = {
    x: aDOMelement.offsetLeft,
    y: aDOMelement.offsetTop
  };
  offsetParent = aDOMelement.offsetParent;
  while (offsetParent != null) {
    pos.x += offsetParent.offsetLeft;
    pos.y += offsetParent.offsetTop;
    if (offsetParent !== document.body && offsetParent !== document.documentElement) {
      pos.x -= offsetParent.scrollLeft;
      pos.y -= offsetParent.scrollTop;
    }
    offsetParent = offsetParent.offsetParent;
  }
  return pos;
};

howManySourcesLoaded = 0;

howManyTestManifestsLoaded = 0;

howManySourcesCompiledAndEvalled = 0;

aSourceHasBeenLoaded = function() {
  var loadingLogDiv;
  howManySourcesLoaded++;
  if (howManySourcesLoaded === sourcesManifests.length - 1) {
    loadingLogDiv = document.getElementById('loadingLog');
    loadingLogDiv.innerHTML = "";
    return continueBooting();
  }
};

loadAllSources = function() {
  var eachClass, j, len, results1, script;
  results1 = [];
  for (j = 0, len = sourcesManifests.length; j < len; j++) {
    eachClass = sourcesManifests[j];
    if (eachClass === "Klass_coffeSource") {
      continue;
    }
    script = document.createElement("script");
    script.src = "js/sourceCode/" + eachClass + ".js";
    script.onload = function() {
      var loadingLogDiv;
      loadingLogDiv = document.getElementById('loadingLog');
      loadingLogDiv.innerHTML += "loading " + this.src + "</br>";
      console.log("loading " + this.src);
      return aSourceHasBeenLoaded();
    };
    results1.push(document.head.appendChild(script));
  }
  return results1;
};

aTestScriptHasBeenLoaded = function() {
  howManyTestManifestsLoaded++;
  if (howManyTestManifestsLoaded === 2) {
    return continueBooting2();
  }
};

loadTestManifests = function() {
  var script, script2;
  script = document.createElement("script");
  script.src = "js/tests/testsManifest.js";
  script.onload = (function(_this) {
    return function() {
      return aTestScriptHasBeenLoaded();
    };
  })(this);
  document.head.appendChild(script);
  script2 = document.createElement("script");
  script2.src = "js/tests/testsAssetsManifest.js";
  script2.onload = (function(_this) {
    return function() {
      return aTestScriptHasBeenLoaded();
    };
  })(this);
  return document.head.appendChild(script2);
};

loadKlass = function() {
  var script;
  script = document.createElement("script");
  script.src = "js/sourceCode/Klass_coffeSource.js";
  script.onload = function() {
    console.log("compiling and evalling Klass from souce code");
    eval.call(window, CoffeeScript.compile(window["Klass_coffeSource"], {
      "bare": true
    }));
    return loadAllSources();
  };
  return document.head.appendChild(script);
};

boot = function() {
  return loadKlass();
};

visit = function(dependencies, klass, inclusion_order) {
  var j, key, len, ref;
  if (dependencies[klass] != null) {
    ref = dependencies[klass];
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      if (indexOf.call(inclusion_order, key) >= 0) {
        break;
      }
      visit(dependencies, key, inclusion_order);
    }
  }
  return inclusion_order.push(klass);
};

generate_inclusion_order = function(dependencies) {
  "Returns a list of the coffee files. The list is ordered in such a way  that\nthe dependencies between the files are respected.";
  var inclusion_order, key;
  inclusion_order = [];
  for (key in dependencies) {
    if (key === 'length' || !dependencies.hasOwnProperty(key)) {
      continue;
    }
    visit(dependencies, key, inclusion_order);
  }
  console.log("inclusion_order: " + inclusion_order);
  return inclusion_order;
};

continueBooting = function() {
  var DEPENDS, EXTENDS, IS_CLASS, REQUIRES, TRIPLE_QUOTES, dependencies, eachClass, i, inclusion_order, j, len, lines, matches;
  console.log("--------------------------------");
  dependencies = [];
  REQUIRES = /\sREQUIRES\s*(\w+)/;
  EXTENDS = /\sextends\s*(\w+)/;
  DEPENDS = /\s\w+:\s*new\s*(\w+)/;
  IS_CLASS = /\s*class\s+(\w+)/;
  TRIPLE_QUOTES = /'''/;
  for (j = 0, len = sourcesManifests.length; j < len; j++) {
    eachClass = sourcesManifests[j];
    eachClass = eachClass.replace("_coffeSource", "");
    if (eachClass === "Klass") {
      continue;
    }
    console.log(eachClass + " - ");
    dependencies[eachClass] = [];
    lines = window[eachClass + "_coffeSource"].split('\n');
    i = 0;
    while (i < lines.length) {
      matches = lines[i].match(EXTENDS);
      if (matches != null) {
        dependencies[eachClass].push(matches[1]);
        console.log(eachClass + " extends " + matches[1]);
      }
      matches = lines[i].match(REQUIRES);
      if (matches != null) {
        dependencies[eachClass].push(matches[1]);
        console.log(eachClass + " requires " + matches[1]);
      }
      matches = lines[i].match(DEPENDS);
      if (matches != null) {
        dependencies[eachClass].push(matches[1]);
        console.log(eachClass + " has klass init in instance variable " + matches[1]);
      }
      i++;
    }
  }
  inclusion_order = generate_inclusion_order(dependencies);
  console.log("--------------------------------");
  return compileAndEvalAllSrcFiles(0, inclusion_order);
};

compileAndEvalAllSrcFiles = function(srcNumber, inclusion_order) {
  var eachClass, loadingLogDiv, morphKlass, ref;
  if (srcNumber === inclusion_order.length) {
    loadingLogDiv = document.getElementById('loadingLog');
    loadingLogDiv.parentElement.removeChild(loadingLogDiv);
    loadTestManifests();
    return;
  }
  eachClass = inclusion_order[srcNumber];
  console.log("checking whether " + eachClass + " is already in the system ");
  if (eachClass === "MorphicNode" || eachClass === "Morph" || eachClass === "AnalogClockMorph" || eachClass === "StringMorph2" || eachClass === "TextMorph2") {
    morphKlass = new Klass(window[eachClass + "_coffeSource"]);
  }
  if (window[eachClass] == null) {
    if (ref = eachClass + "_coffeSource", indexOf.call(sourcesManifests, ref) >= 0) {
      console.log("compiling and evalling " + eachClass + " from souce code");
      loadingLogDiv = document.getElementById('loadingLog');
      loadingLogDiv.innerHTML = "compiling and evalling " + eachClass;
      eval.call(window, CoffeeScript.compile(window[eachClass + "_coffeSource"], {
        "bare": true
      }));
    }
  }
  return setTimeout((function() {
    return compileAndEvalAllSrcFiles(srcNumber + 1, inclusion_order);
  }), 1);
};

world = {};

trackChanges = [true];

window.healingRectanglesPhase = false;

window.morphsThatMaybeChangedGeometryOrPosition = [];

window.morphsThatMaybeChangedFullGeometryOrPosition = [];

window.morphsThatMaybeChangedLayout = [];

continueBooting2 = function() {
  var animloop;
  if (window.location.href.contains("worldWithSystemTestHarness")) {
    world = new WorldMorph(worldCanvas, false);
  } else {
    world = new WorldMorph(worldCanvas, true);
  }
  world.isDevMode = true;
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  (animloop = function() {
    requestAnimFrame(animloop);
    world.doOneCycle();
  })();
  if (window.location.href.contains("runAllTests")) {
    world.runAllSystemTests();
  }
  if (window.location.href.contains("worldWithSystemTestHarness")) {
    if (SystemTestsControlPanelUpdater !== null) {
      new SystemTestsControlPanelUpdater;
    }
  }
  window.menusHelper = new MenusHelper();
  return world.boot();
};

extend = function(child, parent) {
  var ctor, key;
  ctor = function() {
    this.constructor = child;
  };
  for (key in parent) {
    if (!hasProp.call(parent, key)) continue;
    child[key] = parent[key];
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child;
};

Number.prototype.timesWithVariable = function(scope, func) {
  var i, results1, v;
  v = this.valueOf();
  i = 0;
  results1 = [];
  while (i < v) {
    func.call(scope || window, i);
    results1.push(i++);
  }
  return results1;
};

Number.prototype.times = function(scope, func) {
  var i, results1, v;
  v = this.valueOf();
  i = 0;
  results1 = [];
  while (i < v) {
    func.call(scope || window, i);
    results1.push(i++);
  }
  return results1;
};


/*
Copyright 2013 Craig Campbell
coffeescript port by Davide Della Casa

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Mousetrap is a simple keyboard shortcut library for Javascript with
no external dependencies

@version 1.3.1
@url craig.is/killing/mice
 */


/*
mapping of special keycodes to their corresponding keys

everything in this dictionary cannot use keypress events
so it has to be here to map to the correct keycodes for
keyup/keydown events

@type {Object}
 */

_MAP = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  224: "meta"
};


/*
mapping for special characters so they can support

this dictionary is only used incase you want to bind a
keyup or keydown event to one of these keys

@type {Object}
 */

_KEYCODE_MAP = {
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};


/*
this is a mapping of keys that require shift on a US keypad
back to the non shift equivelents

this is so you can use keyup events with these keys

note that this will only work reliably on US keyboards

@type {Object}
 */

_SHIFT_MAP = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  ":": ";",
  "\"": "'",
  "<": ",",
  ">": ".",
  "?": "/",
  "|": "\\"
};


/*
this is a list of special strings you can use to map
to modifier keys when you specify your keyboard shortcuts

@type {Object}
 */

_SPECIAL_ALIASES = {
  option: "alt",
  command: "meta",
  "return": "enter",
  escape: "esc"
};


/*
variable to store the flipped version of _MAP from above
needed to check if we should use keypress or not when no action
is specified

@type {Object|undefined}
 */

_REVERSE_MAP = void 0;


/*
a list of all the callbacks setup via Mousetrap.bind()

@type {Object}
 */

_callbacks = {};


/*
direct map of string combinations to callbacks used for trigger()

@type {Object}
 */

_directMap = {};


/*
keeps track of what level each sequence is at since multiple
sequences can start out with the same sequence

@type {Object}
 */

_sequenceLevels = {};


/*
variable to store the setTimeout call

@type {null|number}
 */

_resetTimer = void 0;


/*
temporary state where we will ignore the next keyup

@type {boolean|string}
 */

_ignoreNextKeyup = false;


/*
are we currently inside of a sequence?
type of action ("keyup" or "keydown" or "keypress") or false

@type {boolean|string}
 */

_sequenceType = false;


/*
loop through the f keys, f1 to f19 and add them to the map
programmatically
 */

i = 1;

while (i < 20) {
  _MAP[111 + i] = "f" + i;
  ++i;
}


/*
loop through to map numbers on the numeric keypad
 */

i = 0;

while (i <= 9) {
  _MAP[i + 96] = i;
  ++i;
}


/*
cross browser add event method

@param {Element|HTMLDocument} object
@param {string} type
@param {Function} callback
@returns void
 */

_addEvent = function(object, type, callback) {
  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
    return;
  }
  return object.attachEvent("on" + type, callback);
};


/*
takes the event and returns the key character

@param {Event} e
@return {string}
 */

_characterFromEvent = function(e) {
  if (e.type === "keypress") {
    return String.fromCharCode(e.which);
  }
  if (_MAP[e.which]) {
    return _MAP[e.which];
  }
  if (_KEYCODE_MAP[e.which]) {
    return _KEYCODE_MAP[e.which];
  }
  return String.fromCharCode(e.which).toLowerCase();
};


/*
checks if two arrays are equal

@param {Array} modifiers1
@param {Array} modifiers2
@returns {boolean}
 */

_modifiersMatch = function(modifiers1, modifiers2) {
  return modifiers1.sort().join(",") === modifiers2.sort().join(",");
};


/*
resets all sequence counters except for the ones passed in

@param {Object} doNotReset
@returns void
 */

_resetSequences = function(doNotReset, maxLevel) {
  var activeSequences, key;
  doNotReset = doNotReset || {};
  activeSequences = false;
  key = void 0;
  for (key in _sequenceLevels) {
    if (doNotReset[key] && _sequenceLevels[key] > maxLevel) {
      activeSequences = true;
      continue;
    }
    _sequenceLevels[key] = 0;
  }
  if (!activeSequences) {
    return _sequenceType = false;
  }
};


/*
finds all callbacks that match based on the keycode, modifiers,
and action

@param {string} character
@param {Array} modifiers
@param {Event|Object} e
@param {boolean=} remove - should we remove any matches
@param {string=} combination
@returns {Array}
 */

_getMatches = function(character, modifiers, e, remove, combination) {
  var action, callback, j, matches, ref;
  i = void 0;
  callback = void 0;
  matches = [];
  action = e.type;
  if (!_callbacks[character]) {
    return [];
  }
  if (action === "keyup" && _isModifier(character)) {
    modifiers = [character];
  }
  for (i = j = 0, ref = _callbacks[character].length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    callback = _callbacks[character][i];
    if (callback.seq && _sequenceLevels[callback.seq] !== callback.level) {
      continue;
    }
    if (action !== callback.action) {
      continue;
    }
    if ((action === "keypress" && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {
      if (remove && callback.combo === combination) {
        _callbacks[character].splice(i, 1);
      }
      matches.push(callback);
    }
  }
  return matches;
};


/*
takes a key event and figures out what the modifiers are

@param {Event} e
@returns {Array}
 */

_eventModifiers = function(e) {
  var modifiers;
  modifiers = [];
  if (e.shiftKey) {
    modifiers.push("shift");
  }
  if (e.altKey) {
    modifiers.push("alt");
  }
  if (e.ctrlKey) {
    modifiers.push("ctrl");
  }
  if (e.metaKey) {
    modifiers.push("meta");
  }
  return modifiers;
};


/*
actually calls the callback function

if your callback function returns false this will use the jquery
convention - prevent default and stop propagation on the event

@param {Function} callback
@param {Event} e
@returns void
 */

_fireCallback = function(callback, e, combo) {
  if (Mousetrap.stopCallback(e, e.target || e.srcElement, combo)) {
    return;
  }
  if (callback(e, combo) === false) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.returnValue = false;
    return e.cancelBubble = true;
  }
};


/*
handles a character key event

@param {string} character
@param {Event} e
@returns void
 */

_handleCharacter = function(character, e) {
  var callbacks, doNotReset, maxLevel, processedSequenceCallback;
  callbacks = _getMatches(character, _eventModifiers(e), e);
  i = void 0;
  doNotReset = {};
  maxLevel = 0;
  processedSequenceCallback = false;
  i = 0;
  while (i < callbacks.length) {
    if (callbacks[i].seq) {
      processedSequenceCallback = true;
      maxLevel = Math.max(maxLevel, callbacks[i].level);
      doNotReset[callbacks[i].seq] = 1;
      _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
      continue;
    }
    if (!processedSequenceCallback && !_sequenceType) {
      _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
    }
    ++i;
  }
  if (e.type === _sequenceType && !_isModifier(character)) {
    return _resetSequences(doNotReset, maxLevel);
  }
};


/*
handles a keydown event

@param {Event} e
@returns void
 */

_handleKey = function(e) {
  var character;
  if (typeof e.which !== "number") {
    e.which = e.keyCode;
  }
  character = _characterFromEvent(e);
  if (!character) {
    return;
  }
  if (e.type === "keyup" && _ignoreNextKeyup === character) {
    _ignoreNextKeyup = false;
    return;
  }
  return _handleCharacter(character, e);
};


/*
determines if the keycode specified is a modifier key or not

@param {string} key
@returns {boolean}
 */

_isModifier = function(key) {
  return key === "shift" || key === "ctrl" || key === "alt" || key === "meta";
};


/*
called to set a 1 second timeout on the specified sequence

this is so after each key press in the sequence you have 1 second
to press the next key before you have to start over

@returns void
 */

_resetSequenceTimer = function() {
  clearTimeout(_resetTimer);
  return _resetTimer = setTimeout(_resetSequences, 1000);
};


/*
reverses the map lookup so that we can look for specific keys
to see what can and can't use keypress

@return {Object}
 */

_getReverseMap = function() {
  var key;
  if (!_REVERSE_MAP) {
    _REVERSE_MAP = {};
    for (key in _MAP) {
      if (key > 95 && key < 112) {
        continue;
      }
      if (_MAP.hasOwnProperty(key)) {
        _REVERSE_MAP[_MAP[key]] = key;
      }
    }
  }
  return _REVERSE_MAP;
};


/*
picks the best action based on the key combination

@param {string} key - character for key
@param {Array} modifiers
@param {string=} action passed in
 */

_pickBestAction = function(key, modifiers, action) {
  if (!action) {
    action = (_getReverseMap()[key] ? "keydown" : "keypress");
  }
  if (action === "keypress" && modifiers.length) {
    action = "keydown";
  }
  return action;
};


/*
binds a key sequence to an event

@param {string} combo - combo specified in bind call
@param {Array} keys
@param {Function} callback
@param {string=} action
@returns void
 */

_bindSequence = function(combo, keys, callback, action) {
  var _callbackAndReset, _increaseSequence, results1;
  _sequenceLevels[combo] = 0;
  if (!action) {
    action = _pickBestAction(keys[0], []);
  }

  /*
  callback to increase the sequence level for this sequence and reset
  all other sequences that were active
  
  @param {Event} e
  @returns void
   */
  _increaseSequence = function() {
    _sequenceType = action;
    ++_sequenceLevels[combo];
    return _resetSequenceTimer();
  };

  /*
  wraps the specified callback inside of another function in order
  to reset all sequence counters as soon as this sequence is done
  
  @param {Event} e
  @returns void
   */
  _callbackAndReset = function(e) {
    _fireCallback(callback, e, combo);
    if (action !== "keyup") {
      _ignoreNextKeyup = _characterFromEvent(e);
    }
    return setTimeout(_resetSequences, 10);
  };
  i = void 0;
  i = 0;
  results1 = [];
  while (i < keys.length) {
    _bindSingle(keys[i], (i < keys.length - 1 ? _increaseSequence : _callbackAndReset), action, combo, i);
    results1.push(++i);
  }
  return results1;
};


/*
binds a single keyboard combination

@param {string} combination
@param {Function} callback
@param {string=} action
@param {string=} sequenceName - name of sequence if part of sequence
@param {number=} level - what part of the sequence the command is
@returns void
 */

_bindSingle = function(combination, callback, action, sequenceName, level) {
  var key, keys, modifiers, sequence;
  _directMap[combination + ":" + action] = callback;
  combination = combination.replace(/\s+/g, " ");
  sequence = combination.split(" ");
  i = void 0;
  key = void 0;
  keys = void 0;
  modifiers = [];
  if (sequence.length > 1) {
    _bindSequence(combination, sequence, callback, action);
    return;
  }
  keys = (combination === "+" ? ["+"] : combination.split("+"));
  i = 0;
  while (i < keys.length) {
    key = keys[i];
    if (_SPECIAL_ALIASES[key]) {
      key = _SPECIAL_ALIASES[key];
    }
    if (action && action !== "keypress" && _SHIFT_MAP[key]) {
      key = _SHIFT_MAP[key];
      modifiers.push("shift");
    }
    if (_isModifier(key)) {
      modifiers.push(key);
    }
    ++i;
  }
  action = _pickBestAction(key, modifiers, action);
  if (!_callbacks[key]) {
    _callbacks[key] = [];
  }
  _getMatches(key, modifiers, {
    type: action
  }, !sequenceName, combination);
  return _callbacks[key][(sequenceName ? "unshift" : "push")]({
    callback: callback,
    modifiers: modifiers,
    action: action,
    seq: sequenceName,
    level: level,
    combo: combination
  });
};


/*
binds multiple combinations to the same callback

@param {Array} combinations
@param {Function} callback
@param {string|undefined} action
@returns void
 */

_bindMultiple = function(combinations, callback, action) {
  var results1;
  i = 0;
  results1 = [];
  while (i < combinations.length) {
    _bindSingle(combinations[i], callback, action);
    results1.push(++i);
  }
  return results1;
};

_addEvent(document, "keypress", _handleKey);

_addEvent(document, "keydown", _handleKey);

_addEvent(document, "keyup", _handleKey);

Mousetrap = {

  /*
  binds an event to mousetrap
  
  can be a single key, a combination of keys separated with +,
  an array of keys, or a sequence of keys separated by spaces
  
  be sure to list the modifier keys first to make sure that the
  correct key ends up getting bound (the last key in the pattern)
  
  @param {string|Array} keys
  @param {Function} callback
  @param {string=} action - 'keypress', 'keydown', or 'keyup'
  @returns void
   */
  bind: function(keys, callback, action) {
    keys = (keys instanceof Array ? keys : [keys]);
    _bindMultiple(keys, callback, action);
    return this;
  },

  /*
  unbinds an event to mousetrap
  
  the unbinding sets the callback function of the specified key combo
  to an empty function and deletes the corresponding key in the
  _directMap dict.
  
  TODO: actually remove this from the _callbacks dictionary instead
  of binding an empty function
  
  the keycombo+action has to be exactly the same as
  it was defined in the bind method
  
  @param {string|Array} keys
  @param {string} action
  @returns void
   */
  unbind: function(keys, action) {
    return Mousetrap.bind(keys, (function() {}), action);
  },

  /*
  triggers an event that has already been bound
  
  @param {string} keys
  @param {string=} action
  @returns void
   */
  trigger: function(keys, action) {
    if (_directMap[keys + ":" + action]) {
      _directMap[keys + ":" + action]({}, keys);
    }
    return this;
  },

  /*
  resets the library back to its initial state.  this is useful
  if you want to clear out the current keyboard shortcuts and bind
  new ones - for example if you switch to another page
  
  @returns void
   */
  reset: function() {
    _callbacks = {};
    _directMap = {};
    return this;
  },

  /*
  should we stop this event before firing off callbacks
  
  @param {Event} e
  @param {Element} element
  @return {boolean}
   */
  stopCallback: function(e, element) {
    if ((" " + element.className + " ").contains(" mousetrap ")) {
      return false;
    }
    return element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || (element.contentEditable && element.contentEditable === "true");
  }
};

window.Mousetrap = Mousetrap;

morphicVersion = 'version of 2017-06-04 21:50:17';
