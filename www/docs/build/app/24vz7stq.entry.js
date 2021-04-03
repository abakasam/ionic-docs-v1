const t=window.App.h;import{a as e,d as o,c as n,e as i,f as s,g as r,h as a,i as c,j as h,k as l,l as u,m as d,n as p,o as f,p as g,q as y,r as m,s as v,t as w,u as b,v as T}from"./chunk-34ceada4.js";class _{render(){return this.showOverlay?[t("div",{class:"content-overlay",onClick:this.onOverlayClick}),t("slot",null)]:t("slot",null)}static get is(){return"docs-content"}static get properties(){return{onOverlayClick:{type:"Any",attr:"on-overlay-click"},showOverlay:{type:Boolean,attr:"show-overlay"}}}static get style(){return"docs-content{display:grid;position:relative;grid-area:content;grid-template-columns:1fr minmax(var(--content-min,320px),var(--content-max,720px)) 1.25fr auto;grid-template-areas:\". document . preview\";overflow-y:scroll;overscroll-behavior-y:contain;-webkit-overflow-scrolling:touch}.content-overlay{background-color:#002376;bottom:0;left:0;opacity:.1;position:fixed;right:0;top:var(--header-height);z-index:1}\@media (min-width:700px){.content-overlay{display:none}}"}}class O{render(){return t("slot",null)}static get is(){return"docs-layout"}static get style(){return"docs-layout{display:grid;grid-template-columns:auto 1fr;grid-template-rows:var(--header-height) calc(100% - var(--header-height));grid-template-areas:\"menu header\" \"menu content\";height:100%;-webkit-transition:-webkit-transform .35s cubic-bezier(.19,1,.22,1);transition:-webkit-transform .35s cubic-bezier(.19,1,.22,1);transition:transform .35s cubic-bezier(.19,1,.22,1);transition:transform .35s cubic-bezier(.19,1,.22,1),-webkit-transform .35s cubic-bezier(.19,1,.22,1);width:100%}\@media (max-width:700px){docs-layout.is-menu-open{-webkit-transform:translateX(70vw);transform:translateX(70vw)}}docs-layout.section-pro{--header-background:var(--darker);--header-color-secondary:var(--light-gray)}"}}class I{constructor(){this.ionicMode="ios",this.iframeLoaded=!1,this.URLParams="&ionic:statusbarPadding=true",this.messageQueue=[],this.onIframeLoad=(()=>{this.messageQueue.forEach(this.postMessage.bind(this)),this.messageQueue=[],this.iframeLoaded=!0})}handleMessage(t){this.iframeLoaded?this.postMessage(t):this.messageQueue.push(t)}postMessage({detail:t}){try{this.iframe.contentWindow.postMessage(t,"*")}catch(t){}}renderModeToggle(){return t("div",{class:"docs-preview-mode-toggle"},["ios","md"].map(e=>t("button",{class:e===this.ionicMode?"is-selected":null,title:`Toggle ${"ios"===e?"iOS":"Android"} mode`,onClick:()=>{this.ionicMode=e}},e)))}renderSourceLink(){return this.source?t("a",{href:this.source,class:"docs-preview-source",target:"_blank",title:"Demo Source"},t("ion-icon",{name:"code"})):null}renderDevice(){return t("div",{class:`docs-preview-device ${this.ionicMode}`},t("figure",null,t("svg",{class:"docs-preview-device__md-bar",viewBox:"0 0 1384.3 40.3"},t("path",{class:"st0",d:"M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"}),t("circle",{class:"st0",cx:"1299",cy:"20.2",r:"20"}),t("path",{class:"st0",d:"M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})),t("svg",{class:"docs-preview-device__ios-notch",viewBox:"0 0 219 31"},t("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),t("iframe",{onLoad:this.onIframeLoad,src:`${this.url}?ionic:mode=${this.ionicMode}${this.URLParams}`,ref:t=>{this.iframe=t}})))}render(){return this.url?[this.renderSourceLink(),this.renderModeToggle(),this.renderDevice()]:null}static get is(){return"docs-preview"}static get properties(){return{ionicMode:{state:!0},source:{type:String,attr:"source"},url:{type:String,attr:"url"}}}static get listeners(){return[{name:"window:previewMessage",method:"handleMessage"}]}static get style(){return"docs-preview{grid-area:preview}.docs-preview-device{--device-aspect-ratio:2.125;--device-padding:2rem;padding:var(--device-padding);position:-webkit-sticky;position:sticky;top:0}.docs-preview-device>figure{border-radius:32px;-webkit-box-shadow:0 0 0 14px #090a0d,0 0 0 17px #9fa3a8,0 0 34px 17px rgba(0,0,0,.2);box-shadow:0 0 0 14px #090a0d,0 0 0 17px #9fa3a8,0 0 34px 17px rgba(0,0,0,.2);height:0;margin:0;max-width:320px;min-width:320px;overflow:hidden;padding-bottom:calc(var(--device-aspect-ratio) * 100%);position:relative;width:calc((100vh - var(--header-height) - var(--device-padding) * 2) / var(--device-aspect-ratio));z-index:1}.docs-preview-device>figure>iframe{border:none;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.docs-preview-mode-toggle{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:1rem}.docs-preview-mode-toggle button{background-color:transparent;border:none;border-radius:16px;color:var(--gray);cursor:pointer;font-size:10px;font-weight:700;letter-spacing:.1em;line-height:24px;margin:0 3px;padding:0 9px;text-transform:uppercase;-webkit-transition:background-color .2s ease,color .2s ease;transition:background-color .2s ease,color .2s ease}.docs-preview-mode-toggle button:active,.docs-preview-mode-toggle button:focus{outline:none}.docs-preview-mode-toggle button.is-selected{background-color:var(--blue);color:#fff}.docs-preview-source{position:absolute;top:1rem;right:44px;font-size:24px}\@media (max-width:1124px){.docs-preview-device,.docs-preview-mode-toggle,.docs-preview-source{display:none}}.docs-preview-device__ios-notch{fill:#090a0d;top:-1px;width:165px;z-index:2}.docs-preview-device.ios figure:after,.docs-preview-device__ios-notch{display:none;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.docs-preview-device.ios figure:after{background-color:rgba(0,0,0,.5);border-radius:2px;bottom:6px;content:\"\";height:4px;width:35%;z-index:1}.docs-preview-device.ios .docs-preview-device__ios-notch,.docs-preview-device.ios figure:after{display:block}.docs-preview-device.md figure{border-radius:20px}.docs-preview-device__md-bar{display:none}.docs-preview-device.md .docs-preview-device__md-bar{display:block;fill:#090a0d;opacity:.1;padding:.5rem .75rem;position:relative;width:100%;z-index:2}"}}!function(t,e){function o(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect;this.intersectionRatio=o?Number((n.width*n.height/o).toFixed(4)):this.isIntersecting?1:0}function n(t,e){var o,n,i,s=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(s.root&&1!=s.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){o(),i=null},n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(s.rootMargin),this.thresholds=this._initThresholds(s.threshold),this.root=s.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function s(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function r(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var o=e;o;){if(o==t)return!0;o=c(o)}return!1}function c(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}"IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype?"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}):(n.prototype.THROTTLE_TIMEOUT=100,n.prototype.POLL_INTERVAL=null,n.prototype.USE_MUTATION_OBSERVER=!0,n.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},n.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},n.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},n.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},n.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]})},n.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},n.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},n.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},n.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var s=i.element,a=r(s),c=this._rootContainsTarget(s),h=i.entry,l=e&&c&&this._computeTargetAndRootIntersection(s,n),u=i.entry=new o({time:t.performance&&performance.now&&performance.now(),target:s,boundingClientRect:a,rootBounds:n,intersectionRect:l});h?e&&c?this._hasCrossedThreshold(h,u)&&this._queuedEntries.push(u):h&&h.isIntersecting&&this._queuedEntries.push(u):this._queuedEntries.push(u)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},n.prototype._computeTargetAndRootIntersection=function(o,n){if("none"!=t.getComputedStyle(o).display){for(var i,s,a,h,l,u,d,p,f=r(o),g=c(o),y=!1;!y;){var m=null,v=1==g.nodeType?t.getComputedStyle(g):{};if("none"==v.display)return;if(g==this.root||g==e?(y=!0,m=n):g!=e.body&&g!=e.documentElement&&"visible"!=v.overflow&&(m=r(g)),m&&(i=m,s=f,void 0,void 0,void 0,void 0,void 0,void 0,a=Math.max(i.top,s.top),h=Math.min(i.bottom,s.bottom),l=Math.max(i.left,s.left),p=h-a,!(f=(d=(u=Math.min(i.right,s.right))-l)>=0&&p>=0&&{top:a,bottom:h,left:l,right:u,width:d,height:p})))break;g=c(g)}return f}},n.prototype._getRootRect=function(){var t;if(this.root)t=r(this.root);else{var o=e.documentElement,n=e.body;t={top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},n.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100}),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},n.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var s=this.thresholds[i];if(s==o||s==n||s<o!=s<n)return!0}},n.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},n.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},n.prototype._registerInstance=function(){},n.prototype._unregisterInstance=function(){},t.IntersectionObserver=n,t.IntersectionObserverEntry=o)}(window,document);class M{constructor(){this.isMenuOpen=!1,this.handleDocumentUpdate=(t=>{this.previewUrl=t.previewUrl||null,this.previewSource=t.previewSource||null,this.pageClass=t.pageClass,this.closeMenu()}),this.toggleMenu=(()=>{this.isMenuOpen=!this.isMenuOpen}),this.closeMenu=(()=>{this.isMenuOpen=!1})}parseSection(t){const e=/^(api|cli|native|pro)(\/.*)?/.exec(t);return e&&e[1]||"framework"}setScrollPosition(){const{hash:t}=window.location,e=t?document.querySelector(t):this.document;e&&e.scrollIntoView()}componentDidUpdate(){this.setScrollPosition()}render(){return t("stencil-router",null,t("stencil-route",{url:["/docs/:document*","/docs/"],routeRender:e=>{const o=e.match.params.document||"index",n=this.parseSection(o);return t("docs-layout",{class:{"is-menu-open":this.isMenuOpen,[`section-${n}`]:!0,[`page-${this.pageClass||o.replace(/\//g,"")}`]:!0}},t("docs-menu",{section:n,path:e.match.url}),t("docs-header",{section:n,isMenuOpen:this.isMenuOpen,onToggleClick:this.toggleMenu}),t("docs-content",{onOverlayClick:this.closeMenu,showOverlay:this.isMenuOpen},t("docs-document",{ref:t=>{this.document=t},path:o,onUpdate:this.handleDocumentUpdate}),t("docs-preview",{url:this.previewUrl,source:this.previewSource})))}}))}static get is(){return"docs-root"}static get properties(){return{isMenuOpen:{state:!0},pageClass:{state:!0},previewSource:{state:!0},previewUrl:{state:!0}}}}var E=function(t,e,o,n){return new(o||(o=Promise))(function(i,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(r,a)}c((n=n.apply(t,e||[])).next())})};class R{constructor(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const o=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!o)return this.previousMatch=this.match,this.match=e(t.pathname,{path:this.url,exact:this.exact,strict:!0})}loadCompleted(){return E(this,void 0,void 0,function*(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!o(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)})}componentDidUpdate(){return E(this,void 0,void 0,function*(){yield this.loadCompleted()})}componentDidLoad(){return E(this,void 0,void 0,function*(){yield this.loadCompleted()})}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}function k(t,...e){t||console.error(...e)}function P(t,...e){t||console.warn(...e)}n.injectProps(R,["location","history","historyType","routeViewsUpdated"]);const S=()=>{let t,e=[];return{setPrompt:e=>(P(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,n,i)=>{if(null!=t){const s="function"==typeof t?t(e,o):t;"string"==typeof s?"function"==typeof n?n(s,i):(P(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==s)}else i(!0)},appendListener:t=>{let o=!0;const n=(...e)=>{o&&t(...e)};return e.push(n),()=>{o=!1,e=e.filter(t=>t!==n)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},L=(t="scrollPositions")=>{let e=new Map;if(i("sessionStorage")){const o=window.sessionStorage.getItem(t);e=o?new Map(JSON.parse(o)):e}function o(t,o){if(e.set(t,o),i("sessionStorage")){const t=[];e.forEach((e,o)=>{t.push([o,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:o,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){o(t,[window.scrollX,window.scrollY])}}},x=()=>{try{return window.history.state||{}}catch(t){return{}}},U={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+b(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:b,decodePath:a},slash:{encodePath:a,decodePath:a}},C=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},A=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var H=function(t,e,o,n){return new(o||(o=Promise))(function(i,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(r,a)}c((n=n.apply(t,e||[])).next())})};function V(t,e){const o=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:o})}const B={browser:(t={})=>{k(d,"Browser history needs a DOM");const e=window.history,o=y(),n=!m(),i=L(),w=null!=t.forceRefresh&&t.forceRefresh,b=null!=t.getUserConfirmation?t.getUserConfirmation:g,T=null!=t.keyLength?t.keyLength:6,_=t.basename?c(a(t.basename)):"",O=t=>{t=t||{};const{key:e,state:o}=t,{pathname:n,search:i,hash:a}=window.location;let c=n+i+a;return P(!_||h(c,_),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+c+'" to begin with "'+_+'".'),_&&(c=l(c,_)),s(c,o,e||r(T))},I=S(),M=t=>{i.capture(q.location.key),Object.assign(q,t),q.location.scrollPosition=i.get(q.location.key),q.length=e.length,I.notifyListeners(q.location,q.action)},E=t=>{v(t)||C(O(t.state))},R=()=>{C(O(x()))};let U=!1;const C=t=>{if(U)U=!1,M();else{const e="POP";I.confirmTransitionTo(t,e,b,o=>{o?M({action:e,location:t}):A(t)})}},A=t=>{let e=V.indexOf(q.location.key);-1===e&&(e=0);let o=V.indexOf(t.key);-1===o&&(o=0);const n=e-o;n&&(U=!0,j(n))},H=O(x());let V=[H.key];const B=t=>_+u(t),j=t=>{e.go(t)};let N=0;const D=t=>{1===(N+=t)?(p(window,"popstate",E),n&&p(window,"hashchange",R)):0===N&&(f(window,"popstate",E),n&&f(window,"hashchange",R))};let F=!1;const q={length:e.length,action:"POP",location:H,createHref:B,push:(t,n)=>{P(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const i=s(t,n,r(T),q.location);I.confirmTransitionTo(i,"PUSH",b,t=>{if(!t)return;const n=B(i),{key:s,state:r}=i;if(o)if(e.pushState({key:s,state:r},void 0,n),w)window.location.href=n;else{const t=V.indexOf(q.location.key),e=V.slice(0,-1===t?0:t+1);e.push(i.key),V=e,M({action:"PUSH",location:i})}else P(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=n})},replace:(t,n)=>{P(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const i=s(t,n,r(T),q.location);I.confirmTransitionTo(i,"REPLACE",b,t=>{if(!t)return;const n=B(i),{key:s,state:r}=i;if(o)if(e.replaceState({key:s,state:r},void 0,n),w)window.location.replace(n);else{const t=V.indexOf(q.location.key);-1!==t&&(V[t]=i.key),M({action:"REPLACE",location:i})}else P(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(n)})},go:j,goBack:()=>j(-1),goForward:()=>j(1),block:(t="")=>{const e=I.setPrompt(t);return F||(D(1),F=!0),()=>(F&&(F=!1,D(-1)),e())},listen:t=>{const e=I.appendListener(t);return D(1),()=>{D(-1),e()}}};return q},hash:(t={})=>{k(d,"Hash history needs a DOM");const e=window.history,o=T(),n=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:i=g,hashType:y="slash"}=t,m=t.basename?c(a(t.basename)):"",{encodePath:v,decodePath:b}=U[y],_=()=>{let t=b(C());return P(!m||h(t,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+m+'".'),m&&(t=l(t,m)),s(t,void 0,r(n))},O=S(),I=t=>{Object.assign($,t),$.length=e.length,O.notifyListeners($.location,$.action)};let M=!1,E=null;const R=()=>{const t=C(),e=v(t);if(t!==e)A(e);else{const t=_(),e=$.location;if(!M&&w(e,t))return;if(E===u(t))return;E=null,L(t)}},L=t=>{if(M)M=!1,I();else{const e="POP";O.confirmTransitionTo(t,e,i,o=>{o?I({action:e,location:t}):x(t)})}},x=t=>{let e=j.lastIndexOf(u($.location));-1===e&&(e=0);let o=j.lastIndexOf(u(t));-1===o&&(o=0);const n=e-o;n&&(M=!0,N(n))},H=C(),V=v(H);H!==V&&A(V);const B=_();let j=[u(B)];const N=t=>{P(o,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let D=0;const F=t=>{1===(D+=t)?p(window,"hashchange",R):0===D&&f(window,"hashchange",R)};let q=!1;const $={length:e.length,action:"POP",location:B,createHref:t=>"#"+v(m+u(t)),push:(t,e)=>{P(void 0===e,"Hash history cannot push state; it is ignored");const o=s(t,void 0,r(n),$.location);O.confirmTransitionTo(o,"PUSH",i,t=>{if(!t)return;const e=u(o),n=v(m+e);if(C()!==n){E=e,(t=>window.location.hash=t)(n);const t=j.lastIndexOf(u($.location)),i=j.slice(0,-1===t?0:t+1);i.push(e),j=i,I({action:"PUSH",location:o})}else P(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),I()})},replace:(t,e)=>{P(void 0===e,"Hash history cannot replace state; it is ignored");const o=s(t,void 0,r(n),$.location);O.confirmTransitionTo(o,"REPLACE",i,t=>{if(!t)return;const e=u(o),n=v(m+e);C()!==n&&(E=e,A(n));const i=j.indexOf(u($.location));-1!==i&&(j[i]=e),I({action:"REPLACE",location:o})})},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const e=O.setPrompt(t);return q||(F(1),q=!0),()=>(q&&(q=!1,F(-1)),e())},listen:t=>{const e=O.appendListener(t);return F(1),()=>{F(-1),e()}}};return $}};class j{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=((t={})=>{if(t.scrollToId&&"browser"===this.historyType){const e=document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=B[this.historyType](),this.history.listen(t=>H(this,void 0,void 0,function*(){t=V(t,this.root),this.location=t})),this.location=V(this.history.location,this.root)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(()=>{this.history&&this.history.location&&Array.isArray(this.history.location.scrollPosition)&&window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}render(){if(this.location&&this.history)return t(n.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{_ as DocsContent,O as DocsLayout,I as DocsPreview,M as DocsRoot,R as StencilRoute,j as StencilRouter};