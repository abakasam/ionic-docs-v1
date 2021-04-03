const t=window.App.h;class e{constructor(){this.cssText="",this.showCopyConfirmation=!1}onCssTextChange(t){if(t.target.value!==this.cssText){const e=t.target.value;if(!e.length)return;this.cssText=e,this.cssTextChange.emit(this.cssText)}}copyCssText(){this.showCopyConfirmation=!0;const t=this.el.querySelector("#cssText").textContent||"",e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),setTimeout(()=>{this.showCopyConfirmation=!1},2e3)}render(){return[t("div",null,t("div",{class:"css-text__header"},t("h3",null,"CSS Variables"),t("div",{class:{"css-text__copy":!0,"show-confirmation":this.showCopyConfirmation}},t("a",{class:"css-text__copy-link",onClick:this.copyCssText.bind(this)},"Copy"),t("span",{class:"css-text__copy-confirmation"},t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"26px",height:"26px"},t("path",{d:"M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"})),"Copied"))),t("div",{id:"cssText",class:"css-text__code",contentEditable:"true",spellcheck:"false",onClick:function(){this.select()},onInput:this.onCssTextChange.bind(this),innerHTML:this.cssText}))]}static get is(){return"color-gen-css-text"}static get properties(){return{cssText:{type:String,attr:"css-text",mutable:!0},el:{elementRef:!0},showCopyConfirmation:{state:!0}}}static get events(){return[{name:"cssTextChange",method:"cssTextChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".css-text__header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.css-text__code{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;max-width:100%;min-width:100%;height:1416px;white-space:pre;background-color:#f5f6f9;border-radius:4px;border:0;outline:none;font-family:var(--font-family-code);font-size:12px;line-height:18px;margin:1.5em 0;padding:2em 2em;-webkit-font-smoothing:initial;color:var(--darkish);resize:both;overflow:auto}h3{font-size:18px;color:var(--blackish);margin:0}.css-text__copy{position:relative;height:20px}.css-text__copy-confirmation,.css-text__copy-link{padding:4px 5px;font-size:12px;line-height:12px;font-weight:600;position:absolute;right:0;top:0}.css-text__copy-link{-webkit-transition:opacity .2s,color .2s,-webkit-transform .2s;transition:opacity .2s,color .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s,color .2s;transition:transform .2s,opacity .2s,color .2s,-webkit-transform .2s;color:#70a4ff;background-color:#e0eeff;border-radius:4px;display:inline-block;cursor:pointer;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:5}.css-text__copy-link:hover{color:var(--blue)}.css-text__copy-confirmation{-webkit-transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s;color:#0ec254;opacity:0;-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding:0}.css-text__copy-confirmation svg{fill:#0ec254;margin-right:-4px}.show-confirmation .css-text__copy-link{opacity:0;-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0);pointer-events:none}.show-confirmation .css-text__copy-confirmation{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}"}}export{e as ColorGenCssText};