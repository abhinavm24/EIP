(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[23],{sIA8:function(e,t,n){"use strict"
var a=n("rePB")
var r=n("VTBJ")
var i=n("1OyB")
var s=n("vuIU")
var o=n("md7G")
var h=n("foSv")
var c=n("Ji7U")
n("DEX3")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var v=n.n(d)
var f=n("TSYQ")
var p=n.n(f)
var g=n("J2CL")
var _=n("eGSd")
var m=n("8o96")
var b=n("i/8D")
n("ReuC")
n("jcII")
var x=function(){return function(e){return e}}
var y=n("sQ3t")
var O=n("II2N")
var j=n("oXx0")
var T=n("dKDz")
var k=n.n(T)
function w(e){var t
if(Array.isArray(e)){t=e.slice(0)
for(var n=0;n<t.length;n++)t[n]=w(t[n])
return t}return e}var S=n("IPIv")
var C=n("gCYW")
var I=n("QF4Q")
function L(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var n=e&&Object(I["a"])(e)
if(n===window||n===document||n===document.body)return true
var a=n.parentNode
if(3===n.nodeType)return L(a)
var r=Object(S["a"])(n)
if("none"===r.display)return false
if("hidden"===r.visibility||"0"===r.opacity)return false
if("hidden"===r.overflow&&"absolute"===r.position&&"auto"!==r.clip){var i=r.clip.substring(5).slice(0,-1).split(", ")
var s=true
i.forEach((function(e){"0px"!==e&&(s=false)}))
if(s)return false}return!t||!a||L(a)}function H(e,t){var n=0
for(var a=0;a<e.length;a++){var r=e[a]
n+=E(r.textContent,1===r.nodeType?r:t)}return n}function E(e,t){var n=Object(S["a"])(t)
var a=document.createElement("canvas")
document.createDocumentFragment().appendChild(a)
var r=a.getContext("2d")
if(!r||!e)return 0
var i=e
var s=0
var o=0
var h=[n["font-weight"],n["font-style"],n["font-size"],n["font-family"]].join(" ")
r.font=h
"uppercase"===n["text-transform"]?i=e.toUpperCase():"lowercase"===n["text-transform"]?i=e.toLowerCase():"capitalize"===n["text-transform"]&&(i=e.replace(/\b\w/g,(function(e){return e.toUpperCase()})))
"normal"!==n["letter-spacing"]&&(s=i.length*parseInt(n["letter-spacing"]))
o=r.measureText(i).width+s
return o}var D=H
function N(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]
var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
var i=e
var s=i.charAt(0)
var o=i.slice(-1)
n&&-1!==t.indexOf(s)&&(i=i.slice(1))
a&&-1!==t.indexOf(o)&&(i=i.slice(0,-1))
r&&(i=N(i,t,n,a,false))
return i}var M=N
function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
var a=t.truncate,r=t.ignore,i=t.ellipsis
var s=w(e)
var o=-1
var h=-1
var c=function(){for(var e=0;e<s.length;e++){var t=s[e]
if(-1!==t.indexOf(i)){o=e
h=t.indexOf(i)}}}
if("character"===a){c()
var l=s[o]
if(l){var u=l[h-1]
u&&-1!==r.indexOf(u)&&s[o].splice(h-1,1)
if(!u){var d=null
var v=o-1
while(v>=0){d=s[v]
if(d.length>0)break
v--}if(d){var f=String(d.slice(-1));-1!==r.indexOf(f)&&(s[v].length-=1)}}}c()
l=s[o]
if(l){var p=l[h+1]
p&&-1!==r.indexOf(p)&&s[o].splice(h+1,1)
if(!p){var g=null
var _=o+1
while(_<s.length){g=s[_]
if(g.length>0)break
_++}if(g){var m=String(g[0]);-1!==r.indexOf(m)&&s[_].shift()}}}}else{c()
var b=s[o]
if(b){var x=b[h-1]
x&&-1!==r.indexOf(x.slice(-1))&&(1===x.length?s[o].splice([h-1],1):s[o][h-1]=x.slice(0,-1))
if(!x){var y=null
var O=o-1
while(O>=0){y=s[O]
if(y.length>0)break
O--}if(y){var j=String(y.slice(-1)).slice(-1)
if(-1!==r.indexOf(j)){var T=y.length-1
s[O][T]=y[T].slice(0,-1)}}}}}n&&(s=U(s,t,false))
return s}var W=U
function F(e,t){var n=new X(e,t)
if(n)return n.truncate()}var X=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
Object(i["a"])(this,e)
this._options={parent:n.parent||t.parentElement,maxLines:n.maxLines||1,position:n.position||"end",truncate:n.truncate||"character",ellipsis:n.ellipsis||"…",ignore:n.ignore||[" ",".",","],lineHeight:n.lineHeight||1.2,shouldTruncateWhenInvisible:n.shouldTruncateWhenInvisible}
if(!t)return
this._stage=t
n.parent?this._parent=this._options.parent:this._parent="auto"===this._options.maxLines?this._stage.parentElement:this._stage
this._truncatedText=this._parent.textContent
this._isTruncated=false
this.setup()}Object(s["a"])(e,[{key:"setup",value:function(){if(!this._stage)return
var e=this._options,t=e.maxLines,n=e.truncate,a=e.lineHeight
var r=Object(S["a"])(this._parent)
var i="normal"===r.lineHeight?a*parseFloat(r.fontSize):parseFloat(r.lineHeight)
var s=this._stage.firstChild.children?this._stage.firstChild:this._stage
var o=[]
var h=[]
this._nodeMap=this.getNodeMap(s)
for(var c=0;c<this._nodeMap.length;c++){var l=this._nodeMap[c]
"word"===n&&" "===l.data[l.data.length-1]&&(l.data.length-=1)
h[c]=l.data
for(var u=0;u<l.data.length;u++)o.push(c)}this._defaultStringData=w(h)
this._nodeDataIndexes=w(o)
this._maxHeight="auto"===t?Object(C["a"])(this._parent).height:t*i
this._maxWidth=D(this._nodeMap.map((function(e){return e.node})),this._parent)
this._maxLines="auto"===t?Math.round(this._maxHeight/i):t}},{key:"getNodeMap",value:function(e){var t=this._options,n=t.shouldTruncateWhenInvisible,a=t.truncate
var r=Array.from(e.childNodes)
var i=[]
r.forEach((function(e){if(1===e.nodeType||3===e.nodeType){var t=!!n||L(e,false)
var r=e.textContent+" "
i.push({node:e,data:"word"===a?t?r.match(/.*?[\.\s\/]+?/g):"":t?e.textContent.split(""):[]})}}))
return i}},{key:"getNodeIndexes",value:function(e){var t=[]
for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)t.push([n,a])
return t}},{key:"domString",value:function(e){var t=Object.keys(e)
var n=""
for(var a=0;a<t.length;a++){var r=t[a]
var i=this._nodeMap[r]
var s=e[r].join("")
var o=k()(s)
if(1===i.node.nodeType){var h=i.node.nodeName
var c=i.node.attributes
var l=""
for(var u=0;u<c.length;u++){var d=c[u]
l+=" ".concat(d.nodeName,'="').concat(d.nodeValue,'"')}n+="<".concat(h).concat(l,">").concat(o,"</").concat(h,">")}else 3===i.node.nodeType&&(n+=o)}return n}},{key:"checkFit",value:function(e){var t=this.domString(e)
var n="auto"===this._options.maxLines?this._stage:this._parent
var a=true
this._stage.innerHTML=t
Object(C["a"])(n).height-this._maxHeight>.5&&(a=false)
return a}},{key:"truncate",value:function(){var e=this._options,t=e.ellipsis,n=e.ignore,a=e.position
var r="middle"===a
var i=false
var s=false
var o=0
var h=0
var c=""
var l=null
var u=null
if(!this._stage)return
l=w(this._defaultStringData)
h=r?0:this._nodeDataIndexes.length-1
while(!s){if(h<0)break
if(r){var d=this.getNodeIndexes(l)
var v=Math.floor(d.length/2)
u=d[v]
h>0&&l[u[0]].splice(u[1],1,t)}else{o=this._nodeDataIndexes[h]
if(h<this._nodeDataIndexes.length-1){l[o]=l[o].slice(0,-1)
l[o].push(t)}}s=this.checkFit(l)
if(s){for(var f=0;f<l.length;f++){var p=l[f]
c+=p.join("")}break}i=true
if(r){l[u[0]].splice(u[1],1)
h++}else{l[o]=l[o].slice(0,-1)
h--}}l=W(l,this._options,true)
if(i&&!r){c=M(c.split(t)[0],n,false,true,true)
c+=t}else if(i&&r){var g=c.split(t)
c=M(g[0],n,false,true,true)+t+M(g[1],n,true,false,true)}return{isTruncated:i,text:c,data:l,constraints:{width:this._maxWidth,height:this._maxHeight,lines:this._maxLines}}}}])
return e}()
var z=F
function R(e){var t=e.typography
return{fontFamily:t.fontFamily,lineHeight:t.lineHeight}}n.d(t,"a",(function(){return G}))
var A,B,J,q,Q,K
var P={componentId:"bjXfh",template:function(e){return"\n\n.bjXfh_daKB{display:block;font-family:".concat(e.fontFamily||"inherit",";overflow:hidden;word-wrap:break-word}\n\n.bjXfh_uUeq{height:100%}\n\n.bjXfh_exvv{display:block;max-height:0;visibility:hidden}")},truncated:"bjXfh_daKB",auto:"bjXfh_uUeq",spacer:"bjXfh_exvv"}
var G=(A=Object(j["a"])(),B=Object(g["i"])(R,P),J=x(["shouldTruncateWhenInvisible"]),A(q=B(q=J(q=(K=Q=function(e){Object(c["a"])(t,e)
function t(e){var n
Object(i["a"])(this,t)
n=Object(o["a"])(this,Object(h["a"])(t).call(this,e))
n.update=function(){n._ref&&n.setState(n.initialState)}
n.state=n.initialState
return n}Object(s["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.children
if(e){this.checkChildren()
this._text=Object(y["a"])(e)
this.truncate()
if(0===this.props.debounce)this._resizeListener=Object(m["a"])(this._ref,this.update)
else{this._debounced=Object(_["a"])(this.update,this.props.debounce,{leading:true,trailing:true})
this._resizeListener=Object(m["a"])(this._ref,this._debounced)}}}},{key:"componentWillUnmount",value:function(){this._resizeListener&&this._resizeListener.remove()
this._debounced&&this._debounced.cancel()}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.children,r=n.onUpdate
var i=this.state,s=i.isTruncated,o=i.needsSecondRender,h=i.truncatedText
if(a){if(e!==this.props){if(e.children!==this.props.children){this.checkChildren()
this._text=Object(y["a"])(a)}this.setState(this.initialState)
return}if(o||!s&&!this._wasTruncated)this.truncate()
else{r(s,h)
this._wasTruncated=s}}}},{key:"checkChildren",value:function(){}},{key:"truncate",value:function(){if(!this.state.needsSecondRender)return
if(b["a"]){var e=z(this._stage,Object(r["a"])({},this.props,{parent:this._ref,lineHeight:this.theme.lineHeight}))
if(e){var t=this.renderChildren(e.isTruncated,e.data,e.constraints.width)
this.setState({needsSecondRender:false,isTruncated:e.isTruncated,truncatedElement:t,truncatedText:e.text})}}else this.setState({needsSecondRender:false,isTruncated:false,truncatedElement:this._text,truncatedText:this._ref.textContent})}},{key:"renderChildren",value:function(e,t,n){if(!e)return this._text
var a=[]
for(var r=0;r<t.length;r++){var i=t[r]
var s=this._text.props.children[r]
var o=i.join("")
s&&s.props?a.push(Object(O["a"])(s,s.props,o)):a.push(o)}a.push(u.a.createElement("span",{className:P.spacer,style:{width:n||null}}))
var h=u.a.Children.map(a,(function(e){return e}))
return this._text.props?Object(O["a"])(this._text,this._text.props,h):h}},{key:"render",value:function(){var e,t=this
var n=this.state.truncatedElement
var r=this.props,i=r.maxLines,s=r.children
return u.a.createElement("span",{className:p()((e={},Object(a["a"])(e,P.truncated,true),Object(a["a"])(e,P.auto,"auto"===i),e)),ref:function(e){t._ref=e}},s&&(n?null:u.a.createElement("span",{ref:function(e){t._stage=e}},Object(y["a"])(s))),n)}},{key:"initialState",get:function(){return{isTruncated:false,needsSecondRender:true,truncatedElement:null,truncatedText:null}}}])
t.displayName="TruncateText"
return t}(l["Component"]),Q.propTypes={children:v.a.node.isRequired,maxLines:v.a.oneOfType([v.a.string,v.a.number]),position:v.a.oneOf(["end","middle"]),truncate:v.a.oneOf(["character","word"]),ellipsis:v.a.string,ignore:v.a.arrayOf(v.a.string),debounce:v.a.number,onUpdate:v.a.func,shouldTruncateWhenInvisible:v.a.bool},Q.defaultProps={maxLines:1,ellipsis:"…",truncate:"character",position:"end",ignore:[" ",".",","],debounce:0,onUpdate:function(e,t){}},K))||q)||q)||q)}}])

//# sourceMappingURL=23-c-269ec508df.js.map