(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[47],{"+dCS":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var o=n("ouhR")
var r=n.n(o)
class a{constructor(e){this.minToolHeight=e||450}tool_content_wrapper(e){let t=r()("div[data-tool-wrapper-id*='".concat(e,"']"))
t.length<=0&&1===r()(".tool_content_wrapper").length&&(t=r()(".tool_content_wrapper"))
return t}resize_tool_content_wrapper(e,t){let n=e
"number"!==typeof n&&(n=this.minToolHeight)
const o=t||this.tool_content_wrapper()
o.height(!e||this.minToolHeight>n?this.minToolHeight:n)}}},"0YqI":function(e,t,n){"use strict"
n.r(t)
n.d(t,"whitelist",(function(){return o}))
const o=["requestFullWindowLaunch","lti.resourceImported"]},"9cv0":function(e,t,n){var o={"./__tests__/handleLtiPostMessages.test.js":["Af1U",693],"./__tests__/lti.resourceImported.test.js":["yySz",630],"./__tests__/requestFullWindowLaunch.test.js":["w8Zi",631],"./handleLtiPostMessage.js":["y+46"],"./lti.resourceImported.js":["75OS",694],"./messageTypes.js":["0YqI"],"./requestFullWindowLaunch.js":["S3m7",695]}
function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=o[e],r=t[0]
return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)}
r.id="9cv0"
e.exports=r},Doqt:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var o=n("An8g")
n("q1tI")
n("17x9")
var r=n("eCn1")
var a=n("ouhR")
var i=n.n(a)
const s={border:"none",width:"100%",flexGrow:1}
function c(e){let t=e.tool,n=e.placement,a=e.acceptedResourceTypes,c=e.targetResourceType,l=e.allowItemSelection,d=e.selectableItems,u=e.onDismiss,b=e.open
const p={com_instructure_course_accept_canvas_resource_types:a,com_instructure_course_canvas_resource_type:c,com_instructure_course_allow_canvas_resource_selection:l,com_instructure_course_available_canvas_resources:d,display:"borderless",placement:n}
const h=-1===(null===t||void 0===t?void 0:t.base_url.indexOf("?"))?"?":"&"
const m="".concat(null===t||void 0===t?void 0:t.base_url).concat(h).concat(i.a.param(p))
const f=t?t.title:""
return Object(o["a"])(r["a"],{open:b,label:f,onDismiss:u,placement:"end",size:"regular",padding:"0"},void 0,Object(o["a"])("iframe",{"data-testid":"ltiIframe",style:s,src:m,title:f,"data-lti-launch":"true"}))}},WEeK:function(e,t,n){"use strict"
var o=n("rePB")
var r=n("Ff2n")
var a=n("1OyB")
var i=n("vuIU")
var s=n("md7G")
var c=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var u=n.n(d)
var b=n("17x9")
var p=n.n(b)
var h=n("TSYQ")
var m=n.n(h)
var f=n("cClk")
var g=n("nAyT")
var _=n("jtGx")
var v=n("E+IV")
var y=n("/UXv")
var w=n("sTNg")
var M=n("TstA")
var q=n("BTe1")
var B=n("J2CL")
function H(e){var t=e.colors,n=e.typography,o=e.borders,r=e.spacing,a=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:o.widthSmall,borderStyle:o.style,borderColor:t.borderMedium,borderRadius:o.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:r.small,focusOutlineWidth:o.widthMedium,focusOutlineStyle:o.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:a.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:a.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:a.inputHeightLarge}}H.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return C}))
var O,j,k,x,I
var S={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::-ms-input-placeholder,input[type].qBMHb_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var C=(O=Object(g["a"])("7.0.0",{label:"renderLabel",disabled:"interaction",readOnly:"interaction",required:"isRequired",inline:"display"}),j=Object(B["j"])(H,S),O(k=j(k=(I=x=function(e){Object(l["a"])(t,e)
function t(e){var n
Object(a["a"])(this,t)
n=Object(s["a"])(this,Object(c["a"])(t).call(this))
n.handleInputRef=function(e){n._input=e
n.props.inputRef(e)}
n.handleChange=function(e){n.props.onChange(e,e.target.value)}
n.handleBlur=function(e){n.props.onBlur(e)
n.setState({hasFocus:false})}
n.handleFocus=function(e){n.props.onFocus(e)
n.setState({hasFocus:true})}
n.state={hasFocus:false}
n._defaultId=Object(q["a"])("TextInput")
n._messagesId=Object(q["a"])("TextInput-messages")
return n}Object(i["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,a=t.size,i=t.textAlign,s=t.placeholder,c=t.value,l=t.defaultValue,d=t.disabled,b=t.readOnly,p=t.interaction,h=t.required,f=t.isRequired,g=Object(r["a"])(t,["type","size","textAlign","placeholder","value","defaultValue","disabled","readOnly","interaction","required","isRequired"])
var v=Object(_["b"])(g)
var y=(e={},Object(o["a"])(e,S.input,true),Object(o["a"])(e,S[a],a),Object(o["a"])(e,S["textAlign--".concat(i)],i),e)
var w=""
v["aria-describedby"]&&(w="".concat(v["aria-describedby"]))
this.hasMessages&&(w=""!==w?"".concat(w," ").concat(this._messagesId):this._messagesId)
return u.a.createElement("input",Object.assign({},v,{className:m()(y),defaultValue:l,value:c,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:f||h,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===p||d,readOnly:"readonly"===p||b,"aria-describedby":""!==w?w:null,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.interaction,r=t.disabled,a=t.width,i=t.inline,s=t.display,c=t.label,l=t.renderLabel,d=t.renderBeforeInput,b=t.renderAfterInput,p=t.messages,h=t.inputContainerRef,f=t.icon
var g=d||b||f
var _=(e={},Object(o["a"])(e,S.facade,true),Object(o["a"])(e,S.disabled,"disabled"===n||r),Object(o["a"])(e,S.invalid,this.invalid),Object(o["a"])(e,S.focused,this.state.hasFocus),e)
return u.a.createElement(w["a"],{id:this.id,label:Object(v["a"])(l||c),messagesId:this._messagesId,messages:p,inline:"inline-block"===s||i,width:a,inputContainerRef:h,layout:this.props.layout},u.a.createElement("span",{className:m()(_)},g?u.a.createElement(M["a"],{wrap:"wrap"},d&&u.a.createElement(M["a"].Item,{padding:"0 0 0 small"},Object(v["a"])(d)),u.a.createElement(M["a"].Item,{shouldGrow:true,shouldShrink:true},u.a.createElement(M["a"],{__dangerouslyIgnoreExperimentalWarnings:true},u.a.createElement(M["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(b||f)&&u.a.createElement(M["a"].Item,{padding:"0 small 0 0"},b?Object(v["a"])(b):Object(v["a"])(f))))):this.renderInput()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(y["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
t.displayName="TextInput"
return t}(d["Component"]),x.propTypes={renderLabel:p.a.oneOfType([p.a.node,p.a.func]),type:p.a.oneOf(["text","email","url","tel","search","password"]),id:p.a.string,value:Object(f["a"])(p.a.string),defaultValue:p.a.string,interaction:p.a.oneOf(["enabled","disabled","readonly"]),messages:p.a.arrayOf(w["e"].message),size:p.a.oneOf(["small","medium","large"]),textAlign:p.a.oneOf(["start","center"]),width:p.a.string,display:p.a.oneOf(["inline-block","block"]),placeholder:p.a.string,isRequired:p.a.bool,inputRef:p.a.func,inputContainerRef:p.a.func,renderBeforeInput:p.a.oneOfType([p.a.node,p.a.func]),renderAfterInput:p.a.oneOfType([p.a.node,p.a.func]),onChange:p.a.func,onBlur:p.a.func,onFocus:p.a.func,icon:p.a.func,label:p.a.oneOfType([p.a.node,p.a.func]),disabled:p.a.bool,readOnly:p.a.bool,required:p.a.bool,inline:p.a.bool},x.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:"enabled",isRequired:false,value:void 0,defaultValue:void 0,display:"block",placeholder:void 0,width:void 0,size:"medium",textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},I))||k)||k)},eCn1:function(e,t,n){"use strict"
var o=n("An8g")
var r=n("Ff2n")
var a=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var s=a["default"].scoped("tray")
var c=n("q1tI")
var l=n.n(c)
n("17x9")
var d=n("Mmr1")
var u=n("nhsw")
var b=n("msMH")
var p=n("7Hz5")
var h=n("p9+C")
var m=n("z3Sh")
var f=n("RtEy")
var g=n.n(f)
n.d(t,"a",(function(){return _}))
_.defaultProps={padding:"small",errorImageUrl:g.a}
function _(e){let t=e.padding,n=e.errorSubject,a=e.errorCategory,i=e.errorImageUrl,c=e.label,f=e.onDismiss,g=e.children,_=Object(r["a"])(e,["padding","errorSubject","errorCategory","errorImageUrl","label","onDismiss","children"])
return l.a.createElement(p["a"],Object.assign({label:c,onDismiss:f},_),Object(o["a"])("div",{style:{display:"flex",flexDirection:"column",height:"100vh"}},void 0,Object(o["a"])(u["a"].Item,{padding:"small medium"},void 0,Object(o["a"])(u["a"],{},void 0,Object(o["a"])(u["a"].Item,{grow:true,shrink:true},void 0,Object(o["a"])(b["a"],{ellipsis:true,level:"h3",as:"h2"},void 0,c)),Object(o["a"])(u["a"].Item,{},void 0,Object(o["a"])(d["a"],{onClick:f,size:"small"},void 0,s.t("Close"))))),Object(o["a"])("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,padding:t}},void 0,Object(o["a"])(h["a"],{errorComponent:Object(o["a"])(m["a"],{imageUrl:i,errorSubject:n,errorCategory:a})},void 0,g))))}},uErj:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var o=n("ouhR")
var r=n.n(o)
n("MWZS")
var a=n("5Ky4")
var i=n("+dCS")
var s=n("y+46")
let c
function l(e){d()
c=function(t){return t.returnValue=e||""}
window.addEventListener("beforeunload",c)}function d(){if(c){window.removeEventListener("beforeunload",c)
c=null}}function u(e){const t=document.getElementsByTagName("IFRAME")
for(let n=0;n<t.length;n+=1)if(t[n].contentWindow===e)return t[n]
return null}function b(e){if(e.data.messageType){Object(s["default"])(e)
return}try{const n=JSON.parse(e.data)
switch(n.subject){case"lti.frameResize":const o=new i["a"]
var t=n.height
t<=0&&(t=1)
const s=o.tool_content_wrapper(n.token||e.origin).data("height_overridden",true)
if(s.length>0)o.resize_tool_content_wrapper(t,s)
else{const n=u(e.source)
if(n){"number"===typeof t&&(t+="px")
n.height=t
n.style.height=t}}break
case"lti.fetchWindowSize":{const t=u(e.source)
if(t){n.height=window.innerHeight
n.width=window.innerWidth
n.offset=r()(".tool_content_wrapper").offset()
n.footer=r()("#fixed_bottom").height()||0
n.scrollY=window.scrollY
const e=JSON.stringify(n)
t.contentWindow.postMessage(e,"*")}break}case"lti.showModuleNavigation":true!==n.show&&false!==n.show||r()(".module-sequence-footer").toggle(n.show)
break
case"lti.scrollToTop":r()("html,body").animate({scrollTop:r()(".tool_content_wrapper").offset().top},"fast")
break
case"lti.setUnloadMessage":l(Object(a["a"])(n.message))
break
case"lti.removeUnloadMessage":d()
break
case"lti.screenReaderAlert":r.a.screenReaderFlashMessageExclusive(n.body.html||n.body)
break
case"lti.enableScrollEvents":{const t=u(e.source)
if(t){let e
window.addEventListener("scroll",()=>{e&&window.cancelAnimationFrame(e)
e=window.requestAnimationFrame(()=>{const e=JSON.stringify({subject:"lti.scroll",scrollY:window.scrollY})
t.contentWindow.postMessage(e,"*")})},false)}break}}}catch(e){(console.error||console.log).call(console,"invalid message received from")}}function p(){window.addEventListener("message",e=>{""!==e.data&&b(e)})}},"y+46":function(e,t,n){"use strict"
n.r(t)
n.d(t,"ltiState",(function(){return r}))
var o=n("0YqI")
const r={}
const a=async e=>{const t=e.data,r=t.messageType,a=t.data
let i
if(!o["whitelist"].includes(r)){console.error("invalid messageType: ".concat(r))
return false}try{const e=await n("9cv0")("./".concat(r,".js"))
i=e.default
i(a)
return true}catch(e){console.error('Error loading or executing message handler for "'.concat(r,'"'),e)}}
t["default"]=a}}])

//# sourceMappingURL=47-c-389d6f9cca.js.map