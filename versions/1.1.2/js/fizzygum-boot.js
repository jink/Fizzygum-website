// Generated by CoffeeScript 1.12.7
var MixedClassKeywords, addLineToLogDiv, addLogDiv, arrayShallowCopy, arrayShallowCopyAndReverse, boot, compileFGCode, compileSource, createImageFromImageData, createWorldAndStartStepping, decamelize, degreesToRadians, detect, emptyLogDiv, extend, fade, fontHeight, generateInclusionOrder, generate_inclusion_order, getDocumentPositionOf, getMinimumFontHeight, getParameterByName, getRandomInt, hashCode, howManySourcesCompiledAndEvalled, howManyTestManifestsLoaded, isFunction, isObject, isString, loadJSFile, loadJSFilesWithCoffeescriptSources, loadSourcesAndPotentiallyCompileThem, morphicVersion, newCanvas, nil, noOperation, nop, radiansToDegrees, removeLogDiv, sizeOf, tick, trackChanges, uniqueKeepOrder, untick, visit, waitNextTurn, world,
  slice = [].slice,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  hasProp = {}.hasOwnProperty;

world = {};

window.srcLoadsSteps = [];

window.srcLoadCompileDebugWrites = false;

addLogDiv = function() {
  var loadingLogDiv;
  loadingLogDiv = document.createElement('div');
  loadingLogDiv.id = 'loadingLog';
  loadingLogDiv.style.position = 'absolute';
  loadingLogDiv.style.width = "960px";
  loadingLogDiv.style.backgroundColor = "rgb(245, 245, 245)";
  loadingLogDiv.style.top = "0px";
  loadingLogDiv.style.top = "0px";
  return document.getElementsByTagName('body')[0].appendChild(loadingLogDiv);
};

removeLogDiv = function() {
  var loadingLogDiv;
  loadingLogDiv = document.getElementById('loadingLog');
  return loadingLogDiv != null ? loadingLogDiv.parentElement.removeChild(loadingLogDiv) : void 0;
};

emptyLogDiv = function() {
  var loadingLogDiv;
  loadingLogDiv = document.getElementById('loadingLog');
  return loadingLogDiv != null ? loadingLogDiv.innerHTML = "" : void 0;
};

addLineToLogDiv = function(content) {
  var loadingLogDiv;
  loadingLogDiv = document.getElementById('loadingLog');
  return loadingLogDiv != null ? loadingLogDiv.innerHTML += content + "</br>" : void 0;
};

MixedClassKeywords = ['onceAddedClassProperties', 'included'];

nil = void 0;

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
  return objectIBelongTo[myPropertyName] = objectIBelongTo[myPropertyName.replace("Context", "")].getContext("2d");
};

if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    var element, j, len, ref, results1;
    ref = this;
    results1 = [];
    for (j = 0, len = ref.length; j < len; j++) {
      element = ref[j];
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
      cloneOfMe[i] = nil;
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

uniqueKeepOrder = function(value, index, self) {
  return self.indexOf(value) === index;
};

Array.prototype.uniqueKeepOrder = function() {
  return this.filter(uniqueKeepOrder);
};

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

CanvasGradient.prototype.deepCopy = function(doSerialize, objOriginalsClonedAlready, objectClones, allMorphsInStructure) {
  var cloneOfMe, haveIBeenCopiedAlready, positionInObjClonesArray;
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
  cloneOfMe = nil;
  objectClones.push(cloneOfMe);
  if (doSerialize) {
    return "$" + positionInObjClonesArray;
  }
  return cloneOfMe;
};

tick = "✓ ";

untick = "    ";

if (typeof String.prototype.isTicked === 'undefined') {
  String.prototype.isTicked = function() {
    return this.startsWith(tick);
  };
}

if (typeof String.prototype.tick === 'undefined') {
  String.prototype.tick = function() {
    if (this.isTicked()) {
      return this;
    } else if (this.isUnticked()) {
      return this.toggleTick();
    } else {
      return tick + this;
    }
  };
}

if (typeof String.prototype.untick === 'undefined') {
  String.prototype.untick = function() {
    if (this.startsWith(untick)) {
      return this;
    } else if (this.isTicked()) {
      return this.toggleTick();
    } else {
      return untick + this;
    }
  };
}

if (typeof String.prototype.isUnticked === 'undefined') {
  String.prototype.isUnticked = function() {
    return !this.isTicked();
  };
}

if (typeof String.prototype.toggleTick === 'undefined') {
  String.prototype.toggleTick = function() {
    if (this.isTicked()) {
      return this.replace(tick, untick);
    } else if (this.startsWith(untick)) {
      return this.replace(untick, tick);
    } else {
      return tick + this;
    }
  };
}

CanvasRenderingContext2D.prototype.clipToRectangle = function(al, at, w, h) {
  this.beginPath();
  this.moveTo(Math.round(al), Math.round(at));
  this.lineTo(Math.round(al + w), Math.round(at));
  this.lineTo(Math.round(al + w), Math.round(at + h));
  this.lineTo(Math.round(al), Math.round(at + h));
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
    return nil;
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
    if (!hasProp.call(obj, key)) continue;
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
    return nil;
  };
};

