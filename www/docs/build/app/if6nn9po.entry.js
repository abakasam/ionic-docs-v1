const e=window.App.h;class t{get extname(){const e=this.name.split(".");return e.length>1?e[e.length-1]:""}hostData(){return{class:{file:!0,[`extname-${this.extname}`]:this.extname.length>0}}}render(){return e("div",{class:"name"},this.name)}static get is(){return"file-tree-file"}static get encapsulation(){return"shadow"}static get properties(){return{name:{type:String,attr:"name"}}}static get style(){return".name{position:relative;padding-left:15px}"}}export{t as FileTreeFile};