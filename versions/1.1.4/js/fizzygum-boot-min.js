var MixedClassKeywords,addLineToLogDiv,addLogDiv,arrayShallowCopy,arrayShallowCopyAndReverse,boot,compileFGCode,compileSource,createImageFromImageData,createWorldAndStartStepping,decamelize,degreesToRadians,detect,emptyLogDiv,extend,fade,fontHeight,generateInclusionOrder,generate_inclusion_order,getDocumentPositionOf,getMinimumFontHeight,getParameterByName,getRandomInt,hashCode,howManySourcesCompiledAndEvalled,howManyTestManifestsLoaded,isFunction,isObject,isString,loadJSFile,loadJSFilesWithCoffeescriptSources,loadSourcesAndPotentiallyCompileThem,morphicVersion,newCanvas,nil,noOperation,nop,radiansToDegrees,removeLogDiv,sizeOf,tick,trackChanges,uniqueKeepOrder,untick,visit,waitNextTurn,world,slice=[].slice,indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++)if(i in this&&this[i]===item)return i;return-1},hasProp={}.hasOwnProperty;world={},window.srcLoadsSteps=[],window.srcLoadCompileDebugWrites=!1,addLogDiv=function(){var loadingLogDiv;return loadingLogDiv=document.createElement("div"),loadingLogDiv.id="loadingLog",loadingLogDiv.style.position="absolute",loadingLogDiv.style.width="960px",loadingLogDiv.style.backgroundColor="rgb(245, 245, 245)",loadingLogDiv.style.top="0px",loadingLogDiv.style.top="0px",document.getElementsByTagName("body")[0].appendChild(loadingLogDiv)},removeLogDiv=function(){var loadingLogDiv;return null!=(loadingLogDiv=document.getElementById("loadingLog"))?loadingLogDiv.parentElement.removeChild(loadingLogDiv):void 0},emptyLogDiv=function(){var loadingLogDiv;return null!=(loadingLogDiv=document.getElementById("loadingLog"))?loadingLogDiv.innerHTML="":void 0},addLineToLogDiv=function(content){var loadingLogDiv;return null!=(loadingLogDiv=document.getElementById("loadingLog"))?loadingLogDiv.innerHTML+=content+"</br>":void 0},MixedClassKeywords=["onceAddedClassProperties","included"],nil=void 0,HTMLCanvasElement.prototype.deepCopy=function(doSerialize,objOriginalsClonedAlready,objectClones,allMorphsInStructure){var cloneOfMe,haveIBeenCopiedAlready,positionInObjClonesArray;return(haveIBeenCopiedAlready=objOriginalsClonedAlready.indexOf(this))>=0?doSerialize?"$"+haveIBeenCopiedAlready:objectClones[haveIBeenCopiedAlready]:(positionInObjClonesArray=objOriginalsClonedAlready.length,objOriginalsClonedAlready.push(this),cloneOfMe=newCanvas(new Point(this.width,this.height)),cloneOfMe.getContext("2d").drawImage(this,0,0),doSerialize&&(cloneOfMe={}),objectClones.push(cloneOfMe),doSerialize?(cloneOfMe.className="Canvas",cloneOfMe.width=this.width,cloneOfMe.height=this.height,cloneOfMe.data=this.toDataURL(),"$"+positionInObjClonesArray):cloneOfMe)},CanvasRenderingContext2D.prototype.rebuildDerivedValue=function(objectIBelongTo,myPropertyName){return objectIBelongTo[myPropertyName]=objectIBelongTo[myPropertyName.replace("Context","")].getContext("2d")},Array.prototype.filter||(Array.prototype.filter=function(callback){var element,j,len,results1;for(this,results1=[],j=0,len=this.length;j<len;j++)callback(element=this[j])&&results1.push(element);return results1}),Array.prototype.deepCopy=function(doSerialize,objOriginalsClonedAlready,objectClones,allMorphsInStructure){var cloneOfMe,haveIBeenCopiedAlready,i,j,positionInObjClonesArray,ref;if((haveIBeenCopiedAlready=objOriginalsClonedAlready.indexOf(this))>=0)return doSerialize?"$"+haveIBeenCopiedAlready:objectClones[haveIBeenCopiedAlready];for(positionInObjClonesArray=objOriginalsClonedAlready.length,objOriginalsClonedAlready.push(this),cloneOfMe=[],objectClones.push(cloneOfMe),i=j=0,ref=this.length;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j)null==this[i]?cloneOfMe[i]=nil:"object"==typeof this[i]?(this[i].deepCopy,cloneOfMe[i]=this[i].deepCopy(doSerialize,objOriginalsClonedAlready,objectClones,allMorphsInStructure)):cloneOfMe[i]=this[i];return doSerialize?"$"+positionInObjClonesArray:cloneOfMe},Array.prototype.chunk=function(chunkSize){var array;return array=this,[].concat.apply([],array.map(function(elem,i){return i%chunkSize?[]:[array.slice(i,i+chunkSize)]}))},Array.prototype.remove=function(){var arg,args,index,j,len,output;for(output=[],j=0,len=(args=1<=arguments.length?slice.call(arguments,0):[]).length;j<len;j++)arg=args[j],-1!==(index=this.indexOf(arg))&&output.push(this.splice(index,1));return 1===args.length&&(output=output[0]),output},Array.prototype.unique=function(){var j,key,output,ref,results1,value;for(output={},key=j=0,ref=this.length;0<=ref?j<ref:j>ref;key=0<=ref?++j:--j)output[this[key]]=this[key];results1=[];for(key in output)value=output[key],results1.push(value);return results1},uniqueKeepOrder=function(value,index,self){return self.indexOf(value)===index},Array.prototype.uniqueKeepOrder=function(){return this.filter(uniqueKeepOrder)},void 0===String.prototype.contains&&(String.prototype.contains=function(it){return-1!==this.indexOf(it)}),void 0===String.prototype.isLetter&&(String.prototype.isLetter=function(){return 1===this.length&&this.match(/[a-z]/i)}),CanvasGradient.prototype.deepCopy=function(doSerialize,objOriginalsClonedAlready,objectClones,allMorphsInStructure){var cloneOfMe,haveIBeenCopiedAlready,positionInObjClonesArray;return(haveIBeenCopiedAlready=objOriginalsClonedAlready.indexOf(this))>=0?doSerialize?"$"+haveIBeenCopiedAlready:objectClones[haveIBeenCopiedAlready]:(positionInObjClonesArray=objOriginalsClonedAlready.length,objOriginalsClonedAlready.push(this),cloneOfMe=nil,objectClones.push(cloneOfMe),doSerialize?"$"+positionInObjClonesArray:cloneOfMe)},tick="✓ ",untick="    ",void 0===String.prototype.isTicked&&(String.prototype.isTicked=function(){return this.startsWith(tick)}),void 0===String.prototype.tick&&(String.prototype.tick=function(){return this.isTicked()?this:this.isUnticked()?this.toggleTick():tick+this}),void 0===String.prototype.untick&&(String.prototype.untick=function(){return this.startsWith(untick)?this:this.isTicked()?this.toggleTick():untick+this}),void 0===String.prototype.isUnticked&&(String.prototype.isUnticked=function(){return!this.isTicked()}),void 0===String.prototype.toggleTick&&(String.prototype.toggleTick=function(){return this.isTicked()?this.replace(tick,untick):this.startsWith(untick)?this.replace(untick,tick):tick+this}),CanvasRenderingContext2D.prototype.clipToRectangle=function(al,at,w,h){return this.beginPath(),this.moveTo(Math.round(al),Math.round(at)),this.lineTo(Math.round(al+w),Math.round(at)),this.lineTo(Math.round(al+w),Math.round(at+h)),this.lineTo(Math.round(al),Math.round(at+h)),this.lineTo(Math.round(al),Math.round(at)),this.closePath(),this.clip()},fade=function(eid,initOp,finalOp,TimeToFade,time){var curTick,elapsedTicks,newOp;if(0===initOp&&(document.getElementById(eid).style.visibility="visible"),curTick=(new Date).getTime(),elapsedTicks=curTick-time,newOp=initOp+(finalOp-initOp)*elapsedTicks/TimeToFade,Math.abs(newOp-initOp)>Math.abs(finalOp-initOp))return document.getElementById(eid).style.opacity=finalOp,void(0===finalOp&&(document.getElementById(eid).style.visibility="hidden"));document.getElementById(eid).style.opacity=newOp,setTimeout("fade( '"+eid+"',"+initOp+","+finalOp+","+TimeToFade+","+time+")",TimeToFade/100)},decamelize=function(str,sep){if("string"!=typeof str)throw new TypeError("Expected a string");return str.replace(/([a-z\d])([A-Z])/g,"$1"+(sep||"_")+"$2").toLowerCase()},getParameterByName=function(name){var regex,results;return name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),null!=(results=regex.exec(location.search))?decodeURIComponent(results[1].replace(/\+/g," ")):nil},Object.prototype.augmentWith=function(obj,fromClass){var key,ref,value;for(key in obj)value=obj[key],indexOf.call(MixedClassKeywords,key)<0&&(this[key]=value);return null!=(ref=obj.onceAddedClassProperties)&&ref.apply(this,[fromClass]),this},Object.prototype.addInstanceProperties=function(fromClass,obj){var key,ref,value;for(key in obj)hasProp.call(obj,key)&&(value=obj[key],indexOf.call(MixedClassKeywords,key)<0&&(this.prototype[key]=value,null!=fromClass&&isFunction(value)&&(this.prototype[key+"_class_injected_in"]=fromClass,console.log("addingClassToMixin "+key+"_class_injected_in"))));return null!=(ref=obj.included)&&ref.apply(this),this},arrayShallowCopy=function(anArray){return anArray.concat()},arrayShallowCopyAndReverse=function(anArray){return anArray.concat().reverse()},hashCode=function(stringToBeHashed){var hash,i,j,ref;if(hash=0,0===stringToBeHashed.length)return hash;for(i=j=0,ref=stringToBeHashed.length;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j)hash=(hash<<5)-hash+stringToBeHashed.charCodeAt(i),hash&=hash;return hash},nop=function(){return function(){return nil}},noOperation=function(){return nil},isFunction=function(functionToCheck){return"function"==typeof functionToCheck},detect=function(list,predicate){var element,j,len;for(j=0,len=list.length;j<len;j++)if(element=list[j],predicate.call(nil,element))return element;return nil},sizeOf=function(object){var key,size;size=0,key=void 0;for(key in object)Object.prototype.hasOwnProperty.call(object,key)&&(size+=1);return size},isString=function(target){return"string"==typeof target||target instanceof String},isObject=function(target){return null!=target&&("object"==typeof target||target instanceof Object)},degreesToRadians=function(degrees){return degrees*Math.PI/180},radiansToDegrees=function(radians){return 180*radians/Math.PI},fontHeight=function(fontSize){var minHeight;return minHeight=Math.max(fontSize,WorldMorph.preferencesAndSettings.minimumFontHeight),Math.ceil(1.2*minHeight)},newCanvas=function(extentPoint){var canvas,ext;return null!=extentPoint&&extentPoint.debugIfFloats(),ext=extentPoint||{x:0,y:0},canvas=document.createElement("canvas"),canvas.width=Math.ceil(ext.x),canvas.height=Math.ceil(ext.y),canvas},getMinimumFontHeight=function(){var canvas,ctx,j,k,maxX,ref1,x,y;for("I",50,(canvas=document.createElement("canvas")).width=50,canvas.height=50,(ctx=canvas.getContext("2d")).font="1px serif",maxX=Math.ceil(ctx.measureText("I").width),ctx.fillStyle="black",ctx.textBaseline="bottom",ctx.fillText("I",0,50),y=j=0,50;j<50;y=++j)for(x=k=0,ref1=maxX;0<=ref1?k<ref1:k>ref1;x=0<=ref1?++k:--k)if(0!==ctx.getImageData(x,y,1,1).data[3])return 50-y+1;return 0},getDocumentPositionOf=function(aDOMelement){var offsetParent,pos;if(null==aDOMelement)return{x:0,y:0};for(pos={x:aDOMelement.offsetLeft,y:aDOMelement.offsetTop},offsetParent=aDOMelement.offsetParent;null!=offsetParent;)pos.x+=offsetParent.offsetLeft,pos.y+=offsetParent.offsetTop,offsetParent!==document.body&&offsetParent!==document.documentElement&&(pos.x-=offsetParent.scrollLeft,pos.y-=offsetParent.scrollTop),offsetParent=offsetParent.offsetParent;return pos},howManyTestManifestsLoaded=0,howManySourcesCompiledAndEvalled=0,loadJSFile=function(fileName,dontLogToDiv){return new Promise(function(resolve,reject){var script;return script=document.createElement("script"),script.src=fileName,script.onload=function(){return addLineToLogDiv("loading "+this.src),console.log("loading "+this.src),resolve(script)},document.head.appendChild(script),script.onerror=function(){return reject(script)}})},loadJSFilesWithCoffeescriptSources=function(){var allSourceLoadsPromises,eachFile,j,len;for(allSourceLoadsPromises=[],j=0,len=sourcesManifests.length;j<len;j++)"Class_coffeSource"!==(eachFile=sourcesManifests[j])&&"Mixin_coffeSource"!==eachFile&&allSourceLoadsPromises.push(loadJSFile("js/sourceCode/"+eachFile+".js"));return Promise.all(allSourceLoadsPromises)},compileFGCode=function(codeSource,bare){var compiled,err,errorMessage;performance.now();try{compiled=CoffeeScript.compile(codeSource,{bare:bare})}catch(error){throw err=error,errorMessage="error in compiling:\n",errorMessage+=codeSource+"\n",errorMessage+="error:\n",errorMessage+=err+"\n",new Error(errorMessage)}return performance.now(),compiled},boot=function(){return window.stillLoadingSources=!0,Promise.all([loadJSFile("js/libs/FileSaver.min.js"),loadJSFile("js/libs/jszip.min.js"),loadJSFile("js/sourceCode/Class_coffeSource.js"),loadJSFile("js/sourceCode/Mixin_coffeSource.js"),loadJSFile("js/sourceCode/sourceCodeManifest.js"),loadJSFile("js/tests/testsManifest.js"),loadJSFile("js/tests/testsAssetsManifest.js"),loadJSFile("js/libs/coffee-script_2.0.3.js"),loadJSFile("js/pre-compiled.js"),loadJSFile("js/libs/Mousetrap.min.js")]).then(function(){return window.preCompiled?createWorldAndStartStepping():addLogDiv()}).then(function(){return eval.call(window,compileFGCode(window.Mixin_coffeSource,!0))}).then(function(){return eval.call(window,compileFGCode(window.Class_coffeSource,!0))}).then(function(){return loadJSFilesWithCoffeescriptSources()}).then(function(){return window.preCompiled?loadSourcesAndPotentiallyCompileThem(!0).then(function(){var startupActions;if(window.stillLoadingSources=!1,"undefined"!=typeof AutomatorRecorderAndPlayer&&null!==AutomatorRecorderAndPlayer&&(AutomatorRecorderAndPlayer.testsManifest=testsManifest,AutomatorRecorderAndPlayer.testsAssetsManifest=testsAssetsManifest),startupActions=getParameterByName("startupActions"),console.log("startupActions: "+startupActions),null!=startupActions)return world.nextStartupAction()}):loadSourcesAndPotentiallyCompileThem(!1).then(function(){if(window.stillLoadingSources=!1,"undefined"!=typeof AutomatorRecorderAndPlayer&&null!==AutomatorRecorderAndPlayer)return AutomatorRecorderAndPlayer.testsManifest=testsManifest,AutomatorRecorderAndPlayer.testsAssetsManifest=testsAssetsManifest}).then(function(){var startupActions;if(createWorldAndStartStepping(),startupActions=getParameterByName("startupActions"),console.log("startupActions: "+startupActions),null!=startupActions)return world.nextStartupAction()})})},visit=function(dependencies,theClass,inclusion_order){var j,key,len,ref;if(null!=dependencies[theClass])for(j=0,len=(ref=dependencies[theClass]).length;j<len&&(key=ref[j],!(indexOf.call(inclusion_order,key)>=0));j++)visit(dependencies,key,inclusion_order);return inclusion_order.push(theClass)},generate_inclusion_order=function(dependencies){var inclusion_order,key;inclusion_order=[];for(key in dependencies)"length"!==key&&dependencies.hasOwnProperty(key)&&visit(dependencies,key,inclusion_order);return console.log("inclusion_order: "+inclusion_order),inclusion_order},waitNextTurn=function(){return function(){var args;return args=1<=arguments.length?slice.call(arguments,0):[],window.preCompiled?new Promise(function(resolve,reject){return window.srcLoadsSteps.push(resolve)}):new Promise(function(resolve,reject){return setTimeout(function(){return resolve.apply(null,args)},1)})}},generateInclusionOrder=function(){var DEPENDS,EXTENDS,REQUIRES,dependencies,eachFile,i,j,len,lines,matches;for(dependencies=[],REQUIRES=/\sREQUIRES\s*(\w+)/,EXTENDS=/\sextends\s*(\w+)/,DEPENDS=/\s\w+:\s*new\s*(\w+)/,/\s*class\s+(\w+)/,/'''/,j=0,len=sourcesManifests.length;j<len;j++)if(eachFile=sourcesManifests[j],"Class"!==(eachFile=eachFile.replace("_coffeSource",""))&&"Mixin"!==eachFile)for(console.log(eachFile+" - "),dependencies[eachFile]=[],lines=window[eachFile+"_coffeSource"].split("\n"),i=0;i<lines.length;)null!=(matches=lines[i].match(EXTENDS))&&(dependencies[eachFile].push(matches[1]),console.log(eachFile+" extends "+matches[1])),null!=(matches=lines[i].match(REQUIRES))&&(dependencies[eachFile].push(matches[1]),console.log(eachFile+" requires "+matches[1])),null!=(matches=lines[i].match(DEPENDS))&&(dependencies[eachFile].push(matches[1]),console.log(eachFile+" has class init in instance variable "+matches[1])),i++;return generate_inclusion_order(dependencies)},loadSourcesAndPotentiallyCompileThem=function(justLoadSources){var compileEachFileFunction,createCompileSourceFunction,eachFile,inclusion_order,j,len,promiseChain;for(emptyLogDiv(),console.log("--------------------------------"),inclusion_order=generateInclusionOrder(),window.hasProp={}.hasOwnProperty,window.indexOf=[].indexOf,window.slice=[].slice,createCompileSourceFunction=function(fileName,justLoadSources2){return function(){return compileSource(fileName,justLoadSources2)}},promiseChain=new Promise(function(resolve){return setTimeout(function(){return resolve()},1)}),j=0,len=inclusion_order.length;j<len;j++)"Class"!==(eachFile=inclusion_order[j])&&"Mixin"!==eachFile&&"globalFunctions"!==eachFile&&(compileEachFileFunction=createCompileSourceFunction(eachFile,justLoadSources),promiseChain=(promiseChain=promiseChain.then(compileEachFileFunction)).then(waitNextTurn()));return promiseChain.then(function(){var zip;return window.location.href.contains("generatePreCompiled")&&((zip=new JSZip).file("pre-compiled.js","window.preCompiled = true;\n\n"+window.JSSourcesContainer.content),zip.generateAsync({type:"blob"}).then(function(content){saveAs(content,"pre-compiled.zip")})),removeLogDiv()}),promiseChain},compileSource=function(fileName,justLoadSources){var fileContents,t0,t1;return null==window.CS1CompiledClasses&&(window.CS1CompiledClasses=[]),null==window.JSSourcesContainer&&(window.JSSourcesContainer={content:""}),fileContents=window[fileName+"_coffeSource"],t0=performance.now(),console.log("checking whether "+fileName+" is already in the system "),/^class[ \t]*([a-zA-Z_$][0-9a-zA-Z_$]*)/m.test(fileContents)?justLoadSources?new Class(fileContents,!1,!1):new Class(fileContents,!0,!0):/^  onceAddedClassProperties:/m.test(fileContents)&&(justLoadSources?new Mixin(fileContents,!1,!1):new Mixin(fileContents,!0,!0)),console.log("compiling and evalling "+fileName+" from souce code"),emptyLogDiv(),addLineToLogDiv("compiling and evalling "+fileName),t1=performance.now(),console.log("loadSourcesAndPotentiallyCompileThem call time: "+(t1-t0)+" milliseconds.")},trackChanges=[!0],window.healingRectanglesPhase=!1,window.morphsThatMaybeChangedGeometryOrPosition=[],window.morphsThatMaybeChangedFullGeometryOrPosition=[],window.morphsThatMaybeChangedLayout=[],createWorldAndStartStepping=function(){var animloop;return world=window.location.href.contains("worldWithSystemTestHarness")?new WorldMorph(worldCanvas,!1):new WorldMorph(worldCanvas,!0),world.isDevMode=!0,window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)},(animloop=function(){requestAnimFrame(animloop),world.doOneCycle()})(),window.location.href.contains("worldWithSystemTestHarness")&&"undefined"!=typeof SystemTestsControlPanelUpdater&&null!==SystemTestsControlPanelUpdater&&new SystemTestsControlPanelUpdater,window.menusHelper=new MenusHelper,world.boot()},createImageFromImageData=function(theImageData){return new Promise(function(resolve,reject){var img;return img=new Image,img.onload=function(){return resolve(img)},img.onerror=function(){return reject(img)},img.src=theImageData})},extend=function(child,parent){var ctor,key;ctor=function(){this.constructor=child};for(key in parent)hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},getRandomInt=function(min,max){return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min)+min)},Number.prototype.timesWithVariable=function(scope,func){var i,results1,v;for(v=this.valueOf(),i=0,results1=[];i<v;)func.call(scope,i),results1.push(i++);return results1},Number.prototype.times=function(scope,func){var i,results1,v;for(v=this.valueOf(),i=0,results1=[];i<v;)func.call(scope,i),results1.push(i++);return results1},morphicVersion="version of 2018-03-23 18:39:18";