noOperation = function() {
  return nil;
};

isFunction = function(functionToCheck) {
  return typeof functionToCheck === "function";
};

detect = function(list, predicate) {
  var element, j, len;
  for (j = 0, len = list.length; j < len; j++) {
    element = list[j];
    if (predicate.call(nil, element)) {
      return element;
    }
  }
  return nil;
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

getDocumentPositionOf = function(aDOMelement) {
  var offsetParent, pos;
  if (aDOMelement == null) {
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

howManyTestManifestsLoaded = 0;

howManySourcesCompiledAndEvalled = 0;

loadJSFile = function(fileName, dontLogToDiv) {
  return new Promise(function(resolve, reject) {
    var script;
    script = document.createElement("script");
    script.src = fileName;
    script.onload = function() {
      addLineToLogDiv("loading " + this.src);
      console.log("loading " + this.src);
      return resolve(script);
    };
    document.head.appendChild(script);
    return script.onerror = function() {
      return reject(script);
    };
  });
};

loadJSFilesWithCoffeescriptSources = function() {
  var allSourceLoadsPromises, eachFile, j, len;
  allSourceLoadsPromises = [];
  for (j = 0, len = sourcesManifests.length; j < len; j++) {
    eachFile = sourcesManifests[j];
    if (eachFile === "Class_coffeSource") {
      continue;
    }
    if (eachFile === "Mixin_coffeSource") {
      continue;
    }
    allSourceLoadsPromises.push(loadJSFile("js/sourceCode/" + eachFile + ".js"));
  }
  return Promise.all(allSourceLoadsPromises);
};

compileFGCode = function(codeSource, bare) {
  debugger;
  var compiled, err, errorMessage, t0, t1;
  t0 = performance.now();
  try {
    compiled = CoffeeScript.compile(codeSource, {
      "bare": bare
    });
  } catch (error) {
    err = error;
    debugger;
    errorMessage = "error in compiling:\n";
    errorMessage += codeSource + "\n";
    errorMessage += "error:\n";
    errorMessage += err + "\n";
    throw new Error(errorMessage);
  }
  t1 = performance.now();
  return compiled;
};

boot = function() {
  window.stillLoadingSources = true;
  return (Promise.all([loadJSFile("js/libs/FileSaver.min.js"), loadJSFile("js/libs/jszip.min.js"), loadJSFile("js/sourceCode/Class_coffeSource.js"), loadJSFile("js/sourceCode/Mixin_coffeSource.js"), loadJSFile("js/sourceCode/sourceCodeManifest.js"), loadJSFile("js/tests/testsManifest.js"), loadJSFile("js/tests/testsAssetsManifest.js"), loadJSFile("js/libs/coffee-script_2.0.3.js"), loadJSFile("js/pre-compiled.js"), loadJSFile("js/libs/Mousetrap.min.js")])).then(function() {
    if (window.preCompiled) {
      return createWorldAndStartStepping();
    } else {
      return addLogDiv();
    }
  }).then(function() {
    return eval.call(window, compileFGCode(window["Mixin_coffeSource"], true));
  }).then(function() {
    return eval.call(window, compileFGCode(window["Class_coffeSource"], true));
  }).then(function() {
    return loadJSFilesWithCoffeescriptSources();
  }).then(function() {
    if (window.preCompiled) {
      return (loadSourcesAndPotentiallyCompileThem(true)).then(function() {
        var startupActions;
        window.stillLoadingSources = false;
        if (typeof AutomatorRecorderAndPlayer !== "undefined" && AutomatorRecorderAndPlayer !== null) {
          AutomatorRecorderAndPlayer.testsManifest = testsManifest;
          AutomatorRecorderAndPlayer.testsAssetsManifest = testsAssetsManifest;
        }
        startupActions = getParameterByName("startupActions");
        console.log("startupActions: " + startupActions);
        if (startupActions != null) {
          return world.nextStartupAction();
        }
      });
    } else {
      return (loadSourcesAndPotentiallyCompileThem(false)).then(function() {
        window.stillLoadingSources = false;
        if (typeof AutomatorRecorderAndPlayer !== "undefined" && AutomatorRecorderAndPlayer !== null) {
          AutomatorRecorderAndPlayer.testsManifest = testsManifest;
          return AutomatorRecorderAndPlayer.testsAssetsManifest = testsAssetsManifest;
        }
      }).then(function() {
        var startupActions;
        createWorldAndStartStepping();
        startupActions = getParameterByName("startupActions");
        console.log("startupActions: " + startupActions);
        if (startupActions != null) {
          return world.nextStartupAction();
        }
      });
    }
  });
};

visit = function(dependencies, theClass, inclusion_order) {
  var j, key, len, ref;
  if (dependencies[theClass] != null) {
    ref = dependencies[theClass];
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      if (indexOf.call(inclusion_order, key) >= 0) {
        break;
      }
      visit(dependencies, key, inclusion_order);
    }
  }
  return inclusion_order.push(theClass);
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

waitNextTurn = function() {
  return function() {
    var args, prms;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (window.preCompiled) {
      prms = new Promise(function(resolve, reject) {
        return window.srcLoadsSteps.push(resolve);
      });
    } else {
      prms = new Promise(function(resolve, reject) {
        return setTimeout(function() {
          return resolve.apply(null, args);
        }, 1);
      });
    }
    return prms;
  };
};

generateInclusionOrder = function() {
  var DEPENDS, EXTENDS, IS_CLASS, REQUIRES, TRIPLE_QUOTES, dependencies, eachFile, i, inclusion_order, j, len, lines, matches;
  dependencies = [];
  REQUIRES = /\sREQUIRES\s*(\w+)/;
  EXTENDS = /\sextends\s*(\w+)/;
  DEPENDS = /\s\w+:\s*new\s*(\w+)/;
  IS_CLASS = /\s*class\s+(\w+)/;
  TRIPLE_QUOTES = /'''/;
  for (j = 0, len = sourcesManifests.length; j < len; j++) {
    eachFile = sourcesManifests[j];
    eachFile = eachFile.replace("_coffeSource", "");
    if (eachFile === "Class") {
      continue;
    }
    if (eachFile === "Mixin") {
      continue;
    }
    console.log(eachFile + " - ");
    dependencies[eachFile] = [];
    lines = window[eachFile + "_coffeSource"].split('\n');
    i = 0;
    while (i < lines.length) {
      matches = lines[i].match(EXTENDS);
      if (matches != null) {
        dependencies[eachFile].push(matches[1]);
        console.log(eachFile + " extends " + matches[1]);
      }
      matches = lines[i].match(REQUIRES);
      if (matches != null) {
        dependencies[eachFile].push(matches[1]);
        console.log(eachFile + " requires " + matches[1]);
      }
      matches = lines[i].match(DEPENDS);
      if (matches != null) {
        dependencies[eachFile].push(matches[1]);
        console.log(eachFile + " has class init in instance variable " + matches[1]);
      }
      i++;
    }
  }
  return inclusion_order = generate_inclusion_order(dependencies);
};

loadSourcesAndPotentiallyCompileThem = function(justLoadSources) {
  var compileEachFileFunction, createCompileSourceFunction, eachFile, inclusion_order, j, len, promiseChain;
  emptyLogDiv();
  console.log("--------------------------------");
  inclusion_order = generateInclusionOrder();
  window.hasProp = {}.hasOwnProperty;
  window.indexOf = [].indexOf;
  window.slice = [].slice;
  createCompileSourceFunction = function(fileName, justLoadSources2) {
    return function() {
      return compileSource(fileName, justLoadSources2);
    };
  };
  promiseChain = new Promise(function(resolve) {
    return setTimeout(function() {
      return resolve();
    }, 1);
  });
  for (j = 0, len = inclusion_order.length; j < len; j++) {
    eachFile = inclusion_order[j];
    if (eachFile === "Class" || eachFile === "Mixin" || eachFile === "globalFunctions") {
      continue;
    }
    compileEachFileFunction = createCompileSourceFunction(eachFile, justLoadSources);
    promiseChain = promiseChain.then(compileEachFileFunction);
    promiseChain = promiseChain.then(waitNextTurn());
  }
  promiseChain.then(function() {
    var zip;
    if (window.location.href.contains("generatePreCompiled")) {
      zip = new JSZip;
      zip.file('pre-compiled.js', "window.preCompiled = true;\n\n" + window.JSSourcesContainer.content);
      zip.generateAsync({
        type: 'blob'
      }).then(function(content) {
        saveAs(content, 'pre-compiled.zip');
      });
    }
    return removeLogDiv();
  });
  return promiseChain;
};

compileSource = function(fileName, justLoadSources) {
  var fileContents, morphClass, t0, t1;
  if (window.CS1CompiledClasses == null) {
    window.CS1CompiledClasses = [];
  }
  if (window.JSSourcesContainer == null) {
    window.JSSourcesContainer = {
      content: ""
    };
  }
  fileContents = window[fileName + "_coffeSource"];
  t0 = performance.now();
  console.log("checking whether " + fileName + " is already in the system ");
  if (/^class[ \t]*([a-zA-Z_$][0-9a-zA-Z_$]*)/m.test(fileContents)) {
    if (justLoadSources) {
      morphClass = new Class(fileContents, false, false);
    } else {
      morphClass = new Class(fileContents, true, true);
    }
  } else if (/^  onceAddedClassProperties:/m.test(fileContents)) {
    if (justLoadSources) {
      new Mixin(fileContents, false, false);
    } else {
      new Mixin(fileContents, true, true);
    }
  }
  console.log("compiling and evalling " + fileName + " from souce code");
  emptyLogDiv();
  addLineToLogDiv("compiling and evalling " + fileName);
  t1 = performance.now();
  return console.log("loadSourcesAndPotentiallyCompileThem call time: " + (t1 - t0) + " milliseconds.");
};

trackChanges = [true];

window.healingRectanglesPhase = false;

window.morphsThatMaybeChangedGeometryOrPosition = [];

window.morphsThatMaybeChangedFullGeometryOrPosition = [];

window.morphsThatMaybeChangedLayout = [];

createWorldAndStartStepping = function() {
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
  if (window.location.href.contains("worldWithSystemTestHarness")) {
    if (typeof SystemTestsControlPanelUpdater !== "undefined" && SystemTestsControlPanelUpdater !== null) {
      new SystemTestsControlPanelUpdater;
    }
  }
  window.menusHelper = new MenusHelper();
  return world.boot();
};

createImageFromImageData = function(theImageData) {
  return new Promise(function(resolve, reject) {
    var img;
    img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = function() {
      return reject(img);
    };
    return img.src = theImageData;
  });
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

getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

Number.prototype.timesWithVariable = function(scope, func) {
  var i, results1, v;
  v = this.valueOf();
  i = 0;
  results1 = [];
  while (i < v) {
    func.call(scope, i);
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
    func.call(scope, i);
    results1.push(i++);
  }
  return results1;
};

morphicVersion = 'version of 2018-03-23 17:52:31';
