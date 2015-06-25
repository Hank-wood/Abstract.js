/**
 * Abstract 2.0
 * Rock Yourself In Mess Code
 * copyright @ Tencent AlloyTeam
 * License under MIT License
 * @author dorsywang
 * @email 314416946@qq.com
 * @blog http://www.dorsywang.com
 * @TeamBlog http://www.alloyteam.com
 *//**
 * SodaRender
 * light Tml render engine
 * copyright @ Tencent AlloyTeam
 * License under MIT License
 * @author dorsywang
 * @email 314416946@qq.com
 * @blog http://www.dorsywang.com
 * @TeamBlog http://www.alloyteam.com
 */(function(){var e=/\{\{([^\}]*)\}\}/g,t=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")},n=function(e,n){if(!e.className){e.className=n;return}e.className.match(t(n))||(e.className+=" "+n)},r=function(e,n){e.className=e.className.replace(t(n),"")},i=function(e,t){var n=t.indexOf(".");if(n>-1){var r=t.substr(0,n);return t=t.substr(n+1),e[r]?i(e[r],t):""}return typeof e[t]!="undefined"?e[t]:""},s=function(e){},o=/[a-zA-Z_\$]+[\w\$]*/g,u=/"([^"]*)"|'([^']*)'/g,a=/\d+|\d*\.\d+/g,f=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,l=/\[([^\[\]]*)\]/g,c=/\.([a-zA-Z_\$]+[\w\$]*)/g,h=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,p=/\|\|/g,d="OR_OPERATOR",v=function(){return"$$"+~~(Math.random()*1e6)},m=function(e,t){e=e.replace(p,d).split("|");for(var n=0;n<e.length;n++)e[n]=(e[n].replace(new RegExp(d,"g"),"||")||"").trim();var r=e[0]||"",s=e.slice(1);r=r.replace(u,function(e,n,r){var i=v();return t[i]=n||r,i});while(l.test(r))l.lastIndex=0,r=r.replace(l,function(e,n){return"."+m(n,t)});r=r.replace(f,function(e){return"getValue(scope,'"+e.trim()+"')"});var o=function(){var e=s.shift();if(!e)return;var e=e.split(":"),t=e.slice(1)||[],n=e[0]||"",i=/^'.*'$|^".*"$/;for(var u=0;u<t.length;u++)f.test(t[u])&&(t[u]="getValue(scope,'"+t[u]+"')");b[n]&&(t.unshift(r),t=t.join(","),r="sodaFilterMap['"+n+"']("+t+")"),o()};o();var a=(new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+r+"}"))(i,b);return a(t)},g=function(t,n){[].map.call([].slice.call(t.childNodes,[]),function(t){t.nodeType===3&&(t.nodeValue=t.nodeValue.replace(e,function(e,t){return m(t,n)}));if(t.attributes)if(/in/.test(t.getAttribute("soda-repeat")||""))y["soda-repeat"].link(n,t,t.attributes);else{if((t.getAttribute("soda-if")||"").trim()){y["soda-if"].link(n,t,t.attributes);if(t.getAttribute("removed")==="removed")return}var r;[].map.call(t.attributes,function(i){if(i.name!=="soda-if")if(/^soda-/.test(i.name)){if(y[i.name]){var s=y[i.name],o=s.link(n,t,t.attributes);o&&o.command==="childDone"&&(r=1)}}else i.value=i.value.replace(e,function(e,t){return m(t,n)})}),r||g(t,n)}})},y={},b={},w=function(e,t){y["soda-"+e]=t()},E=function(e,t){b[e]=t};E("date",function(e,t){return t}),w("repeat",function(){return{compile:function(e,t,n){},link:function(t,n,r){var s=n.getAttribute("soda-repeat"),o,u,a=/\s+track\s+by\s+([^\s]+)$/,f;s=s.replace(a,function(e,t){return t&&(f=(t||"").trim()),""}),f=f||"$index";var l=/([^\s]+)\s+in\s+([^\s]+)/,c=l.exec(s);if(!c)return;o=(c[1]||"").trim(),u=(c[2]||"").trim();if(!o||!u)return;var h=i(t,u),p=n;for(var d=0;d<h.length;d++){var v=n.cloneNode(),b={};b[f]=d,b[o]=h[d],b.__proto__=t,v.innerHTML=n.innerHTML;if((v.getAttribute("soda-if")||"").trim()){y["soda-if"].link(b,v,v.attributes);if(v.getAttribute("removed")==="removed")continue}[].map.call(v.attributes,function(t){if(v.getAttribute("removed")==="removed")return;if(t.name.trim()!=="soda-repeat"&&t.name.trim()!=="soda-if")if(/^soda-/.test(t.name)){if(y[t.name]){var n=y[t.name];n.link(b,v,v.attributes)}}else t.value=t.value.replace(e,function(e,t){return m(t,b)})}),v.getAttribute("removed")!=="removed"&&(g(v,b),n.parentNode.insertBefore(v,p.nextSibling),p=v)}n.parentNode.removeChild(n)}}}),w("if",function(){return{link:function(e,t,n){var r=t.getAttribute("soda-if"),i=m(r,e);i||(t.setAttribute("removed","removed"),t.parentNode&&t.parentNode.removeChild(t))}}}),w("class",function(){return{link:function(e,t,r){var i=t.getAttribute("soda-class"),s=m(i,e);s&&n(t,s)}}}),w("src",function(){return{link:function(t,n,r){var i=n.getAttribute("soda-src"),s=i.replace(e,function(e,n){return m(n,t)});s&&n.setAttribute("src",s)}}}),w("bind-html",function(){return{link:function(e,t,n){var r=t.getAttribute("soda-bind-html"),i=m(r,e);if(i)return t.innerHTML=i,{command:"childDone"}}}});var S=function(e,t){var n=document.createElement("div");n.innerHTML=e,g(n,t);var r=document.createDocumentFragment();r.innerHTML=n.innerHTML;var i;while(i=n.childNodes[0])r.appendChild(i);return r},x=function(e,t){};window.sodaRender=S,window.sodaFilter=E})(),function(){var e=console.info,t=console.log,n=/\S+/g,r=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")},i=function(e,t){return e.className.search(r(t))!==-1},s=[];console.log=function(){s=arguments,t.apply(console,arguments)},console.info=function(){if(f.debug){var t=arguments[1],n,r=Array.prototype.slice.call(arguments,0),i=arguments;s[0]&&s[0]==="Model:"&&(i[0]="\u266b",s[1]&&s[1]===t&&(i[1]=" \u2197")),e.apply(console,i),s=r}else e.apply(console,arguments)};var o=function(e){this._value=e};o.prototype={constructor:o,set:function(e){return this._value=e,this},get:function(){return this.value},set value(e){console.warn("\u8bf7\u4f7f\u7528set\u65b9\u6cd5\u8fdb\u884c\u8bbe\u7f6e\u503c\u7684\u64cd\u4f5c")},get value(){return this._value}};var u=function(e){this.bubble=!0,this.preventDefaulted=0,this.type=e.type||"",this.name=e.name,this.target=e.target};u.prototype={constructor:u,stopPropagation:function(){this.bubble=!1},preventDefault:function(){this.preventDefaulted=1}};var a=function(e,t){var n=new XMLHttpRequest;n.onload=function(){var e=this.response;t&&t(e)},n.open("GET",e,!0),n.send()},f={containerCountInfo:{},_config:{debug:0,multitab_event:"click",ajax:function(e){if(window.$&&l.ajax)l.ajax(e);else{var t=new XMLHttpRequest,n=[];if(e.data)for(var r in e.data)n.push(r+"="+e.data[r]);n=n.join("&"),t.onload=function(){var t=this.response,n=(this.getResponseHeader("Content-type")||"").toLowerCase(),r=this.status;r===200||r===304?(/json/.test(n)&&(t=JSON.parse(t)),e.success(t)):e.error(t)},t.open(e.type||"POST",e.url,!0),t.send(n)}},tmpl:function(e,t,n){var r=sodaRender(e.tmpl||"",t),i=e.el;window.$?i=l(i):typeof i=="string"&&(i=document.querySelector(i)),i[0]&&(i=i[0]),i instanceof HTMLElement?(n&&(i.innerHTML=""),i&&i.appendChild(r)):console.info("Model: option el is not an HTMLElement")},localKeyExclude:[]},config:function(e){for(var t in e)e.hasOwnProperty(t)&&e[t]&&(this._config[t]=e[t])},fuseMap:{},Class:function(e,t){var n=e,r=t;if(typeof e=="string"){n=window[e];if(!n)return console.warn("Model:",e,"not included, Please check your Model files!"),{}}r&&typeof n!="function"&&console.warn("Model:",e,"is not illegal"),t||(r=n,n=null),n&&(n=new n,r.__proto__=n,r.super=n,r.callSuper=function(){var e=["constructor"].concat([].slice.call(arguments,0));this.callSuperMethod.apply(this,e)},r.callSuperMethod=function(){var e=[].slice.call(arguments,0,1),t=[].slice.call(arguments,1)||[],n=this.super;if(n){this.super=n.super;var r=(n[e]||function(){}).apply(this,t);return this.super=n,r}});var i=function(){};return r.hasOwnProperty("constructor")?i=r.constructor:i=function(){r.constructor.apply(this,arguments)},i.prototype=r,i},trigger:function(e,t){this.fuseMap[e]&&this.fuseMap[e].rock(e,t)},external:function(e,t){window[e]=t},createEvent:function(e){return new u(e)},createFuse:function(e,t){var n="fuse"+~~(Math.random()*1e6);return f.$("body").on(e,t,function(){f.trigger(n)}),n},addFuse:function(e,t){this.fuseMap[e]=t},createPrivate:function(e){return new o(e)},defer:function(){var e={reject:function(e){},resolve:function(e){}};return e.promise={then:function(e,t){}},e},loadModule:function(e){this.loadModuleMap=e},load:function(e,t){if(f._config.loadModule){f._config.loadModule(e,t);return}if(this.loadModuleMap[e]){var n=[],r=this.loadModuleMap[e],i=function(){if(n[0]){firstContent=n.shift();var e=document.createElement("script");e.innerHTML=firstContent,document.body.appendChild(e),i()}};for(var s=0;s<r.length;s++){var o=r[s];a(o,function(e){return function(t){n[e]=t,i()}}(s))}}}},l=window.$||function(e){if(window.$)return window.$(e);if(typeof e=="object"&&e.show&&e.attr)return e;var t=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];t&&t(r,n)}};return function(){var s;typeof e=="string"?e==="window"?s=[window]:s=document.querySelectorAll(e):"length"in s||(s=[s]);var o={selector:e,html:function(e){for(var t=0;t<s.length;t++)s[t].innerHTML=e},show:function(){for(var e=0;e<s.length;e++){var t=s[e];t.style.display=="none"&&(t.style.display=""),getComputedStyle(t,"").getPropertyValue("display")=="none"&&(t.style.display=defaultDisplay(t.nodeName))}},hide:function(){for(var e=0;e<s.length;e++)s[e].style.display="none"},on:function(e,n,r){typeof r=="undefined"?t(s,function(t){t.addEventListener(e,n)}):t(s,function(t){t.addEventListener(e,function(e){var t=e.target,i=l(n);for(var s=0;s<i.length;s++){var o=i[s];o.contains(t)&&r&&r.call(o,e)}})})},attr:function(e,n){if(typeof n=="undefined")return s&&s[0]&&s[0].getAttribute(e);t(s,function(t){t.setAttribute(e,n)})},addClass:function(e){return t(s,function(t){e.match(n).forEach(function(e){i(t,e)||(t.className+=" "+e)})}),this},removeClass:function(e){return t(s,function(t){e.match(n).forEach(function(e){t.className=t.className.replace(r(e)," ")})}),this}};for(var u in o)o.hasOwnProperty(u)&&(s[u]=o[u]);return s}()};l.os=l.os||function(){var e=window.navigator.userAgent.toLowerCase(),t=0,n=0;return/android/.test(e)?t=1:/ios|iphone|ipad|ipod|itouch/.test(e)&&(n=1),{ios:n,android:t}}(),f.$=l,f.external("Model",f)}(),function(){var e=Model.$,t=Model.containerCountInfo,n=["tmpl","el","data","fuse","myData","onreset","comment","helper","name","active","unactive"],r=Model.Class({type:"BaseModel",get acceptOpt(){return n},addAcceptOpt:function(e){n=n.concat(e)},set fuse(e){Model.addFuse(e,this),this._fuse=e},get fuse(){return this._fuse},setData:function(e){this.data=e},addFuse:function(e){this.fuse=e},constructor:function(n){this._fuse="";var r=function(){return"abstract_"+~~(1e5*Math.random())};if(n)for(var i=0;i<this.acceptOpt.length;i++){var s=this.acceptOpt[i];n[s]&&(this[s]=n[s])}if(n&&n.el){var o=e(n.el).attr("id");o||(o=r(),e(n.el).attr("id",o)),t[o]?t[o]++:t[o]=1}this.eventHandler={},this._={},this.hasOwnProperty("myData")||(this.myData={}),this.children=[],this.parent=null;var u=this;this.addEventListener("reset",function(e){u.onreset&&u.onreset()})},add:function(e){if(typeof e=="string")if(e.indexOf(".")){var t=e.lastIndexOf("."),n=e.substr(0,t),r=e.substr(t+1),i=new LoadModel({moduleName:n,name:r});this.children.push(e)}else console.warn("add load model error");else e.parent=this,this.children.push(e)},del:function(e){for(var t=0;t<this.children.length;t++)if(this.children[t]===e)break;this.children.splice(t,1)},remove:function(){this.parent&&this.parent.del(this)},replaceChild:function(e,t){for(var n=0;n<this.children.length;n++)if(this.children[n]===e){this.children[n]=t;break}t.parent=this,this.currChild===e&&(this.currChild=t)},active:function(e){},unactive:function(e){},rock:function(e,t){var n=Model.createEvent({type:"beforeactived",target:this,name:e||"anonymouse",data:t});this.dispatchEvent(n);if(n.preventDefaulted)return;var r=Model.defer();this.status="active",this.active(n);var n=Model.createEvent({type:"actived",target:this,name:e||"anonymouse",data:t});this.dispatchEvent(n)},stop:function(e){this.status="unactive",this.unactive&&this.unactive(t);var t=Model.createEvent({type:"unactived",target:this,name:e||"anonymouse"});this.unactive(t),this.dispatchEvent(t)},dispatchEvent:function(e,t){var n=e.type,r=this;this.eventHandler[n]&&this.eventHandler[n].map(function(n){n.call(r,e,t)}),e.bubble&&this.parent&&this.parent.dispatchEvent(e,t)},addEventListener:function(e,t,n){this.eventHandler[e]||(this.eventHandler[e]=[]),this.eventHandler[e].push(t)},info:function(e){if(Model.debug){var t=[],t=["Model:",(this.comment||(typeof this.el=="string"?this.el:this.el&&this.el.selector))+":"];for(var n=0;n<arguments.length;n++)t.push(arguments[n]);console.info.apply(console,t)}},reset:function(){this.melt(),this.onreset&&this.onreset();var e=Model.createEvent({type:"reset",target:this,name:"anonymouse"});this.dispatchEvent(e)},refresh:function(){var e=Model.createEvent({type:"refresh",target:this,name:"anonymouse"});this.dispatchEvent(e)},freeze:function(){this.freezed=1},melt:function(){this.freezed=0},show:function(){this.el&&e(this.el).show()},hide:function(){this.el&&e(this.el).hide()},_resetPrivateFlag:function(){},_registerInnerMethod:function(e,t){for(var n=0;n<e.length;n++){var r=e[n];(!this[r]||this[r]&&!this.hasOwnProperty(r))&&Object.defineProperty(this,r,function(e){return{set:function(n){t[e]=n},get:function(n){return typeof t[e]=="function"?function(){return t[e].apply(t,arguments)}:t[e]}}}(r))}},extend:function(n){var r=function(){};r.prototype=this;var i=new r;this._resetPrivateFlag.call(i);for(var s in n)n[s]&&(i[s]=n[s]);i.parent=null,i.children=[];for(var s=0;s<this.children.length;s++)i.add(this.children[s].extend());var o=function(){return"abstract_"+~~(1e5*Math.random())};if(i.el){var u=e(i.el).attr("id");u||(u=o(),e(i.el).attr("id",u)),t[u]?t[u]++:t[u]=1}return i},getPrivate:function(e){var t=this,n="_"+e;pri=this._[n]},get:function(e){var t=this,n="_"+e;return t._[n]||(t._[n]=Model.createPrivate()),t._[n]},exportTab:function(e,t){var n="recieveModel"+e,r="realizeModel"+e,i=this;window[n]&&typeof window[n]=="function"?window[n](e,this,t):window[r]=function(n){n(e,i,t),delete window[r]}},tell:function(e,t,n){var r=["__",t,"__"].join("");typeof this[t]!="undefined"&&(this[r]=this[t]),Object.defineProperty(this,t,{get:function(){return this[r]},set:function(i){this[r]=i,n?n.call(e,i):e[t]=i}})},watch:function(e,t,n){var r=["__",t,"__"].join("");typeof e[t]!="undefined"&&(e[r]=e[t]);var i=this;Object.defineProperty(e,t,{get:function(){return this[r]},set:function(e){this[r]=e,n?n.call(i,e):i[t]=e}})},die:function(){this.dead=1}});Model.external("BaseModel",r)}(),function(){var e=Model.Class("BaseModel",{type:"RelationModel",constructor:function(e){this.callSuper(e)},setActive:function(e){this.onactive=e},setUnactive:function(e){this.onactive=e},get models(){return this.children}});Model.external("RelationModel",e)}(),function(){var e=Model.Class("RelationModel",{type:"PageModel",constructor:function(e){this.callSuper(e)},active:function(e){this.children.map(function(t){t.feeded||t.rock(e)})},show:function(){this.children.map(function(e){e.show()})},hide:function(){this.children.map(function(e){e.hide()})},unactive:function(e){this.children.map(function(t){(t.status==="active"||!t.status)&&t.stop(e)})},refresh:function(){this.children.map(function(e){e.refresh()}),this.callSuperMethod("refresh")},reset:function(){this.children.map(function(e){e.reset()}),this.callSuperMethod("reset")}});Model.external("PageModel",e)}(),function(){var e=Model.Class("RelationModel",{type:"MutexModel",constructor:function(e){this.callSuper(e),this.addEventListener("beforeactived",function(e){var t=e.target;if(!t)return;if(t.parent===this&&this.currChild!==this){for(var n=0;n<this.children.length;n++){var r=this.children[n];r!==t&&r.stop()}this.currChild=t}})},active:function(e){if(this.currChild)this.currChild.rock(e);else{if(this._initChild){if(typeof this._initChild=="number")this.currChild=this.children[this._initChild];else for(var t=0;t<this.children.length;t++)if(this.children[t]===this._initChild){this.currChild=this.children[t];break}}else this.currChild=this.children[0];this.currChild&&this.currChild.rock(e)}},initChild:function(e){this._initChild=e},show:function(){this.currChild.show()},hide:function(){this.currChild.hide()},unactive:function(e){this.children.map(function(t){(t.status==="active"||!t.status)&&t.stop(e)})},refresh:function(){this.currChild&&(this.currChild.refresh(),this.callSuperMethod("refresh"))},reset:function(){this.currChild&&(this.currChild.reset(),this.callSuperMethod("resest"))}});Model.external("MutexModel",e)}(),function(){var e=Model.$,t=Model.containerCountInfo,n=Model.Class("MutexModel",{type:"MultitabModel",get currModel(){return this.mutexModel.currChild},constructor:function(n){this.callSuper(n),this.mutexModel=new MutexModel,this.selectorMap={},this.tabHander=null,this.selectorSwitchInMap={},this.mutexModel.addEventListener("beforeactived",function(n){var r=n.target;if(/RenderModel|ScrollModel/.test(r.type)){var i=e(r.el).attr("id");t[i]>1?(e(r.el).html(""),r.reset()):r.isFirstDataRequestRender>0&&(r.show(),n.preventDefault());var s=n.target}});var r=this;this.addEventListener("beforeswitched",function(e,t){var n=r.mutexModel.currChild,i=e.name,s=t&&t.selector||"";s&&r.beforeTabHandler&&r.beforeTabHandler.call(r,s,i)}),this.addEventListener("switched",function(t){var n=r.mutexModel.currChild,i=t.name,s;for(var o in r.selectorMap)r.selectorMap[o]===n?(s=o,e(o).addClass("active").addClass("selected")):e(o).removeClass("active").removeClass("selected");s&&(r.selectorSwitchInMap[s]&&r.selectorSwitchInMap[s].call(r,s,i),r.tabHander&&r.tabHander.call(r,s,i))})},_resetPrivateFlag:function(){this.get("rocked").set(0)},active:function(e){var t=this.get("rocked");t.value||this.dispatchEvent(Model.createEvent({type:"beforeswitched",target:this,name:"init"})),this.mutexModel.rock();if(this.mutexModel.currChild.type==="LoadModel"){var n=this;this.mutexModel.currChild.addEventListener("completed",function(e,r){t.value||(n.dispatchEvent(Model.createEvent({type:"switched",target:n,name:"init"})),t.set(1))})}else t.value||(this.dispatchEvent(Model.createEvent({type:"switched",target:this,name:"init"})),t.set(1))},add:function(e,t,n){var r="multitab_"+e,i=this;typeof t=="string"?(t=new LoadModel({name:e,moduleName:t}),t.addEventListener("completed",function(t,n,s){n.addFuse(r),n.addEventListener("actived",function(e){this.show()}),n.addEventListener("unactived",function(e){this.hide()}),i.selectorMap[e]=n,s&&(i.selectorSwitchInMap[e]=s)})):(t.addEventListener("actived",function(e){this.show()}),t.addEventListener("unactived",function(e){this.hide()})),t.addFuse(r),this.mutexModel.add(t),this.selectorMap[e]=t,n&&(this.selectorSwitchInMap[e]=n),this.selector,this.bindSwitchEvent(e)},bindSwitchEvent:function(t){var n=this,r="multitab_"+t;e("body").on(Model._config.multitab_event,t,function(){n.dispatchEvent(Model.createEvent({type:"beforeswitched",target:n,name:"switch"}),{selector:t}),Model.trigger(r,"switch"),n.dispatchEvent(Model.createEvent({type:"switched",target:n,name:"switch"}))})},init:function(e){this.selectorMap[e]&&this.mutexModel.initChild(this.selectorMap[e])},ontabswitch:function(e){this.tabHander=e},refresh:function(){this.mutexModel.currChild.refresh()},reset:function(){this.mutexModel.currChild.reset()},beforetabswitch:function(e){this.beforeTabHandler=e}});Model.external("MultitabModel",n)}(),function(){var e={},t=function(t){var n,r;return e[t]||(n=document.createElement(t),document.body.appendChild(n),r=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),r=="none"&&(r="block"),e[t]=r),e[t]},n=Model.$,r=function(e,t){var n={};for(var r in t){var i=Model._config.localKeyExclude||[];if(i.length){if(i.indexOf&&i.indexOf(r))continue}else{var s=0;for(var o=0;o<i.length;o++)r==i[o]&&(s=1);if(s)continue}n[r]=t[r]}var u=e+"_"+JSON.stringify(n);return u},i=function(e){typeof e=="string"&&(e=window.$?n(e):document.querySelectorAll(e))},s=Model.Class("BaseModel",{type:"RenderModel",getData:function(e){var t=this,n,i=t.paramCache[t.cgiCount]||typeof this.param=="object"&&this.param||typeof this.param=="function"&&this.param.call(this)||{},s=i;if(this._args){var o=JSON.stringify(i);for(var u=0;u<this._args.length;u++){var a=u+1;o=o.replace(new RegExp("@param"+a,"g"),this._args[u]||"")}o=o.replace(/@param\d+/g,""),s=JSON.parse(o)}var f=function(o,u){if(u){e(o);return}t.dataCache[t.cgiCount]=o,t.paramCache[t.cgiCount]=i,t.cgiCount++;if(t.cgiCount==1){var a=(t.cacheKey||r)(t.url,s);if(a)try{window.localStorage.setItem(a,JSON.stringify(o))}catch(f){window.localStorage.clear(),window.localStorage.setItem(a,JSON.stringify(o))}}n,t.info("complete request, with res\u2199"),t.info("   ",o),e(o)},l={type:this.method||"POST",url:this.url,data:s,success:function(e){f(e)},error:function(e){t.info("\u3128error request, with res\u2199"),t.info("   ",e),t.paramCache[t.cgiCount]=i,t.cgiCount++,t.error&&t.error.call(t,e,t.cgiCount);var n=Model.createEvent({type:"errored",target:t,name:"anonymouse"});t.dispatchEvent(n)}};if(this.usePreLoad&&this.preLoadData){this.info("with preload Data"),this.usePreLoad=!1;if(this.preLoadData.type!="error"&&this.preLoadData.retcode==0){l.succ(this.preLoadData);return}}if(this.dead)return;if(!t.noCache&&t.cgiCount==0&&!t.isFirstRender){var c=this.dataCache[t.cgiCount];if(!c||c==="@prefetching"){var h=(t.cacheKey||r)(this.url,s);n=null;try{(window.localStorage.getItem(h)||"").trim()&&(n=JSON.parse(window.localStorage.getItem(h)||"null"))}catch(p){}if(n)try{this.info("has localData"),this.info("    start localData rendering"),f(n,1)}catch(p){}t.isFirstRender=0,this.localData=n}}if(this.dataCache[t.cgiCount])this.dataCache[t.cgiCount]==="@prefetching"?this.dataCache[t.cgiCount]=function(e){e?l.error(t.dataCache[t.cgiCount]):l.success(t.dataCache[t.cgiCount])}:f(this.dataCache[t.cgiCount]);else{var d=this.beforeRequest&&this.beforeRequest();if(typeof d=="boolean"&&!d)return;this.info("start to request cgi, with request params\u2199"),this.info("    cgi: "+l.url),this.info("   ",s),Model._config.ajax(l)}},render:function(e,t){if(this.freezed)return;var r=this,i=Model._config.tmpl;e=n(e);var s=function(n){if(r.dead)return;r.cgiCount===1&&(r.onreset&&r.onreset(),e.html("")),r.info("start to process data");var s;r.processData&&(s=r.processData.call(r,n,r.cgiCount)),typeof s!="undefined"&&(typeof s!="boolean"||!!s)&&(n=s);var o={tmpl:r.tmpl,helper:r.helper,el:r.el};i(o,n,t),r.cgiCount>0&&(r.scrollEnable=1),r.eventsBinded||(r.events&&typeof r.events=="function"&&r.events(),r.hasOwnProperty("eventsBinded")?r.eventsBinded=1:r.__proto__.eventsBinded=1),r.feedPool.map(function(e){e.noFeed||(e.setFeedData(n,r.cgiCount),e.rock())}),r.info("start to complete data"),r.complete&&r.complete(n,r.cgiCount),r.isFirstDataRequestRender++,r.info("complete render");var u=Model.createEvent({type:"completed",target:r,name:"anonymouse"});r.dispatchEvent(u)};this.url?this.getData(s):(this.cgiCount++,this.data||(this.data={}),this.info("   data given\u2199"),this.info("   ",this.data),s(this.data))},active:function(e){this.freezed||this.render(this.el)},_resetPrivateFlag:function(){this.rendered=0,this.feedPool=[],this.cgiCount=0,this.dataCache=[],this.isFirstRender=0,this.isFirstDataRequestRender=0,this.melt()},constructor:function(e){this.addAcceptOpt(["complete","processData","error","url","param","noCache","events","noRefresh","method","beforeRequest","cacheKey"]),this.callSuper(e),this.cacheKey&&typeof this.cacheKey!="function"&&(this.cacheKey=function(){return e.cacheKey||""}),this._resetPrivateFlag(),this.eventsBinded=0,this.paramCache=[];var t=this;if(this.prefetch)try{var n=typeof this.param=="object"&&this.param||this.param.call(this);this.paramCache[0]=n;var t=this,r={url:this.url,param:n,type:this.method||"POST",ssoCmd:this.ssoCmd,success:function(e){if(typeof t.dataCache[0]=="function"){var n=t.dataCache[0];t.dataCache[0]=e,n()}else t.dataCache[0]=e},error:function(e){if(typeof t.dataCache[0]=="function"){var n=t.dataCache[0];t.dataCache[0]=e,n("error")}else t.dataCache[0]=null}},i=this.beforeRequest&&this.beforeRequest();if(typeof i=="boolean"&&!i)return;Model._config.ajax(r),this.dataCache[0]="@prefetching"}catch(s){this._prefetchError=1}},reset:function(){this.cgiCount=0,this.callSuperMethod("reset")},refresh:function(){this.noRefresh||(this.dataCache=[],this.reset(),this.rock()),this.callSuperMethod("refresh")},extend:function(e){var t=this.callSuperMethod("extend",e),n=e&&e.events;return n&&(t.events=function(){n&&n.call(this)},t.eventsBinded=0),e&&e.param&&(t.paramCache=[]),t},feed:function(e){e.feeded=1,this.feedPool.push(e)},unfeed:function(){},setFeedData:function(e,t){this.data=e,this.cgiCount=t},resetData:function(){this.dataCache=[],this.cgiCount=0,this.onreset&&this.onreset()},update:function(e){this.setData(e),this.rock()},setData:function(e,t){this.dataCache[e]=t},getCache:function(e){return e===0?this.localData:this.dataCache[e-1]}});Model.external("RenderModel",s)}(),function(){var e=0,t={},n=Model.$,r={bindEvent:function(e,t,r){var i=e;n.os.ios&&n(i)[0]==document.body&&(i=window),n(i).on("scroll",function(){var e=0,t;return function(n){function i(){var t=this,i=n.target,s,o,u,a=300;if(i==document)s=window.scrollY,u=window.innerHeight,o=document.body.scrollHeight;else{var f=window.getComputedStyle(i);s=i.scrollTop,u=parseInt(f.height)+parseInt(f.paddingTop)+parseInt(f.paddingBottom)+parseInt(f.marginTop)+parseInt(f.marginBottom),o=i.scrollHeight}s+u+a>=o&&r&&r(n),e=s}window.clearTimeout(t),t=window.setTimeout(i,200)}}())},removeModel:function(e){var r=e._scrollEl;if(r){var i=r;typeof r=="string"&&(i=n(r));var s;i==window||i[0]==window||i.selector==="window"?s="__window__":s=i.attr("id");if(i&&i.length&&s){for(var o=0;o<t[s].length;o++)if(t[s]===e)break;t[s].splice(o,1)}}},addModel:function(e){var r=e.scrollEl,i=r;typeof r=="string"&&(i=n(r));var s;i==window||i[0]==window||i.selector==="window"?s="__window__":(s=i.attr("id"),s||(s="d_"+~~(1e5*Math.random()),i.attr("id",s))),t[s]?t[s].push(e):(t[s]=[e],this.bindEvent(i,s,function(){t[s].map(function(e){if(e.type=="ScrollModel"){if(!e.freezed&&e.scrollEnable){var t=Model.createEvent({type:"scrollToBottom",target:e,name:"anonymouse"});e.dispatchEvent(t)}}else!e.freezed&&e.currModel.type=="scrollModel"&&!e.currModel.freezed&&e.currModel.scrollEnable&&e.currModel.rock()})}))}},i=Model.Class("BaseModel",{type:"ScrollModel",_resetPrivateFlag:function(){this.get("rendered").set(0)},extend:function(e){var t=this.callSuperMethod("extend",{scrollEl:this.scrollEl});return t.renderModel=this.renderModel.extend(e),t},constructor:function(e){this.callSuper(),this.scrollEl=e.scrollEl||window;var t=this.get("scrollLock");this.renderModel=new RenderModel(e),this.renderModel.active=function(){this.render(this.el)},this.renderModel.addEventListener("completed",function(e){t.set(0)}),this.renderModel.addEventListener("errored",function(e){t.set(0)}),this.addEventListener("scrollToBottom",function(e){t.value||(t.set(1),this.renderModel.rock(),e.stopPropagation())}),this.addEventListener("beforeactived",function(e){this.scrollEnable=1}),this._registerInnerMethod(["hide","show","feed","isFirstDataRequestRender","el","renderContainer","beforeRequest","freeze","melt","onreset","reset","url","data","cgiCount"],this.renderModel)},refresh:function(){this.reset(),this.renderModel.dataCache=[],this.renderModel.reset(),this.rock()},active:function(e){var t=this.get("rendered");t.value||(r.addModel(this),t.set(1)),this.renderModel.rock()},unactive:function(e){this.scrollEnable=0}});Model.external("ScrollModel",i)}(),function(){var e=Model.$,t=Model.Class("BaseModel",{type:"LoadModel",constructor:function(e){this.callSuper(),this.moduleName=e.moduleName,this.name=e.name},load:function(e){var t=this.name,n="recieveModel"+t,r="realizeModel"+t,i=this,s=function(t,r,s){t&&r&&(i.parent&&i.parent.replaceChild(i,r),i.dispatchEvent(Model.createEvent({type:"completed",target:i,name:"anonymouse"}),r,s),window[n]=null,delete window[n],e&&e(r))};window[r]?window[r](s):(window[n]=s,Model.load(this.moduleName,function(e){}))},active:function(e){var t=this.parent,n=this;this.load(function(e){e.rock();if(t)for(var r=0;r<t.children.length;r++){var i=t.children[r];i!==n&&i.type==="LoadModel"&&i.load()}})},unactive:function(e){}});Model.external("LoadModel",t)}(),function(){var e=Model.Class("BaseModel",{type:"LinkModel",constructor:function(e){this.addAcceptOpt(["popBack","checkBack","newWindow"]),this.callSuper(e)},_popBack:function(){window.history.back()},_openUrl:function(e,t){t?window.open(e,"_blank"):window.location=e},active:function(e){var t="",n=this.param;typeof this.param=="function"&&(n=this.param.call(this)),this.popBack&&this._popBack();if(n){var r=[];for(var i in n)r.push(i+"="+(n[i]||""));t=r.join("&")}var s;t?s=this.url+"?"+t:s=this.url;if(s){if(this.checkBack){var o=document.referrer;if(o.indexOf(this.url)>-1){history.back();return}}this.newWindow?this._openUrl(s,!0):this._openUrl(s)}}});Model.external("LinkModel",e)}(),function(){var e=Model.Class("RenderModel",{type:"CgiModel",constructor:function(e){this.callSuper(e)},noCache:1,getData:RenderModel.prototype.getData,active:function(){var e=this;this._args=arguments,this.getData(function(t){e.processData&&e.processData.call(e,t,e.cgiCount),e.complete&&e.complete.call(e,t,e.cgiCount)})}});Model.external("CgiModel",e)}()