App.loadBundle("z5xpyaqx",["exports"],function(e){var n=window.App.h,t=function(){function e(){}return e.prototype.renderButtons=function(){return n("svg",{viewBox:"0 0 400 100"},n("circle",{r:"50",cx:"50",cy:"50"}),n("circle",{r:"50",cx:"200",cy:"50"}),n("circle",{r:"50",cx:"350",cy:"50"}))},e.prototype.render=function(){return[this.nobuttons?null:this.renderButtons(),n("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"command-line"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{nobuttons:{type:Boolean,attr:"nobuttons"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-command-line-h{display:block;background-color:#2b313c;border-radius:7px;padding:1.25em 2em 2em;font-family:var(--font-family-code);font-size:13px;letter-spacing:normal;line-height:1.5;color:hsla(0,0%,100%,.7);overflow:scroll}[nobuttons].sc-command-line-h{padding:2em}svg.sc-command-line{height:13px;margin-bottom:1em;margin-left:-.3em}svg.sc-command-line > circle.sc-command-line:first-child{fill:#fc5e64}svg.sc-command-line > circle.sc-command-line:nth-child(2){fill:#fdba46}svg.sc-command-line > circle.sc-command-line:nth-child(3){fill:#2ec64f}"},enumerable:!0,configurable:!0}),e}();e.CommandLine=t,Object.defineProperty(e,"__esModule",{value:!0})});