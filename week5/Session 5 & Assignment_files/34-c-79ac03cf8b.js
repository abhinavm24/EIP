(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[34,679,680],{"6vK/":function(e,t,n){"use strict"
var r=n("rePB")
var o=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
n("DEX3")
var d=n("q1tI")
var u=n.n(d)
var h=n("17x9")
var p=n.n(h)
var f=n("TSYQ")
var m=n.n(f)
var b=n("3zPy")
var v=n.n(b)
var y=n("n12J")
var g=n("PJ1B")
var _=n("J2CL")
var O=n("dpqJ")
var S=n("cClk")
var k=n("nAyT")
var x=n("II2N")
var j=n("4Awi")
var w=n("jtGx")
var C=n("BTe1")
var A=n("oXx0")
function F(e){var t=e.colors,n=e.typography
e.spacing
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,lineHeight:n.lineHeightCondensed,fontSize:n.fontSizeMedium,simpleColor:t.textBrand,simpleSelectedBackground:t.backgroundLightest,simpleSelectedBorderColor:t.borderMedium,simpleSelectedColor:t.textDarkest,minimalColor:t.textDarkest,minimalHoverBorderColor:t.borderMedium,minimalSelectedBorderColor:t.borderBrand}}F.canvas=function(e){return{simpleColor:e["ic-brand-primary"],simpleSelectedColor:e["ic-brand-font-color-dark"],minimalColor:e["ic-brand-font-color-dark"],minimalSelectedBorderColor:e["ic-brand-primary"]}}
var I,B,z,L,W
var H={componentId:"cyAHS",template:function(e){return"\n\n.cyAHS_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";user-select:none}\n\n.cyAHS_bGBk[aria-disabled],.cyAHS_bGBk[aria-selected]{cursor:default}\n\n.cyAHS_bGBk[aria-disabled]{opacity:0.5}\n\n.cyAHS_bGBk:focus{outline:none}\n\n.cyAHS_GKUc,.cyAHS_cAug{white-space:nowrap}\n\n.cyAHS_cAug{border:0.0625rem solid transparent;border-top-left-radius:0.1875rem;border-top-right-radius:0.1875rem;box-sizing:border-box;color:").concat(e.simpleColor||"inherit",";margin-bottom:-0.0625rem;margin-right:0.2em;padding:0.7em 1em}\n\n.cyAHS_cAug:first-of-type{margin-left:0}\n\n.cyAHS_cAug:not([aria-selected]):not([aria-disabled]):hover,.cyAHS_cAug[aria-selected]{background:").concat(e.simpleSelectedBackground||"inherit",";border-color:").concat(e.simpleSelectedBorderColor||"inherit","}\n\n.cyAHS_cAug:hover,.cyAHS_cAug[aria-disabled],.cyAHS_cAug[aria-selected]{color:").concat(e.simpleSelectedColor||"inherit","}\n\n.cyAHS_cAug[aria-selected]{border-bottom-color:").concat(e.simpleSelectedBackground||"inherit",";z-index:1}\n\n@keyframes cyAHS_epeh{to{opacity:1;transform:translateZ(0) scaleX(1)}}\n\n.cyAHS_GKUc{color:").concat(e.minimalColor||"inherit",';line-height:1;padding:1rem 1.25rem;position:relative;z-index:1}\n\n.cyAHS_GKUc:after{bottom:-0.0625rem;content:"";height:0.25rem;left:0;opacity:0;position:absolute;transform:translateZ(0) scaleX(0.01);width:100%}\n\n.cyAHS_GKUc[aria-disabled]{font-weight:400}\n\n.cyAHS_GKUc:not([aria-selected]):not([aria-disabled]):hover{border-bottom-color:').concat(e.minimalHoverBorderColor||"inherit","}\n\n.cyAHS_GKUc[aria-selected]:after{animation-duration:0.2s;animation-fill-mode:forwards;animation-name:cyAHS_epeh;animation-timing-function:ease-out;background-color:").concat(e.minimalSelectedBorderColor||"inherit","}")},root:"cyAHS_bGBk",minimal:"cyAHS_GKUc",simple:"cyAHS_cAug",selectedTab:"cyAHS_epeh"}
var D=(I=Object(A["a"])(),B=Object(_["j"])(F,H),I(z=B(z=(W=L=function(e){Object(l["a"])(t,e)
function t(){var e
var n
Object(a["a"])(this,t)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
n=Object(c["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(o)))
n.handleClick=function(e){if(n.props.disabled)return
n.props.onClick(n.props.index,e)}
n.handleKeyDown=function(e){if(n.props.disabled)return
n.props.onKeyDown(n.props.index,e)}
return n}Object(i["a"])(t,[{key:"render",value:function(){var e
var t=this.props,n=t.id,a=t.variant,i=t.selected,c=t.disabled,s=t.controls,l=t.children,d=Object(o["a"])(t,["id","variant","selected","disabled","controls","children"])
return u.a.createElement(y["a"],Object.assign({},Object(w["b"])(d),{as:"div",role:"tab",id:n,onClick:this.handleClick,onKeyDown:this.handleKeyDown,className:m()((e={},Object(r["a"])(e,H.root,true),Object(r["a"])(e,H[a],true),e)),"aria-selected":i?"true":null,"aria-disabled":c?"true":null,"aria-controls":s,tabIndex:i&&!c?"0":null}),l)}}])
t.displayName="Tab"
return t}(d["Component"]),L.propTypes={variant:p.a.oneOf(["simple","minimal"]),id:p.a.string.isRequired,index:p.a.number.isRequired,controls:p.a.string.isRequired,disabled:p.a.bool,selected:p.a.bool,onClick:p.a.func,onKeyDown:p.a.func,children:p.a.node},L.defaultProps={children:null,variant:"simple",disabled:false,selected:false,onClick:function(){},onKeyDown:function(){}},W))||z)||z)
var U=n("XQb/")
function G(e){var t=e.colors,n=e.borders
e.spacing
return{color:t.textDarkest,background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:n.widthSmall,borderStyle:n.style}}G.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
var T,M,E,P,R
var N={componentId:"cDwzl",template:function(e){return"\n\n.cDwzl_caGd,.cDwzl_bGBk{box-sizing:border-box}\n\n.cDwzl_caGd{background:".concat(e.background||"inherit",";border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";color:").concat(e.color||"inherit",";width:100%}\n\n.cDwzl_cLQw{overflow:auto}\n\n.cDwzl_GKUc,.cDwzl_cAug{flex-basis:100%;min-width:1px}\n\n.cDwzl_GKUc .cDwzl_caGd,.cDwzl_cAug .cDwzl_caGd{border-bottom:none;border-left:none;border-right:none}")},content:"cDwzl_caGd",root:"cDwzl_bGBk",overflow:"cDwzl_cLQw",minimal:"cDwzl_GKUc",simple:"cDwzl_cAug"}
var K=(T=Object(A["a"])(),M=Object(_["j"])(G,N),T(E=M(E=(R=P=function(e){Object(l["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e,t
var n=this.props,a=n.selected,i=n.disabled,c=n.labelledBy,s=n.variant,l=n.id,d=n.maxHeight,h=n.padding,p=n.textAlign,f=n.children,b=Object(o["a"])(n,["selected","disabled","labelledBy","variant","id","maxHeight","padding","textAlign","children"])
var v=!a||!!i
return u.a.createElement("div",Object.assign({},Object(w["b"])(b),{className:m()((e={},Object(r["a"])(e,N.root,true),Object(r["a"])(e,N[s],true),e)),role:"tabpanel",id:l,"aria-labelledby":c,"aria-hidden":v?"true":null}),u.a.createElement(U["a"],{type:"fade",in:!v,unmountOnExit:true,transitionExit:false},u.a.createElement(y["a"],{className:m()((t={},Object(r["a"])(t,N.content,true),Object(r["a"])(t,N.overflow,d),t)),maxHeight:d,as:"div",padding:h,textAlign:p},f)))}}])
t.displayName="TabPanel"
return t}(d["Component"]),P.propTypes={title:p.a.node.isRequired,children:p.a.node,variant:p.a.oneOf(["simple","minimal"]),maxHeight:p.a.string,id:p.a.string,labelledBy:p.a.string,selected:p.a.bool,disabled:p.a.bool,padding:_["c"].spacing,textAlign:p.a.oneOf(["start","center","end"]),tabRef:p.a.func},P.defaultProps={children:null,maxHeight:void 0,disabled:false,textAlign:void 0,id:null,variant:"simple",labelledBy:null,selected:false,padding:"small",tabRef:function(e){}},R))||E)||E)
var V=function(e){var t=e.colors,n=e.breakpoints
return{minimalBackground:t.backgroundLightest,small:n.small,medium:n.medium,large:n.large}}
n.d(t,"a",(function(){return ee}))
var X,J,q,Q,Z,Y
var $={componentId:"cMXVf",template:function(e){return"\n\n.cMXVf_bXVH{display:flex;flex-flow:row wrap}\n\n.cMXVf_GKUc{background:".concat(e.minimalBackground||"inherit","}")},tabs:"cMXVf_bXVH",minimal:"cMXVf_GKUc"}
var ee=(X=Object(k["a"])("7.0.0",null,"Use the Tabs component instead."),J=Object(A["a"])(),q=Object(_["j"])(V,$),X(Q=J(Q=q(Q=(Y=Z=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(a["a"])(this,t)
n=Object(c["a"])(this,Object(s["a"])(t).call(this))
n.handleClick=function(e,t){var r=n.getTab(e)
r.props.disabled||n.setSelected(e)}
n.handleKeyDown=function(e,t){var r=n.selectedIndex
var o=false
if(t.keyCode===v.a.codes.up||t.keyCode===v.a.codes.left){r=n.getIndex(r,-1)
o=true}else if(t.keyCode===v.a.codes.down||t.keyCode===v.a.codes.right){r=n.getIndex(r,1)
o=true}o&&t.preventDefault()
n.setSelected(r)}
n.handleFocusableRef=function(e){n._focusable=e}
n.state={}
"undefined"===typeof e.selectedIndex&&(n.state.selectedIndex=e.defaultSelectedIndex)
n._tabs=[]
n._panels=[]
return n}Object(i["a"])(t,[{key:"componentDidMount",value:function(){this.props.focus&&this.focus()}},{key:"componentDidUpdate",value:function(e){this.props.focus&&!e.focus&&this.focus()}},{key:"setSelected",value:function(e){var t=this
var n
this.isValidIndex(e),"[TabList] Invalid tab index: '".concat(e,"'.")
var r=function(){"undefined"!==typeof n&&"function"===typeof t.props.onChange&&t.props.onChange(e,n)}
if("undefined"===typeof this.props.selectedIndex)this.setState((function(t,o){n=t.selectedIndex
if(e!==n){r()
return{selectedIndex:e}}return t}))
else{n=this.props.selectedIndex
e!==n&&r()}}},{key:"getIndex",value:function(e,t){var n=this.tabs.length
var r=t<0?t+n:t
this.isValidIndex(e),"[Tablist] Invalid tab index: '".concat(e,"'")
var o=e
do{o=(o+r)%n}while(this.getTab(o).props.disabled)
return o}},{key:"isValidIndex",value:function(e){return e>=0&&e<this.tabs.length}},{key:"getTab",value:function(e){return this._tabs[e]}},{key:"createTab",value:function(e,t,n,r){var o=this
var a=r.id||t
return Object(d["createElement"])(D,{variant:this.props.variant,ref:function(t){o._tabs[e]=t
"function"===typeof r.tabRef&&r.tabRef(t)},key:"tab-".concat(a),id:"tab-".concat(a),controls:"panel-".concat(a),index:e,selected:n,disabled:r.disabled,children:r.title,onClick:this.handleClick,onKeyDown:this.handleKeyDown})}},{key:"clonePanel",value:function(e,t,n,r){var o=this
var a=r.props.id||t
return Object(x["a"])(r,{ref:function(t){o._panels[e]=t},id:"panel-".concat(a),labelledBy:"tab-".concat(a),selected:n,key:"panel-".concat(a),variant:this.props.variant,padding:r.props.padding||this.props.padding,textAlign:r.props.textAlign||this.props.textAlign,maxHeight:r.maxHeight||this.props.maxHeight,minHeight:r.minHeight||this.props.minHeight})}},{key:"focus",value:function(){this._focusable&&"function"===typeof this._focusable.focus&&this._focusable.focus()}},{key:"render",value:function(){var e=this
var t=[]
var n=[]
var a=this.tabIds
var i=this.props,c=i.children,s=i.size,l=i.maxWidth,d=i.elementRef,h=i.variant,p=i.margin,f=(i.onChange,Object(o["a"])(i,["children","size","maxWidth","elementRef","variant","margin","onChange"]))
var b=u.a.Children.toArray(c).filter((function(e){return Object(j["a"])(e,[K])})).findIndex((function(t,n){return!t.props.disabled&&n===e.selectedIndex}))
var v=0
b=b>=0?b:0
u.a.Children.forEach(c,(function(r){if(Object(j["a"])(r,[K])){var o=!r.props.disabled&&b===v
var i=a[v]
n.push(e.createTab(v,i,o,r.props))
t.push(e.clonePanel(v,i,o,r))
v++}else t.push(r)}))
return u.a.createElement(y["a"],Object.assign({},Object(w["b"])(f),{elementRef:d,maxWidth:l||this.theme[s],margin:p,as:"div",className:m()(Object(r["a"])({},$[h],true))}),u.a.createElement(g["a"],{ref:this.handleFocusableRef},(function(e){var t=e.focusVisible
return u.a.createElement(y["a"],{as:"div",display:"flex",position:"relative",borderRadius:"medium",withFocusOutline:t,shouldAnimateFocus:false,role:"tablist",className:$.tabs},n)})),t)}},{key:"selectedIndex",get:function(){return"undefined"===typeof this.props.selectedIndex?this.state.selectedIndex:this.props.selectedIndex}},{key:"tabIds",get:function(){var e=this._tabIds||[]
var t=e.length-this.tabs.length
while(t++<0)e.push(Object(C["a"])("Tab"))
this._tabIds=e
return e}},{key:"tabs",get:function(){return u.a.Children.toArray(this.props.children).map((function(e){return Object(j["a"])(e,[K])&&e}))}}])
t.displayName="TabList"
return t}(d["Component"]),Z.propTypes={children:O["a"].oneOf([K,null]),variant:p.a.oneOf(["simple","minimal"]),defaultSelectedIndex:p.a.number,selectedIndex:Object(S["a"])(p.a.number,"onChange","defaultSelectedIndex"),onChange:p.a.func,focus:p.a.bool,size:p.a.oneOf(["small","medium","large"]),maxWidth:p.a.oneOfType([p.a.string,p.a.number]),maxHeight:p.a.oneOfType([p.a.string,p.a.number]),minHeight:p.a.oneOfType([p.a.string,p.a.number]),margin:_["c"].spacing,padding:_["c"].spacing,textAlign:p.a.oneOf(["start","center","end"]),elementRef:p.a.func},Z.defaultProps={variant:"simple",focus:false,defaultSelectedIndex:0,padding:void 0,textAlign:void 0,size:void 0,maxWidth:void 0,maxHeight:void 0,minHeight:void 0,selectedIndex:void 0,onChange:void 0,margin:void 0,children:null,elementRef:function(e){}},Z.Panel=K,Z.Tab=D,Y))||Q)||Q)||Q)},PJ1B:function(e,t,n){"use strict"
var r=n("1OyB")
var o=n("vuIU")
var a=n("md7G")
var i=n("foSv")
var c=n("Ji7U")
n("DEX3")
var s=n("q1tI")
var l=n("17x9")
var d=n.n(l)
var u=n("yfCu")
var h=n("i/8D")
var p={keyboard:"keyboard",pointer:"pointer"}
var f=[]
var m=[]
var b=p.keyboard
var v=0
var y={}
var g=function(e){if("html"===e.target.nodeName.toLowerCase())return
_(b,p.pointer)
f.forEach((function(e){return e.remove()}))}
var _=function(e,t){if(e===t)return
b=t
Object.keys(y).forEach((function(n){return y[n](e,t)}))}
var O=function(){_(b,p.keyboard)}
var S=function(){_(b,p.pointer)}
var k=function(){if(0===f.length){f.push(Object(u["a"])(document,"mousemove",g,true))
f.push(Object(u["a"])(document,"mousedown",g,true))
f.push(Object(u["a"])(document,"mouseup",g,true))
f.push(Object(u["a"])(document,"pointermove",g,true))
f.push(Object(u["a"])(document,"pointerdown",g,true))
f.push(Object(u["a"])(document,"pointerup",g,true))
f.push(Object(u["a"])(document,"touchmove",g,true))
f.push(Object(u["a"])(document,"touchstart",g,true))
f.push(Object(u["a"])(document,"touchend",g,true))}}
var x=function(){if(0===m.length){m.push(Object(u["a"])(document,"keydown",O,true))
m.push(Object(u["a"])(document,"mousedown",S,true))
m.push(Object(u["a"])(document,"pointerdown",S,true))
m.push(Object(u["a"])(document,"touchstart",S,true))}}
var j=function(){f.forEach((function(e){return e.remove()}))
f=[]
m.forEach((function(e){return e.remove()}))
m=[]}
var w=function(e){var t=e.onInputModeChange
var n=v++
"function"===typeof t&&(y[n]=t)
if(h["a"]){x()
k()}return{isKeyboardMode:function(){return b===p.keyboard},remove:function(){1===v&&j()
delete y[n]
v--}}}
var C=n("K7t/")
var A=n("kR0I")
var F=n("VCL8")
var I=function(){return F["polyfill"].apply(void 0,arguments)}
n.d(t,"a",(function(){return B}))
var B=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(r["a"])(this,t)
for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s]
n=Object(a["a"])(this,(e=Object(i["a"])(t)).call.apply(e,[this].concat(c)))
n._focusListener=null
n._blurListener=null
n._inputModeListener=null
n.state={focused:false,focusable:false}
n.handleInputModeChange=function(){n.forceUpdate()}
n.handleFocus=function(e){n.removeFocusListener()
n.setState({focused:true})}
n.handleBlur=function(e){n.removeBlurListener()
n.setState({focused:false})}
return n}Object(o["a"])(t,[{key:"componentDidMount",value:function(){var e=this.focusable,t=this.focused
this.addFocusableListeners(e,t)
this._inputModeListener=w({onInputModeChange:this.handleInputModeChange})
this.setState({focusable:e,focused:t})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){var n=this.props,r=n.render,o=n.children
e.children===o&&e.render===r||this.removeFocusableListeners()
return null}},{key:"componentDidUpdate",value:function(e,t){var n=this.focusable
if(!n&&this.state.focusable){this.removeFocusableListeners()
this.setState({focusable:false,focused:false})}else if(n!==this.state.focusable){this.removeFocusableListeners()
this.state.focused&&n.focus()
this.addFocusableListeners(n,this.state.focused)
this.setState({focusable:n})}else this.addFocusableListeners(n,this.state.focused)}},{key:"componentWillUnmount",value:function(){if(this._inputModeListener){this._inputModeListener.remove()
this._inputModeListener=null}this.removeFocusableListeners()}},{key:"addFocusableListeners",value:function(e,t){if(!e)return
t&&!this._blurListener?this._blurListener=Object(u["a"])(e,"blur",this.handleBlur,true):this._focusListener||(this._focusListener=Object(u["a"])(e,"focus",this.handleFocus,true))}},{key:"removeFocusableListeners",value:function(){this.removeFocusListener()
this.removeBlurListener()}},{key:"removeFocusListener",value:function(){if(this._focusListener){this._focusListener.remove()
this._focusListener=null}}},{key:"removeBlurListener",value:function(){if(this._blurListener){this._blurListener.remove()
this._blurListener=null}}},{key:"focus",value:function(){var e=this.focusable
e&&e.focus()}},{key:"isFocusVisible",value:function(e,n){if(!e||!n)return false
if(this._inputModeListener&&this._inputModeListener.isKeyboardMode())return true
var r=e.tagName,o=e.type,a=e.isContentEditable
if("INPUT"==r&&t.inputTypes[o])return true
if("TEXTAREA"==r)return true
if(a)return true
return false}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.render,r=void 0===n?t:n
var o=this.state,a=o.focusable,i=o.focused
return"function"===typeof r?r({focused:i,focusable:a,focusVisible:this.isFocusVisible(a,i)}):null}},{key:"focused",get:function(){return Object(C["a"])(this)}},{key:"focusable",get:function(){var e=Object(A["a"])(this,(function(){return true}),true)||[]
var t=e&&e.length||0
"[Focusable] Exactly one focusable child is required (".concat(t," found).")
e=!!e&&e[0]
return!(!e||"function"!==typeof e.focus)&&e}},{key:"focusVisible",get:function(){var e=this.state,t=e.focusable,n=e.focused
return this.isFocusVisible(t,n)}}])
t.displayName="Focusable"
return t}(s["Component"])
B.propTypes={children:d.a.func,render:d.a.func}
B.defaultProps={children:null,render:void 0}
B.inputTypes={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,"datetime-local":true}
I(B)},VCL8:function(e,t,n){"use strict"
n.r(t)
n.d(t,"polyfill",(function(){return i}))
function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state)
null!==e&&void 0!==e&&this.setState(e)}function o(e){function t(t){var n=this.constructor.getDerivedStateFromProps(e,t)
return null!==n&&void 0!==n?n:null}this.setState(t.bind(this))}function a(e,t){try{var n=this.props
var r=this.state
this.props=e
this.state=t
this.__reactInternalSnapshotFlag=true
this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n
this.state=r}}r.__suppressDeprecationWarning=true
o.__suppressDeprecationWarning=true
a.__suppressDeprecationWarning=true
function i(e){var t=e.prototype
if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components")
if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e
var n=null
var i=null
var c=null
"function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount")
"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps")
"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate")
if(null!==n||null!==i||null!==c){var s=e.displayName||e.name
var l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()"
throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps){t.componentWillMount=r
t.componentWillReceiveProps=o}if("function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype")
t.componentWillUpdate=a
var d=t.componentDidUpdate
t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n
d.call(this,e,t,r)}}return e}},"gSD+":function(e,t,n){"use strict"
var r=n("rePB")
var o=n("1OyB")
var a=n("vuIU")
var i=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("17x9")
var h=n.n(u)
var p=n("TSYQ")
var f=n.n(p)
var m=n("n12J")
var b=n("J2CL")
var v=n("RhCJ")
var y=n("nAyT")
var g=n("KgFQ")
var _=n("jtGx")
var O=n("oXx0")
function S(e){var t=e.borders,n=e.colors,r=e.spacing,o=e.typography
return{fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,brandColor:n.textBrand,warningColor:n.textWarning,errorColor:n.textDanger,successColor:n.textSuccess,borderPadding:r.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}S.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return I}))
var k,x,j,w,C,A
var F={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"}
var I=(k=Object(y["a"])("7.0.0",null,"Use Heading from ui-heading instead"),x=Object(O["a"])(),j=Object(b["j"])(S,F),k(w=x(w=j(w=(A=C=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var n=this.props,o=n.border,a=n.children,i=n.color,c=n.level,s=n.ellipsis,l=n.margin,u=n.elementRef
var h=Object(g["a"])(t,this.props,(function(){return"reset"===c?"span":c}))
var p=m["a"].omitViewProps(Object(_["a"])(this.props,t.propTypes),t)
return d.a.createElement(m["a"],Object.assign({},p,{className:f()((e={},Object(r["a"])(e,F.root,true),Object(r["a"])(e,F[c],true),Object(r["a"])(e,F["color-".concat(i)],i),Object(r["a"])(e,F["border-".concat(o)],"none"!==o),Object(r["a"])(e,F.ellipsis,s),e)),as:h,margin:l,elementRef:u}),a)}}])
t.displayName="Heading"
return t}(l["Component"]),C.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:v["a"],color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,ellipsis:h.a.bool,margin:b["c"].spacing,elementRef:h.a.func},C.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},A))||w)||w)||w)},"rf+m":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var o=n("1OyB")
var a=n("vuIU")
var i=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var u=n("hPGw")
var h=d.a.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),h)}}])
t.displayName="IconArrowOpenEndSolid"
return t}(l["Component"])
p.glyphName="arrow-open-end"
p.variant="Solid"
p.propTypes=Object(r["a"])({},u["a"].propTypes)}}])

//# sourceMappingURL=34-c-79ac03cf8b.js.map