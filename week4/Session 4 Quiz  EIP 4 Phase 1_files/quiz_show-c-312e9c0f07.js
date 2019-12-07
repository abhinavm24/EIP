(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[537,59,63,92,118,122],{"/J48":function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("TSYQ")
var m=i.n(p)
var g=i("BTe1")
var f=i("J2CL")
var h=i("oXx0")
var b=i("jtGx")
var v=i("/UXv")
function y(e){var t=e.spacing,i=e.borders,n=e.colors,r=e.forms,o=e.shadows,a=e.typography
return{labelColor:n.textDarkest,labelFontFamily:a.fontFamily,labelFontWeight:a.fontWeightNormal,labelLineHeight:a.lineHeightCondensed,background:n.backgroundLightest,borderColor:n.borderDarkest,hoverBorderColor:n.borderDarkest,controlSize:"0.1875rem",focusBorderColor:n.borderBrand,focusBorderWidth:i.widthMedium,focusBorderStyle:i.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:a.fontSizeSmall,simpleFontSizeMedium:a.fontSizeMedium,simpleFontSizeLarge:a.fontSizeLarge,simpleFacadeMarginEnd:t.xSmall,toggleBorderRadius:i.radiusSmall,toggleBorderWidth:i.widthLarge,toggleBackgroundSuccess:n.backgroundSuccess,toggleBackgroundOff:n.backgroundDark,toggleBackgroundDanger:n.backgroundDanger,toggleBackgroundWarning:n.backgroundWarning,toggleHandleText:n.textLightest,toggleSmallHeight:r.inputHeightSmall,toggleMediumHeight:r.inputHeightMedium,toggleLargeHeight:r.inputHeightLarge,toggleShadow:o.depth1,toggleSmallFontSize:a.fontSizeXSmall,toggleMediumFontSize:a.fontSizeSmall,toggleLargeFontSize:a.fontSizeMedium}}y["canvas-a11y"]=y["canvas-high-contrast"]=function(e){var t=e.colors
return{toggleBackgroundOff:t.backgroundDarkest}}
y.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"],borderColor:e["ic-brand-font-color-dark"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]}}
i.d(t,"a",(function(){return C}))
var k,w,z,S,j
var x={componentId:"fNHEA",template:function(e){return"\n\n.fNHEA_bGBk{position:relative;width:100%}\n\n.fNHEA_bGBk:hover{cursor:default}\n\n.fNHEA_bOnW{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .fNHEA_bOnW{text-align:left}\n\n[dir=rtl] .fNHEA_bOnW{text-align:right}\n\n.fNHEA_cwos,input.fNHEA_cwos[type=radio]{font-size:inherit;left:0;line-height:inherit;margin:0;opacity:0.0001;padding:0;position:absolute;top:0;width:auto}\n\n.fNHEA_ywdX{opacity:0.5}\n\n.fNHEA_ywdX:hover{cursor:not-allowed}\n\n.fNHEA_eXrk{display:inline-block;vertical-align:middle;width:auto}\n\n.fNHEA_blJt{color:".concat(e.labelColor||"inherit",";flex:1 1 auto;font-family:").concat(e.labelFontFamily||"inherit",";font-weight:").concat(e.labelFontWeight||"inherit",";line-height:").concat(e.labelLineHeight||"inherit","}\n\n.fNHEA_cAug .fNHEA_bOnW{align-items:flex-start;display:flex}\n\n.fNHEA_cAug .fNHEA_cSXm{-webkit-margin-end:").concat(e.simpleFacadeMarginEnd||"inherit",";-webkit-margin-start:0;background:").concat(e.background||"inherit",";border:0.125rem solid ").concat(e.borderColor||"inherit",";border-radius:100%;box-sizing:border-box;display:block;flex-shrink:0;margin-inline-end:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-inline-start:0;min-width:1rem;position:relative;transition:all 0.2s ease-out}\n\n[dir=ltr] .fNHEA_cAug .fNHEA_cSXm{margin-left:0;margin-right:").concat(e.simpleFacadeMarginEnd||"inherit","}\n\n[dir=rtl] .fNHEA_cAug .fNHEA_cSXm{margin-left:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-right:0}\n\n.fNHEA_cAug .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",';border-radius:100%;box-sizing:border-box;content:"";height:calc(100% + 0.75rem);left:-0.375rem;opacity:0;pointer-events:none;position:absolute;top:-0.375rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.75rem)}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cSXm{height:').concat(e.simpleFacadeSmallSize||"inherit",";width:").concat(e.simpleFacadeSmallSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_blJt{font-size:").concat(e.simpleFontSizeSmall||"inherit","}\n\n.fNHEA_cAug.fNHEA_doqw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetSmall||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cSXm{height:").concat(e.simpleFacadeMediumSize||"inherit",";width:").concat(e.simpleFacadeMediumSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_blJt{font-size:").concat(e.simpleFontSizeMedium||"inherit","}\n\n.fNHEA_cAug.fNHEA_ycrn .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetMedium||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cSXm{height:").concat(e.simpleFacadeLargeSize||"inherit",";width:").concat(e.simpleFacadeLargeSize||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_blJt{font-size:").concat(e.simpleFontSizeLarge||"inherit","}\n\n.fNHEA_cAug.fNHEA_cMDj .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetLarge||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:hover+.fNHEA_bOnW .fNHEA_cSXm{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit",";border-color:").concat(e.hoverBorderColor||"inherit",";box-shadow:inset 0 0 0 ").concat(e.controlSize||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm{background:").concat(e.background||"inherit","}\n\n.fNHEA_cAug .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}\n\n.fNHEA_cjSw .fNHEA_bOnW{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;position:relative;user-select:none}\n\n.fNHEA_cjSw .fNHEA_blJt{align-items:center;display:flex;line-height:1;min-width:0.0625rem;overflow:hidden;position:relative;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm{border-radius:").concat(e.toggleBorderRadius||"inherit",";box-shadow:").concat(e.toggleShadow||"inherit",";display:block;height:100%;left:0;top:0;visibility:hidden;width:100%;z-index:1}\n\n.fNHEA_cjSw .fNHEA_cSXm,.fNHEA_cjSw .fNHEA_cSXm:before{box-sizing:border-box;position:absolute}\n\n.fNHEA_cjSw .fNHEA_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",' + 0.0625rem);content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;top:-0.25rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.5rem)}\n\n.fNHEA_cjSw.fNHEA_cOXX .fNHEA_cSXm{background-color:').concat(e.toggleBackgroundSuccess||"inherit","}\n\n.fNHEA_cjSw.fNHEA_zGXc .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundDanger||"inherit","}\n\n.fNHEA_cjSw.fNHEA_eRqw .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundWarning||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ksNK .fNHEA_cSXm{background-color:").concat(e.toggleBackgroundOff||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW{height:").concat(e.toggleSmallHeight||"inherit",";padding:0 0.5rem}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleSmallFontSize||"inherit",";height:").concat(e.toggleSmallHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_doqw .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleSmallFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW{height:").concat(e.toggleMediumHeight||"inherit",";padding:0 0.875rem}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleMediumFontSize||"inherit",";height:").concat(e.toggleMediumHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_ycrn .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleMediumFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW{height:").concat(e.toggleLargeHeight||"inherit",";padding:0 1rem}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt{font-size:").concat(e.toggleLargeFontSize||"inherit",";height:").concat(e.toggleLargeHeight||"inherit","}\n\n.fNHEA_cjSw.fNHEA_cMDj .fNHEA_bOnW .fNHEA_blJt svg{font-size:calc(").concat(e.toggleLargeFontSize||"inherit"," + 0.375rem)}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_cSXm{visibility:visible}\n\n.fNHEA_cjSw .fNHEA_cwos:checked+.fNHEA_bOnW .fNHEA_blJt{color:").concat(e.toggleHandleText||"inherit","}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_blJt{text-decoration:underline}\n\n.fNHEA_cjSw .fNHEA_cwos:focus+.fNHEA_bOnW .fNHEA_cSXm:before{opacity:1;transform:scale(1)}")},root:"fNHEA_bGBk",control:"fNHEA_bOnW",input:"fNHEA_cwos",disabled:"fNHEA_ywdX",inline:"fNHEA_eXrk",label:"fNHEA_blJt",simple:"fNHEA_cAug",facade:"fNHEA_cSXm",small:"fNHEA_doqw",medium:"fNHEA_ycrn",large:"fNHEA_cMDj",toggle:"fNHEA_cjSw",success:"fNHEA_cOXX",danger:"fNHEA_zGXc",warning:"fNHEA_eRqw",off:"fNHEA_ksNK"}
var C=(k=Object(h["a"])(),w=Object(f["i"])(y,x),k(z=w(z=(j=S=function(e){Object(c["a"])(t,e)
function t(e){var i
Object(r["a"])(this,t)
i=Object(a["a"])(this,Object(s["a"])(t).call(this,e))
i.handleClick=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}i.props.onClick(e)}
i.handleChange=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}"undefined"===typeof i.props.checked&&i.setState({checked:!i.state.checked})
i.props.onChange(e)}
i.state={}
"undefined"===typeof e.checked&&(i.state.checked=false)
i._defaultId=Object(g["a"])("RadioInput")
return i}Object(o["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"render",value:function(){var e,i=this
var r=this.props,o=r.disabled,a=r.readOnly,s=r.label,c=r.variant,_=r.size,u=r.inline,l=r.context,p=r.value,g=r.name
var f=Object(b["a"])(this.props,t.propTypes)
var h=(e={},Object(n["a"])(e,x.root,true),Object(n["a"])(e,x.disabled,o),Object(n["a"])(e,x[c],true),Object(n["a"])(e,x[l],"toggle"===c),Object(n["a"])(e,x[_],true),Object(n["a"])(e,x["inline"],u),e)
return d.a.createElement("div",{className:m()(h)},d.a.createElement("input",Object.assign({},f,{id:this.id,ref:function(e){i._input=e},value:p,name:g,checked:this.checked,type:"radio",className:x.input,disabled:o||a,"aria-disabled":o||a?"true":null,onChange:this.handleChange,onClick:this.handleClick})),d.a.createElement("label",{className:x.control,htmlFor:this.id},d.a.createElement("span",{className:x.facade,"aria-hidden":"true"}),d.a.createElement("span",{className:x.label},s)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"checked",get:function(){return"undefined"===typeof this.props.checked?this.state.checked:this.props.checked}}])
t.displayName="RadioInput"
return t}(_["Component"]),S.propTypes={label:l.a.node.isRequired,value:l.a.oneOfType([l.a.string,l.a.number]),id:l.a.string,name:l.a.string,checked:l.a.bool,disabled:l.a.bool,readOnly:l.a.bool,variant:l.a.oneOf(["simple","toggle"]),size:l.a.oneOf(["small","medium","large"]),context:l.a.oneOf(["success","warning","danger","off"]),inline:l.a.bool,onClick:l.a.func,onChange:l.a.func},S.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},j))||z)||z)},"1Lgu":function(e,t,i){"use strict"
var n=i("ODXe")
var r=i("pQTu")
var o=i("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"message_sent_9ff3a79d":"تم إرسال الرسالة!","message_students_for_course_name_e55f8077":"مراسلة الطلاب لـ %{course_name}","public_message_students":{"send_message":"إرسال رسالة"},"remove_student_from_recipients_4b206e35":"إزالة %{student} من قائمة المستلمين","send_message_6ccc90e8":"إرسال رسالة","sending_message_8ac5bc90":"جارٍ إرسال رسالة...","sending_message_failed_please_try_again_b53cc904":"فشل إرسال الرسالة، يرجى المحاولة مرة أخرى"},"cy":{"message_sent_9ff3a79d":"Mae’r neges wedi’i hanfon!","message_students_for_course_name_e55f8077":"Anfon neges at Fyfyrwyr am %{course_name}","public_message_students":{"send_message":"Anfon Neges"},"remove_student_from_recipients_4b206e35":"Tynnu %{student} o’r rhestr derbynwyr","send_message_6ccc90e8":"Anfon Neges","sending_message_8ac5bc90":"Wrthi’n anfon neges...","sending_message_failed_please_try_again_b53cc904":"Wedi methu anfon neges, rhowch gynnig arall arni"},"da":{"message_sent_9ff3a79d":"Besked sendt!","message_students_for_course_name_e55f8077":"Send besked til studerende for %{course_name}","public_message_students":{"send_message":"Send besked"},"remove_student_from_recipients_4b206e35":"Fjern %{student} fra modtagere","send_message_6ccc90e8":"Send besked","sending_message_8ac5bc90":"Sender besked ...","sending_message_failed_please_try_again_b53cc904":"Afsendelse af besked mislykkedes, prøv igen"},"da-x-k12":{"message_sent_9ff3a79d":"Besked sendt!","message_students_for_course_name_e55f8077":"Send besked til elever for %{course_name}","public_message_students":{"send_message":"Send besked"},"remove_student_from_recipients_4b206e35":"Fjern %{student} fra modtagere","send_message_6ccc90e8":"Send besked","sending_message_8ac5bc90":"Sender besked ...","sending_message_failed_please_try_again_b53cc904":"Afsendelse af besked mislykkedes, prøv igen"},"de":{"message_sent_9ff3a79d":"Nachricht versandt!","message_students_for_course_name_e55f8077":"Studenten benachrichtigen wegen %{course_name}","public_message_students":{"send_message":"Nachricht senden"},"remove_student_from_recipients_4b206e35":"%{student} aus den Empfängern entfernen","send_message_6ccc90e8":"Nachricht senden","sending_message_8ac5bc90":"Nachricht wird gesendet ...","sending_message_failed_please_try_again_b53cc904":"Senden der Nachrichten ist fehlgeschlagen. Bitte erneut versuchen"},"el":{"message_sent_9ff3a79d":"Μήνυμα εστάλη!","message_students_for_course_name_e55f8077":"Αποστολή μηνύματος στους Σπουδαστές για το μάθημα %{course_name}","public_message_students":{"send_message":"Αποστολή Μηνύματος"},"remove_student_from_recipients_4b206e35":"Αφαίρεση του/της %{student} από τους παραλήπτες"},"en-AU":{"message_sent_9ff3a79d":"Message sent!","message_students_for_course_name_e55f8077":"Message students for %{course_name}","public_message_students":{"send_message":"Send Message"},"remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send Message","sending_message_8ac5bc90":"Sending Message...","sending_message_failed_please_try_again_b53cc904":"Sending Message Failed. Please try again."},"en-AU-x-unimelb":{"message_sent_9ff3a79d":"Message sent!","public_message_students":{"send_message":"Send Message"},"remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send Message","sending_message_8ac5bc90":"Sending Message...","sending_message_failed_please_try_again_b53cc904":"Sending Message Failed. Please try again."},"en-CA":{"message_sent_9ff3a79d":"Message sent!","message_students_for_course_name_e55f8077":"Message Students for %{course_name}","public_message_students":{"send_message":"Send Message"},"remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send Message","sending_message_8ac5bc90":"Sending Message...","sending_message_failed_please_try_again_b53cc904":"Sending Message Failed, please try again"},"en-GB":{"message_sent_9ff3a79d":"Message sent!","message_students_for_course_name_e55f8077":"Message students for %{course_name}","public_message_students":{"send_message":"Send message"},"remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send message","sending_message_8ac5bc90":"Sending message...","sending_message_failed_please_try_again_b53cc904":"Sending message failed. Please try again."},"en-GB-x-lbs":{"message_sent_9ff3a79d":"Message sent!","remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send message","sending_message_8ac5bc90":"Sending message...","sending_message_failed_please_try_again_b53cc904":"Sending message failed. Please try again."},"en-GB-x-ukhe":{"message_sent_9ff3a79d":"Message sent!","message_students_for_course_name_e55f8077":"Message students for %{course_name}","public_message_students":{"send_message":"Send message"},"remove_student_from_recipients_4b206e35":"Remove %{student} from recipients","send_message_6ccc90e8":"Send message","sending_message_8ac5bc90":"Sending message...","sending_message_failed_please_try_again_b53cc904":"Sending message failed. Please try again."},"es":{"message_sent_9ff3a79d":"¡Mensaje enviado!","message_students_for_course_name_e55f8077":"Mensaje a estudiantes para %{course_name}","public_message_students":{"send_message":"Enviar mensaje"},"remove_student_from_recipients_4b206e35":"Eliminar %{student} desde los destinatarios","send_message_6ccc90e8":"Enviar mensaje","sending_message_8ac5bc90":"Enviando mensaje...","sending_message_failed_please_try_again_b53cc904":"La presentación del mensaje ha fallado, inténtelo nuevamente"},"fa":{"message_sent_9ff3a79d":"پیام ارسال شد!","message_students_for_course_name_e55f8077":"ارسال پیام برای دانشجویان درس %{course_name}","public_message_students":{"send_message":"ارسال پیام"},"remove_student_from_recipients_4b206e35":"حذف %{student} از گیرنده ها","send_message_6ccc90e8":"ارسال پیام","sending_message_8ac5bc90":"در حال ارسال پیام...","sending_message_failed_please_try_again_b53cc904":"ارسال پیام انجام نشد، لطفا دوباره سعی کنید"},"fi":{"message_sent_9ff3a79d":"Viesti lähetetty!","message_students_for_course_name_e55f8077":"Lähetä viesti opiskelijoille, jotka%{course_name}","public_message_students":{"send_message":"Lähetä viesti"},"remove_student_from_recipients_4b206e35":"Poista %{student} vastaanottajilta","send_message_6ccc90e8":"Lähetä viesti","sending_message_8ac5bc90":"Lähetetään viestiä...","sending_message_failed_please_try_again_b53cc904":"Viestin lähetys epäonnistui, yritä uudelleen"},"fr":{"message_sent_9ff3a79d":"Message envoyé !","message_students_for_course_name_e55f8077":"Envoyer un message aux étudiants pour %{course_name}","public_message_students":{"send_message":"Envoyer message"},"remove_student_from_recipients_4b206e35":"Supprimer %{student} des destinataires","send_message_6ccc90e8":"Envoyer message","sending_message_8ac5bc90":"Envoi du message...","sending_message_failed_please_try_again_b53cc904":"L’envoi du message a échoué, veuillez réessayer"},"fr-CA":{"message_sent_9ff3a79d":"Message envoyé!","message_students_for_course_name_e55f8077":"Envoyer un message aux étudiants pour le cours %{course_name}","public_message_students":{"send_message":"Envoyer un message"},"remove_student_from_recipients_4b206e35":"Retirer %{student} des destinataires","send_message_6ccc90e8":"Envoyer un message","sending_message_8ac5bc90":"Envoi du message...","sending_message_failed_please_try_again_b53cc904":"L’envoi du message a échoué, veuillez réessayer"},"he":{"message_sent_9ff3a79d":"הודעה נשלחה!","message_students_for_course_name_e55f8077":"הודעה לתלמידי הקורס %{course_name}","public_message_students":{"send_message":"שליחת הודעה"},"remove_student_from_recipients_4b206e35":"הסרת %{student} מרשימת הנמענים","send_message_6ccc90e8":"שליחת הודעה","sending_message_8ac5bc90":"שולח הודעה...","sending_message_failed_please_try_again_b53cc904":"משלוח הודעה נכשל, יש לנסות שוב"},"ht":{"message_sent_9ff3a79d":"Mesaj ale!","message_students_for_course_name_e55f8077":"Voye mesaj bay Elèv pou %{course_name}","public_message_students":{"send_message":"Voye Mesaj"},"remove_student_from_recipients_4b206e35":"Elimine %{student} nan destinatè yo","send_message_6ccc90e8":"Voye Mesaj","sending_message_8ac5bc90":"Voye Mesaj...","sending_message_failed_please_try_again_b53cc904":"Echèk Anvwa mesaj, tanpri eseye ankò"},"hu":{"message_sent_9ff3a79d":"Az üzenet elküldve!","message_students_for_course_name_e55f8077":"Üzenet a következő kurzus hallgatóinak: %{course_name}","public_message_students":{"send_message":"Üzenetküldés"},"remove_student_from_recipients_4b206e35":"%{student} nevű címzett eltávolítása","send_message_6ccc90e8":"Üzenetküldés","sending_message_8ac5bc90":"Üzenet küldése...","sending_message_failed_please_try_again_b53cc904":"Az üzenet küldése sikertelen, kérjük, próbálja újra!"},"hy":{"message_sent_9ff3a79d":"Հաղորդագրությունն ուղարկված է","message_students_for_course_name_e55f8077":"Ուղարկել հաղորդագրություն %{course_name} ունկնդիրներին","public_message_students":{"send_message":"Ուղարկել հաղորդագրություն"},"remove_student_from_recipients_4b206e35":"Ջնջել %{student} -ին ստացողների ցանկից"},"is":{"message_sent_9ff3a79d":"Skilaboð send!","message_students_for_course_name_e55f8077":"Senda nemendum í námskeiðinu %{course_name} skilaboð","public_message_students":{"send_message":"Senda skilaboð"},"remove_student_from_recipients_4b206e35":"Fjarlægja %{student} úr viðtakendum","send_message_6ccc90e8":"Senda skilaboð","sending_message_8ac5bc90":"Sendi skilaboð ...","sending_message_failed_please_try_again_b53cc904":"Ekki tókst að senda skilaboð, reyndu aftur"},"it":{"message_sent_9ff3a79d":"Messaggio inviato.","message_students_for_course_name_e55f8077":"Invia messaggio agli studenti per %{course_name}","public_message_students":{"send_message":"Invia messaggio"},"remove_student_from_recipients_4b206e35":"Rimuovi %{student} dai destinatari","send_message_6ccc90e8":"Invia messaggio","sending_message_8ac5bc90":"Invio messaggio in corso...","sending_message_failed_please_try_again_b53cc904":"Invio messaggio non riuscito. Riprova"},"ja":{"message_sent_9ff3a79d":"メッセージが送信されました!","message_students_for_course_name_e55f8077":"%{course_name}の受講生にメッセージを送る","public_message_students":{"send_message":"メッセージを送信"},"remove_student_from_recipients_4b206e35":"受信者から%{student}を削除する","send_message_6ccc90e8":"メッセージを送信","sending_message_8ac5bc90":"メッセージを送信しています...","sending_message_failed_please_try_again_b53cc904":"メッセージの送信に失敗しました。もう一度やり直してください"},"ko":{"message_students_for_course_name_e55f8077":"%{course_name}의 학생 관리","public_message_students":{"send_message":"메시지 보내기"}},"mi":{"message_sent_9ff3a79d":"Karere kua tukuna!","message_students_for_course_name_e55f8077":"Karere ngā ākonga mō te %{course_name}","public_message_students":{"send_message":"Tukua Karere"},"remove_student_from_recipients_4b206e35":"Tangohia %{student} i ngā kaiwhiwhi","send_message_6ccc90e8":"Tukua Karere","sending_message_8ac5bc90":"Te tuku Karere ...","sending_message_failed_please_try_again_b53cc904":"Te tuku Karere rahua, tēnā ngana anō"},"nb":{"message_sent_9ff3a79d":"Melding sendt!","message_students_for_course_name_e55f8077":"Send beskjed til studenter i %{course_name}","public_message_students":{"send_message":"Send melding"},"remove_student_from_recipients_4b206e35":"Fjerne %{student} fra mottakerlisten","send_message_6ccc90e8":"Send melding","sending_message_8ac5bc90":"Sender melding...","sending_message_failed_please_try_again_b53cc904":"Sending av melding feilet, vennligst prøv igjen"},"nb-x-k12":{"message_sent_9ff3a79d":"Melding sendt!","message_students_for_course_name_e55f8077":"Send beskjed til elever i %{course_name}","public_message_students":{"send_message":"Send melding"},"remove_student_from_recipients_4b206e35":"Fjerne %{student} fra mottakerlisten","send_message_6ccc90e8":"Send melding","sending_message_8ac5bc90":"Sender melding...","sending_message_failed_please_try_again_b53cc904":"Sending av melding feilet, vennligst prøv igjen"},"nl":{"message_sent_9ff3a79d":"Bericht verzonden!","message_students_for_course_name_e55f8077":"Bericht naar cursisten voor %{course_name}","public_message_students":{"send_message":"Bericht versturen"},"remove_student_from_recipients_4b206e35":"%{student} uit geadresseerden verwijderen","send_message_6ccc90e8":"Bericht versturen","sending_message_8ac5bc90":"Bericht aan het versturen...","sending_message_failed_please_try_again_b53cc904":"Inleveren van bericht mislukt, probeer het opnieuw"},"nn":{"message_sent_9ff3a79d":"Meldinga er send","message_students_for_course_name_e55f8077":"Send melding til studentar i %{course_name}","public_message_students":{"send_message":"Send melding"},"remove_student_from_recipients_4b206e35":"Fjern %{student} frå mottakarar","send_message_6ccc90e8":"Send melding","sending_message_8ac5bc90":"Sender melding...","sending_message_failed_please_try_again_b53cc904":"Sending av melding mislukkast, prøv på nytt seinare"},"pl":{"message_sent_9ff3a79d":"Wiadomość wysłana!","message_students_for_course_name_e55f8077":"Wiadomość dla uczestników dot %{course_name}","public_message_students":{"send_message":"Wyślij wiadomość"},"remove_student_from_recipients_4b206e35":"Usuń %{student} z odbiorców","send_message_6ccc90e8":"Wyślij wiadomość","sending_message_8ac5bc90":"Wysyłanie wiadomości...","sending_message_failed_please_try_again_b53cc904":"Wysyłanie wiadomości nie powiodło się, spróbuj ponownie"},"pt":{"message_sent_9ff3a79d":"Mensagem enviada!","message_students_for_course_name_e55f8077":"Mensagem a alunos para %{course_name}","public_message_students":{"send_message":"Enviar Mensagem"},"remove_student_from_recipients_4b206e35":"Remover %{student} dos destinatários","send_message_6ccc90e8":"Enviar Mensagem","sending_message_8ac5bc90":"Enviando mensagem...","sending_message_failed_please_try_again_b53cc904":"Falha no envio da mensagem, tente novamente"},"pt-BR":{"message_sent_9ff3a79d":"Mensagem enviada!","message_students_for_course_name_e55f8077":"Enviar mensagem aos alunos para %{course_name}","public_message_students":{"send_message":"Enviar mensagem"},"remove_student_from_recipients_4b206e35":"Remover %{student} de destinatários","send_message_6ccc90e8":"Enviar mensagem","sending_message_8ac5bc90":"Enviando mensagem...","sending_message_failed_please_try_again_b53cc904":"Falha no envio da mensagem, tente novamente"},"ru":{"message_sent_9ff3a79d":"Сообщение отправлено!","message_students_for_course_name_e55f8077":"Отправить сообщение студентам для %{course_name}","public_message_students":{"send_message":"Отправить сообщение"},"remove_student_from_recipients_4b206e35":"Удалить %{student} из получателей","send_message_6ccc90e8":"Отправить сообщение","sending_message_8ac5bc90":"Отправка сообщения...","sending_message_failed_please_try_again_b53cc904":"Ошибка отправки сообщения, повторите попытку"},"sl":{"message_sent_9ff3a79d":"Sporočilo je poslano.","remove_student_from_recipients_4b206e35":"Odstrani študenta %{student} iz prejemnikov","send_message_6ccc90e8":"Pošlji sporočilo","sending_message_8ac5bc90":"Pošiljanje sporočila ...","sending_message_failed_please_try_again_b53cc904":"Pošiljanje sporočila ni uspelo, poskusite znova."},"sv":{"message_sent_9ff3a79d":"Meddelandet har skickats!","message_students_for_course_name_e55f8077":"Meddela studenter om %{course_name}","public_message_students":{"send_message":"Skicka meddelande"},"remove_student_from_recipients_4b206e35":"Ta bort %{student} från mottagare","send_message_6ccc90e8":"Skicka meddelande","sending_message_8ac5bc90":"Skickar meddelande...","sending_message_failed_please_try_again_b53cc904":"Meddelandet skickades inte, försök igen"},"sv-x-k12":{"message_sent_9ff3a79d":"Meddelandet har skickats!","remove_student_from_recipients_4b206e35":"Ta bort %{student} från mottagare","send_message_6ccc90e8":"Skicka meddelande","sending_message_8ac5bc90":"Skickar meddelande...","sending_message_failed_please_try_again_b53cc904":"Meddelandet skickades inte, försök igen"},"tr":{"message_sent_9ff3a79d":"Mesaj gönderildi!","message_students_for_course_name_e55f8077":"%{course_name} dersi Öğrencilerine Mesaj Gönder","public_message_students":{"send_message":"Mesaj Gönder"},"send_message_6ccc90e8":"Mesaj Gönder","sending_message_8ac5bc90":"Mesajınız Gönderiliyor...","sending_message_failed_please_try_again_b53cc904":"Mesah gönderimi başarısız, lütfen tekrar deneyin"},"uk":{"message_sent_9ff3a79d":"Повідомлення відправлено!","remove_student_from_recipients_4b206e35":"Видалити %{student} зі списку отримувачів","send_message_6ccc90e8":"Відправити повідомлення","sending_message_8ac5bc90":"Надіслати повідомлення...","sending_message_failed_please_try_again_b53cc904":"Не вдалося надіслати повідомлення, спробуйте ще раз"},"zh-Hans":{"message_sent_9ff3a79d":"邮件已发送！","message_students_for_course_name_e55f8077":"给学生发送%{course_name}的消息","public_message_students":{"send_message":"发送消息"},"remove_student_from_recipients_4b206e35":"从收件人中移除 %{student}","send_message_6ccc90e8":"发送消息","sending_message_8ac5bc90":"发送信息...","sending_message_failed_please_try_again_b53cc904":"发送信息失败，请再尝试"},"zh-Hant":{"message_sent_9ff3a79d":"訊息已發送！","message_students_for_course_name_e55f8077":"針對 %{course_name} 通知學生","public_message_students":{"send_message":"發送訊息"},"remove_student_from_recipients_4b206e35":"從收件人中刪除 %{student}","send_message_6ccc90e8":"傳送訊息","sending_message_8ac5bc90":"正在發送郵件...","sending_message_failed_please_try_again_b53cc904":"發送郵件失敗，請再試一次"}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("public_message_students")
var s=i("ouhR")
var c=i.n(s)
var _=i("yE80")
var d=i("HbFp")
i("Z+Ib")
i("YGE8")
i("p6Wi")
let u={}
function l(){const e=g()
m(0==e.find("#body").val().length||0==e.find(".student:not(.blank):visible").length)}window.messageStudents=function(e){const t=g()
u=e
t.find(".message_types").empty()
for(let i=0,n=e.options.length;i<n;i++){const n=c()("<option/>")
const r=e.options[i]
n.val(i).text(r.text)
t.find(".message_types").append(n)}const i=e.title,n=t.find("ul li.blank:first"),r=t.find("ul"),o={}
t.find("ul li:not(.blank)").remove()
const s=e.students.slice()
s.sort(_["a"].byKey("sortableName"))
for(let e=0;e<s.length;e++){const t=s[e]
const i=n.clone(true).removeClass("blank")
i.find(".name").text(t.name)
i.find(".score").text(t.score)
const _=a.t("Remove %{student} from recipients",{student:t.name})
const d=i.find(".remove-button")
d.attr("title",_).append(c()("<span class='screenreader-only'></span>").text(_))
d.click((function(e){e.preventDefault()
const t=c()(this).closest("li")
t.hide("fast",l)
const i=t.nextAll(":visible:first")
i.length?c()("button",i).focus():c()("#message_assignment_recipients #subject").focus()}))
i.data("id",t.id)
i.user_data=t
r.append(i.show())
o[t.id]=i}r.show()
const d=a.t("Message Students for %{course_name}",{course_name:i})
t.data("students_hash",o),t.find(".asset_title").text(i)
t.find(".out_of").showIf(null!=e.points_possible)
t.find(".send_button").text(a.t("send_message","Send Message"))
t.find(".points_possible").text(a.n(e.points_possible))
t.find("[name=context_code]").val(e.context_code)
t.find("textarea").val("")
t.find("select")[0].selectedIndex=0
t.find("select").change()
t.dialog({width:600,modal:true,open:(e,i)=>{t.closest(".ui-dialog").attr("role","dialog").attr("aria-label",d)},close:(e,i)=>{t.closest(".ui-dialog").removeAttr("role").removeAttr("aria-label")}}).dialog("open").dialog("option","title",d).on("dialogclose",e.onClose)}
c()(document).ready(()=>{const e=g()
e.find("button").click(e=>{const t=c()(e.target)
if(t.hasClass("disabled")){e.preventDefault()
e.stopPropagation()}})
c()("#message_assignment_recipients").formSubmit({processData(e){const t=[]
c()(this).find(".student:visible").each((function(){t.push(c()(this).data("id"))}))
if(0==t.length)return false
e.recipients=t.join(",")
return e},beforeSubmit(e){p(true)
c()(this).find(".send_button").text(a.t("Sending Message..."))},success(e){c.a.flashMessage(a.t("Message sent!"))
p(false)
c()(this).find(".send_button").text(a.t("Send Message"))
c()("#message_students_dialog").dialog("close")},error(e){p(false)
c()(this).find(".send_button").text(a.t("Sending Message Failed, please try again"))}})
const t=function(){const t=parseInt(e.find("select").val(),10)||0
const i=u.options[t]
const r=e.data("students_hash")
let o=d["a"].parse(e.find(".cutoff_score").val())
isNaN(o)&&(o=null)
const a=Object.values(r)
let s=[]
r&&(i&&i.callback?s=i.callback.call(window.messageStudents,o,a):u.callback&&(s=u.callback.call(window.messageStudents,i.text,o,a)))
u.subjectCallback&&e.find("[name=subject]").val(u.subjectCallback(i.text,o))
e.find(".cutoff_holder").showIf(i.cutoff)
e.find(".student_list").toggleClass("show_score",!!(i.cutoff||i.score))
p(0===s.length)
const c=new Set(s)
Object.entries(r).forEach(e=>{let t=Object(n["a"])(e,2),i=t[0],r=t[1]
r.showIf(c.has(i))})}
const i=function(){e.dialog("close")}
e.find(".cancel_button").click(i)
e.find("select").change(t).change(l)
e.find(".cutoff_score").bind("change blur keyup",t).bind("change blur keyup",l)
e.find("#body").bind("change blur keyup",l)})
function p(e,t){null==t&&(t=g().find("button"))
t.toggleClass("disabled",e).attr("aria-disabled",e)}function m(e){p(e,g().find(".send_button"))}function g(){return c()("#message_students_dialog")}t["a"]=messageStudents},"1xB4":function(e,t,i){"use strict"
var n={EVT_PAGE_FOCUSED:"page_focused",EVT_PAGE_BLURRED:"page_blurred",EVT_QUESTION_VIEWED:"question_viewed",EVT_QUESTION_FLAGGED:"question_flagged",EVT_SESSION_STARTED:"session_started",EVT_PRIORITY_LOW:0,EVT_PRIORITY_HIGH:100,EVT_STATE_PENDING_DELIVERY:"pending_delivery",EVT_STATE_IN_DELIVERY:"in_delivery",EVT_STATE_DELIVERED:"delivered",EVT_STORAGE_KEY:"qla_events",EVT_STORAGE_MEMORY:"memory",EVT_STORAGE_LOCAL_STORAGE:"localStorage"}
var r=i("GLiE")
function o(){let e=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const i=(e+16*Math.random())%16|0
e=Math.floor(e/16)
const n="x"===t?i:7&i|8
return n.toString(16)})}class a{static fromJSON(e){const t=new a(e.event_type,e.event_data)
t.recordedAt=new Date(e.client_timestamp)
return t}constructor(e,t){if(!e)throw new Error("An event type must be specified.")
this._id=o()
this._state=n.EVT_STATE_PENDING_DELIVERY
this.type=e
this.data=Object(r["clone"])(t)
this.recordedAt=new Date}isPendingDelivery(){return this._state===n.EVT_STATE_PENDING_DELIVERY}isBeingDelivered(){return this._state===n.EVT_STATE_IN_DELIVERY}wasDelivered(){return this._state===n.EVT_STATE_DELIVERED}toJSON(){return{event_type:this.type,event_data:this.data,client_timestamp:this.recordedAt}}toString(){return JSON.stringify(this.toJSON())}}class s{constructor(e){this._events=e}isEmpty(){return 0===this._events.length}markPendingDelivery(){return this._events.forEach(e=>e._state=n.EVT_STATE_PENDING_DELIVERY)}markBeingDelivered(){return this._events.forEach(e=>e._state=n.EVT_STATE_IN_DELIVERY)}toJSON(){return this._events.map(e=>e.toJSON())}}var c=i("zrOs")
var _=i.n(c)
const d=[n.EVT_STORAGE_MEMORY,n.EVT_STORAGE_LOCAL_STORAGE]
class u{static setStorageAdapter(e){if(-1===d.indexOf(e))throw new Error('Unsupported storage adapter "'.concat(e,'". Available adapters are:\n').concat(d.join(", ")))
return u.STORAGE_ADAPTER=e}constructor(){this.useLocalStorage=u.STORAGE_ADAPTER===n.EVT_STORAGE_LOCAL_STORAGE
this._events=this._load()||[]
_.a.debug("EventBuffer: using",this.constructor.STORAGE_ADAPTER,"for storage")}push(e){this._events.push(e)
return this._save()}isEmpty(){return 0===this._events.length}getLength(){return this._events.length}filter(e){return new s(this._events.filter(e))}discard(e){const t=e._events.map(e=>e._id)
this._events=this._events.filter(e=>-1===t.indexOf(e._id))
this._save()
return}toJSON(){return this._events.map(e=>e.toJSON())}_save(){if(this.useLocalStorage)try{localStorage.setItem(n.EVT_STORAGE_KEY,JSON.stringify(this.toJSON()))}catch(e){_.a.warn("Unable to save to localStorage, likely because we're out of space.")}return}_load(){if(this.useLocalStorage){const e=JSON.parse(localStorage.getItem(n.EVT_STORAGE_KEY)||"[]")
return e.map(e=>a.fromJSON(e))}return}}u.STORAGE_ADAPTER=n.EVT_STORAGE_MEMORY
var l=i("ouhR")
var p=i.n(l)
var m=i("w8vW")
const g={Accept:"application/json; charset=UTF-8","Content-Type":"application/json; charset=UTF-8"}
class f{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=Object(r["extend"])({},f.options,e)
this._trackerFactories=[]
this._state={trackers:[],buffer:null,deliveryAgent:null,deliveries:[]}}registerTracker(e){return this._trackerFactories.push(e)}unregisterAllTrackers(){return this._trackerFactories=[]}start(){const e=this._state
e.buffer=new u
const t=this.options
const i=this._enqueue.bind(this)
function n(e,t){const n=new a(e.getEventType(),t)
return i(n,e.getDeliveryPriority())}e.trackers=this._trackerFactories.map(e=>{const t=new e
t.install(n.bind(null,t))
return t})
if(t.autoDeliver)return this._startDeliveryAgent()}isRunning(){return!!this._state.buffer}isDirty(){return this.isRunning()&&!this._state.buffer.isEmpty()}isDelivering(){return this._state.deliveries.length>0}deliver(){const e=this._state.buffer
const t=this._state.deliveries
const i=this.options
const n=e.filter(e=>e.isPendingDelivery())
if(n.isEmpty())return Object(l["when"])()
n.markBeingDelivered()
const r=Object(l["ajax"])({url:i.deliveryUrl,type:"POST",global:false,headers:g,data:JSON.stringify({quiz_submission_events:n.toJSON()})})
r.then(()=>e.discard(n),()=>n.markPendingDelivery())
const o=()=>Object(m["a"])(t,r)
r.then(o,o)
t.push(r)
return r}stop(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=this._state
if(this.isDelivering()&&!e){console.warn("You are attempting to stop the QuizLogAuditing module while a delivery is in progress.")
return Object(l["when"])(t.deliveries).done(this.stop.bind(this,true))}t.buffer=null
t.deliveryAgent&&this._stopDeliveryAgent()
t.trackers.forEach(e=>e.uninstall())
t.trackers=[]
return Object(l["when"])()}_startDeliveryAgent(){return this._state.deliveryAgent=setInterval(this.deliver.bind(this),this.options.autoDeliveryFrequency)}_enqueue(e,t){this._state.buffer.push(e)
_.a.log("Enqueuing ".concat(e," for delivery."))
if(t===n.EVT_PRIORITY_HIGH)return this.isDelivering()?Object(l["when"])(this._state.deliveries).done(this.deliver.bind(this)):this.deliver()}_stopDeliveryAgent(){return this._state.deliveryAgent=clearInterval(this._state.deliveryAgent)}}f.options={autoDeliver:true,autoDeliveryFrequency:15e3,deliveryUrl:"/quiz_submission_events"}
class h{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.eventType||(this.eventType=null)
this.priority||(this.priority=n.EVT_PRIORITY_LOW)
this._options=Object(r["extend"])({},this.options,e)
this.uid="".concat(this.eventType,"_").concat(Object(r["uniqueId"])())}install(e){throw new Error("Not implemented!")}getEventType(){return this.eventType}getDeliveryPriority(){return this.priority}getOption(e){return this._options[e]}uninstall(){if(this._bindings){this._bindings.forEach(e=>p()(e.selector).off(e.eventName))
return this._bindings=null}}bind(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._bindings||(this._bindings=[])
this._bindings.push({selector:e,eventName:t})
const o=parseInt(n.throttle||0,10)
o>0&&(i=Object(r["throttle"])(i,o,{leading:true,trailing:false}))
p()(e).on("".concat(t,".").concat(this.eventType),i)}}class b extends h{install(e){return this.bind(window,"focus",()=>e(),{throttle:this.getOption("frequency")})}}b.prototype.eventType=n.EVT_PAGE_FOCUSED
b.prototype.options={frequency:5e3}
class v extends h{install(e){return this.bind(window,"blur",()=>{if("IFRAME"!==document.activeElement.tagName)return e()},{throttle:this.getOption("frequency")})}}v.prototype.eventType=n.EVT_PAGE_BLURRED
v.prototype.options={frequency:5e3}
const y=p()(window)
function k(e){const t=p()(e)
const i=y.scrollTop()
const n=i+y.height()
const r=t.offset().top
const o=r+t.height()
return i<r&&n>o}p.a.extend(p.a.expr[":"],{in_viewport:k})
var w=i("VTHg")
var z=i.n(w)
class S extends h{install(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window
let i=[]
return this.bind(t,"scroll",()=>{const t=this.identifyVisibleQuestions().filter(e=>-1===i.indexOf(e))
if(t.length>0){i=i.concat(t)
_.a.log("Student has just viewed the following questions: ".concat(t,". (Questions viewed up until now are: ").concat(i,")"))
return e(t)}},{throttle:this.getOption("frequency")})}identifyVisibleQuestions(){return p()(".question[id]:visible").filter(":in_viewport").toArray().map(z.a)}}S.prototype.eventType=n.EVT_QUESTION_VIEWED
S.prototype.options={frequency:2500}
class j extends h{install(e){p()(document.body).on("click.".concat(this.uid),this.getOption("buttonSelector"),t=>{const i=p()(t.target).closest(this.getOption("questionSelector"))
const n=i.hasClass(this.getOption("questionMarkedClass"))
const r=z()(i[0])
_.a.log("Question ".concat(r," ").concat(n?"is now flagged":"is no longer flagged","."))
return e({flagged:n,questionId:r})})}}j.prototype.eventType=n.EVT_QUESTION_FLAGGED
j.prototype.options={buttonSelector:".flag_question",questionSelector:".question",questionMarkedClass:"marked"}
class x extends h{install(e){const t=navigator,i=t.userAgent
_.a.log("I've been loaded by ".concat(i,"."))
if(-1===location.href.indexOf("question")&&location.href.indexOf("take")>0)return e({user_agent:i})}}x.prototype.eventType=n.EVT_SESSION_STARTED
x.prototype.options={}
const C=[b,v,S,j,x]
const O=new f
C.forEach(e=>O.registerTracker(e))
_.a.debug("QuizLogAuditing: will be using localStorage.")
u.setStorageAdapter(n.EVT_STORAGE_LOCAL_STORAGE)
O.options.deliveryUrl=ENV.QUIZ_SUBMISSION_EVENTS_URL
t["a"]=O},"2wuA":function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"quizzes":{"rubric":{"loading":"جارٍ التحميل...","titles":{"details":"تفاصيل عنوان المهمة"}}}},"cy":{"quizzes":{"rubric":{"loading":"Wrthi’n llwytho...","titles":{"details":"Manylion Cyfarwyddyd Sgorio Aseiniad"}}}},"da":{"quizzes":{"rubric":{"loading":"Indlæser ...","titles":{"details":"Opgave rubrik-detaljer"}}}},"da-x-k12":{"quizzes":{"rubric":{"loading":"Indlæser ...","titles":{"details":"Detaljer om vurderingskriterium til opgave"}}}},"de":{"quizzes":{"rubric":{"loading":"Wird geladen ...","titles":{"details":"Bewertungsschemadetails der Aufgabe"}}}},"el":{"quizzes":{"rubric":{"loading":"Φόρτωση...","titles":{"details":"Λεπτομέρειες Ρουμπρίκας Εργασίας"}}}},"en-AU":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Assignment Rubric Details"}}}},"en-AU-x-unimelb":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Assignment Rubric Details"}}}},"en-CA":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Assignment Rubric Details"}}}},"en-GB":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Assignment rubric details"}}}},"en-GB-x-lbs":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Task rubric details"}}}},"en-GB-x-ukhe":{"quizzes":{"rubric":{"loading":"Loading...","titles":{"details":"Assignment rubric details"}}}},"es":{"quizzes":{"rubric":{"loading":"Cargando...","titles":{"details":"Detalles de la rúbrica de la tarea"}}}},"fa":{"quizzes":{"rubric":{"loading":"در حال بارگذاری...","titles":{"details":"اطلاعات دستورالعمل ارزیابی تکلیف"}}}},"fi":{"quizzes":{"rubric":{"loading":"Ladataan...","titles":{"details":"Tehtävän rubriikkitiedot"}}}},"fr":{"quizzes":{"rubric":{"loading":"Chargement...","titles":{"details":"Informations du barème des tâches"}}}},"fr-CA":{"quizzes":{"rubric":{"loading":"Chargement...","titles":{"details":"Informations du barème des tâches"}}}},"he":{"quizzes":{"rubric":{"loading":"טוען... ","titles":{"details":"פרטי טור המשימה"}}}},"ht":{"quizzes":{"rubric":{"loading":"Chajman...","titles":{"details":"Detay Sesyon Ribrik"}}}},"hu":{"quizzes":{"rubric":{"loading":"Töltődik...","titles":{"details":"Feladat értékelőtáblájának részletei"}}}},"hy":{"quizzes":{"rubric":{"loading":"Բեռնում է...","titles":{"details":"Հանձնարարության ռուբրիկի մանրամասներ"}}}},"is":{"quizzes":{"rubric":{"loading":"Hleð inn...","titles":{"details":"Upplýsingar um matsviðmið verkefnis"}}}},"it":{"quizzes":{"rubric":{"loading":"Caricamento in corso...","titles":{"details":"Dettagli rubrica compito"}}}},"ja":{"quizzes":{"rubric":{"loading":"読み込んでいます...","titles":{"details":"課題の注釈の詳細表示"}}}},"ko":{"quizzes":{"rubric":{"loading":"로드 중...","titles":{"details":"과제 루브릭 세부 정보"}}}},"mi":{"quizzes":{"rubric":{"loading":"E Uta ana ....","titles":{"details":"whakataunga Rubric Taipitopito"}}}},"nb":{"quizzes":{"rubric":{"loading":"Laster...","titles":{"details":"Detaljer om oppgavens vurderingsveiledning"}}}},"nb-x-k12":{"quizzes":{"rubric":{"loading":"Laster...","titles":{"details":"Detaljer om oppgavens vurderingskriterier"}}}},"nl":{"quizzes":{"rubric":{"loading":"Bezig met laden...","titles":{"details":"Details van opdrachtrubriek"}}}},"nn":{"quizzes":{"rubric":{"loading":"Lastar...","titles":{"details":"Detaljar om vurderingsskjemaet"}}}},"pl":{"quizzes":{"rubric":{"loading":"Trwa ładowanie...","titles":{"details":"Informacje szczegółowe dot. kryteriów oceny zadań"}}}},"pt":{"quizzes":{"rubric":{"loading":"Carregando...","titles":{"details":"Detalhe do protocolo da tarefa"}}}},"pt-BR":{"quizzes":{"rubric":{"loading":"Carregando...","titles":{"details":"Detalhe da rubrica da tarefa"}}}},"ru":{"quizzes":{"rubric":{"loading":"Загрузка...","titles":{"details":"Сведения о рубрике задания"}}}},"sl":{"quizzes":{"rubric":{"loading":"Nalaganje ...","titles":{"details":"Podrobnosti o ocenjevalnem vodniku naloge"}}}},"sv":{"quizzes":{"rubric":{"loading":"Laddar...","titles":{"details":"Detaljer om uppgiftens matris"}}}},"sv-x-k12":{"quizzes":{"rubric":{"loading":"Laddar...","titles":{"details":"Detaljer om uppgiftens matris"}}}},"tr":{"quizzes":{"rubric":{"loading":"Yükleniyor...","titles":{"details":"Ödev Değerlendirme Listesi Detayları"}}}},"uk":{"quizzes":{"rubric":{"loading":"Завантаження...","titles":{"details":"Вказати подробиці для категорії"}}}},"zh-Hans":{"quizzes":{"rubric":{"loading":"正在加载...","titles":{"details":"作业评分标准详细说明"}}}},"zh-Hant":{"quizzes":{"rubric":{"loading":"正在載入...","titles":{"details":"作業題目詳細資料"}}}}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("quizzes.rubric")
var a=i("ouhR")
var s=i.n(a)
i("YGE8")
i("T3Mz")
var c={ready(){const e=s()("#rubrics.rubric_dialog")
e.dialog({title:o.t("titles.details","Assignment Rubric Details"),width:600,resizable:true})},buildLoadingDialog(){const e=s()("<div/>")
e.text(o.t("loading","Loading..."))
s()("body").append(e)
e.dialog({width:400,height:200})
return e},replaceLoadingDialog(e,t){s()("body").append(e)
t.dialog("close")
t.remove()
c.ready()},createRubricDialog(e,t){const i=s()("#rubrics.rubric_dialog")
if(i.length)c.ready()
else{const i=c.buildLoadingDialog()
void 0===t||null===t?s.a.get(e,e=>{c.replaceLoadingDialog(e,i)}):c.replaceLoadingDialog(t,i)}}}
s()(document).ready((function(){s()(".show_rubric_link").click((function(e){e.preventDefault()
const t=s()(this).attr("rel")
c.createRubricDialog(t)}))}))},"36Bh":function(e,t,i){"use strict"
var n=i("btHx")
var r=i("pLki")
var o=function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){o(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=r["a"]
return t}(n["a"])},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[])
Object.defineProperty(t,"loaded",{enumerable:true,get:function(){return t.l}})
Object.defineProperty(t,"id",{enumerable:true,get:function(){return t.i}})
Object.defineProperty(t,"exports",{enumerable:true})
t.webpackPolyfill=1}return t}},"4fRq":function(e,t){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(i){var n=new Uint8Array(16)
e.exports=function(){i(n)
return n}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++){0===(3&t)&&(e=4294967296*Math.random())
r[t]=e>>>((3&t)<<3)&255}return r}}},"597A":function(e,t,i){"use strict"
i.d(t,"a",(function(){return f}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i("17x9")
var u=i.n(d)
var l=i("cClk")
var p=i("BTe1")
var m=i("9yTY")
var g=function(e){var t=e.expanded
return{expanded:!t}}
var f=function(e){Object(c["a"])(t,e)
function t(e){var i
Object(r["a"])(this,t)
i=Object(a["a"])(this,Object(s["a"])(t).call(this))
i.handleToggle=function(e){i.isControlled()||i.setState(g)
i.props.onToggle(e,!i.expanded)}
i.state={expanded:i.isControlled(e)?e.expanded:!!e.defaultExpanded}
i._contentId=Object(p["a"])("Expandable__content")
return i}Object(o["a"])(t,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"componentWillReceiveProps",value:function(e){this.isControlled()&&!this.isControlled(e)&&this.props.expanded!==this.state.expanded&&this.setState(g)}},{key:"render",value:function(){var e=this
var t=this.props,i=t.children,r=t.render,o=void 0===r?i:r
return"function"===typeof o?o({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(n["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(m["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}])
t.displayName="Expandable"
return t}(_["Component"])
f.propTypes={expanded:Object(l["a"])(u.a.bool,"onToggle","defaultExpanded"),defaultExpanded:u.a.bool,onToggle:u.a.func,children:u.a.func,render:u.a.func}
f.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},"5JRF":function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("TSYQ")
var m=i.n(p)
var g=i("J2CL")
var f=i("KgFQ")
var h=i("jtGx")
var b=i("VTBJ")
function v(e){var t=e.typography,i=e.colors,n=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:i.textLightest,primaryColor:i.textDarkest,secondaryColor:i.textDark,secondaryInverseColor:i.textLight,warningColor:i.textWarning,brandColor:i.textBrand,errorColor:i.textDanger,successColor:i.textSuccess,alertColor:i.textAlert,paragraphMargin:"".concat(n.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return j}))
var y,k,w,z
var S={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var j=(y=Object(g["i"])(v,S),y(k=(z=w=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var i=this.props,r=i.wrap,o=i.weight,a=i.fontStyle,s=i.size,c=i.lineHeight,_=i.letterSpacing,u=i.transform,l=i.color,p=i.children
var g=Object(f["a"])(t,this.props)
return d.a.createElement(g,Object.assign({},Object(h["a"])(this.props,t.propTypes),{className:m()((e={},Object(n["a"])(e,S.root,true),Object(n["a"])(e,S[s],s),Object(n["a"])(e,S["wrap-".concat(r)],r),Object(n["a"])(e,S["weight-".concat(o)],o),Object(n["a"])(e,S["style-".concat(a)],a),Object(n["a"])(e,S["transform-".concat(u)],u),Object(n["a"])(e,S["lineHeight-".concat(c)],c),Object(n["a"])(e,S["letterSpacing-".concat(_)],_),Object(n["a"])(e,S["color-".concat(l)],l),e)),ref:this.props.elementRef}),p)}}])
t.displayName="Text"
return t}(_["Component"]),w.propTypes={as:l.a.elementType,wrap:l.a.oneOf(["normal","break-word"]),weight:l.a.oneOf(["normal","light","bold"]),fontStyle:l.a.oneOf(["italic","normal"]),size:l.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:l.a.oneOf(["default","fit","condensed","double"]),letterSpacing:l.a.oneOf(["normal","condensed","expanded"]),transform:l.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:l.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:l.a.node,elementRef:l.a.func},w.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},z))||k)},"7LJr":function(e,t,i){"use strict"
var n=i("ouhR")
var r=i.n(n)
r.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
t.data("loading_images",i)
return this}"register_image"==e&&3==arguments.length&&(r.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=r.a.extend({},r.a.fn.loadingImg.defaults,e)
let n=r.a.fn.loadingImg.image_files.normal
e.image_size&&r.a.fn.loadingImg.image_files[e.image_size]&&(n=r.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let o=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)o=t.outerHeight()
else if("middle"==e.vertical)o=t.outerHeight()/2-n.height/2
else{o=parseInt(e.vertical,10)
isNaN(o)&&(o=0)}let a=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)a=t.outerWidth()-n.width
else if("middle"==e.horizontal)a=t.outerWidth()/2-n.width/2
else{a=parseInt(e.horizontal,10)
isNaN(a)&&(a=0)}const s=t.zIndex()+1
const c=r()(document.createElement("div")).addClass("loading_image_holder")
const _=r()(document.createElement("img")).attr("src",n.url)
c.append(_)
i=t.data("loading_images")||[]
i.push(c)
t.data("loading_images",i)
if(t.css("position")&&"static"!=t.css("position")){c.css({zIndex:s,position:"absolute",top:o,left:a})
t.append(c)}else{const i=t.offset()
let n=i.top,_=i.left
e.vertical&&(n+=o)
e.horizontal&&(_+=a)
c.css({zIndex:s,position:"absolute",top:n,left:_})
r()("body").append(c)}return r()(this)}
r.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
r.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
r.a.fn.loadingImage=r.a.fn.loadingImg},"97gy":function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconCheckMarkSolid"
return t}(_["Component"])
p.glyphName="check-mark"
p.variant="Solid"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},B0dq:function(e,t,i){"use strict"
var n=i("FIFq")
var r=i.n(n)
var o=i("36Bh")
var a=i("btHx")
var s,c,_=function(e,t){for(var i in t)d.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},d={}.hasOwnProperty
s=function(e){_(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(e){this.setUpOutcomesAndGroupsIfNeeded()
return t.__super__.initialize.apply(this,arguments)}
t.prototype.name=function(){return this.get("title")}
t.prototype.isAbbreviated=function(){return!this.has("description")}
t.prototype.setUrlTo=function(e){return this.url=function(){switch(e){case"add":case"move":return this.get("parent_outcome_group").subgroups_url
case"edit":case"delete":return this.get("url")}}.call(this)}
t.prototype.setUpOutcomesAndGroupsIfNeeded=function(){this.outcomeGroups||(this.outcomeGroups=new c([],{parentGroup:this}))
if(!this.outcomes)return this.outcomes=new o["a"]([])}
t.prototype.getSubtrees=function(){return this.outcomeGroups}
t.prototype.getItems=function(){return this.outcomes}
t.prototype.expand=function(e,t){var i,n,r,o
null==e&&(e=false)
null==t&&(t={})
this.isExpanded=true
this.trigger("expanded")
if(this.expandDfd||e)return $.when()
this.isExpanding=true
this.trigger("beginexpanding")
this.expandDfd=$.Deferred().done((a=this,function(){a.isExpanding=false
return a.trigger("endexpanding")}))
var a
0!==this.get("outcomeGroups_count")&&(i=null!=(r=this.outcomeGroups)?r.fetch():void 0)
0===this.get("outcomes_count")||t.onlyShowSubtrees||(n=null!=(o=this.outcomes)?o.fetch():void 0)
return $.when(i,n).done(this.expandDfd.resolve)}
t.prototype.collapse=function(){this.isExpanded=false
return this.trigger("collapsed")}
t.prototype.toggle=function(e){return this.isExpanded?this.collapse():this.expand(false,e)}
return t}(r.a.Model)
c=function(e){_(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.optionProperty("parentGroup")
t.prototype.model=s
t.prototype.url=function(){return this.parentGroup.attributes.subgroups_url}
return t}(a["a"])
t["a"]=s},CyXg:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconMiniArrowDownSolid"
return t}(_["Component"])
p.glyphName="mini-arrow-down"
p.variant="Solid"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},GCM4:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"model_is_already_located_in_newgroup_e5cea361":"%{model} موجود بالفعل في %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"العثور على نتائج"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"تم نقل %{model} إلى %{newGroup} بنجاح"},"cy":{"model_is_already_located_in_newgroup_e5cea361":"%{model} wedi\'i leoli’n barod yn %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Dod o hyd i Ddeilliannau"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Wedi llwyddo i symud %{model} i %{newGroup}"},"da":{"model_is_already_located_in_newgroup_e5cea361":"%{model} findes allerede i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find læringsudbytter"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Flyttet %{model} til %{newGroup}"},"da-x-k12":{"model_is_already_located_in_newgroup_e5cea361":"%{model} findes allerede i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find læringsudbytter"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Flyttet %{model} til %{newGroup}"},"de":{"model_is_already_located_in_newgroup_e5cea361":"%{model} befindet sich bereits in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Lernziele suchen"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} wurde erfolgreich in %{newGroup} verschoben."},"el":{"model_is_already_located_in_newgroup_e5cea361":"Το %{model} βρίσκεται ήδη στην ομάδα %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Εύρεση Αποτελεσμάτων"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Το %{model} μετακινήθηκε στην ομάδα %{newGroup} επιτυχώς"},"en-AU":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find Outcomes"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"en-AU-x-unimelb":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"en-CA":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find Outcomes"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"en-GB":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find outcomes"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"en-GB-x-lbs":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"en-GB-x-ukhe":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is already located in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Find outcomes"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Successfully moved %{model} to %{newGroup}"},"es":{"model_is_already_located_in_newgroup_e5cea361":"%{model} ya está ubicado en %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Buscar resultados"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} movido correctamente a %{newGroup}"},"fa":{"model_is_already_located_in_newgroup_e5cea361":"%{model} در %{newGroup} قرار گرفته است","outcomesSidebarView":{"titles":{"find_outcomes":"یافتن نتایج"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} با موفقیت به %{newGroup} انتقال یافت"},"fi":{"model_is_already_located_in_newgroup_e5cea361":"%{model} sijaitsee jo kohteessa %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Löydä tulokset"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} siirrettiin onnistuneesti kohteeseen %{newGroup}"},"fr":{"model_is_already_located_in_newgroup_e5cea361":"%{model} se trouve déjà dans %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Chercher des résultats"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Déplacement réussi de %{model} dans %{newGroup}"},"fr-CA":{"model_is_already_located_in_newgroup_e5cea361":"%{model} se trouve déjà dans %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Chercher des acquis"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Déplacement réussi de %{model} dans %{newGroup}"},"he":{"model_is_already_located_in_newgroup_e5cea361":"%{model} כבר נמצא ב %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"חיפוש תוצאות למידה"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"העברה מוצלחת של %{model} אל %{newGroup}"},"ht":{"model_is_already_located_in_newgroup_e5cea361":"%{model} deja nan %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Jwenn Rezilta"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Deplase %{model} kòrèkteman ale nan %{newGroup}"},"hu":{"model_is_already_located_in_newgroup_e5cea361":"%{model} már benne van ebben a csoportban: %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Tanulási eredmény keresése"}},"successfully_moved_model_to_newgroup_f7b7aa5a":" %{model} sikeresen áthelyezve ide %{newGroup}"},"hy":{"model_is_already_located_in_newgroup_e5cea361":"%{model} արդեն տեղադրված է %{newGroup}-ում","outcomesSidebarView":{"titles":{"find_outcomes":"Գտնել արդյունքները"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model}-ը հաջողությամբ տեղափոխվել է %{newGroup}"},"is":{"model_is_already_located_in_newgroup_e5cea361":"%{model} er nú þegar í %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Finna niðurstöður"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Færði %{model} í %{newGroup}"},"it":{"model_is_already_located_in_newgroup_e5cea361":"%{model} si trova già in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Trova esiti"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} spostato correttamente in %{newGroup}"},"ja":{"model_is_already_located_in_newgroup_e5cea361":"%{model} はすでに %{newGroup} 内にあります","outcomesSidebarView":{"titles":{"find_outcomes":"成果の検索"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} を %{newGroup} に正常に移動しました"},"ko":{"outcomesSidebarView":{"titles":{"find_outcomes":"성과 찾기"}}},"mi":{"model_is_already_located_in_newgroup_e5cea361":" %{model} kei roto i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Kimihia Putanga"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"I momoho te neke %{model} ki te %{newGroup}"},"nb":{"model_is_already_located_in_newgroup_e5cea361":"%{model} er allerede plassert i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Finn læringsmål"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Vellykket flyttet %{model} til %{newGroup}"},"nb-x-k12":{"model_is_already_located_in_newgroup_e5cea361":"%{model} er allerede plassert i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Finn mål"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Vellykket flyttet %{model} til %{newGroup}"},"nl":{"model_is_already_located_in_newgroup_e5cea361":"%{model} is al geplaatst in %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Leerdoelen zoeken"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Succesvol %{model} naar %{newGroup} verplaatst"},"nn":{"model_is_already_located_in_newgroup_e5cea361":"%{model} er allereie plassert i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Finn læringsmål"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Flytta %{model} til %{newGroup}"},"pl":{"model_is_already_located_in_newgroup_e5cea361":"%{model} już się znajduje w %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Wyszukaj wyniki"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Pomyślnie przeniesiono %{model} do %{newGroup}"},"pt":{"model_is_already_located_in_newgroup_e5cea361":"%{model} já se encontra em %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Localizar resultados"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} movido com sucesso para %{newGroup}"},"pt-BR":{"model_is_already_located_in_newgroup_e5cea361":"%{model} já foi localizado no grupo %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Localizar objetivos"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} movido com sucesso para %{newGroup}"},"ru":{"model_is_already_located_in_newgroup_e5cea361":"%{model} уже расположена в %{newGroup}.","outcomesSidebarView":{"titles":{"find_outcomes":"Найти результаты"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} успешно перемещена в %{newGroup}"},"sl":{"model_is_already_located_in_newgroup_e5cea361":"%{model} je že locirana v %{newGroup}","successfully_moved_model_to_newgroup_f7b7aa5a":"Uspešno premaknjen način %{model} v %{newGroup}"},"sv":{"model_is_already_located_in_newgroup_e5cea361":"%{model} finns redan i %{newGroup}","outcomesSidebarView":{"titles":{"find_outcomes":"Hitta lärandemål"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"Flyttade %{model} till %{newGroup}"},"sv-x-k12":{"model_is_already_located_in_newgroup_e5cea361":"%{model} finns redan i %{newGroup}","successfully_moved_model_to_newgroup_f7b7aa5a":"Flyttade %{model} till %{newGroup}"},"tr":{"model_is_already_located_in_newgroup_e5cea361":"%{model} zaten %{newGroup} içinde var","outcomesSidebarView":{"titles":{"find_outcomes":"Öğrenme Çıktısı Ara"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"%{model} başarılı bir şekilde %{newGroup} a taşındı"},"uk":{"model_is_already_located_in_newgroup_e5cea361":"%{model} вже локалізовано в %{newGroup}","successfully_moved_model_to_newgroup_f7b7aa5a":"Успішно перенесено %{model}до %{newGroup}"},"zh-Hans":{"model_is_already_located_in_newgroup_e5cea361":"%{model} 已位于 %{newGroup} 中","outcomesSidebarView":{"titles":{"find_outcomes":"查找结果"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"成功将 %{model} 移动到 %{newGroup}"},"zh-Hant":{"model_is_already_located_in_newgroup_e5cea361":"%{model} 已位於 %{newGroup} 之中","outcomesSidebarView":{"titles":{"find_outcomes":"尋找成果"}},"successfully_moved_model_to_newgroup_f7b7aa5a":"將 %{model} 成功移至 %{newGroup}"}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("outcomesSidebarView")
var a=i("ouhR")
var s=i.n(a)
var c=i("GLiE")
var _=i.n(c)
var d=i("FIFq")
var u=i.n(d)
var l=i("pLki")
var p=i("B0dq")
Object(r["a"])(JSON.parse('{"ar":{"OutcomesDirectoryView":{"flash":{"error":"حدث خطأ ما. يرجى تحديث الصفحة وإعادة المحاولة.","updateSuccess":"تم التحديث بنجاح"}},"loading_more_results_1d437202":"تحميل مزيد من النتائج"},"cy":{"OutcomesDirectoryView":{"flash":{"error":"Gwall. Adnewyddwch y dudalen a rhoi cynnig arall arni.","updateSuccess":"Wedi llwyddo i ddiweddaru"}},"loading_more_results_1d437202":"Wrthi’n llwytho mwy o ganlyniadau"},"da":{"OutcomesDirectoryView":{"flash":{"error":"En fejl opstod. Opdater din side, og prøv igen.","updateSuccess":"Vellykket opdatering"}},"loading_more_results_1d437202":"indlæser flere resultater"},"da-x-k12":{"OutcomesDirectoryView":{"flash":{"error":"En fejl opstod. Opdater din side, og prøv igen.","updateSuccess":"Vellykket opdatering"}},"loading_more_results_1d437202":"Indlæser flere resultater"},"de":{"OutcomesDirectoryView":{"flash":{"error":"Ein Fehler ist aufgetreten. Bitte laden Sie die Seite erneut, und versuchen Sie es nochmal.","updateSuccess":"Aktualisierung erfolgreich"}},"loading_more_results_1d437202":"Weitere Ergebnisse laden"},"el":{"OutcomesDirectoryView":{"flash":{"error":"Παρουσιάστηκε σφάλμα. Παρακαλώ ανανεώστε τη σελίδα και δοκιμάστε ξανά.","updateSuccess":"Επιτυχής ενημέρωση"}},"loading_more_results_1d437202":"Γίνεται φόρτωση περισσοτέρων αποτελεσμάτων"},"en-AU":{"OutcomesDirectoryView":{"flash":{"error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"}},"loading_more_results_1d437202":"Loading more results"},"en-AU-x-unimelb":{"loading_more_results_1d437202":"Loading more results"},"en-CA":{"OutcomesDirectoryView":{"flash":{"error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"}},"loading_more_results_1d437202":"Loading more results"},"en-GB":{"OutcomesDirectoryView":{"flash":{"error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"}},"loading_more_results_1d437202":"Loading more results"},"en-GB-x-lbs":{"loading_more_results_1d437202":"Loading more results"},"en-GB-x-ukhe":{"OutcomesDirectoryView":{"flash":{"error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"}},"loading_more_results_1d437202":"Loading more results"},"es":{"OutcomesDirectoryView":{"flash":{"error":"Ha ocurrido un error. Actualice la página y vuelva a intentarlo.","updateSuccess":"Actualización correcta"}},"loading_more_results_1d437202":"Cargando más resultados"},"fa":{"OutcomesDirectoryView":{"flash":{"error":"یک خطا رخ داده است. لطفا صفحه را تازه سازی کنید و دوباره تلاش کنید.","updateSuccess":"بهنگام سازی با موفقیت انجام شد"}},"loading_more_results_1d437202":"در حال بارگذاری نتایج بیشتر"},"fi":{"OutcomesDirectoryView":{"flash":{"error":"Tapahtui virhe. Virkistä sivu ja yritä uudelleen.","updateSuccess":"Päivitys onnistui"}},"loading_more_results_1d437202":"Lataa lisää tuloksia"},"fr":{"OutcomesDirectoryView":{"flash":{"error":"Une erreur est survenue. Veuillez rafraîchir la page, puis réessayez.","updateSuccess":"Mise à jour réussie"}},"loading_more_results_1d437202":"Chargement de résultats supplémentaires"},"fr-CA":{"OutcomesDirectoryView":{"flash":{"error":"Une erreur est survenue. Veuillez rafraîchir la page et essayer de nouveau.","updateSuccess":"Mise à jour réussie"}},"loading_more_results_1d437202":"Chargement de résultats supplémentaires"},"he":{"OutcomesDirectoryView":{"flash":{"error":"אירעה שגיאה. יש לרענן את הדף ולנסות שוב","updateSuccess":"עודכן בהצלחה"}},"loading_more_results_1d437202":"טוען תוצאות נוספות"},"ht":{"OutcomesDirectoryView":{"flash":{"error":"Yon erè fèt. Tanpri aktyalize paj la epi eseye ankò.","updateSuccess":"Aktyalizasyon reyisi"}},"loading_more_results_1d437202":"Chajman plis rezilta"},"hu":{"OutcomesDirectoryView":{"flash":{"error":"Hiba történt! Kérjük, frissítse az oldalt, és próbálja újra!","updateSuccess":"A frissítés sikeres"}},"loading_more_results_1d437202":"További találatok betöltése"},"hy":{"OutcomesDirectoryView":{"flash":{"error":"Սխալ է տեղի ունեցել: Խնդրում ենք թարմացնել էջը և փորձել կրկին:","updateSuccess":"Հաջողությամբ թարմացվել է"}},"loading_more_results_1d437202":"Բեռնում է լրացուցիչ արդյունքներ"},"is":{"OutcomesDirectoryView":{"flash":{"error":"Villa kom upp Glæddu síðuna og reyndu aftur.","updateSuccess":"Uppfærsla tókst"}},"loading_more_results_1d437202":"Sæki fleiri niðurstöður"},"it":{"OutcomesDirectoryView":{"flash":{"error":"Si è verificato un errore. Aggiorna la pagina e riprova.","updateSuccess":"Aggiornamento riuscito"}},"loading_more_results_1d437202":"Caricamento di ulteriori risultati"},"ja":{"OutcomesDirectoryView":{"flash":{"error":"エラーが発生しました。ページを更新して再試行してください","updateSuccess":"更新が成功しました"}},"loading_more_results_1d437202":"より多くの結果を読み込んでいます"},"ko":{"OutcomesDirectoryView":{"flash":{"error":"오류가 발생했습니다. 페이지를 새로 고친 후에 다시 시도하시기 바랍니다.","updateSuccess":"성공적으로 업데이트함"}},"loading_more_results_1d437202":"더 많은 결과 로드 중"},"mi":{"OutcomesDirectoryView":{"flash":{"error":"I puta he hapa. Tēnā koa whakaorangia te whārangi ka ngana anō.","updateSuccess":"Whakahōu angitu"}},"loading_more_results_1d437202":"Uta ana nui atu ngā hua"},"nb":{"OutcomesDirectoryView":{"flash":{"error":"Det oppstod en feil. Oppdater siden og prøv igjen.","updateSuccess":"Oppdatering lyktes"}},"loading_more_results_1d437202":"Laster flere resultater"},"nb-x-k12":{"OutcomesDirectoryView":{"flash":{"error":"Det oppstod en feil. Oppdater siden og prøv igjen.","updateSuccess":"Oppdatering lyktes"}},"loading_more_results_1d437202":"Laster flere resultater"},"nl":{"OutcomesDirectoryView":{"flash":{"error":"Er is een fout opgetreden. Vernieuw de pagina en probeer het opnieuw.","updateSuccess":"Succesvol bijgewerkt"}},"loading_more_results_1d437202":"Bezig met laden van meer resultaten"},"nn":{"OutcomesDirectoryView":{"flash":{"error":"Det oppstod ein feil. Oppdater sida og prøv på nytt.","updateSuccess":"Oppdatert"}},"loading_more_results_1d437202":"Lastar fleire resultat"},"pl":{"OutcomesDirectoryView":{"flash":{"error":"Wystąpił błąd. Odśwież stronę i spróbuj ponownie.","updateSuccess":"Aktualizacja zakończona pomyslnie"}},"loading_more_results_1d437202":"Trwa ładowanie większej liczby wyników"},"pt":{"OutcomesDirectoryView":{"flash":{"error":"Um erro ocorreu. Atualize a página e tente novamente.","updateSuccess":"Atualização efetuada com sucesso"}},"loading_more_results_1d437202":"Carregando mais resultados"},"pt-BR":{"OutcomesDirectoryView":{"flash":{"error":"Ocorreu um erro. Atualize a página e tente novamente.","updateSuccess":"Atualização realizada com sucesso"}},"loading_more_results_1d437202":"Carregando mais resultados"},"ru":{"OutcomesDirectoryView":{"flash":{"error":"Возникла ошибка. Обновите страницу и повторите попытку.","updateSuccess":"Успешно обновлено"}},"loading_more_results_1d437202":"Загрузка других результатов"},"sl":{"loading_more_results_1d437202":"Nalaganje več rezultatov"},"sv":{"OutcomesDirectoryView":{"flash":{"error":"Ett fel inträffade. Vänligen uppdatera sidan och försök igen.","updateSuccess":"Uppdaterades"}},"loading_more_results_1d437202":"Laddar fler resultat"},"sv-x-k12":{"loading_more_results_1d437202":"Laddar fler resultat"},"tr":{"OutcomesDirectoryView":{"flash":{"error":"Bir hata meydana geldi. Lütfen sayfayı yenileyin ve tekrar deneyin.","updateSuccess":"Güncelleme başarılı"}},"loading_more_results_1d437202":"Daha fazla sonuç yükleniyor"},"zh-Hans":{"OutcomesDirectoryView":{"flash":{"error":"发生错误。请刷新此页面并重试。","updateSuccess":"更新成功"}},"loading_more_results_1d437202":"正在加载其它结果"},"zh-Hant":{"OutcomesDirectoryView":{"flash":{"error":"發生了一個錯誤。請重新整理頁面，然後重試。","updateSuccess":"更新成功"}},"loading_more_results_1d437202":"載入更多結果"}}'))
var m=n["default"].scoped("OutcomesDirectoryView")
var g=i("5Ky4")
var f=i("ahuC")
var h=i("36Bh")
var b=i("btHx")
var v=function(e,t){for(var i in t)y.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},y={}.hasOwnProperty
var k=function(e){v(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=p["a"]
t.prototype.parse=function(e){t.__super__.parse.apply(this,arguments)
return _.a.reject(e,(function(e){return e.id===ENV.COMMON_CORE_GROUP_ID}))}
return t}(b["a"])
var w=i("VTBJ")
i("VHne")
class z extends u.a.View{static initClass(){this.prototype.tagName="li"
this.prototype.attributes={tabindex:-1}
this.prototype.events={click:"triggerSelect",keydown:"onKeydown",focus:"onFocus"}
this.prototype.keyCodes={13:"Action",32:"Action",37:"LeftArrow",38:"UpArrow",39:"RightArrow",40:"DownArrow"}}initialize(e){super.initialize(...arguments)
this.readOnly=e.readOnly
this.dir=e.dir
return this.attachEvents()}attachEvents(){this.model.on("change:title",this.updateTitle,this)
this.model.on("remove",this.remove,this)
return this.model.on("select",this.triggerSelect,this)}triggerSelect(e){e&&e.preventDefault()
this.trigger("select",this)
return this.select()}onKeydown(e){const t=s()(e.target)
const i="on".concat(this.keyCodes[e.keyCode],"Key")
if(this[i])return this[i].call(this,e,t)&&e.preventDefault()}onUpArrowKey(e,t){return t.prev().focus()}onDownArrowKey(e,t){return t.next().focus()}onLeftArrowKey(e,t){if(!(t.parent().prev().length>0))return
return this.$el.parent().prev().find("[aria-expanded=true]").click().attr("aria-expanded",false).attr("tabindex",0).focus()}onActionKey(e,t){return t.hasClass("outcome-group")?this.onRightArrowKey(e,t):this.triggerSelect()}onFocus(e){const t=s()(e.target)
t.parents(".wrapper:first").find("[tabindex=0]").attr("tabindex",-1)
return t.attr("tabindex",0)}makeFocusable(){this.$el.parent().find("[tabindex=0]").attr("tabindex",-1)
return this.$el.attr("tabindex",0)}select(){this.makeFocusable()
return this.$el.addClass("selected")}unSelect(){return this.$el.removeClass("selected")}remove(){this.model.off("change:title",this.updateTitle,this)
this.model.off("remove",this.remove,this)
this.model.off("select",this.triggerSelect,this)
return super.remove(...arguments)}updateTitle(){this.$("span").text(this.model.get("title"))
return this.$("a").attr("title",Object(g["a"])(this.model.get("title")))}render(){this.readOnly||this.initDraggable()
this.$el.data("view",this)
return this}initDraggable(){return this.$el.draggable({scope:"outcomes",containment:".outcomes-sidebar",opacity:.7,helper:"clone",revert:"invalid",scroll:false,drag(e,t){const i=s()(this).data("draggable")
const n=i.options
let r=false
const o=i.relative_container
const a=o.offset().left
const c=o.width()
e.pageX-a<n.scrollSensitivity?o[0].scrollLeft=r=o[0].scrollLeft-n.scrollSpeed:a+c-e.pageX<n.scrollSensitivity&&(o[0].scrollLeft=r=o[0].scrollLeft+n.scrollSpeed)
if(false!==r&&s.a.ui.ddmanager&&!n.dropBehaviour)return s.a.ui.ddmanager.prepareOffsets(i,e)}})}}z.initClass()
i("vpJZ")
class S extends z{static initClass(){this.prototype.className="outcome-group"
this.prototype.attributes=Object(w["a"])({},this.attributes,{"aria-expanded":false})}onRightArrowKey(e,t){t.attr("aria-expanded",true).attr("tabindex",-1)
this.triggerSelect()
return setTimeout(()=>t.parent().next().find("li[tabindex=0]").focus(),1e3)}initDroppable(){return this.$el.droppable({scope:"outcomes",hoverClass:"droppable",greedy:true,drop:(e,t)=>{const i=t.draggable.data("view"),n=i.model
const r=n instanceof l["a"]?n.outcomeGroup:n
if(r.id===this.model.id)return
const o=this.dir.sidebar._findLastDir()
this.triggerSelect()
const a=new s.a.Deferred
this.dir.$el.disableWhileLoading(a)
return this.dir.sidebar.dirForGroup(this.model).promise().done(e=>e.moveModelHere(n,o).done(()=>a.resolve()))}})}render(){this.$el.attr("data-id",this.model.get("id"))
this.$el.html('<a href="#" class="ellipsis" title="'.concat(Object(g["a"])(this.model.get("title")),'">\n<i class="icon-folder"></i>\n<span>').concat(Object(g["a"])(this.model.get("title")),"</span>\n</a>"))
this.initDroppable()
return super.render(...arguments)}}S.initClass()
class j extends z{render(){this.$el.attr("data-id",this.model.get("id"))
this.$el.html('<a href="#" class="ellipsis" title="'.concat(Object(g["a"])(this.model.get("title")),'">\n<i class="icon-outcomes" aria-hidden="true"></i>\n<span>').concat(Object(g["a"])(this.model.get("title")),"</span>\n</a>"))
return super.render(...arguments)}}j.prototype.className="outcome-link"
var x=i("teYS")
i("SJWK")
i("MWZS")
class C extends f["a"]{static initClass(){this.prototype.tagName="ul"
this.prototype.className="outcome-level"}initialize(e){this.inFindDialog=e.inFindDialog
this.readOnly=e.readOnly
this.parent=e.parent
const t=e.outcomeGroup.attributes.title
const i="Listing of child outcomes for ".concat(t)
this.$el.attr("aria-label",i)
this.needsReset=false
if(this.outcomeGroup=e.outcomeGroup){if(!this.groups){this.groups=new k
this.groups.url=this.outcomeGroup.get("subgroups_url")}this.groups.on("add reset",this.reset,this)
this.groups.on("remove",this.removeGroup,this)
this.groups.on("fetched:last",this.fetchOutcomes,this)
if(!this.outcomes){this.outcomes=new h["a"]
this.outcomes.url=this.outcomeGroup.get("outcomes_url")+"?outcome_style=full"}this.outcomes.on("add remove reset",this.reset,this)}this.collection=this.groups
this.paginationScrollContainer=this.$el
super.initialize(e)
this.loadDfd=s.a.Deferred()
if(this.outcomeGroup){let e
this.$el.disableWhileLoading(e=this.groups.fetch())}if(e.selectFirstItem)return this.loadDfd.done(this.selectFirstOutcome.bind(this))}initDroppable(){return this.$el.droppable({scope:"outcomes",hoverClass:"outcome-level-hover",drop:(e,t)=>{if(t.draggable.parent().get(0)===e.target)return
const i=t.draggable.data("view"),n=i.model
return this.moveModelHere(n)}})}promise(){return this.loadDfd.promise()}moveModelHere(e,t){let i
e.collection.remove(e)
if(e instanceof p["a"]){this.groups.add(e)
i=this.moveGroup(e,this.outcomeGroup.toJSON())}else{this.outcomes.add(e)
i=this.changeLink(e,this.outcomeGroup.toJSON())}return i.done(()=>{e.trigger("select")
if(t)return t.needsReset=true})}changeLink(e,t){const i=new s.a.Deferred
this.$el.disableWhileLoading(i)
function n(e,t){i.reject()
return s.a.flashError(m.t("flash.error","An error occurred. Please refresh the page and try again."))}const r=e.outcomeGroup
e.outcomeGroup=t
e.setUrlTo("add")
s.a.ajaxJSON(e.url,"POST",{outcome_id:e.get("id"),move_from:r.id}).done(t=>{e.set(e.parse(t))
s.a.flashMessage(m.t("flash.updateSuccess","Update successful"))
return i.resolve()}).fail(n)
return i}moveGroup(e,t){const i=new s.a.Deferred
function n(e,t){i.reject()
return s.a.flashError(m.t("flash.error","An error occurred. Please refresh the page and try again."))}e.setUrlTo("edit")
s.a.ajaxJSON(e.url,"PUT",{parent_outcome_group_id:t.id}).done(t=>{e.set(e.parse(t))
s.a.flashMessage(m.t("flash.updateSuccess","Update successful"))
return i.resolve()}).fail(n)
this.$el.disableWhileLoading(i)
return i}makeFocusable(){if(this.$el.find("[tabindex=0]").length>0)return
if(this.views().length>0)return this.views()[0].makeFocusable()}selectFirstOutcome(){s()("ul.outcome-level li:first").click()}paginationLoaderTemplate(){return"<li><span class='loading-more'> ".concat(Object(g["a"])(m.t("Loading more results")),"</span></li>")}showPaginationLoader(){null==this.$paginationLoader&&(this.$paginationLoader=s()(this.paginationLoaderTemplate()))
return this.$el.append(this.$paginationLoader)}fetchOutcomes(){this.collection=this.outcomes
this.bindPaginationEvents()
this.outcomes.fetch({success:()=>this.loadDfd.resolve(this)})
this.startPaginationListener()
return this.showPaginationLoader()}triggerSelect(e){this.clearSelection()
this.selectedModel=e.model
e.select()
return this.trigger("select",this,e.model)}views(){if(this._views&&!_.a.isEmpty(this._views))return this._views
this._views=this._viewsFor(this.groups.models,S).concat(this._viewsFor(this.outcomes.models,j))
for(const e of this._views){e.on("select",this.triggerSelect.bind(this))
e.model===this.selectedModel&&e.select()}return this._views}reset(){this.needsReset=false
this._clearViews()
return this.render()}removeGroup(e){this.reset()
if(e===O(_.a.last(this.sidebar.directories),e=>e.outcomeGroup))return this.trigger("select",this,null)}remove(){this._clearViews()
this.selectedModel=null
return super.remove(...arguments)}clearSelection(e){null!=e&&e.preventDefault()
this.prevSelectedModel=this.selectedModel
this.selectedModel=null
return _.a.each(this.views(),e=>e.unSelect())}clearOutcomeSelection(){if(this.selectedModel instanceof Outcome)return this.clearSelection()}render(){this.$el.empty()
if(this.needsReset)return this.reset()
_.a.each(this.views(),e=>this.$el.append(e.render().el))
this.inFindDialog&&this.handleWarning()
this.readOnly||this.initDroppable()
this.startPaginationListener()
this.$("li:first").attr("tabindex",0)
this.$el.data("view",this)
return this}handleWarning(){return!this.parent&&_.a.isEmpty(this.groups.models)&&_.a.isEmpty(this.outcomes.models)&&_.a.isEmpty(this.views())?Object(x["publish"])("renderNoOutcomeWarning"):Object(x["publish"])("clearNoOutcomeWarning")}_viewsFor(e,t){return _.a.map(e,e=>new t({model:e,readOnly:this.readOnly,dir:this}))}_clearViews(){_.a.each(this._views,e=>e.remove())
return this._views=null}}C.initClass()
function O(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}Object(r["a"])(JSON.parse('{"ar":{"outcomesFindDirectoryVew":{"account_standards":"معايير الحساب","account_standards_description":"ستلاحظ جهة اليسار المعايير التي قامت مؤسستك بإنشائها لاستخدامها في دوراتك.","common_core":"Common Core Standards","common_core_description":"إلى اليسار يوجد هيكل مجلد الحصائل المعروف لكل مجموعة من معايير Common Core State Standards. يسمح لك هذا بتضمين أي معيار من معايير Common Core Standards بسهولة لتقييم الدرجات داخل مساقك.","state_standards":"معايير الولاية","state_standards_description":"إلى اليسار سترى مجلدًا لكل ولاية يحتوي على معايير الولاية المحدثة. يسمح لك هذا بتضمين معايير الولاية بسهولة عند تقييم الدرجات داخل مساقك."}},"cy":{"outcomesFindDirectoryVew":{"account_standards":"Safonau\'r Cyfrif","account_standards_description":"Ar y chwith fe welwch chi’r safonau mae eich sefydliad wedi\'u creu i chi eu defnyddio yn eich cyrsiau.","common_core":"Common Core Standards","common_core_description":"Ar y chwith mae strwythur ffolder deilliannau cyfarwydd ar gyfer grŵp o Common Core State Standards. Bydd hyn yn caniatáu i chi gynnwys unrhyw un o\'r Common Core Standards ar gyfer graddio yn eich cwrs.","state_standards":"Safonau Taleithiau","state_standards_description":"Ar y chwith fe welwch ffolder ar gyfer pob talaith a’u safonau taleithiau diweddar. Mae hyn yn caniatáu i chi gynnwys safonau taleithiau ar gyfer graddio yn eich cwrs."}},"da":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandarder","account_standards_description":"Til venstre kan du se de standarder, som din institution har oprettet for dig til brug i dine fag.","common_core":"Common Core-standarder","common_core_description":"Til venstre er den velkendte læringsudbytte-mappestruktur for hver gruppering af Common Core State Standards. Dette giver dig mulighed for let at inkludere enhver Common Core-standard til vurdering i dit fag.","state_standards":"Regionale standarder","state_standards_description":"Til venstre ses en mappe for hver region med deres opdaterede regionale standarder. Dette giver dig mulighed for let at inkludere regionale standarder for vurdering i dit fag."}},"da-x-k12":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandarder","account_standards_description":"Til venstre kan du se de standarder, som din institution har oprettet for dig til brug i dine fag.","common_core":"Common Core-standarder","common_core_description":"Til venstre er den velkendte læringsudbytte-mappestruktur for hver gruppering af Common Core State Standards. Dette giver dig mulighed for let at inkludere enhver Common Core-standard til vurdering i dit fag.","state_standards":"Regionale standarder","state_standards_description":"Til venstre ses en mappe for hver region med deres opdaterede regionale standarder. Dette giver dig mulighed for let at inkludere regionale standarder for vurdering i dit fag."}},"de":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandards","account_standards_description":"Links sehen Sie die Standards, die Ihre Institution zur Verwendung in Ihren Kursen erstellt hat.","common_core":"Bildungsstandards","common_core_description":"Auf der linken Seite ist die bekannte Ergebnisordnerstruktur für jede Gruppe staatlicher Bildungsstandards. Dies erlaubt Ihnen, mühelos jeden beliebigen Bildungsstandards für die Bewertung Ihres Kurses hinzuzuziehen.","state_standards":"Bundesstaatsstandards","state_standards_description":"Links sehen Sie einen Ordner für jeden Bundesstaat mit seinen aktualisierten Standards. Auf diese Weise können Sie problemlos Bundesstaatsstandards für die Benotung in Ihrem Kurs hinzuziehen."}},"el":{"outcomesFindDirectoryVew":{"account_standards":"Πρότυπα Λογαριασμού","account_standards_description":"Αριστερά θα παρατηρήσετε τα πρότυπα που έχει δημιουργήσει για εσάς το ίδρυμά σας για να τα χρησιμοποιήσετε στα μαθήματά σας.","common_core":"Common Core Πρότυπα ","common_core_description":"Αριστερά είναι η οικεία δομή του φακέλου αποτελεσμάτων εκμάθησης για κάθε ομαδοποίηση Common Core State Standards. Αυτό θα σας επιτρέψει να περιλάβετε αβίαστα στο μάθημά σας οποιοδήποτε από τα Common Core Standards για τη βαθμολόγηση.","state_standards":"Πρότυπα της Πολιτείας","state_standards_description":"Αριστερά θα δείτε έναν φάκελο για κάθε πολιτεία με τα ενημερωμένα state standards. Αυτό σας επιτρέπει να περιλάβετε εύκολα στο μάθημά σας state standards για την βαθμολόγηση."}},"en-AU":{"outcomesFindDirectoryVew":{"account_standards":"Account Standards","account_standards_description":"To the left you\'ll notice the standards your institution has created for you to use in your courses.","common_core":"Common Core Standards","common_core_description":"To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your course.","state_standards":"State Standards","state_standards_description":"To the left you\'ll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your course."}},"en-CA":{"outcomesFindDirectoryVew":{"account_standards":"Account Standards","account_standards_description":"To the left you\'ll notice the standards your institution has created for you to use in your courses.","common_core":"Common Core Standards","common_core_description":"To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your course.","state_standards":"State Standards","state_standards_description":"To the left you\'ll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your course."}},"en-GB":{"outcomesFindDirectoryVew":{"account_standards":"Account Standards","account_standards_description":"To the left you\'ll notice the standards your institution has created for you to use in your courses.","common_core":"Common Core Standards","common_core_description":"To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your course.","state_standards":"State standards","state_standards_description":"To the left you\'ll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your course."}},"en-GB-x-ukhe":{"outcomesFindDirectoryVew":{"account_standards":"Account Standards","account_standards_description":"To the left you\'ll notice the standards your institution has created for you to use in your modules.","common_core":"Common Core Standards","common_core_description":"To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your module.","state_standards":"State standards","state_standards_description":"To the left you\'ll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your module."}},"es":{"outcomesFindDirectoryVew":{"account_standards":"Estándares de la cuenta","account_standards_description":"A la izquierda verá los estándares que ha creado su institución para que los utilice en sus cursos.","common_core":"Estándares estatales","common_core_description":"A la izquierda, se encuentra la conocida estructura de carpetas de resultados para cada grupo de los estándares estatales. Esto le permitirá incluir fácilmente cualquiera de los estándares estatales de calificación en su curso.","state_standards":"Exponer estándares","state_standards_description":"A la izquierda, verá una carpeta para cada estado con sus estándares estatales actualizados. Esto le permite incluir de manera sencilla los estándares estatales de calificación en su curso."}},"fa":{"outcomesFindDirectoryVew":{"account_standards":"استانداردهای حساب","account_standards_description":"در سمت چپ، استانداردهایی که دانشگاه شما برای استفاده در درس ها ایجاد کرده است را خواهید دید.","common_core":"استانداردهای هسته مشترک","common_core_description":"در سمت چپ، ساختار پوشه نتایج آشنا برای هر گروه از استانداردهای استانی هسته مشترک موجود است. این امر به شما امکان می دهد بدون زحمت هر گونه استاندارد هسته مشترک را برای نمره گذاری در درس خود شامل کنید.","state_standards":"استانداردهای استانی","state_standards_description":"در سمت چپ یک پوشه برای هر استان به همراه استانداردهای استانی بهنگام سازی شده آنها را خواهید دید. این امر به شما امکان می دهد استانداردهای استانی برای نمره گذاری را به راحتی در درس خود درج کنید."}},"fi":{"outcomesFindDirectoryVew":{"account_standards":"Tili standardit","account_standards_description":"Vasemmalla huomaat standardit, jotka laitoksesi on luonut sinulle käytettäväksi kurssiesi kanssa.","common_core":"Common Core -standardit","common_core_description":"Vasemmalla on tuttu tuloskansiorakenne jokaiselle Common Core -tilan standardin ryhmitykselle. Tämän avulla voit vaivatta lisätä mitä tahansa Common Core -standardeja arvosanojen antoa varten kurssisi sisällä.","state_standards":"Tilaa koskevat standardit","state_standards_description":"Vasemmalla näet kansion jokaiselle tilalle päivitettyjen tilastandardien kanssa. Tämän avulla voit kivuttomasti sisällyttää standardeja arvosanojen antoa varten kurssisi sisällä."}},"fr":{"outcomesFindDirectoryVew":{"account_standards":"Critères du compte","account_standards_description":"Sur la gauche, vous voyez les critères que votre institution a établis et que vous devez utiliser dans vos cours.","common_core":"Normes du tronc commun","common_core_description":"À gauche se trouve la structure du répertoire des résultats pour chaque groupement des normes nationales du tronc commun. Cela vous permet d\'inclure sans difficulté n\'importe quelle norme du tronc commun pour la notation dans votre cours.","state_standards":"Normes nationales","state_standards_description":"À gauche, vous verrez un répertoire pour chaque état avec les standards mis à jour pour cet état. Cela vous permet d\'inclure sans difficulté des standards d\'état pour la notation dans votre cours."}},"fr-CA":{"outcomesFindDirectoryVew":{"account_standards":"Critères du compte","account_standards_description":"Sur la gauche, vous voyez les critères que votre institution a établis et que vous devez utiliser dans vos cours.","common_core":"Les normes du tronc commun","common_core_description":"Sur la gauche se trouve la structure de dossiers d\'acquis habituelle pour chaque groupement des normes du tronc commun. Cela vous permet d\'inclure facilement n\'importe laquelle des normes du tronc commun pour la notation au sein de votre cour.","state_standards":"Normes nationales","state_standards_description":"À gauche, vous verrez un dossier pour chaque état avec leurs normes nationales mises à jour. Cela vous permet d\'inclure facilement les normes nationales pour la notation de vos cours."}},"he":{"outcomesFindDirectoryVew":{"account_standards":"תקני חשבון","account_standards_description":"בצד ניתן להבחין בתקנים שארגונך יצר עבורך לשימוש בקורסים שלך","common_core":"תקני בסיס משותפים","common_core_description":"בצד הדף ניתן להבחין במבנה המוכר של תיקיות תוצאות לכל אוגדן משותף של תקני בסיס. הדבר יאפשר לך לכלול בקלות כל תקן בסיס מקובל לביצוע ההערכה בקורס שלך","state_standards":"תקני מדינה","state_standards_description":"בצד הדף ניתן למצוא תיקיה לכל מדינה כולל תאריך עדכון התקנים. הדבר מאפשר לך לכלול ללא מאמץ תקנים להערכה בקורס שלך"}},"ht":{"outcomesFindDirectoryVew":{"account_standards":"Kont Estanda","account_standards_description":"Sou bò goch la w ap remake nòm enstitisyon ou an te kreye pou ou pou ou ka itilize nan kou ou yo.","common_core":"Nòm Bazik Prensipal","common_core_description":"Estrikti familye dosye dosye rezilta chak gwoup Twon Komen Estanda Eta yo twouve lil sou bo goch la. Sa ap pèmèt ou enkli san twò efò, nenpòt ki Nòm Twon Komen pou evalyasyon nan kou w yo.","state_standards":"Nòm Eta","state_standards_description":"Sou bò goch la w ap wè yon dosye pou chak eta ak nòm eta mizajou yo. Sa pèmèt ou enkli nòm eta notasyon yo nan kou w yo san difikilte."}},"hu":{"outcomesFindDirectoryVew":{"account_standards":"Fiókszabványok","account_standards_description":"Balra találja azon szabványokat, amelyeket az intézménye hozott létre Önnek a kurzusaiban való használatra.","common_core":"Közös törzsanyagszabvány","common_core_description":"Bal oldalon a már ismerős eredmények mappaszerkezet található a közös állami alapszabványok minden csoportjához. Ennek segítségével könnyedén hozzáadhatja a kurzushoz a közös alapszabványok bármelyikét.","state_standards":"Állami szabványok","state_standards_description":"Bal oldalon mappákat talál, amelyben az állami szabványok lettek feltöltve. Ezeket a saját kurzusában is felhasználhatja az értékelések során."}},"hy":{"outcomesFindDirectoryVew":{"account_standards":"Հաշվի ստանդարտներ","account_standards_description":"Ձախից դուք կտեսնեք ձեր կազմակերպության կողմից ստեղծված ստանդարտները, որոնք  դուք պետք է օգտագործեք  ձեր դասընթացներում:","common_core":"Ընդհանուր հիմնական ստանդարտներ","common_core_description":"Ձախից ձեզ ծանոթ արդյունքների թղթապանակի կառուցվածքն է Ընդհանուր հիմնական ստանդարտների ամեն խմբի գծով: Սա ձեզ թույլ կտա առանց մեծ ջանքերի ավելացնել Ընդհանուր հիմնական ցանկացած ստանդարտ ձեր դասընթացի գնահատման համար:","state_standards":"Պետական ստանդարտներ","state_standards_description":"Ձախ կողմում դուք տեսնում եք ամեն նահանգի համար մի թղթապանակ՝ համապատասխան թարմացված ստանդարտներով: Սա ձեզ թույլ կտա առանց մեծ ջանքերի ներառել գնահատման նահանգային ստանդարտները ձեր դասընթացում:"}},"is":{"outcomesFindDirectoryVew":{"account_standards":"Reikningsviðmið","account_standards_description":"Vinstra megin sérðu viðmiðin sem skólinn hefur stofnað fyrir þig að nota í námskeiðunum þínum.","common_core":"Common Core viðmið","common_core_description":"Vinstra megin er hefðbundin niðurstöðu möppuuppbygging fyrir hvern hóp Common Core stöðu viðmiða. Þetta gerir þér kleift að hafa hvert sem er af Common Core viðmiðunum með fyrir einkunnagjöf innan námskeiðsins.","state_standards":"Námskröfur","state_standards_description":"Til vinstri sérðu möppu fyrir hverja stöðu með uppfærðum viðmiðum fyrir stöðuna. Þetta gerir þér kleift að hafa stöðuviðmið á auðveldan hátt með fyrir einkunnagjöf innan námskeiðsins."}},"it":{"outcomesFindDirectoryVew":{"account_standards":"Standard per account","account_standards_description":"A sinistra noterai gli standard creati dal tuo istituto che devi utilizzare nei tuoi corsi.","common_core":"Standard Common Core","common_core_description":"A sinistra è presente la struttura della cartella degli esiti per ciascun raggruppamento di Common Core State Standards. In questo modo puoi includere con facilità tutti gli standard Common Core ai fini della valutazione all\'interno tuo corso.","state_standards":"Standard statali","state_standards_description":"A sinistra vedrai una cartella per ciascuno stato con gli standard statali aggiornati. In questo modo puoi includere con facilità gli standard statali per la valutazione all\'interno del tuo corso."}},"ja":{"outcomesFindDirectoryVew":{"account_standards":"アカウント標準","account_standards_description":"左側には、これらのコースのために組織が設定した標準が表示されます。","common_core":"共通のコアスタンダード","common_core_description":"左には共通コア状態基準の各グループの見慣れた結果フォルダがあります。これで、コース中、採点の状態基準を簡単に記載することができます。","state_standards":"状態の標準","state_standards_description":"左に、各状態のフォルダが状態の最新基準とあわせて表示されます。これで、コース中、採点の状態基準を簡単に記載することができます。"}},"ko":{"outcomesFindDirectoryVew":{"account_standards":"계정 표준","account_standards_description":"왼쪽으로는 과목에서 사용할 수 있도록 여러분의 기관에서 만든 표준을 볼 수 있습니다.","common_core":"공통 핵심 표준","common_core_description":"왼쪽은 친숙한 각 공통 핵심 시/도 표준 그룹의 성과 폴더입니다. 이를 이용하면 과목에서 평가를 하는 데 공통 핵심 표준을 쉽게 포함할 수 있습니다.","state_standards":"전국 표준","state_standards_description":"왼쪽에서 업데이트된 시/도 표준과 함께 각 시/도에 대한 폴더를 볼 수 있습니다. 이를 이용하면 과목에서 평가를 하는 데 시/도 표준을 쉽게 포함할 수 있습니다."}},"mi":{"outcomesFindDirectoryVew":{"account_standards":"Pūkete paerewa","account_standards_description":"Ki te maui ka kite koe i ngā parewa i hanga tō whare mau hei whakamahi i roto i tō akoranga","common_core":"Common Core Paerewa","common_core_description":"Kei te taha maui ko te hanganga putanga kōpaki o ngā rōpū o te Common Core Kaunihera Paerewa. Ma tēnei ka tukuna koe ki te whakauru i ētahi o nga Common Core Paerewa mo te kōeke i roto i tō akoranga.","state_standards":"Paerewa kāwanatanga","state_standards_description":"Ki te taha maui ka kite koe he kōpaki mo iā kaunihera me ngā paerewa kua whakahoutiamo mo ia kaunihera . Ka tukuna koe e tēnei ki te whakauru i ngā paerewa o te kaunihera mo te kōeke​i roto i tō akoranga."}},"nb":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandarder","account_standards_description":"Til venstre kan du se standardene institusjonen din har opprettet for bruk i emnene dine.","common_core":"Felles kjernestandarder","common_core_description":"På venstre side er den kjente mappestrukturen for læringsmål for hver gruppering av overordnede standarder for felles kjerne. Dette gjør det mulig å enkelt inkludere de Felles kjernestandarder du ønsker for karaktersetting innen emnet ditt.","state_standards":"Nasjonale standarder","state_standards_description":"Til venstre ser du en mappe for hver kommune med deres oppdaterte Nasjonale standarder. Dette gjør det mulig å enkelt inkludere Nasjonale standarder for karaktersetting innen emnet ditt."}},"nb-x-k12":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandarder","account_standards_description":"Til venstre kan du se standardene institusjonen din har opprettet for bruk i fagene dine.","common_core":"Felles kjernestandarder","common_core_description":"På venstre side er den kjente mappestrukturen for mål for hver gruppering av overordnede standarder for felles kjerne. Dette gjør det mulig å enkelt inkludere de Felles kjernestandarder du ønsker for karaktersetting innen faget ditt.","state_standards":"Nasjonale standarder","state_standards_description":"Til venstre ser du en mappe for hver kommune med deres oppdaterte Nasjonale standarder. Dette gjør det mulig å enkelt inkludere Nasjonale standarder for karaktersetting innen faget ditt."}},"nl":{"outcomesFindDirectoryVew":{"account_standards":"Standaards voor account","account_standards_description":"Links worden de standaards weergegeven die je instelling heeft opgesteld voor gebruik in cursussen.","common_core":"Common Core standaards","common_core_description":"Links zie je de bekende leerdoelen mappenstructuur voor iedere groepering van de Common Core State standaards. Hiermee kun je alle Common Core standaards voor beoordeling binnen jouw cursus moeiteloos toevoegen.","state_standards":"Statusstandaards","state_standards_description":"Links zie je voor elke status een map met de bijgewerkte statusstandaards. Dit maakt het mogelijk om statusstandaards moeiteloos aan te laten sluiten voor beoordeling binnen jouw cursus."}},"nn":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandardar","account_standards_description":"TIl venstre ser du standardane institusjonen din har oppretta for å bruke på emna.","common_core":"Felles kjernestandardar","common_core_description":"Til venstre er den vanlege mappestrukturen for læringsmål for kvar gruppering i felles kjernestandardar. Slik kan du enkelt bruke alle dei felles kjernestandardane til karaktersetjing på emnet ditt.","state_standards":"Nasjonale standardar","state_standards_description":"Til venstre ser du ei mappe for kvar stat med oppdaterte standardar. På denne måten kan du enkelt inkludere nasjonale standardar for karaktersetjing på emnet ditt."}},"pl":{"outcomesFindDirectoryVew":{"account_standards":"Standardy konta","account_standards_description":"Po lewej stronie można przejrzeć standardy, które przypisała Ci instytucja w celu korzystania z nich  na kursach.","common_core":"Common Core Standards","common_core_description":"Po lewej stronie znajduje się drzewo folderów wyników dla każdej grupy CCSS. Dzięki temu można w łatwy sposób uwzględnić dowolny ze standardów CCSS do oceny w ramach kursu.","state_standards":"Krajowe standardy","state_standards_description":"Po lewej stronie będzie widoczny folder dla każdego stanu ze zaktualizowanymi standardami stanów. Dzięki temu można w łatwy sposób uwzględnić standardy stanów do ocen w ramach kursu."}},"pt":{"outcomesFindDirectoryVew":{"account_standards":"Padrões da conta","account_standards_description":"À esquerda pode ver os padrões criados pela sua instituição para utilização nas suas disciplinas.","common_core":"Padrões de Núcleo Comum","common_core_description":"À esquerda está a estrutura de pastas de resultados familiares para cada agrupamento dos Padrões de estado do Núcleo Comum. Isso permitirá que você inclua sem esforço qualquer um dos Padrões de Núcleo Comum para avaliação dentro da sua disciplina.","state_standards":"Padrões do estado","state_standards_description":"À esquerda, você verá uma pasta para cada estado com seus padrões de estado atualizados. Isso permite que você inclua sem dificuldade padrões de estado para classificação dentro da sua disciplina."}},"pt-BR":{"outcomesFindDirectoryVew":{"account_standards":"Padrões de conta","account_standards_description":"À esquerda, você verá os padrões que sua instituição criou para que você utilize em seus cursos.","common_core":"Padrões do Common Core","common_core_description":"À esquerda, é a estrutura familiar de pastas de objetivos para cada agrupamento do Common Core State Standards. Isso lhe permitirá incluir qualquer um dos Common Core Standards para avaliação dentro do seu curso.","state_standards":"Padrões do estado","state_standards_description":"À esquerda, você verá uma pasta para cada estado com os seus padrões de estado atualizados. Isso lhe permite incluir padrões de estado para avaliação dentro do seu curso com facilidade."}},"ru":{"outcomesFindDirectoryVew":{"account_standards":"Стандарты учетной записи","account_standards_description":"Слева вы можете увидеть стандарты, разработанные вашей организацией, которые вы должны использовать при прохождении курсов.","common_core":"Общие ключевые стандарты","common_core_description":"Слева отображается структура папок известных результатов для каждого группирования общих ключевых государственных стандартов. Это позволяет без проблем включать любые общие ключевые стандарты для оценки в вашем курсе.","state_standards":"Стандарты государства","state_standards_description":"Слева вы увидите папку для каждой страны с обновленными государственными стандартами. Это позволяет вам без проблем включать государственные стандарты для выставления оценок в вашем курсе."}},"sv":{"outcomesFindDirectoryVew":{"account_standards":"Kontostandard","account_standards_description":"Till vänster kan du se den standard din institution har skapat för dig att använda i dina kurser.","common_core":"Common Core-standarder","common_core_description":"Till vänster är den välbekanta mappstrukturen för lärandemål för varje gruppering av Common Core-statestandarder. Det gör det möjlugt för dig att enkelt inkludera någon av Common Core-standarderna för betygsättning i din kurs.","state_standards":"State-standarder","state_standards_description":"Till vänster ser du en mapp för varje state med deras uppdaterade Det gör det möjligt för dig att enkelt inkludera state-standarder för betygsättning i din kurs."}},"tr":{"outcomesFindDirectoryVew":{"account_standards":"Hesap Standartları","account_standards_description":"Sol tarafta bu derste kullanmanız için kurumunuzun oluşturduğu standartları görebilirsiniz.","common_core":"Ortak Temel Standartlar","common_core_description":"Sol tarafta Common Core State Standards\\tCommon Core State Standards\'ın her gruplaması için bilindik öğrenme çıktıları klasör yapısını göreceksiniz. Bu sayede dersinizde notlandırma için kolay bir şekilde Common Core Standards\'tan herhangi birini kullanabilirsiniz.","state_standards":"Bölge Standartları","state_standards_description":"Sol tarafta her bir bölge için güncel bölge standartlarını içeren klasörler göreceksiniz. Bu sayede dersinizde notlandırma için kolay bir şekilde bölge standartlarını kullanabilirsiniz."}},"zh-Hans":{"outcomesFindDirectoryVew":{"account_standards":"帐户级学习标准","account_standards_description":"在左侧，您将看到您的学校为您创建的标准，以便在您的课程中使用。","common_core":"共同核心标准","common_core_description":"左侧显示了人们所熟悉的共同核心州立标准各组的结果文件夹结构。您可以轻松地包含在课程评分中要使用的共同核心标准。","state_standards":"州标准","state_standards_description":"您将在左侧看到每个州的文件夹及其更新的州立标准。您可以轻松地包含在课程评分中要使用的州立标准。"}},"zh-Hant":{"outcomesFindDirectoryVew":{"account_standards":"帳戶標準","account_standards_description":"在左側，您會注意到您的機構已為您建立了在課程中要使用的標準。","common_core":"共同核心標準","common_core_description":"左側是共同核心州立標準的每個分組的熟悉成果資料夾結構。這將允許您毫不費力地將任何共同核心標準納入您的課程等級評分中。","state_standards":"州立標準","state_standards_description":"在左側，您會看到每個州都有一個資料夾，其中包含各州已更新的州立標準。這可允許您毫不費力地將州立標準納入您的課程等級評分中。"}}}'))
var E=n["default"].scoped("outcomesFindDirectoryVew")
class A extends C{initialize(e){this.outcomes=new h["a"]
this.groups=new k
this.groups.url=ENV.ACCOUNT_CHAIN_URL
return super.initialize(e)}fetchOutcomes(){}}class D extends C{initialize(e){this.outcomes=new h["a"]
return super.initialize(...arguments)}fetchOutcomes(){}}class N extends C{initialize(e){let t,i,n
this.readOnly=true
const r=new p["a"]({dontImport:true,id:-1,title:E.t("account_standards","Account Standards"),description:E.t("account_standards_description","To the left you'll notice the standards your institution has created for you to use in your courses."),directoryClass:A})
if(ENV.STATE_STANDARDS_URL){n=new p["a"]({dontImport:true,title:E.t("state_standards","State Standards"),description:E.t("state_standards_description","To the left you'll see a folder for each state with their updated state standards. This allows for you to painlessly include state standards for grading within your course."),directoryClass:D})
n.url=ENV.STATE_STANDARDS_URL}if(ENV.COMMON_CORE_GROUP_URL){t=new p["a"]({dontImport:true,title:E.t("common_core","Common Core Standards"),description:E.t("common_core_description","To the left is the familiar outcomes folder structure for each grouping of the Common Core State Standards. This will allow you to effortlessly include any of the Common Core Standards for grading within your course.")})
t.url=ENV.COMMON_CORE_GROUP_URL}e.courseGroup&&(i=e.courseGroup)
this.outcomes=new h["a"]
this.groups=new k(_.a.compact([r,n,t,i]))
this.collection=this.groups
const o=(()=>{const e=[]
for(const i of _.a.compact([n,t])){i.on("change",this.revertTitle)
e.push(i.fetch())}return e})()
return this.$el.disableWhileLoading(s.a.when(...Array.from(o||[])).done(()=>setTimeout(()=>{this.reset()
return this.$el.find("[tabindex=0]:first").focus()})))}revertTitle(e){return e.set({title:e.previous("title"),description:e.previous("description")},{silent:true})}}i.d(t,"a",(function(){return P}))
let M
class P extends u.a.View{static initClass(){this.prototype.directoryWidth=200
this.prototype.entryHeight=30
this.prototype.events={"click .outcome-level":"clickOutcomeLevel"}}initialize(e){super.initialize(...arguments)
this.inFindDialog=e.inFindDialog
this.readOnly=e.readOnly
this.selectFirstItem=e.selectFirstItem
this.directories=[]
this.cachedDirectories={}
this.$sidebar=this.$el.parent()
this.$sidebar.width(this.directoryWidth);(this.rootOutcomeGroup=e.rootOutcomeGroup)?this.addDirFor(this.rootOutcomeGroup,true):this.addDir(e.directoryView)
return this.render()}clickOutcomeLevel(e){const t=e.target===e.currentTarget
if(!t)return
const i=s()(e.target).data("view")
return this.selectDir(i)}resetSidebar(){_.a.each(this.directories,e=>e.remove())
this.directories=[]
this.cachedDirectories={}
return this.addDirFor(this.rootOutcomeGroup,true)}addDirFor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
let i
if(this.cachedDirectories[e.id])i=this.cachedDirectories[e.id]
else{const n=_.a.last(this.directories)
const r=e.get("directoryClass")||C
const o=_.a.indexOf(this.directories,this.selectedDir())
i=new r({outcomeGroup:e,parent:n,readOnly:this.readOnly,selectFirstItem:t&&this.selectFirstItem,inFindDialog:this.inFindDialog,directoryDepth:o+1})
this.firstDir=false}return this.addDir(i)}addDir(e){e.outcomeGroup&&(this.cachedDirectories[e.outcomeGroup.id]=e)
e.off("select")
e.on("select",this.selectDir,this)
e.sidebar=this
e.clearSelection()
this.directories.push(e)
this.updateSidebarWidth()
this.renderDir(e)
return e}addAndSelect(e){e instanceof l["a"]?e.outcomeGroup=this.selectedGroup().toJSON():e.set("parent_outcome_group",this.selectedGroup().toJSON())
const t=this._findLastDir(e=>!e.selectedModel||e.selectedModel instanceof l["a"])
e instanceof l["a"]?t.outcomes.add(e):t.groups.add(e)
this._scrollToDir(_.a.indexOf(this.directories,t),e)
return e.trigger("select")}selectDir(e,t){const i=e||this.directories[0]
i&&!t&&i.clearSelection()
const n=_.a.indexOf(this.directories,i)
const r=this.directories.splice(n+1,this.directories.length-(n+1))
_.a.each(r,e=>e.remove())
const o=t instanceof p["a"]&&!t.isNew()
o&&this.addDirFor(t)
this.updateSidebarWidth()
const a=o?n+1:n
this._scrollToDir(a,t)
let s=t
this.goingBack&&(s=i.parent?i.outcomeGroup:null)
return this.trigger("select",s,this.directories)}refreshSelection(e){const t=this.selectedDir()
if(e===t.selectedModel){t.clearSelection()
return e.trigger("select")}}selectedDir(){return this._findLastDir(e=>e.selectedModel)}selectedModel(){return q(this.selectedDir(),e=>e.selectedModel)}selectedGroup(){let e=null
this._findLastDir(t=>{if(t.selectedModel instanceof p["a"])return e=t.selectedModel})
return e||this.rootOutcomeGroup}clearOutcomeSelection(){return _.a.last(this.directories).clearOutcomeSelection()}goBack(){this.goingBack=true
if(this.selectedModel()instanceof p["a"])this.selectDir(this.selectedDir())
else{const e=_.a.indexOf(this.directories,this.selectedDir())
this.selectDir(this.directories[e-1])}this.selectedDir().makeFocusable()
return this.goingBack=false}updateSidebarWidth(){const e=1===this.directories.length?this.directoryWidth:2*this.directoryWidth
this.$el.css({width:this.directoryWidth*this.directories.length})
return this.$sidebar.animate({width:e})}renderDir(e){return this.$el.append(e.render().el)}render(){this.$el.empty()
_.a.each(this.directories,e=>this.renderDir(e))
return this}findDialog(e){if(M)M.updateSelection(this.selectedGroup())
else{M=new e({title:o.t("titles.find_outcomes","Find Outcomes"),selectedGroup:this.selectedGroup(),directoryView:new N({outcomeGroup:this.selectedGroup()})})
M.on("import",this.addAndSelect,this)}return M.show()}dirForGroup(e){return _.a.find(this.directories,t=>t.outcomeGroup===e)||this.addDirFor(e)}moveItem(e,t){let i
const n=e.get("parent_outcome_group")||e.outcomeGroup
const r=this.cachedDirectories[n.id]
const a=this.cachedDirectories[t.id]
if(n.id===t.id){s.a.flashError(o.t("%{model} is already located in %{newGroup}",{model:e.get("title"),newGroup:t.get("title")}))
return}i=e instanceof p["a"]?r.moveGroup(e,t.toJSON()):r.changeLink(e,t.toJSON())
return i.done(()=>{const n=e instanceof p["a"]?"groups":"outcomes"
if(a){i=a[n].fetch()
i.done(()=>a.needsReset=true)}r[n].fetch()
const c=r.parent
c&&this.selectDir(c,c.selectedModel)
e.trigger("finishedMoving")
s()(".selected:last").focus()
return setTimeout(()=>s.a.flashMessage(o.t("Successfully moved %{model} to %{newGroup}",{model:e.get("title"),newGroup:t.get("title")})),1500)})}_scrollToDir(e,t){const i=this.directoryWidth*(t instanceof l["a"]?e-1:e)
this.$sidebar.animate({scrollLeft:i},{duration:200})
const n=(this.entryHeight+1)*_.a.indexOf(this.directories[e].views(),_.a.find(this.directories[e].views(),e=>e.model===t))
return this.directories[e].$el.animate({scrollTop:n},{duration:200})}_findLastDir(e){return _.a.find(_.a.clone(this.directories).reverse(),e)||_.a.last(this.directories)}}P.initClass()
function q(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},GXQz:function(e,t,i){"use strict"
i.r(t)
var n=i("ANjH")
var r=i("An8g")
var o=i("q1tI")
var a=i.n(o)
var s=i("i8i4")
var c=i.n(s)
var _=i("/MKj")
var d=i("17x9")
var u=i.n(d)
var l=i("VTJ5")
var p=i("pQTu")
var m=i("m0r6")
Object(m["a"])(JSON.parse('{"ar":{"loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"cy":{"loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"el":{"loading_bde52856":"Φόρτωση"},"en-AU":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","mastery_paths_breakdown_6e0b5fce":"Desglose de los caminos del dominio"},"fa":{"loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","mastery_paths_breakdown_6e0b5fce":"Hallintapolkujen erittely"},"fr":{"loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"hy":{"loading_bde52856":"Բեռնում է"},"is":{"loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中...","mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"sv-x-k12":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"tr":{"loading_bde52856":"Yükleniyor"},"uk":{"loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}'))
i("jQeR")
i("0sPK")
var g=p["default"].scoped("cyoe_assignment_sidebar_breakdown_graphs")
var f=i("MdYG")
Object(m["a"])(JSON.parse('{"ar":{"lowerbound_to_upperbound_352a3c0b":"من %{lowerBound}+ إلى %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} من إجمالي %{totalStudents} طالب","view_range_student_details_8116d68a":"عرض تفاصيل نطاق الطالب"},"cy":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ at %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} allan o %{totalStudents} o fyfyrwyr","view_range_student_details_8116d68a":"Gweld manylion defnyddiwr ar gyfer yr ystod"},"da":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} studerende","view_range_student_details_8116d68a":"Se område i studerendes detaljer"},"da-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} elever","view_range_student_details_8116d68a":"Se område i elevens detaljer"},"de":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ bis %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} von %{totalStudents} Studenten","view_range_student_details_8116d68a":"Studentendetails nach Bereichen anzeigen"},"en-AU":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-AU-x-unimelb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-CA":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-lbs":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-ukhe":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"es":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ hasta %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} estudiantes","view_range_student_details_8116d68a":"Ver la gama de detalles del estudiante"},"fa":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ به %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} از %{totalStudents} دانشجو","view_range_student_details_8116d68a":"مشاهده بازه بندی اطلاعات دانشجو"},"fi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ kohteeseen %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}/%{totalStudents} opiskelijaa","view_range_student_details_8116d68a":"Tarkastele opiskelijatietojen vaihteluväliä"},"fr":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} élèves","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'élèves"},"fr-CA":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} étudiants","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'étudiant"},"he":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ל %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} מתוך %{totalStudents} תלמידים","view_range_student_details_8116d68a":"הצגת פרטי קבוצת תלמידים"},"ht":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sou %{totalStudents} elèv","view_range_student_details_8116d68a":"Afichaj detay gam elèv"},"hu":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ - %{upperBound}"},"is":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} af  %{totalStudents} nemendum","view_range_student_details_8116d68a":"Skoða upplýsingar um nemendahóp"},"it":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} su %{totalStudents} studenti","view_range_student_details_8116d68a":"Visualizza dettagli studenti intervallo"},"ja":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ から%{upperBound} へ","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents} の受講生","view_range_student_details_8116d68a":"範囲の受講生の詳細を見る"},"mi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ki %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} I roto i %{totalStudents} ngā akonga","view_range_student_details_8116d68a":"Tiro whānui ngā taipitopito ākonga"},"nb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studenter","view_range_student_details_8116d68a":"Vis studentdetaljserie"},"nb-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} elever","view_range_student_details_8116d68a":"Vis elevdetaljserie"},"nl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ naar %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} van %{totalStudents} cursisten","view_range_student_details_8116d68a":"Weergavebereik cursistgegevens"},"nn":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studentar","view_range_student_details_8116d68a":"Sjå studentdetaljar innan området"},"pl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} z %{totalStudents} uczestników","view_range_student_details_8116d68a":"Wyświetl szczegóły uczestników z zakresu"},"pt":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Ver intervalo de detalhes do aluno"},"pt-BR":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ para %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Visualizar detalhes do aluno do intervalo"},"ru":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} из %{totalStudents} учащихся","view_range_student_details_8116d68a":"Просмотреть сведения об учащихся из диапазона"},"sl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} od %{totalStudents} študentov","view_range_student_details_8116d68a":"Ogled podrobnosti o študentu za razpon"},"sv":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ut från %{totalStudents} studenter","view_range_student_details_8116d68a":" Visa omfång studentdetaljer"},"sv-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ut från %{totalStudents} elever","view_range_student_details_8116d68a":"Visa omfång elevdetaljer"},"uk":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}з %{totalStudents}студентів","view_range_student_details_8116d68a":"Переглянути детальну інформацію про студента"},"zh-Hans":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 到 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents}个学生","view_range_student_details_8116d68a":"查看学生详细信息范围"},"zh-Hant":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 至 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}  %{totalStudents} 個學生","view_range_student_details_8116d68a":"查看範圍學生詳細資料"}}'))
var h=p["default"].scoped("cyoe_assignment_sidebar_breakdown_graph_bar")
u.a.string,u.a.number,u.a.func
var b=Object(r["a"])("div",{className:"crs-bar__horizontal-inside"})
class v extends a.a.Component{constructor(){super(...arguments)
this.selectRange=e=>{this.props.openSidebar(e.target)
this.props.selectRange(this.props.rangeIndex)}}renderInnerBar(){const e=Math.min(this.props.rangeStudents/this.props.totalStudents*100,100)
const t={width:e+"%"}
return e>0?Object(r["a"])("div",{style:t,className:"crs-bar__horizontal-inside-fill"}):null}render(){const e=this.props,t=e.rangeStudents,i=e.totalStudents
return Object(r["a"])("div",{className:"crs-bar__container"},void 0,Object(r["a"])("div",{className:"crs-bar__horizontal-outside"},void 0,b,this.renderInnerBar()),Object(r["a"])("div",{className:"crs-bar__bottom"},void 0,Object(r["a"])("span",{className:"crs-bar__info"},void 0,h.t("%{lowerBound}+ to %{upperBound}",{upperBound:this.props.upperBound,lowerBound:this.props.lowerBound})),Object(r["a"])("button",{className:"crs-link-button",onClick:this.selectRange,title:h.t("View range student details")},void 0,h.t("%{rangeStudents} out of %{totalStudents} students",{rangeStudents:t,totalStudents:i}))))}}var y=v
u.a.object,u.a.array,u.a.func,u.a.number,u.a.bool
class k extends a.a.Component{renderContent(){return this.props.isLoading?Object(r["a"])("div",{className:"crs-breakdown-graph__loading"},void 0,Object(r["a"])(l["a"],{renderTitle:g.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,g.t("Loading Data.."))):this.renderBars()}renderBars(){const e=this.props,t=e.ranges,i=e.assignment,n=e.enrolled,o=e.openSidebar,a=e.selectRange
return t.map((e,t)=>{let s=e.size,c=e.scoring_range
return Object(r["a"])(y,{rangeIndex:t,rangeStudents:s,totalStudents:n,upperBound:Object(f["b"])(c.upper_bound,i,true),lowerBound:Object(f["b"])(c.lower_bound,i,false),openSidebar:o,selectRange:a},t)})}render(){return Object(r["a"])("div",{className:"crs-breakdown-graph"},void 0,Object(r["a"])("h2",{},void 0,g.t("Mastery Paths Breakdown")),this.renderContent())}}var w=k
var z=i("Xx/m")
var S=i("7Hz5")
var j=i("IRk9")
Object(m["a"])(JSON.parse('{"ar":{"close_details_sidebar_ff8f663d":"إغلاق الشريط الجانبي للتفاصيل"},"cy":{"close_details_sidebar_ff8f663d":"Cau’r bar manylion ar yr ochr"},"da":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"da-x-k12":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"de":{"close_details_sidebar_ff8f663d":"Details-Seitenleiste schließen"},"en-AU":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-AU-x-unimelb":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-CA":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-lbs":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-ukhe":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"es":{"close_details_sidebar_ff8f663d":"Cerrar la barra lateral de detalles"},"fa":{"close_details_sidebar_ff8f663d":"بستن نوار کناری جزئیات"},"fi":{"close_details_sidebar_ff8f663d":"Sulje tietojen sivupalkki"},"fr":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"fr-CA":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"he":{"close_details_sidebar_ff8f663d":"סגירת פירוט סרגל צדי"},"ht":{"close_details_sidebar_ff8f663d":"Fèmen detay ba lateral yo"},"is":{"close_details_sidebar_ff8f663d":"Loka hliðarslárupplýsingum"},"it":{"close_details_sidebar_ff8f663d":"Chiudi barra laterale dettagli"},"ja":{"close_details_sidebar_ff8f663d":"詳細のサイドバーを閉じる"},"mi":{"close_details_sidebar_ff8f663d":"Katia kōrero paetaha"},"nb":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nb-x-k12":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nl":{"close_details_sidebar_ff8f663d":"Zijbalk met details sluiten"},"nn":{"close_details_sidebar_ff8f663d":"Lukk detalj-sidestolpen"},"pl":{"close_details_sidebar_ff8f663d":"Zamknij pasek boczny ze szczegółami"},"pt":{"close_details_sidebar_ff8f663d":"Fechar detalhes da barra lateral"},"pt-BR":{"close_details_sidebar_ff8f663d":"Fechar barra lateral de detalhes"},"ru":{"close_details_sidebar_ff8f663d":"Закрыть боковую панель с деталями"},"sl":{"close_details_sidebar_ff8f663d":"Zapri stransko vrstico s podrobnostmi"},"sv":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"sv-x-k12":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"tr":{"close_details_sidebar_ff8f663d":"Ayrıntılar kenar çubuğunu kapat"},"uk":{"close_details_sidebar_ff8f663d":"Закрити деталі бічної панелі"},"zh-Hans":{"close_details_sidebar_ff8f663d":"关闭详细信息侧边栏"},"zh-Hant":{"close_details_sidebar_ff8f663d":"關閉詳細側邊欄"}}'))
var x=p["default"].scoped("cyoe_assignment_sidebar_breakdown_details")
var C=i("KIj7")
var O=i("S4Kx")
var E=i("CyXg")
var A=i("HsON")
var D=i("TSYQ")
var N=i.n(D)
Object(m["a"])(JSON.parse('{"ar":{"mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"cy":{"mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"en-AU":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"mastery_paths_breakdown_6e0b5fce":"Desglose de los caminos del dominio"},"fa":{"mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"mastery_paths_breakdown_6e0b5fce":"Hallintapolkujen erittely"},"fr":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"is":{"mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"sv-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"uk":{"mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}'))
var M=p["default"].scoped("cyoe_assignment_sidebar_student_ranges_view")
const P=u.a.shape,q=u.a.string
P({course_id:q.isRequired,trigger_assignment:q.isRequired})
const B=u.a.shape,T=u.a.arrayOf,I=u.a.string,L=u.a.number
B({course_id:L,name:I,title:I,grading_scheme:I,grading_type:I.isRequired,points_possible:L.isRequired,submission_types:T(I)})
const R=u.a.shape,G=u.a.number
R({range:G,student:G})
const F=u.a.shape,U=u.a.string,V=u.a.number
F({id:V.isRequired,name:U.isRequired,avatar_url:U})
Object(m["a"])(JSON.parse('{"ar":{"select_student_name_caaff244":"تحديد طالب %{name}"},"cy":{"select_student_name_caaff244":"Dewiswch fyfyriwr %{name}"},"da":{"select_student_name_caaff244":"Vælg studerende %{name}"},"da-x-k12":{"select_student_name_caaff244":"Vælg elev %{name}"},"de":{"select_student_name_caaff244":"Student auswählen %{name}"},"en-AU":{"select_student_name_caaff244":"Select student %{name}"},"en-AU-x-unimelb":{"select_student_name_caaff244":"Select student %{name}"},"en-CA":{"select_student_name_caaff244":"Select student %{name}"},"en-GB":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-lbs":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-ukhe":{"select_student_name_caaff244":"Select student %{name}"},"es":{"select_student_name_caaff244":"Seleccionar estudiante %{name}"},"fa":{"select_student_name_caaff244":"انتخاب دانشجوی %{name}"},"fi":{"select_student_name_caaff244":"Valitse opiskelija %{name}"},"fr":{"select_student_name_caaff244":"Sélectionner un élève %{name}"},"fr-CA":{"select_student_name_caaff244":"Sélectionner un étudiant %{name}"},"he":{"select_student_name_caaff244":"בחירת התלמיד %{name}"},"ht":{"select_student_name_caaff244":"Seleksyone elèv %{name}"},"is":{"select_student_name_caaff244":"Velja nemanda %{name}"},"it":{"select_student_name_caaff244":"Seleziona studente %{name}"},"ja":{"select_student_name_caaff244":"受講生の選択%{name}"},"mi":{"select_student_name_caaff244":"Tīpako ākonga %{name}"},"nb":{"select_student_name_caaff244":"Velg student %{name}"},"nb-x-k12":{"select_student_name_caaff244":"Velg elev %{name}"},"nl":{"select_student_name_caaff244":"Cursist selecteren %{name}"},"nn":{"select_student_name_caaff244":"Vel student %{name}"},"pl":{"select_student_name_caaff244":"Wybierz uczestnika %{name}"},"pt":{"select_student_name_caaff244":"Seleccionar aluno %{name}"},"pt-BR":{"select_student_name_caaff244":"Selecionar aluno %{name}"},"ru":{"select_student_name_caaff244":"Выбрать учащегося %{name}"},"sl":{"select_student_name_caaff244":"Izberi študenta %{name}"},"sv":{"select_student_name_caaff244":"Välj student %{name}"},"sv-x-k12":{"select_student_name_caaff244":"Välj elev %{name}"},"uk":{"select_student_name_caaff244":"Вибрати студента %{name}"},"zh-Hans":{"select_student_name_caaff244":"选择学生%{name}"},"zh-Hant":{"select_student_name_caaff244":"選取學生%{name}"}}'))
var H=p["default"].scoped("cyoe_assignment_sidebar_student_range_itme")
class W extends a.a.Component{constructor(){super(...arguments)
this.selectStudent=()=>{this.props.selectStudent(this.props.studentIndex)}}render(){const e=this.props.student.user.avatar_image_url||"/images/messages/avatar-50.png"
const t=this.props.student.trend
const i=N()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===t,"crs-student__trend-icon__neutral":0===t,"crs-student__trend-icon__negative":-1===t})
const n=null!==t&&void 0!==t
return Object(r["a"])("div",{className:"crs-student-range__item"},void 0,Object(r["a"])("img",{src:e,className:"crs-student__avatar",onClick:this.selectStudent}),Object(r["a"])("button",{className:"crs-student__name crs-link-button",onClick:this.selectStudent,"aria-label":H.t("Select student %{name}",{name:this.props.student.user.name})},void 0,this.props.student.user.name),n&&Object(r["a"])("span",{className:i}))}}u.a.object,u.a.func
class K extends a.a.Component{render(){this.props.range.students
return Object(r["a"])("div",{className:"crs-student-range"},void 0,this.props.range.students.map((e,t)=>Object(r["a"])(W,{student:e,studentIndex:t,selectStudent:this.props.onStudentSelect},e.user.id)))}}u.a.array,u.a.func,u.a.object
class J extends a.a.Component{constructor(e){super()
this.handleToggle=e=>{this.setState({selectedRange:e})}
this.state={selectedRange:e.selectedPath.range}}renderTabs(){return this.props.ranges.map((e,t)=>{const i=this.state.selectedRange===t
const n=Object(f["b"])(e.scoring_range.lower_bound,this.props.assignment,false)
const o=Object(f["b"])(e.scoring_range.upper_bound,this.props.assignment,true)
const a="> ".concat(n," - ").concat(o)
return Object(r["a"])(O["a"],{as:"div",padding:"xxx-small"},void 0,Object(r["a"])(C["a"],{variant:"filled",expanded:i,summary:a,onToggle:()=>this.handleToggle(t),size:"large",iconExpanded:E["a"],icon:A["a"]},t,Object(r["a"])(K,{range:e,onStudentSelect:this.props.selectStudent})))})}render(){const e=!!this.props.student
const t=N()({"crs-ranges-view":true,"crs-ranges-view__hidden":e})
return Object(r["a"])("div",{className:t},void 0,Object(r["a"])("header",{className:"crs-ranges-view__header"},void 0,Object(r["a"])("h4",{},void 0,M.t("Mastery Paths Breakdown"))),this.renderTabs())}}Object(m["a"])(JSON.parse('{"ar":{"back_2900f52a":"عودة","loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","not_submitted_7d05fdb4":"لم يتم إرسالها","send_message_6ccc90e8":"إرسال رسالة","submitted_submitdate_bdd3bf09":"تم الإرسال: %{submitDate}","view_next_student_9fc72fef":"عرض الطالب التالي","view_previous_student_90000459":"عرض الطالب السابق","view_submission_ff3da5d":"عرض الإرسال"},"cy":{"back_2900f52a":"Yn ôl","loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","not_submitted_7d05fdb4":"Heb Gyflwyno","send_message_6ccc90e8":"Anfon Neges","submitted_submitdate_bdd3bf09":"Wedi cyflwyno: %{submitDate}","view_next_student_9fc72fef":"gweld y myfyriwr nesaf","view_previous_student_90000459":"gweld y myfyriwr blaenorol","view_submission_ff3da5d":"Gweld Cyflwyniad"},"da":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste studerende","view_previous_student_90000459":"se tidligere studerende","view_submission_ff3da5d":"Vis aflevering"},"da-x-k12":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste elev","view_previous_student_90000459":"se tidligere elev","view_submission_ff3da5d":"Vis aflevering"},"de":{"back_2900f52a":"Zurück","loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","not_submitted_7d05fdb4":"Nicht abgegeben","send_message_6ccc90e8":"Nachricht senden","submitted_submitdate_bdd3bf09":"Abgegeben am: %{submitDate}","view_next_student_9fc72fef":"Nächsten Studenten anzeigen","view_previous_student_90000459":"Vorherigen Studenten anzeigen","view_submission_ff3da5d":"Abgabe anzeigen"},"el":{"back_2900f52a":"Πίσω","loading_bde52856":"Φόρτωση"},"en-AU":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-AU-x-unimelb":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-CA":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-GB":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-lbs":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-ukhe":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"es":{"back_2900f52a":"Volver","loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","not_submitted_7d05fdb4":"No entregado","send_message_6ccc90e8":"Enviar mensaje","submitted_submitdate_bdd3bf09":"Entregado: %{submitDate}","view_next_student_9fc72fef":"ver siguiente estudiante","view_previous_student_90000459":"ver estudiante anterior","view_submission_ff3da5d":"Ver entrega"},"fa":{"back_2900f52a":"بازگشت","loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","not_submitted_7d05fdb4":"ارسال نشده است","send_message_6ccc90e8":"ارسال پیام","submitted_submitdate_bdd3bf09":"ارسال شده: %{submitDate}","view_next_student_9fc72fef":"مشاهده دانشجوی بعدی","view_previous_student_90000459":"مشاهده دانشجوی قبلی","view_submission_ff3da5d":"مشاهده مورد ارسالی"},"fi":{"back_2900f52a":"Takaisin","loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","not_submitted_7d05fdb4":"Ei lähetetty","send_message_6ccc90e8":"Lähetä viesti","submitted_submitdate_bdd3bf09":"Lähetetty: %{submitDate}","view_next_student_9fc72fef":"tarkastele seuraavaa opiskelija","view_previous_student_90000459":"tarkastele edellistä opiskelijaa","view_submission_ff3da5d":"Näytä lähetystä"},"fr":{"back_2900f52a":"Retour","loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'élève suivant","view_previous_student_90000459":"voir l\'élève précédent","view_submission_ff3da5d":"Voir la soumission"},"fr-CA":{"back_2900f52a":"Retour","loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer un message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'étudiant suivant","view_previous_student_90000459":"voir l\'étudiant précédent","view_submission_ff3da5d":"Voir l’envoi"},"he":{"back_2900f52a":"חזרה","loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","not_submitted_7d05fdb4":"לא הוגש","send_message_6ccc90e8":"שליחת הודעה","submitted_submitdate_bdd3bf09":"הוגש: %{submitDate}","view_next_student_9fc72fef":"הצגת התלמיד הבא","view_previous_student_90000459":"הצגת התלמיד הקודם","view_submission_ff3da5d":"הצגת הגשה"},"ht":{"back_2900f52a":"Retounen","loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","not_submitted_7d05fdb4":"Pa Soumèt","send_message_6ccc90e8":"Voye Mesaj","submitted_submitdate_bdd3bf09":"Soumèt: %{submitDate}","view_next_student_9fc72fef":"afichaj pwochen elèv","view_previous_student_90000459":"afichaj elèv pase","view_submission_ff3da5d":"Afichaj Soumisyon"},"hu":{"back_2900f52a":"Vissza","loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","not_submitted_7d05fdb4":"Nincs beküldve","send_message_6ccc90e8":"Üzenetküldés","view_next_student_9fc72fef":"következő hallgató megtekintése","view_previous_student_90000459":"előző hallgató megtekintése","view_submission_ff3da5d":"Beadandó megtekintése"},"hy":{"back_2900f52a":"Վերադառնալ","loading_bde52856":"Բեռնում է"},"is":{"back_2900f52a":"Til baka","loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","not_submitted_7d05fdb4":"Ekki lagt fram","send_message_6ccc90e8":"Senda skilaboð","submitted_submitdate_bdd3bf09":"Skilað: %{submitDate}","view_next_student_9fc72fef":"skoða næsta nemanda","view_previous_student_90000459":"skoða fyrri nemanda","view_submission_ff3da5d":"Skoða skil"},"it":{"back_2900f52a":"Indietro","loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","not_submitted_7d05fdb4":"Non inviato","send_message_6ccc90e8":"Invia messaggio","submitted_submitdate_bdd3bf09":"Inviato: %{submitDate}","view_next_student_9fc72fef":"visualizza studente successivo","view_previous_student_90000459":"visualizza studente precedente","view_submission_ff3da5d":"Visualizza consegna"},"ja":{"back_2900f52a":"戻る","loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中...","not_submitted_7d05fdb4":"未提出","send_message_6ccc90e8":"メッセージを送信","submitted_submitdate_bdd3bf09":"提出しました：%{submitDate}","view_next_student_9fc72fef":"次の受講生を見る","view_previous_student_90000459":"前の受講生を見る","view_submission_ff3da5d":"提出を見る"},"mi":{"back_2900f52a":"Hoki ki muri","loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","not_submitted_7d05fdb4":"E Kore E Tukua","send_message_6ccc90e8":"Tukua Karere","submitted_submitdate_bdd3bf09":"Kua tukuna %{submitDate}","view_next_student_9fc72fef":"Tiro ākonga i muri mai","view_previous_student_90000459":"Tiro ākonga o mua","view_submission_ff3da5d":"Tiro Tāpaetanga"},"nb":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis forrige student","view_submission_ff3da5d":"Vis innlevering"},"nb-x-k12":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste elev","view_previous_student_90000459":"vis forrige elev","view_submission_ff3da5d":"Vis innlevering"},"nl":{"back_2900f52a":"Terug","loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","not_submitted_7d05fdb4":"Niet ingediend","send_message_6ccc90e8":"Bericht versturen","submitted_submitdate_bdd3bf09":"Ingeleverd: %{submitDate}","view_next_student_9fc72fef":"volgende cursist weergeven","view_previous_student_90000459":"vorige cursist weergeven","view_submission_ff3da5d":"Inlevering weergeven"},"nn":{"back_2900f52a":"Tilbake","loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","not_submitted_7d05fdb4":"Ikkje levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Innlevert %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis førre student","view_submission_ff3da5d":"Vis innlevering"},"pl":{"back_2900f52a":"Wstecz","loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","not_submitted_7d05fdb4":"Nie wysłano","send_message_6ccc90e8":"Wyślij wiadomość","submitted_submitdate_bdd3bf09":"Wysłano: %{submitDate}","view_next_student_9fc72fef":"Wyświetl kolejnego uczestnika","view_previous_student_90000459":"Wyświetl poprzedniego uczestnika","view_submission_ff3da5d":"Wyświetl wysłane materiały"},"pt":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","not_submitted_7d05fdb4":"Não Entregue","send_message_6ccc90e8":"Enviar Mensagem","submitted_submitdate_bdd3bf09":"Submetido: %{submitDate}","view_next_student_9fc72fef":"ver próximo aluno","view_previous_student_90000459":"ver aluno anterior","view_submission_ff3da5d":"Ver Submissão"},"pt-BR":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","not_submitted_7d05fdb4":"Não Enviado","send_message_6ccc90e8":"Enviar mensagem","submitted_submitdate_bdd3bf09":"Enviado: %{submitDate}","view_next_student_9fc72fef":"exibir próximo aluno","view_previous_student_90000459":"exibir aluno anterior","view_submission_ff3da5d":"Visualizar envio"},"ru":{"back_2900f52a":"Назад","loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","not_submitted_7d05fdb4":"Не отправлено","send_message_6ccc90e8":"Отправить сообщение","submitted_submitdate_bdd3bf09":"Отправлено: %{submitDate}","view_next_student_9fc72fef":"просмотреть следующего учащегося","view_previous_student_90000459":"просмотреть предыдущего учащегося","view_submission_ff3da5d":"Просмотреть отправленные материалы"},"sl":{"back_2900f52a":"Nazaj","loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","not_submitted_7d05fdb4":"Ni oddano.","send_message_6ccc90e8":"Pošlji sporočilo","submitted_submitdate_bdd3bf09":"Poslano: %{submitDate}","view_next_student_9fc72fef":"ogled naslednjega študenta","view_previous_student_90000459":"ogled prejšnjega študenta","view_submission_ff3da5d":"Ogled oddaje"},"sv":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","not_submitted_7d05fdb4":"Inte inskickad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inskickad: %{submitDate}","view_next_student_9fc72fef":" visa nästa student","view_previous_student_90000459":"visa föregående student","view_submission_ff3da5d":"Visa uppgift"},"sv-x-k12":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","not_submitted_7d05fdb4":"Inte inskickad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inskickad: %{submitDate}","view_next_student_9fc72fef":"visa nästa elev","view_previous_student_90000459":"visa föregående elev","view_submission_ff3da5d":"Visa uppgift"},"tr":{"back_2900f52a":"Geri","loading_bde52856":"Yükleniyor","send_message_6ccc90e8":"Mesaj Gönder"},"uk":{"back_2900f52a":"Назад","loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","not_submitted_7d05fdb4":"Не відправлено","send_message_6ccc90e8":"Відправити повідомлення","submitted_submitdate_bdd3bf09":"Відправлено: %{submitDate}","view_next_student_9fc72fef":"переглянути наступного студента","view_previous_student_90000459":"переглянути попереднього студента","view_submission_ff3da5d":"Переглянути відправлення"},"zh-Hans":{"back_2900f52a":"后退","loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"发送消息","submitted_submitdate_bdd3bf09":"已提交%{submitDate}","view_next_student_9fc72fef":"查看下一个学生","view_previous_student_90000459":"查看上一个学生","view_submission_ff3da5d":"查看提交的作业"},"zh-Hant":{"back_2900f52a":"返回","loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"傳送訊息","submitted_submitdate_bdd3bf09":"已提交：%{submitDate}","view_next_student_9fc72fef":"查看下一個學生","view_previous_student_90000459":"查看上一個學生","view_submission_ff3da5d":"檢視提交項目"}}'))
var Q=p["default"].scoped("cyoe_assignment_sidebar_student_details_view")
var Y=i("Pm+R")
u.a.object,u.a.number
class $ extends a.a.Component{render(){const e=this.props.trend
const t=N()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===e,"crs-student__trend-icon__neutral":0===e,"crs-student__trend-icon__negative":-1===e})
const i=null!==e&&void 0!==e
const n=Y["a"].getCategory(this.props.assignment).id
return Object(r["a"])("div",{className:"crs-student-details__assignment"},void 0,Object(r["a"])("i",{className:"icon-".concat(n," crs-student-details__assignment-icon crs-icon-").concat(n)}),Object(r["a"])("div",{className:"crs-student-details__assignment-name"},void 0,this.props.assignment.name),Object(r["a"])("div",{className:"crs-student-details__assignment-score"},void 0,Object(r["a"])("div",{},void 0,Object(f["b"])(this.props.assignment.score,this.props.assignment,true)),i&&Object(r["a"])("span",{className:t})))}}u.a.shape,u.a.string,u.a.number,u.a.arrayOf,u.a.func,u.a.bool
var X=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var Z=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var ee=Object(r["a"])("i",{"aria-hidden":true,className:"icon-email crs-icon-email"})
var te=Object(r["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-right"})
class ie extends a.a.Component{componentDidUpdate(e){this.props.student&&!e.student&&setTimeout(()=>this.backButton.focus(),100)}renderHeader(){if(!this.props.student)return null
return Object(r["a"])("header",{className:"crs-student-details__header"},void 0,a.a.createElement("button",{className:"crs-breakdown__link crs-back-button",ref:e=>{this.backButton=e},onClick:this.props.unselectStudent},X,Q.t("Back")))}renderStudentProfile(){const e=this.props,t=e.student,i=e.triggerAssignment
const n=i.assignment
const o=t.avatar_image_url||"/images/messages/avatar-50.png"
const a="/conversations?context_id=course_".concat(n.course_id,"&user_id=").concat(t.id,"&user_name=").concat(t.name)
return Object(r["a"])("section",{className:"crs-student-details__profile-content"},void 0,Object(r["a"])("button",{className:"Button Button--icon-action student-details__prev-student","aria-label":Q.t("view previous student"),onClick:this.props.selectPrevStudent,type:"button"},void 0,Z),Object(r["a"])("div",{className:"crs-student-details__profile-inner-content"},void 0,Object(r["a"])("img",{src:o,"aria-hidden":true,className:"crs-student-details__profile-image"}),Object(r["a"])("h3",{className:"crs-student-details__name"},void 0,t.name),Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:a,className:"crs-breakdown__link"},void 0,ee,Q.t("Send Message"))),Object(r["a"])("button",{className:"Button Button--icon-action student-details__next-student","aria-label":Q.t("view next student"),onClick:this.props.selectNextStudent,type:"button"},void 0,te))}renderTriggerAssignment(){const e=this.props,t=e.student,i=e.triggerAssignment
const n=i||{},o=n.assignment,a=n.submission
const s="/courses/".concat(o.course_id,"/assignments/").concat(o.id,"/submissions/").concat(t.id)
let c=null
c=a?a.submitted_at?Q.l("date.formats.long",new Date(a.submitted_at)):null:Q.t("Not Submitted")
return Object(r["a"])("section",{className:"crs-student-details__score-content"},void 0,Object(r["a"])("h3",{className:"crs-student-details__score-number"},void 0,Object(f["a"])(a.grade,o)),Object(r["a"])("div",{className:"crs-student-details__score-title"},void 0,o.name),c?Object(r["a"])("div",{className:"crs-student-details__score-date"},void 0,Q.t("Submitted: %{submitDate}",{submitDate:c})):null,Object(r["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:s,className:"crs-breakdown__link"},void 0,Q.t("View Submission")))}renderFollowOnAssignments(){const e=this.props.followOnAssignments||[]
return Object(r["a"])("section",{},void 0,e.map((e,t)=>Object(r["a"])($,{assignment:e.assignment,score:e.score,trend:e.trend},t)))}renderContent(){if(this.props.isLoading)return Object(r["a"])("div",{className:"crs-student-details__loading"},void 0,Object(r["a"])(l["a"],{renderTitle:Q.t("Loading"),size:"small"}),Object(r["a"])("p",{},void 0,Q.t("Loading Data..")))
if(this.props.student)return Object(r["a"])("div",{},void 0,this.renderStudentProfile(),this.renderTriggerAssignment(),this.renderFollowOnAssignments())
return null}render(){const e=!this.props.student
const t=N()({"crs-student-details":true,"crs-student-details__hidden":e})
return Object(r["a"])("div",{className:t},void 0,this.renderHeader(),this.renderContent())}}u.a.array,u.a.object,u.a.func,u.a.bool
class ne extends a.a.Component{constructor(){super(...arguments)
this.unselectStudent=()=>{this.props.selectStudent(null)}
this.selectPrevStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e>0?e-=1:e=t.size-1
this.props.selectStudent(e)}
this.selectNextStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e<t.size-1?e+=1:e=0
this.props.selectStudent(e)}}render(){const e=this.props,t=e.selectedPath,i=e.ranges,n=e.students
const o=null!==t.student?i[t.range].students[t.student].user:null
const s=null!==t.student&&o?n[o.id]:null
return Object(r["a"])(S["a"],{open:this.props.showDetails,placement:"end",shouldContainFocus:true,defaultFocusElement:()=>this.closeButton},void 0,Object(r["a"])("div",{className:"crs-breakdown-details"},void 0,Object(r["a"])("div",{className:"crs-breakdown-details__content"},void 0,Object(r["a"])("span",{className:"crs-breakdown-details__closeButton"},void 0,a.a.createElement(z["a"],{variant:"icon",ref:e=>{this.closeButton=e},onClick:this.props.closeSidebar},Object(r["a"])("span",{className:"crs-breakdown-details__closeButtonIcon"},void 0,Object(r["a"])(j["a"],{title:x.t("Close details sidebar")})))),Object(r["a"])(J,{assignment:this.props.assignment,ranges:i,selectedPath:t,selectStudent:this.props.selectStudent,student:o}),Object(r["a"])(ie,{isLoading:this.props.isStudentDetailsLoading,student:o,triggerAssignment:s&&s.triggerAssignment,followOnAssignments:s&&s.followOnAssignments,selectPrevStudent:this.selectPrevStudent,selectNextStudent:this.selectNextStudent,unselectStudent:this.unselectStudent}))))}}const re=Object(_["connect"])(e=>({assignment:e.assignment,ranges:e.ranges,enrolled:e.enrolled,isLoading:e.isInitialDataLoading}))(w)
const oe=Object(_["connect"])(e=>({isStudentDetailsLoading:e.isStudentDetailsLoading,selectedPath:e.selectedPath,assignment:e.assignment,ranges:e.ranges,students:e.studentCache,showDetails:e.showDetails}))(ne)
class ae{constructor(e,t){this.store=e
this.actions=t}renderGraphs(e){const t={openSidebar:this.actions.openSidebar,selectRange:this.actions.selectRange}
c.a.render(Object(r["a"])(_["Provider"],{store:this.store},void 0,a.a.createElement(re,t)),e)}renderDetails(e){const t={selectRange:this.actions.selectRange,selectStudent:this.actions.selectStudent,closeSidebar:this.actions.closeSidebar}
c.a.render(Object(r["a"])(_["Provider"],{store:this.store},void 0,a.a.createElement(oe,t)),e)}}var se=i("sINF")
var ce=i("VTBJ")
var _e=i("GLiE")
var de=i.n(_e)
const ue=(e,t)=>(i,n)=>{i=void 0===i?t:i
if(e[n.type]){let t=i
de.a.isObject(i)?t=Object(ce["a"])({},i):Array.isArray(i)&&(t=i.slice())
return e[n.type](t,n)}return i}
const le=(e,t)=>t.payload
const pe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return(t,i)=>void 0===t?e:t}
var me=i("x1Tw")
const ge={call(e,t){let i=e.apiUrl,n=e.jwt
return Object(me["a"])({url:i+t,dataType:"json",headers:{Authorization:"Bearer "+n}}).then(e=>e.data)},loadInitialData(e){const t="/students_per_range?trigger_assignment=".concat(e.assignment.id)
return ge.call(e,t)},loadStudent(e,t){const i="/student_details?trigger_assignment=".concat(e.assignment.id,"&student_id=").concat(t)
return ge.call(e,i)}}
var fe=ge
function he(e){const t=e.split("_")
return t.map((e,t)=>0!==t&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()).join("")}function be(e){const t=t=>({type:e,payload:t})
t.type=e
t.toString=()=>e
return t}function ve(e){const t={}
const i={}
e.forEach(e=>{const n=be(e)
const r=he(n.type)
i[r]=n
t[n.type]=n.type})
return{actionTypes:t,actions:i}}const ye=["SET_INITIAL_DATA","SET_SCORING_RANGES","SET_RULE","SET_ENROLLED","SET_ASSIGNMENT","SET_ERRORS","SET_STUDENT_DETAILS","SELECT_RANGE","ADD_STUDENT_TO_CACHE","SELECT_STUDENT","OPEN_SIDEBAR","CLOSE_SIDEBAR","LOAD_INITIAL_DATA_START","LOAD_INITIAL_DATA_END","LOAD_STUDENT_DETAILS_START","LOAD_STUDENT_DETAILS_END"]
const ke=ve(ye),we=ke.actions,ze=ke.actionTypes
we.closeSidebarFrd=we.closeSidebar
we.closeSidebar=()=>(e,t)=>{const i=t().sidebarTrigger
e(we.closeSidebarFrd())
i.focus()}
we.loadInitialData=e=>(e,t)=>{e(we.loadInitialDataStart())
fe.loadInitialData(t()).then(t=>{e(we.setInitialData(t))
e(we.loadInitialDataEnd())}).catch(t=>{e(we.setErrors(t))
e(we.loadInitialDataEnd())})}
we.loadStudent=e=>(t,i)=>{t(we.loadStudentDetailsStart())
fe.loadStudent(i(),e).then(i=>{t(we.addStudentToCache({studentId:e,data:i}))
t(we.loadStudentDetailsEnd())}).catch(e=>{t(we.loadStudentDetailsEnd())
t(we.setErrors(e))})}
we.selectStudent=e=>(t,i)=>{t({type:ze.SELECT_STUDENT,payload:e})
const n=i(),r=n.studentCache,o=n.ranges,a=n.selectedPath
const s=o[a.range].students[e]
s&&!r[s.user.id.toString()]&&t(we.loadStudent(s.user.id.toString()))}
const Se=ue({[ze.ADD_STUDENT_TO_CACHE]:(e,t)=>{const i=t.payload,n=i.studentId,r=i.data
e[n]={followOnAssignments:r.follow_on_assignments,triggerAssignment:r.trigger_assignment}
return e}},{})
const je=ue({[ze.LOAD_INITIAL_DATA_START]:()=>true,[ze.LOAD_INITIAL_DATA_END]:()=>false},false)
const xe=ue({[ze.LOAD_STUDENT_DETAILS_START]:()=>true,[ze.LOAD_STUDENT_DETAILS_END]:()=>false},false)
const Ce=ue({[ze.SET_ERRORS]:(e,t)=>[...Array.from(t.payload),...Array.from(e)]},[])
const Oe=ue({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.ranges,[ze.SET_SCORING_RANGES]:le},[])
const Ee=ue({[ze.SET_ASSIGNMENT]:le},{})
const Ae=ue({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.rule,[ze.SET_RULE]:le},{course_id:"",trigger_assignment:""})
const De=ue({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.enrolled,[ze.SET_ENROLLED]:le},0)
const Ne=ue({[ze.OPEN_SIDEBAR]:(e,t)=>t.payload,[ze.CLOSE_SIDEBAR]:()=>null},null)
const Me=ue({[ze.OPEN_SIDEBAR]:()=>true,[ze.CLOSE_SIDEBAR]:()=>false,[ze.SELECT_RANGE]:(e,t)=>null!==t.payload},false)
const Pe=ue({[ze.SELECT_RANGE]:(e,t)=>{e.range=t.payload
return e},[ze.SELECT_STUDENT]:(e,t)=>{e.student=t.payload
return e},[ze.CLOSE_SIDEBAR]:e=>{e.student=null
return e}},{range:0,student:null})
var qe=Object(n["combineReducers"])({apiUrl:pe(),jwt:pe(),studentCache:Se,isInitialDataLoading:je,isStudentDetailsLoading:xe,errors:Ce,ranges:Oe,assignment:Ee,rule:Ae,enrolled:De,sidebarTrigger:Ne,showDetails:Me,selectedPath:Pe})
const Be=Object(n["applyMiddleware"])(se["default"])(n["createStore"])
function Te(e){return Be(qe,e)}var Ie=Te
const Le={init:(e,t)=>{const i=window.ENV
if(null!=e&&i.CONDITIONAL_RELEASE_SERVICE_ENABLED&&null!=i.CONDITIONAL_RELEASE_ENV.rule){const r=i.CONDITIONAL_RELEASE_ENV,o=r.assignment,a=r.jwt,s=r.stats_url
const c=document.createElement("div")
c.setAttribute("id","crs-details")
t.appendChild(c)
o.submission_types=Array.isArray(o.submission_types)?o.submission_types:[o.submission_types]
const _={assignment:o,jwt:a,apiUrl:s}
const d=Ie(_)
const u=Object(n["bindActionCreators"])(we,d.dispatch)
const l=new ae(d,u)
l.renderGraphs(e)
l.renderDetails(c)
u.loadInitialData()
return l}}}
t["default"]=Le},H4Sz:function(e,t,i){"use strict"
var n=i("An8g")
var r=i("ouhR")
var o=i.n(r)
var a=i("q1tI")
var s=i.n(a)
i("17x9")
var c=i("i8i4")
var _=i.n(c)
var d=i("P4VU")
i("MWZS")
var u=i("mykf")
var l=i("etQE")
var p=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var m=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var g=Object(n["a"])("div",{})
class f extends s.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const i=this.state.tools[t]
const n=this["tool_iframe_".concat(i.definition_id)].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(u["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(l["e"])(e)||fetch(e,l["d"])
const i=await Object(l["b"])(t)
i.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:i})}catch(e){o.a.flashError(d["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let i="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(i+="&assignment_id=".concat(this.props.assignmentId))
const n="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return n+i}renderTool(e){const t={}
o.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return s.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:d["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,p,d["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,m,d["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return g
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}f.defaultProps={assignmentId:void 0}
const h=function(e,t,i,r){const o=Object(n["a"])(f,{placement:t,courseId:i,assignmentId:r})
_.a.render(o,e)}
const b={configTools:f,attach:h}
t["a"]=b},HsON:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),l)}}])
t.displayName="IconMiniArrowEndSolid"
return t}(_["Component"])
p.glyphName="mini-arrow-end"
p.variant="Solid"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},I2ZF:function(e,t){var i=[]
for(var n=0;n<256;++n)i[n]=(n+256).toString(16).substr(1)
function r(e,t){var n=t||0
var r=i
return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}e.exports=r},JPcv:function(e,t,i){n=function(){"use strict"
var e=Array.prototype.slice
function t(e,t){t&&(e.prototype=Object.create(t.prototype))
e.prototype.constructor=e}function i(e){return a(e)?e:K(e)}t(n,i)
function n(e){return s(e)?e:J(e)}t(r,i)
function r(e){return c(e)?e:Q(e)}t(o,i)
function o(e){return a(e)&&!_(e)?e:Y(e)}function a(e){return!!(e&&e[u])}function s(e){return!!(e&&e[l])}function c(e){return!!(e&&e[p])}function _(e){return s(e)||c(e)}function d(e){return!!(e&&e[m])}i.isIterable=a
i.isKeyed=s
i.isIndexed=c
i.isAssociative=_
i.isOrdered=d
i.Keyed=n
i.Indexed=r
i.Set=o
var u="@@__IMMUTABLE_ITERABLE__@@"
var l="@@__IMMUTABLE_KEYED__@@"
var p="@@__IMMUTABLE_INDEXED__@@"
var m="@@__IMMUTABLE_ORDERED__@@"
var g="delete"
var f=5
var h=1<<f
var b=h-1
var v={}
var y={value:false}
var k={value:false}
function w(e){e.value=false
return e}function z(e){e&&(e.value=true)}function S(){}function j(e,t){t=t||0
var i=Math.max(0,e.length-t)
var n=new Array(i)
for(var r=0;r<i;r++)n[r]=e[r+t]
return n}function x(e){void 0===e.size&&(e.size=e.__iterate(O))
return e.size}function C(e,t){if("number"!==typeof t){var i=t>>>0
if(""+i!==t||4294967295===i)return NaN
t=i}return t<0?x(e)+t:t}function O(){return true}function E(e,t,i){return(0===e||void 0!==i&&e<=-i)&&(void 0===t||void 0!==i&&t>=i)}function A(e,t){return N(e,t,0)}function D(e,t){return N(e,t,t)}function N(e,t,i){return void 0===e?i:e<0?Math.max(0,t+e):void 0===t?e:Math.min(t,e)}var M=0
var P=1
var q=2
var B="function"===typeof Symbol&&Symbol.iterator
var T="@@iterator"
var I=B||T
function L(e){this.next=e}L.prototype.toString=function(){return"[Iterator]"}
L.KEYS=M
L.VALUES=P
L.ENTRIES=q
L.prototype.inspect=L.prototype.toSource=function(){return this.toString()}
L.prototype[I]=function(){return this}
function R(e,t,i,n){var r=0===e?t:1===e?i:[t,i]
n?n.value=r:n={value:r,done:false}
return n}function G(){return{value:void 0,done:true}}function F(e){return!!H(e)}function U(e){return e&&"function"===typeof e.next}function V(e){var t=H(e)
return t&&t.call(e)}function H(e){var t=e&&(B&&e[B]||e[T])
if("function"===typeof t)return t}function W(e){return e&&"number"===typeof e.length}t(K,i)
function K(e){return null===e||void 0===e?re():a(e)?e.toSeq():se(e)}K.of=function(){return K(arguments)}
K.prototype.toSeq=function(){return this}
K.prototype.toString=function(){return this.__toString("Seq {","}")}
K.prototype.cacheResult=function(){if(!this._cache&&this.__iterateUncached){this._cache=this.entrySeq().toArray()
this.size=this._cache.length}return this}
K.prototype.__iterate=function(e,t){return _e(this,e,t,true)}
K.prototype.__iterator=function(e,t){return de(this,e,t,true)}
t(J,K)
function J(e){return null===e||void 0===e?re().toKeyedSeq():a(e)?s(e)?e.toSeq():e.fromEntrySeq():oe(e)}J.prototype.toKeyedSeq=function(){return this}
t(Q,K)
function Q(e){return null===e||void 0===e?re():a(e)?s(e)?e.entrySeq():e.toIndexedSeq():ae(e)}Q.of=function(){return Q(arguments)}
Q.prototype.toIndexedSeq=function(){return this}
Q.prototype.toString=function(){return this.__toString("Seq [","]")}
Q.prototype.__iterate=function(e,t){return _e(this,e,t,false)}
Q.prototype.__iterator=function(e,t){return de(this,e,t,false)}
t(Y,K)
function Y(e){return(null===e||void 0===e?re():a(e)?s(e)?e.entrySeq():e:ae(e)).toSetSeq()}Y.of=function(){return Y(arguments)}
Y.prototype.toSetSeq=function(){return this}
K.isSeq=ie
K.Keyed=J
K.Set=Y
K.Indexed=Q
var $="@@__IMMUTABLE_SEQ__@@"
K.prototype[$]=true
t(X,Q)
function X(e){this._array=e
this.size=e.length}X.prototype.get=function(e,t){return this.has(e)?this._array[C(this,e)]:t}
X.prototype.__iterate=function(e,t){var i=this._array
var n=i.length-1
for(var r=0;r<=n;r++)if(false===e(i[t?n-r:r],r,this))return r+1
return r}
X.prototype.__iterator=function(e,t){var i=this._array
var n=i.length-1
var r=0
return new L((function(){return r>n?G():R(e,r,i[t?n-r++:r++])}))}
t(Z,J)
function Z(e){var t=Object.keys(e)
this._object=e
this._keys=t
this.size=t.length}Z.prototype.get=function(e,t){if(void 0!==t&&!this.has(e))return t
return this._object[e]}
Z.prototype.has=function(e){return this._object.hasOwnProperty(e)}
Z.prototype.__iterate=function(e,t){var i=this._object
var n=this._keys
var r=n.length-1
for(var o=0;o<=r;o++){var a=n[t?r-o:o]
if(false===e(i[a],a,this))return o+1}return o}
Z.prototype.__iterator=function(e,t){var i=this._object
var n=this._keys
var r=n.length-1
var o=0
return new L((function(){var a=n[t?r-o:o]
return o++>r?G():R(e,a,i[a])}))}
Z.prototype[m]=true
t(ee,Q)
function ee(e){this._iterable=e
this.size=e.length||e.size}ee.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t)
var i=this._iterable
var n=V(i)
var r=0
if(U(n)){var o
while(!(o=n.next()).done)if(false===e(o.value,r++,this))break}return r}
ee.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t)
var i=this._iterable
var n=V(i)
if(!U(n))return new L(G)
var r=0
return new L((function(){var t=n.next()
return t.done?t:R(e,r++,t.value)}))}
t(te,Q)
function te(e){this._iterator=e
this._iteratorCache=[]}te.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t)
var i=this._iterator
var n=this._iteratorCache
var r=0
while(r<n.length)if(false===e(n[r],r++,this))return r
var o
while(!(o=i.next()).done){var a=o.value
n[r]=a
if(false===e(a,r++,this))break}return r}
te.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t)
var i=this._iterator
var n=this._iteratorCache
var r=0
return new L((function(){if(r>=n.length){var t=i.next()
if(t.done)return t
n[r]=t.value}return R(e,r,n[r++])}))}
function ie(e){return!!(e&&e[$])}var ne
function re(){return ne||(ne=new X([]))}function oe(e){var t=Array.isArray(e)?new X(e).fromEntrySeq():U(e)?new te(e).fromEntrySeq():F(e)?new ee(e).fromEntrySeq():"object"===typeof e?new Z(e):void 0
if(!t)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+e)
return t}function ae(e){var t=ce(e)
if(!t)throw new TypeError("Expected Array or iterable object of values: "+e)
return t}function se(e){var t=ce(e)||"object"===typeof e&&new Z(e)
if(!t)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+e)
return t}function ce(e){return W(e)?new X(e):U(e)?new te(e):F(e)?new ee(e):void 0}function _e(e,t,i,n){var r=e._cache
if(r){var o=r.length-1
for(var a=0;a<=o;a++){var s=r[i?o-a:a]
if(false===t(s[1],n?s[0]:a,e))return a+1}return a}return e.__iterateUncached(t,i)}function de(e,t,i,n){var r=e._cache
if(r){var o=r.length-1
var a=0
return new L((function(){var e=r[i?o-a:a]
return a++>o?G():R(t,n?e[0]:a-1,e[1])}))}return e.__iteratorUncached(t,i)}function ue(e,t){return t?le(t,e,"",{"":e}):pe(e)}function le(e,t,i,n){if(Array.isArray(t))return e.call(n,i,Q(t).map((function(i,n){return le(e,i,n,t)})))
if(me(t))return e.call(n,i,J(t).map((function(i,n){return le(e,i,n,t)})))
return t}function pe(e){if(Array.isArray(e))return Q(e).map(pe).toList()
if(me(e))return J(e).map(pe).toMap()
return e}function me(e){return e&&(e.constructor===Object||void 0===e.constructor)}function ge(e,t){if(e===t||e!==e&&t!==t)return true
if(!e||!t)return false
if("function"===typeof e.valueOf&&"function"===typeof t.valueOf){e=e.valueOf()
t=t.valueOf()
if(e===t||e!==e&&t!==t)return true
if(!e||!t)return false}if("function"===typeof e.equals&&"function"===typeof t.equals&&e.equals(t))return true
return false}function fe(e,t){if(e===t)return true
if(!a(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||s(e)!==s(t)||c(e)!==c(t)||d(e)!==d(t))return false
if(0===e.size&&0===t.size)return true
var i=!_(e)
if(d(e)){var n=e.entries()
return t.every((function(e,t){var r=n.next().value
return r&&ge(r[1],e)&&(i||ge(r[0],t))}))&&n.next().done}var r=false
if(void 0===e.size)if(void 0===t.size)"function"===typeof e.cacheResult&&e.cacheResult()
else{r=true
var o=e
e=t
t=o}var u=true
var l=t.__iterate((function(t,n){if(i?!e.has(t):r?!ge(t,e.get(n,v)):!ge(e.get(n,v),t)){u=false
return false}}))
return u&&e.size===l}t(he,Q)
function he(e,t){if(!(this instanceof he))return new he(e,t)
this._value=e
this.size=void 0===t?Infinity:Math.max(0,t)
if(0===this.size){if(be)return be
be=this}}he.prototype.toString=function(){if(0===this.size)return"Repeat []"
return"Repeat [ "+this._value+" "+this.size+" times ]"}
he.prototype.get=function(e,t){return this.has(e)?this._value:t}
he.prototype.includes=function(e){return ge(this._value,e)}
he.prototype.slice=function(e,t){var i=this.size
return E(e,t,i)?this:new he(this._value,D(t,i)-A(e,i))}
he.prototype.reverse=function(){return this}
he.prototype.indexOf=function(e){if(ge(this._value,e))return 0
return-1}
he.prototype.lastIndexOf=function(e){if(ge(this._value,e))return this.size
return-1}
he.prototype.__iterate=function(e,t){for(var i=0;i<this.size;i++)if(false===e(this._value,i,this))return i+1
return i}
he.prototype.__iterator=function(e,t){var i=this
var n=0
return new L((function(){return n<i.size?R(e,n++,i._value):G()}))}
he.prototype.equals=function(e){return e instanceof he?ge(this._value,e._value):fe(e)}
var be
function ve(e,t){if(!e)throw new Error(t)}t(ye,Q)
function ye(e,t,i){if(!(this instanceof ye))return new ye(e,t,i)
ve(0!==i,"Cannot step a Range by 0")
e=e||0
void 0===t&&(t=Infinity)
i=void 0===i?1:Math.abs(i)
t<e&&(i=-i)
this._start=e
this._end=t
this._step=i
this.size=Math.max(0,Math.ceil((t-e)/i-1)+1)
if(0===this.size){if(ke)return ke
ke=this}}ye.prototype.toString=function(){if(0===this.size)return"Range []"
return"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"}
ye.prototype.get=function(e,t){return this.has(e)?this._start+C(this,e)*this._step:t}
ye.prototype.includes=function(e){var t=(e-this._start)/this._step
return t>=0&&t<this.size&&t===Math.floor(t)}
ye.prototype.slice=function(e,t){if(E(e,t,this.size))return this
e=A(e,this.size)
t=D(t,this.size)
if(t<=e)return new ye(0,0)
return new ye(this.get(e,this._end),this.get(t,this._end),this._step)}
ye.prototype.indexOf=function(e){var t=e-this._start
if(t%this._step===0){var i=t/this._step
if(i>=0&&i<this.size)return i}return-1}
ye.prototype.lastIndexOf=function(e){return this.indexOf(e)}
ye.prototype.__iterate=function(e,t){var i=this.size-1
var n=this._step
var r=t?this._start+i*n:this._start
for(var o=0;o<=i;o++){if(false===e(r,o,this))return o+1
r+=t?-n:n}return o}
ye.prototype.__iterator=function(e,t){var i=this.size-1
var n=this._step
var r=t?this._start+i*n:this._start
var o=0
return new L((function(){var a=r
r+=t?-n:n
return o>i?G():R(e,o++,a)}))}
ye.prototype.equals=function(e){return e instanceof ye?this._start===e._start&&this._end===e._end&&this._step===e._step:fe(this,e)}
var ke
t(we,i)
function we(){throw TypeError("Abstract")}t(ze,we)
function ze(){}t(Se,we)
function Se(){}t(je,we)
function je(){}we.Keyed=ze
we.Indexed=Se
we.Set=je
var xe="function"===typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(e,t){e|=0
t|=0
var i=65535&e
var n=65535&t
return i*n+((e>>>16)*n+i*(t>>>16)<<16>>>0)|0}
function Ce(e){return e>>>1&1073741824|3221225471&e}function Oe(e){if(false===e||null===e||void 0===e)return 0
if("function"===typeof e.valueOf){e=e.valueOf()
if(false===e||null===e||void 0===e)return 0}if(true===e)return 1
var t=typeof e
if("number"===t){if(e!==e||Infinity===e)return 0
var i=0|e
i!==e&&(i^=4294967295*e)
while(e>4294967295){e/=4294967295
i^=e}return Ce(i)}if("string"===t)return e.length>Le?Ee(e):Ae(e)
if("function"===typeof e.hashCode)return e.hashCode()
if("object"===t)return De(e)
if("function"===typeof e.toString)return Ae(e.toString())
throw new Error("Value type "+t+" cannot be hashed.")}function Ee(e){var t=Fe[e]
if(void 0===t){t=Ae(e)
if(Ge===Re){Ge=0
Fe={}}Ge++
Fe[e]=t}return t}function Ae(e){var t=0
for(var i=0;i<e.length;i++)t=31*t+e.charCodeAt(i)|0
return Ce(t)}function De(e){var t
if(qe){t=Be.get(e)
if(void 0!==t)return t}t=e[Ie]
if(void 0!==t)return t
if(!Me){t=e.propertyIsEnumerable&&e.propertyIsEnumerable[Ie]
if(void 0!==t)return t
t=Pe(e)
if(void 0!==t)return t}t=++Te
1073741824&Te&&(Te=0)
if(qe)Be.set(e,t)
else{if(void 0!==Ne&&false===Ne(e))throw new Error("Non-extensible objects are not allowed as keys.")
if(Me)Object.defineProperty(e,Ie,{enumerable:false,configurable:false,writable:false,value:t})
else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable){e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)}
e.propertyIsEnumerable[Ie]=t}else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.")
e[Ie]=t}}return t}var Ne=Object.isExtensible
var Me=function(){try{Object.defineProperty({},"@",{})
return true}catch(e){return false}}()
function Pe(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID
case 9:return e.documentElement&&e.documentElement.uniqueID}}var qe="function"===typeof WeakMap
var Be
qe&&(Be=new WeakMap)
var Te=0
var Ie="__immutablehash__"
"function"===typeof Symbol&&(Ie=Symbol(Ie))
var Le=16
var Re=255
var Ge=0
var Fe={}
function Ue(e){ve(Infinity!==e,"Cannot perform this action with an infinite size.")}t(Ve,ze)
function Ve(e){return null===e||void 0===e?rt():He(e)&&!d(e)?e:rt().withMutations((function(t){var i=n(e)
Ue(i.size)
i.forEach((function(e,i){return t.set(i,e)}))}))}Ve.of=function(){var t=e.call(arguments,0)
return rt().withMutations((function(e){for(var i=0;i<t.length;i+=2){if(i+1>=t.length)throw new Error("Missing value for key: "+t[i])
e.set(t[i],t[i+1])}}))}
Ve.prototype.toString=function(){return this.__toString("Map {","}")}
Ve.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t}
Ve.prototype.set=function(e,t){return ot(this,e,t)}
Ve.prototype.setIn=function(e,t){return this.updateIn(e,v,(function(){return t}))}
Ve.prototype.remove=function(e){return ot(this,e,v)}
Ve.prototype.deleteIn=function(e){return this.updateIn(e,(function(){return v}))}
Ve.prototype.update=function(e,t,i){return 1===arguments.length?e(this):this.updateIn([e],t,i)}
Ve.prototype.updateIn=function(e,t,i){if(!i){i=t
t=void 0}var n=ft(this,ki(e),t,i)
return n===v?void 0:n}
Ve.prototype.clear=function(){if(0===this.size)return this
if(this.__ownerID){this.size=0
this._root=null
this.__hash=void 0
this.__altered=true
return this}return rt()}
Ve.prototype.merge=function(){return lt(this,void 0,arguments)}
Ve.prototype.mergeWith=function(t){var i=e.call(arguments,1)
return lt(this,t,i)}
Ve.prototype.mergeIn=function(t){var i=e.call(arguments,1)
return this.updateIn(t,rt(),(function(e){return"function"===typeof e.merge?e.merge.apply(e,i):i[i.length-1]}))}
Ve.prototype.mergeDeep=function(){return lt(this,pt,arguments)}
Ve.prototype.mergeDeepWith=function(t){var i=e.call(arguments,1)
return lt(this,mt(t),i)}
Ve.prototype.mergeDeepIn=function(t){var i=e.call(arguments,1)
return this.updateIn(t,rt(),(function(e){return"function"===typeof e.mergeDeep?e.mergeDeep.apply(e,i):i[i.length-1]}))}
Ve.prototype.sort=function(e){return Gt(di(this,e))}
Ve.prototype.sortBy=function(e,t){return Gt(di(this,t,e))}
Ve.prototype.withMutations=function(e){var t=this.asMutable()
e(t)
return t.wasAltered()?t.__ensureOwner(this.__ownerID):this}
Ve.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new S)}
Ve.prototype.asImmutable=function(){return this.__ensureOwner()}
Ve.prototype.wasAltered=function(){return this.__altered}
Ve.prototype.__iterator=function(e,t){return new Ze(this,e,t)}
Ve.prototype.__iterate=function(e,t){var i=this
var n=0
this._root&&this._root.iterate((function(t){n++
return e(t[1],t[0],i)}),t)
return n}
Ve.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
if(!e){this.__ownerID=e
this.__altered=false
return this}return it(this.size,this._root,e,this.__hash)}
function He(e){return!!(e&&e[We])}Ve.isMap=He
var We="@@__IMMUTABLE_MAP__@@"
var Ke=Ve.prototype
Ke[We]=true
Ke[g]=Ke.remove
Ke.removeIn=Ke.deleteIn
function Je(e,t){this.ownerID=e
this.entries=t}Je.prototype.get=function(e,t,i,n){var r=this.entries
for(var o=0,a=r.length;o<a;o++)if(ge(i,r[o][0]))return r[o][1]
return n}
Je.prototype.update=function(e,t,i,n,r,o,a){var s=r===v
var c=this.entries
var _=0
for(var d=c.length;_<d;_++)if(ge(n,c[_][0]))break
var u=_<d
if(u?c[_][1]===r:s)return this
z(a);(s||!u)&&z(o)
if(s&&1===c.length)return
if(!u&&!s&&c.length>=kt)return _t(e,c,n,r)
var l=e&&e===this.ownerID
var p=l?c:j(c)
u?s?_===d-1?p.pop():p[_]=p.pop():p[_]=[n,r]:p.push([n,r])
if(l){this.entries=p
return this}return new Je(e,p)}
function Qe(e,t,i){this.ownerID=e
this.bitmap=t
this.nodes=i}Qe.prototype.get=function(e,t,i,n){void 0===t&&(t=Oe(i))
var r=1<<((0===e?t:t>>>e)&b)
var o=this.bitmap
return 0===(o&r)?n:this.nodes[ht(o&r-1)].get(e+f,t,i,n)}
Qe.prototype.update=function(e,t,i,n,r,o,a){void 0===i&&(i=Oe(n))
var s=(0===t?i:i>>>t)&b
var c=1<<s
var _=this.bitmap
var d=0!==(_&c)
if(!d&&r===v)return this
var u=ht(_&c-1)
var l=this.nodes
var p=d?l[u]:void 0
var m=at(p,e,t+f,i,n,r,o,a)
if(m===p)return this
if(!d&&m&&l.length>=wt)return ut(e,l,_,s,m)
if(d&&!m&&2===l.length&&st(l[1^u]))return l[1^u]
if(d&&m&&1===l.length&&st(m))return m
var g=e&&e===this.ownerID
var h=d?m?_:_^c:_|c
var y=d?m?bt(l,u,m,g):yt(l,u,g):vt(l,u,m,g)
if(g){this.bitmap=h
this.nodes=y
return this}return new Qe(e,h,y)}
function Ye(e,t,i){this.ownerID=e
this.count=t
this.nodes=i}Ye.prototype.get=function(e,t,i,n){void 0===t&&(t=Oe(i))
var r=(0===e?t:t>>>e)&b
var o=this.nodes[r]
return o?o.get(e+f,t,i,n):n}
Ye.prototype.update=function(e,t,i,n,r,o,a){void 0===i&&(i=Oe(n))
var s=(0===t?i:i>>>t)&b
var c=r===v
var _=this.nodes
var d=_[s]
if(c&&!d)return this
var u=at(d,e,t+f,i,n,r,o,a)
if(u===d)return this
var l=this.count
if(d){if(!u){l--
if(l<zt)return dt(e,_,l,s)}}else l++
var p=e&&e===this.ownerID
var m=bt(_,s,u,p)
if(p){this.count=l
this.nodes=m
return this}return new Ye(e,l,m)}
function $e(e,t,i){this.ownerID=e
this.keyHash=t
this.entries=i}$e.prototype.get=function(e,t,i,n){var r=this.entries
for(var o=0,a=r.length;o<a;o++)if(ge(i,r[o][0]))return r[o][1]
return n}
$e.prototype.update=function(e,t,i,n,r,o,a){void 0===i&&(i=Oe(n))
var s=r===v
if(i!==this.keyHash){if(s)return this
z(a)
z(o)
return ct(this,e,t,i,[n,r])}var c=this.entries
var _=0
for(var d=c.length;_<d;_++)if(ge(n,c[_][0]))break
var u=_<d
if(u?c[_][1]===r:s)return this
z(a);(s||!u)&&z(o)
if(s&&2===d)return new Xe(e,this.keyHash,c[1^_])
var l=e&&e===this.ownerID
var p=l?c:j(c)
u?s?_===d-1?p.pop():p[_]=p.pop():p[_]=[n,r]:p.push([n,r])
if(l){this.entries=p
return this}return new $e(e,this.keyHash,p)}
function Xe(e,t,i){this.ownerID=e
this.keyHash=t
this.entry=i}Xe.prototype.get=function(e,t,i,n){return ge(i,this.entry[0])?this.entry[1]:n}
Xe.prototype.update=function(e,t,i,n,r,o,a){var s=r===v
var c=ge(n,this.entry[0])
if(c?r===this.entry[1]:s)return this
z(a)
if(s){z(o)
return}if(c){if(e&&e===this.ownerID){this.entry[1]=r
return this}return new Xe(e,this.keyHash,[n,r])}z(o)
return ct(this,e,t,Oe(n),[n,r])}
Je.prototype.iterate=$e.prototype.iterate=function(e,t){var i=this.entries
for(var n=0,r=i.length-1;n<=r;n++)if(false===e(i[t?r-n:n]))return false}
Qe.prototype.iterate=Ye.prototype.iterate=function(e,t){var i=this.nodes
for(var n=0,r=i.length-1;n<=r;n++){var o=i[t?r-n:n]
if(o&&false===o.iterate(e,t))return false}}
Xe.prototype.iterate=function(e,t){return e(this.entry)}
t(Ze,L)
function Ze(e,t,i){this._type=t
this._reverse=i
this._stack=e._root&&tt(e._root)}Ze.prototype.next=function(){var e=this._type
var t=this._stack
while(t){var i=t.node
var n=t.index++
var r
if(i.entry){if(0===n)return et(e,i.entry)}else if(i.entries){r=i.entries.length-1
if(n<=r)return et(e,i.entries[this._reverse?r-n:n])}else{r=i.nodes.length-1
if(n<=r){var o=i.nodes[this._reverse?r-n:n]
if(o){if(o.entry)return et(e,o.entry)
t=this._stack=tt(o,t)}continue}}t=this._stack=this._stack.__prev}return G()}
function et(e,t){return R(e,t[0],t[1])}function tt(e,t){return{node:e,index:0,__prev:t}}function it(e,t,i,n){var r=Object.create(Ke)
r.size=e
r._root=t
r.__ownerID=i
r.__hash=n
r.__altered=false
return r}var nt
function rt(){return nt||(nt=it(0))}function ot(e,t,i){var n
var r
if(e._root){var o=w(y)
var a=w(k)
n=at(e._root,e.__ownerID,0,void 0,t,i,o,a)
if(!a.value)return e
r=e.size+(o.value?i===v?-1:1:0)}else{if(i===v)return e
r=1
n=new Je(e.__ownerID,[[t,i]])}if(e.__ownerID){e.size=r
e._root=n
e.__hash=void 0
e.__altered=true
return e}return n?it(r,n):rt()}function at(e,t,i,n,r,o,a,s){if(!e){if(o===v)return e
z(s)
z(a)
return new Xe(t,n,[r,o])}return e.update(t,i,n,r,o,a,s)}function st(e){return e.constructor===Xe||e.constructor===$e}function ct(e,t,i,n,r){if(e.keyHash===n)return new $e(t,n,[e.entry,r])
var o=(0===i?e.keyHash:e.keyHash>>>i)&b
var a=(0===i?n:n>>>i)&b
var s
var c=o===a?[ct(e,t,i+f,n,r)]:(s=new Xe(t,n,r),o<a?[e,s]:[s,e])
return new Qe(t,1<<o|1<<a,c)}function _t(e,t,i,n){e||(e=new S)
var r=new Xe(e,Oe(i),[i,n])
for(var o=0;o<t.length;o++){var a=t[o]
r=r.update(e,0,void 0,a[0],a[1])}return r}function dt(e,t,i,n){var r=0
var o=0
var a=new Array(i)
for(var s=0,c=1,_=t.length;s<_;s++,c<<=1){var d=t[s]
if(void 0!==d&&s!==n){r|=c
a[o++]=d}}return new Qe(e,r,a)}function ut(e,t,i,n,r){var o=0
var a=new Array(h)
for(var s=0;0!==i;s++,i>>>=1)a[s]=1&i?t[o++]:void 0
a[n]=r
return new Ye(e,o+1,a)}function lt(e,t,i){var r=[]
for(var o=0;o<i.length;o++){var s=i[o]
var c=n(s)
a(s)||(c=c.map((function(e){return ue(e)})))
r.push(c)}return gt(e,t,r)}function pt(e,t,i){return e&&e.mergeDeep&&a(t)?e.mergeDeep(t):ge(e,t)?e:t}function mt(e){return function(t,i,n){if(t&&t.mergeDeepWith&&a(i))return t.mergeDeepWith(e,i)
var r=e(t,i,n)
return ge(t,r)?t:r}}function gt(e,t,i){i=i.filter((function(e){return 0!==e.size}))
if(0===i.length)return e
if(0===e.size&&!e.__ownerID&&1===i.length)return e.constructor(i[0])
return e.withMutations((function(e){var n=t?function(i,n){e.update(n,v,(function(e){return e===v?i:t(e,i,n)}))}:function(t,i){e.set(i,t)}
for(var r=0;r<i.length;r++)i[r].forEach(n)}))}function ft(e,t,i,n){var r=e===v
var o=t.next()
if(o.done){var a=r?i:e
var s=n(a)
return s===a?e:s}ve(r||e&&e.set,"invalid keyPath")
var c=o.value
var _=r?v:e.get(c,v)
var d=ft(_,t,i,n)
return d===_?e:d===v?e.remove(c):(r?rt():e).set(c,d)}function ht(e){e-=e>>1&1431655765
e=(858993459&e)+(e>>2&858993459)
e=e+(e>>4)&252645135
e+=e>>8
e+=e>>16
return 127&e}function bt(e,t,i,n){var r=n?e:j(e)
r[t]=i
return r}function vt(e,t,i,n){var r=e.length+1
if(n&&t+1===r){e[t]=i
return e}var o=new Array(r)
var a=0
for(var s=0;s<r;s++)if(s===t){o[s]=i
a=-1}else o[s]=e[s+a]
return o}function yt(e,t,i){var n=e.length-1
if(i&&t===n){e.pop()
return e}var r=new Array(n)
var o=0
for(var a=0;a<n;a++){a===t&&(o=1)
r[a]=e[a+o]}return r}var kt=h/4
var wt=h/2
var zt=h/4
t(St,Se)
function St(e){var t=Mt()
if(null===e||void 0===e)return t
if(jt(e))return e
var i=r(e)
var n=i.size
if(0===n)return t
Ue(n)
if(n>0&&n<h)return Dt(0,n,f,null,new Ot(i.toArray()))
return t.withMutations((function(e){e.setSize(n)
i.forEach((function(t,i){return e.set(i,t)}))}))}St.of=function(){return this(arguments)}
St.prototype.toString=function(){return this.__toString("List [","]")}
St.prototype.get=function(e,t){e=C(this,e)
if(e>=0&&e<this.size){e+=this._origin
var i=Tt(this,e)
return i&&i.array[e&b]}return t}
St.prototype.set=function(e,t){return Pt(this,e,t)}
St.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this}
St.prototype.insert=function(e,t){return this.splice(e,0,t)}
St.prototype.clear=function(){if(0===this.size)return this
if(this.__ownerID){this.size=this._origin=this._capacity=0
this._level=f
this._root=this._tail=null
this.__hash=void 0
this.__altered=true
return this}return Mt()}
St.prototype.push=function(){var e=arguments
var t=this.size
return this.withMutations((function(i){It(i,0,t+e.length)
for(var n=0;n<e.length;n++)i.set(t+n,e[n])}))}
St.prototype.pop=function(){return It(this,0,-1)}
St.prototype.unshift=function(){var e=arguments
return this.withMutations((function(t){It(t,-e.length)
for(var i=0;i<e.length;i++)t.set(i,e[i])}))}
St.prototype.shift=function(){return It(this,1)}
St.prototype.merge=function(){return Lt(this,void 0,arguments)}
St.prototype.mergeWith=function(t){var i=e.call(arguments,1)
return Lt(this,t,i)}
St.prototype.mergeDeep=function(){return Lt(this,pt,arguments)}
St.prototype.mergeDeepWith=function(t){var i=e.call(arguments,1)
return Lt(this,mt(t),i)}
St.prototype.setSize=function(e){return It(this,0,e)}
St.prototype.slice=function(e,t){var i=this.size
if(E(e,t,i))return this
return It(this,A(e,i),D(t,i))}
St.prototype.__iterator=function(e,t){var i=0
var n=At(this,t)
return new L((function(){var t=n()
return t===Et?G():R(e,i++,t)}))}
St.prototype.__iterate=function(e,t){var i=0
var n=At(this,t)
var r
while((r=n())!==Et)if(false===e(r,i++,this))break
return i}
St.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
if(!e){this.__ownerID=e
return this}return Dt(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash)}
function jt(e){return!!(e&&e[xt])}St.isList=jt
var xt="@@__IMMUTABLE_LIST__@@"
var Ct=St.prototype
Ct[xt]=true
Ct[g]=Ct.remove
Ct.setIn=Ke.setIn
Ct.deleteIn=Ct.removeIn=Ke.removeIn
Ct.update=Ke.update
Ct.updateIn=Ke.updateIn
Ct.mergeIn=Ke.mergeIn
Ct.mergeDeepIn=Ke.mergeDeepIn
Ct.withMutations=Ke.withMutations
Ct.asMutable=Ke.asMutable
Ct.asImmutable=Ke.asImmutable
Ct.wasAltered=Ke.wasAltered
function Ot(e,t){this.array=e
this.ownerID=t}Ot.prototype.removeBefore=function(e,t,i){if(i===t?1<<t:0===this.array.length)return this
var n=i>>>t&b
if(n>=this.array.length)return new Ot([],e)
var r=0===n
var o
if(t>0){var a=this.array[n]
o=a&&a.removeBefore(e,t-f,i)
if(o===a&&r)return this}if(r&&!o)return this
var s=Bt(this,e)
if(!r)for(var c=0;c<n;c++)s.array[c]=void 0
o&&(s.array[n]=o)
return s}
Ot.prototype.removeAfter=function(e,t,i){if(i===(t?1<<t:0)||0===this.array.length)return this
var n=i-1>>>t&b
if(n>=this.array.length)return this
var r
if(t>0){var o=this.array[n]
r=o&&o.removeAfter(e,t-f,i)
if(r===o&&n===this.array.length-1)return this}var a=Bt(this,e)
a.array.splice(n+1)
r&&(a.array[n]=r)
return a}
var Et={}
function At(e,t){var i=e._origin
var n=e._capacity
var r=Rt(n)
var o=e._tail
return a(e._root,e._level,0)
function a(e,t,i){return 0===t?s(e,i):c(e,t,i)}function s(e,a){var s=a===r?o&&o.array:e&&e.array
var c=a>i?0:i-a
var _=n-a
_>h&&(_=h)
return function(){if(c===_)return Et
var e=t?--_:c++
return s&&s[e]}}function c(e,r,o){var s
var c=e&&e.array
var _=o>i?0:i-o>>r
var d=1+(n-o>>r)
d>h&&(d=h)
return function(){do{if(s){var e=s()
if(e!==Et)return e
s=null}if(_===d)return Et
var i=t?--d:_++
s=a(c&&c[i],r-f,o+(i<<r))}while(true)}}}function Dt(e,t,i,n,r,o,a){var s=Object.create(Ct)
s.size=t-e
s._origin=e
s._capacity=t
s._level=i
s._root=n
s._tail=r
s.__ownerID=o
s.__hash=a
s.__altered=false
return s}var Nt
function Mt(){return Nt||(Nt=Dt(0,0,f))}function Pt(e,t,i){t=C(e,t)
if(t!==t)return e
if(t>=e.size||t<0)return e.withMutations((function(e){t<0?It(e,t).set(0,i):It(e,0,t+1).set(t,i)}))
t+=e._origin
var n=e._tail
var r=e._root
var o=w(k)
t>=Rt(e._capacity)?n=qt(n,e.__ownerID,0,t,i,o):r=qt(r,e.__ownerID,e._level,t,i,o)
if(!o.value)return e
if(e.__ownerID){e._root=r
e._tail=n
e.__hash=void 0
e.__altered=true
return e}return Dt(e._origin,e._capacity,e._level,r,n)}function qt(e,t,i,n,r,o){var a=n>>>i&b
var s=e&&a<e.array.length
if(!s&&void 0===r)return e
var c
if(i>0){var _=e&&e.array[a]
var d=qt(_,t,i-f,n,r,o)
if(d===_)return e
c=Bt(e,t)
c.array[a]=d
return c}if(s&&e.array[a]===r)return e
z(o)
c=Bt(e,t)
void 0===r&&a===c.array.length-1?c.array.pop():c.array[a]=r
return c}function Bt(e,t){if(t&&e&&t===e.ownerID)return e
return new Ot(e?e.array.slice():[],t)}function Tt(e,t){if(t>=Rt(e._capacity))return e._tail
if(t<1<<e._level+f){var i=e._root
var n=e._level
while(i&&n>0){i=i.array[t>>>n&b]
n-=f}return i}}function It(e,t,i){void 0!==t&&(t|=0)
void 0!==i&&(i|=0)
var n=e.__ownerID||new S
var r=e._origin
var o=e._capacity
var a=r+t
var s=void 0===i?o:i<0?o+i:r+i
if(a===r&&s===o)return e
if(a>=s)return e.clear()
var c=e._level
var _=e._root
var d=0
while(a+d<0){_=new Ot(_&&_.array.length?[void 0,_]:[],n)
c+=f
d+=1<<c}if(d){a+=d
r+=d
s+=d
o+=d}var u=Rt(o)
var l=Rt(s)
while(l>=1<<c+f){_=new Ot(_&&_.array.length?[_]:[],n)
c+=f}var p=e._tail
var m=l<u?Tt(e,s-1):l>u?new Ot([],n):p
if(p&&l>u&&a<o&&p.array.length){_=Bt(_,n)
var g=_
for(var h=c;h>f;h-=f){var v=u>>>h&b
g=g.array[v]=Bt(g.array[v],n)}g.array[u>>>f&b]=p}s<o&&(m=m&&m.removeAfter(n,0,s))
if(a>=l){a-=l
s-=l
c=f
_=null
m=m&&m.removeBefore(n,0,a)}else if(a>r||l<u){d=0
while(_){var y=a>>>c&b
if(y!==l>>>c&b)break
y&&(d+=(1<<c)*y)
c-=f
_=_.array[y]}_&&a>r&&(_=_.removeBefore(n,c,a-d))
_&&l<u&&(_=_.removeAfter(n,c,l-d))
if(d){a-=d
s-=d}}if(e.__ownerID){e.size=s-a
e._origin=a
e._capacity=s
e._level=c
e._root=_
e._tail=m
e.__hash=void 0
e.__altered=true
return e}return Dt(a,s,c,_,m)}function Lt(e,t,i){var n=[]
var o=0
for(var s=0;s<i.length;s++){var c=i[s]
var _=r(c)
_.size>o&&(o=_.size)
a(c)||(_=_.map((function(e){return ue(e)})))
n.push(_)}o>e.size&&(e=e.setSize(o))
return gt(e,t,n)}function Rt(e){return e<h?0:e-1>>>f<<f}t(Gt,Ve)
function Gt(e){return null===e||void 0===e?Ht():Ft(e)?e:Ht().withMutations((function(t){var i=n(e)
Ue(i.size)
i.forEach((function(e,i){return t.set(i,e)}))}))}Gt.of=function(){return this(arguments)}
Gt.prototype.toString=function(){return this.__toString("OrderedMap {","}")}
Gt.prototype.get=function(e,t){var i=this._map.get(e)
return void 0!==i?this._list.get(i)[1]:t}
Gt.prototype.clear=function(){if(0===this.size)return this
if(this.__ownerID){this.size=0
this._map.clear()
this._list.clear()
return this}return Ht()}
Gt.prototype.set=function(e,t){return Wt(this,e,t)}
Gt.prototype.remove=function(e){return Wt(this,e,v)}
Gt.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()}
Gt.prototype.__iterate=function(e,t){var i=this
return this._list.__iterate((function(t){return t&&e(t[1],t[0],i)}),t)}
Gt.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)}
Gt.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._map.__ensureOwner(e)
var i=this._list.__ensureOwner(e)
if(!e){this.__ownerID=e
this._map=t
this._list=i
return this}return Ut(t,i,e,this.__hash)}
function Ft(e){return He(e)&&d(e)}Gt.isOrderedMap=Ft
Gt.prototype[m]=true
Gt.prototype[g]=Gt.prototype.remove
function Ut(e,t,i,n){var r=Object.create(Gt.prototype)
r.size=e?e.size:0
r._map=e
r._list=t
r.__ownerID=i
r.__hash=n
return r}var Vt
function Ht(){return Vt||(Vt=Ut(rt(),Mt()))}function Wt(e,t,i){var n=e._map
var r=e._list
var o=n.get(t)
var a=void 0!==o
var s
var c
if(i===v){if(!a)return e
if(r.size>=h&&r.size>=2*n.size){c=r.filter((function(e,t){return void 0!==e&&o!==t}))
s=c.toKeyedSeq().map((function(e){return e[0]})).flip().toMap()
e.__ownerID&&(s.__ownerID=c.__ownerID=e.__ownerID)}else{s=n.remove(t)
c=o===r.size-1?r.pop():r.set(o,void 0)}}else if(a){if(i===r.get(o)[1])return e
s=n
c=r.set(o,[t,i])}else{s=n.set(t,r.size)
c=r.set(r.size,[t,i])}if(e.__ownerID){e.size=s.size
e._map=s
e._list=c
e.__hash=void 0
return e}return Ut(s,c)}t(Kt,J)
function Kt(e,t){this._iter=e
this._useKeys=t
this.size=e.size}Kt.prototype.get=function(e,t){return this._iter.get(e,t)}
Kt.prototype.has=function(e){return this._iter.has(e)}
Kt.prototype.valueSeq=function(){return this._iter.valueSeq()}
Kt.prototype.reverse=function(){var e=this
var t=Zt(this,true)
this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()})
return t}
Kt.prototype.map=function(e,t){var i=this
var n=Xt(this,e,t)
this._useKeys||(n.valueSeq=function(){return i._iter.toSeq().map(e,t)})
return n}
Kt.prototype.__iterate=function(e,t){var i=this
var n
return this._iter.__iterate(this._useKeys?function(t,n){return e(t,n,i)}:(n=t?fi(this):0,function(r){return e(r,t?--n:n++,i)}),t)}
Kt.prototype.__iterator=function(e,t){if(this._useKeys)return this._iter.__iterator(e,t)
var i=this._iter.__iterator(P,t)
var n=t?fi(this):0
return new L((function(){var r=i.next()
return r.done?r:R(e,t?--n:n++,r.value,r)}))}
Kt.prototype[m]=true
t(Jt,Q)
function Jt(e){this._iter=e
this.size=e.size}Jt.prototype.includes=function(e){return this._iter.includes(e)}
Jt.prototype.__iterate=function(e,t){var i=this
var n=0
return this._iter.__iterate((function(t){return e(t,n++,i)}),t)}
Jt.prototype.__iterator=function(e,t){var i=this._iter.__iterator(P,t)
var n=0
return new L((function(){var t=i.next()
return t.done?t:R(e,n++,t.value,t)}))}
t(Qt,Y)
function Qt(e){this._iter=e
this.size=e.size}Qt.prototype.has=function(e){return this._iter.includes(e)}
Qt.prototype.__iterate=function(e,t){var i=this
return this._iter.__iterate((function(t){return e(t,t,i)}),t)}
Qt.prototype.__iterator=function(e,t){var i=this._iter.__iterator(P,t)
return new L((function(){var t=i.next()
return t.done?t:R(e,t.value,t.value,t)}))}
t(Yt,J)
function Yt(e){this._iter=e
this.size=e.size}Yt.prototype.entrySeq=function(){return this._iter.toSeq()}
Yt.prototype.__iterate=function(e,t){var i=this
return this._iter.__iterate((function(t){if(t){gi(t)
var n=a(t)
return e(n?t.get(1):t[1],n?t.get(0):t[0],i)}}),t)}
Yt.prototype.__iterator=function(e,t){var i=this._iter.__iterator(P,t)
return new L((function(){while(true){var t=i.next()
if(t.done)return t
var n=t.value
if(n){gi(n)
var r=a(n)
return R(e,r?n.get(0):n[0],r?n.get(1):n[1],t)}}}))}
Jt.prototype.cacheResult=Kt.prototype.cacheResult=Qt.prototype.cacheResult=Yt.prototype.cacheResult=vi
function $t(e){var t=bi(e)
t._iter=e
t.size=e.size
t.flip=function(){return e}
t.reverse=function(){var t=e.reverse.apply(this)
t.flip=function(){return e.reverse()}
return t}
t.has=function(t){return e.includes(t)}
t.includes=function(t){return e.has(t)}
t.cacheResult=vi
t.__iterateUncached=function(t,i){var n=this
return e.__iterate((function(e,i){return false!==t(i,e,n)}),i)}
t.__iteratorUncached=function(t,i){if(t===q){var n=e.__iterator(t,i)
return new L((function(){var e=n.next()
if(!e.done){var t=e.value[0]
e.value[0]=e.value[1]
e.value[1]=t}return e}))}return e.__iterator(t===P?M:P,i)}
return t}function Xt(e,t,i){var n=bi(e)
n.size=e.size
n.has=function(t){return e.has(t)}
n.get=function(n,r){var o=e.get(n,v)
return o===v?r:t.call(i,o,n,e)}
n.__iterateUncached=function(n,r){var o=this
return e.__iterate((function(e,r,a){return false!==n(t.call(i,e,r,a),r,o)}),r)}
n.__iteratorUncached=function(n,r){var o=e.__iterator(q,r)
return new L((function(){var r=o.next()
if(r.done)return r
var a=r.value
var s=a[0]
return R(n,s,t.call(i,a[1],s,e),r)}))}
return n}function Zt(e,t){var i=bi(e)
i._iter=e
i.size=e.size
i.reverse=function(){return e}
e.flip&&(i.flip=function(){var t=$t(e)
t.reverse=function(){return e.flip()}
return t})
i.get=function(i,n){return e.get(t?i:-1-i,n)}
i.has=function(i){return e.has(t?i:-1-i)}
i.includes=function(t){return e.includes(t)}
i.cacheResult=vi
i.__iterate=function(t,i){var n=this
return e.__iterate((function(e,i){return t(e,i,n)}),!i)}
i.__iterator=function(t,i){return e.__iterator(t,!i)}
return i}function ei(e,t,i,n){var r=bi(e)
if(n){r.has=function(n){var r=e.get(n,v)
return r!==v&&!!t.call(i,r,n,e)}
r.get=function(n,r){var o=e.get(n,v)
return o!==v&&t.call(i,o,n,e)?o:r}}r.__iterateUncached=function(r,o){var a=this
var s=0
e.__iterate((function(e,o,c){if(t.call(i,e,o,c)){s++
return r(e,n?o:s-1,a)}}),o)
return s}
r.__iteratorUncached=function(r,o){var a=e.__iterator(q,o)
var s=0
return new L((function(){while(true){var o=a.next()
if(o.done)return o
var c=o.value
var _=c[0]
var d=c[1]
if(t.call(i,d,_,e))return R(r,n?_:s++,d,o)}}))}
return r}function ti(e,t,i){var n=Ve().asMutable()
e.__iterate((function(r,o){n.update(t.call(i,r,o,e),0,(function(e){return e+1}))}))
return n.asImmutable()}function ii(e,t,i){var n=s(e)
var r=(d(e)?Gt():Ve()).asMutable()
e.__iterate((function(o,a){r.update(t.call(i,o,a,e),(function(e){return e=e||[],e.push(n?[a,o]:o),e}))}))
var o=hi(e)
return r.map((function(t){return mi(e,o(t))}))}function ni(e,t,i,n){var r=e.size
void 0!==t&&(t|=0)
void 0!==i&&(Infinity===i?i=r:i|=0)
if(E(t,i,r))return e
var o=A(t,r)
var a=D(i,r)
if(o!==o||a!==a)return ni(e.toSeq().cacheResult(),t,i,n)
var s=a-o
var c
s===s&&(c=s<0?0:s)
var _=bi(e)
_.size=0===c?c:e.size&&c||void 0
!n&&ie(e)&&c>=0&&(_.get=function(t,i){t=C(this,t)
return t>=0&&t<c?e.get(t+o,i):i})
_.__iterateUncached=function(t,i){var r=this
if(0===c)return 0
if(i)return this.cacheResult().__iterate(t,i)
var a=0
var s=true
var _=0
e.__iterate((function(e,i){if(!(s&&(s=a++<o))){_++
return false!==t(e,n?i:_-1,r)&&_!==c}}))
return _}
_.__iteratorUncached=function(t,i){if(0!==c&&i)return this.cacheResult().__iterator(t,i)
var r=0!==c&&e.__iterator(t,i)
var a=0
var s=0
return new L((function(){while(a++<o)r.next()
if(++s>c)return G()
var e=r.next()
return n||t===P?e:R(t,s-1,t===M?void 0:e.value[1],e)}))}
return _}function ri(e,t,i){var n=bi(e)
n.__iterateUncached=function(n,r){var o=this
if(r)return this.cacheResult().__iterate(n,r)
var a=0
e.__iterate((function(e,r,s){return t.call(i,e,r,s)&&++a&&n(e,r,o)}))
return a}
n.__iteratorUncached=function(n,r){var o=this
if(r)return this.cacheResult().__iterator(n,r)
var a=e.__iterator(q,r)
var s=true
return new L((function(){if(!s)return G()
var e=a.next()
if(e.done)return e
var r=e.value
var c=r[0]
var _=r[1]
if(!t.call(i,_,c,o)){s=false
return G()}return n===q?e:R(n,c,_,e)}))}
return n}function oi(e,t,i,n){var r=bi(e)
r.__iterateUncached=function(r,o){var a=this
if(o)return this.cacheResult().__iterate(r,o)
var s=true
var c=0
e.__iterate((function(e,o,_){if(!(s&&(s=t.call(i,e,o,_)))){c++
return r(e,n?o:c-1,a)}}))
return c}
r.__iteratorUncached=function(r,o){var a=this
if(o)return this.cacheResult().__iterator(r,o)
var s=e.__iterator(q,o)
var c=true
var _=0
return new L((function(){var e,o,d
do{e=s.next()
if(e.done)return n||r===P?e:R(r,_++,r===M?void 0:e.value[1],e)
var u=e.value
o=u[0]
d=u[1]
c&&(c=t.call(i,d,o,a))}while(c)
return r===q?e:R(r,o,d,e)}))}
return r}function ai(e,t){var i=s(e)
var r=[e].concat(t).map((function(e){a(e)?i&&(e=n(e)):e=i?oe(e):ae(Array.isArray(e)?e:[e])
return e})).filter((function(e){return 0!==e.size}))
if(0===r.length)return e
if(1===r.length){var o=r[0]
if(o===e||i&&s(o)||c(e)&&c(o))return o}var _=new X(r)
i?_=_.toKeyedSeq():c(e)||(_=_.toSetSeq())
_=_.flatten(true)
_.size=r.reduce((function(e,t){if(void 0!==e){var i=t.size
if(void 0!==i)return e+i}}),0)
return _}function si(e,t,i){var n=bi(e)
n.__iterateUncached=function(n,r){var o=0
var s=false
function c(e,_){var d=this
e.__iterate((function(e,r){(!t||_<t)&&a(e)?c(e,_+1):false===n(e,i?r:o++,d)&&(s=true)
return!s}),r)}c(e,0)
return o}
n.__iteratorUncached=function(n,r){var o=e.__iterator(n,r)
var s=[]
var c=0
return new L((function(){while(o){var e=o.next()
if(false!==e.done){o=s.pop()
continue}var _=e.value
n===q&&(_=_[1])
if(t&&!(s.length<t)||!a(_))return i?e:R(n,c++,_,e)
s.push(o)
o=_.__iterator(n,r)}return G()}))}
return n}function ci(e,t,i){var n=hi(e)
return e.toSeq().map((function(r,o){return n(t.call(i,r,o,e))})).flatten(true)}function _i(e,t){var i=bi(e)
i.size=e.size&&2*e.size-1
i.__iterateUncached=function(i,n){var r=this
var o=0
e.__iterate((function(e,n){return(!o||false!==i(t,o++,r))&&false!==i(e,o++,r)}),n)
return o}
i.__iteratorUncached=function(i,n){var r=e.__iterator(P,n)
var o=0
var a
return new L((function(){if(!a||o%2){a=r.next()
if(a.done)return a}return o%2?R(i,o++,t):R(i,o++,a.value,a)}))}
return i}function di(e,t,i){t||(t=yi)
var n=s(e)
var r=0
var o=e.toSeq().map((function(t,n){return[n,t,r++,i?i(t,n,e):t]})).toArray()
o.sort((function(e,i){return t(e[3],i[3])||e[2]-i[2]})).forEach(n?function(e,t){o[t].length=2}:function(e,t){o[t]=e[1]})
return n?J(o):c(e)?Q(o):Y(o)}function ui(e,t,i){t||(t=yi)
if(i){var n=e.toSeq().map((function(t,n){return[t,i(t,n,e)]})).reduce((function(e,i){return li(t,e[1],i[1])?i:e}))
return n&&n[0]}return e.reduce((function(e,i){return li(t,e,i)?i:e}))}function li(e,t,i){var n=e(i,t)
return 0===n&&i!==t&&(void 0===i||null===i||i!==i)||n>0}function pi(e,t,n){var r=bi(e)
r.size=new X(n).map((function(e){return e.size})).min()
r.__iterate=function(e,t){var i=this.__iterator(P,t)
var n
var r=0
while(!(n=i.next()).done)if(false===e(n.value,r++,this))break
return r}
r.__iteratorUncached=function(e,r){var o=n.map((function(e){return e=i(e),V(r?e.reverse():e)}))
var a=0
var s=false
return new L((function(){var i
if(!s){i=o.map((function(e){return e.next()}))
s=i.some((function(e){return e.done}))}if(s)return G()
return R(e,a++,t.apply(null,i.map((function(e){return e.value}))))}))}
return r}function mi(e,t){return ie(e)?t:e.constructor(t)}function gi(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function fi(e){Ue(e.size)
return x(e)}function hi(e){return s(e)?n:c(e)?r:o}function bi(e){return Object.create((s(e)?J:c(e)?Q:Y).prototype)}function vi(){if(this._iter.cacheResult){this._iter.cacheResult()
this.size=this._iter.size
return this}return K.prototype.cacheResult.call(this)}function yi(e,t){return e>t?1:e<t?-1:0}function ki(e){var t=V(e)
if(!t){if(!W(e))throw new TypeError("Expected iterable or array-like: "+e)
t=V(i(e))}return t}t(wi,ze)
function wi(e,t){var i
var n=function(o){if(o instanceof n)return o
if(!(this instanceof n))return new n(o)
if(!i){i=true
var a=Object.keys(e)
xi(r,a)
r.size=a.length
r._name=t
r._keys=a
r._defaultValues=e}this._map=Ve(o)}
var r=n.prototype=Object.create(zi)
r.constructor=n
return n}wi.prototype.toString=function(){return this.__toString(ji(this)+" {","}")}
wi.prototype.has=function(e){return this._defaultValues.hasOwnProperty(e)}
wi.prototype.get=function(e,t){if(!this.has(e))return t
var i=this._defaultValues[e]
return this._map?this._map.get(e,i):i}
wi.prototype.clear=function(){if(this.__ownerID){this._map&&this._map.clear()
return this}var e=this.constructor
return e._empty||(e._empty=Si(this,rt()))}
wi.prototype.set=function(e,t){if(!this.has(e))throw new Error('Cannot set unknown key "'+e+'" on '+ji(this))
if(this._map&&!this._map.has(e)){var i=this._defaultValues[e]
if(t===i)return this}var n=this._map&&this._map.set(e,t)
if(this.__ownerID||n===this._map)return this
return Si(this,n)}
wi.prototype.remove=function(e){if(!this.has(e))return this
var t=this._map&&this._map.remove(e)
if(this.__ownerID||t===this._map)return this
return Si(this,t)}
wi.prototype.wasAltered=function(){return this._map.wasAltered()}
wi.prototype.__iterator=function(e,t){var i=this
return n(this._defaultValues).map((function(e,t){return i.get(t)})).__iterator(e,t)}
wi.prototype.__iterate=function(e,t){var i=this
return n(this._defaultValues).map((function(e,t){return i.get(t)})).__iterate(e,t)}
wi.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._map&&this._map.__ensureOwner(e)
if(!e){this.__ownerID=e
this._map=t
return this}return Si(this,t,e)}
var zi=wi.prototype
zi[g]=zi.remove
zi.deleteIn=zi.removeIn=Ke.removeIn
zi.merge=Ke.merge
zi.mergeWith=Ke.mergeWith
zi.mergeIn=Ke.mergeIn
zi.mergeDeep=Ke.mergeDeep
zi.mergeDeepWith=Ke.mergeDeepWith
zi.mergeDeepIn=Ke.mergeDeepIn
zi.setIn=Ke.setIn
zi.update=Ke.update
zi.updateIn=Ke.updateIn
zi.withMutations=Ke.withMutations
zi.asMutable=Ke.asMutable
zi.asImmutable=Ke.asImmutable
function Si(e,t,i){var n=Object.create(Object.getPrototypeOf(e))
n._map=t
n.__ownerID=i
return n}function ji(e){return e._name||e.constructor.name||"Record"}function xi(e,t){try{t.forEach(Ci.bind(void 0,e))}catch(e){}}function Ci(e,t){Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){ve(this.__ownerID,"Cannot set on an immutable record.")
this.set(t,e)}})}t(Oi,je)
function Oi(e){return null===e||void 0===e?qi():Ei(e)&&!d(e)?e:qi().withMutations((function(t){var i=o(e)
Ue(i.size)
i.forEach((function(e){return t.add(e)}))}))}Oi.of=function(){return this(arguments)}
Oi.fromKeys=function(e){return this(n(e).keySeq())}
Oi.prototype.toString=function(){return this.__toString("Set {","}")}
Oi.prototype.has=function(e){return this._map.has(e)}
Oi.prototype.add=function(e){return Ni(this,this._map.set(e,true))}
Oi.prototype.remove=function(e){return Ni(this,this._map.remove(e))}
Oi.prototype.clear=function(){return Ni(this,this._map.clear())}
Oi.prototype.union=function(){var t=e.call(arguments,0)
t=t.filter((function(e){return 0!==e.size}))
if(0===t.length)return this
if(0===this.size&&!this.__ownerID&&1===t.length)return this.constructor(t[0])
return this.withMutations((function(e){for(var i=0;i<t.length;i++)o(t[i]).forEach((function(t){return e.add(t)}))}))}
Oi.prototype.intersect=function(){var t=e.call(arguments,0)
if(0===t.length)return this
t=t.map((function(e){return o(e)}))
var i=this
return this.withMutations((function(e){i.forEach((function(i){t.every((function(e){return e.includes(i)}))||e.remove(i)}))}))}
Oi.prototype.subtract=function(){var t=e.call(arguments,0)
if(0===t.length)return this
t=t.map((function(e){return o(e)}))
var i=this
return this.withMutations((function(e){i.forEach((function(i){t.some((function(e){return e.includes(i)}))&&e.remove(i)}))}))}
Oi.prototype.merge=function(){return this.union.apply(this,arguments)}
Oi.prototype.mergeWith=function(t){var i=e.call(arguments,1)
return this.union.apply(this,i)}
Oi.prototype.sort=function(e){return Bi(di(this,e))}
Oi.prototype.sortBy=function(e,t){return Bi(di(this,t,e))}
Oi.prototype.wasAltered=function(){return this._map.wasAltered()}
Oi.prototype.__iterate=function(e,t){var i=this
return this._map.__iterate((function(t,n){return e(n,n,i)}),t)}
Oi.prototype.__iterator=function(e,t){return this._map.map((function(e,t){return t})).__iterator(e,t)}
Oi.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
var t=this._map.__ensureOwner(e)
if(!e){this.__ownerID=e
this._map=t
return this}return this.__make(t,e)}
function Ei(e){return!!(e&&e[Ai])}Oi.isSet=Ei
var Ai="@@__IMMUTABLE_SET__@@"
var Di=Oi.prototype
Di[Ai]=true
Di[g]=Di.remove
Di.mergeDeep=Di.merge
Di.mergeDeepWith=Di.mergeWith
Di.withMutations=Ke.withMutations
Di.asMutable=Ke.asMutable
Di.asImmutable=Ke.asImmutable
Di.__empty=qi
Di.__make=Mi
function Ni(e,t){if(e.__ownerID){e.size=t.size
e._map=t
return e}return t===e._map?e:0===t.size?e.__empty():e.__make(t)}function Mi(e,t){var i=Object.create(Di)
i.size=e?e.size:0
i._map=e
i.__ownerID=t
return i}var Pi
function qi(){return Pi||(Pi=Mi(rt()))}t(Bi,Oi)
function Bi(e){return null===e||void 0===e?Gi():Ti(e)?e:Gi().withMutations((function(t){var i=o(e)
Ue(i.size)
i.forEach((function(e){return t.add(e)}))}))}Bi.of=function(){return this(arguments)}
Bi.fromKeys=function(e){return this(n(e).keySeq())}
Bi.prototype.toString=function(){return this.__toString("OrderedSet {","}")}
function Ti(e){return Ei(e)&&d(e)}Bi.isOrderedSet=Ti
var Ii=Bi.prototype
Ii[m]=true
Ii.__empty=Gi
Ii.__make=Li
function Li(e,t){var i=Object.create(Ii)
i.size=e?e.size:0
i._map=e
i.__ownerID=t
return i}var Ri
function Gi(){return Ri||(Ri=Li(Ht()))}t(Fi,Se)
function Fi(e){return null===e||void 0===e?Ji():Ui(e)?e:Ji().unshiftAll(e)}Fi.of=function(){return this(arguments)}
Fi.prototype.toString=function(){return this.__toString("Stack [","]")}
Fi.prototype.get=function(e,t){var i=this._head
e=C(this,e)
while(i&&e--)i=i.next
return i?i.value:t}
Fi.prototype.peek=function(){return this._head&&this._head.value}
Fi.prototype.push=function(){if(0===arguments.length)return this
var e=this.size+arguments.length
var t=this._head
for(var i=arguments.length-1;i>=0;i--)t={value:arguments[i],next:t}
if(this.__ownerID){this.size=e
this._head=t
this.__hash=void 0
this.__altered=true
return this}return Wi(e,t)}
Fi.prototype.pushAll=function(e){e=r(e)
if(0===e.size)return this
Ue(e.size)
var t=this.size
var i=this._head
e.reverse().forEach((function(e){t++
i={value:e,next:i}}))
if(this.__ownerID){this.size=t
this._head=i
this.__hash=void 0
this.__altered=true
return this}return Wi(t,i)}
Fi.prototype.pop=function(){return this.slice(1)}
Fi.prototype.unshift=function(){return this.push.apply(this,arguments)}
Fi.prototype.unshiftAll=function(e){return this.pushAll(e)}
Fi.prototype.shift=function(){return this.pop.apply(this,arguments)}
Fi.prototype.clear=function(){if(0===this.size)return this
if(this.__ownerID){this.size=0
this._head=void 0
this.__hash=void 0
this.__altered=true
return this}return Ji()}
Fi.prototype.slice=function(e,t){if(E(e,t,this.size))return this
var i=A(e,this.size)
var n=D(t,this.size)
if(n!==this.size)return Se.prototype.slice.call(this,e,t)
var r=this.size-i
var o=this._head
while(i--)o=o.next
if(this.__ownerID){this.size=r
this._head=o
this.__hash=void 0
this.__altered=true
return this}return Wi(r,o)}
Fi.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this
if(!e){this.__ownerID=e
this.__altered=false
return this}return Wi(this.size,this._head,e,this.__hash)}
Fi.prototype.__iterate=function(e,t){if(t)return this.reverse().__iterate(e)
var i=0
var n=this._head
while(n){if(false===e(n.value,i++,this))break
n=n.next}return i}
Fi.prototype.__iterator=function(e,t){if(t)return this.reverse().__iterator(e)
var i=0
var n=this._head
return new L((function(){if(n){var t=n.value
n=n.next
return R(e,i++,t)}return G()}))}
function Ui(e){return!!(e&&e[Vi])}Fi.isStack=Ui
var Vi="@@__IMMUTABLE_STACK__@@"
var Hi=Fi.prototype
Hi[Vi]=true
Hi.withMutations=Ke.withMutations
Hi.asMutable=Ke.asMutable
Hi.asImmutable=Ke.asImmutable
Hi.wasAltered=Ke.wasAltered
function Wi(e,t,i,n){var r=Object.create(Hi)
r.size=e
r._head=t
r.__ownerID=i
r.__hash=n
r.__altered=false
return r}var Ki
function Ji(){return Ki||(Ki=Wi(0))}function Qi(e,t){var i=function(i){e.prototype[i]=t[i]}
Object.keys(t).forEach(i)
Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(i)
return e}i.Iterator=L
Qi(i,{toArray:function(){Ue(this.size)
var e=new Array(this.size||0)
this.valueSeq().__iterate((function(t,i){e[i]=t}))
return e},toIndexedSeq:function(){return new Jt(this)},toJS:function(){return this.toSeq().map((function(e){return e&&"function"===typeof e.toJS?e.toJS():e})).__toJS()},toJSON:function(){return this.toSeq().map((function(e){return e&&"function"===typeof e.toJSON?e.toJSON():e})).__toJS()},toKeyedSeq:function(){return new Kt(this,true)},toMap:function(){return Ve(this.toKeyedSeq())},toObject:function(){Ue(this.size)
var e={}
this.__iterate((function(t,i){e[i]=t}))
return e},toOrderedMap:function(){return Gt(this.toKeyedSeq())},toOrderedSet:function(){return Bi(s(this)?this.valueSeq():this)},toSet:function(){return Oi(s(this)?this.valueSeq():this)},toSetSeq:function(){return new Qt(this)},toSeq:function(){return c(this)?this.toIndexedSeq():s(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return Fi(s(this)?this.valueSeq():this)},toList:function(){return St(s(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(e,t){if(0===this.size)return e+t
return e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){var t=e.call(arguments,0)
return mi(this,ai(this,t))},includes:function(e){return this.some((function(t){return ge(t,e)}))},entries:function(){return this.__iterator(q)},every:function(e,t){Ue(this.size)
var i=true
this.__iterate((function(n,r,o){if(!e.call(t,n,r,o)){i=false
return false}}))
return i},filter:function(e,t){return mi(this,ei(this,e,t,true))},find:function(e,t,i){var n=this.findEntry(e,t)
return n?n[1]:i},forEach:function(e,t){Ue(this.size)
return this.__iterate(t?e.bind(t):e)},join:function(e){Ue(this.size)
e=void 0!==e?""+e:","
var t=""
var i=true
this.__iterate((function(n){i?i=false:t+=e
t+=null!==n&&void 0!==n?n.toString():""}))
return t},keys:function(){return this.__iterator(M)},map:function(e,t){return mi(this,Xt(this,e,t))},reduce:function(e,t,i){Ue(this.size)
var n
var r
arguments.length<2?r=true:n=t
this.__iterate((function(t,o,a){if(r){r=false
n=t}else n=e.call(i,n,t,o,a)}))
return n},reduceRight:function(e,t,i){var n=this.toKeyedSeq().reverse()
return n.reduce.apply(n,arguments)},reverse:function(){return mi(this,Zt(this,true))},slice:function(e,t){return mi(this,ni(this,e,t,true))},some:function(e,t){return!this.every(en(e),t)},sort:function(e){return mi(this,di(this,e))},values:function(){return this.__iterator(P)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some((function(){return true}))},count:function(e,t){return x(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return ti(this,e,t)},equals:function(e){return fe(this,e)},entrySeq:function(){var e=this
if(e._cache)return new X(e._cache)
var t=e.toSeq().map(Zi).toIndexedSeq()
t.fromEntrySeq=function(){return e.toSeq()}
return t},filterNot:function(e,t){return this.filter(en(e),t)},findEntry:function(e,t,i){var n=i
this.__iterate((function(i,r,o){if(e.call(t,i,r,o)){n=[r,i]
return false}}))
return n},findKey:function(e,t){var i=this.findEntry(e,t)
return i&&i[0]},findLast:function(e,t,i){return this.toKeyedSeq().reverse().find(e,t,i)},findLastEntry:function(e,t,i){return this.toKeyedSeq().reverse().findEntry(e,t,i)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(){return this.find(O)},flatMap:function(e,t){return mi(this,ci(this,e,t))},flatten:function(e){return mi(this,si(this,e,true))},fromEntrySeq:function(){return new Yt(this)},get:function(e,t){return this.find((function(t,i){return ge(i,e)}),void 0,t)},getIn:function(e,t){var i=this
var n=ki(e)
var r
while(!(r=n.next()).done){var o=r.value
i=i&&i.get?i.get(o,v):v
if(i===v)return t}return i},groupBy:function(e,t){return ii(this,e,t)},has:function(e){return this.get(e,v)!==v},hasIn:function(e){return this.getIn(e,v)!==v},isSubset:function(e){e="function"===typeof e.includes?e:i(e)
return this.every((function(t){return e.includes(t)}))},isSuperset:function(e){e="function"===typeof e.isSubset?e:i(e)
return e.isSubset(this)},keyOf:function(e){return this.findKey((function(t){return ge(t,e)}))},keySeq:function(){return this.toSeq().map(Xi).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return ui(this,e)},maxBy:function(e,t){return ui(this,t,e)},min:function(e){return ui(this,e?tn(e):on)},minBy:function(e,t){return ui(this,t?tn(t):on,e)},rest:function(){return this.slice(1)},skip:function(e){return this.slice(Math.max(0,e))},skipLast:function(e){return mi(this,this.toSeq().reverse().skip(e).reverse())},skipWhile:function(e,t){return mi(this,oi(this,e,t,true))},skipUntil:function(e,t){return this.skipWhile(en(e),t)},sortBy:function(e,t){return mi(this,di(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return mi(this,this.toSeq().reverse().take(e).reverse())},takeWhile:function(e,t){return mi(this,ri(this,e,t))},takeUntil:function(e,t){return this.takeWhile(en(e),t)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=an(this))}})
var Yi=i.prototype
Yi[u]=true
Yi[I]=Yi.values
Yi.__toJS=Yi.toArray
Yi.__toStringMapper=nn
Yi.inspect=Yi.toSource=function(){return this.toString()}
Yi.chain=Yi.flatMap
Yi.contains=Yi.includes
Qi(n,{flip:function(){return mi(this,$t(this))},mapEntries:function(e,t){var i=this
var n=0
return mi(this,this.toSeq().map((function(r,o){return e.call(t,[o,r],n++,i)})).fromEntrySeq())},mapKeys:function(e,t){var i=this
return mi(this,this.toSeq().flip().map((function(n,r){return e.call(t,n,r,i)})).flip())}})
var $i=n.prototype
$i[l]=true
$i[I]=Yi.entries
$i.__toJS=Yi.toObject
$i.__toStringMapper=function(e,t){return JSON.stringify(t)+": "+nn(e)}
Qi(r,{toKeyedSeq:function(){return new Kt(this,false)},filter:function(e,t){return mi(this,ei(this,e,t,false))},findIndex:function(e,t){var i=this.findEntry(e,t)
return i?i[0]:-1},indexOf:function(e){var t=this.keyOf(e)
return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e)
return void 0===t?-1:t},reverse:function(){return mi(this,Zt(this,false))},slice:function(e,t){return mi(this,ni(this,e,t,false))},splice:function(e,t){var i=arguments.length
t=Math.max(0|t,0)
if(0===i||2===i&&!t)return this
e=A(e,e<0?this.count():this.size)
var n=this.slice(0,e)
return mi(this,1===i?n:n.concat(j(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var i=this.findLastEntry(e,t)
return i?i[0]:-1},first:function(){return this.get(0)},flatten:function(e){return mi(this,si(this,e,false))},get:function(e,t){e=C(this,e)
return e<0||Infinity===this.size||void 0!==this.size&&e>this.size?t:this.find((function(t,i){return i===e}),void 0,t)},has:function(e){e=C(this,e)
return e>=0&&(void 0!==this.size?Infinity===this.size||e<this.size:-1!==this.indexOf(e))},interpose:function(e){return mi(this,_i(this,e))},interleave:function(){var e=[this].concat(j(arguments))
var t=pi(this.toSeq(),Q.of,e)
var i=t.flatten(true)
t.size&&(i.size=t.size*e.length)
return mi(this,i)},keySeq:function(){return ye(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(e,t){return mi(this,oi(this,e,t,false))},zip:function(){var e=[this].concat(j(arguments))
return mi(this,pi(this,rn,e))},zipWith:function(e){var t=j(arguments)
t[0]=this
return mi(this,pi(this,e,t))}})
r.prototype[p]=true
r.prototype[m]=true
Qi(o,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}})
o.prototype.has=Yi.includes
o.prototype.contains=o.prototype.includes
Qi(J,n.prototype)
Qi(Q,r.prototype)
Qi(Y,o.prototype)
Qi(ze,n.prototype)
Qi(Se,r.prototype)
Qi(je,o.prototype)
function Xi(e,t){return t}function Zi(e,t){return[t,e]}function en(e){return function(){return!e.apply(this,arguments)}}function tn(e){return function(){return-e.apply(this,arguments)}}function nn(e){return"string"===typeof e?JSON.stringify(e):String(e)}function rn(){return j(arguments)}function on(e,t){return e<t?1:e>t?-1:0}function an(e){if(Infinity===e.size)return 0
var t=d(e)
var i=s(e)
var n=t?1:0
var r=e.__iterate(i?t?function(e,t){n=31*n+cn(Oe(e),Oe(t))|0}:function(e,t){n=n+cn(Oe(e),Oe(t))|0}:t?function(e){n=31*n+Oe(e)|0}:function(e){n=n+Oe(e)|0})
return sn(r,n)}function sn(e,t){t=xe(t,3432918353)
t=xe(t<<15|t>>>-15,461845907)
t=xe(t<<13|t>>>-13,5)
t=(t+3864292196|0)^e
t=xe(t^t>>>16,2246822507)
t=xe(t^t>>>13,3266489909)
t=Ce(t^t>>>16)
return t}function cn(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}var _n={Iterable:i,Seq:K,Collection:we,Map:Ve,OrderedMap:Gt,List:St,Stack:Fi,Set:Oi,OrderedSet:Bi,Record:wi,Range:ye,Repeat:he,is:ge,fromJS:ue}
return _n},e.exports=n()
var n},KIj7:function(e,t,i){"use strict"
var n=i("rePB")
var r=i("VTBJ")
var o=i("1OyB")
var a=i("vuIU")
var s=i("md7G")
var c=i("foSv")
var _=i("Ji7U")
var d=i("q1tI")
var u=i.n(d)
var l=i("17x9")
var p=i.n(l)
var m=i("TSYQ")
var g=i.n(m)
var f=i("Xx/m")
var h=i("rf+m")
var b=i("y2yB")
var v=i("J2CL")
var y=i("cClk")
var k=i("jtGx")
var w=i("/UXv")
var z=i("oXx0")
var S=i("597A")
function j(e){var t=e.colors,i=e.spacing,n=e.borders,r=e.typography
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,lineHeight:r.lineHeight,textColor:t.textDarkest,fontSizeSmall:r.fontSizeSmall,fontSizeMedium:r.fontSizeMedium,fontSizeLarge:r.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:i.xxSmall,iconColor:t.textDarkest,togglePadding:i.xxSmall,toggleBorderRadius:n.radiusMedium,toggleBorderWidth:n.widthMedium,toggleBorderStyle:n.style,toggleFocusBorderColor:t.borderBrand,filledBackgroundColor:t.backgroundLight,filledBorderWidth:n.widthSmall,filledBorderStyle:n.style,filledBorderColor:t.borderMedium,filledBorderRadius:n.radiusMedium,filledPadding:i.small}}j["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
i.d(t,"a",(function(){return N}))
var x,C,O,E,A
var D={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var N=(x=Object(z["a"])(),C=Object(v["i"])(j,D),x(O=C(O=(A=E=function(e){Object(_["a"])(t,e)
function t(){var e
var i
Object(o["a"])(this,t)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
i=Object(s["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(r)))
i.shouldAnimateContent=false
i.getButtonRef=function(e){return i._button=e}
return i}Object(a["a"])(t,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var t=this.props,i=t.summary,n=t.iconPosition
return u.a.createElement("span",{className:D.summary},"start"===n&&this.renderIcon(e),u.a.createElement("span",{className:D.summaryText},i),"end"===n&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,i){var o=this.props,a=o.variant,s=o.fluidWidth
var c=Object(r["a"])({},Object(k["a"])(this.props,t.propTypes),{},e,{children:this.renderSummary()})
var _=this.renderSummary(i)
return"filled"===a?u.a.createElement(f["a"],Object.assign({},c,{fluidWidth:true,buttonRef:this.getButtonRef}),_):c.href?u.a.createElement("a",Object.assign({},c,{className:g()(D.toggle,D[a],Object(n["a"])({},D.fluidWidth,s)),ref:this.getButtonRef}),_):u.a.createElement("button",Object.assign({},c,{type:"button",className:g()(D.toggle,D[a],Object(n["a"])({},D.fluidWidth,s)),ref:this.getButtonRef}),_)}},{key:"renderIcon",value:function(e){var t
var i=this.props.iconPosition
var r=e?this.props.iconExpanded:this.props.icon
return this.props.children?u.a.createElement("span",{className:g()(D.icon,(t={},Object(n["a"])(t,D.iconStart,"start"===i),Object(n["a"])(t,D.iconEnd,"end"===i),t))},u.a.createElement(r,null)):null}},{key:"renderDetails",value:function(e,t){var i
var r=this.props,o=r.children,a=r.size,s=r.iconPosition,c=r.fluidWidth
return u.a.createElement("div",Object.assign({},t,{className:g()(D.details,(i={},Object(n["a"])(i,D[a],a),Object(n["a"])(i,D.hiddenDetails,!e),Object(n["a"])(i,D.expandedDetails,e),Object(n["a"])(i,D.indentDetails,"start"===s&&!c),i))}),o&&e&&this.renderContent())}},{key:"renderContent",value:function(){return u.a.createElement("div",{className:g()(Object(n["a"])({},D.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,t=this
var i=this.props,r=i.variant,o=i.iconPosition,a=i.fluidWidth
var s="end"===o&&("filled"===r||a)
var c=(e={},Object(n["a"])(e,D.root,true),Object(n["a"])(e,D[this.props.size],true),Object(n["a"])(e,D.positionIconAtEnd,s),e)
return u.a.createElement(S["a"],Object(k["c"])(this.props,S["a"].propTypes),(function(e){var i=e.expanded,n=e.getToggleProps,r=e.getDetailsProps
return u.a.createElement("div",{className:g()(c)},t.renderToggle(n(),i),t.renderDetails(i,r()))}))}},{key:"focused",get:function(){return Object(w["a"])(this._button)}}])
t.displayName="ToggleDetails"
return t}(d["Component"]),E.propTypes={variant:p.a.oneOf(["default","filled"]),summary:p.a.node.isRequired,expanded:Object(y["a"])(p.a.bool,"onToggle","defaultExpanded"),defaultExpanded:p.a.bool,onToggle:p.a.func,icon:p.a.func,iconExpanded:p.a.func,iconPosition:p.a.oneOf(["start","end"]),fluidWidth:p.a.bool,children:p.a.node,size:p.a.oneOf(["small","medium","large"])},E.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:h["a"],iconExpanded:b["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,t){},children:null,expanded:void 0},A))||O)||O)},"L+/K":function(e,t,i){"use strict"
var n=i("1OyB")
var r=i("vuIU")
var o=i("md7G")
var a=i("foSv")
var s=i("Ji7U")
i("DEX3")
var c=i("q1tI")
var _=i.n(c)
var d=i("i8i4")
var u=i.n(d)
var l=i("17x9")
var p=i.n(l)
var m=i("TSYQ")
var g=i.n(m)
var f=i("3zPy")
var h=i.n(f)
var b=i("nAyT")
var v=i("E+IV")
var y=i("Mmr1")
var k=i("n12J")
var w=i("6SzX")
var z=i("VTBJ")
var S=i("hPGw")
var j=_.a.createElement("path",{d:"M213.333 960c0-167.36 56-321.707 149.44-446.4L1406.4 1557.227c-124.693 93.44-279.04 149.44-446.4 149.44-411.627 0-746.667-335.04-746.667-746.667m1493.334 0c0 167.36-56 321.707-149.44 446.4L513.6 362.773c124.693-93.44 279.04-149.44 446.4-149.44 411.627 0 746.667 335.04 746.667 746.667M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960 960-429.76 960-960S1490.24 0 960 0",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var x=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(o["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return _.a.createElement(S["a"],Object.assign({},this.props,{name:"IconNo",viewBox:"0 0 1920 1920"}),j)}}])
t.displayName="IconNoSolid"
return t}(c["Component"])
x.glyphName="no"
x.variant="Solid"
x.propTypes=Object(z["a"])({},S["a"].propTypes)
var C=_.a.createElement("path",{d:"M1072.156 537.778c59.802-.707 116.561 14.29 157.774 56.99 36.644 37.974 50.015 91.327 43.72 142.908-9.128 74.877-30.737 144.983-56.093 215.657-27.129 75.623-54.66 151.09-82.332 226.512-44.263 120.685-88.874 241.237-132.65 362.1-10.877 30.018-18.635 62.072-21.732 93.784-3.376 34.532 21.462 51.526 52.648 36.203 24.977-12.278 49.288-28.992 68.845-48.768 31.952-32.31 63.766-64.776 94.805-97.98 15.515-16.605 30.86-33.397 45.912-50.438 11.993-13.583 24.318-34.02 40.779-42.28 31.17-15.642 55.226 22.846 49.582 49.794-6.008 28.736-27.377 53.54-45.014 75.973-54.87 69.795-115.044 137.088-183.308 193.977-67.103 55.77-141.607 103.216-223.428 133.98-26.65 10.016-53.957 18.253-81.713 24.563-53.585 12.192-112.798 11.283-167.56 3.333-40.151-5.828-76.246-31.44-93.264-68.707-29.544-64.698-8.98-144.595 6.295-210.45 20.37-87.77 51.85-170.961 83.13-255.163 33.253-89.517 67.435-178.676 101.726-267.797 31.294-81.296 62.72-162.537 93.69-243.95 8.718-22.923 21.183-45.255 24.845-68.963 6.109-39.537-22.406-74.738-61.985-51.947-92.46 53.244-153.538 141.534-224.52 218.4-16.089 17.43-35.243 39.04-62.907 19.07-29.521-21.308-20.765-48.637-3.987-71.785 93.18-128.58 205.056-248.86 350.86-316.783 60.932-28.386 146.113-57.285 225.882-58.233zM1440 205.244c-.008 169.189-182.758 284.908-335.53 212.455-78.956-37.446-117.358-126.202-98.219-227.002 26.494-139.598 183.78-227.203 315.717-175.87 76.703 29.846 118.04 96.533 118.032 190.417z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var O=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(o["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return _.a.createElement(S["a"],Object.assign({},this.props,{name:"IconInfoBorderless",viewBox:"0 0 1920 1920"}),C)}}])
t.displayName="IconInfoBorderlessSolid"
return t}(c["Component"])
O.glyphName="info-borderless"
O.variant="Solid"
O.propTypes=Object(z["a"])({},S["a"].propTypes)
var E=i("97gy")
var A=_.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},_.a.createElement("path",{d:"M994.578 1436.356c-133.365 0-241.822 108.457-241.822 241.822S861.213 1920 994.578 1920s241.822-108.457 241.822-241.822-108.457-241.822-241.822-241.822zM1165.063 1315.444L1310.156 0H679l145.093 1315.444z"}))
var D=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(o["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"render",value:function(){return _.a.createElement(S["a"],Object.assign({},this.props,{name:"IconWarningBorderless",viewBox:"0 0 1920 1920"}),A)}}])
t.displayName="IconWarningBorderlessSolid"
return t}(c["Component"])
D.glyphName="warning-borderless"
D.variant="Solid"
D.propTypes=Object(z["a"])({},S["a"].propTypes)
var N=i("XQb/")
var M=i("J2CL")
var P=i("BTe1")
function q(e){var t=e.colors,i=e.borders,n=e.spacing,r=e.typography,o=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:n.small,borderRadius:i.radiusMedium,borderWidth:i.widthMedium,borderStyle:i.style,contentPadding:"".concat(n.small," ").concat(n.medium),contentFontSize:r.fontSizeMedium,contentFontFamily:r.fontFamily,contentFontWeight:r.fontWeightNormal,contentLineHeight:r.lineHeightCondensed,closeButtonMarginTop:n.xSmall,closeButtonMarginRight:n.xxSmall,iconColor:t.textLightest,iconBackground:t.backgroundLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:o.depth2}}q.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
i.d(t,"a",(function(){return F}))
var B,T,I,L,R
var G={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var F=(B=Object(b["a"])("7.0.0",{closeButtonLabel:"renderCloseButtonLabel"}),T=Object(M["i"])(q,G),B(I=T(I=(R=L=function(e){Object(s["a"])(t,e)
function t(e){var i
Object(n["a"])(this,t)
i=Object(o["a"])(this,Object(a["a"])(t).call(this,e))
i._timeouts=[]
i.handleTimeout=function(){i.props.timeout>0&&i._timeouts.push(setTimeout((function(){i.close()}),i.props.timeout))}
i.onExitTransition=function(){i.props.onDismiss&&i.props.onDismiss()}
i.close=function(){i.clearTimeouts()
i.removeScreenreaderAlert()
i.setState({open:false},(function(){i.props.onDismiss&&"none"===i.props.transition&&i.props.onDismiss()}))}
i.handleKeyUp=function(e){(i.props.renderCloseButtonLabel||i.props.closeButtonLabel)&&e.keyCode===h.a.codes.esc&&i.close()}
i.state={open:true}
return i}Object(r["a"])(t,[{key:"variantUI",value:function(){return{error:{Icon:x,classNames:g()(G.alert,G.error)},info:{Icon:O,classNames:g()(G.alert,G.info)},success:{Icon:E["a"],classNames:g()(G.alert,G.success)},warning:{Icon:D,classNames:g()(G.alert,G.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic","false")}}},{key:"createScreenreaderContentNode",value:function(){return _.a.createElement(w["a"],{__dangerouslyIgnoreExperimentalWarnings:true},this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=Object(P["a"])("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var i=this.createScreenreaderContentNode()
u.a.render(i,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){var e=this
if(this.getLiveRegion()){var t=document.getElementById(this.srid)
t&&u.a.render(null,t,(function(){var i=e.createScreenreaderContentNode()
u.a.render(i,t)}))}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
u.a.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentWillMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)}},{key:"componentDidMount",value:function(){this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.props.children!==e.children&&this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return _.a.createElement("div",{className:G.icon},_.a.createElement(t,{className:G.alertIcon}))}},{key:"renderCloseButton",value:function(){var e=this.props.renderCloseButtonLabel&&Object(v["a"])(this.props.renderCloseButtonLabel)||this.props.closeButtonLabel
return e?_.a.createElement("div",{className:G.closeButton,key:"closeButton"},_.a.createElement(y["a"],{onClick:this.close,size:"small",variant:"icon"},e)):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return _.a.createElement(k["a"],{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp,__dangerouslyIgnoreExperimentalWarnings:true},this.renderIcon(),_.a.createElement("div",{className:G.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return _.a.createElement(N["a"],{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
t.displayName="Alert"
return t}(c["Component"]),L.propTypes={children:p.a.node,variant:p.a.oneOf(["info","success","warning","error"]),margin:M["c"].spacing,liveRegion:p.a.func,liveRegionPoliteness:p.a.oneOf(["polite","assertive"]),screenReaderOnly:p.a.bool,timeout:p.a.number,renderCloseButtonLabel:p.a.oneOfType([p.a.func,p.a.node]),closeButtonLabel:p.a.string,onDismiss:p.a.func,transition:p.a.oneOf(["none","fade"]),open:p.a.bool},L.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",onDismiss:void 0,liveRegion:void 0,renderCloseButtonLabel:void 0,closeButtonLabel:void 0,children:null},R))||I)||I)},LqrG:function(e,t,i){"use strict"
i.d(t,"a",(function(){return s}))
var n=i("qx8k")
var r=i("ouhR")
var o=i.n(r)
var a=i("HIhM")
class s{constructor(){this.idGenerator=0
this.$questions=o()("#questions.show_correct_answers:not(.survey_quiz)")
this.rightAnswers=this.$questions.find(".selected_answer.correct_answer")
this.wrongAnswers=this.$questions.find(".selected_answer.wrong_answer")
this.correctAnswers=this.$questions.find(".question:not(.short_answer_question, .numerical_question, .matching_question) .correct_answer:not(.selected_answer)")
this.editableMatches=o()("#quiz_edit_wrapper").find(this.$questions.selector).find(".question.matching_question .correct_answer:not(.selected_answer)")
this.readOnlyMatches=o()("#quiz_show").find(this.$questions.selector).find(".question.matching_question .correct_answer:not(.selected_answer)")
this.shortAnswers=this.$questions.filter(":not(.survey_results)").find(".short_answer_question .answers_wrapper, #questions.show_correct_answers:not(.survey_results):not(.survey_quiz) .numerical_question .answers_wrapper, #questions.show_correct_answers:not(.survey_results):not(.survey_quiz) .equation_combinations_holder_holder.calculated_question_answers")
this.unansweredQ=o()(".question.unanswered .header .question_name")
this.creditPartial=o()("#questions.suppress_correct_answers:not(.survey_results) .question.partial_credit .header .question_name")
this.creditFull=o()("#questions.suppress_correct_answers:not(.survey_results) .question.correct .header .question_name")
this.creditNone=o()("#questions.suppress_correct_answers:not(.survey_results) .question.incorrect:not(.unanswered) .header .question_name")
this.surveyAnswers=o()("#questions.survey_results .selected_answer")
this.rightTpl=o()("<span />",{class:"answer_arrow correct"})
this.wrongTpl=o()("<span />",{class:"answer_arrow incorrect"})
this.correctTpl=o()("<span />",{class:"answer_arrow info"})
this.shortTpl=o()("<span />",{class:"answer_arrow info"})
this.unansweredTpl=o()("<span />",{class:"answer_arrow incorrect"})
this.creditFullTpl=o()("<span />",{class:"answer_arrow correct"})
this.creditPartialTpl=o()("<span />",{class:"answer_arrow incorrect"})
this.creditNoneTpl=o()("<span />",{class:"answer_arrow incorrect"})
this.surveyAnswerTpl=o()("<span />",{class:"answer_arrow info"})}applyCSS(){o.a.each([this.rightTpl,this.wrongTpl,this.correctTpl,this.shortTpl,this.surveyAnswerTpl],(function(){this.css({[Object(a["a"])("left")]:-128,top:5})}))
o.a.each([this.unansweredTpl,this.creditFullTpl,this.creditNoneTpl,this.creditPartialTpl],(function(){this.css({[Object(a["a"])("left")]:-108,top:9})}))}applyCorrectAndIncorrectArrows(){this.rightTpl.text(n["a"].t("answers.correct","Correct!"))
this.wrongTpl.text(n["a"].t("answers.you_answered","You Answered"))
this.correctTpl.text(n["a"].t("answers.right","Correct Answer"))
this.shortTpl.text(n["a"].t("answers.correct_answers","Correct Answers"))
this.creditFullTpl.text(n["a"].t("answers.correct","Correct!"))
this.creditPartialTpl.text(n["a"].t("answers.partial","Partial"))
this.creditNoneTpl.text(n["a"].t("answers.incorrect","Incorrect"))
this.rightAnswers.prepend(this.rightTpl)
this.wrongAnswers.prepend(this.wrongTpl)
this.correctAnswers.prepend(this.correctTpl)
this.editableMatches.parent().before(this.correctTpl.clone())
this.readOnlyMatches.prepend(this.correctTpl.clone())
this.shortAnswers.prepend(this.shortTpl)
this.creditPartial.prepend(this.creditPartialTpl)
this.creditFull.prepend(this.creditFullTpl)
this.creditNone.prepend(this.creditNoneTpl)}applyAnsweredAndUnansweredArrows(){this.unansweredTpl.text(n["a"].t("answers.unanswered","Unanswered"))
this.surveyAnswerTpl.text(n["a"].t("answers.you_answered","You Answered"))
this.unansweredQ.prepend(this.unansweredTpl)
this.surveyAnswers.prepend(this.surveyAnswerTpl)}makeArrowsAccessible(){o()(".short_answer_question .answer_arrow").css("top",5)
o()("#questions .answer_arrow").each((function(){const e=o()(this)
const t=e.parent()
let i=o()()
let n=t.prop("id")
n||(n=["user_answer",++this.idGenerator].join("_"))
n=[n,"arrow"].join("_")
e.prop("id",n)
i=t.find("input:visible")
i.length||(i=t)
i.attr("aria-describedby",n)}))}applyArrows(){this.applyCSS()
ENV.IS_SURVEY||this.applyCorrectAndIncorrectArrows()
this.applyAnsweredAndUnansweredArrows()
this.makeArrowsAccessible()}}},MdYG:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"gpa_scale_6710e2ee":"مقياس المعدل التراكمي","letter_grade_f00fedc4":"الدرجة بالأحرف","other_ddacb37d":"أخرى","percent_448ea947":"النسبة المئوية","points_bceb5005":"النقاط"},"cy":{"gpa_scale_6710e2ee":"Graddfa GPA","letter_grade_f00fedc4":"gradd llythyren","other_ddacb37d":"arall","percent_448ea947":"canran","points_bceb5005":"pwynt"},"da":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavkarakter","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"da-x-k12":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavvurdering","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"de":{"gpa_scale_6710e2ee":"GPA-Skala","letter_grade_f00fedc4":"Buchstaben-Note","other_ddacb37d":"sonstige","percent_448ea947":"Prozent","points_bceb5005":"Punkte"},"el":{"letter_grade_f00fedc4":"Βαθμολόγηση με Γράμματα","percent_448ea947":"ποσοστό","points_bceb5005":"Μόρια"},"en-AU":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-AU-x-unimelb":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-CA":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-GB":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-lbs":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-ukhe":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"es":{"gpa_scale_6710e2ee":"Escala del GPA","letter_grade_f00fedc4":"Calificación por letra","other_ddacb37d":"otro","percent_448ea947":"porcentaje","points_bceb5005":"puntos"},"fa":{"gpa_scale_6710e2ee":"مقایس معدل","letter_grade_f00fedc4":"نمره با حروف الفبا","other_ddacb37d":"سایر","percent_448ea947":"درصد","points_bceb5005":"امتیازها"},"fi":{"gpa_scale_6710e2ee":"GPA-asteikko","letter_grade_f00fedc4":"kirjainarvosana","other_ddacb37d":"muu","percent_448ea947":"prosenttia","points_bceb5005":"pisteet"},"fr":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"fr-CA":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"he":{"gpa_scale_6710e2ee":"סולם ההערכה GPA","letter_grade_f00fedc4":"הערכה מילולית","other_ddacb37d":"אחר","percent_448ea947":"אחוז","points_bceb5005":"נקודות"},"ht":{"gpa_scale_6710e2ee":"Echèl GPA","letter_grade_f00fedc4":"kategori lèt","other_ddacb37d":"lòt","percent_448ea947":"pousantaj","points_bceb5005":"pwen"},"hu":{"gpa_scale_6710e2ee":"GPA skála","letter_grade_f00fedc4":"Betű alapú érdemjegy ","other_ddacb37d":"Egyéb","percent_448ea947":"százalék","points_bceb5005":"pontszám"},"is":{"gpa_scale_6710e2ee":"Meðaleinkunnakvarði","letter_grade_f00fedc4":"bókstafseinkunn","other_ddacb37d":"annað","percent_448ea947":"hlutfall","points_bceb5005":"punktar"},"it":{"gpa_scale_6710e2ee":"Scala GPA","letter_grade_f00fedc4":"voto in lettere","other_ddacb37d":"altro","percent_448ea947":"percentuale","points_bceb5005":"punti"},"ja":{"gpa_scale_6710e2ee":"GPA スケール","letter_grade_f00fedc4":"レター グレード","other_ddacb37d":"その他","percent_448ea947":"パーセント","points_bceb5005":"点数"},"mi":{"gpa_scale_6710e2ee":"tauine GPA","letter_grade_f00fedc4":"kōeke reta","other_ddacb37d":"te tahi atu","percent_448ea947":"ōrau","points_bceb5005":"Ngā koinga"},"nb":{"gpa_scale_6710e2ee":"Tallkarakterskala","letter_grade_f00fedc4":"Bokstavkarakter","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nb-x-k12":{"gpa_scale_6710e2ee":"Tallvurderingsskala","letter_grade_f00fedc4":"Bokstavvurdering","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nl":{"gpa_scale_6710e2ee":"Gemiddeld eindcijfer","letter_grade_f00fedc4":"beoordeling in lettervorm","other_ddacb37d":"andere","percent_448ea947":"percentage","points_bceb5005":"punten"},"nn":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bokstavkarakter","other_ddacb37d":"anna","percent_448ea947":"prosent","points_bceb5005":"poeng"},"pl":{"gpa_scale_6710e2ee":"Skala GPA","letter_grade_f00fedc4":"ocena literowa","other_ddacb37d":"inne","percent_448ea947":"procent","points_bceb5005":"punkty"},"pt":{"gpa_scale_6710e2ee":"Escala GPA","letter_grade_f00fedc4":"nota por letra","other_ddacb37d":"outro","percent_448ea947":"percentagem","points_bceb5005":"pontos"},"pt-BR":{"gpa_scale_6710e2ee":"escala GPA","letter_grade_f00fedc4":"nota por conceito","other_ddacb37d":"outro","percent_448ea947":"porcentagem","points_bceb5005":"pontos"},"ru":{"gpa_scale_6710e2ee":"Система оценки GPA","letter_grade_f00fedc4":"буквенная оценка","other_ddacb37d":"другое","percent_448ea947":"процент","points_bceb5005":"баллов"},"sl":{"gpa_scale_6710e2ee":"Lestvica GPA","letter_grade_f00fedc4":"črkovna ocena","other_ddacb37d":"drugo","percent_448ea947":"odstotek","points_bceb5005":"točk"},"sv":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"Bokstavsomdöme","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"sv-x-k12":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"Bokstavsbedömning","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"Poäng"},"tr":{"gpa_scale_6710e2ee":"GNO ölçeği","other_ddacb37d":"diğer","percent_448ea947":"yüzde"},"uk":{"gpa_scale_6710e2ee":"GPA масштаб","letter_grade_f00fedc4":"оцінка у вигляді літери","other_ddacb37d":"інше","percent_448ea947":"відсоток","points_bceb5005":"бали"},"zh-Hans":{"gpa_scale_6710e2ee":"GPA 绩点","letter_grade_f00fedc4":"字母评分","other_ddacb37d":"其他","percent_448ea947":"百分率","points_bceb5005":"分值"},"zh-Hant":{"gpa_scale_6710e2ee":"GPA 比例","letter_grade_f00fedc4":"字母分級","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分數"}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("cyoe_assignment_sidebar_grading_types")
const a={points:{get label(){return o.t("points")},key:"points"},percent:{get label(){return o.t("percent")},key:"percent"},letter_grade:{get label(){return o.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return o.t("GPA scale")},key:"gpa_scale"},other:{get label(){return o.t("other")},key:"other"}}
var s=a
Object(r["a"])(JSON.parse('{"ar":{"score_pts_adcb1af3":"%{score} نقاط"},"cy":{"score_pts_adcb1af3":"%{score} pwynt"},"da":{"score_pts_adcb1af3":"%{score} point"},"da-x-k12":{"score_pts_adcb1af3":"%{score} point"},"de":{"score_pts_adcb1af3":"%{score} Pkte."},"en-AU":{"score_pts_adcb1af3":"%{score} pts"},"en-AU-x-unimelb":{"score_pts_adcb1af3":"%{score} pts"},"en-CA":{"score_pts_adcb1af3":"%{score} pts"},"en-GB":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-lbs":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-ukhe":{"score_pts_adcb1af3":"%{score} pts"},"es":{"score_pts_adcb1af3":"%{score} pts"},"fa":{"score_pts_adcb1af3":"%{score} امتیاز"},"fi":{"score_pts_adcb1af3":"%{score} pistettä"},"fr":{"score_pts_adcb1af3":"%{score} pts"},"fr-CA":{"score_pts_adcb1af3":"%{score} pts"},"he":{"score_pts_adcb1af3":"%{score} נקודות"},"ht":{"score_pts_adcb1af3":"%{score} pwen"},"hu":{"score_pts_adcb1af3":"%{score} pont"},"is":{"score_pts_adcb1af3":"%{score} punktar"},"it":{"score_pts_adcb1af3":"%{score} pt"},"ja":{"score_pts_adcb1af3":"%{score} pts"},"mi":{"score_pts_adcb1af3":"%{score} ngā koinga"},"nb":{"score_pts_adcb1af3":"%{score} p"},"nb-x-k12":{"score_pts_adcb1af3":"%{score} poeng"},"nl":{"score_pts_adcb1af3":"%{score} punten"},"nn":{"score_pts_adcb1af3":"%{score} poeng"},"pl":{"score_pts_adcb1af3":"%{score} pkt"},"pt":{"score_pts_adcb1af3":"%{score} pts"},"pt-BR":{"score_pts_adcb1af3":"%{score} pts"},"ru":{"score_pts_adcb1af3":"%{score} баллов"},"sl":{"score_pts_adcb1af3":"%{score} točk"},"sv":{"score_pts_adcb1af3":"%{score} poäng"},"sv-x-k12":{"score_pts_adcb1af3":"%{score} poäng"},"uk":{"score_pts_adcb1af3":"%{score}балів"},"zh-Hans":{"score_pts_adcb1af3":"%{score} 分"},"zh-Hant":{"score_pts_adcb1af3":"%{score}分數"}}'))
var c=n["default"].scoped("cyoe_assignment_sidebar_score")
var _=i("HbFp")
i.d(t,"b",(function(){return m}))
i.d(t,"a",(function(){return v}))
const d=e=>{const t=_["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const u=e=>!!e&&!!e.grading_scheme
const l=e=>{const t=e?e.grading_type:s.percent.key
if((t===s.letter_grade.key||t===s.gpa_scale.key)&&!u(e))return s.percent.key
return t}
const p=(e,t)=>{const i=l(t)
return i===s.points.key?f(e,t):i===s.letter_grade.key||i===s.gpa_scale.key?h(e,t):b(e)}
const m=(e,t,i)=>{e||(e=i?"1":"0")
return g(p(e,t),t)}
const g=(e,t)=>{const i=l(t)
return i===s.points.key?c.t("%{score} pts",{score:c.n(e,{precision:2,strip_insignificant_zeros:true})}):i===s.letter_grade.key||i===s.gpa_scale.key?e:c.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const f=(e,t)=>{if(!d(e))return e
if(0===e)return"0"
const i=_["a"].parse(e)
const n=Number(t.points_possible)||100
return parseFloat((i*n).toFixed(2))}
const h=(e,t)=>{if(""===e)return""
const i=_["a"].parse(e)
const n={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const r=_["a"].parse(t.grading_scheme[e])
if(r<=i&&r>n.score||0===r&&r>i){n.score=r
n.letter=e}}return n.letter?n.letter:i}
const b=e=>{if(!d(e))return e
return Math.floor(100*e)}
const v=(e,t)=>{if("string"===typeof e&&t.grading_type!==s.letter_grade.key&&t.grading_type!==s.gpa_scale.key){const i=_["a"].parse(e.replace(/%$/,""))
if(!isNaN(i))return g(i,t)}return e}},OShF:function(e,t,i){"use strict"
var n=i("ouhR")
var r=i.n(n)
var o=i("5Ky4")
i("JI1W")
r.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=r()(this)
r.a.each(["name","id","class"],(i,n)=>{t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let n=false
if(e.data)for(var t in e.data){if(e.except&&-1!=r.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=r.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const a=this.find("."+t)
var i=e.avoid||""
a.each((function(){const a=r()(this)
if(a.length>0&&0===a.closest(i).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=r.a.inArray(t,e.htmlValues)){a.html(r.a.raw(e.data[t].toString()))
if(a.hasClass("user_content")){n=true
a.removeClass("enhanced")
a.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==a[0].tagName.toUpperCase())a.val(e.data[t])
else try{const i=e.data[t].toString()
a.html(Object(o["a"])(i))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,i,n,o=r()(this)
for(const a in e.hrefValues){if(!e.hrefValues.hasOwnProperty(a))continue
const s=e.hrefValues[a]
if(t=o.attr("href")){const i=r.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
const n=o.text()===o.html()?o.text():null
if(t!==i){o.attr("href",i)
n&&o.text(n)}}(i=o.attr("rel"))&&o.attr("rel",r.a.replaceTags(i,s,e.data[s]));(n=o.attr("name"))&&o.attr("name",r.a.replaceTags(n,s,e.data[s]))}}))
n&&r()(document).triggerHandler("user_content_change")}return this}
r.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
r.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const o=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=r.a.trim(o.text())
"&nbsp;"===o.html()&&(n="")
1===n.length&&160===n.charCodeAt(0)&&(n="")
i[e]=n})}if(e.dataValues)for(t in e.dataValues){var n=this.data(e.dataValues[t])
n&&(i[e.dataValues[t]]=n)}if(e.htmlValues)for(t in e.htmlValues){const o=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=null
n=o.hasClass("user_content")&&o.data("unenhanced_content_html")?o.data("unenhanced_content_html"):r.a.trim(o.html())
i[e.htmlValues[t]]=n}return i}
r.a.fn.getTemplateValue=function(e,t){const i=r.a.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},P4VU:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-AU-x-unimelb":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-lbs":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving task external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-ukhe":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaintotyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittajaa","the_preceding_content_is_partner_provided_d753928c":"edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"sv-x-k12":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
i("jQeR")
i("0sPK")
t["a"]=n["default"].scoped("moderated_grading")},PHBv:function(e,t,i){"use strict"
var n=i("VTBJ")
var r=i("ouhR")
var o=i.n(r)
var a=i("GLiE")
var s=i.n(a)
var c=i("FIFq")
var _=i.n(c)
var d=i("Et5h")
var u=i("TRyN")
var l=i("OzZ7")
var p=i("Lox5")
var m=i("pQTu")
var g=i("m0r6")
Object(g["a"])(JSON.parse('{"ar":{"modelsQuiz":{"assignment_points_possible":{"one":"نقطة واحدة","other":"%{count} نقاط"},"cant_unpublish_when_students_submit":"لا يمكن إلغاء النشر في حالة وجود عمليات إرسال لطالب","question_count":{"one":"سؤال واحد","other":"%{count} من الأسئلة"}}},"cy":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pwynt"},"cant_unpublish_when_students_submit":"Does dim modd dad-gyhoeddi os oes gwaith wedi’i gyflwyno gan fyfyrwyr","question_count":{"one":"1 Cwestiwn","other":"%{count} Cwestiwn"}}},"da":{"modelsQuiz":{"assignment_points_possible":{"one":"1 point","other":"%{count} point"},"cant_unpublish_when_students_submit":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra studerende","question_count":{"one":"1 spørgsmål","other":"%{count} spørgsmål"}}},"da-x-k12":{"modelsQuiz":{"assignment_points_possible":{"one":"1 point","other":"%{count} point"},"cant_unpublish_when_students_submit":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra elever","question_count":{"one":"1 spørgsmål","other":"%{count} spørgsmål"}}},"de":{"modelsQuiz":{"assignment_points_possible":{"one":"1 Pkt.","other":"%{count} Pkte."},"cant_unpublish_when_students_submit":"Veröffentlichung kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","question_count":{"one":"1 Frage","other":"%{count} Fragen"}}},"el":{"modelsQuiz":{"cant_unpublish_when_students_submit":"Δεν γίνεται να αναιρεθεί η δημοσίευση αν υπάρχουν υποβολές σπουδαστών"}},"en-AU":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Can\'t unpublish if there are student submissions","question_count":{"one":"1 Question","other":"%{count} Questions"}}},"en-AU-x-unimelb":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Can\'t unpublish if there are student submissions","question_count":{"one":"1 Question","other":"%{count} Questions"}}},"en-CA":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Can\'t unpublish if there are student submissions","question_count":{"one":"1 Question","other":"%{count} Questions"}}},"en-GB":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Can\'t unpublish if there are student submissions","question_count":{"one":"1 Question","other":"%{count} Questions"}}},"en-GB-x-ukhe":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Can\'t unpublish if there are student submissions","question_count":{"one":"1 Question","other":"%{count} Questions"}}},"es":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pto.","other":"%{count} pts"},"cant_unpublish_when_students_submit":"No se puede cancelar la publicación si hay entregas de estudiantes","question_count":{"one":"1 pregunta","other":"%{count} Preguntas"}}},"fa":{"modelsQuiz":{"cant_unpublish_when_students_submit":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار را لغو کرد"}},"fi":{"modelsQuiz":{"assignment_points_possible":{"one":"1 piste","other":"%{count} pistettä"},"cant_unpublish_when_students_submit":"Julkaisua ei voida peruuttaa, jos on opiskelijalähetyksiä.","question_count":{"one":"1 kysymys","other":"%{count}  Kysymykset"}}},"fr":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Impossible de retirer la publication s’il y a des envois d’étudiants","question_count":{"one":"1 question","other":"%{count} questions"}}},"fr-CA":{"modelsQuiz":{"assignment_points_possible":{"one":"1 point","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Ne peut être retiré de la publication si des étudiants ont envois","question_count":{"one":"1 question","other":"%{count} questions"}}},"he":{"modelsQuiz":{"cant_unpublish_when_students_submit":"אין אפשרות לבטל פרסום אם ישנן הגשות תלמידים"}},"ht":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pwen"},"cant_unpublish_when_students_submit":"Ou paka pa pibliye si gen soumisyon elèv","question_count":{"one":"1 Kesyon","other":"%{count} Kesyon"}}},"hu":{"modelsQuiz":{"cant_unpublish_when_students_submit":"Nem lehet visszavonni a publikálást, ha vannak a hallgatóknak beadandói"}},"hy":{"modelsQuiz":{"cant_unpublish_when_students_submit":"Հնարավոր չէ չեղարկել հրապարակումը, եթե առկա են ունկնդիրների ներկայացրած աշխատանքները:"}},"is":{"modelsQuiz":{"assignment_points_possible":{"one":"1 punktur","other":"%{count} punktar"},"cant_unpublish_when_students_submit":"Ekki hægt að afbirta ef skil nemenda eru til staðar","question_count":{"one":"1 spurning","other":"%{count} spurningar"}}},"it":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pt."},"cant_unpublish_when_students_submit":"Impossibile annullare la pubblicazione se ci sono consegne degli studenti","question_count":{"one":"1 domanda","other":"%{count} domande"}}},"ja":{"modelsQuiz":{"assignment_points_possible":{"one":"%{count} 点","other":"%{count} 点"},"cant_unpublish_when_students_submit":"受講生の提出物がある場合は、未公開にできません","question_count":{"one":"%{count}の質問","other":"%{count}の質問"}}},"ko":{"modelsQuiz":{"cant_unpublish_when_students_submit":"확생 제출물이 있으면 게시를 취소할 수 없음"}},"mi":{"modelsQuiz":{"assignment_points_possible":{"one":"1 koinga","other":"%{count} ngā koinga"},"cant_unpublish_when_students_submit":"Kāore e taea te tāngia ki te reira e tāpaetanga ākonga","question_count":{"one":"1 Pātai","other":"%{count} Pātai"}}},"nb":{"modelsQuiz":{"assignment_points_possible":{"one":"1 poeng","other":"%{count} poeng"},"cant_unpublish_when_students_submit":"Kan ikke avpublisere om det er student innleveringer","question_count":{"one":"1 spørsmål","other":"%{count} Spørsmål"}}},"nb-x-k12":{"modelsQuiz":{"assignment_points_possible":{"one":"1 poeng","other":"%{count} poeng"},"cant_unpublish_when_students_submit":"Kan ikke avpublisere om det er elevinnleveringer","question_count":{"one":"1 spørsmål","other":"%{count} Spørsmål"}}},"nl":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} punten"},"cant_unpublish_when_students_submit":"Kan publicatie niet ongedaan maken als er inzendingen van cursisten zijn","question_count":{"one":"1 vraag","other":"%{count} vragen"}}},"nn":{"modelsQuiz":{"assignment_points_possible":{"one":"1 poeng","other":"%{count} poeng"},"cant_unpublish_when_students_submit":"Kan ikkje fjerne publisering dersom det finst studentinnleveringar","question_count":{"one":"1 spørsmål","other":"%{count} spørsmål"}}},"pl":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pkt","other":"%{count} pkt"},"cant_unpublish_when_students_submit":"Nie można cofnąć publikowania, jeśli znajdują się przesłane zadania uczestnika","question_count":{"one":"1 pytanie","other":"Pytania: %{count}"}}},"pt":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Não é possível publicar se existirem envios de alunos","question_count":{"one":"1 Pergunta","other":"%{count} Perguntas"}}},"pt-BR":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} pts"},"cant_unpublish_when_students_submit":"Não é possível remover publicação se houver envios dos alunos","question_count":{"one":"1 pergunta","other":"%{count} perguntas"}}},"ru":{"modelsQuiz":{"assignment_points_possible":{"one":"1 балл","other":"%{count} баллов"},"cant_unpublish_when_students_submit":"Невозможно отменить публикацию, если есть отправленные студентами задания","question_count":{"one":"1 вопрос","other":"%{count} вопросов"}}},"sv":{"modelsQuiz":{"assignment_points_possible":{"one":"1 pt","other":"%{count} poäng"},"cant_unpublish_when_students_submit":"Kan inte avpublicera om det finns studentinlämningar","question_count":{"one":"1 fråga","other":"%{count} Frågor"}}},"tr":{"modelsQuiz":{"cant_unpublish_when_students_submit":"Öğrenci gönderileri varsa yayından kaldırılamaz"}},"zh-Hans":{"modelsQuiz":{"assignment_points_possible":{"one":"%{count} 分","other":"%{count} 分"},"cant_unpublish_when_students_submit":"如有学生提交文件，则无法取消发布","question_count":{"one":"%{count} 个问题","other":"%{count} 个问题"}}},"zh-Hant":{"modelsQuiz":{"assignment_points_possible":{"one":"%{count} 分","other":"%{count} 分"},"cant_unpublish_when_students_submit":"如有學生提交項目，則無法取消發佈","question_count":{"one":"%{count} 個問題","other":"%{count} 個問題"}}}}'))
i("jQeR")
i("0sPK")
var f=m["default"].scoped("modelsQuiz")
i("jYyc")
i("JI1W")
var h=i("oNm9")
i.d(t,"a",(function(){return b}))
class b extends _.a.Model{initialize(){this.publish=this.publish.bind(this)
this.unpublish=this.unpublish.bind(this)
this.dueAt=this.dueAt.bind(this)
this.unlockAt=this.unlockAt.bind(this)
this.lockAt=this.lockAt.bind(this)
this.name=this.name.bind(this)
this.htmlUrl=this.htmlUrl.bind(this)
this.defaultDates=this.defaultDates.bind(this)
this.multipleDueDates=this.multipleDueDates.bind(this)
this.nonBaseDates=this.nonBaseDates.bind(this)
this.allDates=this.allDates.bind(this)
this.singleSectionDueDate=this.singleSectionDueDate.bind(this)
this.postToSIS=this.postToSIS.bind(this)
this.postToSISName=this.postToSISName.bind(this)
this.sisIntegrationSettingsEnabled=this.sisIntegrationSettingsEnabled.bind(this)
this.maxNameLength=this.maxNameLength.bind(this)
this.maxNameLengthRequiredForAccount=this.maxNameLengthRequiredForAccount.bind(this)
this.dueDateRequiredForAccount=this.dueDateRequiredForAccount.bind(this)
this.toView=this.toView.bind(this)
this.postToSISEnabled=this.postToSISEnabled.bind(this)
this.objectType=this.objectType.bind(this)
this.isDuplicating=this.isDuplicating.bind(this)
this.isMigrating=this.isMigrating.bind(this)
super.initialize(...arguments)
this.initId()
this.initAssignment()
this.initAssignmentOverrides()
this.initUrls()
this.initTitleLabel()
this.initUnpublishable()
this.initQuestionsCount()
this.initPointsCount()
return this.initAllDates()}initId(){this.id=this.isQuizzesNext()?"assignment_".concat(this.get("id")):this.get("id")}initAssignment(){this.attributes.assignment&&this.set("assignment",new d["a"](this.attributes.assignment))
return this.set("post_to_sis_enabled",this.postToSISEnabled())}initAssignmentOverrides(){if(this.attributes.assignment_overrides){const e=new l["a"](this.attributes.assignment_overrides)
return this.set("assignment_overrides",e,{silent:true})}}initUrls(){if(this.get("html_url")){this.set("base_url",this.get("html_url").replace(/(quizzes|assignments)\/\d+/,"$1"))
this.set("url","".concat(this.get("base_url"),"/").concat(this.get("id")))
this.set("edit_url",this.edit_url())
this.set("publish_url",this.publish_url())
this.set("unpublish_url",this.unpublish_url())
this.set("toggle_post_to_sis_url","".concat(this.get("base_url"),"/").concat(this.get("id"),"/toggle_post_to_sis"))}}initTitleLabel(){return this.set("title_label",this.get("title")||this.get("readable_type"))}initUnpublishable(){if(false===this.get("can_unpublish")&&this.get("published"))return this.set("unpublishable",false)}initQuestionsCount(){const e=this.get("question_count")
e&&this.set("question_count_label",f.t("question_count","Question",{count:e}))}initPointsCount(){const e=this.get("points_possible")
let t=""
e&&e>0&&!this.isUngradedSurvey()&&(t=f.t("assignment_points_possible","pt",{count:e}))
return this.set("possible_points_label",t)}isQuizzesNext(){return"quizzes.next"===this.get("quiz_type")}isUngradedSurvey(){return"survey"===this.get("quiz_type")}publish_url(){if(this.isQuizzesNext())return"".concat(this.get("base_url"),"/publish/quiz")
return"".concat(this.get("base_url"),"/publish")}unpublish_url(){if(this.isQuizzesNext())return"".concat(this.get("base_url"),"/unpublish/quiz")
return"".concat(this.get("base_url"),"/unpublish")}edit_url(){const e=this.isQuizzesNext()?"?quiz_lti":""
return"".concat(this.get("base_url"),"/").concat(this.get("id"),"/edit").concat(e)}initAllDates(){let e
if(null!=(e=this.get("all_dates")))return this.set("all_dates",new p["a"](e))}publish(){this.set("published",true)
return o.a.ajaxJSON(this.get("publish_url"),"POST",{quizzes:[this.get("id")]})}unpublish(){this.set("published",false)
return o.a.ajaxJSON(this.get("unpublish_url"),"POST",{quizzes:[this.get("id")]})}disabledMessage(){return f.t("cant_unpublish_when_students_submit","Can't unpublish if there are student submissions")}dueAt(e){if(!(arguments.length>0))return this.get("due_at")
return this.set("due_at",e)}unlockAt(e){if(!(arguments.length>0))return this.get("unlock_at")
return this.set("unlock_at",e)}lockAt(e){if(!(arguments.length>0))return this.get("lock_at")
return this.set("lock_at",e)}isDuplicating(){return"duplicating"===this.get("workflow_state")}isMigrating(){return"migrating"===this.get("workflow_state")}name(e){if(!(arguments.length>0))return this.get("title")
return this.set("title",e)}htmlUrl(){return this.get("url")}destroy(e){const t=Object(n["a"])({url:this.htmlUrl()},e)
_.a.Model.prototype.destroy.call(this,t)}defaultDates(){return new u["a"]({due_at:this.get("due_at"),unlock_at:this.get("unlock_at"),lock_at:this.get("lock_at")})}duplicate(e){const t=this.get("course_id")
const i=this.get("id")
return o.a.ajaxJSON("/api/v1/courses/".concat(t,"/assignments/").concat(i,"/duplicate"),"POST",{quizzes:[i],result_type:"Quiz"},e)}duplicate_failed(e){const t=this.get("course_id")
const i=this.get("id")
const n=this.get("original_course_id")
const r=this.get("original_assignment_id")
let a="?target_assignment_id=".concat(i)
n!==t&&(a+="&target_course_id=".concat(t))
o.a.ajaxJSON("/api/v1/courses/".concat(n,"/assignments/").concat(r,"/duplicate").concat(a),"POST",{},e)}retry_migration(e){const t=this.get("course_id")
const i=this.get("original_quiz_id")
o.a.ajaxJSON("/api/v1/courses/".concat(t,"/content_exports?export_type=quizzes2&quiz_id=").concat(i,"&include[]=migrated_quiz"),"POST",{},e)}pollUntilFinishedLoading(e){this.isDuplicating()&&this.pollUntilFinished(e,this.isDuplicating)
this.isMigrating()&&this.pollUntilFinished(e,this.isMigrating)}pollUntilFinished(e,t){const i=this.get("course_id")
const n=this.get("id")
const r=new h["a"](e,5*e,e=>{this.fetch({url:"/api/v1/courses/".concat(i,"/assignments/").concat(n,"?result_type=Quiz")}).always(()=>{e()
if(!t())return r.stop()})})
r.start()}multipleDueDates(){const e=this.get("all_dates")
return e&&e.length>1}nonBaseDates(){const e=this.get("all_dates")
if(!e)return false
const t=s.a.filter(e,e=>e&&!e.get("base"))
return t.length>0}allDates(){const e=this.get("all_dates")
const t=e&&e.models||[]
return s.a.map(t,e=>e.toJSON())}singleSectionDueDate(){return v(s.a.find(this.allDates(),"dueAt"),e=>e.dueAt.toISOString())||this.dueAt()}isOnlyVisibleToOverrides(e){if(!(arguments.length>0))return this.get("only_visible_to_overrides")||false
return this.set("only_visible_to_overrides",e)}postToSIS(e){if(!(arguments.length>0))return this.get("post_to_sis")
return this.set("post_to_sis",e)}postToSISName(){return ENV.SIS_NAME}sisIntegrationSettingsEnabled(){return ENV.SIS_INTEGRATION_SETTINGS_ENABLED}maxNameLength(){return ENV.MAX_NAME_LENGTH}maxNameLengthRequiredForAccount(){return ENV.MAX_NAME_LENGTH_REQUIRED_FOR_ACCOUNT}dueDateRequiredForAccount(){return ENV.DUE_DATE_REQUIRED_FOR_ACCOUNT}toView(){const e=["htmlUrl","multipleDueDates","nonBaseDates","allDates","dueAt","lockAt","unlockAt","singleSectionDueDate"]
const t={id:this.get("id")}
for(const i of e)t[i]=this[i]()
return t}postToSISEnabled(){return ENV.FLAGS&&ENV.FLAGS.post_to_sis_enabled}objectType(){return"Quiz"}}b.prototype.resourceName="quizzes"
b.prototype.defaults={due_at:null,unlock_at:null,lock_at:null,unpublishable:true,points_possible:null,post_to_sis:false}
function v(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},"Pm+R":function(e,t,i){"use strict"
var n=i("GLiE")
var r=i.n(n)
var o=i("pQTu")
var a=i("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"assignments_1e02582c":"المهام","discussions_a5f96392":"مناقشات","other_1c6d9c79":"أخرى","quizzes_7e598f57":"الاختبارات","wiki_6603e81b":"Wiki"},"cy":{"assignments_1e02582c":"Aseiniadau","discussions_a5f96392":"Trafodaethau","other_1c6d9c79":"Arall","quizzes_7e598f57":"Cwisiau","wiki_6603e81b":"Wici"},"da":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Test","wiki_6603e81b":"Wiki"},"da-x-k12":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Quizzer","wiki_6603e81b":"Wiki"},"de":{"assignments_1e02582c":"Aufgaben","discussions_a5f96392":"Diskussionen","other_1c6d9c79":"Sonstige","quizzes_7e598f57":"Quizze","wiki_6603e81b":"Wiki"},"el":{"assignments_1e02582c":"Εργασίες","discussions_a5f96392":"Συζητήσεις","quizzes_7e598f57":"Κουίζ"},"en-AU":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-AU-x-unimelb":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-CA":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB-x-lbs":{"assignments_1e02582c":"Tasks","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Surveys","wiki_6603e81b":"Wiki"},"en-GB-x-ukhe":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"es":{"assignments_1e02582c":"Tareas","discussions_a5f96392":"Foros de discusión","other_1c6d9c79":"Otro","quizzes_7e598f57":"Evaluaciones","wiki_6603e81b":"Wiki"},"fa":{"assignments_1e02582c":"تکلیف ها","discussions_a5f96392":"بحث ها","other_1c6d9c79":"سایر","quizzes_7e598f57":"آزمون‌ها","wiki_6603e81b":"ویکی"},"fi":{"assignments_1e02582c":"Tehtävät","discussions_a5f96392":"Keskustelut","other_1c6d9c79":"Muu","quizzes_7e598f57":"Tietovisat","wiki_6603e81b":"Wiki"},"fr":{"assignments_1e02582c":"Tâches","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autres","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"fr-CA":{"assignments_1e02582c":"Tâches","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autre","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"he":{"assignments_1e02582c":"משימות","discussions_a5f96392":"דיונים","other_1c6d9c79":"אחר","quizzes_7e598f57":"בחנים","wiki_6603e81b":"וויקי"},"ht":{"assignments_1e02582c":"Sesyon","discussions_a5f96392":"Diskisyon","other_1c6d9c79":"Lòt","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"hu":{"assignments_1e02582c":"Feladatok","discussions_a5f96392":"Fórumok","other_1c6d9c79":"Egyéb","quizzes_7e598f57":"Kvízek","wiki_6603e81b":"Wiki"},"hy":{"assignments_1e02582c":"Հանձնարարություններ","discussions_a5f96392":"Քննարկումներ","quizzes_7e598f57":"Թեստեր"},"is":{"assignments_1e02582c":"Verkefni","discussions_a5f96392":"Umræður","other_1c6d9c79":"Annað","quizzes_7e598f57":"Próf","wiki_6603e81b":"Wiki"},"it":{"assignments_1e02582c":"Compiti","discussions_a5f96392":"Discussioni","other_1c6d9c79":"Altro","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"ja":{"assignments_1e02582c":"課題","discussions_a5f96392":"ディスカッション","other_1c6d9c79":"その他","quizzes_7e598f57":"クイズ","wiki_6603e81b":"ウィキ"},"ko":{"assignments_1e02582c":"과제","discussions_a5f96392":"토론","quizzes_7e598f57":"퀴즈"},"mi":{"assignments_1e02582c":"Ngā whakataunga","discussions_a5f96392":"Ngā Kōrerorero","other_1c6d9c79":"Ētahi atu","quizzes_7e598f57":"Ngā Quizzes","wiki_6603e81b":"Wiki"},"nb":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nb-x-k12":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nl":{"assignments_1e02582c":"Opdrachten","discussions_a5f96392":"Discussies","other_1c6d9c79":"Overige","quizzes_7e598f57":"Toetsen","wiki_6603e81b":"Wiki"},"nn":{"assignments_1e02582c":"Oppgåver","discussions_a5f96392":"Diskusjonar","other_1c6d9c79":"Anna","quizzes_7e598f57":"Quizar","wiki_6603e81b":"Wiki"},"pl":{"assignments_1e02582c":"Zadania","discussions_a5f96392":"Dyskusje","other_1c6d9c79":"Inne","quizzes_7e598f57":"Testy","wiki_6603e81b":"Wiki"},"pt":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Discussões","other_1c6d9c79":"Outro","quizzes_7e598f57":"Testes","wiki_6603e81b":"Wiki"},"pt-BR":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Fóruns","other_1c6d9c79":"Outro","quizzes_7e598f57":"Testes","wiki_6603e81b":"Wiki"},"ru":{"assignments_1e02582c":"Задания","discussions_a5f96392":"Дискуссии","other_1c6d9c79":"Другое","quizzes_7e598f57":"Контрольные работы","wiki_6603e81b":"Wiki"},"sl":{"assignments_1e02582c":"Naloge:","discussions_a5f96392":"Razprave","other_1c6d9c79":"Drugo","quizzes_7e598f57":"Kvizi","wiki_6603e81b":"Wiki"},"sv":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"sv-x-k12":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"tr":{"assignments_1e02582c":"Ödevler","discussions_a5f96392":"Tartışmalar","other_1c6d9c79":"Diğer","quizzes_7e598f57":"Kısa sınavlar","wiki_6603e81b":"Wiki"},"uk":{"assignments_1e02582c":"Завдання","discussions_a5f96392":"Обговорення","other_1c6d9c79":"Інше","quizzes_7e598f57":"Контрольні роботи","wiki_6603e81b":"Вікі"},"zh-Hans":{"assignments_1e02582c":"作业","discussions_a5f96392":"讨论","other_1c6d9c79":"其他","quizzes_7e598f57":"测验","wiki_6603e81b":"维基"},"zh-Hant":{"assignments_1e02582c":"作業","discussions_a5f96392":"討論","other_1c6d9c79":"其他","quizzes_7e598f57":"測驗","wiki_6603e81b":"維基"}}'))
i("jQeR")
i("0sPK")
var s=o["default"].scoped("assignment_categories")
const c={label:s.t("Other"),id:"other",submissionTypes:[""]}
const _={list:[{label:s.t("Assignments"),id:"assignment",contentTypeClass:"assignment",submissionTypes:["online_upload","online_text_entry","online_url","on_paper","external_tool","not_graded","media_recording","none"]},{label:s.t("Quizzes"),id:"quiz",contentTypeClass:"quiz",submissionTypes:["online_quiz"]},{label:s.t("Discussions"),id:"discussion",contentTypeClass:"discussion_topic",submissionTypes:["discussion_topic"]},{label:s.t("Wiki"),id:"document",contentTypeClass:"wiki_page",submissionTypes:["wiki_page"]},c]}
_.getCategory=e=>{const t=r.a.find(_.list,t=>e.submission_types.length&&r.a.find(e.submission_types,e=>-1!==t.submissionTypes.indexOf(e)))
return t||_.OTHER}
t["a"]=_},RMh6:function(e,t,i){"use strict"
var n=i("3O+N")
var r=i.n(n)
i("DfGn")
var o=r.a.default
var a=o.template,s=o.templates=o.templates||{}
var c="EmptyDialogFormWrapper"
s[c]=a((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
return'<div class="outlet"></div>\n'}))
t["a"]=s[c]},SJWK:function(e,t,i){"use strict"
var n=i("ouhR")
var r=i.n(n)
i("9Duh")
i("vTtS")
i("ZV2x")
i("VHne")
r.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0
this.isout=1
this.accept=r.a.isFunction(t)?t:function(e){return e.is(t)}
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
r.a.ui.ddmanager.droppables[e.scope]=r.a.ui.ddmanager.droppables[e.scope]||[]
r.a.ui.ddmanager.droppables[e.scope].push(this)
e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var e=r.a.ui.ddmanager.droppables[this.options.scope]
for(var t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=r.a.isFunction(t)?t:function(e){return e.is(t)})
r.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=r.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass)
t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=r.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=r.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
this._trigger("over",e,this.ui(t))}},_out:function(e){var t=r.a.ui.ddmanager.current
if(!t||(t.currentItem||t.element)[0]==this.element[0])return
if(this.accept.call(this.element[0],t.currentItem||t.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("out",e,this.ui(t))}},_drop:function(e,t){var i=t||r.a.ui.ddmanager.current
if(!i||(i.currentItem||i.element)[0]==this.element[0])return false
var n=false
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=r.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==i.options.scope&&e.accept.call(e.element[0],i.currentItem||i.element)&&r.a.ui.intersect(i,r.a.extend(e,{offset:e.element.offset()}),e.options.tolerance)){n=true
return false}}))
if(n)return false
if(this.accept.call(this.element[0],i.currentItem||i.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass)
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
this._trigger("drop",e,this.ui(i))
return this.element}return false},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}})
r.a.ui.intersect=function(e,t,i){if(!t.offset)return false
var n=(e.positionAbs||e.position.absolute).left,o=n+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,s=a+e.helperProportions.height
var c=t.offset.left,_=c+t.proportions.width,d=t.offset.top,u=d+t.proportions.height
switch(i){case"fit":return c<=n&&o<=_&&d<=a&&s<=u
case"intersect":return c<n+e.helperProportions.width/2&&o-e.helperProportions.width/2<_&&d<a+e.helperProportions.height/2&&s-e.helperProportions.height/2<u
case"pointer":var l=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,p=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,m=r.a.ui.isOver(p,l,d,c,t.proportions.height,t.proportions.width)
return m
case"touch":return(a>=d&&a<=u||s>=d&&s<=u||a<d&&s>u)&&(n>=c&&n<=_||o>=c&&o<=_||n<c&&o>_)
default:return false}}
r.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var i=r.a.ui.ddmanager.droppables[e.options.scope]||[]
var n=t?t.type:null
var o=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var a=0;a<i.length;a++){if(i[a].options.disabled||e&&!i[a].accept.call(i[a].element[0],e.currentItem||e.element))continue
for(var s=0;s<o.length;s++)if(o[s]==i[a].element[0]){i[a].proportions.height=0
continue e}i[a].visible="none"!=i[a].element.css("display")
if(!i[a].visible)continue
"mousedown"==n&&i[a]._activate.call(i[a],t)
i[a].offset=i[a].element.offset()
i[a].proportions={width:i[a].element[0].offsetWidth,height:i[a].element[0].offsetHeight}}},drop:function(e,t){var i=false
r.a.each(r.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options)return
!this.options.disabled&&this.visible&&r.a.ui.intersect(e,this,this.options.tolerance)&&(i=this._drop.call(this,t)||i)
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)){this.isout=1
this.isover=0
this._deactivate.call(this,t)}}))
return i},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||r.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&r.a.ui.ddmanager.prepareOffsets(e,t)
r.a.each(r.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(this.options.disabled||this.greedyChild||!this.visible)return
var i=r.a.ui.intersect(e,this,this.options.tolerance)
var n=i||1!=this.isover?i&&0==this.isover?"isover":null:"isout"
if(!n)return
var o
if(this.options.greedy){var a=this.element.parents(":data(droppable):eq(0)")
if(a.length){o=r.a.data(a[0],"droppable")
o.greedyChild="isover"==n?1:0}}if(o&&"isover"==n){o["isover"]=0
o["isout"]=1
o._out.call(o,t)}this[n]=1
this["isout"==n?"isover":"isout"]=0
this["isover"==n?"_over":"_out"].call(this,t)
if(o&&"isout"==n){o["isout"]=0
o["isover"]=1
o._over.call(o,t)}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable")
e.options.refreshPositions||r.a.ui.ddmanager.prepareOffsets(e,t)}}},SLVX:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
function n(e){var t
var i=e.Symbol
if("function"===typeof i)if(i.observable)t=i.observable
else{t=i("observable")
i.observable=t}else t="@@observable"
return t}},T3Mz:function(e,t,i){"use strict"
i.r(t)
var n=i("VTBJ")
var r=i("An8g")
var o=i("q1tI")
var a=i.n(o)
var s=i("i8i4")
var c=i.n(s)
i("17x9")
var _=i("sUqa")
var d=i("5JRF")
var u=i("pQTu")
var l=i("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"criterion_5f0b62f8":"المعيار","duplicate_31cec192":"تكرار","find_outcome_746cc57e":"العثور على نتيجة","new_criterion_6054bc7f":"معيار جديد"},"cy":{"criterion_5f0b62f8":"Maen Prawf","duplicate_31cec192":"Dyblygu","find_outcome_746cc57e":"Dod o hyd i ddeilliant","new_criterion_6054bc7f":"Maen Prawf Newydd"},"da":{"criterion_5f0b62f8":"Kriterie","duplicate_31cec192":"Dupliker","find_outcome_746cc57e":"Find resultat","new_criterion_6054bc7f":"Nyt kriterie"},"da-x-k12":{"criterion_5f0b62f8":"Kriterie","duplicate_31cec192":"Dupliker","find_outcome_746cc57e":"Find resultat","new_criterion_6054bc7f":"Nyt kriterie"},"de":{"criterion_5f0b62f8":"Kriterium","duplicate_31cec192":"Duplizieren","find_outcome_746cc57e":"Lernziel suchen","new_criterion_6054bc7f":"Neues Kriterium"},"en-AU":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find Outcome","new_criterion_6054bc7f":"New Criterion"},"en-AU-x-unimelb":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find Outcome","new_criterion_6054bc7f":"New Criterion"},"en-CA":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find Outcome","new_criterion_6054bc7f":"New Criterion"},"en-GB":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find outcome","new_criterion_6054bc7f":"New criterion"},"en-GB-x-lbs":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find outcome","new_criterion_6054bc7f":"New criterion"},"en-GB-x-ukhe":{"criterion_5f0b62f8":"Criterion","duplicate_31cec192":"Duplicate","find_outcome_746cc57e":"Find outcome","new_criterion_6054bc7f":"New criterion"},"es":{"criterion_5f0b62f8":"Criterio","duplicate_31cec192":"Duplicado","find_outcome_746cc57e":"Encontrar competencia","new_criterion_6054bc7f":"Nuevo criterio"},"fa":{"criterion_5f0b62f8":"معیار","duplicate_31cec192":"تکرار کردن","find_outcome_746cc57e":"یافتن نتیجه","new_criterion_6054bc7f":"معیار جدید"},"fi":{"criterion_5f0b62f8":"Kriteeri","duplicate_31cec192":"Kopioi","find_outcome_746cc57e":"Löydä tulos","new_criterion_6054bc7f":"Uusi kriteeri"},"fr":{"criterion_5f0b62f8":"Critère","duplicate_31cec192":"Dupliquer","find_outcome_746cc57e":"Chercher un résultat","new_criterion_6054bc7f":"Nouveau critère"},"fr-CA":{"criterion_5f0b62f8":"Critère","duplicate_31cec192":"Dupliquer","find_outcome_746cc57e":"Chercher un acquis","new_criterion_6054bc7f":"Nouveau critère"},"he":{"criterion_5f0b62f8":"קריוטריון","duplicate_31cec192":"כפול","find_outcome_746cc57e":"מציאת תוצאות למידה"},"ht":{"criterion_5f0b62f8":"Kritè","duplicate_31cec192":"kopi","find_outcome_746cc57e":"Jwenn Rezilta","new_criterion_6054bc7f":"Nouvo Kritè"},"hu":{"criterion_5f0b62f8":"Kritérium","find_outcome_746cc57e":"Tanulási eredmény keresése","new_criterion_6054bc7f":"Új kritérium"},"is":{"criterion_5f0b62f8":"Viðmiðun","duplicate_31cec192":"Tvítaka","find_outcome_746cc57e":"Finna niðurstöðu","new_criterion_6054bc7f":"Nýr flokkur"},"it":{"criterion_5f0b62f8":"Criterio","duplicate_31cec192":"Duplica","find_outcome_746cc57e":"Trova esito","new_criterion_6054bc7f":"Nuovo criterio"},"ja":{"criterion_5f0b62f8":"基準","duplicate_31cec192":"重複","find_outcome_746cc57e":"成果の検索","new_criterion_6054bc7f":"新しい基準"},"mi":{"criterion_5f0b62f8":"Paearu","duplicate_31cec192":"Tārua","find_outcome_746cc57e":"Kimihia Putanga","new_criterion_6054bc7f":"Tohu Hou"},"nb":{"criterion_5f0b62f8":"Kriterier","duplicate_31cec192":"Dupliser","find_outcome_746cc57e":"Finn læringsmål","new_criterion_6054bc7f":"Nytt kriterie"},"nb-x-k12":{"criterion_5f0b62f8":"Kriterier","duplicate_31cec192":"Dupliser","find_outcome_746cc57e":"Finn mål","new_criterion_6054bc7f":"Nytt kriterium"},"nl":{"criterion_5f0b62f8":"Criterium","duplicate_31cec192":"Dupliceren","find_outcome_746cc57e":"Leerdoel zoeken","new_criterion_6054bc7f":"Nieuw criterium"},"nn":{"criterion_5f0b62f8":"Kriterium","duplicate_31cec192":"Dupliser","find_outcome_746cc57e":"Finn læringsmål","new_criterion_6054bc7f":"Nytt kriterium"},"pl":{"criterion_5f0b62f8":"Kryterium","duplicate_31cec192":"Duplikuj","find_outcome_746cc57e":"Wyszukaj wynik","new_criterion_6054bc7f":"Nowe kryterium"},"pt":{"criterion_5f0b62f8":"Critério","duplicate_31cec192":"Duplicado","find_outcome_746cc57e":"Localizar resultado","new_criterion_6054bc7f":"Novo critério"},"pt-BR":{"criterion_5f0b62f8":"Critério","duplicate_31cec192":"Duplicar","find_outcome_746cc57e":"Localizar objetivo","new_criterion_6054bc7f":"Novo critério"},"ru":{"criterion_5f0b62f8":"Критерий","duplicate_31cec192":"Дубликат","find_outcome_746cc57e":"Найти результат","new_criterion_6054bc7f":"Новый критерий"},"sl":{"criterion_5f0b62f8":"Merilo","duplicate_31cec192":"Podvoji","find_outcome_746cc57e":"Najdi izid","new_criterion_6054bc7f":"Novo merilo"},"sv":{"criterion_5f0b62f8":"Kriterium","duplicate_31cec192":"Duplicera","find_outcome_746cc57e":"Hitta lärandemål","new_criterion_6054bc7f":"Nytt kriterium"},"sv-x-k12":{"criterion_5f0b62f8":"Kriterium","duplicate_31cec192":"Duplicera","find_outcome_746cc57e":"Hitta Lärandemål","new_criterion_6054bc7f":"Nytt kriterium"},"tr":{"criterion_5f0b62f8":"Kriter","duplicate_31cec192":"Çoğalt","find_outcome_746cc57e":"Öğrenme Çıktısı Bul"},"uk":{"criterion_5f0b62f8":"Критерій","duplicate_31cec192":"Дублювати","find_outcome_746cc57e":"Знайти результат","new_criterion_6054bc7f":"Новий Критерій"},"zh-Hans":{"criterion_5f0b62f8":"标准","duplicate_31cec192":"复制、重复","find_outcome_746cc57e":"查找评分标准","new_criterion_6054bc7f":"新标准"},"zh-Hant":{"criterion_5f0b62f8":"標準","duplicate_31cec192":"重覆","find_outcome_746cc57e":"尋找成果","new_criterion_6054bc7f":"新標準"}}'))
i("jQeR")
i("0sPK")
var p=u["default"].scoped("RubricAddCriterionPopover")
var m=i("ouhR")
var g=i.n(m)
var f=Object(r["a"])(_["a"].Separator,{})
class h extends a.a.Component{render(){const e=this.props,t=e.rubric,i=e.duplicateFunction
const n=t.find(".criterion:not(.blank)").map((function(e){const t=g()(this)
const i=t.getTemplateData({textValues:["description"]})
return{index:e,description:i.description}})).toArray()
return Object(r["a"])("span",{},void 0,Object(r["a"])(_["a"],{placement:"bottom",trigger:Object(r["a"])("a",{className:"icon-plus",href:"#"},void 0,p.t("Criterion"))},void 0,Object(r["a"])(_["a"].Item,{id:"add_criterion_button",onClick:()=>g()("#add_criterion_link").trigger("click")},void 0,Object(r["a"])(d["a"],{size:"small",weight:"bold"},void 0,p.t("New Criterion"))),f,Object(r["a"])(_["a"].Group,{id:"criterion_duplicate_menu",label:p.t("Duplicate")},void 0,n.map(e=>Object(r["a"])(_["a"].Item,{onClick:()=>i(t,e.index)},e.index,Object(r["a"])("div",{className:"ellipsis popover_menu_width"},void 0,e.description))))),Object(r["a"])("a",{href:"#",id:"add_learning_outcome_link",className:"icon-search find_outcome_link outcome"},void 0,p.t("Find Outcome")),Object(r["a"])("a",{href:"#",id:"add_criterion_link",className:"hidden icon-plus add_criterion_link"},void 0,p.t("New Criterion")))}}var b=h
var v=i("LvDl")
var y=i.n(v)
Object(l["a"])(JSON.parse('{"ar":{"account_rubrics_40c190a8":"معايير تقييم الحساب","learning_mastery_5fc34276":"إتقان التعلم"},"cy":{"account_rubrics_40c190a8":"Cyfarwyddyd Sgorio’r Cyfrif","learning_mastery_5fc34276":"Meistroli Dysgu"},"da":{"account_rubrics_40c190a8":"Konto rubrikker","learning_mastery_5fc34276":"Opfyldelse af læringsmål"},"da-x-k12":{"account_rubrics_40c190a8":"Vurderingskriterier for konto","learning_mastery_5fc34276":"Opfyldelse af læringsmål"},"de":{"account_rubrics_40c190a8":"Konto-Bewertungsschema","learning_mastery_5fc34276":"Lernleistungsziel"},"el":{"account_rubrics_40c190a8":"Ρουμπρίκες Λογαριασμού","learning_mastery_5fc34276":"Εκμάθηση σε Επίπεδο Επιδεξιότητας"},"en-AU":{"account_rubrics_40c190a8":"Account Rubrics","learning_mastery_5fc34276":"Learning Mastery"},"en-AU-x-unimelb":{"account_rubrics_40c190a8":"Account Rubrics","learning_mastery_5fc34276":"Learning Mastery"},"en-CA":{"account_rubrics_40c190a8":"Account Rubrics","learning_mastery_5fc34276":"Learning Mastery"},"en-GB":{"account_rubrics_40c190a8":"Account rubrics","learning_mastery_5fc34276":"Learning mastery"},"en-GB-x-lbs":{"account_rubrics_40c190a8":"Account rubrics","learning_mastery_5fc34276":"Learning Mastery"},"en-GB-x-ukhe":{"account_rubrics_40c190a8":"Account rubrics","learning_mastery_5fc34276":"Learning mastery"},"es":{"account_rubrics_40c190a8":"Rúbricas de la cuenta","learning_mastery_5fc34276":"Dominio del aprendizaje"},"fa":{"account_rubrics_40c190a8":"دستورالعمل های ارزیابی حساب","learning_mastery_5fc34276":"تسلط یادگیری"},"fi":{"account_rubrics_40c190a8":"Tilin rubriikit","learning_mastery_5fc34276":"Oppimisen hallinta"},"fr":{"account_rubrics_40c190a8":"À propos des barêmes","learning_mastery_5fc34276":"Maîtrise de l’apprentissage"},"fr-CA":{"account_rubrics_40c190a8":"À propos des rubriques","learning_mastery_5fc34276":"Maîtrise de l’apprentissage"},"he":{"account_rubrics_40c190a8":"רובריקות חשבון","learning_mastery_5fc34276":"לימוד להתמחות"},"ht":{"account_rubrics_40c190a8":"Ribrik Kont","learning_mastery_5fc34276":"Metriz Aprantisaj"},"hu":{"account_rubrics_40c190a8":"Fiókszintű értékelőtáblák","learning_mastery_5fc34276":"Tanulási jártassági szint"},"hy":{"account_rubrics_40c190a8":"Հաշվի ռուբրիկները"},"is":{"account_rubrics_40c190a8":"Matsviðmið reiknings","learning_mastery_5fc34276":"Tileinkun náms"},"it":{"account_rubrics_40c190a8":"Rubriche account","learning_mastery_5fc34276":"Livello di padronanza delle competenze"},"ja":{"account_rubrics_40c190a8":"アカウントの注釈","learning_mastery_5fc34276":"学習の達成度"},"ko":{"account_rubrics_40c190a8":"계정 루브릭"},"mi":{"account_rubrics_40c190a8":"Rubrics pūkete","learning_mastery_5fc34276":"Mātatau Ako"},"nb":{"account_rubrics_40c190a8":"Kontovurderingsveiledninger","learning_mastery_5fc34276":"Læringsmestring"},"nb-x-k12":{"account_rubrics_40c190a8":"Kontoens vurderingskriterier","learning_mastery_5fc34276":"Læringsmestring"},"nl":{"account_rubrics_40c190a8":"Rubrieken op account","learning_mastery_5fc34276":"Vakbekwaamheid leren"},"nn":{"account_rubrics_40c190a8":"Vurderingsskjema for konto","learning_mastery_5fc34276":"Meistringsbasert læring"},"pl":{"account_rubrics_40c190a8":"Kryteria ocen konta","learning_mastery_5fc34276":"Nauka poziomu biegłości"},"pt":{"account_rubrics_40c190a8":"Protocolos de conta","learning_mastery_5fc34276":"Domínio de aprendizagem"},"pt-BR":{"account_rubrics_40c190a8":"Rubricas da conta","learning_mastery_5fc34276":"Domínio de Aprendizagem"},"ru":{"account_rubrics_40c190a8":"Рубрики учетной записи","learning_mastery_5fc34276":"Усвоение обучения"},"sl":{"account_rubrics_40c190a8":"Ocenjevalni vodniki računa","learning_mastery_5fc34276":"Odlično učenje"},"sv":{"account_rubrics_40c190a8":"Matriser på kontot","learning_mastery_5fc34276":"Måluppfyllelse"},"sv-x-k12":{"account_rubrics_40c190a8":"Matriser på kontot","learning_mastery_5fc34276":"Måluppfyllelse"},"tr":{"account_rubrics_40c190a8":"Hesap Değerlendirme Listeleri","learning_mastery_5fc34276":"Öğrenme Yeterliği"},"uk":{"learning_mastery_5fc34276":"Навчальна майстерність"},"zh-Hans":{"account_rubrics_40c190a8":"帐户评分标准说明","learning_mastery_5fc34276":"学习掌握"},"zh-Hant":{"account_rubrics_40c190a8":"帳戶評分標準","learning_mastery_5fc34276":"學習精通水平"}}'))
var k=u["default"].scoped("RubricManagement")
var w=i("6vK/")
var z=i("agq5")
var S=i("Xx/m")
var j=i("we39")
Object(l["a"])(JSON.parse('{"ar":{"account_proficiency_ratings_saved_292d9239":"تم حفظ تصنيفات إجادة الحساب","add_proficiency_rating_d819f6b8":"إضافة تصنيف إجادة","added_new_proficiency_rating_e30cab8a":"تمت إضافة تصنيف إجادة جديد","an_error_occurred_while_loading_account_proficienc_c7d6568b":"حدث خطأ أثناء تحميل تصنيفات إجادة الحساب: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"حدث خطأ أثناء تحميل تصنيفات إجادة الحساب","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"حدث خطأ أثناء حفظ تصنيفات إجادة الحساب","color_a363e1b0":"اللون","customize_learning_mastery_ratings_4ace142a":"تخصيص تصنيفات إجادة التعلم","get_started_b9507525":"بدء العمل","invalid_points_8e929c3f":"نقاط غير صالحة","loading_bde52856":"يتم الآن التحميل...","mastery_7ec348b5":"الإتقان","missing_required_description_99a99ff":"الوصف المطلوب المفقود","negative_points_fda45730":"النقاط السلبية","points_bb475533":"النقاط","points_must_be_less_than_previous_rating_bc627bec":"يجب أن تكون النقاط أقل من التصنيف السابق","proficiency_rating_6346119f":"تصنيف الإجادة","proficiency_rating_deleted_77827473":"تم حذف تصنيف الإجادة","proficiency_ratings_2bbabdcd":"تصنيفات الإجادة","save_learning_mastery_82889d8b":"حفظ إتقان التعلم","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  إعداد طريقة ظهور تصنيفات الإجادة الخاصة بك داخل دفتر درجات إجادة التعلم.\\n\\n                  تعديل عدد التصنيفات ومستوى الإجادة والنقاط والألوان.\\n\\n                  "},"cy":{"account_proficiency_ratings_saved_292d9239":"Sgôr medrusrwydd cyfrif wedi\'i chadw","add_proficiency_rating_d819f6b8":"Ychwanegu sgôr medrusrwydd","added_new_proficiency_rating_e30cab8a":"Wedi ychwanegu sgôr medrusrwydd newydd","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Gwall wrth lwytho sgoriau medrusrwydd cyfrif: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Gwall wrth lwytho sgoriau medrusrwydd cyfrif","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Gwall wrth gadw sgoriau medrusrwydd cyfrif","color_a363e1b0":"Lliw","customize_learning_mastery_ratings_4ace142a":"Addasu Sgoriau Llyfr Meistroli Dysgu","get_started_b9507525":"Dechrau arni","invalid_points_8e929c3f":"Pwyntiau annilys","loading_bde52856":"Wrthi’n llwytho","mastery_7ec348b5":"Meistrolaeth","missing_required_description_99a99ff":"Mae’r disgrifiad gofynnol ar goll","negative_points_fda45730":"Pwyntiau negyddol","points_bb475533":"Pwynt","points_must_be_less_than_previous_rating_bc627bec":"Rhaid i bwyntiau fod yn llai na’r sgôr flaenorol","proficiency_rating_6346119f":"Sgôr Medrusrwydd","proficiency_rating_deleted_77827473":"Sgôr Medrusrwydd wedi cael ei ddileu","proficiency_ratings_2bbabdcd":"Sgôr Medrusrwydd","save_learning_mastery_82889d8b":"Cadw\'r Feistrolaeth a Ddysgwyd","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Gosod sut mae eich Sgorau Medrusrwydd yn ymddangos tu mewn i’r Llyfr Graddau Meistroli Dysgu.\\n\\n                  Addasu nifer y sgorau, lefel meistrolaeth, pwyntiau, a lliwiau.\\n\\n                "},"da":{"account_proficiency_ratings_saved_292d9239":"Kontoens færdighedsbedømmelser gemt","add_proficiency_rating_d819f6b8":"Tilføj færdighedsbedømmelse","added_new_proficiency_rating_e30cab8a":"Tilføjet ny færdighedsbedømmelse","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Der opstod en fejl under indlæsning af kontoens færdighedsbedømmelser: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Der opstod en fejl under indlæsning af kontoens færdighedsbedømmelser","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Der opstod en fejl, da kontoens færdighedsbedømmelser skulle gemmes","color_a363e1b0":"Farve","customize_learning_mastery_ratings_4ace142a":"Tilpas bedømmelse af opfyldelse af læringsmål","get_started_b9507525":"Sådan kommer du i gang","invalid_points_8e929c3f":"Ugyldige point","loading_bde52856":"Indlæser","mastery_7ec348b5":"Beherskelse","missing_required_description_99a99ff":"Mangler påkrævet beskrivelse","negative_points_fda45730":"Negative point","points_bb475533":"Point","points_must_be_less_than_previous_rating_bc627bec":"Point skal være mindre end tidligere bedømmelse","proficiency_rating_6346119f":"Færdighedsvurdering","proficiency_rating_deleted_77827473":"Færdighedsvurdering slettet","proficiency_ratings_2bbabdcd":"Færdighedsvurderinger","save_learning_mastery_82889d8b":"Gem opfyldelse af læringsmål","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Konfigurer, hvordan dine færdighedsbedømmelser vises inden for karakteroversigten for opfyldelse af læringsmål.\\n\\n                  Juster antallet af bedømmelser, opfyldelsesniveau, point og farver.\\n\\n                "},"da-x-k12":{"account_proficiency_ratings_saved_292d9239":"Konto færdighedsbedømmelser gemt","add_proficiency_rating_d819f6b8":"Tilføj færdighedsbedømmelse","added_new_proficiency_rating_e30cab8a":"Tilføjet ny færdighedsbedømmelse","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Der opstod en fejl under indlæsning af kontoens færdighedsbedømmelser: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Der opstod en fejl under indlæsning af kontoens færdighedsbedømmelser","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Der opstod en fejl ved lagring af kontoens færdighedsbedømmelser","color_a363e1b0":"Farve","customize_learning_mastery_ratings_4ace142a":"Tilpas bedømmelse af opfyldelse af læringsmål","get_started_b9507525":"Sådan kommer du i gang","invalid_points_8e929c3f":"Ugyldige point","loading_bde52856":"Indlæser","mastery_7ec348b5":"Beherskelse","missing_required_description_99a99ff":"Mangler påkrævet beskrivelse","negative_points_fda45730":"Negative point","points_bb475533":"Point","points_must_be_less_than_previous_rating_bc627bec":"Point skal være mindre end tidligere bedømmelse","proficiency_rating_6346119f":"Færdighedsbedømmelse","proficiency_rating_deleted_77827473":"Færdighedsvurdering slettet","proficiency_ratings_2bbabdcd":"Færdighedsbedømmelser","save_learning_mastery_82889d8b":"Gem opfyldelse af læringsmål","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Opstil, hvordan dine færdighedsbedømmelser vises inden for Vurderingsoversigten over opfyldelse af læringsmål.\\n\\n                  Juster antallet af bedømmelser, niveau af opfyldelse af læringsmål, point og farver.\\n\\n                  "},"de":{"account_proficiency_ratings_saved_292d9239":"Konto-Kompetenzeinstufungen gespeichert","add_proficiency_rating_d819f6b8":"Leistungsstand hinzufügen","added_new_proficiency_rating_e30cab8a":"Neue Kompetenzeinstufung hinzugefügt","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Fehler beim Laden der Konto-Kompetenzeinstufungen: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Fehler beim Laden der Konto-Kompetenzeinstufungen","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Fehler beim Speichern der Konto-Kompetenzeinstufungen","color_a363e1b0":"Farbe","customize_learning_mastery_ratings_4ace142a":"Anpassen Lernerfolgseinstufungen","get_started_b9507525":"Beginnen","invalid_points_8e929c3f":"Ungültige Punkte","loading_bde52856":"Wird geladen","mastery_7ec348b5":"Leistungsziel","missing_required_description_99a99ff":"Erforderliche Beschreibung fehlt","negative_points_fda45730":"Negative Punkte","points_bb475533":"Punkte","points_must_be_less_than_previous_rating_bc627bec":"Die Punktzahl muss geringer sein als bei der vorherigen Bewertung.","proficiency_rating_6346119f":"Kompetenzeinstufung","proficiency_rating_deleted_77827473":"Kompetenzeinstufung gelöscht","proficiency_ratings_2bbabdcd":"Kompetenzeinstufungen","save_learning_mastery_82889d8b":"Erreichtes Leistungsziel speichern","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                   Legen Sie fest, wie ihre Kompetenzeinstufungen im Notenbuch der Lernleistungsziele erscheinen.\\n\\n                   Passen Sie die Anzahl der Einstufungen, die Lernleistungsebene, die Punkte und die Farben an.\\n\\n                "},"el":{"loading_bde52856":"Φόρτωση","points_bb475533":"Μόρια"},"en-AU":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Colour","customize_learning_mastery_ratings_4ace142a":"Customise Learning Mastery Ratings","get_started_b9507525":"Get Started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency Rating","proficiency_rating_deleted_77827473":"Proficiency Rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save Learning Mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n\\n                  Adjust number of ratings, mastery level, points, and colours.\\n\\n                "},"en-AU-x-unimelb":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Colour","customize_learning_mastery_ratings_4ace142a":"Customise Learning Mastery Ratings","get_started_b9507525":"Get Started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency Rating","proficiency_rating_deleted_77827473":"Proficiency Rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save Learning Mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n\\n                  Adjust number of ratings, mastery level, points, and colours.\\n\\n                "},"en-CA":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Color","customize_learning_mastery_ratings_4ace142a":"Customize Learning Mastery Ratings","get_started_b9507525":"Get Started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency Rating","proficiency_rating_deleted_77827473":"Proficiency Rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save Learning Mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n            Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n            Adjust number of ratings, mastery level, points, and colors.\\n          "},"en-GB":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Colour","customize_learning_mastery_ratings_4ace142a":"Customise learning mastery ratings","get_started_b9507525":"Get started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency rating","proficiency_rating_deleted_77827473":"Proficiency rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save learning mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n\\n                  Adjust number of ratings, mastery level, points, and colors.\\n\\n                "},"en-GB-x-lbs":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Colour","customize_learning_mastery_ratings_4ace142a":"Customise learning mastery ratings","get_started_b9507525":"Get started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency rating","proficiency_rating_deleted_77827473":"Proficiency rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save learning mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n\\n                  Adjust number of ratings, mastery level, points, and colors.\\n\\n                "},"en-GB-x-ukhe":{"account_proficiency_ratings_saved_292d9239":"Account proficiency ratings saved","add_proficiency_rating_d819f6b8":"Add proficiency rating","added_new_proficiency_rating_e30cab8a":"Added new proficiency rating","an_error_occurred_while_loading_account_proficienc_c7d6568b":"An error occurred while loading account proficiency ratings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"An error occurred while loading account proficiency ratings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"An error occurred while saving account proficiency ratings","color_a363e1b0":"Colour","customize_learning_mastery_ratings_4ace142a":"Customise learning mastery ratings","get_started_b9507525":"Get started","invalid_points_8e929c3f":"Invalid points","loading_bde52856":"Loading","mastery_7ec348b5":"Mastery","missing_required_description_99a99ff":"Missing required description","negative_points_fda45730":"Negative points","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Points must be less than previous rating","proficiency_rating_6346119f":"Proficiency rating","proficiency_rating_deleted_77827473":"Proficiency rating deleted","proficiency_ratings_2bbabdcd":"Proficiency ratings","save_learning_mastery_82889d8b":"Save learning mastery","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n\\n                  Adjust number of ratings, mastery level, points, and colors.\\n\\n                "},"es":{"account_proficiency_ratings_saved_292d9239":"Calificaciones de competencia de la cuenta guardadas","add_proficiency_rating_d819f6b8":"Agregar clasificación de competencia","added_new_proficiency_rating_e30cab8a":"Se agregó nueva calificación de aptitud","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Ocurrió un error mientras se cargaban las calificaciones de competencia de la cuenta: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Ocurrió un error mientras se cargaban las calificaciones de competencia de la cuenta","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Ocurrió un error mientras se guardaban las calificaciones de competencia de la cuenta","color_a363e1b0":"Color","customize_learning_mastery_ratings_4ace142a":"Personalizar calificaciones del dominio del aprendizaje","get_started_b9507525":"Comenzar","invalid_points_8e929c3f":"Puntos inválidos","loading_bde52856":"Cargando","mastery_7ec348b5":"Dominio","missing_required_description_99a99ff":"Falta la descripción requerida","negative_points_fda45730":"Puntos negativos","points_bb475533":"Puntos","points_must_be_less_than_previous_rating_bc627bec":"Los puntos deben ser menores que la calificación anterior","proficiency_rating_6346119f":"Calificación de competencia","proficiency_rating_deleted_77827473":"Calificación de aptitud eliminada","proficiency_ratings_2bbabdcd":"Calificaciones de competencia","save_learning_mastery_82889d8b":"Guardar dominio del aprendizaje","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n            Configure cómo aparecerán las Valoraciones de competencia dentro del Libro de calificaciones del dominio del aprendizaje.\\n            Ajuste la cantidad de valoraciones, nivel de dominio, puntos y colores.\\n          "},"fa":{"color_a363e1b0":"رنگ","get_started_b9507525":"شروع به کار","loading_bde52856":"در حال بارگذاری","mastery_7ec348b5":"تسلط","points_bb475533":"امتیازها"},"fi":{"account_proficiency_ratings_saved_292d9239":"Tilin pätevyyden arvostelu tallennettu","add_proficiency_rating_d819f6b8":"Lisää pätevyyden arvostelu","added_new_proficiency_rating_e30cab8a":"Lisättiin uusi pätevyyden arvostelu","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Pätevyyden arvosteluita ladattaessa ilmeni virhe: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Pätevyyden arvosteluita ladattaessa ilmeni virhe: ","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Pätevyyden arvosteluita tallennettaessa ilmeni virhe","color_a363e1b0":"Väri","customize_learning_mastery_ratings_4ace142a":"Mukautetut oppimisen hallinnan arvostelut","get_started_b9507525":"Aloita","invalid_points_8e929c3f":"Kelpaamattomia pisteitä","loading_bde52856":"Ladataan","mastery_7ec348b5":"Hallinta","missing_required_description_99a99ff":"Pakollinen kuvaus puuttuu","negative_points_fda45730":"Negatiiviset pisteet","points_bb475533":"Pistettä","points_must_be_less_than_previous_rating_bc627bec":"Pisteiden täytyy olla vähemmän kuin edellisessä arvostelussa","proficiency_rating_6346119f":"Pätevyyden arvostelut","proficiency_rating_deleted_77827473":"Poistettiin pätevyyden arvostelu","proficiency_ratings_2bbabdcd":"Pätevyyden arvostelut","save_learning_mastery_82889d8b":"Tallenna oppimisen hallinta","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n            Määritä, kuinka pätevyyden arvostelut näkyvät oppimisen hallinnan arvosanakirjan sisällä.\\n            Muokkaa arvosteuiden määrää, hallinnan tasoa, pisteitä ja värejä.\\n          "},"fr":{"account_proficiency_ratings_saved_292d9239":"Sauvegarde des notations de compétence du compte","add_proficiency_rating_d819f6b8":"Ajouter une note de compétence","added_new_proficiency_rating_e30cab8a":"Ajout d\'une nouvelle notation de compétence","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Une erreur s\'est produite pendant le chargement des notations de compétence du compte : %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Une erreur s\'est produite pendant le chargement des notations de compétence du compte","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Une erreur s\'est produite pendant l\'enregistrement des notations de compétence du compte","color_a363e1b0":"Couleur","customize_learning_mastery_ratings_4ace142a":"Personnaliser les notations de maîtrise de l\'apprentissage","get_started_b9507525":"Commencer","invalid_points_8e929c3f":"Points non valides","loading_bde52856":"En cours de chargement","mastery_7ec348b5":"Maîtrise","missing_required_description_99a99ff":"Description requise manquante","negative_points_fda45730":"Points négatifs","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Les points doivent être inférieurs à la note précédente.","proficiency_rating_6346119f":"Notation de compétence","proficiency_rating_deleted_77827473":"Notation de compétence supprimée","proficiency_ratings_2bbabdcd":"Notations de compétence","save_learning_mastery_82889d8b":"Enregistrer la maîtrise de l\'apprentissage","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Définissez la façon dont vos notations de compétence apparaissent dans le relevé de notes pour la maîtrise de l’apprentissage.\\n\\n                  Ajuster le nombre de notations, le niveau de maîtrise, les points et les couleurs.\\n\\n                "},"fr-CA":{"account_proficiency_ratings_saved_292d9239":"Notations de compétence du compte enregistrées","add_proficiency_rating_d819f6b8":"Ajouter un niveau de compétence","added_new_proficiency_rating_e30cab8a":"Nouvelles notations de compétence ajoutées","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Une erreur est survenue lors du chargement des notations de compétence de compte : %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Une erreur est survenue lors du chargement des notations de compétence de compte","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Une erreur est survenue lors de l’enregistrement des notations de compétence de compte","color_a363e1b0":"Couleur","customize_learning_mastery_ratings_4ace142a":"Personnaliser les notations de maîtrise de l’apprentissage","get_started_b9507525":"Commencer","invalid_points_8e929c3f":"Points non valides","loading_bde52856":"Chargement","mastery_7ec348b5":"Maîtrise","missing_required_description_99a99ff":"Description obligatoire manquante","negative_points_fda45730":"Points négatifs","points_bb475533":"Points","points_must_be_less_than_previous_rating_bc627bec":"Les points doivent être inférieurs à la note précédente.","proficiency_rating_6346119f":"Notation de compétence","proficiency_rating_deleted_77827473":"Notation de compétence supprimée","proficiency_ratings_2bbabdcd":"Notations de compétence","save_learning_mastery_82889d8b":"Sauvegarder maîtrise de l’apprentissage","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Définissez comment vos notes de compétence apparaissent dans le Carnet de notes de la maîtrise de l’apprentissage.\\n\\n                  Ajustez le nombre de notes, le niveau de maîtrise, les points et les couleurs.\\n\\n                "},"he":{"account_proficiency_ratings_saved_292d9239":"דרוג מקצועיות החשבון נשמרה","add_proficiency_rating_d819f6b8":"הוספת דירוג מומחיות","added_new_proficiency_rating_e30cab8a":"נתווסף דירוג מומחיות חדש","color_a363e1b0":"צבע","get_started_b9507525":"ניתן להתחיל","loading_bde52856":"טוען","points_bb475533":"נקודות"},"ht":{"account_proficiency_ratings_saved_292d9239":"Nòt konpetans kont anrejistre yo","add_proficiency_rating_d819f6b8":"Ajoute evalyasyon konesans","added_new_proficiency_rating_e30cab8a":"ouvo nòt konpetans ajoute","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Gen yon erè ki fèt pandan chajman nòt konpetans kont lan: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Gen yon erè ki fèt pandan chajman nòt konpetans kont lan","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Gen yon erè ki fèt pandan anrejistreman nòt konpetans kont lan","color_a363e1b0":"Koulè","customize_learning_mastery_ratings_4ace142a":"Pèsonalize Evalyasyon Metriz Aprantisaj","get_started_b9507525":"Kòmanse","invalid_points_8e929c3f":"Pwen envalid","loading_bde52856":"Chajman","mastery_7ec348b5":"Metriz","missing_required_description_99a99ff":"Deskripsyon nesesè manke","negative_points_fda45730":"Pwen negatif","points_bb475533":"Pwen","points_must_be_less_than_previous_rating_bc627bec":"Pwen yo dwe enferyè a nòt anvan an","proficiency_rating_6346119f":"Evalyasyon Konpetans","proficiency_rating_deleted_77827473":"Evalyasyon Konpetans efase","proficiency_ratings_2bbabdcd":"Evalyasyon konpetans","save_learning_mastery_82889d8b":"Sovgade Metriz Aprantisaj","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Defini kijan Nivo Konpetans ou parèt nan Bilten Metriz Aprantisaj la.\\n\\n                  Ajiste kantite evalyasyon yo, nivo metriz la, pwen ak koulè.\\n\\n                "},"hu":{"color_a363e1b0":"Szín","get_started_b9507525":"Vágjon bele!","loading_bde52856":"Töltődik","points_bb475533":"Pont"},"hy":{"loading_bde52856":"Բեռնում է","points_bb475533":"Միավորներ"},"is":{"account_proficiency_ratings_saved_292d9239":"Hæfniseinkunnir reiknings vistaðar","add_proficiency_rating_d819f6b8":"Bæta við hæfnieinkunn","added_new_proficiency_rating_e30cab8a":"Nýrri hæfnieinkunn bætt við","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Villa kom upp við að hlaða inn hæfniseinkunnir reiknings: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Villa kom upp við að hlaða inn hæfniseinkunnir reiknings","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Villa kom upp við að vista hæfniseinkunnir reiknings","color_a363e1b0":"Litur","customize_learning_mastery_ratings_4ace142a":"Sérsníða lærdómsleiknieinkunnir","get_started_b9507525":"Byrja","invalid_points_8e929c3f":"Ógildir punktar","loading_bde52856":"Sæki","mastery_7ec348b5":"Leikni","missing_required_description_99a99ff":"Nauðsynlega lýsingu vantar","negative_points_fda45730":"Neikvæðir punktar","points_bb475533":"Punktar","points_must_be_less_than_previous_rating_bc627bec":"Punktar þurfa að vera færri en fyrri einkunn","proficiency_rating_6346119f":"Hæfniseinkunn","proficiency_rating_deleted_77827473":"Hæfniseinkunn eytt","proficiency_ratings_2bbabdcd":"Hæfniseinkunnir","save_learning_mastery_82889d8b":"Vista lærdómsleikni","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Stilltu inn hvernig hæfniseinkunn þín birtist í lærdómsleiknieinkunnabókinni.\\n\\n                  Breyttu fjölda einkunna, leiknistigum, punktum og litum.\\n\\n                "},"it":{"account_proficiency_ratings_saved_292d9239":"Valutazioni livello di preparazione account salvate","add_proficiency_rating_d819f6b8":"Aggiungi valutazione di competenza","added_new_proficiency_rating_e30cab8a":"Aggiunta nuova valutazione livello di preparazione","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Si è verificato un errore durante il caricamento delle valutazioni del livello di preparazione dell\'account: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Si è verificato un errore durante il caricamento delle valutazioni del livello di preparazione dell\'account","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Si è verificato un errore durante il salvataggio delle valutazioni del livello di preparazione dell\'account","color_a363e1b0":"Colore","customize_learning_mastery_ratings_4ace142a":"Personalizza valutazioni livello di padronanza apprendimento","get_started_b9507525":"Inizia","invalid_points_8e929c3f":"Punti non validi","loading_bde52856":"Caricamento in corso","mastery_7ec348b5":"Padronanza","missing_required_description_99a99ff":"Descrizione richiesta mancante","negative_points_fda45730":"Punti negativi","points_bb475533":"Punti","points_must_be_less_than_previous_rating_bc627bec":"I punti devono essere inferiori della valutazione precedente","proficiency_rating_6346119f":"Valutazione di competenza","proficiency_rating_deleted_77827473":"Valutazione del livello di preparazione eliminata","proficiency_ratings_2bbabdcd":"Valutazioni di competenza","save_learning_mastery_82889d8b":"Salva padronanza delle competenze","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Impostare come appare Valutazioni competenze all’interno del Registro dei voti del livello di padronanza delle competenze.\\n\\n                  Regolare il numero di valutazioni, il livello di padronanza delle competenze, i punti e i colori.\\n\\n                "},"ja":{"account_proficiency_ratings_saved_292d9239":"アカウント熟練度が保存されました","add_proficiency_rating_d819f6b8":"熟達度を追加する","added_new_proficiency_rating_e30cab8a":"新しい熟達度評価が追加されました","an_error_occurred_while_loading_account_proficienc_c7d6568b":"アカウント熟練度評価を読み込み中にエラーが起こりました：%{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"アカウント熟練度評価を読み込み中にエラーが起こりました","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"アカウント熟練度評価を保存中にエラーが発生しました。","color_a363e1b0":"カラー","customize_learning_mastery_ratings_4ace142a":"学習熟達評価をカスタマイズする","get_started_b9507525":"開始する","invalid_points_8e929c3f":"無効なポイント","loading_bde52856":"読み込み中","mastery_7ec348b5":"熟達スコア","missing_required_description_99a99ff":"必須の説明が未記入です：","negative_points_fda45730":"マイナスのポイント","points_bb475533":"点数","points_must_be_less_than_previous_rating_bc627bec":"ポイントは以前の評価よりも小さくなければなりません","proficiency_rating_6346119f":"熟達度評価","proficiency_rating_deleted_77827473":"熟達度評価が削除されました","proficiency_ratings_2bbabdcd":"熟達度評価","save_learning_mastery_82889d8b":"学習熟達度を保存","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  あなたの熟達評価の学習熟達グレードブック内での表示方法を設定してください。\\n\\n                  評価数、熟達度、ポイントと色を調整してください。\\n\\n                "},"ko":{"points_bb475533":"점"},"mi":{"account_proficiency_ratings_saved_292d9239":"Kua tohua ngā tohu matatau pūkete","add_proficiency_rating_d819f6b8":"Tāpirihia te tatauranga mātatau","added_new_proficiency_rating_e30cab8a":"Kua tāpiritia te tohu matatau hou","an_error_occurred_while_loading_account_proficienc_c7d6568b":"He hapa i puta i te wā e uta ana ngā pūkete matatau tohu: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"He hapa i puta i te wā e uta ana ngā pūkete matatau tohu","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"He hapa i puta i te wā e tiaki ana ngā pūkete matatau tohu","color_a363e1b0":"Tae","customize_learning_mastery_ratings_4ace142a":"Whakaritea ngā Akoranga Matua Whakatau","get_started_b9507525":"Whakareri timata","invalid_points_8e929c3f":"Ngā kaute muhu","loading_bde52856":"E tukuake ana","mastery_7ec348b5":"Hingana","missing_required_description_99a99ff":"Kei te ngaro te whakāhuatanga e hiahiatia ana","negative_points_fda45730":"Ngā take kino","points_bb475533":"Ngā koinga","points_must_be_less_than_previous_rating_bc627bec":"Me iti ake ngā kaute i te whakatau o mua","proficiency_rating_6346119f":"Mātatau Whakatauranga","proficiency_rating_deleted_77827473":"Kua mukua te Matatau Whakatauranga","proficiency_ratings_2bbabdcd":"Ngā Mātatau whakatauranga","save_learning_mastery_82889d8b":"Tiaki Akoranga Manahia","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Whakatau me pehea ō Tohu Mātatau e puta ai i roto i te Mātatau Ako Pukakōeke.\\n\\n                  Whakatika ngā tātai tohu, mātatau ako taumata, ngā koinga, me ngā tae.\\n\\n                "},"nb":{"account_proficiency_ratings_saved_292d9239":"Konto ferdighetsvurdering lagret","add_proficiency_rating_d819f6b8":"Legg til kompetansevurdering","added_new_proficiency_rating_e30cab8a":"Lagt til ny ferdighetsvurdering","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Det oppsto et avvik under lasting av konto ferdighetsvurderinger: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Det oppsto et avvik under lasting av konto ferdighetvurderinger","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Det oppsto et avvik under lagring av konto ferdighetsvurderinger","color_a363e1b0":"Farge","customize_learning_mastery_ratings_4ace142a":"Tilpass læringsmestring karakterer","get_started_b9507525":"Kom i gang","invalid_points_8e929c3f":"Ugyldig poeng","loading_bde52856":"Laster","mastery_7ec348b5":"Mestring","missing_required_description_99a99ff":"Obligatorisk beskrivelse mangler","negative_points_fda45730":"Negative poeng","points_bb475533":"Poeng","points_must_be_less_than_previous_rating_bc627bec":"Poengene må være færre enn ved tidligere vurdering","proficiency_rating_6346119f":"Ferdighetsvurdering","proficiency_rating_deleted_77827473":"Ferdighetsgradering slettet","proficiency_ratings_2bbabdcd":"Ferdighetsvurderinger","save_learning_mastery_82889d8b":"Lagre læringsmestring","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Sett opp hvordan ferdighetsrangeringene skal vises inni læringsmestring karakteroversikt.\\n\\n                  Juster antall rangeringer, ekspertisenivå, poeng og farger.\\n\\n                "},"nb-x-k12":{"account_proficiency_ratings_saved_292d9239":"Kontoferdighetsgrader lagret","add_proficiency_rating_d819f6b8":"Legg til ferdighetsvurdering","added_new_proficiency_rating_e30cab8a":"La til ferdighetsvurdering","an_error_occurred_while_loading_account_proficienc_c7d6568b":"En feil oppstod under nedlasting av kontoferdighetsvurderinger: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"En feil oppstod under nedlasting av kontoferdighetsvurderinger","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"En feil oppstod under lagring av kontoferdighetsvurderinger","color_a363e1b0":"Farge","customize_learning_mastery_ratings_4ace142a":"Tilpass måloppnåelses-rating","get_started_b9507525":"Kom i gang","invalid_points_8e929c3f":"Ugyldige poeng","loading_bde52856":"Laster","mastery_7ec348b5":"Mestring","missing_required_description_99a99ff":"Manglende obligatorisk beskrivelse","negative_points_fda45730":"Negative poeng","points_bb475533":"Poeng","points_must_be_less_than_previous_rating_bc627bec":"Poeng må være mindre enn tidligere vurdering","proficiency_rating_6346119f":"Ferdighetsvurdering","proficiency_rating_deleted_77827473":"Ferdighetsgradering slettet","proficiency_ratings_2bbabdcd":"Ferdighetsvurderinger","save_learning_mastery_82889d8b":"Lagre Læringsmestring","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Still inn hvordan din ferdighetsvurderinger skal se ut i læringsmestring vurderingsoversikt.\\n\\n                  Tilpass antall karakterer, ekspertise, poeng og farger\\n\\n                "},"nl":{"account_proficiency_ratings_saved_292d9239":"Accountvaardigheidsbeoordelingen opgeslagen","add_proficiency_rating_d819f6b8":"Vaardigheidsbeoordeling toevoegen","added_new_proficiency_rating_e30cab8a":"Nieuwe vaardigheidsbeoordeling toegevoegd","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Er is een fout opgetreden tijdens het laden van accountvaardigheidsbeoordelingen: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Er is een fout opgetreden tijdens het laden van accountvaardigheidsbeoordelingen","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Er is een fout opgetreden tijdens het opslaan van accountvaardigheidsbeoordelingen","color_a363e1b0":"Kleur","customize_learning_mastery_ratings_4ace142a":"Beheersingsscores aanpassen","get_started_b9507525":"Aan de slag","invalid_points_8e929c3f":"Ongeldige punten","loading_bde52856":"Bezig met laden...","mastery_7ec348b5":"Vakbeheersing","missing_required_description_99a99ff":"Vereiste beschrijving ontbreekt","negative_points_fda45730":"Negatieve punten","points_bb475533":"Punten","points_must_be_less_than_previous_rating_bc627bec":"Punten moeten lager zijn dan de vorige beoordeling","proficiency_rating_6346119f":"Vaardigheidsbeoordeling","proficiency_rating_deleted_77827473":"Vaardigheidsbeoordeling verwijderd","proficiency_ratings_2bbabdcd":"Vaardigheidsbeoordelingen","save_learning_mastery_82889d8b":"Vakbeheersing opslaan","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Stel in hoe je vaardigheidsbeoordelingen worden weergegeven in de Cijferlijst vakbeheersing.\\n\\n                  Wijzig het aantal beoordelingen, het vaardigheidsniveau, punten en kleuren.\\n\\n                "},"nn":{"account_proficiency_ratings_saved_292d9239":"Ferdigheitsnivå knytta til konto lagra","add_proficiency_rating_d819f6b8":"Legg til ferdigheitsnivå","added_new_proficiency_rating_e30cab8a":"Nytt ferdigheitsnivå er lagt til","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Det oppstod ein feil under lasting av ferdigheitsnivå for konto: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Det oppstod ein feil under lasting av ferdighetsnivå for konto.","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Det oppstod ein feil under lagringa av ferdigheitsnivå for konto","color_a363e1b0":"Farge","customize_learning_mastery_ratings_4ace142a":"Eigendefiner meistringsnivå","get_started_b9507525":"Kom i gang","invalid_points_8e929c3f":"Ugyldige poeng","loading_bde52856":"Lastar","mastery_7ec348b5":"Maistringsnivå","missing_required_description_99a99ff":"Manglar obligatorisk skildring","negative_points_fda45730":"Negative poeng","points_bb475533":"Poeng","points_must_be_less_than_previous_rating_bc627bec":"Poeng må vere lågare enn førre nivå","proficiency_rating_6346119f":"Ferdigheitsnivå","proficiency_rating_deleted_77827473":"Ferdigheitsnivå sletta","proficiency_ratings_2bbabdcd":"Ferdigheitsnivå","save_learning_mastery_82889d8b":"Lagre meistringsbasert læring","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\nSett opp korleis ferdigheitsnivåa skal framstå i vurderingsoversikta for meistringsbasert læring.\\nJuster tal på rangering, meistringsnivå, poeng og fargar."},"pl":{"account_proficiency_ratings_saved_292d9239":"Zapisano oceny kompetencji na koncie","add_proficiency_rating_d819f6b8":"Dodaj punktację biegłości","added_new_proficiency_rating_e30cab8a":"Dodano nową ocenę kompetencji","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Wystąpił błąd podczas wczytywania ocen kompetencji na koncie: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Wystąpił błąd podczas wczytywania ocen kompetencji na koncie","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Wystąpił błąd podczas zapisywani ocen kompetencji na koncie","color_a363e1b0":"Kolor","customize_learning_mastery_ratings_4ace142a":"Dostosuj oceny opanowania materiału","get_started_b9507525":"Zaczynamy","invalid_points_8e929c3f":"Nieprawidłowe punkty","loading_bde52856":"Trwa ładowanie","mastery_7ec348b5":"Opanowanie materiału","missing_required_description_99a99ff":"Brak wymaganego opisu","negative_points_fda45730":"Punkty ujemne","points_bb475533":"Punkty","points_must_be_less_than_previous_rating_bc627bec":"Liczba punktów musi być mniejsza niż poprzednio","proficiency_rating_6346119f":"Ocena biegłości","proficiency_rating_deleted_77827473":"Usunięto ocenę kompetencji","proficiency_ratings_2bbabdcd":"Oceny biegłości","save_learning_mastery_82889d8b":"Zapisz poziom biegłości","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Skonfiguruj ocenę stopnia opanowania materiału w dzienniku ocen.\\n\\n                  Dostosuj liczbę ocen, poziom opanowania materiału, punkty i kolory.\\n\\n                "},"pt":{"account_proficiency_ratings_saved_292d9239":"Classificações de proficiência da conta guardadas","add_proficiency_rating_d819f6b8":"Adicionar avaliação de proficiência","added_new_proficiency_rating_e30cab8a":"Novo classificação de proficiência adicionada","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Ocorreu um erro ao carregar as classificações de proficiência da conta: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Ocorreu um erro ao carregar classificações de proficiência de conta","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Ocorreu um erro ao guardar classificações de proficiência da conta","color_a363e1b0":"Cor","customize_learning_mastery_ratings_4ace142a":"Personalizar classificações de domínio de aprendizado","get_started_b9507525":"Começar","invalid_points_8e929c3f":"Pontos inválidos","loading_bde52856":"Carregando","mastery_7ec348b5":"Domínio","missing_required_description_99a99ff":"Descrição requerida ausente","negative_points_fda45730":"Pontos negativos","points_bb475533":"Pontos","points_must_be_less_than_previous_rating_bc627bec":"Pontos devem ser menores que a classificação anterior","proficiency_rating_6346119f":"Avaliação de proficiência","proficiency_rating_deleted_77827473":"Classificação de proficiência eliminada","proficiency_ratings_2bbabdcd":"Avaliações de proficiência","save_learning_mastery_82889d8b":"Salvar o domínio de aprendizagem","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Defina como suas Classificações de Proficiência aparecem dentro da Lista de Notas de Maestria em Aprendizagem.\\n\\n                  Ajuste o número de classificações, nível de domínio, pontos e cores.\\n\\n                "},"pt-BR":{"account_proficiency_ratings_saved_292d9239":"Avaliações de proficiência da conta salvas","add_proficiency_rating_d819f6b8":"Adicionar avaliação da proficiência","added_new_proficiency_rating_e30cab8a":"Nova avaliação da proficiência adicionada","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Ocorreu um erro ao carregar as avaliações de proficiência da conta: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Ocorreu um erro ao carregar as avaliações de proficiência da conta","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Ocorreu um erro ao salvar as avaliações de proficiência da conta","color_a363e1b0":"Cor","customize_learning_mastery_ratings_4ace142a":"Personalizar avaliações do domínio de aprendizagem","get_started_b9507525":"Começar","invalid_points_8e929c3f":"Pontos inválidos","loading_bde52856":"Carregando","mastery_7ec348b5":"Domínio","missing_required_description_99a99ff":"Descrição obrigatória ausente","negative_points_fda45730":"Pontos negativos","points_bb475533":"Pontos","points_must_be_less_than_previous_rating_bc627bec":"Pontos devem ser menores do que a avaliação anterior","proficiency_rating_6346119f":"Avaliação da proficiência","proficiency_rating_deleted_77827473":"Avaliação da proficiência excluída","proficiency_ratings_2bbabdcd":"Avaliações da proficiência","save_learning_mastery_82889d8b":"Salvar domínio de aprendizado","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n            Configure como as suas Avaliações de Proficiência aparecem dentro do Boletim de Domínio de Aprendizado.\\n            Ajuste o número de avaliações, nível de domínio, pontos e cores.\\n          "},"ru":{"account_proficiency_ratings_saved_292d9239":"Оценки по специальной подготовке для учетной записи сохранены","add_proficiency_rating_d819f6b8":"Добавить оценки по специальной подготовке","added_new_proficiency_rating_e30cab8a":"Добавлены новые оценки по специальной подготовке","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Произошла ошибка при загрузке оценок по специальной подготовке для учетной записи: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Произошла ошибка при загрузке оценок по специальной подготовке для учетной записи","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Произошла ошибка при сохранении оценок по специальной подготовке для учетной записи","color_a363e1b0":"Цвет","customize_learning_mastery_ratings_4ace142a":"Настроить оценки усвоения материала","get_started_b9507525":"Приступить","invalid_points_8e929c3f":"Недопустимые баллы","loading_bde52856":"Загрузка","mastery_7ec348b5":"Усвоение","missing_required_description_99a99ff":"Отсутствует необходимое описание","negative_points_fda45730":"Отрицательные баллы","points_bb475533":"Баллы","points_must_be_less_than_previous_rating_bc627bec":"Баллы должны быть меньше предыдущей оценки","proficiency_rating_6346119f":"Оценка по специальной подготовке","proficiency_rating_deleted_77827473":"Оценка по специальной подготовке удалена","proficiency_ratings_2bbabdcd":"Оценки по специальной подготовке","save_learning_mastery_82889d8b":"Сохранить усвоенный материал","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Задайте параметры отображения уровня профподготовки в журнале оценок результатов обучения.\\n\\n                  Настройте количество уровней, уровень профподготовки, баллы и цвета.\\n\\n                "},"sl":{"account_proficiency_ratings_saved_292d9239":"Shranjeno je vrednotenje znanja računa.","add_proficiency_rating_d819f6b8":"Dodaj vrednotenje znanja","added_new_proficiency_rating_e30cab8a":"Dodaj novo vrednotenje znanja","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Prišlo je do napake med nalaganjem vrednotenj znanja računa: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Prišlo je do napake med nalaganjem vrednotenj znanja računa.","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Med shranjevanjem vrednotenj znanja računa je prišlo do napake.","color_a363e1b0":"Barva","customize_learning_mastery_ratings_4ace142a":"Prilagodi vrednotenja odličnega učenja","get_started_b9507525":"Začnite.","invalid_points_8e929c3f":"Neveljavne točke","loading_bde52856":"Nalaganje","mastery_7ec348b5":"Odličnost","missing_required_description_99a99ff":"Manjkajoči zahtevani opis","negative_points_fda45730":"Negativne točke","points_bb475533":"Točke","points_must_be_less_than_previous_rating_bc627bec":"Število točk mora biti manjše od prejšnjega vrednotenja.","proficiency_rating_6346119f":"Vrednotenje znanja","proficiency_rating_deleted_77827473":"Vrednotenje znanja je izbrisano.","proficiency_ratings_2bbabdcd":"Vrednotenja znanja","save_learning_mastery_82889d8b":"Shrani odlično učenje","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n                  Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\\n                  Adjust number of ratings, mastery level, points, and colors.\\n                "},"sv":{"account_proficiency_ratings_saved_292d9239":"Kunskapsbedömningar för kontot har sparats","add_proficiency_rating_d819f6b8":"Lägg till bedömning för specialkunskap","added_new_proficiency_rating_e30cab8a":"Nya kunskapsbedömningar har lagts till","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Ett fel uppstod vid inläsning av kunskapsbedömningar: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Ett fel uppstod vid inläsning av kunskapsbedömningar","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Ett fel uppstod när kunskapsbedömningar skulle sparas","color_a363e1b0":"Färg","customize_learning_mastery_ratings_4ace142a":"Anpassa Överblick för måluppfyllelse","get_started_b9507525":"Sätt igång","invalid_points_8e929c3f":"Ogiltiga poäng","loading_bde52856":"Laddar","mastery_7ec348b5":"Mål","missing_required_description_99a99ff":"Saknar obligatorisk beskrivning","negative_points_fda45730":"Negativa poäng","points_bb475533":"Poäng","points_must_be_less_than_previous_rating_bc627bec":"Poäng måste var lägre än tidigare bedömning.","proficiency_rating_6346119f":"Bedömning för specialkunskap","proficiency_rating_deleted_77827473":"Kunskapsbedömning togs bort","proficiency_ratings_2bbabdcd":"Bedömningar för specialkunskap","save_learning_mastery_82889d8b":"Spara överblick","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  Konfigurera hur dina färdighetsomdömen ska visas inuti  Studentöverblick för Måluppfyllelse.\\n\\n                  Justera antalet omdömen, uppfyllelsenivå, poäng och färger.\\n\\n                "},"sv-x-k12":{"account_proficiency_ratings_saved_292d9239":"Konto med färdighetsbedömningar sparat","add_proficiency_rating_d819f6b8":"Lägg till bedömning av färdighet","added_new_proficiency_rating_e30cab8a":"Lagt till ny färdighetsbedömning","an_error_occurred_while_loading_account_proficienc_c7d6568b":"Ett fel inträffade när kontots färdighetsbedömningar laddades: %{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"Ett fel inträffade när kontots färdighetsbedömningar laddades","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"Ett fel inträffade när kontots färdighetsbedömningar sparades","color_a363e1b0":"Färg","customize_learning_mastery_ratings_4ace142a":"Anpassa bedömningar av inlärda färdigheter","get_started_b9507525":"Sätt igång","invalid_points_8e929c3f":"Ogiltiga poäng","loading_bde52856":"Laddar","mastery_7ec348b5":"Måluppfyllelse","missing_required_description_99a99ff":"Obligatorisk beskrivning saknas","negative_points_fda45730":"Negativa poäng","points_bb475533":"Poäng","points_must_be_less_than_previous_rating_bc627bec":"Poäng måste vara mindre än föregående bedömning","proficiency_rating_6346119f":"Färdighetsbedömning","proficiency_rating_deleted_77827473":"Kunskapsbedömning togs bort","proficiency_ratings_2bbabdcd":"Färdighetsbedömningar","save_learning_mastery_82889d8b":"Spara lärandemål uppfyllt","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n            Ange hur din kunskapsbedömning ska visas i bedömningsöversikt över uppfyllande av lärandemål.\\n            Justera antalet bedömningar, kunskapsnivåer, poäng och färger.\\n          "},"tr":{"color_a363e1b0":"Renk","get_started_b9507525":"Başlayın","loading_bde52856":"Yükleniyor","mastery_7ec348b5":"Yeterlik","points_bb475533":"Puanlar"},"uk":{"color_a363e1b0":"Колір","get_started_b9507525":"Почати","loading_bde52856":"Завантаження","points_bb475533":"Бали"},"zh-Hans":{"account_proficiency_ratings_saved_292d9239":"已保存帐户能力等级","add_proficiency_rating_d819f6b8":"添加熟练程度评分","added_new_proficiency_rating_e30cab8a":"已添加新的能力等级","an_error_occurred_while_loading_account_proficienc_c7d6568b":"加载帐户能力等级时出错：%{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"加载帐户能力等级时出错","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"保存帐户能力等级时出错","color_a363e1b0":"颜色","customize_learning_mastery_ratings_4ace142a":"自定义学习精通等级","get_started_b9507525":"开始","invalid_points_8e929c3f":"无效的分数","loading_bde52856":"加载","mastery_7ec348b5":"掌握程度","missing_required_description_99a99ff":"缺少必需的描述","negative_points_fda45730":"负分","points_bb475533":"得分","points_must_be_less_than_previous_rating_bc627bec":"分数必须低于之前等级","proficiency_rating_6346119f":"熟练程度评分","proficiency_rating_deleted_77827473":"熟练等级被删除","proficiency_ratings_2bbabdcd":"熟练程度评分","save_learning_mastery_82889d8b":"保存学习掌握程度","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n\\n                  设置您的熟练程度评级在学习掌握程度评分册中的显示方式。\\n\\n                  调整评级数、掌握程度、得分和颜色。\\n\\n                "},"zh-Hant":{"account_proficiency_ratings_saved_292d9239":"帳戶能力評級已儲存","add_proficiency_rating_d819f6b8":"添加能力評級","added_new_proficiency_rating_e30cab8a":"添加新的能力評級","an_error_occurred_while_loading_account_proficienc_c7d6568b":"載入帳戶能力評級時發生錯誤：%{m}","an_error_occurred_while_loading_account_proficienc_d38554c8":"載入帳戶能力評級時發生錯誤","an_error_occurred_while_saving_account_proficiency_43e7fb6a":"儲存帳戶能力評級時發生錯誤","color_a363e1b0":"顏色","customize_learning_mastery_ratings_4ace142a":"自訂學習掌握程度評級","get_started_b9507525":"開始使用","invalid_points_8e929c3f":"無效的分數","loading_bde52856":"正在載入","mastery_7ec348b5":"掌握程度","missing_required_description_99a99ff":"欠乏必填描述","negative_points_fda45730":"負分","points_bb475533":"分數","points_must_be_less_than_previous_rating_bc627bec":"分數必須小於之前的評級","proficiency_rating_6346119f":"能力評級","proficiency_rating_deleted_77827473":"能力評級已刪除","proficiency_ratings_2bbabdcd":"能力評級","save_learning_mastery_82889d8b":"儲存學習掌握程度","set_up_how_your_proficiency_ratings_appear_inside__8139bb81":"\\n                  設定學習掌握程度成績單內顯示的能力評級的方式。\\n                  調整評級數量、掌握程度級別、分數及顏色。\\n                "}}'))
var x=u["default"].scoped("ProficiencyTable")
var C=i("4Pkj")
var O=i("WfMV")
var E=i("VTJ5")
var A=i("Z/f4")
Object(l["a"])(JSON.parse('{"ar":{"change_dcaa253a":"تغيير","change_description_34c49853":"تغيير الوصف","change_mastery_f4d43c07":"تغيير الإتقان","change_points_9e5104ac":"تغيير النقاط","delete_proficiency_rating_5436ee08":"حذف تصنيف الإجادة"},"cy":{"change_dcaa253a":"Newid","change_description_34c49853":"Newid disgrifiad","change_mastery_f4d43c07":"Newid meistrolaeth","change_points_9e5104ac":"Newid pwyntiau","delete_proficiency_rating_5436ee08":"Dileu sgôr medrusrwydd"},"da":{"change_dcaa253a":"Skift","change_description_34c49853":"Ændr beskrivelse","change_mastery_f4d43c07":"Ændr opfyldelse af læringsmål","change_points_9e5104ac":"Ændr point","delete_proficiency_rating_5436ee08":"Slet færdighedsbedømmelse"},"da-x-k12":{"change_dcaa253a":"Skift","change_description_34c49853":"Ændr beskrivelse","change_mastery_f4d43c07":"Ændr opfyldelse af læringsmål","change_points_9e5104ac":"Ændr point","delete_proficiency_rating_5436ee08":"Slet færdighedsbedømmelse"},"de":{"change_dcaa253a":"Ändern","change_description_34c49853":"Beschreibung ändern","change_mastery_f4d43c07":"Leistungsziel ändern","change_points_9e5104ac":"Punkte ändern","delete_proficiency_rating_5436ee08":"Leistungsstand löschen"},"el":{"change_dcaa253a":"Αλλαγή"},"en-AU":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"en-AU-x-unimelb":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"en-CA":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"en-GB":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"en-GB-x-lbs":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"en-GB-x-ukhe":{"change_dcaa253a":"Change","change_description_34c49853":"Change description","change_mastery_f4d43c07":"Change mastery","change_points_9e5104ac":"Change points","delete_proficiency_rating_5436ee08":"Delete proficiency rating"},"es":{"change_dcaa253a":"Cambiar","change_description_34c49853":"Modificar descripción","change_mastery_f4d43c07":"Cambiar dominio","change_points_9e5104ac":"Cambiar puntos","delete_proficiency_rating_5436ee08":"Eliminar clasificación de competencia"},"fa":{"change_dcaa253a":"تغییر دادن"},"fi":{"change_dcaa253a":"Vaihda","change_description_34c49853":"Muutoksen kuvaus","change_mastery_f4d43c07":"Vaihda hallintaa","change_points_9e5104ac":"Vaihda pisteitä","delete_proficiency_rating_5436ee08":"Poista pätevyyden arvostelu"},"fr":{"change_dcaa253a":"Modifier","change_description_34c49853":"Modifier la description","change_mastery_f4d43c07":"Modifier la maîtrise","change_points_9e5104ac":"Modifier les points","delete_proficiency_rating_5436ee08":"Supprimer une note de compétence"},"fr-CA":{"change_dcaa253a":"Modifier","change_description_34c49853":"Changer la description","change_mastery_f4d43c07":"Changer la maîtrise","change_points_9e5104ac":"Changer les points","delete_proficiency_rating_5436ee08":"Supprimer un niveau de compétence"},"he":{"change_dcaa253a":"שינוי"},"ht":{"change_dcaa253a":"Chanje","change_description_34c49853":"Chanje Deskripsyon","change_mastery_f4d43c07":"Chanje metriz","change_points_9e5104ac":"Chanje pwen","delete_proficiency_rating_5436ee08":"Elimine evalyasyon konesans"},"hu":{"change_dcaa253a":"Módosítás"},"hy":{"change_dcaa253a":"Փոփոխել"},"is":{"change_dcaa253a":"Breyta","change_description_34c49853":"Breyta lýsingu","change_mastery_f4d43c07":"Breyta leikni","change_points_9e5104ac":"Breyta punktum","delete_proficiency_rating_5436ee08":"Eyða hæfnieinkunn"},"it":{"change_dcaa253a":"Modifica","change_description_34c49853":"Modifica descrizione","change_mastery_f4d43c07":"Modifica padronanza","change_points_9e5104ac":"Modifica punti","delete_proficiency_rating_5436ee08":"Elimina valutazione di competenza"},"ja":{"change_dcaa253a":"変更","change_description_34c49853":"説明を変更","change_mastery_f4d43c07":"熟達度を変更","change_points_9e5104ac":"変更点","delete_proficiency_rating_5436ee08":"熟達度評価を削除する"},"mi":{"change_dcaa253a":"Huri","change_description_34c49853":"Whakarerekētia te whakāhua","change_mastery_f4d43c07":"Whakarerekētia te mana","change_points_9e5104ac":"Whakarerekētia ngā kaute","delete_proficiency_rating_5436ee08":"Mukua te tohu matatau"},"nb":{"change_dcaa253a":"Endre","change_description_34c49853":"Ende beskrivelse","change_mastery_f4d43c07":"Endre ekspertise","change_points_9e5104ac":"Endre poeng","delete_proficiency_rating_5436ee08":"Slett ferdighetsvurdering"},"nb-x-k12":{"change_dcaa253a":"Endre","change_description_34c49853":"Endre beskrivelse","change_mastery_f4d43c07":"Endre mestring","change_points_9e5104ac":"Endre poeng","delete_proficiency_rating_5436ee08":"Slett ferdighetsvurdering"},"nl":{"change_dcaa253a":"Wijzigen","change_description_34c49853":"Beschrijving wijzigen","change_mastery_f4d43c07":"Vakbeheersing wijzigen","change_points_9e5104ac":"Punten wijzigen","delete_proficiency_rating_5436ee08":"Vaardigheidsbeoordeling verwijderen"},"nn":{"change_dcaa253a":"Endre","change_description_34c49853":"Endre skildring","change_mastery_f4d43c07":"Endre meistringsnivå","change_points_9e5104ac":"Endre poeng","delete_proficiency_rating_5436ee08":"Slett ferdigheitsnivå"},"pl":{"change_dcaa253a":"Zmień","change_description_34c49853":"Zmień opis","change_mastery_f4d43c07":"Zmień opanowanie","change_points_9e5104ac":"Zmień punkty","delete_proficiency_rating_5436ee08":"Usuń punktację biegłości"},"pt":{"change_dcaa253a":"Alterar","change_description_34c49853":"Alterar descrição","change_mastery_f4d43c07":"Mudar domínio","change_points_9e5104ac":"Alterar pontos","delete_proficiency_rating_5436ee08":"Excluir avaliação de proficiência"},"pt-BR":{"change_dcaa253a":"Alterar","change_description_34c49853":"Alterar descrição","change_mastery_f4d43c07":"Alterar domínio","change_points_9e5104ac":"Alterar pontos","delete_proficiency_rating_5436ee08":"Excluir avaliação de proficiência"},"ru":{"change_dcaa253a":"Изменить","change_description_34c49853":"Изменить описание","change_mastery_f4d43c07":"Изменить уровень усвоения","change_points_9e5104ac":"Изменить баллы","delete_proficiency_rating_5436ee08":"Удалить оценки по специальной подготовке"},"sl":{"change_dcaa253a":"Spremeni","change_description_34c49853":"Opis spremembe","change_mastery_f4d43c07":"Spremeni odličnost","change_points_9e5104ac":"Spremeni točke","delete_proficiency_rating_5436ee08":"Izbriši vrednotenje znanja"},"sv":{"change_dcaa253a":"Ändra","change_description_34c49853":"Ändra beskrivning","change_mastery_f4d43c07":"Ändra mål","change_points_9e5104ac":"Ändra poäng","delete_proficiency_rating_5436ee08":"Ta bort bedömning av specialkunskap"},"sv-x-k12":{"change_dcaa253a":"Ändra","change_description_34c49853":"Ändra beskrivning","change_mastery_f4d43c07":"Ändra behärskande","change_points_9e5104ac":"Ändra poäng","delete_proficiency_rating_5436ee08":"Radera bedömning av färdighet"},"tr":{"change_dcaa253a":"Değiştir"},"uk":{"change_dcaa253a":"Змінити"},"zh-Hans":{"change_dcaa253a":"改变","change_description_34c49853":"更改描述","change_mastery_f4d43c07":"更改掌握程度","change_points_9e5104ac":"更改分数","delete_proficiency_rating_5436ee08":"删除熟练程度评分"},"zh-Hant":{"change_dcaa253a":"更改","change_description_34c49853":"變更描述","change_mastery_f4d43c07":"變更掌握程度","change_points_9e5104ac":"變更分數","delete_proficiency_rating_5436ee08":"刪除能力評級"}}'))
var D=u["default"].scoped("ProficiencyRating")
var N=i("xHhu")
var M=i("zpiH")
var P=i("/J48")
var q=i("WEeK")
var B=i("yDo9")
function T(e){if("#"!==e[0])return"#".concat(e)
return e}var I=Object(r["a"])(N["a"],{})
class L extends a.a.Component{constructor(e){super(e)
this.setDescriptionRef=e=>{this.descriptionInput=e}
this.setPointsRef=e=>{this.pointsInput=e}
this.setTrashRef=e=>{this.trashButton=e}
this.setColorRef=e=>{this.colorButton=e}
this.setColor=(e,t,i)=>{const n=T(e)
this.setState({showColorPopover:false})
this.props.onColorChange(n)}
this.handleDescriptionChange=e=>{this.props.onDescriptionChange(e.target.value)}
this.handleMasteryChange=e=>{this.props.onMasteryChange()}
this.handlePointChange=e=>{this.props.onPointsChange(e.target.value)}
this.handleMenuToggle=e=>{this.setState({showColorPopover:e})}
this.handleMenuClose=()=>{this.setState({showColorPopover:false})}
this.handleDelete=()=>{this.props.onDelete()}
this.errorMessage=e=>e?[{text:e,type:"error"}]:null
this.state={showColorPopover:false}
this.descriptionInput=null
this.pointsInput=null
this.trashButton=null
this.colorButton=null}componentDidMount(){"mastery"===this.props.focusField&&this.radioInput.focus()}componentDidUpdate(){"trash"===this.props.focusField?setTimeout(()=>this.props.disableDelete?this.colorButton.focus():this.trashButton.focus(),700):"description"===this.props.focusField?this.descriptionInput.focus():"points"===this.props.focusField&&this.pointsInput.focus()}render(){const e=this.props,t=e.color,i=e.description,n=e.descriptionError,o=e.disableDelete,s=e.mastery,c=e.points,_=e.pointsError
return Object(r["a"])("tr",{},void 0,Object(r["a"])("td",{style:{textAlign:"center",verticalAlign:"top",padding:"1.1rem 0 0 0"}},void 0,Object(r["a"])("div",{style:{display:"inline-block"}},void 0,a.a.createElement(P["a"],{ref:e=>{this.radioInput=e},label:Object(r["a"])(O["a"],{},void 0,D.t("Change mastery")),checked:s,onChange:this.handleMasteryChange}))),Object(r["a"])("td",{className:"description",style:{verticalAlign:"top"}},void 0,a.a.createElement(q["a"],{ref:this.setDescriptionRef,renderLabel:Object(r["a"])(O["a"],{},void 0,D.t("Change description")),messages:this.errorMessage(n),onChange:this.handleDescriptionChange,defaultValue:i})),Object(r["a"])("td",{className:"points",style:{verticalAlign:"top"}},void 0,a.a.createElement(q["a"],{ref:this.setPointsRef,renderLabel:Object(r["a"])(O["a"],{},void 0,D.t("Change points")),messages:this.errorMessage(_),onChange:this.handlePointChange,defaultValue:D.n(c),width:"4rem"})),Object(r["a"])("td",{className:"color",style:{verticalAlign:"top"}},void 0,Object(r["a"])(M["a"],{on:"click",show:this.state.showColorPopover,onToggle:this.handleMenuToggle},void 0,Object(r["a"])(M["a"].Trigger,{},void 0,a.a.createElement(S["a"],{ref:this.setColorRef,variant:"link"},Object(r["a"])("div",{},void 0,Object(r["a"])("span",{className:"colorPickerIcon",style:{background:T(t)}}),D.t("Change")))),Object(r["a"])(M["a"].Content,{},void 0,Object(r["a"])(B["b"],{parentComponent:"ProficiencyRating",colors:B["a"],currentColor:T(t),isOpen:true,hidePrompt:true,nonModal:true,hideOnScroll:false,withAnimation:false,withBorder:false,withBoxShadow:false,withArrow:false,focusOnMount:false,afterClose:this.handleMenuClose,setStatusColor:this.setColor}))),Object(r["a"])("div",{className:"delete"},void 0,Object(r["a"])(S["a"],{disabled:o,buttonRef:this.setTrashRef,onClick:this.handleDelete,variant:"icon",icon:I},void 0,Object(r["a"])(O["a"],{},void 0,D.t("Delete proficiency rating"))))))}}L.defaultProps={descriptionError:null,focusField:null,pointsError:null}
var R=i("xDdU")
var G=i.n(R)
var F=i("GLiE")
var U=i.n(F)
var V=i("JPcv")
var H=i("x1Tw")
const W=e=>H["a"].get("/api/v1/accounts/".concat(e,"/outcome_proficiency"))
const K=(e,t)=>H["a"].post("/api/v1/accounts/".concat(e,"/outcome_proficiency"),t)
var J=i("HbFp")
var Q=i("f6Li")
const Y="EF4437"
function $(e){if("#"===e[0])return e.substring(1)
return e}var X=Object(r["a"])(C["a"],{},void 0,Object(r["a"])(Q["a"],{url:"/images/trophy.svg"}))
var Z=Object(r["a"])(j["a"],{})
class ee extends a.a.Component{constructor(e){super(e)
this.fetchRatings=()=>{W(this.props.accountId).then(e=>{if(200===e.status)this.configToState(e.data)
else{g.a.flashError(x.t("An error occurred while loading account proficiency ratings"))
this.setState({loading:false})}}).catch(e=>{e.response&&404!==e.response.status&&g.a.flashError(x.t("An error occurred while loading account proficiency ratings: %{m}",{m:e.response.statusText}))
this.setState({billboard:true,loading:false})})}
this.configToState=e=>{const t=Object(V["List"])(e.ratings.map(e=>this.createRating(e.description,e.points,e.color)))
const i=e.ratings.findIndex(e=>e.mastery)
this.setState({loading:false,masteryIndex:i,rows:Object(V["fromJS"])(t)})}
this.fieldWithFocus=()=>this.state.rows.some(e=>e.get("focusField"))
this.createRating=function(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return Object(V["fromJS"])({description:e,points:t,key:G()(),color:i,focusField:n})}
this.addRow=()=>{let e=0
const t=this.state.rows.last()
t&&(e=t.get("points")-1);(e<0||Number.isNaN(e))&&(e=0)
const i=this.createRating("",e,Y,"mastery")
this.setState({rows:this.state.rows.push(i)})
g.a.screenReaderFlashMessage(x.t("Added new proficiency rating"))}
this.handleMasteryChange=U.a.memoize(e=>()=>{this.setState({masteryIndex:e})})
this.handleDescriptionChange=U.a.memoize(e=>t=>{let i=this.state.rows
this.invalidDescription(t)||(i=i.removeIn([e,"descriptionError"]))
i=i.setIn([e,"description"],t)
this.setState({rows:i})})
this.handlePointsChange=U.a.memoize(e=>t=>{const i=J["a"].parse(t)
let n=this.state.rows
!this.invalidPoints(i)&&i>=0&&(n=n.removeIn([e,"pointsError"]))
n=n.setIn([e,"points"],i)
this.setState({rows:n})})
this.handleColorChange=U.a.memoize(e=>t=>{const i=this.state.rows.update(e,e=>e.set("color",$(t)))
this.setState({rows:i})})
this.handleDelete=U.a.memoize(e=>()=>{const t=this.state.masteryIndex
const i=this.state.rows.delete(e)
t>=e&&t>0&&this.setState({masteryIndex:t-1})
if(0===e){this.setState({rows:i})
this.props.focusTab&&setTimeout(this.props.focusTab,700)}else this.setState({rows:i.setIn([e-1,"focusField"],"trash")})
g.a.screenReaderFlashMessage(x.t("Proficiency Rating deleted"))})
this.isStateValid=()=>!this.state.rows.some(e=>this.invalidPoints(e.get("points"))||e.get("points")<0||this.invalidDescription(e.get("description")))
this.stateToConfig=()=>({ratings:this.state.rows.map((e,t)=>({description:e.get("description"),points:e.get("points"),mastery:t===this.state.masteryIndex,color:e.get("color")})).toJS()})
this.handleSubmit=()=>{this.checkForErrors()||K(this.props.accountId,this.stateToConfig()).then(e=>{200===e.status?g.a.flashMessage(x.t("Account proficiency ratings saved")):g.a.flashError(x.t("An error occurred while saving account proficiency ratings"))})}
this.checkForErrors=()=>{let e=null
let t=true
const i=this.state.rows.map(i=>{let n=i
if(this.invalidDescription(i.get("description"))){n=n.set("descriptionError",x.t("Missing required description"))
if(t){n=n.set("focusField","description")
t=false}}if(this.invalidPoints(i.get("points"))){e=null
n=n.set("pointsError",x.t("Invalid points"))
if(t){n=n.set("focusField","points")
t=false}}else if(i.get("points")<0){n=n.set("pointsError",x.t("Negative points"))
if(t){n=n.set("focusField","points")
t=false}}else{const r=i.get("points")
if(null!==e&&e<=r){n=n.set("pointsError",x.t("Points must be less than previous rating"))
if(t){n=n.set("focusField","points")
t=false}}e=r}return n})
t||this.setState({rows:i})
return!t}
this.invalidPoints=e=>Number.isNaN(e)
this.invalidDescription=e=>!e||0===e.trim().length
this.removeBillboard=()=>{this.setState({billboard:false})}
this.state={loading:true,masteryIndex:1,rows:Object(V["List"])([this.createRating("Exceeds Mastery",4,"127A1B"),this.createRating("Mastery",3,"00AC18"),this.createRating("Near Mastery",2,"FAB901"),this.createRating("Below Mastery",1,"FD5D10"),this.createRating("Well Below Mastery",0,"EE0612")])}}componentDidMount(){this.fetchRatings()}componentDidUpdate(){this.fieldWithFocus()&&this.setState({rows:this.state.rows.map(e=>e.delete("focusField"))})}renderSpinner(){return Object(r["a"])("div",{style:{textAlign:"center"}},void 0,Object(r["a"])(E["a"],{renderTitle:x.t("Loading"),size:"large",margin:"0 0 0 medium"}))}renderBillboard(){const e={width:"10rem",margin:"0 auto"}
const t={textAlign:"center"}
return Object(r["a"])("div",{style:t},void 0,a.a.createElement(z["a"],{headingAs:"h2",headingLevel:"h2",ref:e=>{this.triggerRoot=e},hero:Object(r["a"])("div",{style:e},void 0,X),heading:x.t("Customize Learning Mastery Ratings"),message:x.t("\n            Set up how your Proficiency Ratings appear inside of Learning Mastery Gradebook.\n            Adjust number of ratings, mastery level, points, and colors.\n          ").trim()}),Object(r["a"])(S["a"],{variant:"primary",onClick:this.removeBillboard},void 0,x.t("Get Started")))}renderTable(){const e=this.state.masteryIndex
return Object(r["a"])("div",{},void 0,Object(r["a"])(A["a"],{caption:Object(r["a"])(O["a"],{},void 0,x.t("Proficiency ratings"))},void 0,Object(r["a"])("thead",{},void 0,Object(r["a"])("tr",{},void 0,Object(r["a"])("th",{className:"masteryCol",scope:"col"},void 0,x.t("Mastery")),Object(r["a"])("th",{scope:"col"},void 0,x.t("Proficiency Rating")),Object(r["a"])("th",{className:"pointsCol",scope:"col"},void 0,x.t("Points")),Object(r["a"])("th",{className:"colorCol",scope:"col"},void 0,x.t("Color")))),Object(r["a"])("tbody",{},void 0,this.state.rows.map((t,i)=>Object(r["a"])(L,{color:t.get("color"),description:t.get("description"),descriptionError:t.get("descriptionError"),disableDelete:1===this.state.rows.size,focusField:t.get("focusField")||(0===i?"mastery":null),points:t.get("points").toString(),pointsError:t.get("pointsError"),mastery:i===e,onColorChange:this.handleColorChange(i),onDelete:this.handleDelete(i),onDescriptionChange:this.handleDescriptionChange(i),onMasteryChange:this.handleMasteryChange(i),onPointsChange:this.handlePointsChange(i)},t.get("key"))),Object(r["a"])("tr",{},void 0,Object(r["a"])("td",{colSpan:"4",style:{textAlign:"center"}},void 0,Object(r["a"])(S["a"],{onClick:this.addRow,icon:Z,variant:"circle-primary"},void 0,Object(r["a"])(O["a"],{},void 0,x.t("Add proficiency rating"))))))),Object(r["a"])("div",{className:"save"},void 0,Object(r["a"])(S["a"],{variant:"primary",onClick:this.handleSubmit},void 0,x.t("Save Learning Mastery"))))}render(){const e=this.state,t=e.billboard,i=e.loading
return i?this.renderSpinner():t?this.renderBillboard():this.renderTable()}}ee.defaultProps={focusTab:null}
var te=Object(r["a"])("div",{id:"new_rubrics"})
class ie extends a.a.Component{componentDidMount(){g()("#right-side-wrapper").show()
g()("#rubrics").detach().appendTo("#new_rubrics")}componentWillUnmount(){g()("#right-side-wrapper").hide()
g()("#rubrics").detach().appendTo("#rubric_attic")}render(){return te}}var ne=Object(r["a"])(ie,{})
class re extends a.a.Component{constructor(){super(...arguments)
this.focusTab=y.a.memoize(e=>()=>{c.a.findDOMNode(this.tabList._tabs[e]).focus()})}render(){return a.a.createElement(w["a"],{ref:e=>{this.tabList=e},defaultSelectedIndex:0},Object(r["a"])(w["a"].Panel,{title:k.t("Account Rubrics")},void 0,ne),Object(r["a"])(w["a"].Panel,{title:k.t("Learning Mastery")},void 0,Object(r["a"])(ee,{focusTab:this.focusTab(1),accountId:this.props.accountId})))}}Object(l["a"])(JSON.parse('{"ar":{"add_criterion_eb9587ef":"إضافة معيار","create_criterion_6df4d4ad":"إنشاء معيار","criterion_created_42669293":"تم إنشاء المعيار","criterion_long_description_e9a97247":"الوصف الطويل للمعيار","criterion_updated_36c0b3dc":"تم تحديث المعيار","description_436c48d7":"الوصف","edit_criterion_5e4dadca":"تحرير المعيار","edit_rubric":{"buttons":{"create_rubric":"إنشاء عنوان","update_rubric":"تحديث العنوان"},"change":"تغيير","discussion_points_possible":{"one":"%{count} نقطة ممكنة","other":"%{count} نقطة ممكنة"},"errors":{"load_rubrics_failed":"فشل تحميل العناوين، الرجاء المحاولة مرة أخرى"},"leave_different":"تركه مختلفاً","messages":{"loading_rubric_groups":"جارٍ تحميل مجموعات العناوين...","loading_rubrics":"جارٍ تحميل العناوين..."},"prompts":{"confirm_delete":"هل ترغب بالتأكيد في حذف هذا العنوان؟","read_only_rubric":"لا يمكنك تحرير هذا العنوان، إما لأنك ليس لديك إذن أو لأنه يجري استخدامه في أكثر من مكان. سينتج عن أي تغييرات تقوم بها عنوان جديد طبقًا للعنوان القديم.  أتريد المتابعة على أية حال؟"},"titles":{"edit_rubric_rating":"تحرير التصنيف","find_existing_rubric":"البحث عن عنوان موجود"}},"max_dd02d615":"الحد الأقصى","new_criterion_canceled_d8c2a655":"تم إلغاء معيار جديد","new_rating_canceled_eed3c4ff":"تم إلغاء تصنيف جديد","new_rating_created_54125331":"تم إنشاء تقييم جديد","rating_title_3b60881e":"عنوان التصنيف","rating_updated_7aff90ea":"تم تحديث التصنيف","update_criterion_edcbd330":"تحديث المعيار"},"cy":{"add_criterion_eb9587ef":"Ychwanegu Maen Prawf","create_criterion_6df4d4ad":"Creu Maen Prawf","criterion_created_42669293":"Maen Prawf wedi’i Greu","criterion_long_description_e9a97247":"Disgrifiad Hir o Faen Prawf","criterion_updated_36c0b3dc":"Maen Prawf wedi’i Ddiweddaru","description_436c48d7":"Disgrifiad","edit_criterion_5e4dadca":"Golygu Maen Prawf","edit_rubric":{"buttons":{"create_rubric":"Creu Cyfarwyddyd Sgorio","update_rubric":"Diweddaru Cyfarwyddyd Sgorio"},"change":"Newid","discussion_points_possible":{"one":"%{count} pwynt yn bosib","other":"%{count} pwynt yn bosib"},"errors":{"load_rubrics_failed":"Wedi methu llwytho cyfarwyddiadau sgorio, rhowch gynnig arall arni"},"leave_different":"Gadael rhai gwahanol","messages":{"loading_rubric_groups":"Wrthi’n llwytho grwpiau o gyfarwyddiadau sgorio...","loading_rubrics":"Wrthi’n llwytho cyfarwyddiadau sgorio..."},"prompts":{"confirm_delete":"Ydych chi’n siŵr eich bod am ddileu’r cyfarwyddyd sgorio hwn?","read_only_rubric":"Does dim modd i chi olygu’r cyfarwyddyd sgorio hwn oherwydd nad oes gennych chi hawl i wneud hynny, neu oherwydd ei fod yn cael ei ddefnyddio mewn mwy nag un lle. Bydd unrhyw newidiadau y byddwch chi’n eu gwneud yn arwain at gyfarwyddyd sgorio newydd, a fydd yn seiliedig ar yr hen gyfarwyddyd sgorio. Bwrw ymlaen beth bynnag?"},"titles":{"edit_rubric_rating":"Golygu Sgôr","find_existing_rubric":"Dod o hyd i’r cyfarwyddyd sgorio presennol"}},"max_dd02d615":"uchafswm","new_criterion_canceled_d8c2a655":"Maen Prawf newydd wedi\'i ganslo","new_rating_canceled_eed3c4ff":"Sgôr Newydd wedi\'i chanslo","new_rating_created_54125331":"Sgôr Newydd wedi\'i chreu","rating_title_3b60881e":"Teitl lefel sgôr","rating_updated_7aff90ea":"Wedi diweddaru lefel sgôr","update_criterion_edcbd330":"Diweddaru Maen Prawf"},"da":{"add_criterion_eb9587ef":"Tilføj kriterie","create_criterion_6df4d4ad":"Opret kriterie","criterion_created_42669293":"Kriterie oprettet","criterion_long_description_e9a97247":"Kriterie lang beskrivelse","criterion_updated_36c0b3dc":"Kriterie opdateret","description_436c48d7":"Beskrivelse","edit_criterion_5e4dadca":"Rediger kriterie","edit_rubric":{"buttons":{"create_rubric":"Opret rubrik","update_rubric":"Opdater rubrik"},"change":"Skift","discussion_points_possible":{"one":"%{count} mulige point","other":"%{count} mulige point"},"errors":{"load_rubrics_failed":"Det mislykkedes at indlæse rubrik, prøv igen"},"leave_different":"Efterlad anderledes","messages":{"loading_rubric_groups":"Indlæser rubrik-grupper ...","loading_rubrics":"Indlæser rubrik ..."},"prompts":{"confirm_delete":"Er du sikker på, at du vil slette denne rubrik?","read_only_rubric":"Du kan ikke redigere denne rubrik, enten fordi du ikke har tilladelse, eller fordi den bruges mere end et sted. Eventuelle ændringer, som du foretager, vil resultere i en ny rubrik, som baseres på den forrige rubrik. Fortsæt alligevel?"},"titles":{"edit_rubric_rating":"Rediger bedømmelse","find_existing_rubric":"Find eksisterende rubrik"}},"max_dd02d615":"maks","new_criterion_canceled_d8c2a655":"Nyt kriterie annulleret","new_rating_canceled_eed3c4ff":"Ny bedømmelse annulleret","new_rating_created_54125331":"Ny bedømmelse oprettet","rating_title_3b60881e":"Bedømmelsestitel","rating_updated_7aff90ea":"Bedømmelse opdateret","update_criterion_edcbd330":"Opdateringskriterie"},"da-x-k12":{"add_criterion_eb9587ef":"Tilføj kriterie","create_criterion_6df4d4ad":"Opret kriterie","criterion_created_42669293":"Kriterie oprettet","criterion_long_description_e9a97247":"Kriterie lang beskrivelse","criterion_updated_36c0b3dc":"Kriterie opdateret","description_436c48d7":"Beskrivelse","edit_criterion_5e4dadca":"Rediger kriterie","edit_rubric":{"buttons":{"create_rubric":"Opret vurderingskriterium","update_rubric":"Opdater vurderingskriterium"},"change":"Skift","discussion_points_possible":{"one":"%{count} mulige point","other":"%{count} mulige point"},"errors":{"load_rubrics_failed":"Det mislykkedes at indlæse vurderingskriterier. Prøv igen"},"leave_different":"Efterlad anderledes","messages":{"loading_rubric_groups":"Indlæser vurderingskriteriegrupper ...","loading_rubrics":"Indlæser vurderingskriterier ..."},"prompts":{"confirm_delete":"Er du sikker på, at du vil slette dette vurderingskriterium?","read_only_rubric":"Du kan ikke redigere dette vurderingskriterium, enten fordi du ikke har tilladelse, eller fordi den bruges mere end et sted. Eventuelle ændringer, som du foretager, vil resultere i et nyt vurderingskriterium, som baseres på det forrige vurderingskriterium. Fortsæt alligevel?"},"titles":{"edit_rubric_rating":"Rediger bedømmelse","find_existing_rubric":"Find eksisterende vurderingskriterium"}},"max_dd02d615":"maks","new_criterion_canceled_d8c2a655":"Nyt kriterie annulleret","new_rating_canceled_eed3c4ff":"Ny bedømmelse annulleret","new_rating_created_54125331":"Ny bedømmelse oprettet","rating_title_3b60881e":"Bedømmelsestitel","rating_updated_7aff90ea":"Bedømmelse opdateret","update_criterion_edcbd330":"Opdateringskriterie"},"de":{"add_criterion_eb9587ef":"Kriterium hinzufügen","create_criterion_6df4d4ad":"Kriterium erstellen","criterion_created_42669293":"Kriterium erstellt","criterion_long_description_e9a97247":"Ausführliche Kriteriumsbeschreibung","criterion_updated_36c0b3dc":"Kriterium aktualisiert","description_436c48d7":"Beschreibung","edit_criterion_5e4dadca":"Kriterium bearbeiten","edit_rubric":{"buttons":{"create_rubric":"Bewertungsschema erstellen","update_rubric":"Bewertungsschema aktualisieren"},"change":"Ändern","discussion_points_possible":{"one":"%{count} möglicher Punkt","other":"%{count} mögliche Punkte"},"errors":{"load_rubrics_failed":"Das Laden der Bewertungsschemata ist fehlgeschlagen, bitte erneut versuchen"},"leave_different":"Unterschiedlich lassen","messages":{"loading_rubric_groups":"Bewertungsschemagruppen werden geladen ...","loading_rubrics":"Bewertungsschemata werden geladen ..."},"prompts":{"confirm_delete":"Möchten Sie dieses Bewertungsschema wirklich löschen?","read_only_rubric":"Sie dürfen dieses Bewertungsschema nicht bearbeiten, da Sie entweder nicht über die erforderliche Berechtigung verfügen oder das Bewertungsschema an mehr als einem Ort verwendet wird. Alle vorgenommenen Änderungen ergeben ein neues Bewertungsschema, das auf dem alten basiert. Möchten Sie trotzdem fortfahren?"},"titles":{"edit_rubric_rating":"Bewertung bearbeiten","find_existing_rubric":"Bestehendes Bewertungsschema suchen"}},"max_dd02d615":"max.","new_criterion_canceled_d8c2a655":"Neues Kriterium storniert","new_rating_canceled_eed3c4ff":"Neue Bewertung storniert","new_rating_created_54125331":"Neue Bewertung erstellt","rating_title_3b60881e":"Bewertungstitel","rating_updated_7aff90ea":"Bewertung aktualisiert","update_criterion_edcbd330":"Kriterium aktualisieren"},"el":{"description_436c48d7":"Περιγραφή","edit_rubric":{"buttons":{"create_rubric":"Δημιουργία Ρουμπρίκας","update_rubric":"Ενημέρωση Ρουμπρίκας"},"change":"Αλλαγή","discussion_points_possible":{"one":"%{count} πιθανό μόριο","other":"%{count} πιθανά μόρια"},"errors":{"load_rubrics_failed":"Αποτυχία μεταφόρτωσης ρουμπρίκων, παρακαλώ δοκιμάστε ξανά"},"leave_different":"Αφήστε διαφορετικά","messages":{"loading_rubric_groups":"Φόρτωση ομάδων ρουμπρικών...","loading_rubrics":"Φόρτωση ρουμπρίκων αξιολόγισης..."},"prompts":{"confirm_delete":"Είστε σίγουρος/η ότι επιθυμείτε να διαγράψετε αυτή τη ρουμπρίκα;","read_only_rubric":"\\u003cmrk mid=\\"862\\" mtype=\\"seg\\"\\u003eΔεν μπορείτε να επεξεργαστείτε αυτή τη ρουμπρίκα είτε επειδή δεν έχετε άδεια ή επειδή χρησιμοποιείται σε περισσότερα από ένα σημεία.\\u003c/mrk\\u003e \\u003cmrk mid=\\"863\\" mtype=\\"seg\\"\\u003eΤυχόν αλλαγές που θα πραγματοποιήσετε θα έχουν ως αποτέλεσμα μια νέα ρουμπρίκα βασισμένη στην παλιά ρουμπρίκα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"864\\" mtype=\\"seg\\"\\u003eΘέλετε, παρόλα αυτά, να συνεχίσετε;\\u003c/mrk\\u003e"},"titles":{"find_existing_rubric":"Βρείτε Υπάρχουσα Ρουμπρίκα"}},"max_dd02d615":"μέγιστο"},"en-AU":{"add_criterion_eb9587ef":"Add Criterion","create_criterion_6df4d4ad":"Create Criterion","criterion_created_42669293":"Criterion Created","criterion_long_description_e9a97247":"Criterion Long Description","criterion_updated_36c0b3dc":"Criterion Updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit Criterion","edit_rubric":{"buttons":{"create_rubric":"Create Rubric","update_rubric":"Update Rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different.","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find Existing Rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New Criterion Cancelled","new_rating_canceled_eed3c4ff":"New Rating Canceled","new_rating_created_54125331":"New Rating Created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update Criterion"},"en-AU-x-unimelb":{"add_criterion_eb9587ef":"Add Criterion","create_criterion_6df4d4ad":"Create Criterion","criterion_created_42669293":"Criterion Created","criterion_long_description_e9a97247":"Criterion Long Description","criterion_updated_36c0b3dc":"Criterion Updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit Criterion","edit_rubric":{"buttons":{"create_rubric":"Create Rubric","update_rubric":"Update Rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different.","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find Existing Rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New Criterion Cancelled","new_rating_canceled_eed3c4ff":"New Rating Canceled","new_rating_created_54125331":"New Rating Created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update Criterion"},"en-CA":{"add_criterion_eb9587ef":"Add Criterion","create_criterion_6df4d4ad":"Create Criterion","criterion_created_42669293":"Criterion Created","criterion_long_description_e9a97247":"Criterion Long Description","criterion_updated_36c0b3dc":"Criterion Updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit Criterion","edit_rubric":{"buttons":{"create_rubric":"Create Rubric","update_rubric":"Update Rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find Existing Rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New Criterion Canceled","new_rating_canceled_eed3c4ff":"New Rating Canceled","new_rating_created_54125331":"New Rating Created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update Criterion"},"en-GB":{"add_criterion_eb9587ef":"Add criterion","create_criterion_6df4d4ad":"Create criterion","criterion_created_42669293":"Criterion created","criterion_long_description_e9a97247":"Criterion long description","criterion_updated_36c0b3dc":"Criterion updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit criterion","edit_rubric":{"buttons":{"create_rubric":"Create rubric","update_rubric":"Update rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find existing rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New criterion cancelled","new_rating_canceled_eed3c4ff":"New Rating Cancelled","new_rating_created_54125331":"New rating created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update criterion"},"en-GB-x-lbs":{"add_criterion_eb9587ef":"Add criterion","create_criterion_6df4d4ad":"Create criterion","criterion_created_42669293":"Criterion created","criterion_long_description_e9a97247":"Criterion long description","criterion_updated_36c0b3dc":"Criterion updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit criterion","edit_rubric":{"buttons":{"create_rubric":"Create rubric","update_rubric":"Update rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find existing rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New criterion cancelled","new_rating_canceled_eed3c4ff":"New Rating Cancelled","new_rating_created_54125331":"New rating created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update criterion"},"en-GB-x-ukhe":{"add_criterion_eb9587ef":"Add criterion","create_criterion_6df4d4ad":"Create criterion","criterion_created_42669293":"Criterion created","criterion_long_description_e9a97247":"Criterion long description","criterion_updated_36c0b3dc":"Criterion updated","description_436c48d7":"Description","edit_criterion_5e4dadca":"Edit criterion","edit_rubric":{"buttons":{"create_rubric":"Create rubric","update_rubric":"Update rubric"},"change":"Change","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possible"},"errors":{"load_rubrics_failed":"Loading rubrics failed, please try again"},"leave_different":"Leave different","messages":{"loading_rubric_groups":"Loading rubric groups...","loading_rubrics":"Loading rubrics..."},"prompts":{"confirm_delete":"Are you sure you want to delete this rubric?","read_only_rubric":"You can\'t edit this rubric, either because you don\'t have permission or it\'s being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?"},"titles":{"edit_rubric_rating":"Edit Rating","find_existing_rubric":"Find existing rubric"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"New criterion cancelled","new_rating_canceled_eed3c4ff":"New Rating Cancelled","new_rating_created_54125331":"New rating created","rating_title_3b60881e":"Rating Title","rating_updated_7aff90ea":"Rating Updated","update_criterion_edcbd330":"Update criterion"},"es":{"add_criterion_eb9587ef":"Agregar criterio","create_criterion_6df4d4ad":"Crear criterio","criterion_created_42669293":"Criterio creado","criterion_long_description_e9a97247":"Descripción detallada de los criterios","criterion_updated_36c0b3dc":"Criterio actualizado","description_436c48d7":"Descripción","edit_criterion_5e4dadca":"Editar criterio","edit_rubric":{"buttons":{"create_rubric":"Crear rúbrica","update_rubric":"Actualizar rúbrica"},"change":"Cambiar","discussion_points_possible":{"one":"%{count} punto posible","other":"%{count} puntos posibles"},"errors":{"load_rubrics_failed":"Carga de rúbricas ha fallado; intente de nuevo"},"leave_different":"Dejar diferente","messages":{"loading_rubric_groups":"Cargando grupos de rúbricas...","loading_rubrics":"Cargando rúbricas..."},"prompts":{"confirm_delete":"¿Está seguro de que desea eliminar esta rúbrica?","read_only_rubric":"No puede editar esta rúbrica, puede que sea porque no tenga permiso o está siendo usada en varias localidades. Cualquier cambio resultará en una rúbrica nueva basada en la anterior. ¿Continuar de todas formas?"},"titles":{"edit_rubric_rating":"Editar calificación","find_existing_rubric":"Encontrar una rúbrica existente"}},"max_dd02d615":"máx.","new_criterion_canceled_d8c2a655":"Nuevo criterio cancelado","new_rating_canceled_eed3c4ff":"Nueva calificación cancelada","new_rating_created_54125331":"Se creó una nueva calificación","rating_title_3b60881e":"Título de la calificación","rating_updated_7aff90ea":"Calificación actualizada","update_criterion_edcbd330":"Actualizar criterio"},"fa":{"add_criterion_eb9587ef":"افزودن معیار","create_criterion_6df4d4ad":"ایجاد معیار","criterion_created_42669293":"معیار ایجاد شد","criterion_long_description_e9a97247":"شرح طولانی معیار","criterion_updated_36c0b3dc":"معیار به روز شد","description_436c48d7":"شرح","edit_criterion_5e4dadca":"ویرایش معیار","edit_rubric":{"buttons":{"create_rubric":"ایجاد دستورالعمل ارزیابی","update_rubric":"بهنگام سازی دستورالعمل ارزیابی"},"change":"تغییر دادن","discussion_points_possible":{"one":"%{count} امتیاز ممکن","other":"%{count} امتیاز ممکن"},"errors":{"load_rubrics_failed":"بارگذاری دستورالعمل های ارزیابی انجام نشد، لطفا دوباره سعی کنید"},"leave_different":"متفاوت گذاشتن","messages":{"loading_rubric_groups":"در حال بارگذاری گروه های دستورالعمل ارزیابی...","loading_rubrics":"در حال بارگذاری دستورالعمل های ارزیابی..."},"prompts":{"confirm_delete":"مطمئنید که می خواهید این دستورالعمل ارزیابی حذف شود؟","read_only_rubric":"نمی توانید این دستورالعمل ارزیابی را ویرایش کنید، یا به این علت که اجازه ندارید و یا اینکه در بیش از یک جا استفاده شده است. هر گونه تغییری که انجام می دهید به یک دستورالعمل ارزیابی جدید بر مبنای دستورالعمل ارزیابی قدیمی منجر می شود. با این وجود ادامه می دهید؟"},"titles":{"edit_rubric_rating":"ویرایش رتبه بندی","find_existing_rubric":"یافتن دستورالعمل ارزیابی موجود"}},"max_dd02d615":"بیشینه","new_criterion_canceled_d8c2a655":"معیار جدید لغو شد","new_rating_canceled_eed3c4ff":"رتبه‌بندی جدید لغو شد","new_rating_created_54125331":"رتبه بندی جدید ایجاد شد","rating_title_3b60881e":"عنوان رتبه‌بندی","rating_updated_7aff90ea":"رتبه‌بندی به روز شد","update_criterion_edcbd330":"به روزرسانی معیار"},"fi":{"add_criterion_eb9587ef":"Lisää kriteeri","create_criterion_6df4d4ad":"Luo kriteeri","criterion_created_42669293":"Kriteeri luotu","criterion_long_description_e9a97247":"Kriteerien pitkä kuvaus","criterion_updated_36c0b3dc":"Kriteeri päivitetty","description_436c48d7":"Kuvaus","edit_criterion_5e4dadca":"Muokkaa kriteeriä","edit_rubric":{"buttons":{"create_rubric":"Luo rubriikki","update_rubric":"Päivitä rubriikki"},"change":"Vaihda","discussion_points_possible":{"one":"%{count} pistettä mahdollista","other":"%{count} pistettä mahdollista"},"errors":{"load_rubrics_failed":"Rubriikkien lataus epäonnistui, yritä uudelleen"},"leave_different":"Jätä erilainen","messages":{"loading_rubric_groups":"Ladataan rubriikkiryhmiä...","loading_rubrics":"Ladataan rubriikkeja..."},"prompts":{"confirm_delete":"Haluatko varmasti poistaa tämän rubriikin?","read_only_rubric":"Et voi muokata tätä rubriikkia joko sen vuoksi, että sinulla ei ole käyttöoikeuksia tai sitä käytetään useammassa kuin yhdessä paikassa. Kaikki muutokset, jotka teet, aiheuttavat uuden rubriikin vanhan rubriikin perusteella. Jatketaanko joka tapauksessa?"},"titles":{"edit_rubric_rating":"Muokkaa arvostelua","find_existing_rubric":"Löydä olemassa oleva rubriikki"}},"max_dd02d615":"maks.","new_criterion_canceled_d8c2a655":"Uusi kriteeri peruutettu","new_rating_canceled_eed3c4ff":"Uusi arvostelu peruutettu","new_rating_created_54125331":"Uusi arvostelu luotu","rating_title_3b60881e":"Arvostelun otsikko","rating_updated_7aff90ea":"Arvostelu päivitetty","update_criterion_edcbd330":"Päivitä kriteerit"},"fr":{"add_criterion_eb9587ef":"Ajouter un critère","create_criterion_6df4d4ad":"Créer un critère","criterion_created_42669293":"Critère créé","criterion_long_description_e9a97247":"Description longue du critère","criterion_updated_36c0b3dc":"Critère mis à jour","description_436c48d7":"Description","edit_criterion_5e4dadca":"Modifier le critère","edit_rubric":{"buttons":{"create_rubric":"Créer un barème","update_rubric":"Mettre à jour le barême"},"change":"Changer","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possibles"},"errors":{"load_rubrics_failed":"Échec du chargement des barèmes, veuillez réessayer"},"leave_different":"Laisser différent","messages":{"loading_rubric_groups":"Chargement des groupes de barèmes...","loading_rubrics":"Chargement des barèmes..."},"prompts":{"confirm_delete":"Voulez-vous vraiment supprimer ce barème ?","read_only_rubric":"La modification de ce barème est impossible, soit parce que vous ne possédez pas les autorisations nécessaires, soit parce qu’elle est déjà utilisée en un autre endroit. Toute modification de ce barème entraînera la création d’une nouveau barème à partir de l’ancien. Voulez-vous continuer ?"},"titles":{"edit_rubric_rating":"Modifier les notes","find_existing_rubric":"Chercher un barème existant"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nouveau critère annulé","new_rating_canceled_eed3c4ff":"Nouvelle notation annulée","new_rating_created_54125331":"Nouvelle notation créée","rating_title_3b60881e":"Titre de la notation","rating_updated_7aff90ea":"Notation mise à jour","update_criterion_edcbd330":"Mettre à jour le critère"},"fr-CA":{"add_criterion_eb9587ef":"Ajouter un critère","create_criterion_6df4d4ad":"Créer Critère","criterion_created_42669293":"Critère créé","criterion_long_description_e9a97247":"Longue description du critère","criterion_updated_36c0b3dc":"Critère mis à jour","description_436c48d7":"Description","edit_criterion_5e4dadca":"Modifier le critère","edit_rubric":{"buttons":{"create_rubric":"Créer un barème","update_rubric":"Mettre à jour le barême"},"change":"Modifier","discussion_points_possible":{"one":"%{count} point possible","other":"%{count} points possibles"},"errors":{"load_rubrics_failed":"Échec du chargement des barèmes, veuillez réessayer"},"leave_different":"Laisser différent","messages":{"loading_rubric_groups":"Chargement des groupes de barèmes...","loading_rubrics":"Chargement des barèmes..."},"prompts":{"confirm_delete":"Voulez-vous vraiment supprimer ce barème?","read_only_rubric":"La modification de ce barème est impossible, soit parce que vous ne possédez pas les autorisations nécessaires, soit parce qu’elle est déjà utilisée en un autre endroit. Toute modification de ce barème entraînera la création d’une nouveau barème à partir de l’ancien. Voulez-vous continuer?"},"titles":{"edit_rubric_rating":"Modifier les notes","find_existing_rubric":"Chercher un barème existant"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nouveau critère annulé","new_rating_canceled_eed3c4ff":"Nouveau classement annulé","new_rating_created_54125331":"Nouvelle notation créée","rating_title_3b60881e":"Intitulé du classement","rating_updated_7aff90ea":"Classement actualisé","update_criterion_edcbd330":"Mise à jour de critère"},"he":{"add_criterion_eb9587ef":"הוספת קריטריון","create_criterion_6df4d4ad":"יצירת קריטריון","criterion_created_42669293":"קריטרין נוצר","criterion_long_description_e9a97247":"תאור מלא של הקריטריון","criterion_updated_36c0b3dc":"קריטריון עודכן","description_436c48d7":"תיאור","edit_criterion_5e4dadca":"עריכת קריטריון","edit_rubric":{"buttons":{"create_rubric":"יצירת רובריקה","update_rubric":"עדכון רובריקה"},"change":"שינוי","discussion_points_possible":{"one":" נקודה %{count} אפשרית","other":"%{count} נקודות אפשריות"},"errors":{"load_rubrics_failed":"טעינת רובריקות נכשלה, אנא נסו שוב"},"leave_different":"השאר/י שונה","messages":{"loading_rubric_groups":"טוען קבוצות רובריקות...","loading_rubrics":"טוען רובריקות..."},"prompts":{"confirm_delete":"אתם בטוחים שברצונכם לבטל רובריקה זו?","read_only_rubric":"אינך יכול/ה לערוך רובריקה זו, בין אם אין לך הרשאות לבין אם היא נמצאת בשימוש ביותר ממקום אחד. כל שינוי שייעשה יתבטא ברובריקה חדשה המבוססת על הישונה. להמשיך בכל מקרה?"},"titles":{"edit_rubric_rating":"עריכת דירוג","find_existing_rubric":"מציאת רובריקה קיימת"}},"max_dd02d615":"מכסימום","new_rating_created_54125331":"נוצר דירוג חדש"},"ht":{"add_criterion_eb9587ef":"Ajoute Kritè","create_criterion_6df4d4ad":"Kreye Kritè","criterion_created_42669293":"Kritè Kreye","criterion_long_description_e9a97247":"Deskripsyon Long Kritè","criterion_updated_36c0b3dc":"Kritè Aktyalize","description_436c48d7":"Deskripsyon","edit_criterion_5e4dadca":"Modifye Kritè","edit_rubric":{"buttons":{"create_rubric":"Kreye Ribrik","update_rubric":"Aktyalize Ribrik"},"change":"Chanje","discussion_points_possible":{"one":"%{count} pwen posib","other":"%{count} pwen posib"},"errors":{"load_rubrics_failed":"Chajman ribrik yo echwe, tanpri eseye ankò"},"leave_different":"Kite diferan","messages":{"loading_rubric_groups":"Chajman gwoup ribrik...","loading_rubrics":"Chajman ribrik..."},"prompts":{"confirm_delete":"Ou kwè vrèman ou vle efase ribrik sa a?","read_only_rubric":"Ou pa kapab modifye ribrik sa a, swa paske w pa gen otorizasyon oswa y ap itilize li yon lòt kote ankò. Nenpòt chanjman ou fè l ap bay yon nouvo ribrik daprè ansyen ribrik la. W ap kontinye kanmenm?"},"titles":{"edit_rubric_rating":"Modifye Nòt","find_existing_rubric":"Jwenn Ribrik ki Egziste"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nouvo Kritè Anile","new_rating_canceled_eed3c4ff":"Nouvo Evalyasyon Anile","new_rating_created_54125331":"Nouvo Evalyasyon Kreye","rating_title_3b60881e":"Tit Klasman","rating_updated_7aff90ea":"Klasman Aktyalize","update_criterion_edcbd330":"Aktyalize Kritè"},"hu":{"add_criterion_eb9587ef":"Kritérium hozzáadása","create_criterion_6df4d4ad":"Kritérium létrehozása","criterion_updated_36c0b3dc":"Kritérium frissítve","description_436c48d7":"Leírás","edit_criterion_5e4dadca":"Kritérium szerkesztése","edit_rubric":{"buttons":{"create_rubric":"Értékelőtábla létrehozása","update_rubric":"Értékelőtábla frissítése"},"change":"Módosítás","discussion_points_possible":{"one":"%{count} elérhető pont","other":"elérhető pont: %{count} "},"errors":{"load_rubrics_failed":"Az értékelőtábla betöltése sikertelen, próbálja újra!"},"leave_different":"Hagyja meg különbözőnek","messages":{"loading_rubric_groups":"Értékelőtábla-csoportok betöltése...","loading_rubrics":"Értékelőtábla betöltése..."},"prompts":{"confirm_delete":"Biztos benne, hogy törli ezt az értékelőtáblát?","read_only_rubric":"Ön nem szerkesztheti ezt az értékelőtáblát, mert nincs engedélye vagy már használatban van. Minden módosítás egy új értékelőtáblába lesz átvezetve, ami az eredeti alapján készül el. Mindenképpen folytatja?"},"titles":{"find_existing_rubric":"Létező értékelőtábla keresése"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Új kritérium törölve","new_rating_canceled_eed3c4ff":"Új értékelés törölve","new_rating_created_54125331":"Új értékelés létrehozva","update_criterion_edcbd330":"Kritérium frissítése"},"hy":{"description_436c48d7":"Նկարագրություն","edit_rubric":{"buttons":{"create_rubric":"Ստեղծել ռուբրիկ","update_rubric":"Թարմացնել ռուբրիկը"},"change":"Փոխել","discussion_points_possible":{"one":"%{count} հնարավոր միավոր","other":"%{count} հնարավոր միավորներ"},"errors":{"load_rubrics_failed":"Ռուբրիկների բեռնումը չհաջողվեց, խնդրում ենք փորձել ավելի ուշ"},"leave_different":"Թողնել իրարից տարբեր","messages":{"loading_rubric_groups":"Բեռնում է ռուբրիկների խմբերը...","loading_rubrics":"Բեռնում է ռուբրիկները..."},"prompts":{"confirm_delete":"Դուք իսկապե՞ս ցանկանում եք ջնջել այս ռուբրիկը","read_only_rubric":"Դուք չեք կարող խմբագրել այս ռուբրիկը, որովհետև  թույլտվություն չունեք, կամ այն օգտագործվում է մեկից ավելի տեղերում: Ձեր կատարած ցանկացած փոփոխություն կհանգեցնի հին ռուբրիկի վրա հիմնված նոր ռուբրիկի: Ցանկանո՞ւմ եք շարունակել: "},"titles":{"find_existing_rubric":"Գտնել գոյություն ունեցող ռուբրիկը"}}},"is":{"add_criterion_eb9587ef":"Bæta við viðmiðun","create_criterion_6df4d4ad":"Búa til viðmið","criterion_created_42669293":"Viðmið stofnað","criterion_long_description_e9a97247":"Löng lýsing á viðmiðun","criterion_updated_36c0b3dc":"Viðmið uppfært","description_436c48d7":"Lýsing","edit_criterion_5e4dadca":"Breyta viðmiði","edit_rubric":{"buttons":{"create_rubric":"Stofna matsviðmið","update_rubric":"Uppfæra matsviðmið"},"change":"Breyta","discussion_points_possible":{"one":"%{count} punktar mögulegir","other":"%{count} punktar mögulegir"},"errors":{"load_rubrics_failed":"Ekki tókst að sækja matsviðmið, reyndu aftur"},"leave_different":"Skilja eftir mismunandi","messages":{"loading_rubric_groups":"Sæki matsviðmiðs-hópa...","loading_rubrics":"Sæki matsviðmið..."},"prompts":{"confirm_delete":"Viltu örugglega eyða þessu matsviðmiði?","read_only_rubric":"Ekki er hægt að breyta þessu matsviðmiði, annað hvort vegna þess að þú hefur ekki heimild til þess eða að það er notað á fleiri en einum stað. Ef þú gerir breytingar verður nýtt matsviðmið stofnað á grunni þess gamla. Halda samt áfram?"},"titles":{"edit_rubric_rating":"Breyta mati","find_existing_rubric":"Finna matsviðmið"}},"max_dd02d615":"mest","new_criterion_canceled_d8c2a655":"Hætt við nýja forsendu","new_rating_canceled_eed3c4ff":"Hætt við nýtt mat","new_rating_created_54125331":"Nýtt mat stofnað","rating_title_3b60881e":"Titill mats","rating_updated_7aff90ea":"Mat uppfært","update_criterion_edcbd330":"Uppfæra viðmiðun"},"it":{"add_criterion_eb9587ef":"Aggiungi criterio","create_criterion_6df4d4ad":"Crea criterio","criterion_created_42669293":"Criterio creato","criterion_long_description_e9a97247":"Descrizione lunga criterio","criterion_updated_36c0b3dc":"Criterio aggiornato","description_436c48d7":"Descrizione","edit_criterion_5e4dadca":"Modifica criterio","edit_rubric":{"buttons":{"create_rubric":"Crea rubrica","update_rubric":"Aggiorna rubrica"},"change":"Modifica","discussion_points_possible":{"one":"%{count} punto possibile","other":"%{count} punti possibili"},"errors":{"load_rubrics_failed":"Caricamento rubriche non riuscito. Riprova"},"leave_different":"Lascia diverso","messages":{"loading_rubric_groups":"Caricamento gruppi rubriche in corso...","loading_rubrics":"Caricamento rubriche in corso..."},"prompts":{"confirm_delete":"Vuoi eliminare questa rubrica?","read_only_rubric":"Non puoi modificare questa rubrica poiché non disponi dell\'autorizzazione o è utilizzata in più posizioni. Tutte le modifiche apportate genereranno una nuova rubrica basata sulla rubrica precedente. Continuare comunque?"},"titles":{"edit_rubric_rating":"Modifica valutazione","find_existing_rubric":"Trova rubrica esistente"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nuovo criterio annullato","new_rating_canceled_eed3c4ff":"Nuova valutazione annullata","new_rating_created_54125331":"Nuova valutazione creata","rating_title_3b60881e":"Titolo valutazione","rating_updated_7aff90ea":"Valutazione aggiornata","update_criterion_edcbd330":"Aggiorna criterio"},"ja":{"add_criterion_eb9587ef":"基準を追加する","create_criterion_6df4d4ad":"作成基準","criterion_created_42669293":"基準を作成","criterion_long_description_e9a97247":"基準の長い説明","criterion_updated_36c0b3dc":"基準を更新済み","description_436c48d7":"説明","edit_criterion_5e4dadca":"基準を編集","edit_rubric":{"buttons":{"create_rubric":"注釈の作成","update_rubric":"注釈の更新"},"change":"変更","discussion_points_possible":{"one":"配点 %{count}","other":"配点 %{count}"},"errors":{"load_rubrics_failed":"注釈の読み込みに失敗しました。もう一度やり直してください。"},"leave_different":"違いはそのままにしておく","messages":{"loading_rubric_groups":"注釈グループを読み込んでいます。","loading_rubrics":"注釈を読み込んでいます。"},"prompts":{"confirm_delete":"この注釈を削除してもよろしいですか?","read_only_rubric":"この注釈を編集できません。権限がないか、またはこの注釈は複数の場所で使用されています。何らかの変更を行うと、古い注釈に基づいて新しい注釈が作成されることになります。続行しますか?"},"titles":{"edit_rubric_rating":"評価を編集","find_existing_rubric":"既存の注釈の検索"}},"max_dd02d615":"最大","new_criterion_canceled_d8c2a655":"新しい基準はキャンセルされました","new_rating_canceled_eed3c4ff":"新しい評価はキャンセルされました","new_rating_created_54125331":"新しい評価が作成されました","rating_title_3b60881e":"タイトルを評価する","rating_updated_7aff90ea":"評価が更新されました","update_criterion_edcbd330":"基準を更新"},"ko":{"description_436c48d7":"설명","edit_rubric":{"buttons":{"create_rubric":"루브릭 만들기","update_rubric":"루브릭 업데이트"},"errors":{"load_rubrics_failed":"루브릭 로드 실패. 다시 시도하시기 바랍니다."},"messages":{"loading_rubric_groups":"루브릭 그룹 로드 중...","loading_rubrics":"루브릭 로드 중..."},"prompts":{"confirm_delete":"이 루브릭을 삭제하시겠습니까?","read_only_rubric":"권한이 없거나 한 곳 이상의 장소에서 사용하고 있으므로 이 루브릭을 편집할 수 없습니다. 변경한 내용은 기존 루브릭을 바탕으로 한 새 루브릭이 됩니다. 계속 진행하시겠습니까?"},"titles":{"find_existing_rubric":"기존 루브릭 찾기"}}},"mi":{"add_criterion_eb9587ef":"Tāpiri Paearu","create_criterion_6df4d4ad":"Waihanga Paearu","criterion_created_42669293":"Paearu kua waihangatia","criterion_long_description_e9a97247":"Paearu Whakāturanga roa","criterion_updated_36c0b3dc":"Paearu kua whakahouhia","description_436c48d7":"Whakāhuatanga","edit_criterion_5e4dadca":"Whakatika Paearu","edit_rubric":{"buttons":{"create_rubric":"Waihanga Rubric","update_rubric":"Whakahōu Rubric"},"change":"Huri","discussion_points_possible":{"one":"%{count} tohu taea","other":"%{count} ngā piro e taea"},"errors":{"load_rubrics_failed":"I rahua te Uta rubrics, ngana anō koa"},"leave_different":"Waiho rerekē","messages":{"loading_rubric_groups":"Uta rōpū rubric ...","loading_rubrics":"Uta rubrics ..."},"prompts":{"confirm_delete":"E tino hiahia ana koe ki te muku i tēnei rubric?","read_only_rubric":"Kaore e taea te whakatika i tēnei rubric, ake na te mea kaore koe e whakāetia ki te mahi, ara kei te mahi rānei i ngā wāhanga nui ake i te kotahi. Ngā huringa e mahia ai e koe ka hua he rubric hou i runga i te rubric tawhito. Haere tonu?"},"titles":{"edit_rubric_rating":"Whakatika Whakatauranga","find_existing_rubric":"Kimihia Rubric Tīariari"}},"max_dd02d615":"nui","new_criterion_canceled_d8c2a655":"Tohu Hou kua whakakoretia","new_rating_canceled_eed3c4ff":"Kua Whakakoretia te Whakatauranga Hou","new_rating_created_54125331":"I waihangatia Whakatauranga hou","rating_title_3b60881e":"Whakatauranga Taitara","rating_updated_7aff90ea":"Whakatauranga Whakahoutia","update_criterion_edcbd330":"Whakauru paearu"},"nb":{"add_criterion_eb9587ef":"Legg til kriterium","create_criterion_6df4d4ad":"Opprett kriterium","criterion_created_42669293":"Kriterium opprettet","criterion_long_description_e9a97247":"Lang beskrivelse av kriterium","criterion_updated_36c0b3dc":"Kriterium oppdatert","description_436c48d7":"Beskrivelse","edit_criterion_5e4dadca":"Endre kriterium","edit_rubric":{"buttons":{"create_rubric":"Opprett vurderingsveiledning","update_rubric":"Oppdater vurderingsveiledning"},"change":"Endre","discussion_points_possible":{"one":"%{count} poeng oppnåelig","other":"%{count} poeng oppnåelig"},"errors":{"load_rubrics_failed":"Lasting av vurderingsveiledning mislyktes. Prøv igjen"},"leave_different":"La være annerledes","messages":{"loading_rubric_groups":"Laster grupper av vurderingsveiledninger …","loading_rubrics":"Laster vurderingsveiledninger…"},"prompts":{"confirm_delete":"Er du sikker på at du vil slette denne vurderingsveiledningen?","read_only_rubric":"Du kan ikke redigere denne vurderingsveiledningen, enten fordi du ikke har tillatelse til det eller fordi den brukes på mer enn ett sted. Endringer du gjør vil resultere i en ny vurderingsveiledning basert på den gamle. Fortsette uansett?"},"titles":{"edit_rubric_rating":"Rediger rangering","find_existing_rubric":"Finner eksisterende vurderingsskjemaer"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nytt kriterium avbrutt","new_rating_canceled_eed3c4ff":"Ny Vurdering Avbrutt","new_rating_created_54125331":"Ny vurdering opprettet","rating_title_3b60881e":"Vurdering Tittel","rating_updated_7aff90ea":"Vurdering Oppdatert","update_criterion_edcbd330":"Oppdater kriterium"},"nb-x-k12":{"add_criterion_eb9587ef":"Legg til kriterium","create_criterion_6df4d4ad":"Opprett kriterium","criterion_created_42669293":"Kriterium opprettet","criterion_long_description_e9a97247":"Lang beskrivelse av kriterium","criterion_updated_36c0b3dc":"Kriterium oppdatert","description_436c48d7":"Beskrivelse","edit_criterion_5e4dadca":"Endre kriterium","edit_rubric":{"buttons":{"create_rubric":"Opprett vurderingskriterier","update_rubric":"Oppdater vurderingskriterier"},"change":"Endre","discussion_points_possible":{"one":"%{count} poeng oppnåelig","other":"%{count} poeng oppnåelig"},"errors":{"load_rubrics_failed":"Lasting av vurderingskriterier mislyktes. Prøv igjen"},"leave_different":"La være annerledes","messages":{"loading_rubric_groups":"Laster grupper av vurderingskriterier …","loading_rubrics":"Laster vurderingskriterier…"},"prompts":{"confirm_delete":"Er du sikker på at du vil slette dette vurderingskriteriet?","read_only_rubric":"Du kan ikke redigere dette vurderingskriteriet, enten fordi du ikke har tillatelse til det eller fordi den brukes på mer enn ett sted. Endringer du gjør vil resultere i et nytt vurderingskriterium basert på den gamle. Fortsette uansett?"},"titles":{"edit_rubric_rating":"Rediger rangering","find_existing_rubric":"Finner eksisterende vurderingskriterier"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nytt kriterium avbrutt","new_rating_canceled_eed3c4ff":"Ny Vurdering Avbrutt","new_rating_created_54125331":"Ny vurdering opprettet","rating_title_3b60881e":"Vurdering Tittel","rating_updated_7aff90ea":"Vurdering Oppdatert","update_criterion_edcbd330":"Oppdater kriterium"},"nl":{"add_criterion_eb9587ef":"Criterium toevoegen","create_criterion_6df4d4ad":"Criterium maken","criterion_created_42669293":"Criterium gemaakt","criterion_long_description_e9a97247":"Criterium voor uitgebreide beschrijving","criterion_updated_36c0b3dc":"Criterium geüpload","description_436c48d7":"Beschrijving","edit_criterion_5e4dadca":"Criterium bewerken","edit_rubric":{"buttons":{"create_rubric":"Rubriek maken","update_rubric":"Rubriek bijwerken"},"change":"Wijzigen","discussion_points_possible":{"one":"%{count} punt mogelijk","other":"%{count} punten mogelijk"},"errors":{"load_rubrics_failed":"Laden van rubriek is mislukt, probeer het opnieuw"},"leave_different":"Anders laten","messages":{"loading_rubric_groups":"Bezig met laden van rubriekgroepen...","loading_rubrics":"Bezig met laden van rubrieken..."},"prompts":{"confirm_delete":"Weet je zeker dat je deze rubriek wilt verwijderen?","read_only_rubric":"Je kunt deze rubriek niet bewerken of omdat je niet gemachtigd bent of omdat deze rubriek op meerdere plekken gebruikt wordt. Iedere wijziging die je aanbrengt, zal als gevolg hebben dat een nieuwe rubriek op de oude gebaseerd zal zijn. Toch doorgaan?"},"titles":{"edit_rubric_rating":"Beoordeling bewerken","find_existing_rubric":"Bestaande rubriek zoeken"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nieuw criterium geannuleerd","new_rating_canceled_eed3c4ff":"Nieuwe beoordeling geannuleerd","new_rating_created_54125331":"Nieuwe beoordeling aangemaakt","rating_title_3b60881e":"Titel beoordeling","rating_updated_7aff90ea":"Beoordeling bijgewerkt","update_criterion_edcbd330":"Criterium bijwerken"},"nn":{"add_criterion_eb9587ef":"Legg til kriterium","create_criterion_6df4d4ad":"Opprett kriterium","criterion_created_42669293":"Kriterium er oppretta","criterion_long_description_e9a97247":"Lang skildring av kriterium","criterion_updated_36c0b3dc":"Kriterium er oppdatert","description_436c48d7":"Skildring","edit_criterion_5e4dadca":"Rediger kriterium","edit_rubric":{"buttons":{"create_rubric":"Opprett vurderingsskjema","update_rubric":"Oppdater vurderingsskjema"},"change":"Endre","discussion_points_possible":{"one":"%{count} mogleg poeng","other":"%{count} moglege poeng"},"errors":{"load_rubrics_failed":"Kan ikkje laste vurderingsskjema, prøv på nytt seinare"},"leave_different":"La vere ulik","messages":{"loading_rubric_groups":"Lastar vurderingsskjema-grupper...","loading_rubrics":"Lastar vurderingsskjema..."},"prompts":{"confirm_delete":"Er du sikker på at du vil slette dette vurderingsskjemaet?","read_only_rubric":"Dette vurderingsskjemaet er i bruk fleire stader. Dersom du redigerer her, vil det bli oppretta ein kopi av vurderingsskjemaet og endringane vil ikkje påverka det opphavlege skjemaet. Vil du halde fram likevel?"},"titles":{"edit_rubric_rating":"Rediger vurdering","find_existing_rubric":"Finn gjeldande vurderingsskjema"}},"max_dd02d615":"maks","new_criterion_canceled_d8c2a655":"Nytt kriterium er avbrote","new_rating_canceled_eed3c4ff":"Ny rangering er avbrote","new_rating_created_54125331":"Ny rangering oppretta","rating_title_3b60881e":"Rangering tittel","rating_updated_7aff90ea":"Ragnering oppdatert","update_criterion_edcbd330":"Oppdater kriterium"},"pl":{"add_criterion_eb9587ef":"Dodaj kryterium","create_criterion_6df4d4ad":"Utwórz kryterium","criterion_created_42669293":"Utworzono kryterium","criterion_long_description_e9a97247":"Długi opis kryterium","criterion_updated_36c0b3dc":"Zaktualizowano kryterium","description_436c48d7":"Opis","edit_criterion_5e4dadca":"Edytuj kryterium","edit_rubric":{"buttons":{"create_rubric":"Utwórz kryteria ocen","update_rubric":"Aktualizuj kryteria ocen"},"change":"Zmień","discussion_points_possible":{"one":"%{count} możliwy punkt","other":"%{count} możliwych punktów"},"errors":{"load_rubrics_failed":"Ładowanie kryteriów ocen nie powiodło się, ponów próbę"},"leave_different":"Zostaw inne","messages":{"loading_rubric_groups":"Trwa ładowanie grup kryteriów ocen...","loading_rubrics":"Trwa ładowanie kryteriów ocen..."},"prompts":{"confirm_delete":"Czy na pewno chcesz usunąć te kryteria ocen?","read_only_rubric":"Nie możesz edytować tych kryteriów ocen, ponieważ nie masz od tego uprawnień lub kryteria są używane w kilku miejscach. Wprowadzenie zmian spowoduje utworzenie nowych kryteriów na podstawie starych.  Kontynuować mimo to?"},"titles":{"edit_rubric_rating":"Edytuj punktację","find_existing_rubric":"Znajdź istniejące kryteria ocen"}},"max_dd02d615":"maks.","new_criterion_canceled_d8c2a655":"Anulowano nowe kryterium","new_rating_canceled_eed3c4ff":"Anulowano nową punktację","new_rating_created_54125331":"Utworzno nową klasyfikację","rating_title_3b60881e":"Nazwa punktacji","rating_updated_7aff90ea":"Zaktualizowano punktację","update_criterion_edcbd330":"Aktualizuj kryterium"},"pt":{"add_criterion_eb9587ef":"Adicionar Critério","create_criterion_6df4d4ad":"Criar Critério","criterion_created_42669293":"Critério criado","criterion_long_description_e9a97247":"Descrição longa de criação","criterion_updated_36c0b3dc":"Critério atualizado","description_436c48d7":"Descrição","edit_criterion_5e4dadca":"Critério de edição","edit_rubric":{"buttons":{"create_rubric":"Criar protocolo","update_rubric":"Atualizar protocolo"},"change":"Alterar","discussion_points_possible":{"one":"%{count} ponto possível","other":"%{count} pontos possíveis"},"errors":{"load_rubrics_failed":"Falha ao carregar protocolos, tente novamente"},"leave_different":"Deixar as diferentes","messages":{"loading_rubric_groups":"Carregando grupos de protocolos...","loading_rubrics":"Carregando protocolos..."},"prompts":{"confirm_delete":"Tem certeza de que deseja excluir este protocolo?","read_only_rubric":"Não é possível editar este protocolo, porque não tem permissão ou o protocolo está a ser utilizado em mais de um local. Qualquer alteração resultará num novo protocolo baseado no antigo. Continuar mesmo assim?"},"titles":{"edit_rubric_rating":"Editar classificação","find_existing_rubric":"Localizar protocolo existente"}},"max_dd02d615":"máx","new_criterion_canceled_d8c2a655":"Novo critério cancelado","new_rating_canceled_eed3c4ff":"Nova classificação cancelada","new_rating_created_54125331":"Nova Classificação Criada","rating_title_3b60881e":"Título de classificação","rating_updated_7aff90ea":"Classificação atualizada","update_criterion_edcbd330":"Critério de Atualização"},"pt-BR":{"add_criterion_eb9587ef":"Adicionar Critério","create_criterion_6df4d4ad":"Criar critério","criterion_created_42669293":"Critério criado","criterion_long_description_e9a97247":"Descrição longa do critério","criterion_updated_36c0b3dc":"Critério atualizado","description_436c48d7":"Descrição","edit_criterion_5e4dadca":"Editar critério","edit_rubric":{"buttons":{"create_rubric":"Criar rubrica","update_rubric":"Atualizar rubrica"},"change":"Alterar","discussion_points_possible":{"one":"%{count} ponto possível","other":"%{count} pontos possíveis"},"errors":{"load_rubrics_failed":"Falha ao carregar rubricas, tente novamente"},"leave_different":"Deixar diferente","messages":{"loading_rubric_groups":"Carregando grupos de rubricas...","loading_rubrics":"Carregando rubricas..."},"prompts":{"confirm_delete":"Tem certeza que deseja excluir esta rubrica?","read_only_rubric":"É impossível editar este rubricas, pois você não tem permissão ou ele está sendo usado em mais de um lugar. Qualquer alteração resultará em uma nova rubrica baseada na antiga. Continuar de qualquer forma?"},"titles":{"edit_rubric_rating":"Editar avaliação","find_existing_rubric":"Localizar rubrica existente"}},"max_dd02d615":"máx.","new_criterion_canceled_d8c2a655":"Novo critério cancelado","new_rating_canceled_eed3c4ff":"Nova Avaliação cancelada","new_rating_created_54125331":"Nova Avaliação Criada","rating_title_3b60881e":"Título da avaliação","rating_updated_7aff90ea":"Avaliação atualizada","update_criterion_edcbd330":"Atualizar critério"},"ru":{"add_criterion_eb9587ef":"Добавить критерий","create_criterion_6df4d4ad":"Создать критерий","criterion_created_42669293":"Критерий создан","criterion_long_description_e9a97247":"Длинное описание критерия","criterion_updated_36c0b3dc":"Критерий обновлен","description_436c48d7":"Описание","edit_criterion_5e4dadca":"Редактировать критерий","edit_rubric":{"buttons":{"create_rubric":"Создать рубрику","update_rubric":"Обновить рубрику"},"change":"Изменить","discussion_points_possible":{"one":"%{count} возможный балл","other":"%{count} возможных баллов"},"errors":{"load_rubrics_failed":"Сбой загрузки рубрик, повторите попытку"},"leave_different":"Оставить разные","messages":{"loading_rubric_groups":"Загрузка групп рубрики...","loading_rubrics":"Загрузка рубрик..."},"prompts":{"confirm_delete":"Действительно хотите удалить эту рубрику?","read_only_rubric":"Нельзя изменить эту рубрику, поскольку отсутствуют разрешения, или рубрика используется в нескольких местах. Внесение изменений приведет к созданию новой рубрики на основе старой.  Продолжить?"},"titles":{"edit_rubric_rating":"Редактировать оценки","find_existing_rubric":"Найти существующую рубрику"}},"max_dd02d615":"макс","new_criterion_canceled_d8c2a655":"Новый критерий отменен","new_rating_canceled_eed3c4ff":"Новая оценка отменена","new_rating_created_54125331":"Новое рейтинг создано","rating_title_3b60881e":"Название оценки","rating_updated_7aff90ea":"Оценка обновлена","update_criterion_edcbd330":"Обновить критерий"},"sl":{"add_criterion_eb9587ef":"Dodaj merilo","create_criterion_6df4d4ad":"Ustvari merilo","criterion_created_42669293":"Merilo je ustvarjeno.","criterion_long_description_e9a97247":"Dolgi opis merila","criterion_updated_36c0b3dc":"Merilo je posodobljeno.","description_436c48d7":"Opis","edit_criterion_5e4dadca":"Uredi merilo","edit_rubric":{"buttons":{"create_rubric":"Ustvari ocenjevalni vodnik","update_rubric":"Posodobi ocenjevalni vodnik"},"change":"Spremeni","discussion_points_possible":{"one":"%{count} možna točka","other":"%{count} možnih točk"},"errors":{"load_rubrics_failed":"Nalaganje ocenjevalnih vodnikov ni uspelo, poskusite znova."},"leave_different":"Pusti različno","messages":{"loading_rubric_groups":"Nalaganje skupin ocenjevalnih vodnikov","loading_rubrics":"Nalaganje ocenjevalnih vodnikov ..."},"prompts":{"confirm_delete":"Ali ste prepričani, da želite izbrisati ta ocenjevalni vodnik?","read_only_rubric":"Ne morete urejati tega ocenjevalnega vodnika; morda nimate dovoljenja ali pa je uporabljen na več kot enem mestu. Z morebitnimi spremembami, ki jih boste uvedli, bo na podlagi starega ocenjevalnega vodnika nastal nov. Ali vseeno želite nadaljevati?"},"titles":{"edit_rubric_rating":"Uredi vrednotenje","find_existing_rubric":"Poišči obstoječi ocenjevalni vodnik"}},"max_dd02d615":"najv.","new_criterion_canceled_d8c2a655":"Novo merilo je preklicano.","new_rating_canceled_eed3c4ff":"Novo vrednotenje je preklicano.","new_rating_created_54125331":"Novo vrednotenje je ustvarjeno.","rating_title_3b60881e":"Naziv vrednotenja","rating_updated_7aff90ea":"Posodobljeno vrednotenje","update_criterion_edcbd330":"Posodobi merilo"},"sv":{"add_criterion_eb9587ef":"Lägg till kriterium","create_criterion_6df4d4ad":"Skapa kriterium","criterion_created_42669293":"Kriterium skapat","criterion_long_description_e9a97247":"Kriterium lång beskrivning","criterion_updated_36c0b3dc":"Uppdaterat kriterium","description_436c48d7":"Beskrivning","edit_criterion_5e4dadca":"Redigera-kriterium","edit_rubric":{"buttons":{"create_rubric":"Skapa matris","update_rubric":"Uppdatera matris"},"change":"Ändra","discussion_points_possible":{"one":"%{count} möjlig poäng","other":"%{count} möjliga poäng"},"errors":{"load_rubrics_failed":"Misslyckades att ladda matrisen, vänligen försök igen"},"leave_different":"Lämna annan","messages":{"loading_rubric_groups":"Ladda matrisgrupp...","loading_rubrics":"Laddar matriser..."},"prompts":{"confirm_delete":"Är du säker på att du vill radera den här matrisen?","read_only_rubric":"Du kan inte redigera matrisen, det beror antingen på att du inte har behörighet eller så används den på annan plats. Om du utför ändringar kommer det resultera i en ny matris baserad på den gamla. Vill du fortsätt ändå?"},"titles":{"edit_rubric_rating":"Redigera ranking","find_existing_rubric":"Hitta befintlig matris"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nytt kriterium avbrutet","new_rating_canceled_eed3c4ff":"Ny ranking avbruten","new_rating_created_54125331":"Nytt omdöme skapades","rating_title_3b60881e":"Ranking titel","rating_updated_7aff90ea":"Ranking uppdaterad","update_criterion_edcbd330":"Uppdatera kriterium"},"sv-x-k12":{"add_criterion_eb9587ef":"Lägg till kriterium","create_criterion_6df4d4ad":"Skapa kriterium","criterion_created_42669293":"Kriterium skapat","criterion_long_description_e9a97247":"Kriterium lång beskrivning","criterion_updated_36c0b3dc":"Uppdaterat kriterium","description_436c48d7":"Beskrivning","edit_criterion_5e4dadca":"Redigera-kriterium","edit_rubric":{"buttons":{"create_rubric":"Skapa matris","update_rubric":"Uppdatera matris"},"change":"Ändra","discussion_points_possible":{"one":"%{count} möjligt poäng","other":"%{count} möjliga poäng"},"errors":{"load_rubrics_failed":"Misslyckades att ladda matrisen, vänligen försök igen"},"leave_different":"Lämna annan","messages":{"loading_rubric_groups":"Ladda matrisgrupp...","loading_rubrics":"Laddar matriser..."},"prompts":{"confirm_delete":"Är du säker på att du vill radera den här matrisen?","read_only_rubric":"Du kan inte redigera matrisen, det beror antingen på att du inte har behörighet eller så används den på annan plats. Om du utför ändringar kommer det resultera i en ny matris baserad på den gamla. Vill du fortsätt ändå?"},"titles":{"edit_rubric_rating":"Redigera ranking","find_existing_rubric":"Hitta befintlig matris"}},"max_dd02d615":"max","new_criterion_canceled_d8c2a655":"Nytt kriterium avbrutet","new_rating_canceled_eed3c4ff":"Ny ranking avbruten","new_rating_created_54125331":"Nytt bedömning skapades","rating_title_3b60881e":"Ranking titel","rating_updated_7aff90ea":"Ranking uppdaterad","update_criterion_edcbd330":"Uppdatera kriterium"},"tr":{"add_criterion_eb9587ef":"Kriter Ekle","create_criterion_6df4d4ad":"Kriter Oluştur","criterion_created_42669293":"Kriter Oluşturuldu","criterion_long_description_e9a97247":"Ölçüt İçin Uzun Açıklama","criterion_updated_36c0b3dc":"Kriter Güncellendi","description_436c48d7":"Açıklama","edit_criterion_5e4dadca":"Kriteri Düzenle","edit_rubric":{"buttons":{"create_rubric":"Değerlendirme Listesi Oluştur","update_rubric":"Değerlendirme Listesini Güncelle"},"change":"Değiştir","discussion_points_possible":{"one":"%{count} olası puan","other":"%{count} olası puan"},"errors":{"load_rubrics_failed":"Denetim listelerinin yüklenmesi başarısız, lütfen tekrar deneyin"},"leave_different":"Leave different","messages":{"loading_rubric_groups":"Denetim Listesi grupları yükleniyor...","loading_rubrics":"Denetim listeleri yükleniyor..."},"prompts":{"confirm_delete":"Bu denetim listesini silmek istediğinize emin misiniz?","read_only_rubric":"İzniniz olmadığı ya da birden fazla yerde kullanıldığı için bu yönergeyi düzenleyemezsiniz. Yapacağınız değişiklikler eski yönergeyi baz alan yeni bir yönerge oluşturacaktır. Devam etmek istiyor musunuz?"},"titles":{"edit_rubric_rating":"Dereceyi Düzenle","find_existing_rubric":"Varolan Denetim Listesi Bul"}}},"uk":{"add_criterion_eb9587ef":"Додати критерій","create_criterion_6df4d4ad":"Створити критерій","criterion_created_42669293":"Критерій створено","criterion_long_description_e9a97247":"Детальний опис критерія","criterion_updated_36c0b3dc":"Критерій оновлено","description_436c48d7":"Опис","edit_criterion_5e4dadca":"Редагувати критерій","edit_rubric":{"buttons":{"create_rubric":"Стврорити рубрику","update_rubric":"Оновити рубрику"},"change":"Змінити","discussion_points_possible":{"one":"%{count} можливий бал","other":"%{count} можливих балів"},"errors":{"load_rubrics_failed":"Не вдалося завантажити рубрики, будь ласка, спробуйте ще раз"},"leave_different":"Залишити різними","messages":{"loading_rubric_groups":"Завантаження груп рубрик...","loading_rubrics":"Завантаження рубрик..."},"prompts":{"confirm_delete":"Ви впевненні, що хочете видалити цю рубрику?","read_only_rubric":"Ви не можете редагувати цю рубрику, через те, що у вас немає дозволу або вона використовується більш, ніж в одному місці. Будь-які внесені зміни призведуть до створення нової рубрики на основі старої рубрики. Все одно продовжити?"},"titles":{"edit_rubric_rating":"Редагувати Рейтинг","find_existing_rubric":"Знайти існуючу рубрику"}},"max_dd02d615":"максимальне значення","new_criterion_canceled_d8c2a655":"Новий Критерій Скасовано","new_rating_canceled_eed3c4ff":"Новий Рейтинг Скасовано","new_rating_created_54125331":"Створено новий рейтинг","rating_title_3b60881e":"Рейтинг заголовку","rating_updated_7aff90ea":"Рейтинг оновлено","update_criterion_edcbd330":"Оновити критерій"},"zh-Hans":{"add_criterion_eb9587ef":"添加标准","create_criterion_6df4d4ad":"创建标准","criterion_created_42669293":"创建的标准","criterion_long_description_e9a97247":"标准长说明","criterion_updated_36c0b3dc":"更新的标准","description_436c48d7":"描述","edit_criterion_5e4dadca":"编辑标准","edit_rubric":{"buttons":{"create_rubric":"创建评分标准","update_rubric":"更新评分标准说明"},"change":"更改","discussion_points_possible":{"one":"满分为 %{count} 分","other":"满分为 %{count} 分"},"errors":{"load_rubrics_failed":"加载评分标准说明失败，请重试"},"leave_different":"保留不同","messages":{"loading_rubric_groups":"正在加载评分标准说明组...","loading_rubrics":"正在加载评分标准说明..."},"prompts":{"confirm_delete":"是否确定要删除此评分标准说明?","read_only_rubric":"您无法编辑此评分标准说明，可能是因为您没有相关权限或它正用于多个地方，执行任何更改将导致基于旧题目生成新评分标准说明。是否仍要继续?"},"titles":{"edit_rubric_rating":"编辑评分","find_existing_rubric":"查找现有评分标准说明"}},"max_dd02d615":"最大","new_criterion_canceled_d8c2a655":"已取消新标准","new_rating_canceled_eed3c4ff":"新评分已取消","new_rating_created_54125331":"已创建新评级","rating_title_3b60881e":"评分标题","rating_updated_7aff90ea":"评分已更新","update_criterion_edcbd330":"更新标准"},"zh-Hant":{"add_criterion_eb9587ef":"添加標準","create_criterion_6df4d4ad":"創建標準","criterion_created_42669293":"已創建標準","criterion_long_description_e9a97247":"標準完整描述","criterion_updated_36c0b3dc":"已更新標準","description_436c48d7":"說明","edit_criterion_5e4dadca":"編輯標準","edit_rubric":{"buttons":{"create_rubric":"創建題目","update_rubric":"更新題目"},"change":"更改","discussion_points_possible":{"one":"%{count} 個點可能","other":"可能的分數 %{count}"},"errors":{"load_rubrics_failed":"載入題目失敗，請再試一次"},"leave_different":"保留不同的","messages":{"loading_rubric_groups":"正在載入題目群組...","loading_rubrics":"正在載入題目..."},"prompts":{"confirm_delete":"是否確定要刪除此題目？","read_only_rubric":"您不能編輯此題目，可能是因為您沒有許可權，或者因為其被用於一個以上的地方。您所做的任何更改都將會產生以舊題目為基礎的新題目。仍然繼續？"},"titles":{"edit_rubric_rating":"編輯評級","find_existing_rubric":"尋找現有題目"}},"max_dd02d615":"上限","new_criterion_canceled_d8c2a655":"已取消新標準","new_rating_canceled_eed3c4ff":"已取消新評級","new_rating_created_54125331":"已創建新評分","rating_title_3b60881e":"評級標題","rating_updated_7aff90ea":"評級已更新","update_criterion_edcbd330":"更新標準"}}'))
var oe=u["default"].scoped("edit_rubric")
var ae=i("3O+N")
var se=i.n(ae)
Object(l["a"])(JSON.parse('{"ar":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"سيؤدي ترك إجمالي نقاط المهمة في %{assignmentPoints} وإجمالي نقاط العنوان في %{rubricPoints} إلى أعلى درجة %{toPercentage_pointRatio} ممكنة بالنسبة لإرسالات الطلاب التي تم تقييم درجاتها باستخدام العنوان."},"titles":{"update_assignment_points":"هل تريد تغيير نقاط المهمة لمطابقة العنوان؟"}}},"cy":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Wrth adael cyfanswm pwyntiau’r aseiniad ar %{assignmentPoints} a chyfanswm pwyntiau’r cyfarwyddyd sgorio ar %{rubricPoints}, y sgôr uchaf posib ar gyfer cyflwyniadau myfyrwyr a gaiff eu graddio gyda’r cyfarwyddyd sgorio hwn fydd %{toPercentage_pointRatio}."},"titles":{"update_assignment_points":"Newid pwyntiau’r aseiniad er mwyn bod yr un fath â’r cyfarwyddyd sgorio?"}}},"da":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Opgavens samlede antal point %{assignmentPoints} og rubrikkens samlede antal point %{rubricPoints} resulterer i et maksimalt resultat på %{toPercentage_pointRatio} for afleveringer fra de studerende, som blev bedømt med rubrikken."},"titles":{"update_assignment_points":"Ændre opgavepoint for at matche rubrik?"}}},"da-x-k12":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Opgavens samlede antal point %{assignmentPoints} og vurderingskriteriets samlede antal point %{rubricPoints} resulterer i et maksimalt resultat på %{toPercentage_pointRatio} for afleveringer fra de elver, som blev bedømt med vurderingskriteriet."},"titles":{"update_assignment_points":"Ændre opgavepoint for at matche vurderingskriterium?"}}},"de":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Bleibt die Gesamtpunktzahl der Aufgabe bei %{assignmentPoints} und die Gesamtpunktzahl des Bewertungsschemas bei %{rubricPoints}, führt dies zu einem maximalen Punktwert von %{toPercentage_pointRatio} der von Studenten abgegebenen Aufgaben, die nach dem Bewertungsschema benotet wurden."},"titles":{"update_assignment_points":"Die Punkte der Aufgaben ändern, um sie dem Bewertungsschema anzugleichen?"}}},"el":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Αν η εργασία παραμείνει με %{assignmentPoints} συνολικά μόρια και η ρουμπρίκα με %{rubricPoints} συνολικά μόρια, τότε η μέγιστη δυνατή βαθμολογία που μπορεί να επιτευχθεί είναι %{toPercentage_pointRatio} για υποβολές σπουδαστών που έχουν βαθμολογηθεί με τη ρουμπρίκα."},"titles":{"update_assignment_points":"Αλλαγή μορίων της εργασίας ώστε να ταιριάζουν με τη ρουμπρίκα;"}}},"en-AU":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the assignment\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change assignment points to match rubric?"}}},"en-AU-x-unimelb":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the assignment\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change assignment points to match rubric?"}}},"en-CA":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the assignment\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change assignment points to match rubric?"}}},"en-GB":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the assignment\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change assignment points to match rubric?"}}},"en-GB-x-lbs":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the task\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change task points to match rubric?"}}},"en-GB-x-ukhe":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Leaving the assignment\'s total points at %{assignmentPoints} and the rubric\'s total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric."},"titles":{"update_assignment_points":"Change assignment points to match rubric?"}}},"es":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"El dejar los puntos totales de la tarea en %{assignmentPoints} y los puntos totales de la rúbrica en %{rubricPoints} dará lugar a un puntaje máximo posible de %{toPercentage_pointRatio} para las entregas de los estudiantes calificados con la rúbrica."},"titles":{"update_assignment_points":"¿Cambiar los puntos de la tarea para que coincidan con la rúbrica?"}}},"fa":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"قرار دادن امتیاز کل تکلیف در %{assignmentPoints} و امتیاز کل دستورالعمل ارزیابی در %{rubricPoints} به حداکثر نمره احتمالی %{toPercentage_pointRatio} برای موردهای ارسالی نمره گذاری شده با استفاده از دستورالعمل ارزیابی منجر خواهد شد."},"titles":{"update_assignment_points":"امتیازهای تکلیف را برای مطابقت با دستورالعمل ارزیابی تغییر می دهید؟"}}},"fi":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Kun tehtävän pisteiksi yhteensä jätetään %{assignmentPoints} ja rubriikin pisteiksi yhteensä jätetään %{rubricPoints}, saadaan tulokseksi suurin mahdollinen kohteen %{toPercentage_pointRatio} pistemäärä rubriikin avulla arvosteluille opiskelijan lähetyksille."},"titles":{"update_assignment_points":"Vaihdetaanko tehtävän pisteitä täsmäämään rubriikin kanssa?"}}},"fr":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Laisser le nombre total de points du travail sur %{assignmentPoints} et celui de la rubrique sur %{rubricPoints} résultera en un score maximum possible de %{toPercentage_pointRatio}  pour les soumissions d\'étudiant notées avec la rubrique."},"titles":{"update_assignment_points":"Modifier le nombre de points du travail pour l\'aligner avec la rubrique ?"}}},"fr-CA":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Laisser le nombre total de points de la tâche sur %{assignmentPoints} et celui de la rubrique sur %{rubricPoints} résultera en un score maximum possible de %{toPercentage_pointRatio} pour les envois d\'étudiant notées avec la rubrique."},"titles":{"update_assignment_points":"Modifier le nombre de points de la tâche pour l\'aligner avec la rubrique?"}}},"he":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"השארת סך נקודות המשימה ב %{assignmentPoints}  והרובריקה מספר נקודות כולל ב %{rubricPoints}  יגרור ציון מרבי אפשרי של %{toPercentage_pointRatio} להגשות התלמיד אשר הוערך באמצעות הרובריקה."},"titles":{"update_assignment_points":"לשנות נקודות משימה כדי שיתאימו לרובריקה?"}}},"ht":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Kite total pwen sesyon an a %{assignmentPoints} ak total pwen ribrik la a %{rubricPoints} ap tradwui pa yon nòt maksimòm posib de %{toPercentage_pointRatio} pou soumisyon elèv ki evalye ak ribrik la."},"titles":{"update_assignment_points":"Chanje pwen sesyon yo pou koresponn a ribrik la?"}}},"hu":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Ha a feladat összpontszámát /%{assignmentPoints}/ és az értékelőtábla pontjait /%{rubricPoints}/ így hagyja, akkor a maximálisan elérhető pontszám %{toPercentage_pointRatio} százaléka lesz elérhető minden olyan hallgató számára, akit az értékelőtáblával értékel."},"titles":{"update_assignment_points":"Feladat pontjainak módosítása az értékelőtáblához illeszkedően? "}}},"hy":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Հանձնարարության %{assignmentPoints} ընդհանուր գնահատականի և ռուբրիկի %{rubricPoints}  ընդհանուր գնահատականի սահմանման դեպքում ռուբրիկի շրջանակներում ունկնդրի կողմից ուղարկված աշխատանքի առավելագույն գնահատականը կարող է կազմել %{toPercentage_pointRatio}:   "},"titles":{"update_assignment_points":"Փոխե՞լ հանձնարարության կետերը ըստ ռուբրիկների:"}}},"is":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Ef heildarpunktar verkefnis eru %{assignmentPoints} og heildarpunktar matsviðmiðs eru %{rubricPoints} verður möguleg hámarkseinkunn%{toPercentage_pointRatio} fyrir skil nemanda sem metin eru með matsviðmiði."},"titles":{"update_assignment_points":"Breyta verkefnapunktum í samræmi við matsviðmið?"}}},"it":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Se si lasciano i punti totali dei compiti impostati su %{assignmentPoints} e i punti totali della rubrica su %{rubricPoints} si otterrà un punteggio massimo possibile di %{toPercentage_pointRatio} per le consegne degli studenti valutate con la rubrica."},"titles":{"update_assignment_points":"Modificare i punteggi dei compiti in base alla rubrica?"}}},"ja":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"%{assignmentPoints}に課題の合計ポイントと%{rubricPoints}にルブリックの合計ポイントを残すことは、ルブリックの採点された受講生の提出物にとって %{toPercentage_pointRatio}の最高得点になる可能性があります。"},"titles":{"update_assignment_points":"ルブリックに合わせて課題ポイントを変更しますか？"}}},"ko":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"이 과제는 %{assignmentPoints}점이 가능하지만 이 루브릭과 일치하도록 %{rubricPoints}점이 가능하도록 바꾸시겠습니까?"}}},"mi":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Mahue tapeke ngā o te ohipa i %{assignmentPoints} me te tapeke ngā o te rubric i %{rubricPoints} ka hua i roto i te kaute taea mōrahi o te %{toPercentage_pointRatio} mō ngā tāpaetanga ākonga kōeketia ki te rubric."},"titles":{"update_assignment_points":"Ngā Huri whaktaunga ki te ōrite rubric?"}}},"nb":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Gir oppgavens totale poengsum til %{assignmentPoints} og vurderingsveiledningens samlede poeng på %{rubricPoints} vil resultere i en størst mulig poengsum på %{toPercentage_pointRatio} for studentinnleveringer karaktersatt med vurderingsveiledningen."},"titles":{"update_assignment_points":"Endre oppgavepoeng for å matche vurderingsveiledningen?"}}},"nb-x-k12":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Gir oppgavens totale resultat til %{assignmentPoints} og vurderingskriterienes samlede poeng på %{rubricPoints} vil resultere i en størst mulig resultat på %{toPercentage_pointRatio} for elevinnleveringer vurdert med vurderingskriteriene."},"titles":{"update_assignment_points":"Endre oppgavepoeng for å matche vurderingskriteriet?"}}},"nl":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Het instellen van de totale punten van de opdracht %{assignmentPoints} op en de totale rubiek op %{rubricPoints} zal tot een maximale score leiden van %{toPercentage_pointRatio} voor inzendingen van cursisten beoordeeld met de rubriek."},"titles":{"update_assignment_points":"Opdrachtpunten wijzigen om te matchen met rubriek?"}}},"nn":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Med total poengsum for oppgåva på  %{assignmentPoints} og totalsum i vurderingsskjema på %{rubricPoints}, blir resultatet ein høgast mogleg poengsum på %{toPercentage_pointRatio} for studentinnleveringar som har fått vurdering etter dette vurderingsskjemaet."},"titles":{"update_assignment_points":"Vil du endre oppgåvepoeng slik at dei samsvarer med vurderingsskjemaet?"}}},"pl":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Pozostawienie sumy punktów za zadanie jako %{assignmentPoints} i sumę punktów w rubryce jako %{rubricPoints} spowoduje maksymalny możliwy wynik %{toPercentage_pointRatio} dla zgłoszeń studentów ocenionych w rubryce."},"titles":{"update_assignment_points":"Zmienić punkty zadania aby pasowały do rubryki?"}}},"pt":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Permitir a pontuação total para esta tarefa %{assignmentPoints} ea percentagem geral de pontos em %{rubricPoints} que vai permitir uma pontuação máxima possível de %{toPercentage_pointRatio} para as entregas de classificaçãodosalunos."},"titles":{"update_assignment_points":"Alterar os pontos da tarefa para corresponder à geral?"}}},"pt-BR":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Deixar os pontos totais da tarefa como %{assignmentPoints} e o total de pontos da rubrica como %{rubricPoints} resultará em uma pontuação máxima possível de %{toPercentage_pointRatio} para inscrições de alunos avaliados com a rubrica."},"titles":{"update_assignment_points":"Alterar a pontuação da tarefa para corresponder à rubrica?"}}},"ru":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Если вы оставите общую сумму баллов за задание в значении %{assignmentPoints} и общую сумму баллов за рейтинг успеваемости в значении  %{rubricPoints}, это даст максимально возможный балл %{toPercentage_pointRatio} ха письменные работы студентов, которые оцениваются для рейтинга успеваемости."},"titles":{"update_assignment_points":"Изменить баллы за задание, чтобы соответствовать рейтингу успеваемости?"}}},"sl":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Če skupno število točk naloge ostane %{assignmentPoints}, skupno število točk ocenjevalnega vodnika pa %{rubricPoints}, bo pri oddajah študentov, ocenjenih z ocenjevalnim vodnikom, najvišji možni rezultat znašal %{toPercentage_pointRatio}."},"titles":{"update_assignment_points":"Ali želite spremeniti točke naloge, da bodo ustrezale ocenjevalnemu vodniku?"}}},"sv":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Uppgiftens totala poäng är %{assignmentPoints} och matrisens totala poäng är %{rubricPoints} resulterar i ett högsta poäng på %{toPercentage_pointRatio} för studenters inlämningar som bedömts med matrisen."},"titles":{"update_assignment_points":"Ändra uppgiftens poäng så att den matchar matrisen?"}}},"sv-x-k12":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Uppgiftens totala antal poäng är %{assignmentPoints} och matrisens totala antal poäng är %{rubricPoints} resulterar i ett högsta resultat på %{toPercentage_pointRatio} för elevers inlämningar som bedömts med matrisen."},"titles":{"update_assignment_points":"Ändra uppgiftens poäng så att den matchar matrisen?"}}},"tr":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Ödevin toplam puanını %{assignmentPoints} ve değerlendirme listesinin toplam puanını %{rubricPoints}olarak bırakmak bu değerlendirme listesine göre notlanırılmış öğrenci gönderileri için  %{toPercentage_pointRatio}maksimum olası puanla sonuçlanacaktır."},"titles":{"update_assignment_points":"Değerlendirme listesi ile eşleşmesi için ödev puanları değiştirilsin mi?"}}},"uk":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"Якщо ви залишите загальну кількість очок завдання в  %{assignmentPoints} і загальну кількість очок рубрики в %{rubricPoints}, то ви отримаєте  максимально можливий бал %{toPercentage_pointRatio} для студентських відправлень оцінених з рубрикою."},"titles":{"update_assignment_points":"Змінити бали завдання для відповідності рубрики?"}}},"zh-Hans":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"在%{assignmentPoints} 留下的作业总分，以及在%{rubricPoints}的评分细则总分将为学生的提交评分构成%{toPercentage_pointRatio}的最大可能得分。"},"titles":{"update_assignment_points":"更改作业分值以配合评分细则？"}}},"zh-Hant":{"change_points_possible_to_match_rubric_dialog":{"prompts":{"update_assignment_points":"如果將本作業總得分設置為 %{assignmentPoints}，并將評量總得分設置為 %{rubricPoints}，則將導致接受評量的學生提交成績達到最大比例分值 %{toPercentage_pointRatio}。"},"titles":{"update_assignment_points":"是否改變本次作業分值，以便符合評量分數？"}}}}'))
u["default"].scoped("change_points_possible_to_match_rubric_dialog")
i("DfGn")
var ce=se.a.default
var _e=ce.template,de=ce.templates=ce.templates||{}
var ue="changePointsPossibleToMatchRubricDialog"
de[ue]=_e((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c="",_=i.helperMissing,d=this.escapeExpression
c+='<p title="'+d((a=i.t||t&&t.t,s={hash:{scope:"change_points_possible_to_match_rubric_dialog"},data:r},a?a.call(t,"titles.update_assignment_points","Change assignment points to match rubric?",s):_.call(t,"t","titles.update_assignment_points","Change assignment points to match rubric?",s)))+'">\n  '
o=(a=i.toPercentage||t&&t.toPercentage,s={hash:{},data:r},a?a.call(t,t&&t.pointRatio,s):_.call(t,"toPercentage",t&&t.pointRatio,s))
c+=d((a=i.t||t&&t.t,s={hash:{toPercentage_pointRatio:o,assignmentPoints:t&&t.assignmentPoints,rubricPoints:t&&t.rubricPoints,scope:"change_points_possible_to_match_rubric_dialog"},data:r},a?a.call(t,"prompts.update_assignment_points","Leaving the assignment's total points at %{assignmentPoints} and the rubric's total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric.",s):_.call(t,"t","prompts.update_assignment_points","Leaving the assignment's total points at %{assignmentPoints} and the rubric's total points at %{rubricPoints} will result in a maximum possible score of %{toPercentage_pointRatio} for student submissions graded with the rubric.",s)))+"\n</p>\n"
return c}))
var le=de[ue]
var pe=i("5Ky4")
i("hX8w")
i("jYyc")
i("Z+Ib")
i("YGE8")
i("JI1W")
i("p6Wi")
i("7LJr")
i("OShF")
i("MWZS")
i("teYS")
i("s/PJ")
i("TBRb")
const me={htmlBody:null,hidePoints:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
t.forEach(e=>{e.find(".toggle_for_hide_points").addClass("hidden")})},showPoints:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
t.forEach(e=>{e.find(".toggle_for_hide_points").removeClass("hidden")})},localizedPoints:e=>oe.n(e,{precision:2,strip_insignificant_zeros:true}),updateCriteria(e){e.find(".criterion:not(.blank)").each((function(e){g()(this).attr("id","criterion_"+(e+1))}))},updateAddCriterionLinks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!e.is(":visible")||0===e.find("#add_criterion_holder").length)return
g()("#add_criterion_container").remove()
e.find("#add_criterion_holder").append(g()("<span/>").attr("id","add_criterion_container"))
setTimeout(()=>{c.a.render(Object(r["a"])(b,{rubric:e,duplicateFunction:me.copyCriterion}),document.getElementById("add_criterion_container"))
t&&e.find('"#add_criterion_container '.concat(t,":visible")).focus()},0)},copyCriterion(e,t){const i=me.addCriterion(e,t)
i.removeClass("new_criterion")
i.find(".criterion_id").text("blank")
i.find(".rating_id").text("blank")
me.editCriterion(i)},addCriterion(e,t){let i
i="undefined"!==typeof t?e.find(".criterion:not(.blank):eq(".concat(t,")")):e.find(".criterion.blank:first")
const n=i.clone(true)
n.addClass("new_criterion")
n.removeClass("blank")
e.find(".summary").before(n.show())
const r=n.hasClass("learning_outcome_criterion")?".icon-plus":null
me.updateCriteria(e)
me.sizeRatings(n)
me.updateAddCriterionLinks(e,r)
return n},addNewRatingColumn(e){const t=e.parents(".rubric")
e.addClass("add_column")
if(t.hasClass("editing")){const i=e.clone(true).removeClass("edge_rating"),r=J["a"].parse(e.find(".points").text()),o=e.parents(".criterion"),a=(o.find(".criterion_points"),{description:"",rating_long_description:"",min_points:r}),s=e.hasClass("add_left")
if(e.hasClass("add_left")){const t=J["a"].parse(e.prev(".rating").find(".points").text())
a.points=Math.round((r+t)/2)
a.points!=r&&a.points!=t||(a.points=r)}else{const t=J["a"].parse(e.next(".rating").find(".points").text())
a.min_points=t
a.points=Math.round((r+t)/2)
a.points!=r&&a.points!=t||(a.points=t)}i.fillTemplateData({data:Object(n["a"])({},a,{min_points:me.localizedPoints(a.min_points),points:me.localizedPoints(a.points)})})
me.flagInfinitesimalRating(i,o.find(".criterion_use_range").attr("checked"))
if(s)e.before(i)
else{i.addClass("new_rating")
e.after(i)}const c=i.prev(".rating")
c&&c.fillTemplateData({data:{min_points:a.points}})
me.hideCriterionAdd(t)
me.updateCriterionPoints(o,true)
me.sizeRatings(o)
setTimeout(()=>{g.a.screenReaderFlashMessageExclusive(oe.t("New Rating Created"))
g()(".new_rating").find(".edit_rating_link").click()},100)}return false},onFindOutcome(e){let t,i=g()(".rubric table.rubric_table:visible:first")
i.find(".criterion.learning_outcome_"+e.id).find(".delete_criterion_link").click()
me.addCriterion(i)
t=i.find(".criterion:not(.blank):last")
t.removeClass("new_criterion")
t.toggleClass("ignore_criterion_for_scoring",!e.useForScoring)
t.find(".mastery_points").val(e.get("mastery_points"))
t.addClass("learning_outcome_criterion")
t.find(".outcome_sr_content").attr("aria-hidden",false)
t.find(".learning_outcome_id").text(e.id)
t.find(".hide_when_learning_outcome").hide()
t.find(".criterion_points").val(e.get("ratings")[0].points).blur()
for(let i=0;i<e.get("ratings").length-2;i++)t.find(".rating:not(.blank):first").addClass("add_column").click()
t.find(".rating:not(.blank)").each((function(t){const i=e.get("ratings")[t]
g()(this).fillTemplateData({data:i})}))
t.find(".cancel_button").click()
t.find("div.long_description").remove()
t.find("textarea.long_description").text(e.get("description"))
t.find(".long_description_holder").toggleClass("empty",!e.get("description"))
t.find(".description_title").text(e.get("title"))
t.find(".criterion_description").val(e.get("title")).focus().select()
t.find(".mastery_points").text(e.get("mastery_points"))
t.find(".edit_criterion_link").remove()
t.find(".rating .links").remove()
me.updateAddCriterionLinks(i,".icon-search")
t.find(".long_description_holder").show()},hideCriterionAdd(e){e.find(".add_right, .add_left, .add_column").removeClass("add_left add_right add_column")},updateRubricPoints(e){let t=0
e.find(".criterion:not(.blank):not(.ignore_criterion_for_scoring) .criterion_points").each((function(){const e=J["a"].parse(g()(this).val())
isNaN(e)||(t+=e)}))
t=ge(t,2)
e.find(".rubric_total").text(me.localizedPoints(t))},updateCriterionPoints(e,t){const i=g.a.makeArray(e.find(".rating")).reverse()
let n=-1
let r=J["a"].parse(e.find(".criterion_points").val())
const o=e.find(".criterion_use_range").attr("checked")
r=Number.isNaN(r)?5:ge(r,2)
e.find(".rating:first .points").text(me.localizedPoints(r))
g.a.each(i,(e,t)=>{const i=g()(t)
const r=i.getTemplateData({textValues:["points"]})
r.points=J["a"].parse(r.points)
r.points<n&&(r.points=n)
r.points=ge(r.points,2)
n=r.points
r.points=me.localizedPoints(r.points)
i.fillTemplateData({data:r})
me.flagInfinitesimalRating(i,o)})
t&&n>r&&(r=n)
e.find(".criterion_points").val(me.localizedPoints(r))
e.find(".display_criterion_points").text(me.localizedPoints(r))
if(!e.data("criterion_points")||J["a"].parse(e.data("criterion_points"))!==r){if(!e.data("criterion_points")){let i=e.context.defaultValue
t&&(i=e.find(".rating:first .points").text())
e.data("criterion_points",J["a"].parse(i))}const i=e.data("criterion_points")
const n=r
const a=e.find(".rating")
g()(a[0]).find(".points").text(me.localizedPoints(r))
let s=r
for(let e=1;e<a.length;e++){const t=J["a"].parse(g()(a[e]).find(".points").text())
let r=t/i*n;(Number.isNaN(t)||0===t&&s>0&&e<a.length-1)&&(r=s-Math.round(s/(a.length-e)))
Number.isNaN(r)?r=0:r>s&&(r=s-1)
r=me.localizedPoints(Math.max(0,r))
s=r
g()(a[e]).find(".points").text(r)
me.flagInfinitesimalRating(g()(a[e]),o)
if(e>0){g()(a[e-1]).find(".min_points").text(r)
me.flagInfinitesimalRating(g()(a[e-1]),o)}}e.data("criterion_points",J["a"].parse(r))}me.updateRubricPoints(e.parents(".rubric"))},flagInfinitesimalRating(e,t){const i=e.getTemplateData({textValues:["points","min_points"]})
if(J["a"].parse(i.min_points)===J["a"].parse(i.points)){e.addClass("infinitesimal")
e.find(".range_rating").hide()}else{e.removeClass("infinitesimal")
e.find(".range_rating").showIf(t)}},capPointChange(e,t,i,n){const r=t.getTemplateData({textValues:[n]})
return me.localizedPoints(i(e,J["a"].parse(r[n])))},editCriterion(e){if(!e.parents(".rubric").hasClass("editing"))return
if(e.hasClass("learning_outcome_criterion"))return
e.find(".edit_criterion_link").click()},originalSizeRatings(){const e=g()(".rubric:not(.rubric_summary) .criterion:visible")
if(e.length){const t=g.a.windowScrollTop()
e.each((function(){const e=g()(this),t=e.find(".ratings:visible")
if(t.length){const i=t.find(".rating .container").css("height",""),n=Math.max(t.height(),e.find(".criterion_description .container .description_content").height())
i.css("height",n-10+"px")}}))
me.htmlBody.scrollTop(t)}},rubricData(e){e=e.filter(":first")
e.hasClass("editing")||(e=e.next(".editing"))
e.find(".criterion_points").each((function(){const e=g()(this).val()
g()(this).parents(".criterion").find(".display_criterion_points").text(e)}))
var t=e.getFormData()
e.find(".rubric_title .title").text(t.title)
e.find(".rubric_table caption .title").text(t.title)
t=e.getTemplateData({textValues:["title","description","rubric_total","rubric_association_id"]})
let i={}
i["rubric[title]"]=t.title
i["rubric[points_possible]"]=t.rubric_total
i["rubric_association[use_for_grading]"]=e.find(".grading_rubric_checkbox").attr("checked")?"1":"0"
i["rubric_association[hide_score_total]"]="0"
"0"==i["rubric_association[use_for_grading]"]&&(i["rubric_association[hide_score_total]"]=e.find(".totalling_rubric_checkbox").attr("checked")?"1":"0")
i["rubric_association[hide_points]"]=e.find(".hide_points_checkbox").attr("checked")?"1":"0"
i["rubric_association[hide_outcome_results]"]=e.find(".hide_outcome_results_checkbox").attr("checked")?"1":"0"
i["rubric[free_form_criterion_comments]"]=e.find(".rubric_custom_rating").attr("checked")?"1":"0"
i["rubric_association[id]"]=t.rubric_association_id
i.rubric_association_id=t.rubric_association_id
let n=0
e.find(".criterion:not(.blank)").each((function(){const e=g()(this)
const t=!!e.find(".criterion_use_range").attr("checked")
if(!e.hasClass("learning_outcome_criterion")){const t=e.find("input.mastery_points").val()
e.find("span.mastery_points").text(J["a"].validate(t)?t:0)}const r=e.getTemplateData({textValues:["description","display_criterion_points","learning_outcome_id","mastery_points","long_description","criterion_id"]})
e.hasClass("learning_outcome_criterion")&&(r.long_description=e.find("textarea.long_description").val())
r.mastery_points=e.find("span.mastery_points").text()
const o="rubric[criteria]["+n+"]"
i[o+"[description]"]=r.description
i[o+"[points]"]=r.display_criterion_points
i[o+"[learning_outcome_id]"]=r.learning_outcome_id
i[o+"[long_description]"]=r.long_description
i[o+"[id]"]=r.criterion_id
i[o+"[criterion_use_range]"]=t
e.hasClass("ignore_criterion_for_scoring")&&(i[o+"[ignore_for_scoring]"]="1")
r.learning_outcome_id&&(i[o+"[mastery_points]"]=r.mastery_points)
let a=0
e.find(".rating").each((function(){const e=g()(this)
const t=e.getTemplateData({textValues:["description","rating_long_description","points","rating_id"]})
const n=o+"[ratings]["+a+"]"
i[n+"[description]"]=t.description
i[n+"[long_description]"]=t.rating_long_description
i[n+"[points]"]=J["a"].parse(t.points)
i[n+"[id]"]=t.rating_id
a++}))
n++}))
i.title=i["rubric[title]"]
i.points_possible=J["a"].parse(i["rubric[points_possible]"])
i.rubric_id=e.attr("id").substring(7)
i=g.a.extend(i,g()("#rubrics #rubric_parameters").getFormData())
return i},addRubric(){const e=g()("#default_rubric").clone(true).attr("id","rubric_new").addClass("editing")
e.find(".edit_rubric").remove()
const t=g()("#edit_rubric").clone(true).show().removeAttr("id").addClass("edit_rubric")
const i=t.find("#edit_rubric_form")
e.find(".rubric_table").append(t)
i.attr("method","POST").attr("action",g()("#add_rubric_url").attr("href"))
const n=g()("#assignment_show .points_possible,#rubrics.rubric_dialog .assignment_points_possible")
const r=g()("#quiz_show,#quiz_edit_wrapper")
i.find(".rubric_grading").showIf(n.length>0&&0===r.length)
return e},editRubric(e,t){let i,n,r,o
g()("#add_criterion_container").remove()
me.isEditing=true
i=e.clone(true).addClass("editing")
i.find(".edit_rubric").remove()
n=i.getTemplateData({textValues:["use_for_grading","free_form_criterion_comments","hide_score_total","hide_points","hide_outcome_results"]})
e.hide().after(i.show())
r=g()("#edit_rubric").clone(true).show().removeAttr("id").addClass("edit_rubric")
o=r.find("#edit_rubric_form")
i.find(".rubric_table").append(r)
i.find(":text:first").focus().select()
o.find(".grading_rubric_checkbox").attr("checked","true"===n.use_for_grading).triggerHandler("change")
o.find(".rubric_custom_rating").attr("checked","true"===n.free_form_criterion_comments).triggerHandler("change")
o.find(".totalling_rubric_checkbox").attr("checked","true"===n.hide_score_total).triggerHandler("change")
o.find(".hide_points_checkbox").attr("checked","true"===n.hide_points).triggerHandler("change")
o.find(".hide_outcome_results_checkbox").attr("checked","true"===n.hide_outcome_results).triggerHandler("change")
const a=oe.t("buttons.create_rubric","Create Rubric")
const s=oe.t("buttons.update_rubric","Update Rubric")
o.find(".save_button").text("rubric_new"==i.attr("id")?a:s)
o.attr("method","PUT").attr("action",t)
me.sizeRatings()
me.updateAddCriterionLinks(i)
return i},hideEditRubric(e,t){me.isEditing=false
e=e.filter(":first")
e.hasClass("editing")||(e=e.next(".editing"))
e.removeClass("editing")
e.find(".edit_rubric").remove()
if(t){if("rubric_new"!=e.attr("id")){const t=e.prev(".rubric")
t.show()
t.find(".rubric_title .title").focus()}else g()(".add_rubric_link").show().focus()
e.remove()}else e.find(".rubric_title .links").show()},updateRubric(e,t){e.find(".criterion:not(.blank)").remove()
const i=e.find(".rating:first").clone(true).removeAttr("id")
e.fillTemplateData({data:t,id:"rubric_"+t.id,hrefValues:["id","rubric_association_id"],avoid:".criterion"})
e.fillFormData(t)
me.isEditing=false
let r=g.a.replaceTags(e.find(".edit_rubric_url").attr("href"),"rubric_id",t.id)
e.find(".edit_rubric_link").attr("href",r).showIf(t.permissions.update_association)
r=g.a.replaceTags(e.find(".delete_rubric_url").attr("href"),"association_id",t.rubric_association_id)
e.find(".delete_rubric_link").attr("href",r).showIf(t.permissions.delete_association)
e.find(".find_rubric_link").showIf(t.permissions.update_association&&!g()("#rubrics").hasClass("raw_listing"))
e.find(".criterion:not(.blank) .ratings").empty()
t.criteria.forEach(t=>{t.display_criterion_points=me.localizedPoints(t.points)
t.criterion_id=t.id
const r=e.find(".criterion.blank:first").clone(true).show().removeAttr("id")
r.removeClass("blank")
r.fillTemplateData({data:t,htmlValues:["long_description"]})
r.find(".long_description_holder").toggleClass("empty",!t.long_description)
r.find(".criterion_use_range").attr("checked",true===t.criterion_use_range)
r.find(".ratings").empty()
r.find(".hide_when_learning_outcome").showIf(!t.learning_outcome_id)
r.toggleClass("learning_outcome_criterion",!!t.learning_outcome_id)
r.toggleClass("ignore_criterion_for_scoring",!!t.ignore_for_scoring)
r.find(".outcome_sr_content").attr("aria-hidden",!t.learning_outcome_id)
if(t.learning_outcome_id){r.find(".long_description_holder").show()
r.find("div.long_description").remove()
t.long_description&&r.find(".long_description_link").removeClass("hidden")}let o=0
t.ratings.forEach(e=>{o++
e.rating_id=e.id
e.rating_long_description=e.long_description
e.min_points=0
o<t.ratings.length&&(e.min_points=t.ratings[o].points)
const a=i.clone(true)
a.toggleClass("edge_rating",1===o||o===t.ratings.length)
o===t.ratings.length&&a.find(".add_rating_link").remove()
a.fillTemplateData({data:Object(n["a"])({},e,{min_points:me.localizedPoints(e.min_points),points:me.localizedPoints(e.points)})})
a.find(".range_rating").showIf(true===t.criterion_use_range&&J["a"].parse(e.min_points)!==J["a"].parse(e.points))
r.find(".ratings").append(a)})
if(t.learning_outcome_id){r.find(".edit_criterion_link").remove()
r.find(".rating .links").remove()}e.find(".summary").before(r)
r.find(".criterion_points").val(me.localizedPoints(t.points))
r.data("criterion_points",J["a"].parse(t.points))})
e.find(".criterion:not(.blank)").find(".ratings").showIf(!t.free_form_criterion_comments).end().find(".custom_ratings").showIf(t.free_form_criterion_comments)
e.find(".rubric_title .title").focus()}}
me.sizeRatings=U.a.debounce(me.originalSizeRatings,10)
var ge=function(e,t){t=Math.pow(10,t||0).toFixed(t<0?-t:0)
return Math.round(e*t)/t}
me.init=function(){const e=!g()("#rubrics").hasClass("raw_listing")
const t=g()("#rubric_dialog"),i=g()("#rubric_long_description_dialog"),n=g()("#rubric_rating_dialog")
me.htmlBody=g()("html,body")
g()("#rubrics").delegate(".edit_criterion_link, .long_description_link","click",(function(e){e.preventDefault()
let t=g()(this).parents(".rubric").hasClass("editing"),n=g()(this).parents(".criterion"),r=g()(this).parents(".criterion").hasClass("learning_outcome_criterion"),o=oe.t("Edit Criterion"),a=n.getTemplateData({textValues:["long_description","description"]})
if(t&&!r){if(n.hasClass("new_criterion")){a.description=""
o=oe.t("Add Criterion")
i.find(".save_button").text(oe.t("Create Criterion"))}else i.find(".save_button").text(oe.t("Update Criterion"))
i.fillFormData(a).fillTemplateData({data:a}).hideErrors().find(".editing").show().end().find(".displaying").hide().end()}else{r||(a.long_description=Object(pe["a"])(a.long_description).replace(/(\r?\n)/g,"<br>$1"))
o=oe.t("Criterion Long Description")
i.fillTemplateData({data:a,htmlValues:["description","long_description"],avoid:"textarea"}).find(".displaying").show().end().find(".editing").hide().end()}const s=function(){if(n.hasClass("new_criterion")){setTimeout(()=>{g.a.screenReaderFlashMessageExclusive(oe.t("New Criterion Canceled"))},100)
n.find(".delete_criterion_link").click()}}
const c=function(){n.hasClass("new_criterion")?n.parents(".rubric_container").first().find("#add_criterion_container .icon-plus").focus():n.find(".edit_criterion_link").focus()}
i.data("current_criterion",n).dialog({title:o,width:416,buttons:[],close:s,beforeClose:c})
t&&!r&&i.fixDialogButtons()})).delegate(".edit_rating_link","click",(function(e){e.preventDefault()
const t=g()(this).parents(".criterion")
const i=g()(this).parents(".rating")
const r=i.getTemplateData({textValues:["description","points","min_points","rating_long_description"]})
const o=t.getTemplateData({textValues:["description"]})
if(!i.parents(".rubric").hasClass("editing"))return
if(i.parents(".criterion").hasClass("learning_outcome_criterion"))return
const a=i.closest("td").next(".rating")
const s=i.parents(".criterion").find(".criterion_use_range").attr("checked")
n.find(".range_rating").showIf(s)
n.find(".min_points").prop("disabled",!a.length)
me.hideCriterionAdd(i.parents(".rubric"))
n.find("#edit_rating_form_criterion_description").text(o.description)
const c=n.find("#points")
if(s){c.attr("aria-labelledby","rating_form_max_score_label")
c.attr("placeholder",oe.t("max"))}else{c.attr("aria-labelledby","rating_form_score_label")
c.removeAttr("placeholder")}const _=function(){const e=n.data("current_rating")
if(e.hasClass("new_rating")){setTimeout(()=>{g.a.screenReaderFlashMessageExclusive(oe.t("New Rating Canceled"))},100)
e.find(".delete_rating_link").click()}}
n.fillFormData(r).find(".editing").show().end().find(".displaying").hide().end()
n.data("current_criterion",t).data("current_rating",i).hideErrors().dialog({title:oe.t("titles.edit_rubric_rating","Edit Rating"),width:400,buttons:[],close:_})
n.fixDialogButtons()})).delegate(".find_rubric_link","click",e=>{e.preventDefault()
t.dialog({width:800,height:380,resizable:true,title:oe.t("titles.find_existing_rubric","Find Existing Rubric")})
if(!t.hasClass("loaded")){t.find(".loading_message").text(oe.t("messages.loading_rubric_groups","Loading rubric groups..."))
const e=t.find(".grading_rubrics_url").attr("href")
g.a.ajaxJSON(e,"GET",{},e=>{e.forEach(e=>{const i=t.find(".rubrics_dialog_context_select.blank:first").clone(true).removeClass("blank")
i.fillTemplateData({data:{name:e.name,context_code:e.context_code,rubrics:e.rubrics+" rubrics"}})
t.find(".rubrics_dialog_contexts_select").append(i.show())})
0==e.length?t.find(".loading_message").text("No rubrics found"):t.find(".loading_message").remove()
t.find(".rubrics_dialog_rubrics_holder").slideDown()
t.find(".rubrics_dialog_contexts_select .rubrics_dialog_context_select:visible:first").click()
t.addClass("loaded")},e=>{t.find(".loading_message").text(oe.t("errors.load_rubrics_failed","Loading rubrics failed, please try again"))})}}).delegate(".edit_rubric_link","click",(function(e){e.preventDefault()
const t=g()(this),i=t.parents(".rubric"),n=oe.t("prompts.read_only_rubric","You can't edit this rubric, either because you don't have permission or it's being used in more than one place. Any changes you make will result in a new rubric based on the old rubric. Continue anyway?")
if(me.isEditing)return false
t.hasClass("copy_edit")&&!confirm(n)||me.editRubric(i,t.attr("href"))}))
g()(".rubric .delete_rubric_link").bind("click",(function(e,t){e.preventDefault()
let i=oe.t("prompts.confirm_delete","Are you sure you want to delete this rubric?")
t&&t.confirmationMessage&&(i=t.confirmationMessage)
g()(this).parents(".rubric").confirmDelete({url:g()(this).attr("href"),message:i,success(){g()(this).fadeOut(()=>{g()(".add_rubric_link").show().focus()
t&&g.a.isFunction(t)&&t()})}})}))
i.find(".save_button").click(()=>{const e=i.find("textarea.long_description").val(),t=i.find("textarea.description").val(),n=i.data("current_criterion")
const r=i.validateForm({required:["description"],labels:{description:oe.t("Description")}})
if(!r)return
if(n){n.fillTemplateData({data:{long_description:e,description_title:t}})
n.find("textarea.long_description").val(e)
n.find("textarea.description").val(t)
n.find(".long_description_holder").toggleClass("empty",!e)
let i=oe.t("Criterion Updated")
n.hasClass("new_criterion")&&(i=oe.t("Criterion Created"))
n.removeClass("new_criterion")
n.show()
const r=n.parents(".rubric")
me.updateCriteria(r)
me.updateRubricPoints(r)
me.updateAddCriterionLinks(r)
setTimeout(()=>{g.a.screenReaderFlashMessageExclusive(i)
n.find(".edit_criterion_link").focus()},100)}i.dialog("close")})
i.find(".cancel_button").click(()=>{i.dialog("close")})
n.find(".save_button").click(e=>{e.preventDefault()
e.stopPropagation()
const t=n.find("#edit_rating_form").getFormData()
const i=n.find("#edit_rating_form").validateForm({data:t,required:["description"],labels:{description:oe.t("Rating Title")}})
if(!i)return
const r=n.data("current_rating")
const o=n.data("current_criterion")
const a=r.find(".edit_rating_link")
const s=o.find(".criterion_use_range").attr("checked")
const c=r.next(".rating")
const _=r.prev(".rating")
t.points=ge(J["a"].parse(t.points),2)
if(isNaN(t.points)){t.points=J["a"].parse(o.find(".criterion_points").val())
isNaN(t.points)&&(t.points=5)
t.points<0&&(t.points=0)}t.min_points=ge(J["a"].parse(t.min_points),2);(isNaN(t.min_points)||t.min_points<0)&&(t.min_points=0)
if(s){if(t.points<t.min_points){const e=t.points
t.points=t.min_points
t.min_points=e}_&&0!==_.length&&(t.points=me.capPointChange(t.points,_,Math.min,"points"))
c&&0!==c.length&&(t.min_points=me.capPointChange(t.min_points,c,Math.max,"min_points"))}r.fillTemplateData({data:t})
me.flagInfinitesimalRating(r,s)
if(0===r.prev(".rating").length){o.find(".criterion_points").val(me.localizedPoints(t.points))
o.data("criterion_points",t.points)}if(c){c.fillTemplateData({data:{points:t.min_points}})
me.flagInfinitesimalRating(c,s)}if(_){_.fillTemplateData({data:{min_points:t.points}})
me.flagInfinitesimalRating(_,s)}me.updateCriterionPoints(o,true)
me.originalSizeRatings()
r.removeClass("new_rating")
n.dialog("close")
setTimeout(()=>{g.a.screenReaderFlashMessageExclusive(oe.t("Rating Updated"))
a.focus()},100)})
n.find(".cancel_button").click(()=>{n.dialog("close")})
g()(".add_rubric_link").click(t=>{t.preventDefault()
if(g()("#rubric_new").length>0)return
if(e&&g()("#rubrics .rubric:visible").length>0)return
const i=me.addRubric()
g()("#rubrics").append(i.show())
g()(".add_rubric_link").hide()
me.updateAddCriterionLinks(i)
const n=i.find(".find_rubric_link:visible:first")
n.length>0?n.focus():i.find(":text:first").focus().select()})
g()("#rubric_dialog").delegate(".rubrics_dialog_context_select","click",(function(e){e.preventDefault()
g()(".rubrics_dialog_contexts_select .selected_side_tab").removeClass("selected_side_tab")
const i=g()(this)
i.addClass("selected_side_tab")
const n=i.getTemplateData({textValues:["context_code"]}).context_code
if(i.hasClass("loaded")){t.find(".rubrics_loading_message").hide()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select").hide()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select."+n).show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select:visible:first").click()}else{t.find(".rubrics_loading_message").text(oe.t("messages.loading_rubrics","Loading rubrics...")).show()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").hide()
const e=t.find(".grading_rubrics_url").attr("href")+"?context_code="+n
g.a.ajaxJSON(e,"GET",{},e=>{i.addClass("loaded")
t.find(".rubrics_loading_message").hide()
t.find(".rubrics_dialog_rubrics,.rubrics_dialog_rubrics_select").show()
e.forEach(e=>{const i=e.rubric_association
const n=i.rubric
const r=t.find(".rubrics_dialog_rubric_select.blank:first").clone(true)
r.addClass(i.context_code)
n.criterion_count=n.data.length
r.fillTemplateData({data:n}).removeClass("blank")
t.find(".rubrics_dialog_rubrics_select").append(r.show())
const o=t.find(".rubrics_dialog_rubric.blank:first").clone(true)
o.removeClass("blank")
o.find(".criterion.blank").hide()
n.rubric_total=n.points_possible
o.fillTemplateData({data:n,id:"rubric_dialog_"+n.id})
n.data.forEach(e=>{e.criterion_points=e.points
e.criterion_points_possible=e.points
e.criterion_description=e.description
const t=e.ratings
delete e.ratings
const i=o.find(".criterion.blank:first").clone().removeClass("blank")
i.fillTemplateData({data:e})
i.find(".rating_holder").addClass("blank")
t.forEach(e=>{const t=i.find(".rating_holder.blank:first").clone().removeClass("blank")
e.rating=e.description
t.fillTemplateData({data:e})
i.find(".ratings").append(t.show())})
i.find(".rating_holder.blank").remove()
o.find(".rubric.rubric_summary tr.summary").before(i.show())})
t.find(".rubrics_dialog_rubrics").append(o)})
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select").hide()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select."+n).show()
t.find(".rubrics_dialog_rubrics_select .rubrics_dialog_rubric_select:visible:first").click()},e=>{t.find(".rubrics_loading_message").text("Loading rubrics failed, please try again")})}})).delegate(".rubrics_dialog_rubric_select","click",(function(e){e.preventDefault()
const t=g()(this)
t.find("a").focus()
const i=t.getTemplateData({textValues:["id"]}).id
g()(".rubric_dialog .rubrics_dialog_rubric_select").removeClass("selected_side_tab")
t.addClass("selected_side_tab")
g()(".rubric_dialog .rubrics_dialog_rubric").hide()
g()(".rubric_dialog #rubric_dialog_"+i).show()})).delegate(".select_rubric_link","click",(function(e){e.preventDefault()
const i={}
const n=t.getTemplateData({textValues:["rubric_association_type","rubric_association_id","rubric_association_purpose"]})
i["rubric_association[association_type]"]=n.rubric_association_type
i["rubric_association[association_id]"]=n.rubric_association_id
i["rubric_association[rubric_id]"]=g()(this).parents(".rubrics_dialog_rubric").getTemplateData({textValues:["id"]}).id
i["rubric_association[purpose]"]=n.rubric_association_purpose
t.loadingImage()
const r=t.find(".select_rubric_url").attr("href")
g.a.ajaxJSON(r,"POST",i,e=>{t.loadingImage("remove")
let i=g()("#rubrics .rubric:visible:first")
0===i.length&&(i=me.addRubric())
const n=e.rubric
n.rubric_association_id=e.rubric_association.id
n.use_for_grading=e.rubric_association.use_for_grading
n.permissions=n.permissions||{}
if(e.rubric_association.permissions){n.permissions.update_association=e.rubric_association.permissions.update
n.permissions.delete_association=e.rubric_association.permissions.delete}me.updateRubric(i,n)
me.updateRubricPoints(i)
me.hideEditRubric(i,false)
t.dialog("close")},()=>{t.loadingImage("remove")})}))
t.find(".cancel_find_rubric_link").click(e=>{e.preventDefault()
t.dialog("close")})
t.find(".rubric_brief").find(".expand_data_link,.collapse_data_link").click((function(e){e.preventDefault()
g()(this).parents(".rubric_brief").find(".expand_data_link,.collapse_data_link").toggle().end().find(".details").slideToggle()}))
let r=false,o=false
g()("#edit_rubric_form").formSubmit({processData(e){const t=g()(this).parents(".rubric")
if(!t.find(".criterion:not(.blank)").length)return false
e=me.rubricData(t)
if(ENV.MASTER_COURSE_DATA&&ENV.MASTER_COURSE_DATA.restricted_by_master_course&&ENV.MASTER_COURSE_DATA.is_master_course_child_content&&ENV.MASTER_COURSE_DATA.master_course_restrictions.points)o=true
else if("1"==e["rubric_association[use_for_grading]"]){const t=J["a"].parse(g()("#assignment_show .points_possible, #rubrics.rubric_dialog .assignment_points_possible").text())
const i=parseFloat(e.points_possible)
if(null!=t&&void 0!=t&&i!=t&&!r){const e=0===t?i:i/t
const n=g()(le({assignmentPoints:t,rubricPoints:i,pointRatio:e}))
const a=function(e){r=true
o=true===e
n.remove()
g()("#edit_rubric_form").submit()}
n.dialog({dialogClass:"edit-rubric-confirm-points-change",buttons:[{text:oe.t("change","Change"),click:a},{text:oe.t("leave_different","Leave different"),click(){a(true)}}],width:400,resizable:false,close:n.remove})
return false}}e.skip_updating_points_possible=o
o=false
r=false
return e},beforeSubmit(e){const t=g()(this).parents(".rubric")
t.find(".rubric_title .title").text(e["rubric[title]"])
t.find(".rubric_table caption .title").text(e["rubric[title]"])
t.find(".rubric_total").text(me.localizedPoints(e.points_possible))
t.removeClass("editing")
"rubric_new"==t.attr("id")?t.attr("id","rubric_adding"):t.prev(".rubric").remove()
g()(this).parents("tr").hide()
t.loadingImage()
return t},success(t,i){const n=t.rubric
i.loadingImage("remove")
n.rubric_association_id=t.rubric_association.id
n.use_for_grading=t.rubric_association.use_for_grading
n.hide_points=t.rubric_association.hide_points
n.hide_outcome_results=t.rubric_association.hide_outcome_results
n.permissions=n.permissions||{}
if(t.rubric_association.permissions){n.permissions.update_association=t.rubric_association.permissions.update
n.permissions.delete_association=t.rubric_association.permissions.delete}me.updateRubric(i,n)
if(t.rubric_association&&t.rubric_association.use_for_grading&&!t.rubric_association.skip_updating_points_possible){g()("#assignment_show .points_possible").text(n.points_possible)
const e=oe.t("discussion_points_possible",{one:"%{count} point possible",other:"%{count} points possible"},{count:n.points_possible||0,precision:2,strip_insignificant_zeros:true})
g()(".discussion-title .discussion-points").text(e)}e||g()(".add_rubric_link").show()
i.find(".rubric_title .links:not(.locked)").show()}})
g()("#edit_rubric_form .cancel_button").click((function(){me.hideEditRubric(g()(this).parents(".rubric"),true)}))
g()("#rubrics").delegate(".add_criterion_link","click",(function(e){const t=me.addCriterion(g()(this).parents(".rubric"))
t.hide()
me.editCriterion(t)
return false})).delegate(".description_title","click",(function(){const e=g()(this).parents(".criterion")
me.editCriterion(e)
return false})).delegate(".delete_criterion_link","click",(function(e){const t=g()(this).parents(".criterion")
const i=t.prevAll(".criterion:not(.blank)").first()
let n=i.find(".edit_criterion_link")
0==i.length&&(n=t.parents(".rubric_container").find(".rubric_title input"))
const r=t.parents(".rubric")
if(t.hasClass("new_criterion")){t.remove()
me.updateAddCriterionLinks(r,".icon-plus")}else{n.focus()
t.fadeOut(()=>{t.remove()
me.updateCriteria(r)
me.updateRubricPoints(r)
me.updateAddCriterionLinks(r)})}return false})).delegate(".rating_description_value","click",e=>false).bind("mouseover",e=>{const t=g()(e.target)
t.closest(".ratings").length||me.hideCriterionAdd(t.parents(".rubric"))}).delegate(".delete_rating_link","click",(function(e){const t=g()(this).closest("td")
const i=t.prev().find(".add_rating_link_after")
const n=t.prev(".rating")
const r={min_points:t.next(".rating").find(".points").text()}
n.fillTemplateData({data:r})
e.preventDefault()
me.hideCriterionAdd(g()(this).parents(".rubric"))
g()(this).parents(".rating").fadeOut((function(){const e=g()(this).parents(".criterion")
me.flagInfinitesimalRating(n,e.find(".criterion_use_range").attr("checked"))
g()(this).remove()
me.sizeRatings(e)
i.focus()}))})).delegate(".add_rating_link_after","click",(function(e){e.preventDefault()
const t=g()(this).parents("td.rating")
t.addClass("add_right")
me.addNewRatingColumn(t)})).delegate(".add_column","click",(function(e){const t=g()(this)
me.addNewRatingColumn(t)}))
g()(".criterion_points").keydown((function(e){13==e.keyCode&&me.updateCriterionPoints(g()(this).parents(".criterion"))})).blur((function(e){me.updateCriterionPoints(g()(this).parents(".criterion"))}))
g()("#edit_rating").delegate(".cancel_button","click",(function(e){g()(this).closest("td.rating").find(".edit_rating_link")}))
g()("#edit_rubric_form .rubric_custom_rating").change((function(){g()(this).parents(".rubric").find("tr.criterion").find(".ratings").showIf(!g()(this).attr("checked")).end().find(".criterion_use_range_div").showIf(!g()(this).attr("checked")).end().find(".custom_ratings").showIf(g()(this).attr("checked"))})).triggerHandler("change")
g()("#edit_rubric_form #totalling_rubric").change((function(){g()(this).parents(".rubric").find(".total_points_holder").showIf(!g()(this).attr("checked"))}))
g()("#edit_rubric_form #hide_points").change((function(e){e.target.checked?me.hidePoints(g()(this).parents(".rubric"),g()("#rubric_rating_dialog")):me.showPoints(g()(this).parents(".rubric"),g()("#rubric_rating_dialog"))}))
g()("#edit_rubric_form .hide_points_checkbox").change((function(){if(g()(this).is(":visible")){const e=g()(this).attr("checked")
if(e){g()(this).parents(".rubric").find(".grading_rubric_checkbox").attr("checked",false)
g()(this).parents(".rubric").find(".grading_rubric_checkbox").triggerHandler("change")}g()(this).parents(".rubric").find(".rubric_grading").css("display",e?"none":"")
g()(this).parents(".rubric").find(".totalling_rubric").css("display",e?"none":"")}}))
g()("#edit_rubric_form .grading_rubric_checkbox").change((function(){if(g()(this).is(":visible")){g()(this).parents(".rubric").find(".totalling_rubric").css("visibility",g()(this).attr("checked")?"hidden":"visible")
g()(this).parents(".rubric").find(".totalling_rubric_checkbox").attr("checked",false)}})).triggerHandler("change")
g()(".criterion_use_range").change((function(){const e=g()(this).attr("checked")
g()(this).parents("tr.criterion").find(".rating").each((function(){const t=e&&!g()(this).hasClass("infinitesimal")&&J["a"].parse(g()(this).find(".points").text())!==J["a"].parse(g()(this).find(".min_points").text())
g()(this).find(".range_rating").showIf(t)}))})).triggerHandler("change")
g()("#criterion_blank").find(".criterion_points").val("5")
if(g()("#default_rubric").find(".criterion").length<=1){me.addCriterion(g()("#default_rubric"))
g()("#default_rubric").find(".criterion").removeClass("new_criterion")}setInterval(me.sizeRatings,1e4)
g.a.publish("edit_rubric/initted")}
if(document.getElementById("rubric_management")&&ENV.NON_SCORING_RUBRICS&&ENV.PERMISSIONS.manage_outcomes){g()("h1").hide()
const e=ENV.context_asset_string.split("_")[1]
c.a.render(Object(r["a"])(re,{accountId:e}),document.getElementById("rubric_management"))}var fe=me
Object(l["a"])(JSON.parse('{"ar":{"EditRubricPage":{"titles":{"find_outcomes":"العثور على نتائج"}}},"cy":{"EditRubricPage":{"titles":{"find_outcomes":"Dod o hyd i Ddeilliannau"}}},"da":{"EditRubricPage":{"titles":{"find_outcomes":"Find læringsudbytter"}}},"da-x-k12":{"EditRubricPage":{"titles":{"find_outcomes":"Find læringsudbytter"}}},"de":{"EditRubricPage":{"titles":{"find_outcomes":"Lernziele suchen"}}},"el":{"EditRubricPage":{"titles":{"find_outcomes":"Εύρεση Αποτελεσμάτων"}}},"en-AU":{"EditRubricPage":{"titles":{"find_outcomes":"Find Outcomes"}}},"en-CA":{"EditRubricPage":{"titles":{"find_outcomes":"Find Outcomes"}}},"en-GB":{"EditRubricPage":{"titles":{"find_outcomes":"Find outcomes"}}},"en-GB-x-ukhe":{"EditRubricPage":{"titles":{"find_outcomes":"Find outcomes"}}},"es":{"EditRubricPage":{"titles":{"find_outcomes":"Buscar resultados"}}},"fa":{"EditRubricPage":{"titles":{"find_outcomes":"یافتن نتایج"}}},"fi":{"EditRubricPage":{"titles":{"find_outcomes":"Löydä tulokset"}}},"fr":{"EditRubricPage":{"titles":{"find_outcomes":"Chercher des résultats"}}},"fr-CA":{"EditRubricPage":{"titles":{"find_outcomes":"Chercher des acquis"}}},"he":{"EditRubricPage":{"titles":{"find_outcomes":"חיפוש תוצאות למידה"}}},"ht":{"EditRubricPage":{"titles":{"find_outcomes":"Jwenn Rezilta"}}},"hu":{"EditRubricPage":{"titles":{"find_outcomes":"Tanulási eredmény keresése"}}},"hy":{"EditRubricPage":{"titles":{"find_outcomes":"Գտնել արդյունքները"}}},"is":{"EditRubricPage":{"titles":{"find_outcomes":"Finna niðurstöður"}}},"it":{"EditRubricPage":{"titles":{"find_outcomes":"Trova esiti"}}},"ja":{"EditRubricPage":{"titles":{"find_outcomes":"成果の検索"}}},"ko":{"EditRubricPage":{"titles":{"find_outcomes":"성과 찾기"}}},"mi":{"EditRubricPage":{"titles":{"find_outcomes":"Kimihia Putanga"}}},"nb":{"EditRubricPage":{"titles":{"find_outcomes":"Finn læringsmål"}}},"nb-x-k12":{"EditRubricPage":{"titles":{"find_outcomes":"Finn mål"}}},"nl":{"EditRubricPage":{"titles":{"find_outcomes":"Leerdoelen zoeken"}}},"nn":{"EditRubricPage":{"titles":{"find_outcomes":"Finn læringsmål"}}},"pl":{"EditRubricPage":{"titles":{"find_outcomes":"Wyszukaj wyniki"}}},"pt":{"EditRubricPage":{"titles":{"find_outcomes":"Localizar resultados"}}},"pt-BR":{"EditRubricPage":{"titles":{"find_outcomes":"Localizar objetivos"}}},"ru":{"EditRubricPage":{"titles":{"find_outcomes":"Найти результаты"}}},"sv":{"EditRubricPage":{"titles":{"find_outcomes":"Hitta lärandemål"}}},"tr":{"EditRubricPage":{"titles":{"find_outcomes":"Öğrenme Çıktısı Ara"}}},"zh-Hans":{"EditRubricPage":{"titles":{"find_outcomes":"查找结果"}}},"zh-Hant":{"EditRubricPage":{"titles":{"find_outcomes":"尋找成果"}}}}'))
var he=u["default"].scoped("EditRubricPage")
var be=i("B0dq")
var ve=i("dSIe")
class ye{static initClass(){this.prototype.$els={}
this.prototype.translations={findOutcome:he.t("titles.find_outcomes","Find Outcomes")}}constructor(){this.onFindOutcome=e=>{e.preventDefault()
this.dialogCreated||this.createDialog()
this.$els.dialog.show()
return this.$els.dialog.$el.find(".alert").focus()}
this.rootOutcomeGroup=new be["a"](ENV.ROOT_OUTCOME_GROUP)
this.attachInitialEvent()
this.dialogCreated=false}attachInitialEvent(){this.$els.rubricWrapper=g()("#rubrics")
return this.$els.rubricWrapper.on("click","a.find_outcome_link",this.onFindOutcome)}createDialog(){this.$els.dialog=new ve["a"]({title:this.translations.findOutcome,selectedGroup:this.rootOutcomeGroup,useForScoring:true,shouldImport:false,disableGroupImport:true,rootOutcomeGroup:this.rootOutcomeGroup})
this.$els.dialog.on("import",this.onOutcomeImport)
return this.dialogCreated=true}onOutcomeImport(e){return fe.onFindOutcome(e)}}ye.initClass()
document.addEventListener("rubricEditDataReady",e=>{new ye
fe.init()})},VS9R:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"message_sent_5e328899":"تم إرسال الرسالة!","message_students_37ba5dd5":"مراسلة الطلاب","message_students_for_context_ee62ff92":"مراسلة الطلاب لـ %{context}"},"cy":{"message_sent_5e328899":"Mae’r neges wedi’i hanfon!","message_students_37ba5dd5":"Anfon neges at fyfyrwyr","message_students_for_context_ee62ff92":"Anfon neges at fyfyrwyr am %{context}"},"da":{"message_sent_5e328899":"Besked sendt!","message_students_37ba5dd5":"Send besked til studerende","message_students_for_context_ee62ff92":"Send besked til studerende for %{context}"},"da-x-k12":{"message_sent_5e328899":"Besked sendt!","message_students_37ba5dd5":"Send besked til elever","message_students_for_context_ee62ff92":"Send besked til elever for %{context}"},"de":{"message_sent_5e328899":"Nachricht wurde gesendet.","message_students_37ba5dd5":"Studenten benachrichtigen","message_students_for_context_ee62ff92":"Studenten benachrichtigen wegen %{context}"},"el":{"message_sent_5e328899":"Μήνυμα Εστάλη!","message_students_37ba5dd5":"Αποστολή μηνύματος στους μαθητές","message_students_for_context_ee62ff92":"Αποστολή μηνύματος στους σπουδαστές για %{context}"},"en-AU":{"message_sent_5e328899":"Message Sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-CA":{"message_sent_5e328899":"Message Sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-GB":{"message_sent_5e328899":"Message sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-GB-x-ukhe":{"message_sent_5e328899":"Message sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"es":{"message_sent_5e328899":"¡Mensaje enviado!","message_students_37ba5dd5":"Mensaje a estudiantes","message_students_for_context_ee62ff92":"Mensaje a estudiantes para %{context}"},"fa":{"message_sent_5e328899":"پیام ارسال شد!","message_students_37ba5dd5":"ارسال پیام برای دانشجویان","message_students_for_context_ee62ff92":"ارسال پیام برای دانشجویان برای %{context}"},"fi":{"message_sent_5e328899":"Viesti lähetetty!","message_students_37ba5dd5":"Lähetä viesti opiskelijoille","message_students_for_context_ee62ff92":"Lähetä viesti opiskelijoille, jotka %{context}"},"fr":{"message_sent_5e328899":"Message envoyé !","message_students_37ba5dd5":"Envoyer un message aux étudiants","message_students_for_context_ee62ff92":"Envoyer un message aux étudiants pour %{context}"},"fr-CA":{"message_sent_5e328899":"Message envoyé!","message_students_37ba5dd5":"Envoyer un message aux étudiants","message_students_for_context_ee62ff92":"Envoyer un message aux étudiants pour %{context}"},"he":{"message_sent_5e328899":"הודעה נשלחה!","message_students_37ba5dd5":"הודעות לתלמידים","message_students_for_context_ee62ff92":"הודע/י לתלמידים על %{context}"},"ht":{"message_sent_5e328899":"Mesaj Ale!","message_students_37ba5dd5":"Voye Mesaj bay Elèv","message_students_for_context_ee62ff92":"Voye Mesaj bay Elèv pou %{context}"},"hu":{"message_sent_5e328899":"Az üzenet elküldve!","message_students_37ba5dd5":"Üzenet a hallgatóknak","message_students_for_context_ee62ff92":"Üzenet a hallgatóknak: %{context}"},"hy":{"message_sent_5e328899":"Հաղորդագրությունն ուղարկված է:","message_students_37ba5dd5":"Հաղորդագրություն ուղարկել ունկնդիրներին","message_students_for_context_ee62ff92":"Հաղորդագրություն ուղարկել ունկնդիրներին  %{context} մասին"},"is":{"message_sent_5e328899":"Skilaboð send!","message_students_37ba5dd5":"Skilaboð til nemenda","message_students_for_context_ee62ff92":"Skilaboð til nemenda fyrir %{context}"},"it":{"message_sent_5e328899":"Messaggio inviato.","message_students_37ba5dd5":"Invia messaggio a studenti","message_students_for_context_ee62ff92":"Invia messaggio agli studenti per %{context}"},"ja":{"message_sent_5e328899":"メッセージが送信されました!","message_students_37ba5dd5":"受講生にメッセージを送る","message_students_for_context_ee62ff92":"%{context}の受講生にメッセージを送る"},"ko":{"message_sent_5e328899":"메시지를 보냈습니다!","message_students_37ba5dd5":"학생에게 메시지 보내기","message_students_for_context_ee62ff92":"학생에게 %{context}에 대한 메시지 보내기"},"mi":{"message_sent_5e328899":"Tukua Karere!","message_students_37ba5dd5":"ngā ākonga Karere","message_students_for_context_ee62ff92":"Ngā ākonga Karere mo %{context}"},"nb":{"message_sent_5e328899":"Melding sendt!","message_students_37ba5dd5":"Gi melding til studentene","message_students_for_context_ee62ff92":"Gi melding til studentene om %{context}"},"nb-x-k12":{"message_sent_5e328899":"Melding sendt!","message_students_37ba5dd5":"Gi melding til elevene","message_students_for_context_ee62ff92":"Gi melding til elevene om %{context}"},"nl":{"message_sent_5e328899":"Bericht verzonden!","message_students_37ba5dd5":"Bericht naar cursisten","message_students_for_context_ee62ff92":"Bericht naar cursisten voor %{context}"},"nn":{"message_sent_5e328899":"Melding er send.","message_students_37ba5dd5":"Send melding til studentane","message_students_for_context_ee62ff92":"Gi melding til studentane om %{context}"},"pl":{"message_sent_5e328899":"Wiadomość wysłana!","message_students_37ba5dd5":"Wiadomość dla uczestników","message_students_for_context_ee62ff92":"Wiadomość dla uczestników dot. %{context}"},"pt":{"message_sent_5e328899":"Mensagem enviada!","message_students_37ba5dd5":"Enviar mensagem a alunos","message_students_for_context_ee62ff92":"Mensagem a alunos para %{context}"},"pt-BR":{"message_sent_5e328899":"Mensagem enviada!","message_students_37ba5dd5":"Enviar mensagem de alunos","message_students_for_context_ee62ff92":"Enviar mensagem aos alunos para %{context}"},"ru":{"message_sent_5e328899":"Сообщение отправлено!","message_students_37ba5dd5":"Отправить сообщения студентам","message_students_for_context_ee62ff92":"Отправить сообщение студентам для %{context}"},"sv":{"message_sent_5e328899":"Meddelandet har skickats!","message_students_37ba5dd5":"Meddela studenter","message_students_for_context_ee62ff92":"Meddela studenter om %{context}"},"tr":{"message_sent_5e328899":"Mesaj Gönderildi!","message_students_37ba5dd5":"Öğrencilere Mesaj Gönder","message_students_for_context_ee62ff92":"%{context} için Öğrencilere Mesaj"},"zh-Hans":{"message_sent_5e328899":"消息已发送！","message_students_37ba5dd5":"向学生发送消息","message_students_for_context_ee62ff92":"给学生发送%{context}的消息"},"zh-Hant":{"message_sent_5e328899":"訊息已傳送！","message_students_37ba5dd5":"通知學生","message_students_for_context_ee62ff92":"針對 %{context} 通知學生"}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("viewsMessageStudentsDialog")
var a=i("ouhR")
var s=i.n(a)
var c=i("faZh")
var _=i("3O+N")
var d=i.n(_)
i("DfGn")
var u=d.a.default
var l=u.template,p=u.templates=u.templates||{}
var m="-messageStudentsWhoRecipientList"
p[m]=l((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a="",s="function",c=this.escapeExpression,_=this
function d(e,t){var n,r,o=""
o+='\n  <span class="label">\n    '
if(r=i.short_name)n=r.call(e,{hash:{},data:t})
else{r=e&&e.short_name
n=typeof r===s?r.call(e,{hash:{},data:t}):r}o+=c(n)+"\n  </span>\n"
return o}o=i.each.call(t,t&&t.recipients,{hash:{},inverse:_.noop,fn:_.program(1,d,r),data:r});(o||0===o)&&(a+=o)
a+="\n"
return a}))
u.registerPartial("messageStudentsWhoRecipientList",p["-messageStudentsWhoRecipientList"])
var g=p[m]
Object(r["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","recipients_a69b5e55":"المستلمون:","send_message_6ccc90e8":"إرسال رسالة","sending_bf324366":"جارٍ الإرسال...","sent_f4ee89ec":"تم الإرسال!"},"cy":{"cancel_caeb1e68":"Canslo","recipients_a69b5e55":"Derbynwyr:","send_message_6ccc90e8":"Anfon Neges","sending_bf324366":"Wrthi’n anfon...","sent_f4ee89ec":"Wedi anfon!"},"da":{"cancel_caeb1e68":"Annuller","recipients_a69b5e55":"Modtagere:","send_message_6ccc90e8":"Send besked","sending_bf324366":"Sender ...","sent_f4ee89ec":"Sendt!"},"da-x-k12":{"cancel_caeb1e68":"Annuller","recipients_a69b5e55":"Modtagere:","send_message_6ccc90e8":"Send besked","sending_bf324366":"Sender ...","sent_f4ee89ec":"Sendt!"},"de":{"cancel_caeb1e68":"Abbrechen","recipients_a69b5e55":"Empfänger:","send_message_6ccc90e8":"Nachricht senden","sending_bf324366":"Wird gesendet ...","sent_f4ee89ec":"Gesendet"},"el":{"cancel_caeb1e68":"Ακύρωση","recipients_a69b5e55":"Παραλήπτες:","sent_f4ee89ec":"Εστάλη!"},"en-AU":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending...","sent_f4ee89ec":"Sent!"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending..."},"en-CA":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending...","sent_f4ee89ec":"Sent!"},"en-GB":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send message","sending_bf324366":"sending...","sent_f4ee89ec":"Sent!"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","send_message_6ccc90e8":"Send message","sending_bf324366":"sending..."},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send message","sending_bf324366":"sending...","sent_f4ee89ec":"Sent!"},"es":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Destinatarios:","send_message_6ccc90e8":"Enviar mensaje","sending_bf324366":"Enviando...","sent_f4ee89ec":"¡Enviado!"},"fa":{"cancel_caeb1e68":"لغو","recipients_a69b5e55":"گیرنده ها:","send_message_6ccc90e8":"ارسال پیام","sending_bf324366":"در حال ارسال...","sent_f4ee89ec":"ارسال شد!"},"fi":{"cancel_caeb1e68":"Peruuta","recipients_a69b5e55":"Vastaanottajat:","send_message_6ccc90e8":"Lähetä viesti","sending_bf324366":"Lähetetään...","sent_f4ee89ec":"Lähetetty!"},"fr":{"cancel_caeb1e68":"Annuler","recipients_a69b5e55":"Destinataires :","send_message_6ccc90e8":"Envoyer message","sending_bf324366":"Envoi en cours...","sent_f4ee89ec":"Envoyé !"},"fr-CA":{"cancel_caeb1e68":"Annuler","recipients_a69b5e55":"Destinataires :","send_message_6ccc90e8":"Envoyer un message","sending_bf324366":"Envoi en cours...","sent_f4ee89ec":"Envoyé!"},"he":{"cancel_caeb1e68":"ביטול","recipients_a69b5e55":"נמענים:","send_message_6ccc90e8":"שליחת הודעה","sent_f4ee89ec":"נשלח!"},"ht":{"cancel_caeb1e68":"Anile","recipients_a69b5e55":"Destinatè:","send_message_6ccc90e8":"Voye Mesaj","sending_bf324366":"Voye...","sent_f4ee89ec":"Voye!"},"hu":{"cancel_caeb1e68":"Mégse","recipients_a69b5e55":"Címzettek:","send_message_6ccc90e8":"Üzenetküldés","sending_bf324366":"Küldés...","sent_f4ee89ec":"Elküldve!"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","recipients_a69b5e55":"Ստացողներ՝","sent_f4ee89ec":"Ուղարկվել է"},"is":{"cancel_caeb1e68":"Hætta við","recipients_a69b5e55":"Viðtakendur:","send_message_6ccc90e8":"Senda skilaboð","sending_bf324366":"Sendi...","sent_f4ee89ec":"Sent!"},"it":{"cancel_caeb1e68":"Annulla","recipients_a69b5e55":"Destinatari:","send_message_6ccc90e8":"Invia messaggio","sending_bf324366":"Invio in corso...","sent_f4ee89ec":"Inviato."},"ja":{"cancel_caeb1e68":"キャンセル","recipients_a69b5e55":"受信者:","send_message_6ccc90e8":"メッセージを送信","sending_bf324366":"送信しています...","sent_f4ee89ec":"送信されました!"},"ko":{"cancel_caeb1e68":"취소","recipients_a69b5e55":"수신인:","sent_f4ee89ec":"전송했습니다!"},"mi":{"cancel_caeb1e68":"Whakakore","recipients_a69b5e55":"Kaiwhiwhi:","send_message_6ccc90e8":"Tukua Karere","sending_bf324366":"Tuku ana ...","sent_f4ee89ec":"Tono!"},"nb":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakere:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Sendt!"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakere:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Sendt!"},"nl":{"cancel_caeb1e68":"Annuleren","recipients_a69b5e55":"Geadresseerden:","send_message_6ccc90e8":"Bericht versturen","sending_bf324366":"Bezig met verzenden...","sent_f4ee89ec":"Verstuurd!"},"nn":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakarar:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Send."},"pl":{"cancel_caeb1e68":"Anuluj","recipients_a69b5e55":"Odbiorcy:","send_message_6ccc90e8":"Wyślij wiadomość","sending_bf324366":"Trwa wysyłanie...","sent_f4ee89ec":"Wysłano!"},"pt":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Destinatários:","send_message_6ccc90e8":"Enviar Mensagem","sending_bf324366":"A enviar...","sent_f4ee89ec":"Enviado!"},"pt-BR":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Recipientes:","send_message_6ccc90e8":"Enviar mensagem","sending_bf324366":"Enviando...","sent_f4ee89ec":"Enviado!"},"ru":{"cancel_caeb1e68":"Отменить","recipients_a69b5e55":"Получатели:","send_message_6ccc90e8":"Отправить сообщение","sending_bf324366":"Отправка...","sent_f4ee89ec":"Отправлено!"},"sl":{"cancel_caeb1e68":"Prekliči","send_message_6ccc90e8":"Pošlji sporočilo","sending_bf324366":"Pošiljanje ..."},"sv":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottagare:","send_message_6ccc90e8":"Skicka meddelande","sending_bf324366":"Skickar..","sent_f4ee89ec":"Skickat!"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","send_message_6ccc90e8":"Skicka meddelande","sending_bf324366":"Skickar.."},"tr":{"cancel_caeb1e68":"İptal","recipients_a69b5e55":"Alıcılar:","send_message_6ccc90e8":"Mesaj Gönder","sent_f4ee89ec":"Gönderildi!"},"uk":{"cancel_caeb1e68":"Скасувати","send_message_6ccc90e8":"Відправити повідомлення","sending_bf324366":"Відправка..."},"zh-Hans":{"cancel_caeb1e68":"取消","recipients_a69b5e55":"收件人：","send_message_6ccc90e8":"发送消息","sending_bf324366":"正在发送...","sent_f4ee89ec":"已发送！"},"zh-Hant":{"cancel_caeb1e68":"取消","recipients_a69b5e55":"收件者：","send_message_6ccc90e8":"傳送訊息","sending_bf324366":"正在發送...","sent_f4ee89ec":"已傳送！"}}'))
n["default"].scoped("message_students_dialog")
var f=i("EvX+")
var h=d.a.default
var b=h.template,v=h.templates=h.templates||{}
var y="messageStudentsDialog"
v[y]=b((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=this.merge(n,e.partials)
r=r||{}
var o,a,s,c="",_="function",d=this.escapeExpression,u=this,l=i.helperMissing
function p(e,t){var i,n=""
n+="\n      "+d((i=(i=(i=e&&e.recipientGroups,null==i||false===i?i:i[0]),null==i||false===i?i:i.name),typeof i===_?i.apply(e):i))+'\n      <input type="hidden" name="recipientGroupName" value="'+d((i=(i=(i=e&&e.recipientGroups,null==i||false===i?i:i[0]),null==i||false===i?i:i.name),typeof i===_?i.apply(e):i))+'" />\n    '
return n}function m(e,t){var n,r=""
r+='\n      <select name="recipientGroupName" id="message-recipients-group">\n        '
n=i.each.call(e,e&&e.recipientGroups,{hash:{},inverse:u.noop,fn:u.program(4,g,t),data:t});(n||0===n)&&(r+=n)
r+="\n      </select>\n    "
return r}function g(e,t){var n,r,o=""
o+='\n          <option value="'
if(r=i.name)n=r.call(e,{hash:{},data:t})
else{r=e&&e.name
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+'">'
if(r=i.name)n=r.call(e,{hash:{},data:t})
else{r=e&&e.name
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"</option>\n        "
return o}c+='<div class="message-students-dialog form-dialog-content">\n  <div class="message-recipients-group-container">\n    <label for="message-recipients-group">\n     '+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"recipients_a69b5e55","Recipients:",s):l.call(t,"t","recipients_a69b5e55","Recipients:",s)))+"\n    </label>\n\n    "
o=(a=i.ifEqual||t&&t.ifEqual,s={hash:{},inverse:u.program(3,m,r),fn:u.program(1,p,r),data:r},a?a.call(t,(o=t&&t.recipientGroups,null==o||false===o?o:o.length),1,s):l.call(t,"ifEqual",(o=t&&t.recipientGroups,null==o||false===o?o:o.length),1,s));(o||0===o)&&(c+=o)
c+='\n  </div>\n\n  <div id="message-recipients">\n    '
o=u.invokePartial(n.messageStudentsWhoRecipientList,"messageStudentsWhoRecipientList",t,i,n,r);(o||0===o)&&(c+=o)
c+='\n  </div>\n\n  <textarea name=body></textarea>\n\n</div>\n<div class="form-controls">\n  <button class="btn dialog_closer btn-secondary" type="button"\n    data-text-while-loading=\''+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"sending_bf324366","Sending...",s):l.call(t,"t","sending_bf324366","Sending...",s)))+"'>\n    "+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"cancel_caeb1e68","Cancel",s):l.call(t,"t","cancel_caeb1e68","Cancel",s)))+'\n  </button>\n  <button class="btn btn-primary"\n    data-text-while-loading=\''+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"sending_bf324366","Sending...",s):l.call(t,"t","sending_bf324366","Sending...",s)))+"'\n    data-text-when-loaded='"+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"sent_f4ee89ec","Sent!",s):l.call(t,"t","sent_f4ee89ec","Sent!",s)))+"'>\n    "+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"send_message_6ccc90e8","Send Message",s):l.call(t,"t","send_message_6ccc90e8","Send Message",s)))+"\n  </button>\n\n</div>\n"
return c}))
f["a"].loadStylesheet("jst/messageStudentsDialog",{combinedChecksum:"71cf06c9a8",includesNoVariables:true})
var k=v[y]
var w=i("RMh6")
var z=i("LvDl")
var S=i.n(z)
Object(r["a"])(JSON.parse('{"ar":{"models_conversations":{"cannot_be_empty":"لا يمكن أن تكون الرسالة فارغة","no_recipients_choose_another_group":"لا يوجد مستلمون في هذه المجموعة. يرجى اختيار مجموعة أخرى."}},"cy":{"models_conversations":{"cannot_be_empty":"Does dim modd i’r neges fod yn wag","no_recipients_choose_another_group":"Does dim derbynwyr yn y grŵp hwn Dewiswch grŵp arall."}},"da":{"models_conversations":{"cannot_be_empty":"Besked kan ikke være tom","no_recipients_choose_another_group":"Der er ingen modtagere i denne gruppe. Vælg venligst en anden gruppe."}},"da-x-k12":{"models_conversations":{"cannot_be_empty":"Besked kan ikke være tom","no_recipients_choose_another_group":"Der er ingen modtagere i denne gruppe. Vælg venligst en anden gruppe."}},"de":{"models_conversations":{"cannot_be_empty":"Nachricht darf nicht leer sein.","no_recipients_choose_another_group":"In dieser Gruppe gibt es keine Empfänger. Bitte wählen Sie eine andere Gruppe."}},"el":{"models_conversations":{"cannot_be_empty":"Το μήνυμα δεν μπορεί να είναι κενό.","no_recipients_choose_another_group":"Δεν υπάρχουν παραλήπτες σε αυτή την ομάδα. Παρακαλώ διαλέξτε μια άλλη ομάδα."}},"en-AU":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-AU-x-unimelb":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-CA":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-GB":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-GB-x-ukhe":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"es":{"models_conversations":{"cannot_be_empty":"El mensaje no puede estar vacío","no_recipients_choose_another_group":"No hay destinatarios en este grupo. Elija otro grupo."}},"fa":{"models_conversations":{"cannot_be_empty":"پیام نمی تواند خالی باشد","no_recipients_choose_another_group":"هیچ گیرنده ای در این گروه یافت نشد. گروه دیگری را انتخاب کنید."}},"fi":{"models_conversations":{"cannot_be_empty":"Viesti ei voi olla tyhjä","no_recipients_choose_another_group":"Tässä ryhmässä ei ole vastaanottajia. Valitse toinen ryhmä."}},"fr":{"models_conversations":{"cannot_be_empty":"Le message ne doit pas être vide","no_recipients_choose_another_group":"Aucun destinataire ne se trouve dans ce groupe. Veuillez sélectionner un autre groupe."}},"fr-CA":{"models_conversations":{"cannot_be_empty":"Le message ne doit pas être vide","no_recipients_choose_another_group":"Aucun destinataire n\'est dans ce groupe. Veuillez choisir un autre groupe."}},"he":{"models_conversations":{"cannot_be_empty":"הודעה אינה יכולה להשאר ריקה","no_recipients_choose_another_group":"אין נמענים בקבוצה זו. בבקשה לבחור קבוצה אחרת."}},"ht":{"models_conversations":{"cannot_be_empty":"Mesaj la pa dwe vid","no_recipients_choose_another_group":"Pa gen resipyan nan gwoup sa a. Tanpri chwazi yon lòt gwoup."}},"hu":{"models_conversations":{"cannot_be_empty":"Az üzenet nem lehet üres","no_recipients_choose_another_group":"Nincsenek címzettek ebben a csoportban. Kérjük, válasszon egy másik csoportot."}},"hy":{"models_conversations":{"cannot_be_empty":"Հաղորդագրությունը չի կարող դատարկ լինել","no_recipients_choose_another_group":"Այս խմբում ստացողներ չկան: Ընտրեք մեկ այլ խումբ:"}},"is":{"models_conversations":{"cannot_be_empty":"Skilaboð geta ekki verið auð","no_recipients_choose_another_group":"Engir móttakendur eru í þessum hóp. Veldu annan hóp."}},"it":{"models_conversations":{"cannot_be_empty":"Il messaggio non può essere lasciato vuoto","no_recipients_choose_another_group":"Non ci sono destinatari in questo gruppo. Scegli un altro gruppo."}},"ja":{"models_conversations":{"cannot_be_empty":"メッセージは空白にできません","no_recipients_choose_another_group":"このグループには受信者がいません。別のグループを選択してください。"}},"ko":{"models_conversations":{"cannot_be_empty":"메시지 내용이 있어야 함","no_recipients_choose_another_group":"이 그룹에 수신인이 없습니다. 다른 그룹을 선택하시기 바랍니다."}},"mi":{"models_conversations":{"cannot_be_empty":"E kore e taea e kore Karere","no_recipients_choose_another_group":"Kaore he kaiwhiwhi kei roto i tēnei rōpū. Tēnā koa kōwhiri he rōpūkē ake"}},"nb":{"models_conversations":{"cannot_be_empty":"Melding kan ikke være tom","no_recipients_choose_another_group":"Det er ingen mottakere i denne gruppen. Velg en annen gruppe."}},"nb-x-k12":{"models_conversations":{"cannot_be_empty":"Melding kan ikke være tom","no_recipients_choose_another_group":"Det er ingen mottakere i denne gruppen. Velg en annen gruppe."}},"nl":{"models_conversations":{"cannot_be_empty":"Bericht kan niet leeg zijn","no_recipients_choose_another_group":"Er zijn geen ontvangers in deze groep. Kies een andere groep."}},"nn":{"models_conversations":{"cannot_be_empty":"Meldinga kan ikkje vere tom","no_recipients_choose_another_group":"Det er ikkje mottakarar i denne gruppa. Vel ei anna gruppe."}},"pl":{"models_conversations":{"cannot_be_empty":"Wiadomość nie może być pusta","no_recipients_choose_another_group":"Brak odbiorców w tej grupie. Należy wybrać następną grupę."}},"pt":{"models_conversations":{"cannot_be_empty":"A mensagem não pode ficar em branco","no_recipients_choose_another_group":"Nenhum destinatário está neste grupo. Por favor, escolha outro grupo."}},"pt-BR":{"models_conversations":{"cannot_be_empty":"Mensagem não pode estar em branco","no_recipients_choose_another_group":"Nenhum destinatário está neste grupo. Escolha outro grupo."}},"ru":{"models_conversations":{"cannot_be_empty":"Сообщение не может быть пустым","no_recipients_choose_another_group":"В этой группе нет получателей. Выберите другую группу."}},"sv":{"models_conversations":{"cannot_be_empty":"Meddelandet kan inte lämnas blankt","no_recipients_choose_another_group":"Det finns inga mottagare i den här gruppen. Välj en annan grupp."}},"tr":{"models_conversations":{"cannot_be_empty":"Mesaj boş olamaz","no_recipients_choose_another_group":"Bu grupta alıcılar bulunamadı. Lütfen farklı bir grup seçiniz."}},"zh-Hans":{"models_conversations":{"cannot_be_empty":"消息不能为空","no_recipients_choose_another_group":"没有收件人在此小组。请选择其他小组。"}},"zh-Hant":{"models_conversations":{"cannot_be_empty":"訊息不可為空白","no_recipients_choose_another_group":"此群組沒有收件人。請選擇其他群組。"}}}'))
var j=n["default"].scoped("models_conversations")
var x=i("FIFq")
var C=function(e,t){for(var i in t)O.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},O={}.hasOwnProperty
var E=function(e){var t,i
C(n,e)
function n(){return n.__super__.constructor.apply(this,arguments)}n.prototype.url="/api/v1/conversations"
t=j.t("cannot_be_empty","Message cannot be blank")
i=j.t("no_recipients_choose_another_group","No recipients are in this group. Please choose another group.")
n.prototype.validate=function(e,n){var r
r={}
e.body&&s.a.trim(e.body.toString())||(r.body=[{message:t}])
e.recipients&&e.recipients.length||(r.recipients=[{message:i}])
return Object.keys(r).length?r:void 0}
return n}(x["Model"])
var A=function(){function e(e){this.chunkSize=e.chunkSize||100}e.prototype.save=function(e,t){var i
e.context_code=ENV.context_asset_string
i=S.a.chunk(e.recipients,this.chunkSize).map((function(i){var n
n=Object.assign({},e,{recipients:i})
return(new E).save(n,t)}))
return s.a.when.apply(s.a,i)}
e.prototype.validate=function(e,t){return(new E).validate(e,t)}
return e}()
var D=i("GLiE")
var N=i.n(D)
i("BYL3")
var M=function(e,t){return function(){return e.apply(t,arguments)}},P=function(e,t){for(var i in t)q.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},q={}.hasOwnProperty
t["a"]=function(e){P(t,e)
function t(){this.updateListOfRecipients=M(this.updateListOfRecipients,this)
this.getFormData=M(this.getFormData,this)
this._findRecipientGroupByName=M(this._findRecipientGroupByName,this)
this.validateBeforeSave=M(this.validateBeforeSave,this)
this.toJSON=M(this.toJSON,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("recipientGroups")
t.optionProperty("context")
t.prototype.template=k
t.prototype.wrapperTemplate=w["a"]
t.prototype.className="validated-form-view form-dialog"
t.prototype.defaults={height:500,width:500}
t.prototype.els={"[name=recipientGroupName]":"$recipientGroupName","#message-recipients":"$messageRecipients","[name=body]":"$messageBody"}
t.prototype.events=N.a.extend({},c["a"].prototype.events,{"change [name=recipientGroupName]":"updateListOfRecipients","click .dialog_closer":"close",dialogclose:"close"})
t.prototype.initialize=function(e){t.__super__.initialize.apply(this,arguments)
this.options.title=this.context?o.t("Message students for %{context}",{context:this.context}):o.t("Message students")
this.recipients=this.recipientGroups[0].recipients
return this.model||(this.model=new A({chunkSize:ENV.MAX_GROUP_CONVERSATION_SIZE}))}
t.prototype.toJSON=function(){var e,t,i,n,r
t={}
r=["title","recipients","recipientGroups"]
for(e=0,n=r.length;e<n;e++){i=r[e]
t[i]=this[i]}return t}
t.prototype.validateBeforeSave=function(e,t){var i
i=this.model.validate(e)
if(i){i.body&&(t.body=i.body)
i.recipients&&(t.recipientGroupName=i.recipients)}return t}
t.prototype._findRecipientGroupByName=function(e){return N.a.detect(this.recipientGroups,(function(t){return t.name===e}))}
t.prototype.getFormData=function(){var e,t,i,n
n=this.$el.toJSON(),t=n.recipientGroupName,e=n.body
i=this._findRecipientGroupByName(t).recipients
return{body:e,recipients:N.a.pluck(i,"id")}}
t.prototype.updateListOfRecipients=function(){var e,t
e=this.$recipientGroupName.val()
t=this._findRecipientGroupByName(e).recipients
return this.$messageRecipients.html(g({recipients:t}))}
t.prototype.onSaveSuccess=function(){this.close()
return s.a.flashMessage(o.t("Message Sent!"))}
t.prototype.close=function(){t.__super__.close.apply(this,arguments)
this.hideErrors()
return this.remove()}
return t}(c["a"])},VTHg:function(e,t){e.exports=e=>e.id.replace(/^question_/,"")},WEeK:function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("TSYQ")
var m=i.n(p)
var g=i("cClk")
var f=i("nAyT")
var h=i("jtGx")
var b=i("E+IV")
var v=i("/UXv")
var y=i("sTNg")
var k=i("TstA")
var w=i("BTe1")
var z=i("J2CL")
function S(e){var t=e.colors,i=e.typography,n=e.borders,r=e.spacing,o=e.forms
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,borderWidth:n.widthSmall,borderStyle:n.style,borderColor:t.borderMedium,borderRadius:n.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:r.small,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:i.fontSizeSmall,smallHeight:o.inputHeightSmall,mediumFontSize:i.fontSizeMedium,mediumHeight:o.inputHeightMedium,largeFontSize:i.fontSizeLarge,largeHeight:o.inputHeightLarge}}S.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return D}))
var j,x,C,O,E
var A={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::-ms-input-placeholder,input[type].qBMHb_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var D=(j=Object(f["a"])("7.0.0",{label:"renderLabel",disabled:"interaction",readOnly:"interaction",required:"isRequired",inline:"display"}),x=Object(z["i"])(S,A),j(C=x(C=(E=O=function(e){Object(c["a"])(t,e)
function t(e){var i
Object(r["a"])(this,t)
i=Object(a["a"])(this,Object(s["a"])(t).call(this))
i.handleInputRef=function(e){i._input=e
i.props.inputRef(e)}
i.handleChange=function(e){i.props.onChange(e,e.target.value)}
i.handleBlur=function(e){i.props.onBlur(e)
i.setState({hasFocus:false})}
i.handleFocus=function(e){i.props.onFocus(e)
i.setState({hasFocus:true})}
i.state={hasFocus:false}
i._defaultId=Object(w["a"])("TextInput")
i._messagesId=Object(w["a"])("TextInput-messages")
return i}Object(o["a"])(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var i=this.props,r=i.type,o=i.size,a=i.textAlign,s=i.placeholder,c=i.value,_=i.disabled,u=i.readOnly,l=i.interaction,p=i.required,g=i.isRequired
var f=Object(h["a"])(this.props,t.propTypes,["layout"])
var b=(e={},Object(n["a"])(e,A.input,true),Object(n["a"])(e,A[o],o),Object(n["a"])(e,A["textAlign--".concat(a)],a),e)
var v=""
f["aria-describedby"]&&(v="".concat(f["aria-describedby"]))
this.hasMessages&&(v=""!==v?"".concat(v," ").concat(this._messagesId):this._messagesId)
return d.a.createElement("input",Object.assign({},f,{className:m()(b),value:c,placeholder:s,ref:this.handleInputRef,type:r,id:this.id,required:g||p,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===l||_,readOnly:"readonly"===l||u,"aria-describedby":""!==v?v:null,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,i=t.interaction,r=t.disabled,o=t.width,a=t.inline,s=t.display,c=t.label,_=t.renderLabel,u=t.renderBeforeInput,l=t.renderAfterInput
var p=u||l
var g=(e={},Object(n["a"])(e,A.facade,true),Object(n["a"])(e,A.disabled,"disabled"===i||r),Object(n["a"])(e,A.invalid,this.invalid),Object(n["a"])(e,A.focused,this.state.hasFocus),e)
return d.a.createElement(y["a"],Object.assign({},Object(h["c"])(this.props,y["a"].propTypes),{id:this.id,label:Object(b["a"])(_||c),messagesId:this._messagesId,inline:"inline-block"===s||a,width:o}),d.a.createElement("span",{className:m()(g)},p?d.a.createElement(k["a"],{wrap:"wrap",__dangerouslyIgnoreExperimentalWarnings:true},u&&d.a.createElement(k["a"].Item,{padding:"0 0 0 small"},Object(b["a"])(u)),d.a.createElement(k["a"].Item,{shouldGrow:true,shouldShrink:true},d.a.createElement(k["a"],{__dangerouslyIgnoreExperimentalWarnings:true},d.a.createElement(k["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),l&&d.a.createElement(k["a"].Item,{padding:"0 small 0 0"},Object(b["a"])(l))))):this.renderInput()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
t.displayName="TextInput"
return t}(_["Component"]),O.propTypes={renderLabel:l.a.oneOfType([l.a.node,l.a.func]),type:l.a.oneOf(["text","email","url","tel","search","password"]),id:l.a.string,interaction:l.a.oneOf(["enabled","disabled","readonly"]),messages:l.a.arrayOf(y["e"].message),size:l.a.oneOf(["small","medium","large"]),textAlign:l.a.oneOf(["start","center"]),width:l.a.string,display:l.a.oneOf(["inline-block","block"]),placeholder:l.a.string,isRequired:l.a.bool,inputRef:l.a.func,inputContainerRef:l.a.func,value:Object(g["a"])(l.a.string),renderBeforeInput:l.a.oneOfType([l.a.node,l.a.func]),renderAfterInput:l.a.oneOfType([l.a.node,l.a.func]),onChange:l.a.func,onBlur:l.a.func,onFocus:l.a.func,label:l.a.oneOfType([l.a.node,l.a.func]),disabled:l.a.bool,readOnly:l.a.bool,required:l.a.bool,inline:l.a.bool},O.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:"enabled",isRequired:false,value:void 0,display:"block",placeholder:void 0,width:void 0,size:"medium",textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0,label:void 0,disabled:void 0,readOnly:void 0,required:void 0,inline:void 0},E))||C)||C)},"Z/f4":function(e,t,i){"use strict"
var n=i("rePB")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("TSYQ")
var m=i.n(p)
var g=i("n12J")
var f=i("J2CL")
var h=i("jtGx")
var b=i("oXx0")
function v(e){var t=e.colors,i=e.typography,n=e.spacing
return{color:t.textDarkest,background:t.backgroundLightest,fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,fontSize:i.fontSizeMedium,borderColor:t.borderMedium,headerBorderColor:t.borderDark,hoverBorderColor:t.borderBrand,captionColor:t.textDarkest,captionFontSize:i.fontSizeMedium,smallFontSize:i.fontSizeSmall,smallLineHeight:i.lineHeightFit,smallPadding:"".concat(n.xxSmall," ").concat(n.xSmall),mediumFontSize:i.fontSizeMedium,mediumLineHeight:i.lineHeightCondensed,mediumPadding:"".concat(n.xSmall," ").concat(n.small),largeFontSize:i.fontSizeLarge,largeLineHeight:i.lineHeightCondensed,largePadding:"".concat(n.small," ").concat(n.medium),stripedBackground:t.backgroundLight}}v.canvas=function(e){return{color:e["ic-brand-font-color-dark"],captionColor:e["ic-brand-font-color-dark"],hoverBorderColor:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return x}))
var y,k,w,z,S
var j={componentId:"eQCNs",template:function(e){return"\n\n.eQCNs_bGBk{border-collapse:collapse;border-spacing:0;color:".concat(e.color||"inherit",";display:table;font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";max-width:100%;width:100%}\n\n.eQCNs_bGBk,.eQCNs_bGBk caption{background:").concat(e.background||"inherit","}\n\n.eQCNs_bGBk caption{color:").concat(e.captionColor||"inherit",";font-size:").concat(e.captionFontSize||"inherit",";text-align:start}\n\n[dir=ltr] .eQCNs_bGBk caption{text-align:left}\n\n[dir=rtl] .eQCNs_bGBk caption{text-align:right}\n\n.eQCNs_bGBk td,.eQCNs_bGBk th,.eQCNs_bGBk tr{box-sizing:border-box}\n\n.eQCNs_bGBk td,.eQCNs_bGBk th{border-bottom-color:").concat(e.borderColor||"inherit",";border-bottom-style:solid;border-bottom-width:0.0625rem;text-align:start;vertical-align:middle}\n\n[dir=ltr] .eQCNs_bGBk td,[dir=ltr] .eQCNs_bGBk th{text-align:left}\n\n[dir=rtl] .eQCNs_bGBk td,[dir=rtl] .eQCNs_bGBk th{text-align:right}\n\n.eQCNs_bGBk th{font-weight:700}\n\n.eQCNs_bGBk thead>th{border-bottom-color:").concat(e.headerBorderColor||"inherit","}\n\n.eQCNs_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.eQCNs_doqw td,.eQCNs_doqw th{line-height:").concat(e.smallLineHeight||"inherit",";padding:").concat(e.smallPadding||"inherit","}\n\n.eQCNs_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.eQCNs_ycrn td,.eQCNs_ycrn th{line-height:").concat(e.mediumLineHeight||"inherit",";padding:").concat(e.mediumPadding||"inherit","}\n\n.eQCNs_cMDj{font-size:").concat(e.largeFontSize||"inherit","}\n\n.eQCNs_cMDj td,.eQCNs_cMDj th{line-height:").concat(e.largeLineHeight||"inherit",";padding:").concat(e.largePadding||"inherit","}\n\n.eQCNs_bBWt>tbody>tr>td:nth-child(2n),.eQCNs_cWEh>tbody>tr:nth-child(odd){background-color:").concat(e.stripedBackground||"inherit","}\n\n.eQCNs_fKeI>tbody>tr{border-left:0.1875rem solid transparent;border-right:0.1875rem solid transparent}\n\n.eQCNs_fKeI>tbody>tr:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.eQCNs_bvTK{table-layout:fixed}")},root:"eQCNs_bGBk",small:"eQCNs_doqw",medium:"eQCNs_ycrn",large:"eQCNs_cMDj",colStriped:"eQCNs_bBWt",rowStriped:"eQCNs_cWEh",hover:"eQCNs_fKeI",fixedLayout:"eQCNs_bvTK"}
var x=(y=Object(b["a"])(),k=Object(f["i"])(v,j),y(w=k(w=(S=z=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var i=(e={},Object(n["a"])(e,j.root,true),Object(n["a"])(e,j.fixedLayout,"fixed"===this.props.layout),Object(n["a"])(e,j[this.props.size],true),Object(n["a"])(e,j.rowStriped,"rows"===this.props.striped),Object(n["a"])(e,j.colStriped,"columns"===this.props.striped),Object(n["a"])(e,j.hover,this.props.hover),e)
var r=g["a"].omitViewProps(Object(h["a"])(this.props,t.propTypes),t)
return d.a.createElement(g["a"],Object.assign({},r,{elementRef:this.props.elementRef,as:"table",className:m()(i),margin:this.props.margin,__dangerouslyIgnoreExperimentalWarnings:true}),d.a.createElement("caption",null,this.props.caption),this.props.children)}}])
t.displayName="Table"
return t}(_["Component"]),z.propTypes={caption:l.a.node.isRequired,children:l.a.node,hover:l.a.bool,size:l.a.oneOf(["small","medium","large"]),striped:l.a.oneOf(["columns","rows"]),margin:f["c"].spacing,elementRef:l.a.func,layout:l.a.oneOf(["auto","fixed"])},z.defaultProps={children:null,striped:void 0,margin:void 0,elementRef:void 0,hover:false,size:"medium",layout:"auto"},S))||w)||w)},agq5:function(e,t,i){"use strict"
var n=i("VTBJ")
var r=i("rePB")
var o=i("1OyB")
var a=i("vuIU")
var s=i("md7G")
var c=i("foSv")
var _=i("Ji7U")
var d=i("q1tI")
var u=i.n(d)
var l=i("17x9")
var p=i.n(l)
var m=i("TSYQ")
var g=i.n(m)
var f=i("msMH")
var h=i("n12J")
var b=i("J2CL")
var v=i("E+IV")
var y=i("KgFQ")
var k=i("jtGx")
function w(e){var t=e.borders,i=e.colors,n=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,paddingSmall:n.small,paddingMedium:n.medium,paddingLarge:n.medium,iconColor:i.textDark,smallMargin:n.xSmall,mediumMargin:n.small,largeMargin:n.medium,iconHoverColor:i.textLink,backgroundColor:i.backgroundLightest,iconHoverColorInverse:i.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:i.textDark,messageColorClickable:i.textLink,messageColorInverse:i.textLight,messageFontSizeSmall:r.fontSizeSmall,messageFontSizeMedium:r.fontSizeMedium,messageFontSizeLarge:r.fontSizeLarge,clickableActiveBg:i.backgroundBrand,clickableActiveText:i.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}w.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return O}))
var z,S,j,x
var C={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var O=(z=Object(b["i"])(w,C),z(S=(x=j=function(e){Object(_["a"])(t,e)
function t(){var e
var i
Object(o["a"])(this,t)
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
i=Object(s["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(r)))
i.handleClick=function(e){var t=i.props,n=t.readOnly,r=t.onClick
if(n){e.preventDefault()
e.stopPropagation()}else"function"===typeof r&&r(e)}
return i}Object(a["a"])(t,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,i=e.headingAs,n=e.heading
return u.a.createElement("span",{className:C.heading},u.a.createElement(f["a"],{level:t,as:i,color:"primary",__dangerouslyIgnoreExperimentalWarnings:true},n))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,i=e.message,n=e.hero
return u.a.createElement("span",{className:C.content},n&&u.a.createElement("span",{className:C.hero},this.renderHero()),t&&this.renderHeading(),i&&u.a.createElement("span",{className:C.message},Object(v["a"])(i)))}},{key:"render",value:function(){var e
var i=this.props,o=i.href,a=i.disabled,s=i.readOnly,c=i.onClick,_=i.size,d=i.margin,l=i.elementRef
var p=(e={},Object(r["a"])(e,C.root,true),Object(r["a"])(e,C[_],true),Object(r["a"])(e,C.clickable,o||c),Object(r["a"])(e,C.disabled,a),e)
var m=Object(y["a"])(t,this.props)
return u.a.createElement(h["a"],{as:"div",margin:d,__dangerouslyIgnoreExperimentalWarnings:true},u.a.createElement(h["a"],Object.assign({},Object(k["a"])(this.props,Object(n["a"])({},t.propTypes,{},h["a"].propTypes)),{type:"button"===m?"button":null,as:m,elementRef:l,className:g()(p),href:o,onClick:this.handleClick,disabled:a,"aria-disabled":a||s?"true":null,__dangerouslyIgnoreExperimentalWarnings:true}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
t.displayName="Billboard"
return t}(d["Component"]),j.propTypes={hero:p.a.oneOfType([p.a.element,p.a.func]),size:p.a.oneOf(["small","medium","large"]),as:p.a.elementType,elementRef:p.a.func,heading:p.a.string,headingAs:p.a.oneOf(["h1","h2","h3","span"]),headingLevel:p.a.oneOf(["h1","h2","h3","h4"]),message:p.a.oneOfType([p.a.node,p.a.func]),onClick:p.a.func,href:p.a.string,disabled:p.a.bool,readOnly:p.a.bool,margin:b["c"].spacing},j.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},x))||S)},ahuC:function(e,t,i){"use strict"
var n=i("GLiE")
var r=i.n(n)
var o=i("ouhR")
var a=i.n(o)
var s=i("FIFq")
var c=i.n(s)
var _=i("3O+N")
var d=i.n(_)
var u=i("pQTu")
var l=i("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"paginated_view":{"loading_more_results":"تحميل مزيد من النتائج"}},"cy":{"paginated_view":{"loading_more_results":"Wrthi’n llwytho mwy o ganlyniadau"}},"da":{"paginated_view":{"loading_more_results":"indlæser flere resultater"}},"da-x-k12":{"paginated_view":{"loading_more_results":"Indlæser flere resultater"}},"de":{"paginated_view":{"loading_more_results":"Weitere Ergebnisse laden"}},"el":{"paginated_view":{"loading_more_results":"Γίνεται φόρτωση περισσοτέρων αποτελεσμάτων"}},"en-AU":{"paginated_view":{"loading_more_results":"Loading more results"}},"en-AU-x-unimelb":{"paginated_view":{"loading_more_results":"Loading more results"}},"en-CA":{"paginated_view":{"loading_more_results":"Loading more results"}},"en-GB":{"paginated_view":{"loading_more_results":"Loading more results"}},"en-GB-x-lbs":{"paginated_view":{"loading_more_results":"Loading more results"}},"en-GB-x-ukhe":{"paginated_view":{"loading_more_results":"Loading more results"}},"es":{"paginated_view":{"loading_more_results":"Cargando más resultados"}},"fa":{"paginated_view":{"loading_more_results":"در حال بارگذاری نتایج بیشتر"}},"fi":{"paginated_view":{"loading_more_results":"Lataa lisää tuloksia"}},"fr":{"paginated_view":{"loading_more_results":"Chargement de résultats supplémentaires"}},"fr-CA":{"paginated_view":{"loading_more_results":"Chargement de résultats supplémentaires"}},"he":{"paginated_view":{"loading_more_results":"טוען תוצאות נוספות"}},"ht":{"paginated_view":{"loading_more_results":"Chajman plis rezilta"}},"hu":{"paginated_view":{"loading_more_results":"További találatok betöltése"}},"hy":{"paginated_view":{"loading_more_results":"Բեռնում է լրացուցիչ արդյունքներ"}},"is":{"paginated_view":{"loading_more_results":"Sæki fleiri niðurstöður"}},"it":{"paginated_view":{"loading_more_results":"Caricamento di ulteriori risultati"}},"ja":{"paginated_view":{"loading_more_results":"より多くの結果を読み込んでいます"}},"ko":{"paginated_view":{"loading_more_results":"더 많은 결과 로드"}},"mi":{"paginated_view":{"loading_more_results":"Uta atu ngā hua"}},"nb":{"paginated_view":{"loading_more_results":"Laster flere resultater"}},"nb-x-k12":{"paginated_view":{"loading_more_results":"Laster flere resultater"}},"nl":{"paginated_view":{"loading_more_results":"Bezig met laden van meer resultaten"}},"nn":{"paginated_view":{"loading_more_results":"Lastar fleire resultat"}},"pl":{"paginated_view":{"loading_more_results":"Trwa ładowanie większej liczby wyników"}},"pt":{"paginated_view":{"loading_more_results":"Carregando mais resultados"}},"pt-BR":{"paginated_view":{"loading_more_results":"Carregando mais resultados"}},"ru":{"paginated_view":{"loading_more_results":"Загрузка других результатов"}},"sl":{"paginated_view":{"loading_more_results":"Nalaganje več rezultatov"}},"sv":{"paginated_view":{"loading_more_results":"Laddar fler resultat"}},"sv-x-k12":{"paginated_view":{"loading_more_results":"Laddar fler resultat"}},"tr":{"paginated_view":{"loading_more_results":"Daha fazla sonuç yükleniyor"}},"uk":{"paginated_view":{"loading_more_results":"Завантажити більше результатів"}},"zh-Hans":{"paginated_view":{"loading_more_results":"正在加载其它结果"}},"zh-Hant":{"paginated_view":{"loading_more_results":"載入更多結果"}}}'))
i("jQeR")
i("0sPK")
u["default"].scoped("paginated_view")
i("DfGn")
var p=i("EvX+")
var m=d.a.default
var g=m.template,f=m.templates=m.templates||{}
var h="PaginatedView"
f[h]=g((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s="",c=i.helperMissing,_=this.escapeExpression
s+='<div class="paginatedView-loading" role="alert" aria-live="assertive">\n    <span>'+_((o=i.t||t&&t.t,a={hash:{scope:"paginated_view"},data:r},o?o.call(t,"loading_more_results","Loading more results",a):c.call(t,"t","loading_more_results","Loading more results",a)))+"</span>\n</div>\n"
return s}))
p["a"].loadStylesheet("jst/PaginatedView",{new_styles_normal_contrast:{combinedChecksum:"bf30c3a7d1"},new_styles_high_contrast:{combinedChecksum:"bf30c3a7d1"},responsive_layout_normal_contrast:{combinedChecksum:"bf30c3a7d1"},responsive_layout_high_contrast:{combinedChecksum:"bf30c3a7d1"},new_styles_normal_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},new_styles_high_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"bf30c3a7d1"},responsive_layout_high_contrast_rtl:{combinedChecksum:"bf30c3a7d1"}}[p["a"].getCssVariant()])
var b=f[h]
var v=function(e,t){for(var i in t)y.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},y={}.hasOwnProperty
t["a"]=function(e){v(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.paginationLoaderTemplate=b
t.prototype.paginationScrollContainer=window
t.prototype.distanceTillFetchNextPage=100
t.prototype.initialize=function(e){var i
i=t.__super__.initialize.call(this,e)
this.fetchOptions=e.fetchOptions
this.bindPaginationEvents()
this.paginationStopped=false
return i}
t.prototype.render=function(){var e
e=t.__super__.render.apply(this,arguments)
this.collection.fetchingNextPage&&this.showPaginationLoader()
this.startPaginationListener()
return e}
t.prototype.showPaginationLoader=function(){null==this.$paginationLoader&&(this.$paginationLoader=a()(this.paginationLoaderTemplate()))
return this.placePaginationLoader()}
t.prototype.placePaginationLoader=function(){var e
return null!=(e=this.$paginationLoader)?e.insertAfter(this.el):void 0}
t.prototype.hidePaginationLoader=function(){var e
return null!=(e=this.$paginationLoader)?e.remove():void 0}
t.prototype.distanceToBottom=function(){var e,t
e=a()(this.paginationScrollContainer)
t=e[0]===window?a()(document).height():e[0].scrollHeight
return t-e.scrollTop()-e.height()}
t.prototype.startPaginationListener=function(){var e
if(this.paginationStopped)return
e=a.a.proxy(this.fetchNextPageIfNeeded,this)
a()(this.paginationScrollContainer).on("scroll.pagination:"+this.cid,e)
a()(this.paginationScrollContainer).on("resize.pagination:"+this.cid,e)
return this.fetchNextPageIfNeeded()}
t.prototype.stopPaginationListener=function(){this.paginationStopped=true
return a()(this.paginationScrollContainer).off(".pagination:"+this.cid)}
t.prototype.fetchNextPageIfNeeded=function(){return setTimeout((e=this,function(){var t
if(e.collection.fetchingNextPage)return
if(!e.collection.urls||!e.collection.urls.next){e.collection.length&&e.stopPaginationListener()
return}t=e.distanceToBottom()<e.distanceTillFetchNextPage||!e.collection.length
if(a()(e.paginationScrollContainer).is(":visible")&&t)return e.collection.fetch(r.a.extend({page:"next"},e.fetchOptions))}),0)
var e}
t.prototype.bindPaginationEvents=function(){this.collection.on("beforeFetch:next",this.showPaginationLoader,this)
this.collection.on("fetch:next",this.hidePaginationLoader,this)
return this.collection.on("all",this.fetchNextPageIfNeeded,this)}
return t}(c.a.View)},bCCX:function(e,t,i){"use strict"
i.r(t);(function(e,n){var r=i("SLVX")
var o
if("undefined"!==typeof self)o=self
else if("undefined"!==typeof window)o=window
else if("undefined"!==typeof e)o=e
else{o=n}var a=Object(r["a"])(o)
t["default"]=a}).call(this,i("yLpj"),i("3UD+")(e))},cClk:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(n,r,o){var a=e.apply(null,arguments)
if(a)return a
if(n[r]&&"function"!==typeof n[t])return new Error(["You provided a '".concat(r,"' prop without an '").concat(t,"' handler on '").concat(o,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(i,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},dSIe:function(e,t,i){"use strict"
var n=i("VTBJ")
var r=i("pQTu")
var o=i("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","import":"استيراد"},"outcomesFindDialog":{"confirm":{"import_group":"هل تريد استيراد المجموعة \\"%{group}\\" إلى المجموعة \\"%{target}\\"؟","import_outcome":"هل تريد استيراد الحصيلة \\"%{outcome}\\" إلى المجموعة \\"%{target}\\"؟"},"dont_import":"لا يمكن استيراد هذه المجموعة.","flash":{"importError":"حدث خطأ أثناء الاستيراد. الرجاء إعادة المحاولة لاحقًا.","importSuccess":"تم الاستيراد بنجاح"},"top_level":"المستوى العالي لـ %{context}"}},"cy":{"buttons":{"cancel":"Canslo","import":"Mewngludo"},"outcomesFindDialog":{"confirm":{"import_group":"Mewngludo grŵp \\"%{group}\\" i grŵp \\"%{target}\\"?","import_outcome":"Mewngludo deilliant \\"%{outcome}\\" i grŵp \\"%{target}\\"?"},"dont_import":"Does dim modd mewngludo’r grŵp hwn.","flash":{"importError":"Gwall wrth fewngludo. Rhowch gynnig arall arni rywbryd eto.","importSuccess":"Wedi llwyddo i fewngludo"},"top_level":"%{context} Lefel Uchaf"}},"da":{"buttons":{"cancel":"Annuller","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer gruppe \\"%{group}\\" til gruppe \\"%{target}\\"?","import_outcome":"Importer læringsudbytte \\"%{outcome}\\" til gruppe \\"%{target}\\"?"},"dont_import":"Denne gruppe kan ikke importeres.","flash":{"importError":"Der opstod en fejl under import. Prøv igen senere.","importSuccess":"Vellykket import"},"top_level":"%{context} højeste niveau"}},"da-x-k12":{"buttons":{"cancel":"Annuller","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer gruppe \\"%{group}\\" til gruppe \\"%{target}\\"?","import_outcome":"Importer læringsudbytte \\"%{outcome}\\" til gruppe \\"%{target}\\"?"},"dont_import":"Denne gruppe kan ikke importeres.","flash":{"importError":"Der opstod en fejl under import. Prøv igen senere.","importSuccess":"Vellykket import"},"top_level":"%{context} højeste niveau"}},"de":{"buttons":{"cancel":"Abbrechen","import":"Importieren"},"outcomesFindDialog":{"confirm":{"import_group":"Gruppe „%{group}“ in Gruppe „%{target}“ importieren?","import_outcome":"Lernziel „%{outcome}“ in Gruppe „%{target}“ importieren?"},"dont_import":"Diese Gruppe kann nicht importiert werden.","flash":{"importError":"Fehler beim Import Versuchen Sie es später noch einmal.","importSuccess":"Import erfolgreich"},"top_level":"Oberste %{context}-Ebene"}},"el":{"buttons":{"cancel":"Ακύρωση","import":"Εισαγωγή"},"outcomesFindDialog":{"confirm":{"import_group":"Εισαγωγή της ομάδας «%{group}» στην ομάδα «%{target}»;","import_outcome":"Εισαγωγή αποτελέσματος «%{outcome}» στην ομάδα «%{target}»;"},"dont_import":"Δεν είναι δυνατή η εισαγωγή αυτής της ομάδας.","flash":{"importError":"Παρουσιάστηκε σφάλμα κατά την εισαγωγή. Παρακαλώ δοκιμάστε ξανά αργότερα.","importSuccess":"Η Εισαγωγή ήταν επιτυχής"},"top_level":"%{context} Ανώτατο Επίπεδο"}},"en-AU":{"buttons":{"cancel":"Cancel","import":"Import"},"outcomesFindDialog":{"confirm":{"import_group":"Import group \\"%{group}\\" to group \\"%{target}\\"?","import_outcome":"Import outcome \\"%{outcome}\\" to group \\"%{target}\\"?"},"dont_import":"This group cannot be imported.","flash":{"importError":"An error occurred while importing. Please try again later.","importSuccess":"Import successful"},"top_level":"%{context} Top Level"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","import":"Import"}},"en-CA":{"buttons":{"cancel":"Cancel","import":"Import"},"outcomesFindDialog":{"confirm":{"import_group":"Import group \\"%{group}\\" to group \\"%{target}\\"?","import_outcome":"Import outcome \\"%{outcome}\\" to group \\"%{target}\\"?"},"dont_import":"This group cannot be imported.","flash":{"importError":"An error occurred while importing. Please try again later.","importSuccess":"Import successful"},"top_level":"%{context} Top Level"}},"en-GB":{"buttons":{"cancel":"Cancel","import":"Import"},"outcomesFindDialog":{"confirm":{"import_group":"Import group \\"%{group}\\" to group \\"%{target}\\"?","import_outcome":"Import outcome \\"%{outcome}\\" to group \\"%{target}\\"?"},"dont_import":"This group cannot be imported.","flash":{"importError":"An error occurred while importing. Please try again later.","importSuccess":"Import successful"},"top_level":"%{context} Top Level"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","import":"Import"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","import":"Import"},"outcomesFindDialog":{"confirm":{"import_group":"Import group \\"%{group}\\" to group \\"%{target}\\"?","import_outcome":"Import outcome \\"%{outcome}\\" to group \\"%{target}\\"?"},"dont_import":"This group cannot be imported.","flash":{"importError":"An error occurred while importing. Please try again later.","importSuccess":"Import successful"},"top_level":"%{context} Top Level"}},"es":{"buttons":{"cancel":"Cancelar","import":"Importar"},"outcomesFindDialog":{"confirm":{"import_group":"¿Importar grupo \\"%{group}\\" a grupo \\"%{target}\\"?","import_outcome":"¿Importar competencia \\"%{outcome}\\" a grupo \\"%{target}\\"?"},"dont_import":"No se puede importar este grupo.","flash":{"importError":"Ha ocurrido un error al importar. Inténtelo de nuevo más tarde.","importSuccess":"Importación correcta"},"top_level":"%{context} Nivel superior"}},"fa":{"buttons":{"cancel":"لغو","import":"وارد کردن"},"outcomesFindDialog":{"confirm":{"import_group":"گروه \\"%{group}\\" به گروه  \\"%{target}\\" وارد شود؟","import_outcome":"نتیجه \\"%{outcome}\\" به گروه \\"%{target}\\" وارد شود؟"},"dont_import":"این گروه نمی تواند وارد شود.","flash":{"importError":"در هنگام وارد کردن، خطایی رخ داد. لطفا بعدا دوباره تلاش کنید.","importSuccess":"ورود با موفقیت انجام شد"},"top_level":"رده بالای %{context}"}},"fi":{"buttons":{"cancel":"Peruuta","import":"Tuo"},"outcomesFindDialog":{"confirm":{"import_group":"Tuodaanko ryhmä \\"%{group}\\" ryhmään \\"%{target}\\"?","import_outcome":"Tuodaanko tulos \\"%{outcome}\\" ryhmään \\"%{target}\\"?"},"dont_import":"Tämän ryhmän tuonti ei onnistunut.","flash":{"importError":"Tuontia suoritettaessa tapahtui virhe, Yritä myöhemmin uudelleen.","importSuccess":"Tuonti onnistui"},"top_level":"%{context} Ylätaso"}},"fr":{"buttons":{"cancel":"Annuler","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer le groupe « %{group} » dans le groupe « %{target} » ?","import_outcome":"Importer le résultat « %{outcome} » dans le groupe « %{target} » ?"},"dont_import":"Impossible d’importer ce groupe.","flash":{"importError":"Une erreur est survenue pendant l’import. Veuillez réessayer plus tard.","importSuccess":"Importation réussie"},"top_level":"%{context} Niveau Max"}},"fr-CA":{"buttons":{"cancel":"Annuler","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer le groupe « %{group} » dans le groupe « %{target} »?","import_outcome":"Importer l\'acquis « %{outcome} » dans le groupe « %{target} »?"},"dont_import":"Impossible d’importer ce groupe.","flash":{"importError":"Une erreur est survenue lors de l’importation. Veuillez essayer de nouveau plus tard.","importSuccess":"Importation réussie"},"top_level":"Niveau supérieur pour %{context}"}},"he":{"buttons":{"cancel":"ביטול","import":"ייבוא"},"outcomesFindDialog":{"confirm":{"import_group":"ייבוא קבוצה \\"%{group}\\" לתוך קבוצה \\"%{target}\\"?","import_outcome":"ייבוא תוצאות למידה \\"%{outcome}\\" אל קבוצה \\"%{target}\\"?"},"dont_import":"אין אפשרות לייבא קבוצה זו","flash":{"importError":"אירעה שגיאה בעת ייבוא הנתונים. בבקשה לנסות שוב מאוחר יותר","importSuccess":"היבוא הושלם בהצלחה"},"top_level":"%{context} רמה עליונה"}},"ht":{"buttons":{"cancel":"Anile","import":"Enpòte"},"outcomesFindDialog":{"confirm":{"import_group":"Enpòte gwoup \\"%{group}\\" nan gwoup \\"%{target}\\"?","import_outcome":"Enpòte rezilta \\"%{outcome}\\" nan gwoup \\"%{target}\\"?"},"dont_import":"Gwoup sa a pa kapab enpòte.","flash":{"importError":"Gen yon erè ki fèt pandan enpòtasyon an. Tanpri eseye ankò.","importSuccess":"Enpòtasyon reyisi"},"top_level":"%{context} Top Nivo"}},"hu":{"buttons":{"cancel":"Mégse","import":"Importálás"},"outcomesFindDialog":{"confirm":{"import_group":"\\"%{group}\\" csoport importálása ebbe a csoportba \\"%{target}\\"?","import_outcome":"Tanulási eredmény importálása \\"%{outcome}\\" ebbe a csoportba \\"%{target}\\"?"},"dont_import":"Ez a csoport nem importálható","flash":{"importError":"Hiba történt az importálás során! Kérjük, frissítse az oldalt, és próbálja újra!","importSuccess":"Az importálás sikeres"},"top_level":"%{context} Felső szint"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","import":"Ներմուծել"},"outcomesFindDialog":{"confirm":{"import_group":"Ներմուծե՞լ \\"%{group}\\" խումբը \\"%{target}\\" խմբում:","import_outcome":"Ներմուծե՞լ \\"%{outcome}\\" արդյունքը \\"%{target}\\" խմբում:"},"dont_import":"Այս խումբը հնարավոր չէ ներմուծել:","flash":{"importError":"Ներմուծման ժամանակ սխալ է տեղի ունեցել: Խնդրում ենք փորձել ավելի ուշ:","importSuccess":"Հաջողությամբ ներմուծվել է"},"top_level":"%{context} վերին մակարդակ"}},"is":{"buttons":{"cancel":"Hætta við","import":"Flytja inn"},"outcomesFindDialog":{"confirm":{"import_group":"Flytja inn \\"%{group}\\" í hóp \\"%{target}\\"?","import_outcome":"Flytja niðurstöðu \\"%{outcome}\\" í hóp \\"%{target}\\"?"},"dont_import":"Ekki er hægt að flytja þennan hóp inn.","flash":{"importError":"Villa kom upp við innflutning. Vinsamlegast reyndu aftur seinna.","importSuccess":"Innflutningur tókst"},"top_level":"%{context} efsta stig"}},"it":{"buttons":{"cancel":"Annulla","import":"Importa"},"outcomesFindDialog":{"confirm":{"import_group":"Importare il gruppo \\"%{group}\\" nel gruppo \\"%{target}\\"?","import_outcome":"Importare l\'esito \\"%{outcome}\\" nel gruppo \\"%{target}\\"?"},"dont_import":"Questo gruppo non può essere importato.","flash":{"importError":"Si è verificato un errore durante l\'importazione. Riprova in seguito.","importSuccess":"Importazione riuscita"},"top_level":"%{context} Livello superiore"}},"ja":{"buttons":{"cancel":"キャンセル","import":"インポート"},"outcomesFindDialog":{"confirm":{"import_group":"グループ \\"%{group}\\" をグループ \\"%{target}\\" にインポートしますか？","import_outcome":"結果 \\"%{outcome}\\" をグループ 「%{target}″ にインポートしますか？"},"dont_import":"このグループはインポートできません。","flash":{"importError":"インポート中にエラーが発生しました。後ほどもう一度やり直してください。","importSuccess":"インポートが成功しました"},"top_level":"%{context} トップレベル"}},"ko":{"buttons":{"cancel":"취소","import":"가져오기"},"outcomesFindDialog":{"confirm":{"import_group":"\\"%{group}\\" 그룹을 \\"%{target}\\" 그룹으로 가져오시겠습니까?","import_outcome":"\\"%{outcome}\\" 성과를 \\"%{target}\\" 그룹으로 가져오시겠습니까?"},"dont_import":"이 그룹은 가져올 수 없습니다.","flash":{"importError":"가져오는 중에 오류가 발생했습니다. 다시 시도하시기 바랍니다.","importSuccess":"성공적으로 가져옴"},"top_level":"%{context} 최고 수준"}},"mi":{"buttons":{"cancel":"Whakakore","import":"Kawemai"},"outcomesFindDialog":{"confirm":{"import_group":"Kawemai rōpū \\"%{group}\\" ki te rōpū \\"%{target}\\"?","import_outcome":"Kawemai putanga \\"%{outcome}\\" ki te rōpū \\"%{target}\\"?"},"dont_import":"E kore e taea te kawemai tēnei rōpū.","flash":{"importError":"He hapa i puta i te wā o te tikiake. Tēnā koa ngana anō i muri mai.","importSuccess":"Kawemai angitu"},"top_level":"%{context} Taumata Teitei"}},"nb":{"buttons":{"cancel":"Avbryt","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer gruppen \\"%{group}\\" til gruppen \\"%{target}\\"?","import_outcome":"Importer læringsmålet \\"%{outcome}\\" til gruppen \\"%{target}\\"?"},"dont_import":"Denne gruppen kan ikke importeres.","flash":{"importError":"Et avvik oppsto under importering. Forsøk igjen senere.","importSuccess":"Import lyktes"},"top_level":"%{context} toppnivå"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer gruppen \\"%{group}\\" til gruppen \\"%{target}\\"?","import_outcome":"Importer målet \\"%{outcome}\\" til gruppen \\"%{target}\\"?"},"dont_import":"Denne gruppen kan ikke importeres.","flash":{"importError":"Et avvik oppsto under importering. Forsøk igjen senere.","importSuccess":"Import lyktes"},"top_level":"%{context} toppnivå"}},"nl":{"buttons":{"cancel":"Annuleren","import":"Importeren"},"outcomesFindDialog":{"confirm":{"import_group":"Groep importeren \\"%{group}\\" in groep \\"%{target}\\"?","import_outcome":"Leerdoel importeren \\"%{outcome}\\" in groep \\"%{target}\\"?"},"dont_import":"Deze groep kan niet geïmporteerd worden.","flash":{"importError":"Er is een fout opgetreden tijdens het importeren. Probeer het later opnieuw.","importSuccess":"Succesvol geïmporteerd"},"top_level":"%{context} Bovenste niveau"}},"nn":{"buttons":{"cancel":"Avbryt","import":"Importer"},"outcomesFindDialog":{"confirm":{"import_group":"Importer gruppe \\"%{group}\\" til gruppe \\"%{target}\\"?","import_outcome":"Importer læringsmål \\"%{outcome}\\" til gruppe \\"%{target}\\"?"},"dont_import":"Gruppa kan ikkje importerast.","flash":{"importError":"Ein feil oppstod under importeringa. Prøv på nytt seinare.","importSuccess":"Importert"},"top_level":"%{context} toppnivå"}},"pl":{"buttons":{"cancel":"Anuluj","import":"Importuj"},"outcomesFindDialog":{"confirm":{"import_group":"Importować grupę \\"%{group}\\" do grupy \\"%{target}\\"?","import_outcome":"Importować wynik \\"%{outcome}\\" do grupy \\"%{target}\\"?"},"dont_import":"Tej grupy nie można zaimportować.","flash":{"importError":"Wystąpił błąd podczas importowania. Spróbuj ponownie później.","importSuccess":"Importowanie zakończone pomyślnie"},"top_level":"%{context} najwyższy poziom"}},"pt":{"buttons":{"cancel":"Cancelar","import":"Importar"},"outcomesFindDialog":{"confirm":{"import_group":"Importar grupo \\"%{group}\\" para o grupo \\"%{target}\\"?","import_outcome":"Importar resultado \\"%{outcome}\\" para o grupo \\"%{target}\\"?"},"dont_import":"Não é possível importar este grupo.","flash":{"importError":"Ocorreu um erro durante a importação. É favor, tentar novamente mais tarde.","importSuccess":"Importação efetuada com sucesso"},"top_level":"%{context}  Nível superior"}},"pt-BR":{"buttons":{"cancel":"Cancelar","import":"Importar"},"outcomesFindDialog":{"confirm":{"import_group":"Importar grupo “%{group}” ao grupo “%{target}”?","import_outcome":"Importar objetivo “%{outcome}” ao grupo “%{target}”?"},"dont_import":"Este grupo não pode ser importado.","flash":{"importError":"Ocorreu um erro durante a importação. Por favor, tente novamente mais tarde.","importSuccess":"Importação realizada com sucesso"},"top_level":"%{context} Maior nível"}},"ru":{"buttons":{"cancel":"Отменить","import":"Импортировать"},"outcomesFindDialog":{"confirm":{"import_group":"Импортировать группу «%{group}» в группу «%{target}»?","import_outcome":"Импортировать результат «%{outcome}» в группу «%{target}»?"},"dont_import":"Данная группа не может быть импортирована.","flash":{"importError":"Ошибка во время импорта. Попробуйте еще раз позже.","importSuccess":"Успешно импортировано"},"top_level":"%{context} Верхний уровень"}},"sl":{"buttons":{"cancel":"Prekliči","import":"Uvozi"}},"sv":{"buttons":{"cancel":"Avbryt","import":"Importera"},"outcomesFindDialog":{"confirm":{"import_group":"Importera gruppen \\"%{group}\\" till gruppen \\"%{target}\\"?","import_outcome":"Importera lärandemålen \\"%{outcome}\\" till gruppen \\"%{target}\\"?"},"dont_import":"Den här gruppen kan inte importeras","flash":{"importError":"Ett fel inträffade vid importering. Försök igen senare.","importSuccess":"Importerades"},"top_level":"%{context} Högsta nivå"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","import":"Importera"}},"tr":{"buttons":{"cancel":"İptal","import":"İçeri Aktar"},"outcomesFindDialog":{"confirm":{"import_group":"\\"%{group}\\" grubunu \\"%{target}\\" grubuna aktarsın mı ? "},"dont_import":"Bu grup içeri aktarılamadı.","flash":{"importError":"Bir hata meydana geldi. Lütfen sayfayı yenileyin ve tekrar deneyin.","importSuccess":"İçeri aktarma başarılı"},"top_level":"%{context} Üst Seviye"}},"uk":{"buttons":{"cancel":"Скасувати","import":"Імпорт"}},"zh-Hans":{"buttons":{"cancel":"取消","import":"导入"},"outcomesFindDialog":{"confirm":{"import_group":"将小组“%{group}”导入小组“%{target}”吗?","import_outcome":"将结果“%{outcome}”导入小组“%{target}”吗?"},"dont_import":"此小组不能导入。","flash":{"importError":"导入时发生错误。请稍后再试。","importSuccess":"导入成功"},"top_level":"%{context}顶层"}},"zh-Hant":{"buttons":{"cancel":"取消","import":"匯入"},"outcomesFindDialog":{"confirm":{"import_group":"匯入群組「%{group}」至群組「%{target}」？","import_outcome":"匯入成果「%{outcome}」至群組「%{target}」？"},"dont_import":"無法匯入此群組。","flash":{"importError":"匯入時發生錯誤。請稍後重試。","importSuccess":"匯入成功"},"top_level":"%{context} 頂層"}}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("outcomesFindDialog")
var s=i("ouhR")
var c=i.n(s)
var _=i("B0dq")
var d=i("As2g")
var u=i("yJLO")
var l=i("GCM4")
var p=i("k/iY")
var m=i("fPy4")
var g=i("3O+N")
var f=i.n(g)
Object(o["a"])(JSON.parse('{"ar":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*يمكن الوصول إلى النتائج التي تم إنشاؤها عن طريق مؤسستك أو ولايتك من هنا.  مثلما هو الحال مع دورتك التدريبية، ستتيح لك اللوحة على اليسار التنقل بين النتائج الحالية. بعد العثور على نتيجة أو مجموعة ترغب في استخدامها، انقر فوق الزر أدناه لإضافتها إلى دورتك التدريبية.*","title":"العثور على نتائج"}}}}},"cy":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Mae modd cael gafael yma ar ddeilliannau wedi’u creu gan eich sefydliad, neu dalaith. Yn union fel yn eich cwrs, bydd y panel ar y chwith yn caniatáu i chi grwydro rhwng deilliannau sy’n bodoli’n barod. Ar ôl i chi ddod o hyd i’r deilliant neu’r grŵp deilliannau rydych chi am ei ddefnyddio, cliciwch y botwm mewngludo isod i’w ychwanegu i’ch cwrs.*","title":"Dod o hyd i Ddeilliannau"}}}}},"da":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Her kan du få adgang til læringsudbytte, oprettet af din institution eller region. Præcis som i dit fag giver panelet til venstre dig mulighed for at navigere mellem eksisterende læringsudbytter. Når du har fundet læringsudbyttet eller læringsudbyttegruppen, som du vil bruge, klikker du på importknappen nedenfor for at føje det eller den til dit fag.*","title":"Sådan finder du læringsudbytter"}}}}},"da-x-k12":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Her kan du få adgang til læringsudbytte, oprettet af din institution eller region. Præcis som i dit fag giver panelet til venstre dig mulighed for at navigere mellem eksisterende læringsudbytter. Når du har fundet læringsudbyttet eller læringsudbyttegruppen, som du vil bruge, klikker du på importknappen nedenfor for at føje det eller den til dit fag.*","title":"Sådan finder du læringsudbytter"}}}}},"de":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Auf die von Ihrer Institution oder Ihrem Bundesland erstellten Lernziele kann hier zugegriffen werden. Wie bei Ihrem Kurs können Sie im linken Bereich zwischen den vorhandenen Lernzielen navigieren. Wenn Sie das gewünschte Lernziel oder die gewünschte Lernzielgruppe gefunden haben, klicken Sie unten auf die Schaltfläche „Importieren“, um das Lernziel bzw. die Lernzielgruppe zu Ihrem Kurs hinzuzufügen.*","title":"Nach Lernzielen suchen"}}}}},"el":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"\\u003cmrk mid=\\"4807\\" mtype=\\"seg\\"\\u003e*Πρόσβαση στα αποτελέσματα που έχουν δημιουργηθεί από το ίδρυμά σας ή την πολιτεία μπορείτε να έχετε από εδώ.\\u003c/mrk\\u003e \\u003cmrk mid=\\"4808\\" mtype=\\"seg\\"\\u003eΌπως ακριβώς και στο μάθημά σας, έτσι και εδώ το μενού αριστερά θα σας βοηθήσει να πλοηγηθείτε στα υπάρχοντα αποτελέσματα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"4809\\" mtype=\\"seg\\"\\u003eΜόλις βρείτε το αποτέλεσμα ή την ομάδα αποτελεσμάτων που επιθυμείτε να χρησιμοποιήσετε, κάντε κλικ στο κουμπί εισαγωγής παρακάτω για να το προσθέσετε στο μάθημά σας.*\\u003c/mrk\\u003e","title":"Εύρεση Αποτελεσμάτων"}}}}},"en-AU":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*","title":"Finding Outcomes"}}}}},"en-AU-x-unimelb":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution, or state can be accessed here. Just like in your subject, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your subject.*","title":"Finding Outcomes"}}}}},"en-CA":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*","title":"Finding Outcomes"}}}}},"en-GB":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*","title":"Finding outcomes"}}}}},"en-GB-x-lbs":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution or state can be accessed here. Just like in your programme, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your programme.*","title":"Finding outcomes"}}}}},"en-GB-x-ukhe":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Outcomes created by your institution or state can be accessed here. Just like in your module, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your module.*","title":"Finding outcomes"}}}}},"es":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Aquí podrá acceder a los resultados creados por su institución o estado. Al igual que en su curso, el panel de la izquierda le permitirá navegar entre los resultados existentes. Una vez que haya encontrado la competencia o el grupo de competencias que desea utilizar, haga clic en el botón importar que se encuentra abajo para agregarlo a su curso.*","title":"Buscando resultados"}}}}},"fa":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*می توانید به نتایج ایجاد شده توسط دانشگاه یا استان خود در اینجا دسترسی پیدا کنید. درست مثل درس خود، صفحه سمت چپ به شما امکان می دهد بین نتایج موجود پیمایش کنید. هنگامی که نتیجه یا گروه نتیجه که مایلید استفاده کنید را یافتید، برای افزودن آن به درس خود روی دکمه ورود در قسمت زیر کلیک کنید.*","title":"در حال یافتن نتایج"}}}}},"fi":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Laitoksesi tai valtion luomiin tuloksiin pääsee täältä. Kuten kurssillasi, vasemman paneelin kautta voit navigoida olemassa olevien tulosten välillä. Kun olet löytänyt tuloksen tai tulosryhmän, jota haluat käyttää, napsauta tuontipainiketta alla ja lisää se kurssiisi.*","title":"Tulosten löytäminen"}}}}},"fr":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Les résultats créés par votre institution ou région sont visibles ici. Comme dans vos cours, le volet sur la gauche vous permet d’explorer les résultats existants. Une fois que vous avez trouvé celui qui vous intéresse (ou le groupe), cliquez sur le bouton Importer en dessous pour l’ajouter à votre cours.*","title":"Recherche de résultats"}}}}},"fr-CA":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Les résultats créés par votre institution ou région sont visibles ici. Comme dans vos cours, le volet sur la gauche vous permet d’explorer les résultats existants. Une fois que vous avez trouvé celui qui vous intéresse (ou le groupe), cliquez sur le bouton Importer en dessous pour l’ajouter à votre cours.*","title":"Recherche de résultats"}}}}},"he":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*תוצאות למידה אשר נוצרו במוסדך, או מדינתך נגישים כאן. בדיוק כפי שבקורס שלך, הפאנל הצידי יאפשר לך לנווט בין תוצאות שונות. ברגע שמצאת את התוצאה או קבוצת התוצאות בהן רוצה להשתמש, יש להקליק על כפתור הייבוא שבהמשך כדי להוסיף זאת לקורס שלך.*","title":"חיפוש תוצאות למידה"}}}}},"ht":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Rezilta keye pa enstitisyon ou an, oswa ou ka konsilte eta a la a. Menm jan nan kou w la, pano agoch la ap pèmèt ou navige an rezilta ki egziste yo. Kou ou jwenn rezilta oswa gwoup rezilta ou te vle itilize a, klike sou touch enpòte ki pi ba a pou ajoute li nan kou ou a*","title":"Jwenn Rezilta"}}}}},"hu":{"outcomes":{"find_instructions":{"instructions":{"find":{"title":"Tanulási eredmények keresése"}}}}},"hy":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Ձեր կազմակերպության կամ պետության կողմից ստեղծված արդյունքները կարելի է գնահատել այստեղ: Ինչպես և ձեր դասընթացի դեպքում, ձախ կողմի վահանակը թույլ է տալիս նավարկել գոյություն ունեցող արդյունքների միջև: Հենց որ գտնեք այն արդյունքը կամ արդյունքների խումբը, որ ցանկանում եք օգտագործել, սեղմեք ներմուծման ներքևի կոճակը այն ձեր դասընթացին ավելացնելու համար: *","title":"Արդյունքների որոնում"}}}}},"is":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Niðurstöður stofnaðar af skólanum eða sveitarfélaginu geta verið aðgengilegar hér. Eins og í námskeiðinu þínu gerir borðið til vinstri þér kleift að fara á milli niðurstaðna. Þegar þú hefur fundið niðurstöðuna eða niðurstöðuhópinn sem þú vilt nota, smelltu á innflutningshnappinn til að bæta honum við námskeiðið þitt.*","title":"Finn niðurstöður"}}}}},"it":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Qui puoi accedere agli esiti creati dal tuo istituto o stato. Analogamente al tuo corso, il pannello a sinistra ti consentirà di spostarti tra gli esiti esistenti. Una volta trovato l\'esito o il gruppo di esiti che desideri utilizzare, fai clic sul pulsante Importa sotto per aggiungerlo al tuo corso.*","title":"Ricerca di esiti"}}}}},"ja":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*組織によって作成された成果または状態には、ここでアクセスできます。コース内と同じように、左側のパネルを使用して、既存の成果の間を移動できます。使用する成果または成果グループが見つかったら、下のインポート ボタンをクリックして、コースに追加します。*","title":"成果の検索"}}}}},"ko":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*여기에서 여러분의 기관이나 시/도에서 만든 성과를 액세스할 수 있습니다. 과목에서와 마찬가지로 왼쪽의 패널을 이용하면 기존 성과 사이를 탐색할 수 있습니다. 사용하려는 성과나 성과 그룹을 찾은 다음 아래 가져오기 버튼을 클릭하면 과목에 추가할 수 있습니다.*","title":"성과 찾기"}}}}},"mi":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Ka taea te uru Putanga hanga etō whakanōhanga, kāwanatanga rānei i konei. Rite tonu ki roto i tou akoranga, ka tukua te rōpū ki te maui ki a koe ki te whakatere i waenganui i ngā putanga tīariari. I te wā e kitea e koe te rōpū putanga hua rānei e hiahia ana koe ki te whakamahi, pāwhiri i te pātene kawemai i raro ki te tāpiri ki tō akoranga.*","title":"E kimi ana i ngā Putanga"}}}}},"nb":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Læringsmål som er opprettet av institusjonen eller på nasjonalt nivå er tilgjengelig her. Som i emnet forøvrig, vil kontrollpanelet til venstre gi deg muligheten til å navigere mellom eksisterende læringsmål. Når du har funnet det læringsmålet eller læringsmålgruppen du ønsker å benytte, klikk på importer-knappen nedenfor for å legge det til i emnet ditt.*","title":"Finner læringsmål"}}}}},"nb-x-k12":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Mål som er opprettet av institusjonen eller på nasjonalt nivå er tilgjengelig her. Som i faget forøvrig, vil kontrollpanelet til venstre gi deg muligheten til å navigere mellom eksisterende mål. Når du har funnet det målet eller målgruppen du ønsker å benytte, klikk på importer-knappen nedenfor for å legge det til i faget ditt.*","title":"Finner mål"}}}}},"nl":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Leerdoelen die door jouw instelling of status gemaakt zijn, kunnen hier verkregen worden. Net als in jouw cursus zal het paneel aan de linkerkant het je mogelijk maken om tussen verschillende bestaande leerdoelen te navigeren. Eens je het gewenste leerdoel of de leerdoel-groep gevonden hebt, klik dan op de import-knop hieronder om dit resultaat of die groep aan jouw cursus toe te voegen.*","title":"Leerresulaten zoeken"}}}}},"nn":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Nasjonale eller institusjonsspesifikke læringsmål er tilgjengelege her. Som på emnet, kan du via panelet til venstre navigere mellom gjeldande læringsmål. Når du finn mål eller målgruppa du vil bruke, klikkar du på importknappen nedanfor og legg til målet på emnet ditt.*","title":"Finne læringsmål"}}}}},"pl":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*W tym miejscu można uzyskać dostęp do wyników utworzonych przez instytucję. Panel po lewej stronie, podobnie jak na kursie, umożliwia nawigację między istniejącymi wynikami. Po odnalezieniu wyniku lub grupy wyników, kliknij poniższy przycisk Importuj, aby dodać ją do kursu.*","title":"Wyszukiwanie wyników"}}}}},"pt":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Pode aceder aqui aos resultados criados pela sua instituição ou estado. Tal como acontece na sua disciplina, o painel à esquerda permite-lhe navegar entre os resultados existentes. Depois de localizar o resultado ou grupo de resultados que pretende utilizar, clique no botão Importar abaixo para adicionar o resultado à disciplina.*","title":"Localizar resultados"}}}}},"pt-BR":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Os objetivos criados pela sua instituição ou estado podem ser acessados aqui. Igual ao seu curso, o painel à esquerda permitirá que você navegue pelos objetivos existentes. Uma vez localizado o objetivo, ou grupo de objetivos, que você deseja utilizar, clique no botão importar abaixo para adicioná-lo ao seu curso.*","title":"Localizando objetivos"}}}}},"ru":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*С результатами, созданными вашей организацией или штатом, можно ознакомиться здесь. Как и в вашем курсе, панель слева позволит вам перемещаться между существующими результатами. Как только вы нашли результат или группу результатов, которые вы хотите использовать, щелкните на кнопку импорта внизу, чтобы добавить их в ваш курс.*","title":"Поиск результатов"}}}}},"sl":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Tu je mogoče dostopati do učnih izidov, ki jih je ustvarila vaša ustanova ali država. Enako kot pri vašem predmetu boste s ploščo na levi lahko navigirali med obstoječimi učnimi izidi. Ko najdete izid ali skupino izidov, ki jo želite uporabiti, kliknite spodnji gumb za uvoz, da jih dodate svojemu predmetu.*","title":"Iskanje učnih izidov"}}}}},"sv":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Lärandemål som skapats av din institution eller kommun kan nås här. Precis som i din kurs, hjälper panelen till vänster dig att navigera mellan olika befintliga lärandemål. När du har hittat det målet eller grupp du vill använda, klickar du på import-knappen nedan för att lägga till den till din kurs.*","title":"Hittar lärandemål"}}}}},"sv-x-k12":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Lärandemål som skapats av din institution eller kommun kan nås här. Precis som i din kurs, hjälper panelen till vänster dig att navigera mellan olika befintliga lärandemål. När du har hittat det målet eller grupp du vill använda, klickar du på import-knappen nedan för att lägga till den till din kurs.*","title":"Hittar lärandemål"}}}}},"tr":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Kurumunuz ya da devlet tarafından oluşturulan Öğrenme çıktılarına buradan erişilebilir. Dersinizde olduğu gibi soldaki bölümde varolan öğrenme çıktıları arasında gezinebilirsiniz. Kullanmak istediğiniz öğrenme çıktısı ya da öğrenme çıktı grubunu bulduğunuzda dersinize eklemek için aşağıdaki içe aktar butonuna tıklayın.*","title":"Öğrenme Çıktıları Aranıyor"}}}}},"uk":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*Результати, створені вашою установою або державою, доступні тут. Так само, як і у вашому курсі, панель зліва дозволить вам переміщуватися між наявними результатами. Коли ви знайдете результат або групу результатів, які ви хочете використати, натисніть на кнопку імпорту нижче для додання їх до вашого курсу.*","title":"Пошук результатів"}}}}},"zh-Hans":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*可以在此处访问您所在学校或州创建的结果。就像在您的课程中一样，左侧的面板将允许您在现有结果之间导航。您找到想使用的结果或结果组之后，单击下面的导入按钮，即可将其添加到您的课程。*","title":"查找结果"}}}}},"zh-Hant":{"outcomes":{"find_instructions":{"instructions":{"find":{"description":"*可以在此處訪問您的機構或州創建的成果。就像在您的課程中一樣，左側的面板可以允許您在現有的成果之間瀏覽。在找到您想使用的成果或成果群組之後，按一下以下的導入按鈕，可將其添加至您的課程。*","title":"尋找成果"}}}}}}'))
r["default"].scoped("outcomes.find_instructions")
i("DfGn")
var h=f.a.default
var b=h.template,v=h.templates=h.templates||{}
var y="outcomes/findInstructions"
v[y]=b((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s="",c=i.helperMissing,_=this.escapeExpression
s+='<div class="wrapper">\n  <h2 class="title">\n    '+_((o=i.t||t&&t.t,a={hash:{scope:"outcomes.find_instructions"},data:r},o?o.call(t,"instructions.find.title","Finding Outcomes",a):c.call(t,"t","instructions.find.title","Finding Outcomes",a)))+'\n  </h2>\n  <div class="description">\n    '+_((o=i.t||t&&t.t,a={hash:{w0:"<p>$1</p>",scope:"outcomes.find_instructions"},data:r},o?o.call(t,"instructions.find.description","*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*",a):c.call(t,"t","instructions.find.description","*Outcomes created by your institution, or state can be accessed here. Just like in your course, the panel to the left will allow you to navigate between existing outcomes. Once you have found the outcome or outcome group you wish to use, click the import button below to add it to your course.*",a)))+"\n  </div>\n</div>\n"
return s}))
var k=v[y]
i("MWZS")
i("vpJZ")
i.d(t,"a",(function(){return w}))
class w extends u["a"]{dialogOptions(){return{id:"import_dialog",title:this.title,width:1e3,resizable:true,close(){c()(".find_outcome").focus()},buttons:[{text:a.t("#buttons.cancel","Cancel"),click:e=>this.cancel(e)},{text:a.t("#buttons.import","Import"),class:"btn-primary",click:e=>this.import(e)}]}}initialize(e){this.selectedGroup=e.selectedGroup
this.title=e.title
this.shouldImport=false!==e.shouldImport
this.disableGroupImport=e.disableGroupImport
super.initialize(...arguments)
this.render()
this.dialog.parent().find(".ui-dialog-buttonpane").css("margin-top",0)
this.sidebar=new l["a"]({el:this.$el.find(".outcomes-sidebar .wrapper"),directoryView:e.directoryView,rootOutcomeGroup:e.rootOutcomeGroup,readOnly:true,inFindDialog:true})
this.content=new p["a"]({el:this.$el.find(".outcomes-content"),instructionsTemplate:k,readOnly:true,setQuizMastery:e.setQuizMastery,useForScoring:e.useForScoring})
this.sidebar.on("select",this.content.show.bind(this.content))
this.sidebar.on("select",this.showOrHideImport.bind(this))
return this.showOrHideImport()}updateSelection(e){return this.selectedGroup=e}import(e){e.preventDefault()
const t=this.sidebar.selectedModel()
this.content.setQuizMastery&&(t.quizMasteryLevel=parseFloat(this.$el.find("#outcome_mastery_at").val())||0)
this.content.useForScoring&&(t.useForScoring=this.$el.find("#outcome_use_for_scoring").prop("checked"))
if(t.get("dontImport"))return alert(a.t("dont_import","This group cannot be imported."))
if(!this.shouldImport){this.trigger("import",t)
this.close()
return}if(confirm(this.confirmText(t))){let e,i
if(t instanceof _["a"]){i=this.selectedGroup.get("import_url")
const n=new d["a"]
e=c.a.ajaxJSON(i,"POST",{source_outcome_group_id:t.get("id"),async:true}).pipe(e=>{n.set("url",e.url)
n.poll()
return n.pollDfd}).pipe(()=>c.a.ajaxJSON(n.get("results").outcome_group_url,"GET"))}else{i=this.selectedGroup.get("outcomes_url")
e=c.a.ajaxJSON(i,"POST",{outcome_id:t.get("id")})}this.$el.disableWhileLoading(e)
return c.a.when(e).done((e,i,r)=>{const o=t.clone()
if(o instanceof _["a"])o.set(e)
else{o.outcomeLink=Object(n["a"])({},t.outcomeLink)
o.outcomeGroup=e.outcome_group
o.outcomeLink.url=e.url
o.set({context_id:e.context_id,context_type:e.context_type})}this.trigger("import",o)
this.close()
return c.a.flashMessage(a.t("flash.importSuccess","Import successful"))}).fail(()=>c.a.flashError(a.t("flash.importError","An error occurred while importing. Please try again later.")))}}render(){this.$el.html(Object(m["a"])({skipToolbar:true}))
return this}showOrHideImport(){const e=this.sidebar.selectedModel()
let t=true
!e||e.get("dontImport")?t=false:e&&e instanceof _["a"]&&this.disableGroupImport&&(t=false)
c()(".ui-dialog-buttonpane .btn-primary").toggle(t)}confirmText(e){const t=this.selectedGroup.get("title")||a.t("top_level","%{context} Top Level",{context:this.selectedGroup.get("context_type")})
return e instanceof _["a"]?a.t("confirm.import_group",'Import group "%{group}" to group "%{target}"?',{group:e.get("title"),target:t}):a.t("confirm.import_outcome",'Import outcome "%{outcome}" to group "%{target}"?',{outcome:e.get("title"),target:t})}}},dTie:function(e,t,i){"use strict"
var n=i("An8g")
var r=i("Ff2n")
var o=i("q1tI")
var a=i.n(o)
i("17x9")
var s=i("Mmr1")
var c=i("msMH")
var _=i("pQTu")
var d=i("m0r6")
Object(d["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
i("jQeR")
i("0sPK")
var u=_["default"].scoped("modal")
var l=i("98st")
i.d(t,"a",(function(){return m}))
function p(){return document.getElementById("flash_screenreader_holder")}function m(e){let t=e.label,i=e.closeButtonLabel,o=e.onDismiss,_=e.children,d=Object(r["a"])(e,["label","closeButtonLabel","onDismiss","children"])
return a.a.createElement(l["a"],Object.assign({liveRegion:p},d,{label:t,onDismiss:o}),Object(n["a"])(l["a"].Header,{},void 0,Object(n["a"])(s["a"],{placement:"end",offset:"medium",onClick:o},void 0,i||u.t("Close")),Object(n["a"])(c["a"],{},void 0,t)),_)}["Header","Body","Footer"].forEach(e=>m[e]=l["a"][e])
m.defaultProps={closeButtonLabel:void 0}},etQE:function(e,t,i){"use strict"
i.d(t,"e",(function(){return n}))
i.d(t,"a",(function(){return r}))
i.d(t,"b",(function(){return o}))
i.d(t,"c",(function(){return a}))
i.d(t,"d",(function(){return c}))
function n(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function r(e){if(!e)return
return e.then(s).then(e=>e.json().then(t=>({data:t,headers:{link:e.headers.get("Link")}})))}function o(e){if(!e)return
return e.then(s).then(e=>e.json())}function a(e){if(!e)return
return e.then(s).then(e=>e.text())}function s(e){if(e.status<400)return e
{const t=new Error(e.statusText)
t.response=e
throw t}}const c={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json"}}},f6Li:function(e,t,i){"use strict"
var n=i("q1tI")
var r=i.n(n)
i("17x9")
var o=i("ouhR")
var a=i.n(o)
const s=9
const c=1
class _ extends r.a.Component{componentDidMount(){this.fetchSVG()}componentWillReceiveProps(e){e.url!==this.props.url&&this.fetchSVG()}fetchSVG(){false
a.a.ajax(this.props.url,{success:e=>{this.svg=e
e.nodeType===s&&(this.svg=e.firstChild)
if(this.svg.nodeType!==c&&"SVG"!==this.svg.nodeName)throw new Error("SVGWrapper: SVG Element must be returned by request to ".concat(this.props.url))
this.props.fillColor&&this.svg.setAttribute("style","fill:".concat(this.props.fillColor))
this.svg.setAttribute("focusable",false)
this.rootSpan.appendChild(this.svg)}})}render(){return r.a.createElement("span",{ref:e=>{this.rootSpan=e}})}}t["a"]=_},fPy4:function(e,t,i){"use strict"
var n=i("3O+N")
var r=i.n(n)
var o=i("pQTu")
var a=i("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"add_a_new_outcome_cbdbe96c":"إضافة نتيجة جديدة","add_a_new_outcome_group_e3fab2fc":"إضافة مجموعة نتائج جديدة","back_2900f52a":"عودة","find_8d605019":"بحث","find_an_outcome_919328e6":"العثور على نتيجة","group_a8f5ed9c":"المجموعة","import_1b31507":"استيراد","import_a_set_of_outcomes_6b782192":"استيراد مجموعة من النواتج","manage_rubrics_5d274f6a":"إدارة مقاييس التقييم","outcome_da397d20":"النتيجة"},"cy":{"add_a_new_outcome_cbdbe96c":"Ychwanegu Deilliant Newydd","add_a_new_outcome_group_e3fab2fc":"Ychwanegu Grŵp Deilliannau Newydd","back_2900f52a":"Yn ôl","find_8d605019":"Canfod","find_an_outcome_919328e6":"Dod o hyd i ddeilliant","group_a8f5ed9c":"Grŵp","import_1b31507":"Mewngludo","import_a_set_of_outcomes_6b782192":"Mewngludo set o Ddeilliannau","manage_rubrics_5d274f6a":"Rheoli Cyfarwyddiadau Sgorio","outcome_da397d20":"Deilliant"},"da":{"add_a_new_outcome_cbdbe96c":"Tilføj et nyt læringsudbytte","add_a_new_outcome_group_e3fab2fc":"Tilføj en ny læringsudbytte-gruppe","back_2900f52a":"Tilbage","find_8d605019":"Find","find_an_outcome_919328e6":"Find et læringsudbytte","group_a8f5ed9c":"Gruppe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer et sæt læringsudbytter","manage_rubrics_5d274f6a":"Administrering af rubrikker","outcome_da397d20":"Læringsudbytte"},"da-x-k12":{"add_a_new_outcome_cbdbe96c":"Tilføj et nyt læringsudbytte","add_a_new_outcome_group_e3fab2fc":"Tilføj en ny læringsudbytte-gruppe","back_2900f52a":"Tilbage","find_8d605019":"Find","find_an_outcome_919328e6":"Find et læringsudbytte","group_a8f5ed9c":"Gruppe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer et sæt læringsudbytter","manage_rubrics_5d274f6a":"Administrering af vurderingskriterier","outcome_da397d20":"Læringsudbytte"},"de":{"add_a_new_outcome_cbdbe96c":"Ein neues Ergebnis hinzufügen","add_a_new_outcome_group_e3fab2fc":"Eine neue Ergebnisgruppe hinzufügen","back_2900f52a":"Zurück","find_8d605019":"Suchen","find_an_outcome_919328e6":"Ein Lernziel suchen","group_a8f5ed9c":"Gruppe","import_1b31507":"Importieren","import_a_set_of_outcomes_6b782192":"Importieren einer Reihe von Ergebnissen","manage_rubrics_5d274f6a":"Bewertungsschemata verwalten","outcome_da397d20":"Lernziel"},"el":{"add_a_new_outcome_cbdbe96c":"Προσθήκη Νέου Αποτελέσματος","back_2900f52a":"Πίσω","find_8d605019":"Εύρεση","group_a8f5ed9c":"Ομάδα","import_1b31507":"Εισαγωγή","manage_rubrics_5d274f6a":"Διαχείριση Ρουμπρίκων"},"en-AU":{"add_a_new_outcome_cbdbe96c":"Add a New Outcome","add_a_new_outcome_group_e3fab2fc":"Add a New Outcome Group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an Outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of Outcomes","manage_rubrics_5d274f6a":"Manage Rubrics","outcome_da397d20":"Outcome"},"en-AU-x-unimelb":{"add_a_new_outcome_cbdbe96c":"Add a New Outcome","add_a_new_outcome_group_e3fab2fc":"Add a New Outcome Group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an Outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of Outcomes","manage_rubrics_5d274f6a":"Manage Rubrics","outcome_da397d20":"Outcome"},"en-CA":{"add_a_new_outcome_cbdbe96c":"Add a New Outcome","add_a_new_outcome_group_e3fab2fc":"Add a New Outcome Group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an Outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of Outcomes","manage_rubrics_5d274f6a":"Manage Rubrics","outcome_da397d20":"Outcome"},"en-GB":{"add_a_new_outcome_cbdbe96c":"Add a new outcome","add_a_new_outcome_group_e3fab2fc":"Add a new outcome group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of outcomes","manage_rubrics_5d274f6a":"Manage rubrics","outcome_da397d20":"Outcome"},"en-GB-x-lbs":{"add_a_new_outcome_cbdbe96c":"Add a new outcome","add_a_new_outcome_group_e3fab2fc":"Add a new outcome group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of outcomes","manage_rubrics_5d274f6a":"Manage rubrics","outcome_da397d20":"Outcome"},"en-GB-x-ukhe":{"add_a_new_outcome_cbdbe96c":"Add a new outcome","add_a_new_outcome_group_e3fab2fc":"Add a new outcome group","back_2900f52a":"Back","find_8d605019":"Find","find_an_outcome_919328e6":"Find an outcome","group_a8f5ed9c":"Group","import_1b31507":"Import","import_a_set_of_outcomes_6b782192":"Import a set of outcomes","manage_rubrics_5d274f6a":"Manage rubrics","outcome_da397d20":"Outcome"},"es":{"add_a_new_outcome_cbdbe96c":"Agregar una nueva competencia","add_a_new_outcome_group_e3fab2fc":"Agregar un nuevo grupo de competencias","back_2900f52a":"Volver","find_8d605019":"Encontrar","find_an_outcome_919328e6":"Encontrar una competencia","group_a8f5ed9c":"Grupo","import_1b31507":"Importar","import_a_set_of_outcomes_6b782192":"Importar un conjunto de resultados","manage_rubrics_5d274f6a":"Administrar rúbricas","outcome_da397d20":"Competencia"},"fa":{"add_a_new_outcome_cbdbe96c":"افزودن نتیجه جدید","add_a_new_outcome_group_e3fab2fc":"افزودن گروه نتیجه جدید","back_2900f52a":"بازگشت","find_8d605019":"یافتن","find_an_outcome_919328e6":"یافتن نتیجه","group_a8f5ed9c":"گروه","import_1b31507":"وارد کردن","manage_rubrics_5d274f6a":"مدیریت دستورالعمل های ارزیابی","outcome_da397d20":"نتیجه"},"fi":{"add_a_new_outcome_cbdbe96c":"Lisää uusi tulos","add_a_new_outcome_group_e3fab2fc":"Lisää uusi tulosryhmä","back_2900f52a":"Takaisin","find_8d605019":"Etsi","find_an_outcome_919328e6":"Löydä tulos","group_a8f5ed9c":"Ryhmä","import_1b31507":"Tuo","import_a_set_of_outcomes_6b782192":"Tulosten tuonti","manage_rubrics_5d274f6a":"Hallitse rubriikkeja","outcome_da397d20":"Tulos"},"fr":{"add_a_new_outcome_cbdbe96c":"Ajouter un nouvel acquis","add_a_new_outcome_group_e3fab2fc":"Ajouter un nouveau groupe d\'acquis","back_2900f52a":"Retour","find_8d605019":"Trouver","find_an_outcome_919328e6":"Trouver un acquis","group_a8f5ed9c":"Groupe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer un ensemble de résultats","manage_rubrics_5d274f6a":"Gérer les barèmes","outcome_da397d20":"Acquis"},"fr-CA":{"add_a_new_outcome_cbdbe96c":"Ajouter un nouveau résultat","add_a_new_outcome_group_e3fab2fc":"Ajouter un nouveau groupe de résultats","back_2900f52a":"Retour","find_8d605019":"Rechercher","find_an_outcome_919328e6":"Trouver un résultat","group_a8f5ed9c":"Groupe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer un ensemble d’acquis","manage_rubrics_5d274f6a":"Gérer les barèmes","outcome_da397d20":"Acquis"},"he":{"add_a_new_outcome_cbdbe96c":"הוספת הישג למידה חדש","add_a_new_outcome_group_e3fab2fc":"הוסםת קבוצת השגי למידה","back_2900f52a":"חזרה","find_8d605019":"חיפוש","find_an_outcome_919328e6":"מציאת השגי למידה","group_a8f5ed9c":"קבוצה","import_1b31507":"ייבוא","manage_rubrics_5d274f6a":"ניהול רובריקות"},"ht":{"add_a_new_outcome_cbdbe96c":"Ajoute yon Nouvo Rezilta","add_a_new_outcome_group_e3fab2fc":"Ajoute yon Nouvo Gwoup Rezilta","back_2900f52a":"Retounen","find_8d605019":"Jwenn","find_an_outcome_919328e6":"Jwenn yon Rezilta","group_a8f5ed9c":"Gwoup","import_1b31507":"Enpòte","import_a_set_of_outcomes_6b782192":"Enpòte yon ansanm Rezilta","manage_rubrics_5d274f6a":"Jere Ribrik","outcome_da397d20":"Rezilta"},"hu":{"add_a_new_outcome_cbdbe96c":"Új tanulási eredmény hozzáadása","add_a_new_outcome_group_e3fab2fc":"Új tanulási eredménycsoport hozzáadása","back_2900f52a":"Vissza","find_8d605019":"Keresés","find_an_outcome_919328e6":"Tanulási eredmény keresése","group_a8f5ed9c":"Csoport","import_1b31507":"Importálás","manage_rubrics_5d274f6a":"Értékelőtáblák kezelése","outcome_da397d20":"Tanulási eredmény"},"hy":{"back_2900f52a":"Վերադառնալ","group_a8f5ed9c":"Խումբ","import_1b31507":"Ներմուծել"},"is":{"add_a_new_outcome_cbdbe96c":"Bæta við nýrri niðurstöðu","add_a_new_outcome_group_e3fab2fc":"Bæta við nýjum niðurstöðuhópi","back_2900f52a":"Til baka","find_8d605019":"Finna","find_an_outcome_919328e6":"Finna niðurstöðu","group_a8f5ed9c":"Hópur","import_1b31507":"Flytja inn","import_a_set_of_outcomes_6b782192":"Flyttu inn sett af niðurstöðum","manage_rubrics_5d274f6a":"Umsjón með matsviðmiði","outcome_da397d20":"Niðurstaða"},"it":{"add_a_new_outcome_cbdbe96c":"Aggiungi un nuovo esito","add_a_new_outcome_group_e3fab2fc":"Aggiungi un nuovo gruppo di esiti","back_2900f52a":"Indietro","find_8d605019":"Trova","find_an_outcome_919328e6":"Trova un esito","group_a8f5ed9c":"Gruppo","import_1b31507":"Importa","import_a_set_of_outcomes_6b782192":"Importa un set di esiti","manage_rubrics_5d274f6a":"Gestisci rubriche","outcome_da397d20":"Risultato"},"ja":{"add_a_new_outcome_cbdbe96c":"新しい結果を追加する","add_a_new_outcome_group_e3fab2fc":"新しい結果グループを追加する","back_2900f52a":"戻る","find_8d605019":"検索","find_an_outcome_919328e6":"結果を検索する","group_a8f5ed9c":"グループ","import_1b31507":"インポート","import_a_set_of_outcomes_6b782192":"成果のセットをインポートする","manage_rubrics_5d274f6a":"注釈の管理","outcome_da397d20":"結果"},"ko":{"group_a8f5ed9c":"그룹","import_1b31507":"가져오기"},"mi":{"add_a_new_outcome_cbdbe96c":"Tāpiri i te Huanga hou","add_a_new_outcome_group_e3fab2fc":"Tāpiri i te Rōpū Huanga hou","back_2900f52a":"Hoki ki muri","find_8d605019":"Kimihia","find_an_outcome_919328e6":"Kimihia te Huanga","group_a8f5ed9c":"rōpū","import_1b31507":"Kawemai","import_a_set_of_outcomes_6b782192":"Kawemai he huinga o ngā Putanga","manage_rubrics_5d274f6a":"Whakahaere Rubrics","outcome_da397d20":"Putanga"},"nb":{"add_a_new_outcome_cbdbe96c":"Legg til et nytt læringsmål","add_a_new_outcome_group_e3fab2fc":"Legg til en ny gruppe for læringsmål","back_2900f52a":"Tilbake","find_8d605019":"Finn","find_an_outcome_919328e6":"Finn et læringsmål","group_a8f5ed9c":"Gruppe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer et sett resultater","manage_rubrics_5d274f6a":"Administrer rubrikker","outcome_da397d20":"Læringsmål"},"nb-x-k12":{"add_a_new_outcome_cbdbe96c":"Legg til et nytt mål","add_a_new_outcome_group_e3fab2fc":"Legg til en ny gruppe for mål","back_2900f52a":"Tilbake","find_8d605019":"Finn","find_an_outcome_919328e6":"Finn et mål","group_a8f5ed9c":"Gruppe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer et sett mål","manage_rubrics_5d274f6a":"Administrer vurderingskriterier","outcome_da397d20":"Mål"},"nl":{"add_a_new_outcome_cbdbe96c":"Een nieuw leerdoel toevoegen","add_a_new_outcome_group_e3fab2fc":"Een nieuwe leerdoel groep toevoegen","back_2900f52a":"Terug","find_8d605019":"Zoeken","find_an_outcome_919328e6":"Een leerdoel zoeken","group_a8f5ed9c":"Groep","import_1b31507":"Importeren","import_a_set_of_outcomes_6b782192":"Een reeks leerdoelen importeren","manage_rubrics_5d274f6a":"Rubrieken beheren","outcome_da397d20":"Leerdoel"},"nn":{"add_a_new_outcome_cbdbe96c":"Legg til nytt læringsmål","add_a_new_outcome_group_e3fab2fc":"Legg til ny læringsmålgruppe","back_2900f52a":"Tilbake","find_8d605019":"Finn","find_an_outcome_919328e6":"Finn eit læringsmål","group_a8f5ed9c":"Gruppe","import_1b31507":"Importer","import_a_set_of_outcomes_6b782192":"Importer eit sett med læringsmål","manage_rubrics_5d274f6a":"Administrer vurderingsskjema","outcome_da397d20":"Læringsmål"},"pl":{"add_a_new_outcome_cbdbe96c":"Dodaj nowy wynik","add_a_new_outcome_group_e3fab2fc":"Dodaj nową grupę wyników","back_2900f52a":"Wstecz","find_8d605019":"Szukaj","find_an_outcome_919328e6":"Wyszukaj wynik","group_a8f5ed9c":"Grupa","import_1b31507":"Importuj","import_a_set_of_outcomes_6b782192":"Importuj zestaw wyników","manage_rubrics_5d274f6a":"Zarządzaj kryteriami ocen","outcome_da397d20":"Wynik"},"pt":{"add_a_new_outcome_cbdbe96c":"Adicionar novo resultado","add_a_new_outcome_group_e3fab2fc":"Novo novo grupo de resultados","back_2900f52a":"Voltar","find_8d605019":"Localizar","find_an_outcome_919328e6":"Encontrar um resultado","group_a8f5ed9c":"Grupo","import_1b31507":"Importar","import_a_set_of_outcomes_6b782192":"Importar um conjunto de resultados","manage_rubrics_5d274f6a":"Gerenciar protocolos","outcome_da397d20":"Resultado"},"pt-BR":{"add_a_new_outcome_cbdbe96c":"Adicionar um Novo Objetivo","add_a_new_outcome_group_e3fab2fc":"Adicionar um Novo Grupo de Objetivos","back_2900f52a":"Voltar","find_8d605019":"Localizar","find_an_outcome_919328e6":"Localizar um Objetivo","group_a8f5ed9c":"Grupo","import_1b31507":"Importar","import_a_set_of_outcomes_6b782192":"Importar um conjunto de objetivos","manage_rubrics_5d274f6a":"Gerenciar rubricas","outcome_da397d20":"Objetivo"},"ru":{"add_a_new_outcome_cbdbe96c":"Добавить новый результат","add_a_new_outcome_group_e3fab2fc":"Добавить группу нового результата","back_2900f52a":"Назад","find_8d605019":"Найти","find_an_outcome_919328e6":"Найти результат","group_a8f5ed9c":"Группа","import_1b31507":"Импортировать","import_a_set_of_outcomes_6b782192":"Импортировать набор результатов","manage_rubrics_5d274f6a":"Управление рубриками","outcome_da397d20":"Результат"},"sl":{"add_a_new_outcome_cbdbe96c":"Dodaj nov izid","add_a_new_outcome_group_e3fab2fc":"Dodaj novo skupino izidov","back_2900f52a":"Nazaj","find_8d605019":"Najdi","find_an_outcome_919328e6":"Najdi izid","group_a8f5ed9c":"Skupina","import_1b31507":"Uvozi","import_a_set_of_outcomes_6b782192":"Uvozi kot nabor učnih izidov","manage_rubrics_5d274f6a":"Urejaj ocenjevalne vodnike","outcome_da397d20":"Izid"},"sv":{"add_a_new_outcome_cbdbe96c":"Lägg till nytt resultat","add_a_new_outcome_group_e3fab2fc":"Lägg till en ny lärandemåls-grupp","back_2900f52a":"Tillbaka","find_8d605019":"Hitta","find_an_outcome_919328e6":"Hitta ett lärandemål","group_a8f5ed9c":"Grupp","import_1b31507":"Importera","import_a_set_of_outcomes_6b782192":"Importera en uppsättning av resultat","manage_rubrics_5d274f6a":"Hantera matriser","outcome_da397d20":"Lärandemål"},"sv-x-k12":{"add_a_new_outcome_cbdbe96c":"Lägg till nytt resultat","add_a_new_outcome_group_e3fab2fc":"Lägg till en ny lärandemåls-grupp","back_2900f52a":"Tillbaka","find_8d605019":"Hitta","find_an_outcome_919328e6":"Hitta ett lärandemål","group_a8f5ed9c":"Grupp","import_1b31507":"Importera","import_a_set_of_outcomes_6b782192":"Importera en uppsättning av lärandemål","manage_rubrics_5d274f6a":"Hantera Matriser","outcome_da397d20":"Lärandemål"},"tr":{"add_a_new_outcome_cbdbe96c":"Yeni Öğrenme Çıktısı Ekle","add_a_new_outcome_group_e3fab2fc":"Yeni Öğrenme Çıktısı Grubu Ekle","back_2900f52a":"Geri","find_8d605019":"Ara","find_an_outcome_919328e6":"Bir Öğrenme Çıktısı Ara","group_a8f5ed9c":"Grup","import_1b31507":"İçeri Aktar","manage_rubrics_5d274f6a":"Değerlendirme Listelerini Yönet","outcome_da397d20":"Öğrenme Çıktısı"},"uk":{"add_a_new_outcome_cbdbe96c":"Додати новий результат","add_a_new_outcome_group_e3fab2fc":"Додати нову групу результатів","back_2900f52a":"Назад","find_8d605019":"Знайти","find_an_outcome_919328e6":"Знайти результат","group_a8f5ed9c":"Група","import_1b31507":"Імпорт","manage_rubrics_5d274f6a":"Керувати Рубриками","outcome_da397d20":"Результат"},"zh-Hans":{"add_a_new_outcome_cbdbe96c":"添加一个新结果","add_a_new_outcome_group_e3fab2fc":"添加一个新结果小组","back_2900f52a":"后退","find_8d605019":"查找","find_an_outcome_919328e6":"寻找一个结果","group_a8f5ed9c":"小组","import_1b31507":"导入","import_a_set_of_outcomes_6b782192":"导入一组结果","manage_rubrics_5d274f6a":"管理评分标准","outcome_da397d20":"结果"},"zh-Hant":{"add_a_new_outcome_cbdbe96c":"添加一個新成果","add_a_new_outcome_group_e3fab2fc":"添加一個新成果群組","back_2900f52a":"返回","find_8d605019":"尋找","find_an_outcome_919328e6":"尋找成果","group_a8f5ed9c":"群組","import_1b31507":"匯入","import_a_set_of_outcomes_6b782192":"匯入一組學習成果","manage_rubrics_5d274f6a":"管理題目","outcome_da397d20":"成果"}}'))
i("jQeR")
i("0sPK")
o["default"].scoped("outcomes.browser")
i("DfGn")
var s=r.a.default
var c=s.template,_=s.templates=s.templates||{}
var d="outcomes/browser"
_[d]=c((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a="",s=i.helperMissing,c=this.escapeExpression,_="function",d=this
function u(e,t){var n,r,o,a=""
a+='\n  <div class="toolbar outcomes-toolbar">\n    <button class="go_back ui-button ui-widget ui-state-default ui-corner-all" style="display:none">\n      '+c((r=i.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"back_2900f52a","Back",o):s.call(e,"t","back_2900f52a","Back",o)))+"\n    </button>\n\n    "
n=i["if"].call(e,e&&e.canManageOutcomes,{hash:{},inverse:d.noop,fn:d.program(2,l,t),data:t});(n||0===n)&&(a+=n)
a+="\n    "
n=i["if"].call(e,e&&e.canManageRubrics,{hash:{},inverse:d.noop,fn:d.program(4,p,t),data:t});(n||0===n)&&(a+=n)
a+="\n  </div>\n  "
return a}function l(e,t){var n,r,o=""
o+='\n    <button class="add_outcome_link ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"add_a_new_outcome_cbdbe96c","Add a New Outcome",r):s.call(e,"t","add_a_new_outcome_cbdbe96c","Add a New Outcome",r)))+'">\n      <i class="icon-plus"></i>\n      <span class="ui-button-text" aria-hidden="true">'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"outcome_da397d20","Outcome",r):s.call(e,"t","outcome_da397d20","Outcome",r)))+'</span>\n    </button>\n    <button class="add_outcome_group ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"add_a_new_outcome_group_e3fab2fc","Add a New Outcome Group",r):s.call(e,"t","add_a_new_outcome_group_e3fab2fc","Add a New Outcome Group",r)))+'">\n      <i class="icon-plus"></i>\n      <span class="ui-button-text" aria-hidden="true">'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"group_a8f5ed9c","Group",r):s.call(e,"t","group_a8f5ed9c","Group",r)))+'</span>\n    </button>\n    <button class="import_outcomes ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"import_a_set_of_outcomes_6b782192","Import a set of Outcomes",r):s.call(e,"t","import_a_set_of_outcomes_6b782192","Import a set of Outcomes",r)))+'">\n      <i class="icon-upload"></i>\n      <span class="ui-button-text" aria-hidden="true">'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"import_1b31507","Import",r):s.call(e,"t","import_1b31507","Import",r)))+'</span>\n    </button>\n    <button class="find_outcome ui-button ui-widget ui-state-default ui-corner-all" aria-label="'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"find_an_outcome_919328e6","Find an Outcome",r):s.call(e,"t","find_an_outcome_919328e6","Find an Outcome",r)))+'">\n      <i class="icon-search"></i>\n      <span class="ui-button-text" aria-hidden="true">'+c((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"find_8d605019","Find",r):s.call(e,"t","find_8d605019","Find",r)))+"</span>\n    </button>\n    "
return o}function p(e,t){var n,r,o,a=""
a+='\n      <a href="'
if(r=i.contextUrlRoot)n=r.call(e,{hash:{},data:t})
else{r=e&&e.contextUrlRoot
n=typeof r===_?r.call(e,{hash:{},data:t}):r}a+=c(n)+'/rubrics" class="manage_rubrics ui-button ui-widget ui-state-default ui-corner-all" role="button">\n        <i class="icon-rubric"></i>\n        <span class="ui-button-text">'+c((r=i.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"manage_rubrics_5d274f6a","Manage Rubrics",o):s.call(e,"t","manage_rubrics_5d274f6a","Manage Rubrics",o)))+"</span>\n      </a>\n    "
return a}a+='<div class="outcomes-browser content-box">\n\n  '
o=i.unless.call(t,t&&t.skipToolbar,{hash:{},inverse:d.noop,fn:d.program(1,u,r),data:r});(o||0===o)&&(a+=o)
a+='\n\n\n\n  <div class="outcomes-main">\n    <div class="outcomes-sidebar">\n      <div class="wrapper"></div>\n    </div>\n    <div class="outcomes-content">\n    </div>\n  </div>\n</div>\n'
return a}))
t["a"]=_[d]},"gW/U":function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m89.336 350.355c114.862 29.703 208.264 123.106 237.968 237.967 23.378 90.466 10.729 183.303-35.464 261.459-45.515 77.026-121.186 133.948-207.586 156.084-13.779 3.502-27.783 14.796-27.783 31.85v91.708H903.529v-91.708c0-66.07 46.306-124.123 112.716-141.29 57.6-14.682 107.971-52.63 138.353-104.018 30.833-52.292 39.19-114.749 23.378-175.85-19.651-75.67-81.204-137.223-156.875-156.875-70.927-18.184-143.548-3.953-199.341 39.303-55.68 43.144-87.642 108.311-87.642 178.673H621.176c0-105.6 47.888-203.294 131.464-268.01 83.69-64.714 191.661-86.4 296.696-59.293zm-89.28 1004.94v-.114l56.471.113h-56.47zm0-112.942c-62.343 0-112.94 50.71-112.94 112.941 0 62.23 50.597 112.941 112.94 112.941 62.231 0 112.942-50.71 112.942-112.94 0-62.231-50.71-112.942-112.942-112.942z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconQuestion",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconQuestionLine"
return t}(_["Component"])
p.glyphName="question"
p.variant="Line"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},"gl9/":function(e,t,i){"use strict"
var n=i("1xB4")
t["a"]=function(e){e&&n["a"].unregisterAllTrackers()
n["a"].isRunning()||n["a"].start()
if(n["a"].isDirty())return n["a"].deliver()}},hX8w:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"find_outcome":{"errors":{"outcome_retrieval_failed":"فشلت استعادة النتائج على نحو غير متوقع.  يرجى المحاولة مرة أخرى."},"messages":{"loading_outcomes":"جارٍ تحميل النتائج...","no_outcomes_found":"لم يتم العثور على نتائج","no_rubric_outcomes_found":"لم يتم العثور على نتائج تم تكوينها بواسطة العنوان"},"titles":{"find_outcome":"العثور على نتيجة"}}},"cy":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Mae’r broses o adfer deilliannau wedi methu’n annisgwyl.  Rhowch gynnig arall arni."},"messages":{"loading_outcomes":"Wrthi’n llwytho deilliannau...","no_outcomes_found":"Heb ddod o hyd i ddeilliannau","no_rubric_outcomes_found":"Heb ddod o hyd i unrhyw ddeilliannau sydd wedi’u ffurfweddu gan gyfarwyddiadau sgorio"},"titles":{"find_outcome":"Dod o hyd i ddeilliant"}}},"da":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Hentning af læringsudbytter mislykkedes. Prøv igen."},"messages":{"loading_outcomes":"Indlæser læringsudbytte ...","no_outcomes_found":"Der er ikke fundet læringsudbytter","no_rubric_outcomes_found":"Der er ikke fundet rubrik-konfigurerede læringsudbytter"},"titles":{"find_outcome":"Find læringsudbytte"}}},"da-x-k12":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Hentning af læringsudbytter mislykkedes. Prøv igen."},"messages":{"loading_outcomes":"Indlæser læringsudbytte ...","no_outcomes_found":"Der er ikke fundet læringsudbytter","no_rubric_outcomes_found":"Der er ikke fundet vurderingskriteriekonfigurerede læringsudbytter"},"titles":{"find_outcome":"Find resultat"}}},"de":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Abruf der Resultate wurde unerwartet abgebrochen. Bitte versuchen Sie es erneut."},"messages":{"loading_outcomes":"Resultate werden geladen ...","no_outcomes_found":"Keine Resultate gefunden","no_rubric_outcomes_found":"Keine gemäß Bewertungsschema konfigurierten Resultate gefunden"},"titles":{"find_outcome":"Lernziel suchen"}}},"el":{"find_outcome":{"errors":{"outcome_retrieval_failed":"\\u003cmrk mid=\\"1031\\" mtype=\\"seg\\"\\u003eΜη αναμενόμενη αποτυχία Ανάκτησης Αποτελεσμάτων.\\u003c/mrk\\u003e  \\u003cmrk mid=\\"1032\\" mtype=\\"seg\\"\\u003eΠαρακαλώ δοκιμάστε ξανά.\\u003c/mrk\\u003e"},"messages":{"loading_outcomes":"Φόρτωση Αποτελεσμάτων...","no_outcomes_found":"Δεν βρέθηκαν Αποτελέσματα","no_rubric_outcomes_found":"Δεν βρέθηκαν Αποτελέσματα Ρυθμισμένα από Ρουμπρίκα"},"titles":{"find_outcome":"Εύρεση Αποτελέσματος"}}},"en-AU":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes Retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading Outcomes...","no_outcomes_found":"No Outcomes found","no_rubric_outcomes_found":"No Rubric-Configured Outcomes found"},"titles":{"find_outcome":"Find Outcome"}}},"en-AU-x-unimelb":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes Retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading Outcomes...","no_outcomes_found":"No Outcomes found","no_rubric_outcomes_found":"No Rubric-Configured Outcomes found"},"titles":{"find_outcome":"Find Outcome"}}},"en-CA":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes Retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading Outcomes...","no_outcomes_found":"No Outcomes found","no_rubric_outcomes_found":"No Rubric-Configured Outcomes found"},"titles":{"find_outcome":"Find Outcome"}}},"en-GB":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading outcomes...","no_outcomes_found":"No outcomes found","no_rubric_outcomes_found":"No rubric-configured outcomes found"},"titles":{"find_outcome":"Find outcome"}}},"en-GB-x-lbs":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading outcomes...","no_outcomes_found":"No outcomes found","no_rubric_outcomes_found":"No rubric-configured outcomes found"},"titles":{"find_outcome":"Find outcome"}}},"en-GB-x-ukhe":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Outcomes retrieval failed unexpected.  Please try again."},"messages":{"loading_outcomes":"Loading outcomes...","no_outcomes_found":"No outcomes found","no_rubric_outcomes_found":"No rubric-configured outcomes found"},"titles":{"find_outcome":"Find outcome"}}},"es":{"find_outcome":{"errors":{"outcome_retrieval_failed":"La recuperación de resultados falló.  Inténtelo de nuevo."},"messages":{"loading_outcomes":"Cargando resultados...","no_outcomes_found":"No se encontraron competencias","no_rubric_outcomes_found":"No se encontraron resultados configurados para rúbricas"},"titles":{"find_outcome":"Encontrar competencia"}}},"fa":{"find_outcome":{"errors":{"outcome_retrieval_failed":"بازیابی نتایج به طور پیش بینی نشده انجام نشد. لطفا دوباره سعی کنید."},"messages":{"loading_outcomes":"در حال بارگذاری نتایج...","no_outcomes_found":"نتیجه یافت نشد","no_rubric_outcomes_found":"هیچ نتیجه ای که دارای دستورالعمل ارزیابی پیکربندی شده باشد، موجود نیست"},"titles":{"find_outcome":"یافتن نتیجه"}}},"fi":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Tuloksien palautus epäonnistui odottamatta.  Yritä uudelleen."},"messages":{"loading_outcomes":"Ladataan tuloksia...","no_outcomes_found":"Ei löytynyt tuloksia","no_rubric_outcomes_found":"Ei löytynyt rubriikkikonfiguroituja tuloksia"},"titles":{"find_outcome":"Löydä tulos"}}},"fr":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Erreur inattendue lors de la récupération des acquis. Veuillez réessayer."},"messages":{"loading_outcomes":"Chargement des acquis...","no_outcomes_found":"Aucun acquis trouvé","no_rubric_outcomes_found":"Aucun acquis sous forme de barème trouvé"},"titles":{"find_outcome":"Chercher un acquis"}}},"fr-CA":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Erreur inattendue lors de la récupération des résultats. Veuillez réessayer."},"messages":{"loading_outcomes":"Chargement des résultats...","no_outcomes_found":"Aucun résultat trouvé","no_rubric_outcomes_found":"Aucun résultat sous forme de barème trouvé"},"titles":{"find_outcome":"Chercher un résultat"}}},"he":{"find_outcome":{"errors":{"outcome_retrieval_failed":"תוצאות החיפוש נכשלו באופן לא צפוי. יש לנסות שוב."},"messages":{"loading_outcomes":"טוען תוצאות למידה...","no_outcomes_found":"תוצאות למידה לא נמצאו","no_rubric_outcomes_found":"לא נמצאו תוצאות למידה מבוססות קונפיגרצית-רובריקות"},"titles":{"find_outcome":"חיפוש תוצאות למידה"}}},"ht":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Rezilta Rekiperasyon an echwe sanzatann. Tanpri eseye ankò."},"messages":{"loading_outcomes":"Chajman Rezilta...","no_outcomes_found":"Nou pa jwenn okenn Rezilta","no_rubric_outcomes_found":"Nou pa jwenn rezilte ki Konfigire ak Ribrik"},"titles":{"find_outcome":"Jwenn Rezilta"}}},"hu":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Váratlan hiba a tanulási eredmények lehívása közben. Kérjük, próbálja újra. "},"messages":{"loading_outcomes":"Tanulási eredmények betöltése","no_outcomes_found":"Nem található tanulási eredmény","no_rubric_outcomes_found":"Nem található értékelőtáblához kapcsolódó tanulási eredmény"},"titles":{"find_outcome":"Tanulási eredmény keresése"}}},"hy":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Արդյունքների ստացումը անսպասելիորեն խափանվեց: Փորձեք կրկին: "},"messages":{"loading_outcomes":"Արդյունքների բեռնում...","no_outcomes_found":"Արդյունքներ չեն գտնվել","no_rubric_outcomes_found":"Ռուբրիկների կարգաբերմամբ արդյունքներ չեն գտնվել"},"titles":{"find_outcome":"Արդյունքների որոնում"}}},"is":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Ekki tókst að endurheimta niðurstöður. Reyndu aftur."},"messages":{"loading_outcomes":"Sæki niðurstöður...","no_outcomes_found":"Engar niðurstöður fundust","no_rubric_outcomes_found":"Engar niðurstöður fundust sem stilltar eru eftir matsviðmiði"},"titles":{"find_outcome":"Finna niðurstöðu"}}},"it":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Errore recupero esiti imprevisto.  Riprova."},"messages":{"loading_outcomes":"Caricamento esiti in corso...","no_outcomes_found":"Nessun esito trovato","no_rubric_outcomes_found":"Nessun esito configurato nella rubrica trovato"},"titles":{"find_outcome":"Trova esito"}}},"ja":{"find_outcome":{"errors":{"outcome_retrieval_failed":"成果の取得が予期せずに失敗しました。もう一度、試してください。"},"messages":{"loading_outcomes":"成果を読み込んでいます...","no_outcomes_found":"成果が見つかりません","no_rubric_outcomes_found":"注釈の設定された成果が見つかりません"},"titles":{"find_outcome":"成果の検索"}}},"ko":{"find_outcome":{"errors":{"outcome_retrieval_failed":"성과 찾아오기를 실패했습니다. 다시 시도하시기 바랍니다."},"messages":{"loading_outcomes":"성과 로드 중...","no_outcomes_found":"성과를 찾을 수 없음","no_rubric_outcomes_found":"루브릭이 구성된 성과를 찾을 수 없음"},"titles":{"find_outcome":"성과 검색"}}},"mi":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Rahua ohorere Putanga tiki. Tēnā koa ngana anō."},"messages":{"loading_outcomes":"Uta Putanga ...","no_outcomes_found":"Kāore i kitea he Huanga","no_rubric_outcomes_found":"No Putanga Rubric-Whirihora kitea"},"titles":{"find_outcome":"Kimihia Putanga"}}},"nb":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Henting av læringsmål feilet uventet. Vennligst forsøk igjen."},"messages":{"loading_outcomes":"Laster læringsmål...","no_outcomes_found":"Ingen læringsmål funnet","no_rubric_outcomes_found":"Ingen læringsmål basert på vurderingsskjemaer funnet"},"titles":{"find_outcome":"Finn læringsmål"}}},"nb-x-k12":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Henting av mål feilet uventet. Vennligst forsøk igjen."},"messages":{"loading_outcomes":"Laster mål...","no_outcomes_found":"Ingen mål funnet","no_rubric_outcomes_found":"Ingen mål basert på vurderingskriterier funnet"},"titles":{"find_outcome":"Finn mål"}}},"nl":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Ophalen van leerdoelen onverwacht mislukt. Probeer het opnieuw."},"messages":{"loading_outcomes":"Bezig met laden van leerdoelen...","no_outcomes_found":"Geen leerdoelen gevonden","no_rubric_outcomes_found":"Geen rubriek-geconfigureerde leerdoelen gevonden"},"titles":{"find_outcome":"Leerdoel zoeken"}}},"nn":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Henting av læringsmål mislukkast.  Prøv på nytt seinare."},"messages":{"loading_outcomes":"Lastar læringsmål...","no_outcomes_found":"Finn ingen læringsmål","no_rubric_outcomes_found":"Finn ingen læringsmål basert på vurderingsskjema"},"titles":{"find_outcome":"Finn resultat"}}},"pl":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Wystąpił nieoczekiwany błąd podczas wyszukiwania wyników.  Spróbuj ponownie."},"messages":{"loading_outcomes":"Trwa ładowanie wyników...","no_outcomes_found":"Brak wyników","no_rubric_outcomes_found":"Brak wyników skonfigurowanych według kryteriów ocen"},"titles":{"find_outcome":"Wyszukaj wynik"}}},"pt":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Falha inesperada na recuperação dos resultados.  Tente novamente."},"messages":{"loading_outcomes":"Carregando resultados...","no_outcomes_found":"Nenhum resultado encontrado","no_rubric_outcomes_found":"Nenhum resultado configurado por protocolo encontrado"},"titles":{"find_outcome":"Localizar resultado"}}},"pt-BR":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Falha inesperada na recuperação dos objetivos.  Por favor, tente novamente."},"messages":{"loading_outcomes":"Carregando objetivos...","no_outcomes_found":"Nenhum objetivo encontrado","no_rubric_outcomes_found":"Nenhum objetivo configurado para a rubrica encontrada"},"titles":{"find_outcome":"Localizar objetivo"}}},"ru":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Неожиданная ошибка получения результатов.  Повторите попытку."},"messages":{"loading_outcomes":"Загрузка результатов...","no_outcomes_found":"Результаты не найдены","no_rubric_outcomes_found":"Не найдены результаты с настройкой рубрик"},"titles":{"find_outcome":"Поиск результата"}}},"sl":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Pridobivanje učnih izidov nepričakovano ni uspelo.  Poskusite znova."},"messages":{"loading_outcomes":"Nalaganje učnih izidov ...","no_outcomes_found":"Ni najdenih učnih izidov.","no_rubric_outcomes_found":"Ni najdenih učnih izidov, ki jih je konfiguriran ocenjevalni vodnik."},"titles":{"find_outcome":"Najdi izid"}}},"sv":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Hämtning av lärandemålen misslyckades oväntat. Vänligen försök igen."},"messages":{"loading_outcomes":"Laddar lärandemål...","no_outcomes_found":"Inga lärandemål hittades","no_rubric_outcomes_found":"Inga matris-konfigurerade lärandemål hittades"},"titles":{"find_outcome":"Hitta lärandemål"}}},"sv-x-k12":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Hämtning av lärandemålen misslyckades oväntat. Vänligen försök igen."},"messages":{"loading_outcomes":"Laddar lärandemål...","no_outcomes_found":"Inga lärandemål hittades","no_rubric_outcomes_found":"Inga matris-konfigurerade lärandemål hittades"},"titles":{"find_outcome":"Hitta Lärandemål"}}},"tr":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Öğrenme çıktılarının alınması beklenmedik bir şekilde başarısız oldu. Lütfen tekrar deneyin."},"messages":{"loading_outcomes":"Öğrenme Çıktıları Yükleniyor...","no_outcomes_found":"Öğrenme Çıktısı Bulunamadı","no_rubric_outcomes_found":"Yönerge Yapılandırmalı Öğrenme Çıktısı Bulunamadı"},"titles":{"find_outcome":"Öğrenme Çıktısı Bul"}}},"uk":{"find_outcome":{"errors":{"outcome_retrieval_failed":"Несподівана помилка пошуку результатів. Будь ласка, спробуйте ще раз."},"messages":{"loading_outcomes":"Завантаження результатів...","no_outcomes_found":"Жодних результатів не знайдено","no_rubric_outcomes_found":"Жодних результатів, налаштованих по рубриках, не знайдено"},"titles":{"find_outcome":"Знайти результат"}}},"zh-Hans":{"find_outcome":{"errors":{"outcome_retrieval_failed":"结果检索意外失败。请重试。"},"messages":{"loading_outcomes":"正在加载结果...","no_outcomes_found":"找不到结果","no_rubric_outcomes_found":"找不到评分标准配置的结果"},"titles":{"find_outcome":"查找评分标准"}}},"zh-Hant":{"find_outcome":{"errors":{"outcome_retrieval_failed":"成果取回意外失敗。請再試一次。"},"messages":{"loading_outcomes":"正在載入成果...","no_outcomes_found":"找不到成果","no_rubric_outcomes_found":"找不到已設定題目的成果"},"titles":{"find_outcome":"尋找成果"}}}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("find_outcome")
var a=i("ouhR")
var s=i.n(a)
var c=i("0crz")
i("jYyc")
i("YGE8")
i("OShF")
var _={find(e,t){t=t||{}
_.callback=e
const i=s()("#find_outcome_criterion_dialog")
if(!i.hasClass("loaded")){i.find(".loading_message").text(o.t("messages.loading_outcomes","Loading Outcomes..."))
s.a.ajaxJSON(i.find(".outcomes_list_url").attr("href"),"GET",{},e=>{const n=[]
for(var r in e){var a=e[r].learning_outcome;(!t.for_rubric||a.data&&a.data.rubric_criterion)&&n.push(a)}if(0===n.length){let e
e=t.for_rubric?o.t("messages.no_rubric_outcomes_found","No Rubric-Configured Outcomes found"):o.t("messages.no_outcomes_found","No Outcomes found")
i.find(".loading_message").text(e)}else{i.find(".loading_message").hide()
i.addClass("loaded")
for(var r in n){a=n[r]
a.name=a.short_description
a.mastery_points=a.data.rubric_criterion.mastery_points||a.data.rubric_criterion.points_possible
const e=i.find(".outcomes_select.blank:first").clone(true).removeClass("blank")
a.title=a.short_description
const t=s()("<div/>")
t.text(a.short_description)
a.title=c["a"].truncateText(s.a.trim(t.text()),{max:35})
a.display_name=a.cached_context_short_name||""
e.fillTemplateData({data:a})
i.find(".outcomes_selects").append(e.show())
const o=i.find(".outcome.blank:first").clone(true).removeClass("blank")
o.find(".mastery_level").attr("id","outcome_question_bank_mastery_"+a.id).end().find(".mastery_level_text").attr("for","outcome_question_bank_mastery_"+a.id)
a.learning_outcome_id=a.id
const _=a.data&&a.data.rubric_criterion
let d=_.points_possible&&null!=_.mastery_points&&_.mastery_points/_.points_possible||0
d=Math.round(1e4*d)/100||""
o.find(".mastery_level").val(d)
o.fillTemplateData({data:a,htmlValues:["description"]})
o.addClass("outcome_"+a.id)
if(a.data&&a.data.rubric_criterion)for(const e in a.data.rubric_criterion.ratings){const t=a.data.rubric_criterion.ratings[e]
const i=o.find(".rating.blank").clone(true).removeClass("blank")
i.fillTemplateData({data:t})
o.find("tr").append(i.show())}i.find(".outcomes_list").append(o)}i.find(".outcomes_select:not(.blank):first").click()}},e=>{i.find(".loading_message").text(o.t("errors.outcome_retrieval_failed","Outcomes Retrieval failed unexpected.  Please try again."))})}i.dialog({modal:true,title:o.t("titles.find_outcome","Find Outcome"),width:700,height:400})}}
window.find_outcome=_
s()(document).ready((function(){s()("#find_outcome_criterion_dialog .outcomes_select").click((function(e){e.preventDefault()
s()("#find_outcome_criterion_dialog .outcomes_select.selected_side_tab").removeClass("selected_side_tab")
s()(this).addClass("selected_side_tab")
const t=s()(this).getTemplateData({textValues:["id"]}).id
s()("#find_outcome_criterion_dialog .outcomes_list .outcome").hide()
s()("#find_outcome_criterion_dialog .outcomes_list .outcome_"+t).show()}))
s()("#find_outcome_criterion_dialog .select_outcome_link").click((function(e){e.preventDefault()
const t=s()(this).parents(".outcome")
s()("#find_outcome_criterion_dialog").dialog("close")
s.a.isFunction(_.callback)&&_.callback(t)}))}))},"k/iY":function(e,t,i){"use strict"
var n=i("VTBJ")
var r=i("ouhR")
var o=i.n(r)
var a=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"no_directory_is_selected_please_select_a_directory_46ded46":"لم يتم تحديد دليل، الرجاء تحديد دليل قبل النقر فوق \'نقل\'","where_would_you_like_to_move_title_fabd6e8f":"إلى أين ترغب في نقل %{title}؟","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"لا توجد نتائج. انقر هنا للانتقال إلى صفحة النتائج."},"cy":{"no_directory_is_selected_please_select_a_directory_46ded46":"Dim cyfeiriadur wedi\'i ddewis, dewiswch gyfeiriadur cyn clicio \'symud’","where_would_you_like_to_move_title_fabd6e8f":"I ble rydych chi am symud %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Does gennych chi ddim deilliannau. Cliciwch yma i fynd i’r dudalen deilliannau."},"da":{"no_directory_is_selected_please_select_a_directory_46ded46":"Der er ikke valgt nogen mappe. Vælg en mappe, inden du klikker på \'flyt\'","where_would_you_like_to_move_title_fabd6e8f":"Hvor kunne du tænke dig at flytte %{title} hen?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har ikke nogen læringsudbytter. Klik her for at gå til læringsudbyttesiden."},"da-x-k12":{"no_directory_is_selected_please_select_a_directory_46ded46":"Der er ikke valgt nogen mappe. Vælg en mappe, inden du klikker på \'flyt\'","where_would_you_like_to_move_title_fabd6e8f":"Hvor kunne du tænke dig at flytte %{title} hen?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har ikke nogen læringsudbytter. Klik her for at gå til læringsudbyttesiden."},"de":{"no_directory_is_selected_please_select_a_directory_46ded46":"Es wurde kein Verzeichnis ausgewählt. Wählen Sie ein Verzeichnis aus, bevor Sie auf „Verschieben“ klicken.","where_would_you_like_to_move_title_fabd6e8f":"Wohin möchten Sie %{title} verschieben?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Es liegen keine Lernziele für Sie vor. Klicken Sie hier, um zur Seite „Lernziele“ zu wechseln."},"el":{"no_directory_is_selected_please_select_a_directory_46ded46":"Δεν έχει επιλεγεί κατάλογος, παρακαλώ επιλέξτε έναν κατάλογο πριν κάνετε κλικ στην επιλογή «μετακίνηση».","where_would_you_like_to_move_title_fabd6e8f":"Πού θα θέλατε να μετακινήσετε το %{title};","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"\\u003cmrk mid=\\"2926\\" mtype=\\"seg\\"\\u003eΔεν έχετε αποτελέσματα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"2927\\" mtype=\\"seg\\"\\u003eΚάντε κλικ εδώ για να μεταφερθείτε στη σελίδα των αποτελεσμάτων.\\u003c/mrk\\u003e"},"en-AU":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"en-AU-x-unimelb":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"en-CA":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"en-GB":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"en-GB-x-lbs":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"en-GB-x-ukhe":{"no_directory_is_selected_please_select_a_directory_46ded46":"No directory is selected, please select a directory before clicking \'move\'","where_would_you_like_to_move_title_fabd6e8f":"Where would you like to move %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"You have no outcomes. Click here to go to the outcomes page."},"es":{"no_directory_is_selected_please_select_a_directory_46ded46":"No se ha seleccionado el directorio. Seleccione un directorio antes de hacer clic en \\\\\\"mover\\\\\'","where_would_you_like_to_move_title_fabd6e8f":"¿Dónde desea mover %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"No tiene resultados. Haga clic aquí para ir a la página de resultados."},"fa":{"no_directory_is_selected_please_select_a_directory_46ded46":"هیچ دایرکتوری انتخاب نشده است، لطفا قبل از کلیک کردن روی «انتقال»، یک دایرکتوری انتخاب کنید","where_would_you_like_to_move_title_fabd6e8f":"می خواهید %{title} را به کجا انتقال دهید؟","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"هیج نتیجه ای ندارید. برای رفتن به صفحه نتایج، اینجا کلیک کنید."},"fi":{"no_directory_is_selected_please_select_a_directory_46ded46":"Ei hakemistoa valittuna, valitse hakemisto ennen kuin kirjoitat ”siirrä”","where_would_you_like_to_move_title_fabd6e8f":"Minne haluaisit siirtää %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Sinulla ei ole tuloksia. Tarkastele tulokset-sivua napsauttamalla tästä."},"fr":{"no_directory_is_selected_please_select_a_directory_46ded46":"Aucun répertoire n’est sélectionné. Veuillez en sélectionner un avant de cliquer sur Déplacer.","where_would_you_like_to_move_title_fabd6e8f":"Où voulez-vous déplacer %{title} ?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Vous n’avez pas d\'acquis. Cliquez ici pour accéder à la page des résultats."},"fr-CA":{"no_directory_is_selected_please_select_a_directory_46ded46":"Aucun répertoire n’est sélectionné. Veuillez en sélectionner un avant de cliquer sur Déplacer.","where_would_you_like_to_move_title_fabd6e8f":"Où voulez-vous déplacer %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Vous n’avez pas de résultats. Cliquez ici pour accéder à la page des résultats."},"he":{"no_directory_is_selected_please_select_a_directory_46ded46":"לא נבחרה ספריה. יש לבחור ספריה לפני שמקליקים על \'העברה\'.","where_would_you_like_to_move_title_fabd6e8f":"לאן היית רוצה לעבור %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"אין לך תוצאות למידה. למעבר לדף התוצאות יש להקליק כאן"},"ht":{"no_directory_is_selected_please_select_a_directory_46ded46":"Pa gen repètwa ki seleksyone, tanpri chwazi yon repètwa anvan w klike sou \'deplase\'","where_would_you_like_to_move_title_fabd6e8f":"Ki kote w ta renmen deplase %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Ou pa gen rezilta. Klike la pou ka ale nan paj rezilta yo."},"hu":{"no_directory_is_selected_please_select_a_directory_46ded46":"Nem lett mappa kijelölve. Kérjük, válasszon egy mappát, mielőtt a \'mozgatásra\' kattint","where_would_you_like_to_move_title_fabd6e8f":"Hová szeretné áthelyezni ezt: %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Nincsenek tanulási eredményei. Kattintson ide az eredmények oldalra navigáláshoz."},"hy":{"no_directory_is_selected_please_select_a_directory_46ded46":"Կատալոգը ընտրված չէ, խնդրում ենք ընտրել կատալոգը նախքան \'տեղաշարժել\' կոճակը սեղմելը:","where_would_you_like_to_move_title_fabd6e8f":"Ու՞ր կցանկանայիք տեղափոխել %{title}:","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Դուք արդյունքներ չունեք: Սեղմեք այստեղ  արդյունքների էջին անցնելու համար:"},"is":{"no_directory_is_selected_please_select_a_directory_46ded46":"Engin efnisskrá valin, veldu efnisskrá áður en þú smellir á \\"færa\\"","where_would_you_like_to_move_title_fabd6e8f":"Hvert viltu færa %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Þú hefur enga niðurstöðu. Smelltu hér til að fara á niðurstöðusíðu."},"it":{"no_directory_is_selected_please_select_a_directory_46ded46":"Nessuna directory selezionata. Seleziona una directory prima di fare clic su \'sposta\'","where_would_you_like_to_move_title_fabd6e8f":"Dove desideri spostare %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Non hai esiti. Fai clic qui per accedere alla pagina degli esiti."},"ja":{"no_directory_is_selected_please_select_a_directory_46ded46":"ディレクトリが選択されていません。[移動] をクリックする前に、ディレクトリを選択してください","where_would_you_like_to_move_title_fabd6e8f":"%{title} をどこに移動しますか?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"成果がありません。成果ページに移動するにはここをクリックします。"},"mi":{"no_directory_is_selected_please_select_a_directory_46ded46":"Kaore he whaiaronga te tīpakohia, tīpako koa he whaiaronga i mua i te pāwhiri neke","where_would_you_like_to_move_title_fabd6e8f":"E hiahia ana koe ki te neke %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"E koe kahore putanga. Pāwhiri ki konei kia haere ki te whārangi putanga."},"nb":{"no_directory_is_selected_please_select_a_directory_46ded46":"Ingen katalog er valgt, vennligst velge en katalog før du klikker \\"flytte\\"","where_would_you_like_to_move_title_fabd6e8f":"Hvor vil du flytte %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har ingen læringsmål. Klikk her for å gå til siden for læringsmål."},"nb-x-k12":{"no_directory_is_selected_please_select_a_directory_46ded46":"Ingen katalog er valgt, vennligst velge en katalog før du klikker \\"flytte\\"","where_would_you_like_to_move_title_fabd6e8f":"Hvor vil du flytte %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har ingen mål. Klikk her for å gå til siden for mål."},"nl":{"no_directory_is_selected_please_select_a_directory_46ded46":"Geen adreslijst geselecteerd, een adreslijst selecteren alvorens op \'verplaatsen\' te klikken","where_would_you_like_to_move_title_fabd6e8f":"Waar wil je %{title} naar verplaatsen?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Je hebt geen resultaten. Klik hier om naar de resultatenpagina te gaan."},"nn":{"no_directory_is_selected_please_select_a_directory_46ded46":"Katalog er ikkje vald. Vel ein katalog før du klikkar på \\"Flytt\\"","where_would_you_like_to_move_title_fabd6e8f":"Kvar vil du flytte %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har ingen læringsmål. Klikk her for å gå til læringsmålsida."},"pl":{"no_directory_is_selected_please_select_a_directory_46ded46":"Nie wybrano katalogu, należy wybrać katalog, a  następnie nacisnąć polecenie „przenieś”","where_would_you_like_to_move_title_fabd6e8f":"Gdzie chcesz przenieść %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Nie masz wyników. Kliknij tutaj, aby przejść do strony wyników."},"pt":{"no_directory_is_selected_please_select_a_directory_46ded46":"Não foi selecionada uma diretoria, selecione uma diretoria antes de clicar em \'mover\'","where_would_you_like_to_move_title_fabd6e8f":"Para onde pretende mover %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Não tem resultados. Clique aqui para aceder à página de resultados."},"pt-BR":{"no_directory_is_selected_please_select_a_directory_46ded46":"Nenhum diretório é selecionado; selecione um diretório antes de clicar em \'mover\'","where_would_you_like_to_move_title_fabd6e8f":"Para onde deseja mover o %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Você não tem objetivos. Clique aqui para ir para a página de objetivos."},"ru":{"no_directory_is_selected_please_select_a_directory_46ded46":"Не выбран каталог. Выберите каталог, прежде чем нажимать кнопку \'переместить\'","where_would_you_like_to_move_title_fabd6e8f":"Куда вы хотите переместить %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"У вас нет результатов. Щелкните здесь, чтобы перейти на страницу результатов."},"sl":{"no_directory_is_selected_please_select_a_directory_46ded46":"Izbran ni noben imenik; preden kliknete »Premakni«, izberite imenik.","where_would_you_like_to_move_title_fabd6e8f":"Kam bi želeli premakniti %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Nimate učnih izidov. Za vrnitev na stran učnih izidov kliknite tukaj."},"sv":{"no_directory_is_selected_please_select_a_directory_46ded46":"Inget register är valt, vänligen välj ett register innan du klickar på \'flytta\'","where_would_you_like_to_move_title_fabd6e8f":"Vart skulle du vilja flytta %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har inga lärandemål. Klicka här för att gå till resutlatssidan."},"sv-x-k12":{"no_directory_is_selected_please_select_a_directory_46ded46":"Inget register är valt, vänligen välj ett register innan du klickar på \'flytta\'","where_would_you_like_to_move_title_fabd6e8f":"Vart skulle du vilja flytta %{title}?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Du har inga lärandemål. Klicka här för att gå till resutlatssidan."},"tr":{"no_directory_is_selected_please_select_a_directory_46ded46":"Seçili dizin yok, \'taşı\' ya tıklamdan önce lütfen bir dizin seçin.","where_would_you_like_to_move_title_fabd6e8f":"%{title} ı nereye taşımak istersiniz?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Hiç öğrenme çıktınız yok. Öğrenme çıktıları sayfasına gitmek için buraya tıklayın."},"uk":{"no_directory_is_selected_please_select_a_directory_46ded46":"Жодна папка не вибрана, будь ласка, оберіть папку до того, як натиснете \'переміститися\'","where_would_you_like_to_move_title_fabd6e8f":"Куди б ви хотіли перейти%{title} ?","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"Ви не маєте результатів. Натисніть тут, щоб перейти на сторінку результатів."},"zh-Hans":{"no_directory_is_selected_please_select_a_directory_46ded46":"未选定目录，请选择一个目录，然后单击“移动”","where_would_you_like_to_move_title_fabd6e8f":"您要将 %{title} 移到何处？","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"您没有结果。单击此处转到结果页面。"},"zh-Hant":{"no_directory_is_selected_please_select_a_directory_46ded46":"未選定目錄，請選擇一個目錄，然後按一下『移動』","where_would_you_like_to_move_title_fabd6e8f":"您希望將 %{title} 移動至何處？","you_have_no_outcomes_click_here_to_go_to_the_outco_574bd0af":"您沒有成果。按一下此處轉到成果頁面。"}}'))
i("jQeR")
i("0sPK")
var c=a["default"].scoped("contentview")
var _=i("FIFq")
var d=i.n(_)
var u=i("pLki")
var l=i("B0dq")
Object(s["a"])(JSON.parse('{"ar":{"OutcomeView":{"length_error":"يجب أن يكون 255 حرفًا أو أقل","mastery_error":"يجب أن تكون أكبر من أو تساوي 0"},"points_possible_points_fda3b111":"%{points_possible} النقاط"},"cy":{"OutcomeView":{"length_error":"Yn gorfod bod yn 255 nod neu lai","mastery_error":"Yn gorfod bod yn 0, neu’n fwy na hynny"},"points_possible_points_fda3b111":"%{points_possible} Pwynt"},"da":{"OutcomeView":{"length_error":"Skal være 255 tegn eller mindre","mastery_error":"Skal være større end eller lig med 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"da-x-k12":{"OutcomeView":{"length_error":"Skal være 255 tegn eller mindre","mastery_error":"Skal være større end eller lig med 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"de":{"OutcomeView":{"length_error":"Darf maximal 255 Zeichen lang sein","mastery_error":"Muss größer als oder gleich 0 sein"},"points_possible_points_fda3b111":"%{points_possible} Punkte"},"el":{"OutcomeView":{"length_error":"Πρέπει να έχει μήκος 255 χαρακτήρες ή λιγότερο","mastery_error":"Πρέπει να είναι μεγαλύτερο ή ίσο από 0"}},"en-AU":{"OutcomeView":{"length_error":"Must be 255 characters or less","mastery_error":"Must be greater than or equal to 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"en-AU-x-unimelb":{"points_possible_points_fda3b111":"%{points_possible} Points"},"en-CA":{"OutcomeView":{"length_error":"Must be 255 characters or less","mastery_error":"Must be greater than or equal to 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"en-GB":{"OutcomeView":{"length_error":"Must be 255 characters or less","mastery_error":"Must be greater than or equal to 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"en-GB-x-lbs":{"points_possible_points_fda3b111":"%{points_possible} Points"},"en-GB-x-ukhe":{"OutcomeView":{"length_error":"Must be 255 characters or less","mastery_error":"Must be greater than or equal to 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"es":{"OutcomeView":{"length_error":"Debe tener 255 caracteres o menos","mastery_error":"Debe ser mayor o igual que 0"},"points_possible_points_fda3b111":"%{points_possible} Puntos"},"fa":{"OutcomeView":{"length_error":"باید 255 نویسه یا کمتر باشد","mastery_error":"باید بزرگتر از 0 یا مساوی با آن باشد"},"points_possible_points_fda3b111":"%{points_possible} امتیاز"},"fi":{"OutcomeView":{"length_error":"Saa olla enintään 255 merkkiä","mastery_error":"Täytyy olla suurempi tai yhtä suuri kuin 0"},"points_possible_points_fda3b111":"%{points_possible} Pistettä"},"fr":{"OutcomeView":{"length_error":"La longueur maximale est de 255 caractères","mastery_error":"Doit être supérieur ou égal à 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"fr-CA":{"OutcomeView":{"length_error":"La longueur maximale est de 255 caractères","mastery_error":"Doit être supérieur ou égal à 0"},"points_possible_points_fda3b111":"%{points_possible} Points"},"he":{"OutcomeView":{"length_error":"255 תווים לכל היותר ","mastery_error":"צריך להיות גדול או שווה 0"},"points_possible_points_fda3b111":"%{points_possible} נקודות"},"ht":{"OutcomeView":{"length_error":"Dwe gen 255 karaktè pou pi plis","mastery_error":"Dwe siperyè ou egal a 0"},"points_possible_points_fda3b111":"%{points_possible} Pwen"},"hu":{"OutcomeView":{"length_error":"Maximum 255 karakter hosszú lehet","mastery_error":"0-nál nagyobb vagy egyenlő lehet"},"points_possible_points_fda3b111":"%{points_possible} pont"},"hy":{"OutcomeView":{"length_error":"Պետք է լինի մինչև 255 նիշ","mastery_error":"Պետք է 0-ին հավասար կամ մեծ լինի"}},"is":{"OutcomeView":{"length_error":"Verður að vera 255 stafir eða minna","mastery_error":"Verður að vera stærra en eða jafnt og 0"},"points_possible_points_fda3b111":"%{points_possible} punktar"},"it":{"OutcomeView":{"length_error":"Deve contenere massimo 255 caratteri","mastery_error":"Deve essere maggiore di o uguale a 0"},"points_possible_points_fda3b111":"%{points_possible} Punti"},"ja":{"OutcomeView":{"length_error":"255 文字以下にしてください","mastery_error":"0 以上にする必要があります"},"points_possible_points_fda3b111":"%{points_possible} ポイント"},"ko":{"OutcomeView":{"length_error":"255글자보다 적어야 함","mastery_error":"0보다 크거나 같아야 함"}},"mi":{"OutcomeView":{"length_error":"Me kia 255 ngā pūāhua iti iho rānei","mastery_error":"Me nui ake, ōrite rānei ki te 0"},"points_possible_points_fda3b111":"%{points_possible} ngā koinga"},"nb":{"OutcomeView":{"length_error":"Må være 255 eller færre tegn","mastery_error":"Må være større enn eller lik 0"},"points_possible_points_fda3b111":"%{points_possible} Poeng"},"nb-x-k12":{"OutcomeView":{"length_error":"Må være 255 eller færre tegn","mastery_error":"Må være større enn eller lik 0"},"points_possible_points_fda3b111":"%{points_possible} Poeng"},"nl":{"OutcomeView":{"length_error":"Maximaal 255 tekens of minder","mastery_error":"Moet groter zijn dan of gelijk zijn aan 0"},"points_possible_points_fda3b111":"%{points_possible} Punten"},"nn":{"OutcomeView":{"length_error":"Må vere 255 teikn eller mindre","mastery_error":"Må vere større enn eller lik 0"},"points_possible_points_fda3b111":"%{points_possible} poeng"},"pl":{"OutcomeView":{"length_error":"Nie może być dłuższe niż 255 znaków","mastery_error":"Musi być większe lub równe 0"},"points_possible_points_fda3b111":"%{points_possible} Punkty"},"pt":{"OutcomeView":{"length_error":"Deve ter 255 caracteres ou menos","mastery_error":"Tem de ser igual ou superior a 0"},"points_possible_points_fda3b111":"%{points_possible} Pontos"},"pt-BR":{"OutcomeView":{"length_error":"Deve ter 255 caracteres ou menos","mastery_error":"Deve ser maior ou igual a 0"},"points_possible_points_fda3b111":"%{points_possible} pontos"},"ru":{"OutcomeView":{"length_error":"Должно содержать не больше 255 символов","mastery_error":"Должно быть больше или равно 0"},"points_possible_points_fda3b111":"%{points_possible} Баллы"},"sl":{"points_possible_points_fda3b111":"%{points_possible} Točke"},"sv":{"OutcomeView":{"length_error":"Måste vara 255 karaktärer eller färre","mastery_error":"Måste vara högre eller samma som 0"},"points_possible_points_fda3b111":"%{points_possible} Poäng"},"sv-x-k12":{"points_possible_points_fda3b111":"%{points_possible} Poäng"},"tr":{"OutcomeView":{"length_error":"255 karakter veya daha az olmalıdır","mastery_error":"0 a eşit ya da daha büyük olmalıdır"}},"uk":{"points_possible_points_fda3b111":"%{points_possible} балів"},"zh-Hans":{"OutcomeView":{"length_error":"必须等于或少于 255 个字符","mastery_error":"必须大于或等于 0"},"points_possible_points_fda3b111":"%{points_possible} 分"},"zh-Hant":{"OutcomeView":{"length_error":"必須為 255 個字元或更少","mastery_error":"必須大於或等於 0"},"points_possible_points_fda3b111":"%{points_possible} 分數"}}'))
var p=a["default"].scoped("OutcomeView")
var m=i("HbFp")
var g=i("GLiE")
var f=i.n(g)
Object(s["a"])(JSON.parse('{"ar":{"OutcomeContentBase":{"blank_error":"لا يمكن تركه خاليًا","confirm":{"delete":"هل تريد الحذف بالتأكيد؟"},"flash":{"addSuccess":"تم الإنشاء بنجاح","deleteError":"حدث خطأ ما. يتعذر الحذف في هذا الوقت.","deleteSuccess":"تم الحذف بنجاح","error":"حدث خطأ ما. يرجى تحديث الصفحة وإعادة المحاولة.","updateSuccess":"تم التحديث بنجاح"},"length_error":"يجب أن يكون 255 حرفًا أو أقل"}},"cy":{"OutcomeContentBase":{"blank_error":"Ddim yn cael bod yn wag","confirm":{"delete":"Ydych chi’n siŵr eich bod am ddileu?"},"flash":{"addSuccess":"Wedi llwyddo i greu","deleteError":"Aeth rhywbeth o’i le. Yn methu dileu ar hyn o bryd.","deleteSuccess":"Wedi llwyddo i ddileu","error":"Gwall. Adnewyddwch y dudalen a rhoi cynnig arall arni.","updateSuccess":"Wedi llwyddo i ddiweddaru"},"length_error":"Yn gorfod bod yn 255 nod neu lai"}},"da":{"OutcomeContentBase":{"blank_error":"Kan ikke være tom","confirm":{"delete":"Er du sikker på, at du vil slette?"},"flash":{"addSuccess":"Vellykket oprettelse","deleteError":"Noget gik galt. Kan ikke slette på nuværende tidspunkt.","deleteSuccess":"Vellykket sletning","error":"En fejl opstod. Opdater din side, og prøv igen.","updateSuccess":"Vellykket opdatering"},"length_error":"Skal være 255 tegn eller mindre"}},"da-x-k12":{"OutcomeContentBase":{"blank_error":"Kan ikke være tom","confirm":{"delete":"Er du sikker på, at du vil slette?"},"flash":{"addSuccess":"Vellykket oprettelse","deleteError":"Noget gik galt. Kan ikke slette på nuværende tidspunkt.","deleteSuccess":"Vellykket sletning","error":"En fejl opstod. Opdater din side, og prøv igen.","updateSuccess":"Vellykket opdatering"},"length_error":"Skal være 255 tegn eller mindre"}},"de":{"OutcomeContentBase":{"blank_error":"Darf nicht leer sein","confirm":{"delete":"Möchten Sie wirklich löschen?"},"flash":{"addSuccess":"Erstellung erfolgreich","deleteError":"Etwas ging schief. Konnte zu diesem Zeitpunkt nicht gelöscht werden","deleteSuccess":"Löschvorgang durchgeführt","error":"Ein Fehler ist aufgetreten. Bitte laden Sie die Seite erneut, und versuchen Sie es nochmal.","updateSuccess":"Aktualisierung erfolgreich"},"length_error":"Darf maximal 255 Zeichen lang sein"}},"el":{"OutcomeContentBase":{"blank_error":"Δεν πρέπει να παραμείνει κενό","confirm":{"delete":"Είστε σίγουροι ότι θέλετε να το αφαιρέσετε;"},"flash":{"addSuccess":"Επιτυχής δημιουργία","deleteError":"Κάτι δεν πήγε σωστά. Η διαγραφή δεν είναι, αυτή τη στιγμή, δυνατή.","deleteSuccess":"Επιτυχής διαγραφή","error":"Παρουσιάστηκε σφάλμα. Παρακαλώ ανανεώστε τη σελίδα και δοκιμάστε ξανά.","updateSuccess":"Επιτυχής ενημέρωση"},"length_error":"Πρέπει να έχει μήκος 255 χαρακτήρες ή λιγότερο"}},"en-AU":{"OutcomeContentBase":{"blank_error":"Cannot be blank","confirm":{"delete":"Are you sure you want to delete?"},"flash":{"addSuccess":"Creation successful","deleteError":"Something went wrong. Unable to delete at this time.","deleteSuccess":"Deletion successful","error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"},"length_error":"Must be 255 characters or less"}},"en-CA":{"OutcomeContentBase":{"blank_error":"Cannot be blank","confirm":{"delete":"Are you sure you want to delete?"},"flash":{"addSuccess":"Creation successful","deleteError":"Something went wrong. Unable to delete at this time.","deleteSuccess":"Deletion successful","error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"},"length_error":"Must be 255 characters or less"}},"en-GB":{"OutcomeContentBase":{"blank_error":"Cannot be blank","confirm":{"delete":"Are you sure you want to delete?"},"flash":{"addSuccess":"Creation successful","deleteError":"Something went wrong. Unable to delete at this time.","deleteSuccess":"Deletion successful","error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"},"length_error":"Must be 255 characters or less"}},"en-GB-x-ukhe":{"OutcomeContentBase":{"blank_error":"Cannot be blank","confirm":{"delete":"Are you sure you want to delete?"},"flash":{"addSuccess":"Creation successful","deleteError":"Something went wrong. Unable to delete at this time.","deleteSuccess":"Deletion successful","error":"An error occurred. Please refresh the page and try again.","updateSuccess":"Update successful"},"length_error":"Must be 255 characters or less"}},"es":{"OutcomeContentBase":{"blank_error":"No puede estar en blanco","confirm":{"delete":"¿Está seguro de que desea eliminar?"},"flash":{"addSuccess":"Creación correcta","deleteError":"Algo salió mal. No se puede eliminar en este momento.","deleteSuccess":"Eliminación correcta","error":"Ha ocurrido un error. Actualice la página y vuelva a intentarlo.","updateSuccess":"Actualización correcta"},"length_error":"Debe tener 255 caracteres o menos"}},"fa":{"OutcomeContentBase":{"blank_error":"نباید خالی باشد","confirm":{"delete":"مطمئنید که می خواهید حذف شود؟"},"flash":{"addSuccess":"ایجاد با موفقیت انجام شد","deleteError":"اشکالی رخ داده است. در حال حاضر امکان حذف نیست.","deleteSuccess":"حذف با موفقیت انجام شد","error":"یک خطا رخ داده است. لطفا صفحه را تازه سازی کنید و دوباره تلاش کنید.","updateSuccess":"بهنگام سازی با موفقیت انجام شد"},"length_error":"باید 255 نویسه یا کمتر باشد"}},"fi":{"OutcomeContentBase":{"blank_error":"Ei voi olla tyhjä","confirm":{"delete":"Haluatko varmasti poistaa?"},"flash":{"addSuccess":"Luonti onnistui","deleteError":"Jotakin meni pieleen. Poistaminen ei onnistu tällä hetkellä.","deleteSuccess":"Poisto onnistui","error":"Tapahtui virhe. Virkistä sivu ja yritä uudelleen.","updateSuccess":"Päivitys onnistui"},"length_error":"Saa olla enintään 255 merkkiä"}},"fr":{"OutcomeContentBase":{"blank_error":"Ne doit pas être vide.","confirm":{"delete":"Êtes-vous sûr de vouloir le supprimer ?"},"flash":{"addSuccess":"Création réussie","deleteError":"Un problème est survenu. Impossible de supprimer pour le moment.","deleteSuccess":"Suppression réussie","error":"Une erreur est survenue. Veuillez rafraîchir la page, puis réessayez.","updateSuccess":"Mise à jour réussie"},"length_error":"La longueur maximale est de 255 caractères"}},"fr-CA":{"OutcomeContentBase":{"blank_error":"Ne doit pas être vide.","confirm":{"delete":"Êtes-vous certain de vouloir effectuer la suppression?"},"flash":{"addSuccess":"Création réussie","deleteError":"Une erreur est survenue. Suppression impossible en ce moment.","deleteSuccess":"Suppression réussie","error":"Une erreur est survenue. Veuillez rafraîchir la page et essayer de nouveau.","updateSuccess":"Mise à jour réussie"},"length_error":"La longueur maximale est de 255 caractères"}},"he":{"OutcomeContentBase":{"blank_error":"אין להשאיר ריק","confirm":{"delete":"בטוח/ה שרוצה לבטל?"},"flash":{"addSuccess":"נוצר בהצלחה","deleteError":"משהו השתבש. לא ניתן לבטל כרגע.","deleteSuccess":"הביטול הצליח","error":"אירעה שגיאה. יש לרענן את הדף ולנסות שוב","updateSuccess":"עודכן בהצלחה"},"length_error":"255 תווים לכל היותר "}},"ht":{"OutcomeContentBase":{"blank_error":"Pa dwe vid","confirm":{"delete":"Ou kwè vrèman ou vle efase?"},"flash":{"addSuccess":"Kreyasyon Reyisi","deleteError":"Gen yon bagay ki mal fèt. Pa kapab efase pou moman sa a.","deleteSuccess":"Sipresyon Reyisi","error":"Yon erè fèt. Tanpri aktyalize paj la epi eseye ankò.","updateSuccess":"Aktyalizasyon reyisi"},"length_error":"Dwe gen 255 karaktè pou pi plis"}},"hu":{"OutcomeContentBase":{"blank_error":"Nem hagyható üresen","confirm":{"delete":"Biztos benne, hogy törölni szeretné?"},"flash":{"addSuccess":"A létrehozás sikeres","deleteError":"Hiba történt! A törlés most nem lehetséges.","deleteSuccess":"A törlés sikeres","error":"Hiba történt! Kérjük, frissítse az oldalt, és próbálja újra!","updateSuccess":"A frissítés sikeres"},"length_error":"Maximum 255 karakter hosszú lehet"}},"hy":{"OutcomeContentBase":{"blank_error":"Չի կարող դատարկ լինել","confirm":{"delete":"Դուք իսկապե՞ս ցանկանում եք դա ջնջել:"},"flash":{"addSuccess":"Հաջողությամբ ստեղծվել է","deleteError":"Ինչ-որ բան սխալ է ստացվել: Հնարավոր չէ ջնջել այս պահին:","deleteSuccess":"Հաջողությամբ ջնջվել է","error":"Սխալ է տեղի ունեցել: Խնդրում ենք թարմացնել էջը և փորձել կրկին:","updateSuccess":"Հաջողությամբ թարմացվել է"},"length_error":"Պետք է լինի մինչև 255 նիշ"}},"is":{"OutcomeContentBase":{"blank_error":"Má ekki vera autt","confirm":{"delete":"Viltu örugglega eyða?"},"flash":{"addSuccess":"Stofnun tókst","deleteError":"Eitthvað fór úrskeiðis. Ekki er hægt að eyða á þessum tíma.","deleteSuccess":"Eyðing tókst","error":"Villa kom upp Glæddu síðuna og reyndu aftur.","updateSuccess":"Uppfærsla tókst"},"length_error":"Verður að vera 255 stafir eða minna"}},"it":{"OutcomeContentBase":{"blank_error":"Non può essere lasciato vuoto","confirm":{"delete":"Eliminare?"},"flash":{"addSuccess":"Creazione riuscita","deleteError":"Si è verificato un errore. Impossibile eliminare in questo momento.","deleteSuccess":"Eliminazione riuscita","error":"Si è verificato un errore. Aggiorna la pagina e riprova.","updateSuccess":"Aggiornamento riuscito"},"length_error":"Deve contenere massimo 255 caratteri"}},"ja":{"OutcomeContentBase":{"blank_error":"タイトルは空白にできません","confirm":{"delete":"ほんとうに削除しますか?"},"flash":{"addSuccess":"作成が成功しました","deleteError":"なにかが失敗しました。この時点で削除することができません。","deleteSuccess":"削除が成功しました","error":"エラーが発生しました。ページを更新して再試行してください","updateSuccess":"更新が成功しました"},"length_error":"255 文字以下にしてください"}},"ko":{"OutcomeContentBase":{"blank_error":"값이 있어야 함","confirm":{"delete":"삭제하시겠습니까?"},"flash":{"addSuccess":"성공적으로 만듦","deleteError":"오류가 발생했습니다. 이번에는 삭제할 수 없습니다.","deleteSuccess":"성공적으로 삭제함","error":"오류가 발생했습니다. 페이지를 새로 고친 후에 다시 시도하시기 바랍니다.","updateSuccess":"성공적으로 업데이트함"},"length_error":"255글자보다 적어야 함"}},"mi":{"OutcomeContentBase":{"blank_error":"Kāore e taea te waiho kore","confirm":{"delete":"Kei te tino hiahia koe ki te muku koe?"},"flash":{"addSuccess":"Te hanaga i angitu","deleteError":"I hē tētahi mea. Kaore e taea te muku i tēnei wā.","deleteSuccess":"mukunga angitu","error":"I puta he hapa. Tēnā koa whakaorangia te whārangi ka ngana anō.","updateSuccess":"Whakahōu angitu"},"length_error":"Me kia 255 ngā pūāhua iti iho rānei"}},"nb":{"OutcomeContentBase":{"blank_error":"Kan ikke være tom","confirm":{"delete":"Er du sikker på at du ønsker å slette den?"},"flash":{"addSuccess":"Oppretting lyktes","deleteError":"Noe gikk galt. Kan for øyeblikket ikke slette.","deleteSuccess":"Sletting lyktes","error":"Det oppstod en feil. Oppdater siden og prøv igjen.","updateSuccess":"Oppdatering lyktes"},"length_error":"Må være 255 eller færre tegn"}},"nb-x-k12":{"OutcomeContentBase":{"blank_error":"Kan ikke være tom","confirm":{"delete":"Er du sikker på at du ønsker å slette den?"},"flash":{"addSuccess":"Oppretting lyktes","deleteError":"Noe gikk galt. Kan for øyeblikket ikke slette.","deleteSuccess":"Sletting lyktes","error":"Det oppstod en feil. Oppdater siden og prøv igjen.","updateSuccess":"Oppdatering lyktes"},"length_error":"Må være 255 eller færre tegn"}},"nl":{"OutcomeContentBase":{"blank_error":"Kan niet leeg zijn","confirm":{"delete":"Weet je zeker dat je dit wilt verwijderen?"},"flash":{"addSuccess":"Succesvol aangemaakt","deleteError":"Er is iets misgegaan. Kan momenteel niet verwijderd worden.","deleteSuccess":"Succesvol verwijderd","error":"Er is een fout opgetreden. Vernieuw de pagina en probeer het opnieuw.","updateSuccess":"Succesvol bijgewerkt"},"length_error":"Maximaal 255 tekens of minder"}},"nn":{"OutcomeContentBase":{"blank_error":"Kan ikkje vere tom","confirm":{"delete":"Er du sikker på at du vil slette?"},"flash":{"addSuccess":"Oppretta","deleteError":"Noko gjekk gale. Kan ikkje slette akkurat no.","deleteSuccess":"Sletta","error":"Det oppstod ein feil. Oppdater sida og prøv på nytt.","updateSuccess":"Oppdatert"},"length_error":"Må vere 255 teikn eller mindre"}},"pl":{"OutcomeContentBase":{"blank_error":"Nie może pozostać puste","confirm":{"delete":"Czy na pewno chcesz usunąć?"},"flash":{"addSuccess":"Tworzenie zakończone pomyślnie","deleteError":"Coś poszło nie tak. Nie można teraz usunąć.","deleteSuccess":"Usunięcie zakończone pomyślnie","error":"Wystąpił błąd. Odśwież stronę i spróbuj ponownie.","updateSuccess":"Aktualizacja zakończona pomyslnie"},"length_error":"Nie może być dłuższe niż 255 znaków"}},"pt":{"OutcomeContentBase":{"blank_error":"Não pode ficar em branco","confirm":{"delete":"Tem certeza de que deseja eliminar?"},"flash":{"addSuccess":"Criação efetuada com sucesso","deleteError":"Algo deu errado. Não é possível eliminar neste momento.","deleteSuccess":"Eliminação efetuada com sucesso","error":"Um erro ocorreu. Atualize a página e tente novamente.","updateSuccess":"Atualização efetuada com sucesso"},"length_error":"Deve ter 255 caracteres ou menos"}},"pt-BR":{"OutcomeContentBase":{"blank_error":"Não pode ficar em branco","confirm":{"delete":"Tem certeza de que deseja excluir?"},"flash":{"addSuccess":"Criação realizada com sucesso","deleteError":"Algo deu errado. Impossível excluir neste momento.","deleteSuccess":"Exclusão realizada com sucesso","error":"Ocorreu um erro. Atualize a página e tente novamente.","updateSuccess":"Atualização realizada com sucesso"},"length_error":"Deve ter 255 caracteres ou menos"}},"ru":{"OutcomeContentBase":{"blank_error":"Не может быть пустым","confirm":{"delete":"Вы уверены, что хотите удалить?"},"flash":{"addSuccess":"Успешно создано","deleteError":"Возникла проблема. Невозможно удалить в настоящее время.","deleteSuccess":"Успешно удалено","error":"Возникла ошибка. Обновите страницу и повторите попытку.","updateSuccess":"Успешно обновлено"},"length_error":"Должно содержать не больше 255 символов"}},"sv":{"OutcomeContentBase":{"blank_error":"Kan inte lämnas blank","confirm":{"delete":"Är du säker på att vill radera?"},"flash":{"addSuccess":"Skapades","deleteError":"Någonting gick fel. Det gick inte att radera vid detta tillfälle.","deleteSuccess":"Raderades","error":"Ett fel inträffade. Vänligen uppdatera sidan och försök igen.","updateSuccess":"Uppdaterades"},"length_error":"Måste vara 255 karaktärer eller färre"}},"tr":{"OutcomeContentBase":{"blank_error":"Boş bırakılamaz","confirm":{"delete":"Silmek istediğinize emin misiniz?"},"flash":{"addSuccess":"Oluşturma başarılı","deleteError":"Bazı şeyler yanlış gitti. Şu anda silinemiyor.","deleteSuccess":"Silme başarılı","error":"Bir hata meydana geldi. Lütfen sayfayı yenileyin ve tekrar deneyin.","updateSuccess":"Güncelleme başarılı"},"length_error":"255 karakter veya daha az olmalıdır"}},"zh-Hans":{"OutcomeContentBase":{"blank_error":"不能为空","confirm":{"delete":"是否确定要删除？"},"flash":{"addSuccess":"创建成功","deleteError":"出了些问题。暂时无法删除。","deleteSuccess":"删除成功","error":"发生错误。请刷新此页面并重试。","updateSuccess":"更新成功"},"length_error":"必须等于或少于 255 个字符"}},"zh-Hant":{"OutcomeContentBase":{"blank_error":"不可為空白","confirm":{"delete":"是否確定要刪除？"},"flash":{"addSuccess":"建立成功","deleteError":"出現問題。目前無法刪除。","deleteSuccess":"刪除成功","error":"發生了一個錯誤。請重新整理頁面，然後重試。","updateSuccess":"更新成功"},"length_error":"必須為 255 個字元或更少"}}}'))
var h=a["default"].scoped("OutcomeContentBase")
var b=i("2BSC")
var v=i("/iD7")
var y=i("21i1")
i("MWZS")
i("vpJZ")
y["a"].preloadRemoteModule()
class k extends b["a"]{static initClass(){this.prototype.tagName="div"
this.prototype.className="wrapper"
this.prototype.events=f.a.extend({"click .edit_button":"edit","click .cancel_button":"cancel","click .delete_button":"delete","click .move_button":"move","keyup input.outcome_title":"updateTitle"},b["a"].prototype.events)
this.prototype.validations={title(e){if(f.a.isEmpty(e.title))return h.t("blank_error","Cannot be blank")
if(e.title.length>255)return h.t("length_error","Must be 255 characters or less")}}}isValid(){this.errors={}
const e=this.getFormData()
for(const i in this.validations){var t
const n=this.validations[i];(t=n(e))&&(this.errors[i]=[{message:t}])}return f.a.isEmpty(this.errors)}initialize(e){this.state=e.state
this._readOnly=e.readOnly
this.on("success",this.success,this)
this.on("fail",this.fail,this)
this.setModelUrl()
if(this.model.isAbbreviated()&&"add"!==this.state){this.state="loading"
this.$el.disableWhileLoading(this.model.fetch({success:()=>{this.state=e.state
return this.render()}}))}return super.initialize(...arguments)}_cleanUpTiny(){return y["a"].destroyRCE(this.$el.find('[name="description"]'))}submit(e){e.preventDefault()
this.setModelUrl()
this.getTinyMceCode()
if(!this.isValid())return this.showErrors(this.errors)
super.submit(e)
this._cleanUpTiny()
o()(".edit_button").focus()}success(){if("add"===this.state){this.trigger("addSuccess",this.model)
o.a.flashMessage(h.t("flash.addSuccess","Creation successful"))}else o.a.flashMessage(h.t("flash.updateSuccess","Update successful"))
this.state="show"
this.render()
o()(".edit_button").focus()
return this}fail(){return o.a.flashError(h.t("flash.error","An error occurred. Please refresh the page and try again."))}getTinyMceCode(){const e=this.$("textarea")
return e.val(y["a"].callOnRCE(e,"get_code"))}setModelUrl(){return this.model.setUrlTo((()=>{switch(this.state){case"add":return"add"
case"delete":return"delete"
case"move":return"move"
default:return"edit"}})())}getFormData(){return this.$("form").toJSON()}remove(){this.tinymceExists()&&this._cleanUpTiny()
this.$el.hideErrors()
"add"===this.state&&this.model.isNew()&&this.model.destroy()
return super.remove(...arguments)}cancel(e){e.preventDefault()
this.resetModel()
this._cleanUpTiny()
this.$el.hideErrors()
if("add"===this.state){this.$el.empty()
this.model.destroy()
this.state="show"
o()(".add_outcome_link").focus()}else{this.state="show"
this.render()
o()(".edit_button").focus()}return this}edit(e){e.preventDefault()
this.state="edit"
this._modelAttributes=this.model.toJSON()
return this.render()}delete(e){e.preventDefault()
if(!confirm(h.t("confirm.delete","Are you sure you want to delete?")))return
this.state="delete"
this.setModelUrl()
return this.$el.disableWhileLoading(this.model.destroy({success:()=>{o.a.flashMessage(h.t("flash.deleteSuccess","Deletion successful"))
this.trigger("deleteSuccess")
this.remove()
o()(".add_outcome_link").focus()},error:()=>o.a.flashError(h.t("flash.deleteError","Something went wrong. Unable to delete at this time."))}))}move(e){e.preventDefault()
return this.trigger("move",this.model)}resetModel(){return this.model.set(this._modelAttributes)}setupTinyMCEViewSwitcher(){o()(".rte_switch_views_link").click(e=>{e.preventDefault()
y["a"].callOnRCE(this.$("textarea"),"toggle")
o()(e.currentTarget).siblings(".rte_switch_views_link").andSelf().toggle().focus()})}addTinyMCEKeyboardShortcuts(){if(!ENV.use_rce_enhancements){const e=new v["a"]
return e.render().$el.insertBefore(o()(".rte_switch_views_link:first"))}}readyForm(){return setTimeout(()=>{y["a"].loadNewEditor(this.$("textarea"),{getRenderingTarget(e){const t=o()(e).wrap("<div id='parent-of-".concat(e.id,"'></div>")).get(0)
return t.parentNode}})
this.setupTinyMCEViewSwitcher()
this.addTinyMCEKeyboardShortcuts()
return this.$("input:first").focus()})}readOnly(){return this._readOnly}updateTitle(e){return this.model.set("title",e.currentTarget.value)}tinymceExists(){const e=this.$el.find('[name="description"]').length>0
const t=y["a"].callOnRCE(this.$el.find('[name="description"]'),"exists?")
return e&&t}}k.initClass()
var w=i("3O+N")
var z=i.n(w)
i("bIPM")
i("DfGn")
var S=z.a.default
var j=S.template,x=S.templates=S.templates||{}
var C="outcomes/outcomeCalculationMethodForm"
x[C]=j((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=this.merge(n,e.partials)
r=r||{}
var o,a,s,c="",_="function",d=this.escapeExpression,u=i.helperMissing,l=this
function p(e,t){var n,r,o=""
o+='\n          <input type="text" name="calculation_int" class="outcomes_narrow_text_input" id="calculation_int" value="'
if(r=i.calculation_int)n=r.call(e,{hash:{},data:t})
else{r=e&&e.calculation_int
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+'" />\n        '
return o}function m(e,t){var n,r,o=""
o+='\n          <span id="calculation_int">'
if(r=i.calculation_int)n=r.call(e,{hash:{},data:t})
else{r=e&&e.calculation_int
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"</span>\n        "
return o}function g(e,t){return"8"}function f(e,t){return"12"}c+='<div class="content-box border border-trbl border-round">\n  <div class="grid-row">\n    <div id="calculation_int_left_side" style="'+d((a=i.hiddenUnlessExists||t&&t.hiddenUnlessExists,s={hash:{},data:r},a?a.call(t,t&&t.calculation_int,s):u.call(t,"hiddenUnlessExists",t&&t.calculation_int,s)))+'"\n      class="col-xs-4 border border-r">\n      <div>\n        <label for="calculation_int" id="calculation_int_label">\n          '
if(a=i.calculationIntLabel)o=a.call(t,{hash:{},data:r})
else{a=t&&t.calculationIntLabel
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+"\n        </label>\n        "
o=(a=i.ifIncludes||t&&t.ifIncludes,s={hash:{},inverse:l.program(3,m,r),fn:l.program(1,p,r),data:r},a?a.call(t,t&&t.writeStates,t&&t.state,s):u.call(t,"ifIncludes",t&&t.writeStates,t&&t.state,s));(o||0===o)&&(c+=o)
c+='\n      </div>\n      <div>\n        <span class="outcomes-calculation-int-italics">\n          '
if(a=i.calculationIntDescription)o=a.call(t,{hash:{},data:r})
else{a=t&&t.calculationIntDescription
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'\n        </span>\n      </div>\n    </div>\n    <div class="col-xs-'
o=(a=i.ifExists||t&&t.ifExists,s={hash:{},inverse:l.program(7,f,r),fn:l.program(5,g,r),data:r},a?a.call(t,t&&t.calculation_int,s):u.call(t,"ifExists",t&&t.calculation_int,s));(o||0===o)&&(c+=o)
c+='">\n      '
o=l.invokePartial(n["outcomes/calculationMethodExample"],"outcomes/calculationMethodExample",t,i,n,r);(o||0===o)&&(c+=o)
c+="\n    </div>\n  </div>\n</div>\n\n"
return c}))
var O=x[C]
class E extends d.a.View{static initClass(){this.optionProperty("el")
this.optionProperty("model")
this.optionProperty("state")
this.prototype.template=O
this.prototype.els={"#calculation_int":"$calculation_int"}
this.prototype.events={"blur #calculation_int":"blur","keyup #calculation_int":"keyup"}}afterRender(){if(this.hadFocus){this.$calculation_int.focus().val(this.$calculation_int.val())
this.$calculation_int[0].selectionStart=this.selectionStart}return this.hadFocus=void 0}attach(){return this.model.on("change:calculation_method",this.render,this)}blur(e){this.timeout&&clearTimeout(this.timeout)
return this.change(e)}change(e){const t=parseInt(m["a"].parse($(e.target).val()))
if(f.a.isNaN(t))return
this.model.set({calculation_int:t})
return this.render()}keyup(e){this.timeout&&clearTimeout(this.timeout)
this.timeout=setTimeout(()=>this.change(e),500)}render(){this.hadFocus=!f.a.isEmpty(this.$calculation_int)&&document.activeElement===this.$calculation_int[0]
this.hadFocus&&(this.selectionStart=document.activeElement.selectionStart)
this.undelegateEvents()
super.render(...arguments)
return this.delegateEvents()}toJSON(){return f.a.extend(super.toJSON(...arguments),{state:this.state,writeStates:["add","edit"]})}}E.initClass()
Object(s["a"])(JSON.parse('{"ar":{"calculation_method_fe281f9":"طريقة الحساب","delete_outcome_cc6546f1":"حذف نتيجة","edit_outcome_867a0381":"تعديل نتيجة","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"الإتقان: %{n_mastery_points_precision_2_str} النقاط","move_abf00365":"نقل","move_outcome_ce497e6c":"نقل النتيجة","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} النقاط","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} النقاط","outcomes":{"outcome":{"links":{"delete_outcome":"حذف","edit_outcome":"تحرير"},"mastery_at_label":"تعيين درجة إتقان لأي درجات:","use_for_scoring":"استخدم هذا المعيار لتوزيع الدرجات"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"تم استخدام هذه الناتج لتقييم أحد الطلاب وبعض من عمليات التحرير ستؤثر على نتائج الطالب.","total_points_44d76792":"إجمالي النقاط"},"cy":{"calculation_method_fe281f9":"Dull Cyfrifo","delete_outcome_cc6546f1":"Dileu Deilliant","edit_outcome_867a0381":"Golygu Deilliant","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Meistroli: %{n_mastery_points_precision_2_str} Pwynt","move_abf00365":"Symud","move_outcome_ce497e6c":"Symud Deilliant","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pwynt","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Pwynt","outcomes":{"outcome":{"links":{"delete_outcome":"Dileu","edit_outcome":"Golygu"},"mastery_at_label":"Gosod lefel meistroli ar gyfer unrhyw sgôr ar neu’n uwch na:","use_for_scoring":"Defnyddio’r maen prawf ar gyfer sgorio"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Mae’r deilliant hwn wedi cael ei ddefnyddio i asesu myfyriwr, a bydd rhywfaint o’r gwaith golygu’n effeithio ar ganlyniadau myfyriwr.","total_points_44d76792":"Cyfanswm Pwyntiau"},"da":{"calculation_method_fe281f9":"Beregningsmetode","delete_outcome_cc6546f1":"Slet læringsudbytte","edit_outcome_867a0381":"Rediger læringsudbytte","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Opfyldelse af læringsmål: %{n_mastery_points_precision_2_str} point","move_abf00365":"Flyt","move_outcome_ce497e6c":"Flyt læringsudbytte","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Slet","edit_outcome":"Rediger"},"mastery_at_label":"Indstil opfyldelse af læringsmål for ethvert resultat på eller over:","use_for_scoring":"Brug dette kriterie til resultatet"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dette læringsudbytte er blevet brugt til at bedømme en studerende og nogle redigeringer vil påvirke studerendes resultater.","total_points_44d76792":"Samlede point"},"da-x-k12":{"calculation_method_fe281f9":"Beregningsmetode","delete_outcome_cc6546f1":"Slet læringsudbytte","edit_outcome_867a0381":"Rediger læringsudbytte","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Opfyldelse af læringsmål: %{n_mastery_points_precision_2_str} point","move_abf00365":"Flyt","move_outcome_ce497e6c":"Flyt læringsudbytte","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Slet","edit_outcome":"Rediger"},"mastery_at_label":"Indstil opfyldelse af læringsmål for ethvert resultat på eller over:","use_for_scoring":"Brug dette kriterie til resultatet"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dette læringsudbytte er blevet brugt til at bedømme en elev og nogle redigeringer vil påvirke elevens resultater.","total_points_44d76792":"Samlede point"},"de":{"calculation_method_fe281f9":"Berechnungsmethode","delete_outcome_cc6546f1":"Lernziel löschen","edit_outcome_867a0381":"Lernziel bearbeiten","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Leistungsziel: %{n_mastery_points_precision_2_str} Punkte","move_abf00365":"Verschieben","move_outcome_ce497e6c":"Lernziel verschieben","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkte","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Punkte","outcomes":{"outcome":{"links":{"delete_outcome":"Löschen","edit_outcome":"Ändern"},"mastery_at_label":"Leistungsziel festlegen für jede Punktzahl ab:","use_for_scoring":"Dieses Kriterium zur Bewertung verwenden"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dieses Ergebnis wurde verwendet, um einen Studenten zu beurteilen, und einige Änderungen werden Auswirkungen auf Studentenergebnisse haben.","total_points_44d76792":"Gesamtpunkte"},"el":{"calculation_method_fe281f9":"Μέθοδος Υπολογισμού","delete_outcome_cc6546f1":"Αφαίρεση Αποτελέσματος","move_abf00365":"Μετακίνησε","move_outcome_ce497e6c":"Μετακίνηση Αποτελέσματος","outcomes":{"outcome":{"links":{"delete_outcome":"Διαγραφή Αποτελέσματος","edit_outcome":"Επεξεργασία Αποτελέσματος"},"mastery_at_label":"Καθορισμός επιπέδου επιδεξιότητας για βαθμολογία ίση με ή πάνω από:","use_for_scoring":"Χρήση αυτού του κριτηρίου για βαθμολόγηση"}},"total_points_44d76792":"Συνολικοί Πόντοι"},"en-AU":{"calculation_method_fe281f9":"Calculation Method","delete_outcome_cc6546f1":"Delete Outcome","edit_outcome_867a0381":"Edit Outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move Outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results.","total_points_44d76792":"Total Points"},"en-AU-x-unimelb":{"calculation_method_fe281f9":"Calculation Method","delete_outcome_cc6546f1":"Delete Outcome","edit_outcome_867a0381":"Edit Outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move Outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results.","total_points_44d76792":"Total Points"},"en-CA":{"calculation_method_fe281f9":"Calculation Method","delete_outcome_cc6546f1":"Delete Outcome","edit_outcome_867a0381":"Edit Outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move Outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results.","total_points_44d76792":"Total Points"},"en-GB":{"calculation_method_fe281f9":"Calculation method","delete_outcome_cc6546f1":"Delete outcome","edit_outcome_867a0381":"Edit outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results.","total_points_44d76792":"Total points"},"en-GB-x-lbs":{"calculation_method_fe281f9":"Calculation method","delete_outcome_cc6546f1":"Delete outcome","edit_outcome_867a0381":"Edit outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results."},"en-GB-x-ukhe":{"calculation_method_fe281f9":"Calculation method","delete_outcome_cc6546f1":"Delete outcome","edit_outcome_867a0381":"Edit outcome","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Points","move_abf00365":"Move","move_outcome_ce497e6c":"Move outcome","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Delete","edit_outcome":"Edit"},"mastery_at_label":"Set mastery for any score at or above:","use_for_scoring":"Use this criterion for scoring"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"This outcome has been used to assess a student and some edits will affect student results.","total_points_44d76792":"Total points"},"es":{"calculation_method_fe281f9":"Método de cálculo","delete_outcome_cc6546f1":"Eliminar competencia","edit_outcome_867a0381":"Editar competencia","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Dominio: %{n_mastery_points_precision_2_str} Puntos","move_abf00365":"Mover","move_outcome_ce497e6c":"Mover competencia","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Puntos","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Puntos","outcomes":{"outcome":{"links":{"delete_outcome":"Eliminar","edit_outcome":"Editar"},"mastery_at_label":"Fijar dominio en cualquier puntaje igual o superior a:","use_for_scoring":"Usar este criterio para puntuar"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Esta competencia se ha utilizado para evaluar a un estudiante, y algunas ediciones afectarán los resultados del estudiante.","total_points_44d76792":"Puntos totales"},"fa":{"calculation_method_fe281f9":"روش محاسبه","delete_outcome_cc6546f1":"حذف نتیجه","edit_outcome_867a0381":"ویرایش نتیجه","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"تسلط:  %{n_mastery_points_precision_2_str} امتیاز","move_abf00365":"انتقال","move_outcome_ce497e6c":"انتقال نتیجه","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} امتیاز","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} امتیاز","outcomes":{"outcome":{"links":{"delete_outcome":"حذف","edit_outcome":"ویرایش"},"mastery_at_label":"تعیین تسلط برای هر نمره از این نمره یا بالاتر:","use_for_scoring":"استفاده از این معیار برای نمره گذاری"}},"total_points_44d76792":"امتیازهای کل"},"fi":{"calculation_method_fe281f9":"Laskentatapa","delete_outcome_cc6546f1":"Poista tulos","edit_outcome_867a0381":"Muokkaa tulosta","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Hallinta: %{n_mastery_points_precision_2_str} Pistettä","move_abf00365":"Siirrä","move_outcome_ce497e6c":"Siirrä tulos","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pistettä","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Pistettä","outcomes":{"outcome":{"links":{"delete_outcome":"Poista","edit_outcome":"Muokkaa"},"mastery_at_label":"Määritä hallinta kaikille pistemäärille tässä tai tämän yläpuolella:","use_for_scoring":"Käytä tätä kriteeriä pisteyttämisessä"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Tätä tulosta on käytetty opiskelijan arviointiin ja jotkut muokkaukset vaikuttavat opiskelijan tuloksiin.","total_points_44d76792":"Pisteitä yhteensä"},"fr":{"calculation_method_fe281f9":"Méthode de calcul","delete_outcome_cc6546f1":"Supprimer l\'acquis","edit_outcome_867a0381":"Modifier l\'acquis","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Maîtrise : %{n_mastery_points_precision_2_str} Points","move_abf00365":"Déplacer","move_outcome_ce497e6c":"Déplacer l\'acquis","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Supprimer","edit_outcome":"Modifier"},"mastery_at_label":"Définir la progression pour tout score supérieur ou égal à :","use_for_scoring":"Utiliser ce critère pour la notation"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Ce résultat a été utilisé pour évaluer un élève et certaines révisions auront une incidence sur les résultats des élèves.","total_points_44d76792":"Total de points"},"fr-CA":{"calculation_method_fe281f9":"Méthode de calcul","delete_outcome_cc6546f1":"Supprimer le résultat","edit_outcome_867a0381":"Modifier le résultat","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Maîtrise : %{n_mastery_points_precision_2_str} Points","move_abf00365":"Déplacer","move_outcome_ce497e6c":"Déplacer le résultat","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Points","outcomes":{"outcome":{"links":{"delete_outcome":"Supprimer","edit_outcome":"Modifier"},"mastery_at_label":"Définir la progression pour tout score supérieur ou égal à :","use_for_scoring":"Utiliser ce critère pour la notation"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Ce résultat a été utilisé pour évaluer un étudiant et certaines modifications auront une incidence sur les résultats de l’étudiant.","total_points_44d76792":"Total de points"},"he":{"calculation_method_fe281f9":"שיטת חישוב","delete_outcome_cc6546f1":"ביטול השגי למידה","edit_outcome_867a0381":"עריכת השגי למידה","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"התמחות: %{n_mastery_points_precision_2_str} נקודות","move_abf00365":"העברה","move_outcome_ce497e6c":"העברה של תוצאות הלמידה","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} נקודות","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} נקודות","outcomes":{"outcome":{"links":{"delete_outcome":"ביטול","edit_outcome":"עריכה"},"mastery_at_label":"הגדרת מומחיות לכל ציון כזה או גבוה ממנו","use_for_scoring":"קריטריון זה משמש לחישוב הציון"}},"total_points_44d76792":"סך ניקוד "},"ht":{"calculation_method_fe281f9":"Metòd Kalkil","delete_outcome_cc6546f1":"Efase Rezilta","edit_outcome_867a0381":"Modifye Rezilta","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Metriz: %{n_mastery_points_precision_2_str} Pwen","move_abf00365":"Deplase","move_outcome_ce497e6c":"Deplase Rezilta","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pwen","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Pwen","outcomes":{"outcome":{"links":{"delete_outcome":"Efase","edit_outcome":"Modifye"},"mastery_at_label":"Defini metriz pou tout nòt a oswa pi wo:","use_for_scoring":"Itilize kritè sa a pou notasyon"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Yo te itilize rezilta sa a pou evalye yon elèv e kèk chanjman ap afekte rezilta elèv la.","total_points_44d76792":"Total Pwen"},"hu":{"calculation_method_fe281f9":"Számítási módszer","delete_outcome_cc6546f1":"Tanulási eredmény törlése","edit_outcome_867a0381":"Tanulási eredmény szerkesztése","move_abf00365":"Áthelyezés","move_outcome_ce497e6c":"Tanulási eredmény áthelyezése","outcomes":{"outcome":{"links":{"delete_outcome":"Törlés","edit_outcome":"Szerkesztés"},"mastery_at_label":"Jártasság beállítása ezen a pontszámon vagy fölötte:","use_for_scoring":"Kritérium használata pontozáshoz"}},"total_points_44d76792":"Összpontszám"},"hy":{"calculation_method_fe281f9":"Հաշվարկման մեթոդ","move_abf00365":"Տեղափոխել","move_outcome_ce497e6c":"Տեղափոխել արդյունքը","outcomes":{"outcome":{"mastery_at_label":"Սահմանել անցողիկ գնահատականը հետևյալի մակարդակին կամ դրանից բարձր՝","use_for_scoring":"Կիրառել այս չափանիշը գնահատման մեջ"}},"total_points_44d76792":"Ընդհանուր միավորների քանակը"},"is":{"calculation_method_fe281f9":"Reikningsaðferð","delete_outcome_cc6546f1":"Eyða niðurstöðu","edit_outcome_867a0381":"Breyta niðurstöðu","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Tileinkun: %{n_mastery_points_precision_2_str} punktar","move_abf00365":"Færa","move_outcome_ce497e6c":"Færa niðurstöðu","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} punktar","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} punktar","outcomes":{"outcome":{"links":{"delete_outcome":"Eyða","edit_outcome":"Breyta"},"mastery_at_label":"ákveða tileinkun fyrir einkunn við eða fyrir ofan:","use_for_scoring":"Nota þessa forsendu fyrir stigagjöf"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Þessi niðurstaða ","total_points_44d76792":"Heildarpunktar"},"it":{"calculation_method_fe281f9":"Metodo di calcolo","delete_outcome_cc6546f1":"Elimina esito","edit_outcome_867a0381":"Modifica esito","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Padronanza: %{n_mastery_points_precision_2_str} Punti","move_abf00365":"Sposta","move_outcome_ce497e6c":"Sposta esito","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punti","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Punti","outcomes":{"outcome":{"links":{"delete_outcome":"Elimina","edit_outcome":"Modifica"},"mastery_at_label":"Imposta livello di padronanza per qualsiasi punteggio pari a o al di sopra di:","use_for_scoring":"Utilizza questo criterio per il punteggio"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Questo esito è stato utilizzato per valutare uno studente e alcune modifiche influiranno sui risultati degli studenti.","total_points_44d76792":"Punti totali"},"ja":{"calculation_method_fe281f9":"計算メソッド","delete_outcome_cc6546f1":"結果を削除する","edit_outcome_867a0381":"結果を編集する","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"達成：%{n_mastery_points_precision_2_str} ポイント","move_abf00365":"移動","move_outcome_ce497e6c":"成果の移動","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} ポイント","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} ポイント","outcomes":{"outcome":{"links":{"delete_outcome":"削除","edit_outcome":"編集"},"mastery_at_label":"次のスコア以上の場合に熟達を設定:","use_for_scoring":"採点にこの基準を使用"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"この成果は受講生を評価するのに使用されており、編集によっては受講生の成績に影響を与えることがあります。","total_points_44d76792":"合計点"},"ko":{"move_abf00365":"이동","outcomes":{"outcome":{"mastery_at_label":"다음 이상 점수에 대해 숙달 설정:","use_for_scoring":"점수 매기기에 이 기준을 사용"}},"total_points_44d76792":"총점"},"mi":{"calculation_method_fe281f9":"Tikanga Tatauranga","delete_outcome_cc6546f1":"Mukua Huanga","edit_outcome_867a0381":"Whakatika Huanga","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Hinganga %{n_mastery_points_precision_2_str} Koinga","move_abf00365":"Nuku","move_outcome_ce497e6c":"Nuku Putanga","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st}koinga","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig}koinga","outcomes":{"outcome":{"links":{"delete_outcome":"Muku","edit_outcome":"Whakatika"},"mastery_at_label":"Whakatakotoria he hinganga hoki tētahi kaute i runga rānei:","use_for_scoring":"Whakamahia tēnei paearu mō te kaute"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Kua whakamahia tēnei putanga hei aromatawai i te akonga me ētahi whakatikanga ka pā ki ngā hua o ngā ākonga.","total_points_44d76792":"Ngā Koinga katoa"},"nb":{"calculation_method_fe281f9":"Beregningsmetode","delete_outcome_cc6546f1":"Slett læringsmål","edit_outcome_867a0381":"Rediger læringsmål","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Poeng","move_abf00365":"Flytt","move_outcome_ce497e6c":"Flytt læringsmål","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poeng","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Poeng","outcomes":{"outcome":{"links":{"delete_outcome":"Slett","edit_outcome":"Rediger"},"mastery_at_label":"Sett ekspertise for resultat på eller over:","use_for_scoring":"Bruk dette kriteriet ved setting av resultat"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dette resultatet har blitt brukt ti å vurdere en student og noen endringer vil påvirke studentens resultater.","total_points_44d76792":"Totalt antall poeng"},"nb-x-k12":{"calculation_method_fe281f9":"Beregningsmetode","delete_outcome_cc6546f1":"Slett mål","edit_outcome_867a0381":"Rediger mål","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Mastery: %{n_mastery_points_precision_2_str} Poeng","move_abf00365":"Flytt","move_outcome_ce497e6c":"Flytt mål","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poeng","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Poeng","outcomes":{"outcome":{"links":{"delete_outcome":"Slett","edit_outcome":"Rediger"},"mastery_at_label":"Sett ekspertise for resultat på eller over:","use_for_scoring":"Bruk dette kriteriet ved setting av resultat"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dette målet har blitt brukt til å vurdere en elev og noen endringer vil påvirke elevens resultater.","total_points_44d76792":"Totalt antall poeng"},"nl":{"calculation_method_fe281f9":"Berekeningsmethode","delete_outcome_cc6546f1":"Leerdoel verwijderen","edit_outcome_867a0381":"Leerdoel bewerken","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Bekwaamheid: %{n_mastery_points_precision_2_str} Punten","move_abf00365":"Verplaatsen","move_outcome_ce497e6c":"Leerdoel verplaatsen","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punten","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Punten","outcomes":{"outcome":{"links":{"delete_outcome":"Verwijderen","edit_outcome":"Bewerken"},"mastery_at_label":"Beoordelingsniveau instellen voor elke score van of hoger dan:","use_for_scoring":"Deze standaard voor beoordelen gebruiken"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Dit leerdoel is gebruikt om een cursist te beoordelen en sommige bewerkingen zijn van invloed op de resultaten van de cursist.","total_points_44d76792":"Totaal aantal punten"},"nn":{"calculation_method_fe281f9":"Utrekningsmetode","delete_outcome_cc6546f1":"Slett læringsmål","edit_outcome_867a0381":"Rediger læringsmål","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Meistringsnivå: %{n_mastery_points_precision_2_str} poeng","move_abf00365":"Flytt","move_outcome_ce497e6c":"Flytt læringsmål","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} poeng","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} poeng","outcomes":{"outcome":{"links":{"delete_outcome":"Slett","edit_outcome":"Rediger"},"mastery_at_label":"Oppgi meistringsnivå for eit av resultata ovanfor:","use_for_scoring":"Bruk dette kriteriet når du skal bestemme resultat"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Læringsmålet er brukt til å vurdere ein student og endringar vil påverke studentresultat.","total_points_44d76792":"Totalpoeng"},"pl":{"calculation_method_fe281f9":"Metoda obliczenia","delete_outcome_cc6546f1":"Usuń wynik","edit_outcome_867a0381":"Edytuj wynik","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Poziom opanowania:  %{n_mastery_points_precision_2_str}Punkty","move_abf00365":"Przenieś","move_outcome_ce497e6c":"Przenieś wynik","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkty","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Punkty","outcomes":{"outcome":{"links":{"delete_outcome":"usuń","edit_outcome":"Edytuj"},"mastery_at_label":"Ustaw biegłość dla każdego wyniku większego lub równego:","use_for_scoring":"Użyj tego kryterium do przydzielania punktów"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Użyto tego wyniku do oceny uczestnika; niektóre zmiany wpłyną na rezultat uczestnika.","total_points_44d76792":"Łączna liczba punktów"},"pt":{"calculation_method_fe281f9":"Método de cálculo","delete_outcome_cc6546f1":"Eliminar resultado","edit_outcome_867a0381":"Editar resultado","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Domínio: %{n_mastery_points_precision_2_str} Pontos","move_abf00365":"Mover","move_outcome_ce497e6c":"Mover resultado","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pontos","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Pontos","outcomes":{"outcome":{"links":{"delete_outcome":"Eliminar","edit_outcome":"Editar"},"mastery_at_label":"Definir o domínio para qualquer pontuação igual ou superior a:","use_for_scoring":"Utilizar este critério para a pontuação"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Este resultado foi usado para avaliar um aluno e algumas edições afetarão os resultados dos alunos.","total_points_44d76792":"Total de pontos"},"pt-BR":{"calculation_method_fe281f9":"Método de cálculo","delete_outcome_cc6546f1":"Excluir Objetivo","edit_outcome_867a0381":"Editar Objetivo","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Domínio: %{n_mastery_points_precision_2_str} pontos","move_abf00365":"Mover","move_outcome_ce497e6c":"Mover objetivo","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} pontos","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} pontos","outcomes":{"outcome":{"links":{"delete_outcome":"Excluir","edit_outcome":"Editar"},"mastery_at_label":"Definir o domínio para qualquer pontuação igual ou maior:","use_for_scoring":"Utilizar este critério para a pontuação"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Este objetivo foi utilizado para avaliar um aluno e algumas edições afetarão os resultados do aluno.","total_points_44d76792":"Total de pontos"},"ru":{"calculation_method_fe281f9":"Метод вычисления","delete_outcome_cc6546f1":"Удалить результат","edit_outcome_867a0381":"Редактировать результат","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Владение: %{n_mastery_points_precision_2_str} Баллы","move_abf00365":"Переместить","move_outcome_ce497e6c":"Переместить результат","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Баллы","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Баллы","outcomes":{"outcome":{"links":{"delete_outcome":"Удалить","edit_outcome":"Редактировать"},"mastery_at_label":"Установите усвоение для какой-либо оценки на (или выше):","use_for_scoring":"Используйте данный критерий для оценки"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Этот результат был использован для оценки студента, и некоторые изменения повлияют на результаты студента.","total_points_44d76792":"Общее число баллов"},"sl":{"calculation_method_fe281f9":"Metoda izračuna","delete_outcome_cc6546f1":"Izbriši izid","edit_outcome_867a0381":"Potrdi urejanje izida","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Odličnost: %{n_mastery_points_precision_2_str} Točke","move_abf00365":"Premakni","move_outcome_ce497e6c":"Premakni izid","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Točke","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Točke","outcomes":{"outcome":{"links":{"delete_outcome":"Odstrani","edit_outcome":"Uredi"},"mastery_at_label":"Nastavi odličnost za kateri koli rezultat, enak ali večji od:","use_for_scoring":"Uporabi to merilo za točkovanje"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Ta izid je uporabljen za dostop študenta in določena urejanja bodo vplivala na rezultate študenta."},"sv":{"calculation_method_fe281f9":"Beräkningsmetod","delete_outcome_cc6546f1":"Ta bort lärandemål","edit_outcome_867a0381":"Ändra lärandemål","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Måluppfyllelse: %{n_mastery_points_precision_2_str} Poäng","move_abf00365":"Flytta","move_outcome_ce497e6c":"Flytta bedömning","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poäng","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Poäng","outcomes":{"outcome":{"links":{"delete_outcome":"Radera","edit_outcome":"Redigera"},"mastery_at_label":"Sätt måluppfyllelsen till poängen:","use_for_scoring":"Använd det här kriteriet för poängsättning"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Detta resultat har använts för att bedöma en student och vissa ändringar kommer att påverka studentens resultat.","total_points_44d76792":"Totala poäng"},"sv-x-k12":{"calculation_method_fe281f9":"Beräkningsmetod","delete_outcome_cc6546f1":"Ta bort lärandemål","edit_outcome_867a0381":"Ändra lärandemål","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Måluppfyllelse: %{n_mastery_points_precision_2_str} poäng","move_abf00365":"Flytta","move_outcome_ce497e6c":"Flytta bedömning","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poäng","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} Poäng","outcomes":{"outcome":{"links":{"delete_outcome":"Radera","edit_outcome":"Redigera"},"mastery_at_label":"Sätt måluppfyllelsen till resultatet:","use_for_scoring":"Använd det här kriteriet för att sätta resultat"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"Detta resultat har använts för att bedöma en elev och vissa ändringar kommer att påverka elevens resultat."},"tr":{"calculation_method_fe281f9":"Hesaplama Yöntemi","delete_outcome_cc6546f1":"Öğrenme Çıktısını Sil","edit_outcome_867a0381":"Öğrenme Çıktısını Düzenle","move_abf00365":"Taşı","move_outcome_ce497e6c":"Öğrenme Çıktısını Taşı","outcomes":{"outcome":{"links":{"delete_outcome":"Sil","edit_outcome":"Düzenle"},"mastery_at_label":"Şu düzeyde ya da üstünde bir yeterlilik puanı belirle:","use_for_scoring":"Puanlama için bu ölçütü kullan"}},"total_points_44d76792":"Toplam Puan"},"uk":{"calculation_method_fe281f9":"Метод підрахунків","delete_outcome_cc6546f1":"Видалити результати","edit_outcome_867a0381":"Редагувати результат","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"Майстерність: %{n_mastery_points_precision_2_str} балів","move_abf00365":"Перемітитися","move_outcome_ce497e6c":"Перемістити результат","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} балів","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} балів","outcomes":{"outcome":{"links":{"delete_outcome":"Видалити","edit_outcome":"Редагувати"},"mastery_at_label":"Встановаити майстер для будь-якої оцінки на рівні або вище:","use_for_scoring":"Використовуйте цю критерію для оцінювання"}}},"zh-Hans":{"calculation_method_fe281f9":"计算方法","delete_outcome_cc6546f1":"删除结果","edit_outcome_867a0381":"编辑结果","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"掌握程度%{n_mastery_points_precision_2_str} 分","move_abf00365":"移动","move_outcome_ce497e6c":"移动结果","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} 分","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} 分","outcomes":{"outcome":{"links":{"delete_outcome":"删除","edit_outcome":"编辑"},"mastery_at_label":"为等于或高于此值的任何分数设置掌握程度:","use_for_scoring":"使用此标准打分"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"已经使用此结果评估学生，进行编辑将影响学生成绩。","total_points_44d76792":"总得分"},"zh-Hant":{"calculation_method_fe281f9":"計算方法","delete_outcome_cc6546f1":"刪除成果","edit_outcome_867a0381":"編輯成果","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b":"精通：%{n_mastery_points_precision_2_str} 分數","move_abf00365":"移動","move_outcome_ce497e6c":"移動成果","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} 分數","n_points_precision_2_strip_insig_points_60ad6f21":"%{n_points_precision_2_strip_insig} 分數","outcomes":{"outcome":{"links":{"delete_outcome":"刪除","edit_outcome":"編輯"},"mastery_at_label":"將達到或超過以下標準的任何分數評定為精通水平：","use_for_scoring":"使用此標準進行打分"}},"this_outcome_has_been_used_to_assess_a_student_and_a3a48511":"此成果已用於評估一位學生，而且一些編輯會影響學生的成績。","total_points_44d76792":"總分"}}'))
a["default"].scoped("outcomes.outcome")
var A=z.a.default
var D=A.template,N=A.templates=A.templates||{}
var M="outcomes/outcome"
N[M]=D((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c="",_="function",d=this.escapeExpression,u=i.helperMissing,l=this
function p(e,t){var n,r,o=""
o+="\n    <a href='"
if(r=i.html_url)n=r.call(e,{hash:{},data:t})
else{r=e&&e.html_url
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"'>"
if(r=i.title)n=r.call(e,{hash:{},data:t})
else{r=e&&e.title
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"</a>\n  "
return o}function m(e,t){var n,r,o=""
o+="\n    "
if(r=i.title)n=r.call(e,{hash:{},data:t})
else{r=e&&e.title
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"\n  "
return o}function g(e,t){var n,r,o=""
o+='\n      <th class="rating" aria-label=\''
if(r=i.description)n=r.call(e,{hash:{},data:t})
else{r=e&&e.description
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"'>\n        <h3>"
if(r=i.description)n=r.call(e,{hash:{},data:t})
else{r=e&&e.description
n=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=d(n)+"</h3>\n      </th>\n      "
return o}function f(e,t){var n,r,o,a=""
a+='\n      <td class="rating">\n        '
n=(r=i.n||e&&e.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:t},r?r.call(e,e&&e.points,o):u.call(e,"n",e&&e.points,o))
a+=d((r=i.t||e&&e.t,o={hash:{n_points_precision_2_strip_insig:n,i18n_inferred_key:true},data:t},r?r.call(e,"n_points_precision_2_strip_insig_points_60ad6f21","%{n_points_precision_2_strip_insig} Points",o):u.call(e,"t","n_points_precision_2_strip_insig_points_60ad6f21","%{n_points_precision_2_strip_insig} Points",o)))+"\n      </td>\n      "
return a}function h(e,t){var n,r,o=""
o+='\n  <label for="outcome_mastery_at">\n    '+d((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome"},data:t},n?n.call(e,"mastery_at_label","Set mastery for any score at or above:",r):u.call(e,"t","mastery_at_label","Set mastery for any score at or above:",r)))+'\n    <input type="text" name="mastery_at" id="outcome_mastery_at" value="60" />\n    %\n  </label>\n'
return o}function b(e,t){var n,r=""
r+="\n  "
n=i["if"].call(e,e&&e.useForScoring,{hash:{},inverse:l.program(14,y,t),fn:l.program(12,v,t),data:t});(n||0===n)&&(r+=n)
r+="\n"
return r}function v(e,t){var n,r,o=""
o+='\n    <label for="outcome_use_for_scoring">\n      <input type="checkbox" id="outcome_use_for_scoring" class="criterion_for_scoring" checked />\n      '+d((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome"},data:t},n?n.call(e,"use_for_scoring","Use this criterion for scoring",r):u.call(e,"t","use_for_scoring","Use this criterion for scoring",r)))+"\n    </label>\n  "
return o}function y(e,t){var n,r,o,a=""
a+="\n    <p>"
n=(r=i.n||e&&e.n,o={hash:{precision:2,strip_insignificant_zeros:true},data:t},r?r.call(e,e&&e.mastery_points,o):u.call(e,"n",e&&e.mastery_points,o))
a+=d((r=i.t||e&&e.t,o={hash:{n_mastery_points_precision_2_str:n,i18n_inferred_key:true},data:t},r?r.call(e,"mastery_n_mastery_points_precision_2_str_points_e0ed1b3b","Mastery: %{n_mastery_points_precision_2_str} Points",o):u.call(e,"t","mastery_n_mastery_points_precision_2_str_points_e0ed1b3b","Mastery: %{n_mastery_points_precision_2_str} Points",o)))+"</p>\n  "
return a}function k(e,t){var n,r,o=""
o+='\n  <div id="assessed_info_banner" class="alert alert-info outcome-assessed-info-banner">\n    <span>\n      '+d((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"this_outcome_has_been_used_to_assess_a_student_and_a3a48511","This outcome has been used to assess a student and some edits will affect student results.",r):u.call(e,"t","this_outcome_has_been_used_to_assess_a_student_and_a3a48511","This outcome has been used to assess a student and some edits will affect student results.",r)))+"\n    </span>\n  </div>\n"
return o}function w(e,t){var n,r,o,a=""
a+='\n  <div class="pull-right">\n    <button class="move_button ui-button ui-widget ui-state-default ui-corner-all">\n      <span aria-hidden="true">'+d((r=i.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"move_abf00365","Move",o):u.call(e,"t","move_abf00365","Move",o)))+'</span>\n      <span class="screenreader-only">'+d((r=i.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"move_outcome_ce497e6c","Move Outcome",o):u.call(e,"t","move_outcome_ce497e6c","Move Outcome",o)))+"</span>\n    </button>\n    "
n=i["if"].call(e,e&&e.can_edit,{hash:{},inverse:l.noop,fn:l.program(19,z,t),data:t});(n||0===n)&&(a+=n)
a+="\n    "
n=i["if"].call(e,e&&e.can_unlink,{hash:{},inverse:l.noop,fn:l.program(21,S,t),data:t});(n||0===n)&&(a+=n)
a+="\n  </div>\n"
return a}function z(e,t){var n,r,o=""
o+='\n      <button class="edit_button ui-button ui-widget ui-state-default ui-corner-all">\n        <span aria-hidden="true">'+d((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome"},data:t},n?n.call(e,"links.edit_outcome","Edit",r):u.call(e,"t","links.edit_outcome","Edit",r)))+'</span>\n        <span class="screenreader-only">'+d((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"edit_outcome_867a0381","Edit Outcome",r):u.call(e,"t","edit_outcome_867a0381","Edit Outcome",r)))+"</span>\n      </button>\n    "
return o}function S(e,t){var n,r,o,a=""
a+='\n      <button class="delete_button ui-button ui-widget ui-state-default ui-corner-all"\n        '
n=i["if"].call(e,e&&e.assessedInContext,{hash:{},inverse:l.noop,fn:l.program(22,j,t),data:t});(n||0===n)&&(a+=n)
a+='>\n        <span aria-hidden="true">'+d((r=i.t||e&&e.t,o={hash:{scope:"outcomes.outcome"},data:t},r?r.call(e,"links.delete_outcome","Delete",o):u.call(e,"t","links.delete_outcome","Delete",o)))+'</span>\n        <span class="screenreader-only">'+d((r=i.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"delete_outcome_cc6546f1","Delete Outcome",o):u.call(e,"t","delete_outcome_cc6546f1","Delete Outcome",o)))+"</span>\n      </button>\n    "
return a}function j(e,t){return" disabled "}c+='<h2 class="screenreader-outcome-title screenreader-only" tabindex="0">\n  '
if(a=i.title)o=a.call(t,{hash:{},data:r})
else{a=t&&t.title
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'\n</h2>\n<h2 class="title" role="presentation">\n  <i class="icon-outcomes" aria-hidden="true"></i>\n  '
o=i.unless.call(t,t&&t.isLargeRoster,{hash:{},inverse:l.program(3,m,r),fn:l.program(1,p,r),data:r});(o||0===o)&&(c+=o)
c+='\n</h2>\n<div class="description">\n  '
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===_?a.call(t,{hash:{},data:r}):a}(o||0===o)&&(c+=o)
c+='\n</div>\n<table class="criterion">\n  <thead>\n    <tr>\n      '
o=i.each.call(t,t&&t.ratings,{hash:{},inverse:l.noop,fn:l.program(5,g,r),data:r});(o||0===o)&&(c+=o)
c+='\n      <th class="total" aria-label=\''+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"total_points_44d76792","Total Points",s):u.call(t,"t","total_points_44d76792","Total Points",s)))+'\'>\n        <h3 class="total">'+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"total_points_44d76792","Total Points",s):u.call(t,"t","total_points_44d76792","Total Points",s)))+"</h3>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      "
o=i.each.call(t,t&&t.ratings,{hash:{},inverse:l.noop,fn:l.program(7,f,r),data:r});(o||0===o)&&(c+=o)
c+='\n      <td class="total">\n        '
o=(a=i.n||t&&t.n,s={hash:{precision:2,strip_insignificant_zeros:true},data:r},a?a.call(t,t&&t.points_possible,s):u.call(t,"n",t&&t.points_possible,s))
c+=d((a=i.t||t&&t.t,s={hash:{n_points_possible_precision_2_st:o,i18n_inferred_key:true},data:r},a?a.call(t,"n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",s):u.call(t,"t","n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",s)))+"\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n"
o=i["if"].call(t,t&&t.setQuizMastery,{hash:{},inverse:l.program(11,b,r),fn:l.program(9,h,r),data:r});(o||0===o)&&(c+=o)
c+='\n\n<div id="calculation_method" data-calculation-method="'
if(a=i.calculation_method)o=a.call(t,{hash:{},data:r})
else{a=t&&t.calculation_method
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'">\n  '+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"calculation_method_fe281f9","Calculation Method",s):u.call(t,"t","calculation_method_fe281f9","Calculation Method",s)))+": "
if(a=i.friendlyCalculationMethod)o=a.call(t,{hash:{},data:r})
else{a=t&&t.friendlyCalculationMethod
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'\n</div>\n\n<div class="content-box">\n  <div class="grid-row">\n    \x3c!-- Hook for OutcomeCalculationMethodFormView --\x3e\n    <div class="col-xs-12 outcome-calculation-method-form"></div>\n  </div>\n</div>\n\n'
o=i["if"].call(t,t&&t.assessedInContext,{hash:{},inverse:l.noop,fn:l.program(16,k,r),data:r});(o||0===o)&&(c+=o)
c+="\n\n"
o=i["if"].call(t,t&&t.can_manage,{hash:{},inverse:l.noop,fn:l.program(18,w,r),data:r});(o||0===o)&&(c+=o)
c+="\n"
return c}))
var P=N[M]
Object(s["a"])(JSON.parse('{"ar":{"outcomes":{"criterion_header":{"insert_criterion_rating":"إدخال تصنيف المعيار","insert_rating":"إدخال"}}},"cy":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Mewnosod sgôr maen prawf","insert_rating":"Mewnosod"}}},"da":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Indfør kriteriebedømmelse","insert_rating":"Indsæt"}}},"da-x-k12":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Indfør kriteriebedømmelse","insert_rating":"Indsæt"}}},"de":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Kriterienbewertung einfügen","insert_rating":"Einfügen"}}},"el":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Εισαγωγή αξιολόγησης κριτηρίου","insert_rating":"Εισαγωγή"}}},"en-AU":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insert criterion rating","insert_rating":"Insert"}}},"en-AU-x-unimelb":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insert criterion rating","insert_rating":"Insert"}}},"en-CA":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insert criterion rating","insert_rating":"Insert"}}},"en-GB":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insert criterion rating","insert_rating":"Insert"}}},"en-GB-x-ukhe":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insert criterion rating","insert_rating":"Insert"}}},"es":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insertar evaluación de criterios","insert_rating":"Insertar"}}},"fa":{"outcomes":{"criterion_header":{"insert_criterion_rating":"درج رتبه بندی معیار","insert_rating":"درج"}}},"fi":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Lisää kriteerien luokitus","insert_rating":"Aseta"}}},"fr":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insérer la notation du critère","insert_rating":"Insérer"}}},"fr-CA":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Insérer la notation du critère","insert_rating":"Insérer"}}},"he":{"outcomes":{"criterion_header":{"insert_criterion_rating":"הוספת קריטריון דרוג","insert_rating":"הוספה"}}},"ht":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Ensere kritè notasyon","insert_rating":"Ensere"}}},"hu":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Kritériumértékelés beszúrása","insert_rating":"Beszúrás"}}},"hy":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Տեղադրել չափանիշի գնահատականը","insert_rating":"Տեղադրել"}}},"is":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Setja inn viðmiðunarmat","insert_rating":"Setja inn"}}},"it":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Inserisci valutazione basata su criterio","insert_rating":"Inserisci"}}},"ja":{"outcomes":{"criterion_header":{"insert_criterion_rating":"基準の評価を挿入する","insert_rating":"挿入"}}},"ko":{"outcomes":{"criterion_header":{"insert_criterion_rating":"기준 등급 삽입","insert_rating":"삽입"}}},"mi":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Whakauru whakatauranga paearu","insert_rating":"Whakauru"}}},"nb":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Sett inn kriterievurdering","insert_rating":"Sett inn"}}},"nb-x-k12":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Sett inn kriterievurdering","insert_rating":"Sett inn"}}},"nl":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Standaard beoordeling invoegen","insert_rating":"Invoegen"}}},"nn":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Set inn kriterievurdering","insert_rating":"Set inn"}}},"pl":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Wstaw klasyfikację dla kryterium","insert_rating":"Wstaw"}}},"pt":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Inserir classificação de critério","insert_rating":"Inserir"}}},"pt-BR":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Inserir avaliação de critério","insert_rating":"Inserir"}}},"ru":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Вставить рейтинг критерия","insert_rating":"Вставить"}}},"sv":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Sätt in värderingskriterium","insert_rating":"Sätt in"}}},"tr":{"outcomes":{"criterion_header":{"insert_criterion_rating":"Kriter oranı ekle","insert_rating":"Ekle"}}},"zh-Hans":{"outcomes":{"criterion_header":{"insert_criterion_rating":"插入标准等级","insert_rating":"插入"}}},"zh-Hant":{"outcomes":{"criterion_header":{"insert_criterion_rating":"插入標準評級","insert_rating":"插入"}}}}'))
a["default"].scoped("outcomes.criterion_header")
var q=z.a.default
var B=q.template,T=q.templates=q.templates||{}
var I="outcomes/-criterionHeader"
T[I]=B((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c="",_="function",d=this.escapeExpression,u=i.helperMissing
c+='<th class="rating-header" aria-label=\''
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+"'>\n  <div class='rating-wrap'>\n    <h5>"
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'</h5>\n    <div class="insert">\n      <a href="#" class="insert_rating" title="'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion_header"},data:r},a?a.call(t,"insert_criterion_rating","Insert criterion rating",s):u.call(t,"t","insert_criterion_rating","Insert criterion rating",s)))+'" tabindex=0 role=button aria-label="'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion_header"},data:r},a?a.call(t,"insert_criterion_rating","Insert criterion rating",s):u.call(t,"t","insert_criterion_rating","Insert criterion rating",s)))+'">\n        '+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion_header"},data:r},a?a.call(t,"insert_rating","Insert",s):u.call(t,"t","insert_rating","Insert",s)))+'\n        <span class="arrow-icon"></span>\n      </a>\n    </div>\n  </div>\n</th>\n'
return c}))
q.registerPartial("outcomes/criterionHeader",T["outcomes/-criterionHeader"])
var L=T[I]
Object(s["a"])(JSON.parse('{"ar":{"outcomes":{"criterion":{"close_rating":"موافق","criterion_rating_points":"نقاط تصنيف المعيار","delete_criterion":"حذف","edit_criterion_rating_title":"تحرير تصنيف المعيار \\"%{description}\\"","points":"النقاط","pts":"نقاط","rating_description":"وصف تصنيف المعيار"}}},"cy":{"outcomes":{"criterion":{"close_rating":"Iawn","criterion_rating_points":"Pwyntiau sgôr maen prawf","delete_criterion":"Dileu","edit_criterion_rating_title":"Golygu sgôr maen prawf “%{description}","points":"Pwynt","pts":"pwynt","rating_description":"Disgrifiad sgôr maen prawf"}}},"da":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Point til kriteriebedømmelse","delete_criterion":"Slet","edit_criterion_rating_title":"Rediger \\"%{description}\\" kriteriebedømmelse","points":"Point","pts":"point","rating_description":"Beskrivelse af kriteriebedømmelse"}}},"da-x-k12":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Point til kriteriebedømmelse","delete_criterion":"Slet","edit_criterion_rating_title":"Rediger \\"%{description}\\" kriteriebedømmelse","points":"Point","pts":"point","rating_description":"Beskrivelse af kriteriebedømmelse"}}},"de":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Kriterienbewertungspunkte","delete_criterion":"Löschen","edit_criterion_rating_title":"„%{description}“ der Kriterieneinstufung ändern","points":"Punkte","pts":"Pkte.","rating_description":"Beschreibung der Kriterienbewertung"}}},"el":{"outcomes":{"criterion":{"close_rating":"οκ","criterion_rating_points":"Πόντοι αξιολόγησης κριτηρίου","delete_criterion":"Διαγραφή","edit_criterion_rating_title":"Επεξεργασία της «αξιολόγησης του κριτηρίου %{description}","points":"Μόρια","pts":"pts","rating_description":"Περιγραφή αξιολόγησης κριτηρίου"}}},"en-AU":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description}\\" criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"en-AU-x-unimelb":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description}\\" criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"en-CA":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description}\\" criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"en-GB":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description}\\" criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"en-GB-x-lbs":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description} criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"en-GB-x-ukhe":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Criterion rating points","delete_criterion":"Delete","edit_criterion_rating_title":"Edit \\"%{description}\\" criterion rating","points":"Points","pts":"pts","rating_description":"Criterion rating description"}}},"es":{"outcomes":{"criterion":{"close_rating":"Aceptar","criterion_rating_points":"Puntos de evaluación de criterios","delete_criterion":"Eliminar","edit_criterion_rating_title":"Editar la valoración del criterio «%{description}»","points":"Puntos","pts":"pts","rating_description":"Descripción de la evaluación de criterios"}}},"fa":{"outcomes":{"criterion":{"close_rating":"تأیید","criterion_rating_points":"امتیازهای رتبه بندی معیار","delete_criterion":"حذف","edit_criterion_rating_title":"ویرایش رتبه بندی معیار \\"%{description}","points":"امتیازها","pts":"امتیازها","rating_description":"شرح رتبه بندی معیار"}}},"fi":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Kriteerien luokituksen pisteet","delete_criterion":"Poista","edit_criterion_rating_title":"Muokkaa \\"%{description} kriteerien luokitusta","points":"Pistettä","pts":"pistettä","rating_description":"Kriteerien luokituksen kuvaus"}}},"fr":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Points pour le critère","delete_criterion":"Supprimer","edit_criterion_rating_title":"Modifier la notation du critère \\"%{description}\\"","points":"Points","pts":"points","rating_description":"Description de la notation du critère"}}},"fr-CA":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Points pour le critère","delete_criterion":"Supprimer","edit_criterion_rating_title":"Modifier la notation du critère « %{description} »","points":"Points","pts":"points","rating_description":"Description de la notation du critère"}}},"he":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"דירוג נקודות לקריטריון","delete_criterion":"ביטול","edit_criterion_rating_title":"עריכת \\"%{description} של קריטריון דרוג","points":"נקודות","pts":"נק\'","rating_description":"תיאור קריטריון דרוג"}}},"ht":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Kritè notasyon pwen","delete_criterion":"Efase","edit_criterion_rating_title":"Chanje \\"%{description}\\" evalyasyon kritè","points":"Pwen","pts":"pts","rating_description":"Deskripsyon kritè notasyon"}}},"hu":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Kritériumértékelési pontok","delete_criterion":"Törlés","edit_criterion_rating_title":"\\"%{description}\\" kritériumértékelés szerkesztése","points":"Pont","pts":"pont","rating_description":"Kritériumértékelés leírása"}}},"hy":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Չափանիշի գնահատման միավորներ","delete_criterion":"Ջնջել","edit_criterion_rating_title":"Խմբագրել  \\"%{description}\\" չափանիշի գնահատականը ","points":"Միավորներ","pts":"միավորներ","rating_description":"Չափանիշի գնահատականի նկարագրությունը"}}},"is":{"outcomes":{"criterion":{"close_rating":"Í lagi","criterion_rating_points":"Punktar viðmiðunarmats","delete_criterion":"Eyða","edit_criterion_rating_title":"Breyta \\"%{description}\\" mati á viðmiðum","points":"Punktar","pts":"Punktar","rating_description":"Lýsing á viðmiðunarmati"}}},"it":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Punti valutazione basata su criterio","delete_criterion":"Elimina","edit_criterion_rating_title":"Modifica valutazione basata su criterio “%{description}”","points":"Punti","pts":"pt","rating_description":"Descrizione valutazione basata su criterio"}}},"ja":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"基準の評価ポイント","delete_criterion":"削除","edit_criterion_rating_title":"%{description}クライテリア評価を編集","points":"点数","pts":"点","rating_description":"基準の評価 の説明"}}},"ko":{"outcomes":{"criterion":{"close_rating":"확인","criterion_rating_points":"기준 등급 점수","delete_criterion":"삭제","edit_criterion_rating_title":"\\"%{description}\\" 기준 등급 편집","points":"점수","pts":"점","rating_description":"기준 등급 설명"}}},"mi":{"outcomes":{"criterion":{"close_rating":"Ae","criterion_rating_points":"Ngā whakatauranga paearu","delete_criterion":"Muku","edit_criterion_rating_title":"Whak \\"%{description}\\" tohu whakatauranga","points":"Ngā koinga","pts":"pts","rating_description":"whakāhuatanga whakatauranga paearu"}}},"nb":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Poeng for kriterievurdering","delete_criterion":"Slett","edit_criterion_rating_title":"Rediger kriterievurdering «%{description}»","points":"Poeng","pts":"poeng","rating_description":"Beskrivelse av kriterievurdering"}}},"nb-x-k12":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Poeng for kriterievurdering","delete_criterion":"Slett","edit_criterion_rating_title":"Rediger kriterievurdering «%{description}»","points":"Poeng","pts":"poeng","rating_description":"Beskrivelse av kriterievurdering"}}},"nl":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Standaard beoordelingspunten","delete_criterion":"Verwijderen","edit_criterion_rating_title":"Bewerk \\"%{description}\\" standaardbeoordeling","points":"Punten","pts":"punten","rating_description":"Beschrijving standaard beoordeling"}}},"nn":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Poeng for kriterievurdering","delete_criterion":"Slett","edit_criterion_rating_title":"Rediger \\"%{description}\\" kriterievurdering","points":"Poeng","pts":"poeng","rating_description":"Skildring av kriterievurdering"}}},"pl":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Punktacja dla danego kryterium","delete_criterion":"Usuń","edit_criterion_rating_title":"Edytuj punktację dla danego kryterium %{description}","points":"Punkty","pts":"pkt","rating_description":"Opis klasyfikacji kryterium"}}},"pt":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Pontos de classificação de critério","delete_criterion":"Excluir","edit_criterion_rating_title":"Editar \\"%{description}\\" classificação de critério","points":"Pontos","pts":"pts","rating_description":"Descrição de classificação de critério"}}},"pt-BR":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Pontos de avaliação de critério","delete_criterion":"Excluir","edit_criterion_rating_title":"Editar avaliação do critério “%{description}”","points":"Pontos","pts":"pts","rating_description":"Descrição de avaliação de critério"}}},"ru":{"outcomes":{"criterion":{"close_rating":"OK","criterion_rating_points":"Баллы рейтинга критерия","delete_criterion":"Удалить","edit_criterion_rating_title":"Редактировать рейтинг критерия оценки «%{description}»","points":"Баллы","pts":"баллы","rating_description":"Описание рейтинга критерия"}}},"sl":{"outcomes":{"criterion":{"close_rating":"V redu","criterion_rating_points":"Točke rezultata po merilu","delete_criterion":"Odstrani","edit_criterion_rating_title":"Uredi rezultat po merilu »%{description}«","points":"Točke","pts":"točk","rating_description":"Opis rezultata po merilu"}}},"sv":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Värderingskriteriums-poäng","delete_criterion":"Radera","edit_criterion_rating_title":"Redigera  \\"%{description}\\" kriteriumbedömning","points":"Poäng","pts":"poäng","rating_description":"Beskrivning av värderingskriterium"}}},"sv-x-k12":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Värderingskriteriums-poäng","delete_criterion":"Radera","edit_criterion_rating_title":"Redigera \\"%{description} värderingskriterium","points":"Poäng","pts":"poäng","rating_description":"Beskrivning av värderingskriterium"}}},"tr":{"outcomes":{"criterion":{"close_rating":"Tamam","criterion_rating_points":"Kriter puanınız","delete_criterion":"Sil","edit_criterion_rating_title":"\\"%{description} kriter oranını düzenle","points":"Puanlar","pts":"not","rating_description":"Kriter oranı açıklaması"}}},"uk":{"outcomes":{"criterion":{"close_rating":"Ok","criterion_rating_points":"Бали рейтингового критерію","delete_criterion":"Видалити","edit_criterion_rating_title":"Редагувати \\"%{description} критерій рейтингу","points":"Бали","pts":"бали","rating_description":"Опис критерію рейтингу"}}},"zh-Hans":{"outcomes":{"criterion":{"close_rating":"确定","criterion_rating_points":"标准等级得分","delete_criterion":"删除","edit_criterion_rating_title":"编辑“%{description}”标准评级","points":"得分","pts":"得分","rating_description":"标准等级说明"}}},"zh-Hant":{"outcomes":{"criterion":{"close_rating":"確定","criterion_rating_points":"標準評級分數","delete_criterion":"刪除","edit_criterion_rating_title":"編輯「%{description}」標準評級","points":"分數","pts":"分數","rating_description":"標準評級說明"}}}}'))
a["default"].scoped("outcomes.criterion")
var R=z.a.default
var G=R.template,F=R.templates=R.templates||{}
var U="outcomes/-criterion"
F[U]=G((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c="",_=i.helperMissing,d=this.escapeExpression,u="function"
c+='<td class="rating">\n  <div class="rating-wrap">\n    <div class="show" aria-expanded="true">\n      <span class="points">'+d((a=i.n||t&&t.n,s={hash:{precision:2,strip_insignificant_zeros:true},data:r},a?a.call(t,t&&t.points,s):_.call(t,"n",t&&t.points,s)))+"</span> "+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"points","Points",s):_.call(t,"t","points","Points",s)))+'\n      <a\n        href="#"\n        class="edit_rating active"\n        title=\''+d((a=i.t||t&&t.t,s={hash:{description:t&&t.description,scope:"outcomes.criterion"},data:r},a?a.call(t,"edit_criterion_rating_title",'Edit "%{description}" criterion rating',s):_.call(t,"t","edit_criterion_rating_title",'Edit "%{description}" criterion rating',s)))+"'\n        aria-label='"+d((a=i.t||t&&t.t,s={hash:{description:t&&t.description,scope:"outcomes.criterion"},data:r},a?a.call(t,"edit_criterion_rating_title",'Edit "%{description}" criterion rating',s):_.call(t,"t","edit_criterion_rating_title",'Edit "%{description}" criterion rating',s)))+"'\n        role=button\n        tabindex=0\n        aria-controls=\"edit_rating_"
if(a=i._index)o=a.call(t,{hash:{},data:r})
else{a=t&&t._index
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'"><i class="icon-edit"></i></a>\n    </div>\n    <div\n      class="edit"\n      id="edit_rating_'
if(a=i._index)o=a.call(t,{hash:{},data:r})
else{a=t&&t._index
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'"\n      role=region\n      aria-expanded="false"\n      tabindex=-1\n    >\n      <div class="row-fluid" class="outcomes-edit-row">\n        <div class="span7">\n          <input type="text" name="ratings['
if(a=i._index)o=a.call(t,{hash:{},data:r})
else{a=t&&t._index
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'][description]" class="outcome_rating_description" value="'
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'" aria-label="'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"rating_description","Criterion rating description",s):_.call(t,"t","rating_description","Criterion rating description",s)))+'">\n        </div>\n        <div class="span4 offset1">\n          <input type="text" name="ratings['
if(a=i._index)o=a.call(t,{hash:{},data:r})
else{a=t&&t._index
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'][points]" style="width: 20px;" class="outcome_rating_points" value="'+d((a=i.n||t&&t.n,s={hash:{precision:2,strip_insignificant_zeros:true},data:r},a?a.call(t,t&&t.points,s):_.call(t,"n",t&&t.points,s)))+'" aria-label="'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"criterion_rating_points","Criterion rating points",s):_.call(t,"t","criterion_rating_points","Criterion rating points",s)))+'"> <span class="outcomes-points-label">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"pts","pts",s):_.call(t,"t","pts","pts",s)))+'</span>\n        </div>\n      </div>\n\n      <div class="buttons row-fluid">\n        <div class="span12">\n          <div class="button-container">\n            <button\n              class="btn btn-small delete_rating_link"\n              type="button"\n            >'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"delete_criterion","Delete",s):_.call(t,"t","delete_criterion","Delete",s)))+'</button>\n            <button\n              class="btn btn-small btn-primary save_rating_link"\n              aria-controls="edit_rating_'
if(a=i._index)o=a.call(t,{hash:{},data:r})
else{a=t&&t._index
o=typeof a===u?a.call(t,{hash:{},data:r}):a}c+=d(o)+'"\n              type="button"\n            >'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.criterion"},data:r},a?a.call(t,"close_rating","Ok",s):_.call(t,"t","close_rating","Ok",s)))+"</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</td>\n"
return c}))
R.registerPartial("outcomes/criterion",F["outcomes/-criterion"])
var V=F[U]
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","save":"حفظ"},"html_editor_fb2ab713":"محرر HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} النقاط","new_outcome_7fba8c7d":"نتيجة جديدة","outcomes":{"outcome_form":{"calculation_method":"طريقة الحساب","criterion":"تصنيفات المعيار","description":"وصف هذه النتيجة","display_name":"الاسم المألوف (اختياري)","mastery":"الإتقان عند","title":"تسمية هذه النتيجة"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"إجمالي النقاط"},"cy":{"buttons":{"cancel":"Canslo","save":"Cadw"},"html_editor_fb2ab713":"Golygydd HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pwynt","new_outcome_7fba8c7d":"Deilliant Newydd","outcomes":{"outcome_form":{"calculation_method":"Dull Cyfrifo","criterion":"Sgoriau maen prawf","description":"Disgrifiwch y deilliant hwn","display_name":"Enw cyfeillgar (opsiynol)","mastery":"Meistrolaeth yn","title":"Enw’r deilliant hwn"}},"rich_content_editor_2708ef21":"Golygydd Cynnwys Cyfoethog","total_points_44d76792":"Cyfanswm Pwyntiau"},"da":{"buttons":{"cancel":"Annuller","save":"Gem"},"html_editor_fb2ab713":"HTML-editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"Nyt læringsudbytte","outcomes":{"outcome_form":{"calculation_method":"Beregningsmetode","criterion":"Kriteriebedømmelse","description":"Beskriv dette læringsudbytte","display_name":"Venligt navn (valgfrit)","mastery":"Opfyldelse af læringsmål ved","title":"Navngiv dette læringsudbytte"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Samlede point"},"da-x-k12":{"buttons":{"cancel":"Annuller","save":"Gem"},"html_editor_fb2ab713":"HTML-editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"Nyt læringsudbytte","outcomes":{"outcome_form":{"calculation_method":"Beregningsmetode","criterion":"Kriteriebedømmelse","description":"Beskriv dette læringsudbytte","display_name":"Venligt navn (valgfrit)","mastery":"Opfyldelse af læringsmål ved","title":"Navngiv dette læringsudbytte"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Samlede point"},"de":{"buttons":{"cancel":"Abbrechen","save":"Speichern"},"html_editor_fb2ab713":"HTML-Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkte","new_outcome_7fba8c7d":"Neues Lernziel","outcomes":{"outcome_form":{"calculation_method":"Berechnungsmethode","criterion":"Kriterienbewertungen","description":"Dieses Lernziel beschreiben","display_name":"Anzeigename (optional)","mastery":"Leistungsziel erreicht bei","title":"Dieses Lernziel benennen"}},"rich_content_editor_2708ef21":"Rich-Content-Editor","total_points_44d76792":"Gesamtpunkte"},"el":{"buttons":{"cancel":"Ακύρωση","save":"Αποθήκευση"},"html_editor_fb2ab713":"Επεξεργαστής HTML","new_outcome_7fba8c7d":"Νέο Αποτέλεσμα","outcomes":{"outcome_form":{"calculation_method":"Μέθοδος Υπολογισμού","criterion":"Κατάταξη βάσει κριτηρίων","description":"Περιγραφή αυτού του αποτελέσματος","display_name":"Φιλικό όνομα (προαιρετικό)","mastery":"Επιδεξιότητα σε","title":"Όνομα αποτελέσματος"}},"rich_content_editor_2708ef21":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content","total_points_44d76792":"Συνολικοί Πόντοι"},"en-AU":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New Outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation Method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Total Points"},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New Outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation Method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Total Points"},"en-CA":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New Outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation Method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Total Points"},"en-GB":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Total points"},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","save":"Save"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"New outcome","outcomes":{"outcome_form":{"calculation_method":"Calculation method","criterion":"Criterion ratings","description":"Describe this outcome","display_name":"Friendly name (optional)","mastery":"Mastery at","title":"Name this outcome"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Total points"},"es":{"buttons":{"cancel":"Cancelar","save":"Guardar"},"html_editor_fb2ab713":"Editor HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Puntos","new_outcome_7fba8c7d":"Nueva competencia","outcomes":{"outcome_form":{"calculation_method":"Método de cálculo","criterion":"Clasificaciones del criterio","description":"Describa esta competencia","display_name":"Nombre descriptivo (optativo)","mastery":"Dominio en","title":"Nombre esta competencia"}},"rich_content_editor_2708ef21":"Editor de contenido enriquecido","total_points_44d76792":"Puntos totales"},"fa":{"buttons":{"cancel":"لغو","save":"ذخیره سازی"},"html_editor_fb2ab713":"ویرایشگر HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} امتیاز","new_outcome_7fba8c7d":"نتیجه جدید","outcomes":{"outcome_form":{"calculation_method":"روش محاسبه","criterion":"رتبه بندی های معیار","description":"این نتیجه را شرح دهید","display_name":"نام دوستانه (انتخابی)","mastery":"تسلط در","title":"این نتیجه را نام گذاری کنید"}},"rich_content_editor_2708ef21":"ویرایشگر محتوای غنی","total_points_44d76792":"امتیازهای کل"},"fi":{"buttons":{"cancel":"Peruuta","save":"Tallenna"},"html_editor_fb2ab713":"HTML-muokkausohjelma","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pistettä","new_outcome_7fba8c7d":"Uusi tulos","outcomes":{"outcome_form":{"calculation_method":"Laskentatapa","criterion":"Kriteerien luokitus","description":"Kuvaa tämä tulos","display_name":"Ystävällinen nimi (valinnainen)","mastery":"Hallinta","title":"Nimi tälle tulokselle"}},"rich_content_editor_2708ef21":"Rikas sisältöeditori","total_points_44d76792":"Pisteitä yhteensä"},"fr":{"buttons":{"cancel":"Annuler","save":"Enregistrer"},"html_editor_fb2ab713":"Éditeur HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"Nouvel acquis","outcomes":{"outcome_form":{"calculation_method":"Méthode de calcul","criterion":"Notes du critère","description":"Décrire cet acquis","display_name":"Pseudonyme (facultatif)","mastery":"Progression à","title":"Attribuer un nom à cet acquis"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi","total_points_44d76792":"Total de points"},"fr-CA":{"buttons":{"cancel":"Annuler","save":"Enregistrer"},"html_editor_fb2ab713":"Éditeur HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Points","new_outcome_7fba8c7d":"Nouveau résultat","outcomes":{"outcome_form":{"calculation_method":"Méthode de calcul","criterion":"Notes du critère","description":"Décrire ce résultat","display_name":"Pseudonyme (facultatif)","mastery":"Progression à","title":"Attribuer un nom à ce résultat"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi","total_points_44d76792":"Total de points"},"he":{"buttons":{"cancel":"ביטול","save":"שמירה"},"html_editor_fb2ab713":"עורך HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} נקודות","new_outcome_7fba8c7d":"תוצאת למידה חדשה","outcomes":{"outcome_form":{"calculation_method":"שיטת חישוב","criterion":"דירוג קריטריון","description":"תיאור תוצאת למידה זו","display_name":"שם ידידותי (אופציונלי)","mastery":"התמחות ב","title":"מתן שם לתוצאת למידה זו"}},"rich_content_editor_2708ef21":"עורך תוכן עשיר","total_points_44d76792":"סך ניקוד "},"ht":{"buttons":{"cancel":"Anile","save":"Anrejistre"},"html_editor_fb2ab713":"Editè HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pwen","new_outcome_7fba8c7d":"Nouvo Rezilta","outcomes":{"outcome_form":{"calculation_method":"Metòd Kalkil","criterion":"Kritè evalyasyon","description":"Dekri rezilta sa a","display_name":"Non amikal (si w vle)","mastery":"Metrize a","title":"Bay rezilta sa a non"}},"rich_content_editor_2708ef21":"Editè Kontni Rich","total_points_44d76792":"Total Pwen"},"hu":{"buttons":{"cancel":"Mégse","save":"Mentés"},"html_editor_fb2ab713":"HTML szerkesztő","new_outcome_7fba8c7d":"Új tanulási eredmény","outcomes":{"outcome_form":{"calculation_method":"Számítási módszer","criterion":"Kritériumértékelések","description":"A tanulási eredmény leírása","display_name":"Becenév (opcionális)","mastery":"Elfogadási szint:","title":"A tanulási eredmény neve"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő","total_points_44d76792":"Összpontszám"},"hy":{"buttons":{"cancel":"Չեղյալ համարել","save":"Պահպանել"},"html_editor_fb2ab713":"HTML խմբագիր","new_outcome_7fba8c7d":"Նոր արդյունք","outcomes":{"outcome_form":{"calculation_method":"Հաշվարկման մեթոդ","criterion":"Չափանիշի գնահատականներ","description":"Նկարագրել այս արդյունքը","display_name":"Ընկերական անուն (ոչ պարտադիր)","mastery":"Յուրացվել է՝ ","title":"Նշել այս արդյունքը"}},"rich_content_editor_2708ef21":"Ֆորմատավորված տեքստի խմբագիր","total_points_44d76792":"Ընդհանուր միավորների քանակը"},"is":{"buttons":{"cancel":"Hætta við","save":"Vista"},"html_editor_fb2ab713":"HTML ritill","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} punktar","new_outcome_7fba8c7d":"Ný niðurstaða","outcomes":{"outcome_form":{"calculation_method":"Reikningsaðferð","criterion":"Viðmiðunarmat","description":"Lýstu þessum niðurstöðum","display_name":"Vinarheiti (valkvætt)","mastery":"Tileinkun í","title":"Nefna þessa niðurstöðu"}},"rich_content_editor_2708ef21":"Rich Content ritill","total_points_44d76792":"Heildarpunktar"},"it":{"buttons":{"cancel":"Annulla","save":"Salva"},"html_editor_fb2ab713":"Editor HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punti","new_outcome_7fba8c7d":"Nuovo esito","outcomes":{"outcome_form":{"calculation_method":"Metodo di calcolo","criterion":"Valutazioni basate su criterio","description":"Descrivi questo esito","display_name":"Nome descrittivo (facoltativo)","mastery":"Livello di padronanza su","title":"Assegna un nome a questo esito"}},"rich_content_editor_2708ef21":"Editor di contenuti avanzati","total_points_44d76792":"Punti totali"},"ja":{"buttons":{"cancel":"キャンセル","save":"保存"},"html_editor_fb2ab713":"HTML エディタ","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} ポイント","new_outcome_7fba8c7d":"新しい成果","outcomes":{"outcome_form":{"calculation_method":"計算メソッド","criterion":"基準の評価","description":"この成果を説明する","display_name":"わかりやすい名前 (任意)","mastery":"熟達日時","title":"この成果の名前を指定"}},"rich_content_editor_2708ef21":"リッチ コンテンツ エディタ","total_points_44d76792":"合計点"},"ko":{"buttons":{"cancel":"취소","save":"저장"},"new_outcome_7fba8c7d":"새 성과","outcomes":{"outcome_form":{"criterion":"기준 등급","description":"이 성과의 설명","mastery":"숙달 점수","title":"성과 이름"}},"total_points_44d76792":"총점"},"mi":{"buttons":{"cancel":"Whakakore","save":"Tiaki"},"html_editor_fb2ab713":"Editor HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st}koinga","new_outcome_7fba8c7d":"Putanga Hou","outcomes":{"outcome_form":{"calculation_method":"Tikanga Tatauranga","criterion":"ngā whakatauranga paearu","description":"Te whakāhua i tēnei putanga","display_name":"Ingoa Hoahoa(kōwhiringa)","mastery":"Mātatau i","title":"Whakaingoatia tēnei putanga"}},"rich_content_editor_2708ef21":"Ētita Ihirangi Whai Rawa","total_points_44d76792":"Ngā Koinga katoa"},"nb":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"html_editor_fb2ab713":"HTML-redigering","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poeng","new_outcome_7fba8c7d":"Nytt læringsmål","outcomes":{"outcome_form":{"calculation_method":"Beregningsmetode","criterion":"Kriterievurderinger","description":"Beskriv dette læringsmålet","display_name":"Kallenavn (valgfritt)","mastery":"Ekspertise ved","title":"Gi navn til dette læringsmålet"}},"rich_content_editor_2708ef21":"Rich innholdsredigering","total_points_44d76792":"Totalt antall poeng"},"nb-x-k12":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"html_editor_fb2ab713":"HTML-redigering","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poeng","new_outcome_7fba8c7d":"Nytt mål","outcomes":{"outcome_form":{"calculation_method":"Beregningsmetode","criterion":"Kriterievurderinger","description":"Beskriv dette målet","display_name":"Kallenavn (valgfritt)","mastery":"Ekspertise ved","title":"Gi navn til dette målet"}},"rich_content_editor_2708ef21":"Rich innholdsredigering","total_points_44d76792":"Totalt antall poeng"},"nl":{"buttons":{"cancel":"Annuleren","save":"Opslaan"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punten","new_outcome_7fba8c7d":"Nieuw leerdoel","outcomes":{"outcome_form":{"calculation_method":"Berekeningsmethode","criterion":"Standaard voor beoordelingen","description":"Dit leerdoel beschrijven","display_name":"Gebruiksvriendelijke naam (optioneel)","mastery":"Meesterschap bij","title":"Dit leerdoel een naam geven"}},"rich_content_editor_2708ef21":"Rich Content Editor","total_points_44d76792":"Totaal aantal punten"},"nn":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"html_editor_fb2ab713":"HTML-redigeringsprogram","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} poeng","new_outcome_7fba8c7d":"Nytt læringsmål","outcomes":{"outcome_form":{"calculation_method":"Utrekningsmetode","criterion":"Kriterievurderingar","description":"Skildre læringsmålet","display_name":"Kortnamn (valfritt)","mastery":"Meistringsnivå på","title":"Set namn på læringsmålet"}},"rich_content_editor_2708ef21":"Redigeringsprogram for rikt innhald","total_points_44d76792":"Totalpoeng"},"pl":{"buttons":{"cancel":"Anuluj","save":"Zapisz"},"html_editor_fb2ab713":"Edytor HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Punkty","new_outcome_7fba8c7d":"Nowy wynik","outcomes":{"outcome_form":{"calculation_method":"Metoda obliczenia","criterion":"Punktacja dla danego kryterium","description":"Opisz ten wynik","display_name":"Łatwa do zapamiętania nazwa (opcjonalnie)","mastery":"Biegłość wynosi","title":"Nazwij ten wynik"}},"rich_content_editor_2708ef21":"Edytor wzbogaconej zawartości","total_points_44d76792":"Łączna liczba punktów"},"pt":{"buttons":{"cancel":"Cancelar","save":"Guardar"},"html_editor_fb2ab713":"Editor HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Pontos","new_outcome_7fba8c7d":"Novo resultado","outcomes":{"outcome_form":{"calculation_method":"Método de cálculo","criterion":"Classificações do critério","description":"Descrever este resultado","display_name":"Nome amigável (opcional)","mastery":"Domínio a","title":"Dar nome a este resultado"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado","total_points_44d76792":"Total de pontos"},"pt-BR":{"buttons":{"cancel":"Cancelar","save":"Salvar"},"html_editor_fb2ab713":"Editor de HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} pontos","new_outcome_7fba8c7d":"Novo objetivo","outcomes":{"outcome_form":{"calculation_method":"Método de cálculo","criterion":"Avaliações do critério","description":"Descrever este objetivo","display_name":"Nome amigável (opcional)","mastery":"Domínio em","title":"Nomear este objetivo"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado","total_points_44d76792":"Total de pontos"},"ru":{"buttons":{"cancel":"Отменить","save":"Сохранить"},"html_editor_fb2ab713":"Редактор HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Баллы","new_outcome_7fba8c7d":"Новый результат","outcomes":{"outcome_form":{"calculation_method":"Метод вычисления","criterion":"Рейтинги критерия","description":"Описать этот результат","display_name":"Понятное имя (необязательно)","mastery":"Усвоено на","title":"Дать название этому результату"}},"rich_content_editor_2708ef21":"Редактор форматированного текста","total_points_44d76792":"Общее число баллов"},"sl":{"buttons":{"cancel":"Prekliči","save":"Shrani"},"html_editor_fb2ab713":"Urejevalnik HTML","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Točke","new_outcome_7fba8c7d":"Nov izid","outcomes":{"outcome_form":{"calculation_method":"Metoda izračuna","criterion":"Rezultati po merilu","description":"Opiši ta izid","display_name":"Uporabniku prijazno ime (izbirno)","mastery":"Odličnost pri","title":"Poimenuj ta izid"}},"rich_content_editor_2708ef21":"Urejevalnik"},"sv":{"buttons":{"cancel":"Avbryt","save":"Spara"},"html_editor_fb2ab713":"HTML Editor","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poäng","new_outcome_7fba8c7d":"Nytt lärandemål","outcomes":{"outcome_form":{"calculation_method":"Beräkningsmetod","criterion":"Värderingskriterium","description":"Beskriv lärandemålet","display_name":"Alternativt namn (valfritt)","mastery":"Måluppfyllelse vid","title":"Namnge lärandemålet"}},"rich_content_editor_2708ef21":"Innehållsredigerare","total_points_44d76792":"Totala poäng"},"sv-x-k12":{"buttons":{"cancel":"Avbryt","save":"Spara"},"html_editor_fb2ab713":"HTML-redigeraren","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} Poäng","new_outcome_7fba8c7d":"Nytt lärandemål","outcomes":{"outcome_form":{"calculation_method":"Beräkningsmetod","criterion":"Värderingskriterium","description":"Beskriv lärandemålet","display_name":"Alternativt namn (valfritt)","mastery":"Måluppfyllelse vid","title":"Namnge lärandemålet"}},"rich_content_editor_2708ef21":"Innehållsredigerare"},"tr":{"buttons":{"cancel":"İptal","save":"Kaydet"},"html_editor_fb2ab713":"HTML Düzenleyici","new_outcome_7fba8c7d":"Yeni Öğrenme Çıktısı","outcomes":{"outcome_form":{"calculation_method":"Hesaplama Yöntemi","criterion":"Kriter oranları","description":"Öğrenme çıktısını açıklayın","display_name":"Takma ad (opsiyonel)","mastery":"Yeterlilik düzeyi","title":"Bu öğrenme çıktısına isim verin"}},"rich_content_editor_2708ef21":"Zengin İçerik Editörü","total_points_44d76792":"Toplam Puan"},"uk":{"buttons":{"cancel":"Скасувати","save":"Зберегти"},"html_editor_fb2ab713":"HTML-редактор","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} балів","new_outcome_7fba8c7d":"Новий результат","outcomes":{"outcome_form":{"calculation_method":"Метод підрахунків","criterion":"Рейтинг критерій","description":"Опишіть цей результат","display_name":"Дружнє  ім\'я (необов\'язково)","mastery":"Майстерність з","title":"Назва цього результату"}},"rich_content_editor_2708ef21":"Покращений редактор контенту"},"zh-Hans":{"buttons":{"cancel":"取消","save":"保存"},"html_editor_fb2ab713":"HTML 编辑器","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} 分","new_outcome_7fba8c7d":"新建结果","outcomes":{"outcome_form":{"calculation_method":"计算方法","criterion":"标准等级","description":"说明此结果","display_name":"友好名称（可选）","mastery":"掌握程度为","title":"命名此结果"}},"rich_content_editor_2708ef21":"富内容编辑器","total_points_44d76792":"总得分"},"zh-Hant":{"buttons":{"cancel":"取消","save":"保存"},"html_editor_fb2ab713":"HTML 編輯器","n_points_possible_precision_2_st_points_bc3748df":"%{n_points_possible_precision_2_st} 分數","new_outcome_7fba8c7d":"新成果","outcomes":{"outcome_form":{"calculation_method":"計算方法","criterion":"標準評級","description":"描述此成果","display_name":"友好的名稱（可選）","mastery":"精通達到","title":"命名此成果"}},"rich_content_editor_2708ef21":"富內容編輯器","total_points_44d76792":"總分"}}'))
a["default"].scoped("outcomes.outcome_form")
var H=z.a.default
var W=H.template,K=H.templates=H.templates||{}
var J="outcomes/outcomeForm"
K[J]=W((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
n=this.merge(n,e.partials)
r=r||{}
var o,a,s,c="",_=i.helperMissing,d=this.escapeExpression,u=this,l="function"
function p(e,t){var n,r,o=""
o+='\n    <div class="pull-right">\n      <a href="#" class="rte_switch_views_link">\n        '+d((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome_form"},data:t},n?n.call(e,"HTML Editor",r):_.call(e,"t","HTML Editor",r)))+'\n      </a>\n      <a href="#" class="rte_switch_views_link" style="display:none;">\n        '+d((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome_form"},data:t},n?n.call(e,"Rich Content Editor",r):_.call(e,"t","Rich Content Editor",r)))+'\n      </a>\n    </div>\n    <div style="clear:both;"></div>\n  '
return o}function m(e,t){var r,o=""
o+="\n          "
r=u.invokePartial(n["outcomes/criterionHeader"],"outcomes/criterionHeader",e,i,n,t);(r||0===r)&&(o+=r)
o+="\n        "
return o}function g(e,t){var r,o=""
o+="\n          "
r=u.invokePartial(n["outcomes/criterion"],"outcomes/criterion",e,i,n,t);(r||0===r)&&(o+=r)
o+="\n        "
return o}function f(e,t,n){var r,o,a,s=""
s+='\n        <option value="'+d((r=null==t||false===t?t:t.key,typeof r===l?r.apply(e):r))+'" '+d((o=i.selectedIf||n&&n.selectedIf,a={hash:{},data:t},o?o.call(e,null==t||false===t?t:t.key,n&&n.calculation_method,a):_.call(e,"selectedIf",null==t||false===t?t:t.key,n&&n.calculation_method,a)))+">\n          "
if(o=i.friendlyCalculationMethod)r=o.call(e,{hash:{},data:t})
else{o=e&&e.friendlyCalculationMethod
r=typeof o===l?o.call(e,{hash:{},data:t}):o}s+=d(r)+"\n        </option>\n      "
return s}c+='<form action="'
if(a=i.url)o=a.call(t,{hash:{},data:r})
else{a=t&&t.url
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'" class="learning_outcome" method="post">\n\n  <label class="span3" for="title">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"title","Name this outcome",s):_.call(t,"t","title","Name this outcome",s)))+':</label>\n  <input class="outcome_title span3" name="title" id=title size="50" type="text" value="'
if(a=i.title)o=a.call(t,{hash:{},data:r})
else{a=t&&t.title
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'" placeholder="'+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"new_outcome_7fba8c7d","New Outcome",s):_.call(t,"t","new_outcome_7fba8c7d","New Outcome",s)))+'">\n\n  <label class="span3" for="display_name">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"display_name","Friendly name (optional)",s):_.call(t,"t","display_name","Friendly name (optional)",s)))+':</label>\n  <input class="outcome_display_name span3" name="display_name" id=display_name size="50" type="text" value="'
if(a=i.display_name)o=a.call(t,{hash:{},data:r})
else{a=t&&t.display_name
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'">\n\n  <label for="description">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"description","Describe this outcome",s):_.call(t,"t","description","Describe this outcome",s)))+":</label>\n\n  "
o=i.unless.call(t,t&&t.use_rce_enhancements,{hash:{},inverse:u.noop,fn:u.program(1,p,r),data:r});(o||0===o)&&(c+=o)
c+='\n\n  <textarea cols="40" name="description" id=description rows="20" style="display: none; width: 100%; height: 150px;">'
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'</textarea>\n\n  <label>\n    <div style="display: flex">\n      <div id=\'criterion_rating_label\' style="margin-top: 0.65rem">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"criterion","Criterion ratings",s):_.call(t,"t","criterion","Criterion ratings",s)))+':</div>\n      <div id="react-info-link" />\n    </div>\n  </label>\n  <table class="criterion" aria-labelledby=\'criterion_rating_label\'>\n    <thead>\n      <tr>\n        '
o=(a=i.eachWithIndex||t&&t.eachWithIndex,s={hash:{},inverse:u.noop,fn:u.program(3,m,r),data:r},a?a.call(t,t&&t.ratings,s):_.call(t,"eachWithIndex",t&&t.ratings,s));(o||0===o)&&(c+=o)
c+='\n        <th class="total" aria-label=\''+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"total_points_44d76792","Total Points",s):_.call(t,"t","total_points_44d76792","Total Points",s)))+'\'>\n          <h5 class="total">'+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"total_points_44d76792","Total Points",s):_.call(t,"t","total_points_44d76792","Total Points",s)))+"</h5>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        "
o=(a=i.eachWithIndex||t&&t.eachWithIndex,s={hash:{},inverse:u.noop,fn:u.program(5,g,r),data:r},a?a.call(t,t&&t.ratings,s):_.call(t,"eachWithIndex",t&&t.ratings,s));(o||0===o)&&(c+=o)
c+='\n       <td class="total">\n         <div class="points_possible">\n           '
o=(a=i.n||t&&t.n,s={hash:{precision:2,strip_insignificant_zeros:true},data:r},a?a.call(t,t&&t.points_possible,s):_.call(t,"n",t&&t.points_possible,s))
c+=d((a=i.t||t&&t.t,s={hash:{n_points_possible_precision_2_st:o,i18n_inferred_key:true},data:r},a?a.call(t,"n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",s):_.call(t,"t","n_points_possible_precision_2_st_points_bc3748df","%{n_points_possible_precision_2_st} Points",s)))+'\n         </div>\n       </td>\n      </tr>\n    </tbody>\n  </table>\n  <div>\n    <label for="mastery_points" style="display: inline">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"mastery","Mastery at",s):_.call(t,"t","mastery","Mastery at",s)))+':</label>\n    <input type="text" name="mastery_points" style="width: 20px;" class="mastery_points" id="mastery_points" value="'+d((a=i.n||t&&t.n,s={hash:{precision:2,strip_insignificant_zeros:true},data:r},a?a.call(t,t&&t.mastery_points,s):_.call(t,"n",t&&t.mastery_points,s)))+'">\n  </div>\n  <div>\n    <label for="calculation_method" style="display: inline">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"calculation_method","Calculation Method",s):_.call(t,"t","calculation_method","Calculation Method",s)))+':</label>\n    <select name="calculation_method" class="calculation_method" id="calculation_method" data-calculation-method="'
if(a=i.calculation_method)o=a.call(t,{hash:{},data:r})
else{a=t&&t.calculation_method
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'" value="'
if(a=i.calculation_method)o=a.call(t,{hash:{},data:r})
else{a=t&&t.calculation_method
o=typeof a===l?a.call(t,{hash:{},data:r}):a}c+=d(o)+'">\n      '
o=i.each.call(t,t&&t.calculationMethods,{hash:{},inverse:u.noop,fn:u.programWithDepth(7,f,r,t),data:r});(o||0===o)&&(c+=o)
c+='\n    </select>\n  </div>\n  <div class="content-box">\n    <div class="grid-row">\n      \x3c!-- Hook for OutcomeCalculationMethodFormView --\x3e\n      <div class="col-xs-12 outcome-calculation-method-form"></div>\n    </div>\n  </div>\n  <div class="align-right">\n    <button type="button" class="btn cancel_button">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"#buttons.cancel","Cancel",s):_.call(t,"t","#buttons.cancel","Cancel",s)))+'</button>\n    <button type="submit" class="btn btn-primary submit_button">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_form"},data:r},a?a.call(t,"#buttons.save","Save",s):_.call(t,"t","#buttons.save","Save",s)))+"</button>\n  </div>\n</form>\n"
return c}))
var Q=K[J]
var Y=i("An8g")
Object(s["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","confirm_edit_outcome_a9746c99":"تأكيد ناتج التحرير","save_11a80ec3":"حفظ","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"سيؤدي هذا إلى تحديث كل المعايير التي تستخدم هذا الناتج التي لم يتم تقييمها بعد","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"لقد قمت بتحديث معايير الدرجات؛ سيؤثر هذا على كل الطلاب الذين تم تقييمهم فيما سبق باستخدام هذا الناتج."},"cy":{"cancel_caeb1e68":"Canslo","confirm_edit_outcome_a9746c99":"Cadarnhau Golygu Deilliant","save_11a80ec3":"Cadw","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Bydd hyn yn diweddaru’r holl gyfarwyddiadau sgorio sy’n defnyddio’r deilliant hwn, a sydd heb gael eu hasesu eto","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Rydych chi wedi diweddaru’r meini prawf ar gyfer sgoriau; bydd hyn yn effeithio ar bob myfyriwr sydd wedi cael ei asesu’n barod gyda’r deilliant hwn"},"da":{"cancel_caeb1e68":"Annuller","confirm_edit_outcome_a9746c99":"Bekræft Rediger læringsudbytte","save_11a80ec3":"Gem","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dette vil opdatere alle rubrikker, der bruger dette læringsudbytte, der endnu ikke er vurderet","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har opdateret resultatkriterierne. Dette vil påvirke alle studerende, der tidligere blev vurderet med dette læringsudbytte"},"da-x-k12":{"cancel_caeb1e68":"Annuller","confirm_edit_outcome_a9746c99":"Bekræft Rediger læringsudbytte","save_11a80ec3":"Gem","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dette vil opdatere alle vurderingskriterier, der bruger dette læringsudbytte, der endnu ikke er vurderet","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har opdateret resultatkriterierne. Dette vil påvirke alle elever, der tidligere blev vurderet med dette læringsudbytte"},"de":{"cancel_caeb1e68":"Abbrechen","confirm_edit_outcome_a9746c99":"Ergebnisänderung bestätigen","save_11a80ec3":"Speichern","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dies aktualisiert alle Rubriken mit diesem Ergebnis, die noch nicht bewertet wurden.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Sie haben die Bewertungskriterien aktualisiert; dies wirkt sich auf alle Studenten aus, die zuvor anhand dieses Ergebnis bewertet wurden."},"el":{"cancel_caeb1e68":"Ακύρωση","save_11a80ec3":"Αποθήκευση"},"en-AU":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm Edit Outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm Edit Outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"en-CA":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm Edit Outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"en-GB":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm edit outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm edit outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","confirm_edit_outcome_a9746c99":"Confirm edit outcome","save_11a80ec3":"Save","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"This will update all rubrics using this outcome that have not yet been assessed","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"},"es":{"cancel_caeb1e68":"Cancelar","confirm_edit_outcome_a9746c99":"Confirmar competencia de edición","save_11a80ec3":"Guardar","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Esto actualizará todas las rúbricas que usan esta competencia y que aún no han sido evaluadas","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Ha actualizado el criterio de puntajes; esto afectará a todos los estudiantes evaluados anteriormente con esta competencia"},"fa":{"cancel_caeb1e68":"لغو","save_11a80ec3":"ذخیره سازی"},"fi":{"cancel_caeb1e68":"Peruuta","confirm_edit_outcome_a9746c99":"Vahvista Muokkaa tulosta","save_11a80ec3":"Tallenna","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Tämä päivittää kaikki sellaista tulosta käyttävät rubriikit, joita ei vielä ole arvioitu","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Olet päivittänyt pisteytyskriteereitä; tämä vaikuttaa kaikkiin aikaisemmin tälle tulokselle arvioituihin opiskelijoihin"},"fr":{"cancel_caeb1e68":"Annuler","confirm_edit_outcome_a9746c99":"Confirmer la modification du résultat","save_11a80ec3":"Enregistrer","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Cela permettra de mettre à jour l\'ensemble des barèmes utilisant ce résultat qui n\'ont pas encore été évalués.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Vous avez mis à jour les critères de notation, ce qui affectera tous les élèves déjà évalués avec ce résultat."},"fr-CA":{"cancel_caeb1e68":"Annuler","confirm_edit_outcome_a9746c99":"Confirmer la modifier de l’acquis","save_11a80ec3":"Enregistrer","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Cela permettra de mettre à jour toutes les rubriques utilisant ce résultat qui n\'ont pas encore été évaluées.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Vous avez mis à jour les critères de notation, ce qui affectera tous les étudiants déjà évalués à l\'aide de ce résultat"},"he":{"cancel_caeb1e68":"ביטול","save_11a80ec3":"שמירה"},"ht":{"cancel_caeb1e68":"Anile","confirm_edit_outcome_a9746c99":"Konfime Modifikasyon Rezilta","save_11a80ec3":"Anrejistre","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Sa ap aktyalize tout ribrik yo si w itilize rezilta ki poko evalye sa a","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Ou aktyalize kritè notasyon an; sa ap afekte tout elèv yo te gentan evalye ak rezilta sa a"},"hu":{"cancel_caeb1e68":"Mégse","save_11a80ec3":"Mentés"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","save_11a80ec3":"Պահպանել"},"is":{"cancel_caeb1e68":"Hætta við","confirm_edit_outcome_a9746c99":"Staðfestið breytinguna","save_11a80ec3":"Vista","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Þetta mun uppfæra allar yfirstrikanir með því að nota þessa niðurstöðu sem hefur ekki enn verið metin","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Þú hefur uppfært einkunnaviðmiðanirnar; Þetta mun hafa áhrif á alla nemendur sem áður voru metnir með því að nota þessa niðurstöðu"},"it":{"cancel_caeb1e68":"Annulla","confirm_edit_outcome_a9746c99":"Conferma modifica esito","save_11a80ec3":"Salva","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"L\'operazione aggiornerà tutte le rubriche che utilizzano questo esito e che non sono state ancora valutate.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Hai aggiornato i criteri di assegnazione dei punteggi; questa operazione influirà su tutti gli studenti precedentemente valutati utilizzando questo esito"},"ja":{"cancel_caeb1e68":"キャンセル","confirm_edit_outcome_a9746c99":"結果の編集を確認する","save_11a80ec3":"保存","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"これにより、まだ評価されていないこの成果を使用して、すべてのルーブリックが更新されます","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"採点基準を更新しました。これにより、この結果を使用して以前に評価されたすべての受講生に影響があります"},"ko":{"cancel_caeb1e68":"취소","save_11a80ec3":"저장"},"mi":{"cancel_caeb1e68":"Whakakore","confirm_edit_outcome_a9746c99":"Whakapūmau Whakatika Putanga","save_11a80ec3":"Tiaki","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Ka whakahouhia e tēnei te rehita katoa ma te whakamahi i tēnei putanga kaore anō i aromatawaitia","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Kua whakahoutia e koe te paearu whiringa; ka pā tēnei ki ngā ākonga katoa i aromatawaitia i mua i tēnei putanga"},"nb":{"cancel_caeb1e68":"Avbryt","confirm_edit_outcome_a9746c99":"Bekreft rediger resultat","save_11a80ec3":"Lagre","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dette oppdaterer alle rubrikkene med dette resultatet som ikke har blitt vurdert enda","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har oppdatert poengkriteriet; dette vil påvirke alle studenter som tidligere ble vurdert med dette resultatet"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","confirm_edit_outcome_a9746c99":"Bekreft rediger mål","save_11a80ec3":"Lagre","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dette oppdaterer alle vurderingskriteriene med dette målet som ikke har blitt vurdert enda","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har oppdatert poengkriteriet; dette vil påvirke alle elever som tidligere ble vurdert med dette målet"},"nl":{"cancel_caeb1e68":"Annuleren","confirm_edit_outcome_a9746c99":"Bewerken van leerdoel bevestigen","save_11a80ec3":"Opslaan","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Hiermee worden alle rubrieken bijgewerkt die dit leerdoel gebruiken en die nog niet beoordeeld zijn","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Je hebt de beoordelingscriteria bijgewerkt. Dat is van invloed op alle cursisten die eerder op basis van dit leerdoel zijn beoordeeld."},"nn":{"cancel_caeb1e68":"Avbryt","confirm_edit_outcome_a9746c99":"Stadfest redigering av læringsmål","save_11a80ec3":"Lagre","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Dette oppdaterer alle vurderingskriterier knytta til dette læringsmålet som enno ikkje er vurdert.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har oppdatert vurderingskriteria; dette påverkar alle studentar som allereie er vurdert etter dette kriteriet"},"pl":{"cancel_caeb1e68":"Anuluj","confirm_edit_outcome_a9746c99":"Potwierdź edycję wyniku","save_11a80ec3":"Zapisz","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Spowoduje to aktualizację wszystkich rubryk z użyciem wyniku, który nie został jeszcze oceniony","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Zaktualizowano kryteria ocenienia; będzie to mieć wpływ na wszystkich uczestników dotychczas ocenionych na podstawie tego wyniku"},"pt":{"cancel_caeb1e68":"Cancelar","confirm_edit_outcome_a9746c99":"Confirmar Editar Resultado","save_11a80ec3":"Guardar","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Isso atualizará todas as rubricas usando esse resultado que ainda não foi avaliado","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Você atualizou os critérios de pontuação; isso afetará todos os alunos previamente avaliados usando este resultado"},"pt-BR":{"cancel_caeb1e68":"Cancelar","confirm_edit_outcome_a9746c99":"Confirmar edição do objetivo","save_11a80ec3":"Salvar","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Isso atualizará todas as rubricas usando este objetivo que ainda não foi avaliado","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Você atualizou o critério de pontuação; isso afetará todos os alunos previamente avaliados usando tal objetivo."},"ru":{"cancel_caeb1e68":"Отменить","confirm_edit_outcome_a9746c99":"Подтвердить редактирование результата","save_11a80ec3":"Сохранить","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Использование данного результата, который еще не был оценен, приведет к обновлению всех рубрик","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Вы обновили критерии подсчета баллов; это повлияет на всех студентов, ранее оцененных с использованием данного результата"},"sl":{"cancel_caeb1e68":"Prekliči","confirm_edit_outcome_a9746c99":"Potrdi urejanje izida","save_11a80ec3":"Shrani","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"S tem bodo posodobljeni vsi ocenjevalni vodniki, ki uporabljajo ta izid in še niso bili ocenjeni.","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Posodobili ste merila točkovanja; to bo vplivalo na vse študente, ki so bili prej ocenjeni s tem izidom."},"sv":{"cancel_caeb1e68":"Avbryt","confirm_edit_outcome_a9746c99":"Bekräfta redigera resultat","save_11a80ec3":"Spara","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Detta kommer att uppdatera alla matriser med hjälp av detta resultat som ännu inte har utvärderats","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har uppdaterat resultats-kriterierna. Detta kommer att påverka alla studenter som tidigare bedömts med hjälp av detta resultat"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","confirm_edit_outcome_a9746c99":"Bekräfta redigera resultat","save_11a80ec3":"Spara","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"Detta kommer att uppdatera alla rubriker med hjälp av detta resultat som ännu inte har utvärderats","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"Du har uppdaterat resultats-kriterierna. Detta kommer att påverka alla elever som tidigare bedömts med hjälp av detta resultat"},"tr":{"cancel_caeb1e68":"İptal","save_11a80ec3":"Kaydet"},"uk":{"cancel_caeb1e68":"Скасувати","save_11a80ec3":"Зберегти"},"zh-Hans":{"cancel_caeb1e68":"取消","confirm_edit_outcome_a9746c99":"确认编辑结果","save_11a80ec3":"保存","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"这将使用此结果更新所有未评估的评价量规","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"您更新了评分标准；这将影响已经使用此结果进行评估的所有学生"},"zh-Hant":{"cancel_caeb1e68":"取消","confirm_edit_outcome_a9746c99":"確認編輯成果","save_11a80ec3":"保存","this_will_update_all_rubrics_using_this_outcome_th_6954ca45":"這將使用此尚未評估的成果更新所有評分標準","you_ve_updated_the_scoring_criteria_this_will_affe_ec852671":"您已更新評分標準；這將影響所有以前使用此成果進行評估的學生"}}'))
var X=a["default"].scoped("confirmOutcomeEditModal")
var Z=i("q1tI")
var ee=i.n(Z)
var te=i("i8i4")
var ie=i.n(te)
i("17x9")
var ne=i("Xx/m")
var re=i("dTie")
const oe=e=>{let t=e.changed,i=e.hasUpdateableRubrics
return t&&i}
const ae=e=>{let t=e.assessed,i=e.changed,n=e.modifiedFields
return i&&t&&(n.masteryPoints||n.scoringMethod)}
function se(e){if(!oe(e)&&!ae(e)){setTimeout(e.onConfirm)
return}const t=document.createElement("div")
t.setAttribute("class","confirm-outcome-edit-modal-container")
document.body.appendChild(t)
function i(e){e&&e.show()}ie.a.render(ee.a.createElement(ce,Object.assign({},e,{parent:()=>t,ref:i})),t)}class ce extends Z["Component"]{constructor(){super(...arguments)
this.state={show:false}
this.onConfirm=()=>{setTimeout(this.props.onConfirm)
this.hide()}
this.onCancel=()=>{this.hide()}}show(){this.setState({show:true})}hide(){this.setState({show:false},()=>{const e=this.props.parent?this.props.parent():null
e&&ie.a.unmountComponentAtNode(e)})}render(){const e=this.props,t=e.assessed,i=e.changed,n=e.hasUpdateableRubrics,r=e.modifiedFields
return Object(Y["a"])(re["a"],{label:X.t("Confirm Edit Outcome"),open:this.state.show,onDismiss:this.onCancel,size:"small"},void 0,Object(Y["a"])(re["a"].Body,{},void 0,Object(Y["a"])("div",{},void 0,Object(Y["a"])("ul",{},void 0,oe({changed:i,hasUpdateableRubrics:n})&&Object(Y["a"])("li",{},void 0,X.t("This will update all rubrics using this outcome that have not yet been assessed")),ae({assessed:t,changed:i,modifiedFields:r})&&Object(Y["a"])("li",{},void 0,X.t("You’ve updated the scoring criteria; this will affect all students previously assessed using this outcome"))))),Object(Y["a"])(re["a"].Footer,{},void 0,Object(Y["a"])(ne["a"],{onClick:this.onCancel,id:"cancel-outcome-edit-modal"},void 0,X.t("Cancel"))," ",Object(Y["a"])(ne["a"],{onClick:this.onConfirm,id:"confirm-outcome-edit-modal",variant:"primary"},void 0,X.t("Save"))))}}var _e=i("WfMV")
var de=i("Mmr1")
var ue=i("gSD+")
var le=i("5JRF")
var pe=i("gW/U")
var me=i("98st")
Object(s["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق","criterion_ratings_3eed22e2":"تصنيفات المعيار","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nيمكن تضمين حصائل التعلم في مقاييس تقييم المهمة باعتبارها طريقة سهلة لتقييم\\nحصائل الإجادة المتوائمة مع مهام محددة.  عندما تقوم بتحديد حصيلة\\nتعلم، ينبغي أيضًا تحديد معيار يمكن استخدامه عند بناء\\nمقاييس تقييم المهام.  قم بتحديد أكبر عدد تحتاج إليه من أعمدة مقاييس التقييم، وحدد\\nحد النقاط التي سيتم استخدامها لتحديد إجادة هذه الحصيلة.","more_information_about_ratings_57cdd446":"المزيد من المعلومات حول التصنيفات"},"cy":{"close_d634289d":"Cau","criterion_ratings_3eed22e2":"Sgoriau maen prawf","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nMae modd cynnwys deilliannau dysgu mewn cyfarwyddiadau sgorio aseiniad fel ffordd hawdd o asesu\\nmeistrolaeth o ddeilliannau sy’n cyd-fynd ag aseiniadau penodol.  Pan fyddwch chi’n diffinio deilliant\\ndysgu, dylech hefyd ddiffinio maen prawf y gellir ei ddefnyddio wrth greu\\ncyfarwyddiadau sgorio ar gyfer aseiniad.  Diffiniwch gynifer o golofnau cyfarwyddyd sgorio ag y bo angen arnoch, a phennu\\ntrothwy pwyntiau a gaiff ei ddefnyddio i ddiffinio meistrolaeth o’r deilliant hwn.","more_information_about_ratings_57cdd446":"Rhagor o wybodaeth am sgorau"},"da":{"close_d634289d":"Luk","criterion_ratings_3eed22e2":"Kriteriebedømmelse","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLæringsudbytte kan indgå i opgaverubrikker som en nem måde at vurdere\\nopfyldelse af læringsmål tilpasset til specifikke opgaver.  Når du definerer et\\nlæringsudbytte, skal du også definere et kriterie, der kan bruges ved oprettelse af\\nopgaverubrikker.  Definer så mange rubrikkolonner, som du har brug for, og angiv en\\npointtærskel, der vil blive brugt til at definere opfyldelse af dette læringsmål.","more_information_about_ratings_57cdd446":"Flere oplysninger om vurderinger"},"da-x-k12":{"close_d634289d":"Luk","criterion_ratings_3eed22e2":"Kriteriebedømmelse","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLæringsudbytte kan indgå i opgavevurderingskriterier som en nem måde at vurdere\\nopfyldelse af læringsmål tilpasset til specifikke opgaver.  Når du definerer et læringsudbytte,\\nskal du også definere et kriterie, der kan bruges ved oprettelse af opgavevurderingskriterier.\\nDefiner så mange vurderingskriteriekolonner, som du har brug for, og angiv en\\npointtærskel, der vil blive brugt til at definere opfyldelse af dette læringsmål.","more_information_about_ratings_57cdd446":"Flere oplysninger om vurderinger"},"de":{"close_d634289d":"Schließen","criterion_ratings_3eed22e2":"Kriterienbewertungen","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLernziele können in das Bewertungsschema für Aufgaben einbezogen werden als einfache Möglichkeit zur Beurteilung der \\nBeherrschung der Lernziele, ausgerichtet an spezifischen Aufgaben.  Beim Definieren eines Lernziels \\nsollten Sie auch ein Kriterium definieren, das für das Einrichten des \\nBewertungsschemas für die Aufgabe verwendet werden kann.  Definieren Sie so viele Bewertungsschemaspalten, wie Sie benötigen, und geben Sie die \\nPunktzahl an, die benötigt wird, um das Lernziel zu erreichen.","more_information_about_ratings_57cdd446":"Weitere Informationen über Bewertungen"},"el":{"close_d634289d":"Κλείσιμο","criterion_ratings_3eed22e2":"Κατάταξη Βάσει Κριτηρίων"},"en-AU":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion Ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLearning outcomes can be included in assignment rubrics as an easy way to assess\\nmastery of outcomes aligned to specific assignments.  When you define a learning\\noutcome, you should also define a criterion that can be used when building\\nassignment rubrics.  Define as many rubric columns as you need and specify a\\npoint threshold that will be used to define mastery of this outcome.","more_information_about_ratings_57cdd446":"More Information About Ratings"},"en-AU-x-unimelb":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion Ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLearning outcomes can be included in assignment rubrics as an easy way to assess\\nmastery of outcomes aligned to specific assignments.  When you define a learning\\noutcome, you should also define a criterion that can be used when building\\nassignment rubrics.  Define as many rubric columns as you need and specify a\\npoint threshold that will be used to define mastery of this outcome.","more_information_about_ratings_57cdd446":"More Information About Ratings"},"en-CA":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion Ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLearning outcomes can be included in assignment rubrics as an easy way to assess\\nmastery of outcomes aligned to specific assignments.  When you define a learning\\noutcome, you should also define a criterion that can be used when building\\nassignment rubrics.  Define as many rubric columns as you need, and specify a\\npoint threshold that will be used to define mastery of this outcome.\\n","more_information_about_ratings_57cdd446":"More Information About Ratings"},"en-GB":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLearning outcomes can be included in assignment rubrics as an easy way to assess\\nmastery of outcomes aligned to specific assignments.  When you define a learning\\noutcome, you should also define a criterion that can be used when building\\nassignment rubrics.  Define as many rubric columns as you need and specify a\\npoint threshold that will be used to define mastery of this outcome.","more_information_about_ratings_57cdd446":"More Information About Ratings"},"en-GB-x-lbs":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"  \\n  Learning outcomes can be included in task rubrics as an easy way to assess\\n  mastery of outcomes aligned to specific tasks.  When you define a learning\\n  outcome, you should also define a criterion that can be used when building\\n  task rubrics.  Define as many rubric columns as you need, and specify a\\n  point threshold that will be used to define mastery of this outcome.\\n","more_information_about_ratings_57cdd446":"More Information About Ratings"},"en-GB-x-ukhe":{"close_d634289d":"Close","criterion_ratings_3eed22e2":"Criterion ratings","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLearning outcomes can be included in assignment rubrics as an easy way to assess\\nmastery of outcomes aligned to specific assignments.  When you define a learning\\noutcome, you should also define a criterion that can be used when building\\nassignment rubrics.  Define as many rubric columns as you need and specify a\\npoint threshold that will be used to define mastery of this outcome.","more_information_about_ratings_57cdd446":"More Information About Ratings"},"es":{"close_d634289d":"Cerrar","criterion_ratings_3eed22e2":"Clasificaciones del criterio","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLos resultados del aprendizaje pueden incluirse en rúbricas de tareas como una forma de evaluar fácilmente\\nel dominio de los resultados vinculados con tareas específicas.  Cuando defina un resultado\\ndel aprendizaje, también deberá establecer un criterio que pueda usarse al momento de elaborar\\nrúbricas de tareas.  Defina tantas columnas de rúbricas como necesite y especifique un umbral de\\npunto(s) que se utilizará para definir el dominio sobre esta competencia.\\n","more_information_about_ratings_57cdd446":"Más información sobre las calificaciones"},"fa":{"close_d634289d":"بستن","criterion_ratings_3eed22e2":"رتبه بندی های معیار"},"fi":{"close_d634289d":"Sulje","criterion_ratings_3eed22e2":"Kriteerien luokitus","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nOppimisen tulokset voidaan sisällyttää tehtävän rubriikkeihin helppona tapana arvioida\\nmäärättyihin tehtäviin kohdistettujen tulosten hallintaa.  Kun määrität oppimisen\\ntuloksen, sinun pitäisi myös määrittää kriteeri, jotka voidaan käyttää, kun rakennetaan\\ntehtävän rubriikkeja.  Määritä tarvitsemasi määrä rubriikin sarakkeita, ja määritä\\npisteen kynnys, jota käytetään tämän tuloksen hallinnan määrittämisessä.","more_information_about_ratings_57cdd446":"Lisätietoja arvosteluista"},"fr":{"close_d634289d":"Fermer","criterion_ratings_3eed22e2":"Notes du critère","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLes résultats d\'apprentissage peuvent être inclus dans les barèmes des travaux comme un moyen facile d\'évaluer\\nla maîtrise des résultats alignés sur des travaux spécifiques.  Lorsque vous définissez un résultat\\nd\'apprentissage, vous devez également définir un critère qui peut être utilisé lors de l\'élaboration\\ndes barèmes des travaux.  Définissez autant de colonnes de barèmes que nécessaire, et spécifiez un\\nseuil de points qui sera utilisé pour définir la maîtrise de ce résultat.","more_information_about_ratings_57cdd446":"Plus d’informations sur les notations"},"fr-CA":{"close_d634289d":"Fermer","criterion_ratings_3eed22e2":"Notes du critère","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLes acquis peuvent être inclus dans la rubrique des tâches comme un moyen facile d\'évaluer\\nla maîtrise des résultats correspondant à des tâches précises.  Lorsque vous définissez un acquis\\n, vous devez également définir un critère qui peut être utilisé lors de la création des\\nrubriques des tâches.  Définir autant de colonnes de rubrique dont vous avez besoin, et spécifier\\nun seuil de points qui sera utilisé pour définir la maîtrise de ce résultat.","more_information_about_ratings_57cdd446":"De plus amples renseignements au sujet de notes"},"he":{"close_d634289d":"סגירה","criterion_ratings_3eed22e2":"דירוגי קריטריון "},"ht":{"close_d634289d":"Fèmen","criterion_ratings_3eed22e2":"Kritè Evalyasyon","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nRezilta aprantisaj yo kapab enkli nan ribrik afektasyon yo kòm mwayen fasil\\npou ka evalyemetriz rezilta ki koresponn ak sesyon espesyal.  Lè w ap defini\\nyon reszilta aprantisaj, ou ta dwe defini yon kritè ki kapab itilize nan\\nelaborasyon ribrik sesyon yo.  Defini kantite kolòn ribrik ki nesesè epi \\nmete yon limit pwen ke y ap itilize pou defini metriz rezilta sa a.","more_information_about_ratings_57cdd446":"Plis Enfòmasyon sou Klasman yo"},"hu":{"close_d634289d":"Bezárás","criterion_ratings_3eed22e2":"Kritériumértékelések"},"hy":{"close_d634289d":"Փակել","criterion_ratings_3eed22e2":"Վարկանիշերի չափանիշը"},"is":{"close_d634289d":"Loka","criterion_ratings_3eed22e2":"Viðmiðunarmat","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nHægt er að hafa lærdómsniðurstöður með í matsviðmiðum verkefnis sem auðvelda leið til að\\nleggja mat á leiknistig niðurstaðna sem er samstillt við sérstök verkefni.  Þegar þú\\nskilgreinir lærdóms niðurstöðu, ættir þú líka að skilgreina viðmið sem hægt er að nota þegar\\nmatsviðmið verkefnis eru gerð.  Skilgreindu jafnmarga matsviðmiðadálka og þú þarft og tiltaktu\\nstigaþröskuld sem verður notaður til að skilgreina leiknistig þessarar niðurstöðu.","more_information_about_ratings_57cdd446":"Frekari upplýsingar um einkunnir"},"it":{"close_d634289d":"Chiudi","criterion_ratings_3eed22e2":"Valutazioni basate su criterio","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nI risultati dell’apprendimento possono essere inclusi nelle rubriche dei compiti come semplice modo per valutare la padronanza\\ndei risultati allineata a compiti specifici.  Quando si definisce un risultato\\ndi apprendimento, è necessario definire anche un criterio da utilizzare per la creazione\\ndelle rubriche dei compiti.  Definire tutte le colonne rubrica di cui si ha bisogno e specificare una soglia del\\npunto che sarà utilizzata per definire la padronanza di questo risultato.","more_information_about_ratings_57cdd446":"Maggiori informazioni sulle valutazioni"},"ja":{"close_d634289d":"閉じる","criterion_ratings_3eed22e2":"基準の評価","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\n学習成果は、特定の課題に合わせた成果の習熟を評価する簡単な方法として、\\n課題ルーブリックに含めることができます。学習成果を定義する際には、課題ル\\nーブリックビルド時に使用できる基準も定義しなければなりません。必要なだけ\\nの数のルーブリック列を定義し、この成果の習得を定義するために使用される\\nポイントの閾値を指定します。","more_information_about_ratings_57cdd446":"格付け評価に関する詳細情報"},"ko":{"close_d634289d":"닫기","criterion_ratings_3eed22e2":"기준 등급"},"mi":{"close_d634289d":"Katia","criterion_ratings_3eed22e2":"Whakatauranga paearu","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nKo ngā putanga ako ka taea te whakauru ki ngā whakataunga rubrics hei huarahi ngāwari ki te aromatawai\\nmana o ngā putanga e hāngai ana ki ngā whakataunga motuhake.  Ka whakatau koe i te putanga o te ako,\\nme whakamārama anō hoki koe i tētahi tohu ka taea te whakamahi i te hanganga o ngā whakataunga rubrics.\\nTautuhia te maha o ngā tīwae rubric e hiahiatia ana e koe, me tautuhi i te pae e whakamahia ana hei\\ntautuhi i te mana o tēnei putanga.","more_information_about_ratings_57cdd446":"He Korero Ano Mo Ngā Ratonga"},"nb":{"close_d634289d":"Lukk","criterion_ratings_3eed22e2":"Kriterievurderinger","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLæringsresultat kan inkluderes i oppgaverubrikkene som en enkle måte å vurdere\\nekspertise av resultat justert til bestemte oppgaver.  Når du definerer et lærings\\nresultat, må du også definere et kriterie som kan brukes fore å bygge oppgaverubrikker.\\nDefiner så mange rubrikk-kolonner som du trenger, og spesifiser poeng-terskler som\\nskal brukes for å definere ekspertisen til dette læringsmålet.","more_information_about_ratings_57cdd446":"Mer informasjon om rangeringer"},"nb-x-k12":{"close_d634289d":"Lukk","criterion_ratings_3eed22e2":"Kriterievurderinger","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLæringsresultat kan inkluderes i oppgavevurderingskriterier som en enkle måte å vurdere\\nekspertise av resultat justert til bestemte oppgaver.  Når du definerer et lærings\\nresultat, må du også definere et kriterie som kan brukes fore å bygge\\noppgavevurderingskriterier.  Definer så mange kolonner for vurderingskriterier som du trenger, og spesifiser\\npoeng-terskler som skal brukes for å definere ekspertisen til dette målet.","more_information_about_ratings_57cdd446":"Mer informasjon om rangeringer"},"nl":{"close_d634289d":"Sluiten","criterion_ratings_3eed22e2":"Criterium voor beoordelingen","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLeerdoelen kunnen in opdrachtrubrieken worden opgenomen om op een eenvoudige manier studieresultaten\\nte koppelen aan specifieke opdrachten.  Wanneer je een leerdoel definieert, moet je ook een criterium\\ndefiniëren dat kan worden gebruikt bij het samenstellen van opdrachtrubrieken.  Definieer zoveel\\nrubriekkolommen als je nodig hebt en geef het aantal punten op dat minimaal behaald moet worden\\nom dit leerdoel te behalen.","more_information_about_ratings_57cdd446":"Meer informatie over scores"},"nn":{"close_d634289d":"Lukk","criterion_ratings_3eed22e2":"Kriterievurderingar","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\n  Læringsmål kan inkluderast i vurderingsskjema for oppgåver, slik at du på ein enkel måte kan vurdere\\n  meistringsnivå i bestemte oppgåver. Når du definerer eit læringsmål,\\n  bør du også definere eit kriterium som kan brukast når du lagar\\n  vurderingskriterium for oppgåver. Opprett dei rubrikkane du treng og set ein\\n  poengterskel for å definere meistringa av læringsmålet.\\n","more_information_about_ratings_57cdd446":"Meir informasjon om nivå"},"pl":{"close_d634289d":"Zamknij","criterion_ratings_3eed22e2":"Punktacja dla danego kryterium","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nWyniki nauki można uwzględnić w kryteriach ocen dla zadań jako łatwy sposób\\nokreślenia stopnia opanowania wyników dla określonych testów.  Gdy definiowany\\njest wynik nauki, należy także podać kryterium używane do tworzenia kryteriów\\nocen testu.  Zdefiniuj tyle kolumn kryteriów ocen, ile potrzeba, oraz określ\\npunkt graniczny używany do zdefiniowania stopnia opanowania takich wyników.","more_information_about_ratings_57cdd446":"Więcej informacji o ocenach"},"pt":{"close_d634289d":"Fechar","criterion_ratings_3eed22e2":"Classificações do critério","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nOs resultados de aprendizagem podem ser incluídos nas rubricas de atribuição como uma maneira fácil de\\navaliar o domínio dos resultados alinhados a atribuições específicas.  Ao definir um resultado de\\naprendizado, você também deve definir um critério que possa ser usado ao criar rubricas de\\natribuição.  Defina quantas colunas de rubricas forem necessárias e especifique um\\nlimiar de limite que será usado para definir o domínio desse resultado.","more_information_about_ratings_57cdd446":"Mais informações sobre avaliações"},"pt-BR":{"close_d634289d":"Fechar","criterion_ratings_3eed22e2":"Avaliações do critério","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nObjetivos de aprendizagem podem ser incluídos em rubricas de tarefas como uma forma fácil\\nde avaliar o domínio dos objetivos alinhados a tarefas especificas.  Ao definir um resultado\\ndo aprendizado, você também deve definir um critério que possa ser usado ao fazer rubricas\\nda tarefa.  Defina quantas colunas da rubrica desejar, e especifique um limite de pontos\\nque será usado para definir o domínio deste objetivo.","more_information_about_ratings_57cdd446":"Mais informações sobre avaliações"},"ru":{"close_d634289d":"Закрыть","criterion_ratings_3eed22e2":"Рейтинги критерия","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nРезультаты обучения могут быть включены в рубрики заданий как простой способ оценивания\\nуровня знаний на основе сравнения со специальными заданиями.  После определения результатов\\nобучения вам необходимо задать критерий, который можно использовать при создании\\nрубрик заданий.  Задайте необходимое количество столбцов рубрик и установите\\nзначение порога, которое будет использоваться для определения уровня знаний по данной рубрике.","more_information_about_ratings_57cdd446":"Более подробная информация о рейтингах"},"sl":{"close_d634289d":"Zapri","criterion_ratings_3eed22e2":"Rezultati po merilu","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nVključevanje učnih ciljev v ocenjevalne vodnike naloge je enostaven način za oceno odličnosti učnih izidov,\\nporavnanih s specifičnimi nalogami.  Ko določite učni cilj, morate\\ndoločiti tudi merilo, ki ga je mogoče uporabiti pri pripravi ocenjevalnih\\nvodnikov za nalogo.  Določite toliko stolpcev ocenjevalnega vodnika, kot želite, in določite\\ntočko praga, ki bo pri tem izidu določala odličnost.\\n","more_information_about_ratings_57cdd446":"Več informacij o ocenah"},"sv":{"close_d634289d":"Stäng","criterion_ratings_3eed22e2":"Värderingskriterium","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\nLärandemål kan inkluderas i uppgiftsmatriser för att enklare uppnå\\nuppfyllelse av lärandemål i linje med specifika uppgifter.  När du definierar ett\\nlärandemål, bör du även definiera ett kriterium som kan användas för att skapa\\nuppgiftsmatriser.  Definiera så många matriskolumner du behöver, och ange en\\npoängtröskel som definierar uppfyllande av det här lärandemålet.","more_information_about_ratings_57cdd446":"Mer information om omdömen:"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat","criterion_ratings_3eed22e2":"Kriter Oranları"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭","criterion_ratings_3eed22e2":"标准等级","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\n学习结果可以加入作业品格表格中，便于轻松评估\\n与特定作业一致的结果的掌握程度。当您定义学习\\n结果时，您还应该定义在构建\\n作业品评价量规时可以使用的标准。定义您所需数量的评价量规栏，并指定\\n定义此结果掌握程度时要使用的分数阈值。","more_information_about_ratings_57cdd446":"关于评分等级的更多信息"},"zh-Hant":{"close_d634289d":"關閉","criterion_ratings_3eed22e2":"標準評級","learning_outcomes_can_be_included_in_assignment_ru_a48bb903":"\\n學習成果可以包括在作業評分標準中，以作為一種簡單的方法，\\n來評估針對特定作業成果的掌握程度。當您定義學習\\n成果時，您也應該定義可以在創建\\n作業評分標準時使用的標準。根據需要定義評分標準欄，並指定\\n將被用於定義此成果的掌握程度的臨界分數。","more_information_about_ratings_57cdd446":"更多有關評分的資訊"}}'))
var ge=a["default"].scoped("outcomesCriterionInfo")
const fe=()=>ge.t("\nLearning outcomes can be included in assignment rubrics as an easy way to assess\nmastery of outcomes aligned to specific assignments.  When you define a learning\noutcome, you should also define a criterion that can be used when building\nassignment rubrics.  Define as many rubric columns as you need, and specify a\npoint threshold that will be used to define mastery of this outcome.\n")
var he=Object(Y["a"])(pe["a"],{})
class be extends ee.a.Component{constructor(e){super(e)
this.handleButtonClick=()=>{this.setState(e=>({open:!e.open}))}
this.state={open:false}}renderCloseButton(){return Object(Y["a"])(de["a"],{placement:"end",offset:"medium",variant:"icon",onClick:this.handleButtonClick},void 0,ge.t("Close"))}renderModal(){if(this.state.open)return Object(Y["a"])(me["a"],{as:"form",open:this.state.open,onDismiss:()=>{this.setState({open:false})},size:"medium",label:ge.t("Criterion Ratings"),shouldCloseOnDocumentClick:true},void 0,Object(Y["a"])(me["a"].Header,{},void 0,this.renderCloseButton(),Object(Y["a"])(ue["a"],{},void 0,ge.t("Criterion Ratings"))),Object(Y["a"])(me["a"].Body,{},void 0,Object(Y["a"])(le["a"],{lineHeight:"double"},void 0,fe())))}render(){return Object(Y["a"])("span",{},void 0,Object(Y["a"])(ne["a"],{variant:"icon",icon:he,onClick:this.handleButtonClick},void 0,Object(Y["a"])(_e["a"],{},void 0,ge.t("More Information About Ratings"))),this.renderModal())}}var ve=Object(Y["a"])(be,{})
const ye=e=>{ie.a.render(ve,e)}
i("YGE8")
class ke extends k{static initClass(){this.child("calculationMethodFormView","div.outcome-calculation-method-form")
this.prototype.events=f.a.extend({"click .edit_rating":"editRating","click .delete_rating_link":"deleteRating","click .save_rating_link":"saveRating","click .insert_rating":"insertRating","change .calculation_method":"updateCalcMethod","keyup .mastery_points":"changeMasteryPoints"},k.prototype.events)
this.prototype.validations=f.a.extend({display_name(e){if(e.display_name.length>255)return p.t("length_error","Must be 255 characters or less")},mastery_points(e){if(f.a.isNaN(e.mastery_points)||e.mastery_points<0)return p.t("mastery_error","Must be greater than or equal to 0")}},k.prototype.validations)}initialize(e){let t=e.setQuizMastery,i=e.useForScoring
this.setQuizMastery=t
this.useForScoring=i
this.calculationMethodFormView=new E({model:this.model})
this.originalConfirmableValues=this.getFormData()
super.initialize(...arguments)}submit(e){null!=e&&e.preventDefault()
const t=this.getFormData()
return se({changed:!f.a.isEqual(t,this.originalConfirmableValues),assessed:this.model.get("assessed"),hasUpdateableRubrics:this.model.get("has_updateable_rubrics"),modifiedFields:this.getModifiedFields(t),onConfirm:t=>ke.prototype.__proto__.submit.call(this,e)})}getModifiedFields(e){return{masteryPoints:e.mastery_points!==m["a"].parse(this.originalConfirmableValues.mastery_points),scoringMethod:!this.scoringMethodsEqual(e,this.originalConfirmableValues)}}scoringMethodsEqual(e,t){if(e.calculation_method!==t.calculation_method)return false
if(["highest","latest"].includes(e.calculation_method))return true
return m["a"].parse(e.calculation_int)===m["a"].parse(t.calculation_int)}edit(e){super.edit(e)
this.originalConfirmableValues=this.getFormData()
return setTimeout(()=>this.originalConfirmableValues=this.getFormData(),50)}getFormData(){const e=super.getFormData()
e.mastery_points=m["a"].parse(e.mastery_points)
e.ratings=f.a.map(e.ratings,e=>f.a.extend(e,{points:m["a"].parse(e.points)}));["highest","latest"].includes(e.calculation_method)?delete e.calculation_int:e.calculation_int=parseInt(m["a"].parse(e.calculation_int))
return e}editRating(e){e.preventDefault()
const t=o()(e.currentTarget).closest(".rating").index()
const i=o()(".criterion thead tr > th:nth-child(".concat(t+1,")"))
const n=o()(e.currentTarget).parents(".show:first")
const r=n.next()
n.attr("aria-expanded","false").hide()
r.attr("aria-expanded","true").show()
i.find("h5").attr("aria-expanded","false").hide()
return r.find(".outcome_rating_description").focus()}deleteRating(e){e.preventDefault()
if(this.$(".rating").length>1){const t=o()(e.currentTarget)
const i=t.closest(".rating").index()
const n=o()(".criterion thead tr > th:nth-child(".concat(i+1,")"))
let r=t.closest(".rating").prev().find(".insert_rating")
0===r.length&&(r=t.closest(".rating").next().find(".edit_rating"))
n.remove()
t.closest("td").remove()
r.focus()
return this.updateRatings()}}saveRating(e){e.preventDefault()
const t=o()(e.currentTarget).closest(".rating").index()
const i=o()(".criterion thead tr > th:nth-child(".concat(t+1,")"))
const n=o()(e.currentTarget).parents(".edit:first")
const r=n.prev()
i.find("h5").text(n.find("input.outcome_rating_description").val())
let a=m["a"].parse(n.find("input.outcome_rating_points").val())
a=f.a.isNaN(a)?0:p.n(a,{precision:2,strip_insignificant_zeros:true})
r.find(".points").text(a)
n.attr("aria-expanded","false").hide()
r.attr("aria-expanded","true").show()
i.find("h5").attr("aria-expanded","true").show()
r.find(".edit_rating").focus()
return this.updateRatings()}insertRating(e){e.preventDefault()
const t=o()(V({description:"",points:"",_index:99}))
const i=o()(e.currentTarget).closest(".rating-header").index()
const n=o()(L({description:"",_index:99}))
const r=o()(".criterion tbody tr")
o()(e.currentTarget).closest(".rating-header").after(n)
r.find("> td:nth-child(".concat(i+1,")")).after(t)
t.find(".show").hide().next().show(200)
n.hide().show(200)
t.find(".edit input:first").focus()
return this.updateRatings()}updateCalcMethod(e){null!=e&&e.preventDefault()
return this.model.set({calculation_method:o()(e.target).val()})}changeMasteryPoints(e){this.timeout&&clearTimeout(this.timeout)
return this.timeout=setTimeout(()=>{const t=m["a"].parse(o()(e.target).val())
if(f.a.isNaN(t))return
if(t>=0&&t<=this.model.get("points_possible")){this.model.set({mastery_points:t})
this.calculationMethodFormView&&this.calculationMethodFormView.render()}},500)}updateRatings(){let e=0
const t=this.$(".rating")
for(let i=0;i<t.length;i++){const n=t[i]
const r=o()(n).find(".outcome_rating_points").val()||0
e=f.a.max([e,m["a"].parse(r)])
for(const e of Array.from(o()(n).find("input")))o()(e).attr("name",e.name.replace(/\[[0-9]+\]/,"[".concat(i,"]")))}const i=this.$(".points_possible")
i.html(o.a.raw(p.t("%{points_possible} Points",{points_possible:p.n(e,{precision:2,strip_insignificant_zeros:true})})))
return this.model.set({points_possible:e})}screenreaderTitleFocus(){return this.$(".screenreader-outcome-title").focus()}render(){const e=this.model.present()
e.html_url="".concat(ENV.CONTEXT_URL_ROOT,"/outcomes/").concat(e.id)
this.calculationMethodFormView.state=this.state
switch(this.state){case"edit":case"add":this.$el.html(Q(f.a.extend(e,{calculationMethods:this.model.calculationMethods(),use_rce_enhancements:ENV.use_rce_enhancements})))
ye(this.$el.find("#react-info-link")[0])
this.readyForm()
break
case"loading":this.$el.empty()
break
default:e.points_possible||(e.points_possible=0)
e.mastery_points||(e.mastery_points=0)
var t=!this.readOnly()&&this.model.canManage()
var i=t&&this.model.isNative()
var n=t&&this.model.outcomeLink.can_unlink
this.$el.html(P(f.a.extend(e,{can_manage:t,can_edit:i,can_unlink:n,setQuizMastery:this.setQuizMastery,useForScoring:this.useForScoring,isLargeRoster:ENV.IS_LARGE_ROSTER,assessedInContext:!this.readOnly()&&(this.model.outcomeLink.assessed||this.model.isNative()&&this.model.get("assessed"))})))}this.$("input:first").focus()
this.screenreaderTitleFocus()
this._afterRender()
return this}}ke.initClass()
Object(s["a"])(JSON.parse('{"ar":{"delete_outcome_group_6b399d34":"حذف مجموعة النتائج","edit_outcome_group_f82e0210":"تعديل مجموعة النتائج","move_abf00365":"نقل","move_outcome_group_cfa1a505":"نقل مجموعة النتائج","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"حذف","edit_outcome_group":"تحرير"}}}},"cy":{"delete_outcome_group_6b399d34":"Dileu Grŵp Deilliannau","edit_outcome_group_f82e0210":"Golygu Grŵp Deilliannau","move_abf00365":"Symud","move_outcome_group_cfa1a505":"Symud Grŵp o Ddeilliannau","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Dileu","edit_outcome_group":"Golygu"}}}},"da":{"delete_outcome_group_6b399d34":"Slet gruppe for læringsudbytte","edit_outcome_group_f82e0210":"Rediger gruppe for læringsudbytte","move_abf00365":"Flyt","move_outcome_group_cfa1a505":"Flyt læringsudbyttegruppe","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Slet","edit_outcome_group":"Rediger"}}}},"da-x-k12":{"delete_outcome_group_6b399d34":"Slet gruppe for læringsudbytte","edit_outcome_group_f82e0210":"Rediger gruppe for læringsudbytte","move_abf00365":"Flyt","move_outcome_group_cfa1a505":"Flyt læringsudbyttegruppe","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Slet","edit_outcome_group":"Rediger"}}}},"de":{"delete_outcome_group_6b399d34":"Lernzielgruppe löschen","edit_outcome_group_f82e0210":"Lernzielgruppe bearbeiten","move_abf00365":"Verschieben","move_outcome_group_cfa1a505":"Lernzielgruppe verschieben","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Löschen","edit_outcome_group":"Ändern"}}}},"el":{"move_abf00365":"Μετακίνησε","move_outcome_group_cfa1a505":"Μετακίνηση Ομάδας Αποτελεσμάτων","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Διαγραφή Ομάδας Αποτελεσμάτων","edit_outcome_group":"Επεξεργασία Ομάδας Αποτελεσμάτων"}}}},"en-AU":{"delete_outcome_group_6b399d34":"Delete Outcome Group","edit_outcome_group_f82e0210":"Edit Outcome Group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move Outcome Group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"en-AU-x-unimelb":{"delete_outcome_group_6b399d34":"Delete Outcome Group","edit_outcome_group_f82e0210":"Edit Outcome Group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move Outcome Group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"en-CA":{"delete_outcome_group_6b399d34":"Delete Outcome Group","edit_outcome_group_f82e0210":"Edit Outcome Group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move Outcome Group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"en-GB":{"delete_outcome_group_6b399d34":"Delete outcome group","edit_outcome_group_f82e0210":"Edit outcome group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move outcome group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"en-GB-x-lbs":{"delete_outcome_group_6b399d34":"Delete outcome group","edit_outcome_group_f82e0210":"Edit outcome group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move outcome group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"en-GB-x-ukhe":{"delete_outcome_group_6b399d34":"Delete outcome group","edit_outcome_group_f82e0210":"Edit outcome group","move_abf00365":"Move","move_outcome_group_cfa1a505":"Move outcome group","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Delete","edit_outcome_group":"Edit"}}}},"es":{"delete_outcome_group_6b399d34":"Eliminar grupo de competencias","edit_outcome_group_f82e0210":"Editar grupo de competencias","move_abf00365":"Mover","move_outcome_group_cfa1a505":"Mover grupo de competencias","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Eliminar","edit_outcome_group":"Editar"}}}},"fa":{"delete_outcome_group_6b399d34":"حذف گروه نتیجه","edit_outcome_group_f82e0210":"ویرایش گروه نتیجه","move_abf00365":"انتقال","move_outcome_group_cfa1a505":"انتقال گروه نتیجه","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"حذف","edit_outcome_group":"ویرایش"}}}},"fi":{"delete_outcome_group_6b399d34":"Poista tulosryhmä","edit_outcome_group_f82e0210":"Muokkaa tulosryhmää","move_abf00365":"Siirrä","move_outcome_group_cfa1a505":"Siirrä tulosryhmä","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Poista","edit_outcome_group":"Muokkaa"}}}},"fr":{"delete_outcome_group_6b399d34":"Supprimer le groupe d\'acquis","edit_outcome_group_f82e0210":"Modifier le groupe d\'acquis","move_abf00365":"Déplacer","move_outcome_group_cfa1a505":"Déplacer le groupe d\'acquis","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Supprimer","edit_outcome_group":"Modifier"}}}},"fr-CA":{"delete_outcome_group_6b399d34":"Supprimer le groupe de résultats","edit_outcome_group_f82e0210":"Modifier le groupe de résultats","move_abf00365":"Déplacer","move_outcome_group_cfa1a505":"Déplacer le groupe de résultats","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Supprimer","edit_outcome_group":"Modifier"}}}},"he":{"delete_outcome_group_6b399d34":"ביטול קבוצת השגי למידה","edit_outcome_group_f82e0210":"עריכת קבוצת השגים","move_abf00365":"העברה","move_outcome_group_cfa1a505":"העברה של קבוצת תוצאות למידה","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"ביטול","edit_outcome_group":"עריכה"}}}},"ht":{"delete_outcome_group_6b399d34":"Efase Gwoup Rezilta","edit_outcome_group_f82e0210":"Modifye Gwoup Rezilta","move_abf00365":"Deplase","move_outcome_group_cfa1a505":"Deplase Rezilta Gwoup","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Efase","edit_outcome_group":"Modifye"}}}},"hu":{"delete_outcome_group_6b399d34":"Tanulási eredménycsoport törlése","edit_outcome_group_f82e0210":"Tanulási eredménycsoport szerkesztése","move_abf00365":"Áthelyezés","move_outcome_group_cfa1a505":"Tanulási eredménycsoport áthelyezése","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Törlés","edit_outcome_group":"Szerkesztés"}}}},"hy":{"move_abf00365":"Տեղափոխել","move_outcome_group_cfa1a505":"Տեղափոխել արդյունքների խումբը"},"is":{"delete_outcome_group_6b399d34":"Eyða niðurstöðuhópi","edit_outcome_group_f82e0210":"Breyta niðurstöðuhópi","move_abf00365":"Færa","move_outcome_group_cfa1a505":"Færa niðurstöðuhóp","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Eyða","edit_outcome_group":"Breyta"}}}},"it":{"delete_outcome_group_6b399d34":"Elimina gruppo di esiti","edit_outcome_group_f82e0210":"Modifica gruppo esiti","move_abf00365":"Sposta","move_outcome_group_cfa1a505":"Sposta gruppo di esiti","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Elimina","edit_outcome_group":"Modifica"}}}},"ja":{"delete_outcome_group_6b399d34":"結果グループを削除する","edit_outcome_group_f82e0210":"結果グループを編集する","move_abf00365":"移動","move_outcome_group_cfa1a505":"成果グループの移動","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"削除","edit_outcome_group":"編集"}}}},"ko":{"move_abf00365":"이동"},"mi":{"delete_outcome_group_6b399d34":"Muku Rōpū Huanga","edit_outcome_group_f82e0210":"Whakatika Rōpū Huanga","move_abf00365":"Nuku","move_outcome_group_cfa1a505":"Rōpū Putanga Nuku","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Muku","edit_outcome_group":"Whakatika"}}}},"nb":{"delete_outcome_group_6b399d34":"Slett læringsmålsgruppe","edit_outcome_group_f82e0210":"Rediger læringsmålsgruppe","move_abf00365":"Flytt","move_outcome_group_cfa1a505":"Flytt gruppen av læringsmål","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Slett","edit_outcome_group":"Rediger"}}}},"nb-x-k12":{"delete_outcome_group_6b399d34":"Slett målgruppe","edit_outcome_group_f82e0210":"Rediger målgruppe","move_abf00365":"Flytt","move_outcome_group_cfa1a505":"Flytt gruppen av mål","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Slett","edit_outcome_group":"Rediger"}}}},"nl":{"delete_outcome_group_6b399d34":"Leerdoelgroep verwijderen","edit_outcome_group_f82e0210":"Leerdoelgroep bewerken","move_abf00365":"Verplaatsen","move_outcome_group_cfa1a505":"Leerdoelgroep verplaatsen","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Verwijderen","edit_outcome_group":"Bewerken"}}}},"nn":{"delete_outcome_group_6b399d34":"Slett læringsmålgruppe","edit_outcome_group_f82e0210":"Rediger læringsmålgruppe","move_abf00365":"Flytt","move_outcome_group_cfa1a505":"Flytt læringsmålgruppe","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Slett","edit_outcome_group":"Rediger"}}}},"pl":{"delete_outcome_group_6b399d34":"Usuń grupę wyników","edit_outcome_group_f82e0210":"Edytuj grupę wyników","move_abf00365":"Przenieś","move_outcome_group_cfa1a505":"Przenieś grupę wyników","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Usuń","edit_outcome_group":"Edytuj"}}}},"pt":{"delete_outcome_group_6b399d34":"Eliminar grupo de resultados","edit_outcome_group_f82e0210":"Editar grupo de resultados","move_abf00365":"Mover","move_outcome_group_cfa1a505":"Mover grupo de resultados","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Eliminar","edit_outcome_group":"Editar"}}}},"pt-BR":{"delete_outcome_group_6b399d34":"Excluir Grupo do Objetivo","edit_outcome_group_f82e0210":"Editar Grupo do Objetivo","move_abf00365":"Mover","move_outcome_group_cfa1a505":"Mover grupo de objetivos","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Excluir","edit_outcome_group":"Editar"}}}},"ru":{"delete_outcome_group_6b399d34":"Удалить группу результатов","edit_outcome_group_f82e0210":"Редактировать группу результатов","move_abf00365":"Переместить","move_outcome_group_cfa1a505":"Переместить группу результатов","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Удалить","edit_outcome_group":"Редактировать"}}}},"sl":{"delete_outcome_group_6b399d34":"Izbriši skupino izidov","edit_outcome_group_f82e0210":"Uredi skupino izida","move_abf00365":"Premakni","move_outcome_group_cfa1a505":"Premakni skupino izidov","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Odstrani","edit_outcome_group":"Uredi"}}}},"sv":{"delete_outcome_group_6b399d34":"Ta bort lärandemåls-grupp","edit_outcome_group_f82e0210":"Ändra lärandemåls-grupp","move_abf00365":"Flytta","move_outcome_group_cfa1a505":"Flytta bedömningsgrupp","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Radera","edit_outcome_group":"Redigera"}}}},"sv-x-k12":{"delete_outcome_group_6b399d34":"Ta bort lärandemåls-grupp","edit_outcome_group_f82e0210":"Ändra lärandemåls-grupp","move_abf00365":"Flytta","move_outcome_group_cfa1a505":"Flytta bedömningsgrupp","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Radera","edit_outcome_group":"Redigera"}}}},"tr":{"delete_outcome_group_6b399d34":"Öğrenme Çıktısı Grubunu Sil","edit_outcome_group_f82e0210":"Öğrenme Çıktısı Grubunu Düzenle","move_abf00365":"Taşı","move_outcome_group_cfa1a505":"Öğrenme Çıktı Grubunu Taşı","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Sil","edit_outcome_group":"Düzenle"}}}},"uk":{"delete_outcome_group_6b399d34":"Видалити результати групи","edit_outcome_group_f82e0210":"Редагувати групу результатів","move_abf00365":"Перемітитися","move_outcome_group_cfa1a505":"Перемістити результати групи","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"Видалити","edit_outcome_group":"Редагувати"}}}},"zh-Hans":{"delete_outcome_group_6b399d34":"删除结果小组","edit_outcome_group_f82e0210":"编辑结果小组","move_abf00365":"移动","move_outcome_group_cfa1a505":"移动结果组","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"删除","edit_outcome_group":"编辑"}}}},"zh-Hant":{"delete_outcome_group_6b399d34":"刪除成果群組","edit_outcome_group_f82e0210":"編輯成果群組","move_abf00365":"移動","move_outcome_group_cfa1a505":"移動成果群組","outcomes":{"outcome_group":{"links":{"delete_outcome_group":"刪除","edit_outcome_group":"編輯"}}}}}'))
a["default"].scoped("outcomes.outcome_group")
var we=z.a.default
var ze=we.template,Se=we.templates=we.templates||{}
var je="outcomes/outcomeGroup"
Se[je]=ze((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s="",c=i.helperMissing,_=this.escapeExpression,d="function",u=this
function l(e,t){var n,r,o=""
o+='\n  <a href="#" style="float:left" class="move_button move_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+_((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"move_abf00365","Move",r):c.call(e,"t","move_abf00365","Move",r)))+'</span>\n    <span class="screenreader-only">'+_((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"move_outcome_group_cfa1a505","Move Outcome Group",r):c.call(e,"t","move_outcome_group_cfa1a505","Move Outcome Group",r)))+'</span>\n  </a>\n  <a href="#" style="float:left" class="edit_button edit_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+_((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome_group"},data:t},n?n.call(e,"links.edit_outcome_group","Edit",r):c.call(e,"t","links.edit_outcome_group","Edit",r)))+'</span>\n    <span class="screenreader-only">'+_((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"edit_outcome_group_f82e0210","Edit Outcome Group",r):c.call(e,"t","edit_outcome_group_f82e0210","Edit Outcome Group",r)))+'</span>\n  </a>\n  <a href="#" style="float:left" class="delete_button delete_group_button ui-button ui-widget ui-state-default ui-corner-all" role="button">\n    <span aria-hidden="true">'+_((n=i.t||e&&e.t,r={hash:{scope:"outcomes.outcome_group"},data:t},n?n.call(e,"links.delete_outcome_group","Delete",r):c.call(e,"t","links.delete_outcome_group","Delete",r)))+'</span>\n    <span class="screenreader-only">'+_((n=i.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"delete_outcome_group_6b399d34","Delete Outcome Group",r):c.call(e,"t","delete_outcome_group_6b399d34","Delete Outcome Group",r)))+"</span>\n  </a>\n"
return o}s+='<h2 class="title">\n  <i class="icon-folder"></i>\n  '
if(a=i.title)o=a.call(t,{hash:{},data:r})
else{a=t&&t.title
o=typeof a===d?a.call(t,{hash:{},data:r}):a}s+=_(o)+'\n</h2>\n<div class="description">\n  '
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===d?a.call(t,{hash:{},data:r}):a}(o||0===o)&&(s+=o)
s+="\n</div>\n\n"
o=i["if"].call(t,t&&t.canManage,{hash:{},inverse:u.noop,fn:u.program(1,l,r),data:r});(o||0===o)&&(s+=o)
s+="\n"
return s}))
var xe=Se[je]
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","save":"حفظ"},"new_outcome_group_af59f145":"مجموعة نتائج جديدة","outcomes":{"outcome_group_form":{"group_description":"وصف هذه المجموعة","title":"تسمية هذه المجموعة"}}},"cy":{"buttons":{"cancel":"Canslo","save":"Cadw"},"new_outcome_group_af59f145":"Grŵp Deilliannau Newydd","outcomes":{"outcome_group_form":{"group_description":"Disgrifiwch y grŵp hwn","title":"Enw’r grŵp hwn"}}},"da":{"buttons":{"cancel":"Annuller","save":"Gem"},"new_outcome_group_af59f145":"Ny læringsudbytte-gruppe","outcomes":{"outcome_group_form":{"group_description":"Beskriv denne gruppe","title":"Navngiv denne gruppe"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","save":"Gem"},"new_outcome_group_af59f145":"Ny læringsudbytte-gruppe","outcomes":{"outcome_group_form":{"group_description":"Beskriv denne gruppe","title":"Navngiv denne gruppe"}}},"de":{"buttons":{"cancel":"Abbrechen","save":"Speichern"},"new_outcome_group_af59f145":"Neue Lernzielgruppe","outcomes":{"outcome_group_form":{"group_description":"Diese Gruppe beschreiben","title":"Diese Gruppe benennen"}}},"el":{"buttons":{"cancel":"Ακύρωση","save":"Αποθήκευση"},"outcomes":{"outcome_group_form":{"group_description":"Περιγράψτε αυτή την ομάδα","title":"Όνομα Ομάδας"}}},"en-AU":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New Outcome Group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New Outcome Group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"en-CA":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New Outcome Group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"en-GB":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New outcome group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New outcome group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","save":"Save"},"new_outcome_group_af59f145":"New outcome group","outcomes":{"outcome_group_form":{"group_description":"Describe this group","title":"Name this group"}}},"es":{"buttons":{"cancel":"Cancelar","save":"Guardar"},"new_outcome_group_af59f145":"Nuevo grupo de competencias","outcomes":{"outcome_group_form":{"group_description":"Describa este grupo","title":"Nombre este grupo"}}},"fa":{"buttons":{"cancel":"لغو","save":"ذخیره سازی"},"new_outcome_group_af59f145":"گروه جدید نتیجه","outcomes":{"outcome_group_form":{"group_description":"این گروه را شرح دهید","title":"این گروه را نام گذاری کنید"}}},"fi":{"buttons":{"cancel":"Peruuta","save":"Tallenna"},"new_outcome_group_af59f145":"Uusi tulosryhmä","outcomes":{"outcome_group_form":{"group_description":"Kuvaa tämä ryhmä","title":"Nimeä tämä ryhmä"}}},"fr":{"buttons":{"cancel":"Annuler","save":"Enregistrer"},"new_outcome_group_af59f145":"Nouveau groupe d\'acquis","outcomes":{"outcome_group_form":{"group_description":"Décrire ce groupe","title":"Attribuer un nom à ce groupe"}}},"fr-CA":{"buttons":{"cancel":"Annuler","save":"Enregistrer"},"new_outcome_group_af59f145":"Nouveau groupe de résultats","outcomes":{"outcome_group_form":{"group_description":"Décrire ce groupe","title":"Attribuer un nom à ce groupe"}}},"he":{"buttons":{"cancel":"ביטול","save":"שמירה"},"new_outcome_group_af59f145":"קבוצת השגי למידה חדשה","outcomes":{"outcome_group_form":{"group_description":"תיאור קבוצה זו","title":"מתן שם לקבוצה זו"}}},"ht":{"buttons":{"cancel":"Anile","save":"Anrejistre"},"new_outcome_group_af59f145":"Nouvo Rezilta Gwoup","outcomes":{"outcome_group_form":{"group_description":"Dekri gwoup sa a","title":"Bay gwoup sa a non"}}},"hu":{"buttons":{"cancel":"Mégse","save":"Mentés"},"new_outcome_group_af59f145":"Új tanulási eredménycsoport","outcomes":{"outcome_group_form":{"group_description":"A csoport leírása","title":"A csoport elnevezése"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","save":"Պահպանել"},"outcomes":{"outcome_group_form":{"group_description":"Նկարագրել այս խումբը","title":"Նշել այս խումբը"}}},"is":{"buttons":{"cancel":"Hætta við","save":"Vista"},"new_outcome_group_af59f145":"Nýr niðurstöðuhópur","outcomes":{"outcome_group_form":{"group_description":"Lýsa þessum hópi","title":"Nefna þennan hóp"}}},"it":{"buttons":{"cancel":"Annulla","save":"Salva"},"new_outcome_group_af59f145":"Nuovo gruppo di esiti","outcomes":{"outcome_group_form":{"group_description":"Descrivi questo gruppo","title":"Assegna un nome a questo gruppo"}}},"ja":{"buttons":{"cancel":"キャンセル","save":"保存"},"new_outcome_group_af59f145":"新しい成果グループ","outcomes":{"outcome_group_form":{"group_description":"このグループを説明する","title":"このグループの名前を指定する"}}},"ko":{"buttons":{"cancel":"취소","save":"저장"},"outcomes":{"outcome_group_form":{"group_description":"이 그룹의 설명","title":"이 그룹의 이름"}}},"mi":{"buttons":{"cancel":"Whakakore","save":"Tiaki"},"new_outcome_group_af59f145":"Rōpū Huanga hou","outcomes":{"outcome_group_form":{"group_description":"Te whakāhua i tēnei rōpū","title":"Whakaingoatia tēnei rōpū"}}},"nb":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"new_outcome_group_af59f145":"Ny gruppe for læringsmål","outcomes":{"outcome_group_form":{"group_description":"Beskriv denne gruppen","title":"Navngi gruppen"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"new_outcome_group_af59f145":"Ny gruppe for mål","outcomes":{"outcome_group_form":{"group_description":"Beskriv denne gruppen","title":"Navngi gruppen"}}},"nl":{"buttons":{"cancel":"Annuleren","save":"Opslaan"},"new_outcome_group_af59f145":"Nieuwe resultatengroep","outcomes":{"outcome_group_form":{"group_description":"Beschrijf deze groep","title":"Geef deze groep een naam"}}},"nn":{"buttons":{"cancel":"Avbryt","save":"Lagre"},"new_outcome_group_af59f145":"Ny læringsmålgruppe","outcomes":{"outcome_group_form":{"group_description":"Skildre gruppa","title":"Set namn på gruppa"}}},"pl":{"buttons":{"cancel":"Anuluj","save":"Zapisz"},"new_outcome_group_af59f145":"Nowa grupa wyników","outcomes":{"outcome_group_form":{"group_description":"Opisz tę grupę","title":"Nazwij tę grupę"}}},"pt":{"buttons":{"cancel":"Cancelar","save":"Guardar"},"new_outcome_group_af59f145":"Novo grupo de resultados","outcomes":{"outcome_group_form":{"group_description":"Descrever este grupo","title":"Dar nome a este grupo"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","save":"Salvar"},"new_outcome_group_af59f145":"Novo grupo de objetivos","outcomes":{"outcome_group_form":{"group_description":"Descrever este grupo","title":"Nomear este grupo"}}},"ru":{"buttons":{"cancel":"Отменить","save":"Сохранить"},"new_outcome_group_af59f145":"Новая группа результатов","outcomes":{"outcome_group_form":{"group_description":"Описать эту группу","title":"Дать название этой группе"}}},"sl":{"buttons":{"cancel":"Prekliči","save":"Shrani"},"new_outcome_group_af59f145":"Nova skupina izidov","outcomes":{"outcome_group_form":{"group_description":"Opiši to skupino","title":"Poimenuj to skupino"}}},"sv":{"buttons":{"cancel":"Avbryt","save":"Spara"},"new_outcome_group_af59f145":"Ny grupp för lärandemål","outcomes":{"outcome_group_form":{"group_description":"Beskriv gruppen","title":"Namnge gruppen"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","save":"Spara"},"new_outcome_group_af59f145":"Ny grupp för lärandemål","outcomes":{"outcome_group_form":{"group_description":"Beskriv gruppen","title":"Namnge gruppen"}}},"tr":{"buttons":{"cancel":"İptal","save":"Kaydet"},"new_outcome_group_af59f145":"Yeni Öğrenme Çıktısı Grubu","outcomes":{"outcome_group_form":{"group_description":"Bu grup ile ilgili açıklama","title":"Bu gruba isim verin"}}},"uk":{"buttons":{"cancel":"Скасувати","save":"Зберегти"},"new_outcome_group_af59f145":"Новий результат групи","outcomes":{"outcome_group_form":{"group_description":"Опишіть цю групу","title":"Ім\'я цієї групи"}}},"zh-Hans":{"buttons":{"cancel":"取消","save":"保存"},"new_outcome_group_af59f145":"新结果小组","outcomes":{"outcome_group_form":{"group_description":"说明此小组","title":"命名此小组"}}},"zh-Hant":{"buttons":{"cancel":"取消","save":"保存"},"new_outcome_group_af59f145":"新成果群組","outcomes":{"outcome_group_form":{"group_description":"描述此群組","title":"命名此群組"}}}}'))
a["default"].scoped("outcomes.outcome_group_form")
var Ce=z.a.default
var Oe=Ce.template,Ee=Ce.templates=Ce.templates||{}
var Ae="outcomes/outcomeGroupForm"
Ee[Ae]=Oe((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c="",_="function",d=this.escapeExpression,u=i.helperMissing
c+='<form action="'
if(a=i.url)o=a.call(t,{hash:{},data:r})
else{a=t&&t.url
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'" class="outcome_group" method="post">\n  <label for="outcome_group_title">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_group_form"},data:r},a?a.call(t,"title","Name this group",s):u.call(t,"t","title","Name this group",s)))+':</label>\n  <input id="outcome_group_title" class="outcome_title" name="title" size="50" type="text" placeholder="'+d((a=i.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:r},a?a.call(t,"new_outcome_group_af59f145","New Outcome Group",s):u.call(t,"t","new_outcome_group_af59f145","New Outcome Group",s)))+'" value="'
if(a=i.title)o=a.call(t,{hash:{},data:r})
else{a=t&&t.title
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'">\n  <label for="outcome_group_description">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_group_form"},data:r},a?a.call(t,"group_description","Describe this group",s):u.call(t,"t","group_description","Describe this group",s)))+':</label>\n  <textarea cols="40" id="outcome_group_description" name="description" rows="20" style="width: 100%; height: 150px;">'
if(a=i.description)o=a.call(t,{hash:{},data:r})
else{a=t&&t.description
o=typeof a===_?a.call(t,{hash:{},data:r}):a}c+=d(o)+'</textarea>\n  <div class="button-container pull-right">\n    <button type="button" class="btn cancel_button">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_group_form"},data:r},a?a.call(t,"#buttons.cancel","Cancel",s):u.call(t,"t","#buttons.cancel","Cancel",s)))+'</button>\n    <button type="submit" class="btn btn-primary submit_button">'+d((a=i.t||t&&t.t,s={hash:{scope:"outcomes.outcome_group_form"},data:r},a?a.call(t,"#buttons.save","Save",s):u.call(t,"t","#buttons.save","Save",s)))+"</button>\n  </div>\n</form>\n"
return c}))
var De=Ee[Ae]
class Ne extends k{render(){const e=this.model.toJSON()
switch(this.state){case"edit":case"add":this.$el.html(De(e))
this.readyForm()
break
case"loading":this.$el.empty()
break
default:var t=!this.readOnly()&&this.model.get("can_edit")
this.$el.html(xe(f.a.extend(e,{canManage:t})))}this.$("input:first").focus()
return this}}var Me=i("VAoc")
var Pe=i("Cf7h")
var qe=function(){function e(){}e.prototype.find=function(){var e,t
e=null
t=Object(Pe["a"])(ENV.context_asset_string||"")
e=new l["a"]
e.url="/api/v1/"+t[0]+"/"+t[1]+"/root_outcome_group"
e.fetch()
return[e]}
return e}()
var Be=i("EvX+")
var Te=z.a.default
var Ie=Te.template,Le=Te.templates=Te.templates||{}
var Re="MoveOutcomeDialog"
Le[Re]=Ie((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
return"<div>\n  <form class='form-dialog'>\n    <div class='form-dialog-content'>\n    </div>\n    <div class='form-controls'>\n      <input type='button' class='btn' value='Cancel'>\n      <input type='submit' class='btn btn-primary' value='Move'>\n    </div>\n  <form>\n</div>"}))
Be["a"].loadStylesheet("jst/MoveOutcomeDialog",{new_styles_normal_contrast:{combinedChecksum:"9d1c3f4686"},new_styles_high_contrast:{combinedChecksum:"9d1c3f4686"},responsive_layout_normal_contrast:{combinedChecksum:"9d1c3f4686"},responsive_layout_high_contrast:{combinedChecksum:"9d1c3f4686"},new_styles_normal_contrast_rtl:{combinedChecksum:"9d1c3f4686"},new_styles_high_contrast_rtl:{combinedChecksum:"9d1c3f4686"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"9d1c3f4686"},responsive_layout_high_contrast_rtl:{combinedChecksum:"9d1c3f4686"}}[Be["a"].getCssVariant()])
var Ge=Le[Re]
Object(s["a"])(JSON.parse('{"ar":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"لا توجد نتائج. *انقر هنا* لإنشاء واحدة."},"cy":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Does gennych chi ddim deilliannau. *Cliciwch yma* i greu un."},"da":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har ingen læringsudbytter. *Klik her* for at oprette et."},"da-x-k12":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har ingen læringsudbytter. *Klik her* for at oprette et."},"de":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Es liegen keine Lernziele für Sie vor. *Klicken Sie hier*, um eines zu erstellen."},"el":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"\\u003cmrk mid=\\"1256\\" mtype=\\"seg\\"\\u003eΔεν έχετε αποτελέσματα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"1257\\" mtype=\\"seg\\"\\u003e*Κάντε κλικ εδώ* για να δημιουργήσετε.\\u003c/mrk\\u003e"},"en-AU":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"en-AU-x-unimelb":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"en-CA":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"en-GB":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"en-GB-x-lbs":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"en-GB-x-ukhe":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"You have no outcomes. *Click here* to create one."},"es":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"No tiene resultados. *Haga clic aquí* para crear uno."},"fa":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"هیچ نتیجه ای ندارید. برای ایجاد یک نتیجه، *اینجا کلیک کنید*."},"fi":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Sinulla ei ole tuloksia. *Napsauta tästä* luodaksesi sellainen."},"fr":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Vous n’avez pas d\'acquis. *Cliquez ici* pour en créer un."},"fr-CA":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Vous n’avez pas de résultats. *Cliquez ici* pour en créer un."},"he":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"אין לך תוצאות למידה. *הקלק/י כאן* כדי ליצור תוצאה."},"ht":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Ou pa gen rezilta. *Klike la* pou ka kreye yonn."},"hu":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Nincs tanulási eredmény. *Kattintson ide* a létrehozáshoz."},"hy":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Դուք արդյունքներ չունեք: *Սեղմեք այստեղ* արդյունք ստեղծելու համար:"},"is":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Þú hefur engar niðurstöður. *Smelltu hér* til að stofna eina."},"it":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Non hai esiti. *Fai clic qui* per crearne uno."},"ja":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"成果がありません。作成するには *ここをクリック* します。"},"mi":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"E koe kahore putanga. * Pāwhiri ki konei * ki te waihanga kotahi."},"nb":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har ingen læringsmål. *Klikk her* for å opprette et."},"nb-x-k12":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har ingen mål. *Klikk her* for å opprette et."},"nl":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Je hebt geen resultaten. *Klik hier* om er één te maken."},"nn":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har ingen læringsmål. *Klikk her* for å opprette eit."},"pl":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Nie masz wyników. *Kliknij tutaj*, aby utworzyć wynik."},"pt":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Não tem resultados. *Clique aqui* para criar um."},"pt-BR":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Você não tem objetivos. *Clique aqui* para criar um."},"ru":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"У вас нет результатов. *Щелкните здесь*, чтобы создать результат."},"sl":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Nimate učnih izidov. *Kliknite tukaj,* da ga ustvarite."},"sv":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har inga lärandemål. *Klicka här* för att skapa ett."},"sv-x-k12":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Du har inga lärandemål. *Klicka här* för att skapa ett."},"tr":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Hiç öğrenme çıktınız yok. Oluşturmak için *buraya tıklayın*."},"uk":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"Ви не маєте результатів. * Натисніть тут *, щоб створити їх."},"zh-Hans":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"您没有结果。*单击此处* 创建一个结果。"},"zh-Hant":{"you_have_no_outcomes_click_here_to_create_one_ebf262a3":"您沒有成果。*按一下此處* 創建一個成果。"}}'))
a["default"].scoped("outcomes.no_outcomes_warning")
var Fe=z.a.default
var Ue=Fe.template,Ve=Fe.templates=Fe.templates||{}
var He="outcomes/noOutcomesWarning"
Ve[He]=Ue((function(e,t,i,n,r){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
r=r||{}
var o,a,s,c,_="",d=i.helperMissing,u=this.escapeExpression
_+='<div class="no-outcomes-warning">\n  <div class="alert" role="alert">\n    '
o=(s=i.__i18nliner_escape||t&&t.__i18nliner_escape,c={hash:{},data:r},s?s.call(t,t&&t.noOutcomesLinkLabel,c):d.call(t,"__i18nliner_escape",t&&t.noOutcomesLinkLabel,c))
a=(s=i.__i18nliner_escape||t&&t.__i18nliner_escape,c={hash:{},data:r},s?s.call(t,t&&t.addOutcomesUrl,c):d.call(t,"__i18nliner_escape",t&&t.addOutcomesUrl,c))
o=(s=i.__i18nliner_concat||t&&t.__i18nliner_concat,c={hash:{},data:r},s?s.call(t,'<a href="',a,'" aria-label="',o,'">$1</a>',c):d.call(t,"__i18nliner_concat",'<a href="',a,'" aria-label="',o,'">$1</a>',c))
_+=u((s=i.t||t&&t.t,c={hash:{w0:o,i18n_inferred_key:true},data:r},s?s.call(t,"you_have_no_outcomes_click_here_to_create_one_ebf262a3","You have no outcomes. *Click here* to create one.",c):d.call(t,"t","you_have_no_outcomes_click_here_to_create_one_ebf262a3","You have no outcomes. *Click here* to create one.",c)))+"\n  </div>\n</div>\n"
return _}))
var We=Ve[He]
var Ke=i("fPNa")
var Je=i("teYS")
i.d(t,"a",(function(){return Qe}))
class Qe extends d.a.View{initialize(e){let t=e.readOnly,i=e.setQuizMastery,n=e.useForScoring,r=e.instructionsTemplate,o=e.renderInstructions
this.readOnly=t
this.setQuizMastery=i
this.useForScoring=n
this.instructionsTemplate=r
this.renderInstructions=o
super.initialize(...arguments)
Object(Je["subscribe"])("renderNoOutcomeWarning",this.renderNoOutcomeWarning.bind(this))
Object(Je["subscribe"])("clearNoOutcomeWarning",this.clearNoOutcomeWarning.bind(this))
return this.render()}show(e){if(null!=e?e.isNew():void 0)return
return this._show({model:e})}add(e){this._show({model:e,state:"add"})
this.trigger("adding")
return this.innerView.on("addSuccess",e=>this.trigger("addSuccess",e))}_show(e){e=Object(n["a"])({},e,{readOnly:this.readOnly,setQuizMastery:this.setQuizMastery,useForScoring:this.useForScoring})
null!=this.innerView&&this.innerView.remove()
this.innerView=(()=>{if(e.model instanceof u["a"])return new ke(e)
if(e.model instanceof l["a"])return new Ne(e)})()
this.render()
if(this.innerView instanceof ke)return this.innerView.screenreaderTitleFocus()}resetContent(){this.innerView=null
return this.render()}render(){this.attachEvents()
const e=(()=>{if(this.innerView)return this.innerView.render().el
if(this.renderInstructions)return this.instructionsTemplate()})()
this.$el.html(e)
return this}attachEvents(){if(null==this.innerView)return
this.innerView.on("deleteSuccess",()=>this.trigger("deleteSuccess"))
return this.innerView.on("move",e=>this.openDialog(e))}openDialog(e){const t=this.createTree()
const i=this.createDialog()
const n={tree:t,window:i,model:e}
o()(t.$el).appendTo(".form-dialog-content")
o()(".form-controls .btn[type=button]").bind("click",()=>i.dialog("close"))
o()(".form-controls .btn[type=submit]").bind("click",e=>{e.preventDefault()
if(t.activeTree){this.trigger("move",n.model,t.activeTree.model)
return n.model.on("finishedMoving",()=>i.dialog("close"))}return o.a.flashError(c.t("No directory is selected, please select a directory before clicking 'move'"))})
o()(n.window).dialog("option","title",c.t("Where would you like to move %{title}?",{title:e.get("title")}))
o()(".ui-dialog :button").blur()
setTimeout(()=>n.tree.focusOnOpen(),200)}createTree(){var e=new Me["a"]({rootModelsFinder:new qe,focusStyleClass:"MoveDialog__folderItem--focused",selectedStyleClass:"MoveDialog__folderItem--selected",onlyShowSubtrees:true,onClick(){Me["a"].prototype.setActiveTree(this,e)}}).render()
return e}createDialog(){const e=o()(Ge()).dialog({dialogClass:"moveDialog",width:600,height:270,open(){o()(this).show()},close(e){o()(this).remove()}})
return e}remove(){return null!=this.innerView?this.innerView.off("addSuccess"):void 0}renderNoOutcomeWarning(){null!=this.$el&&this.$el.empty()
const e=c.t("You have no outcomes. Click here to go to the outcomes page.")
return null!=this.$el?this.$el.append(o.a.raw(We({addOutcomesUrl:"/".concat(this._contextPath(),"/outcomes"),noOutcomesLinkLabel:e}))):void 0}clearNoOutcomeWarning(){return null!=this.$el?this.$el.empty():void 0}}Qe.mixin(Ke["a"])},lkPJ:function(e,t,i){"use strict"
var n=i("ouhR")
var r=i.n(n)
const o={disableInputs(e){const t=r()("body"),i=r()("<div />",{class:"input_cover"})
i.on("mouseleave",(function(e){r()(this).remove()}))
r()(e).on("mouseenter",(function(e){const n=r()(this),o=i.clone(true)
o.css({height:n.height()+12,width:n.width()+12,position:"absolute",left:n.offset().left-6,top:n.offset().top-6,zIndex:15,background:"url(/images/blank.png) 0 0 repeat"})
t.append(o)}))},setWidths(e){r()(e||".answer input[type=text]").each((function(){r()(this).width(9.5*r()(this).val().length)}))}}
t["a"]=o},lzgt:function(e,t,i){"use strict"
i.d(t,"a",(function(){return g}))
var n=i("Ff2n")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("4Awi")
var m=i("sQ3t")
var g=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e=this.props,t=e.children,i=Object(n["a"])(e,["children"])
return Object(m["a"])(t,i)}}])
t.displayName="ComponentIdentifier"
return t}(_["Component"])
g.propTypes={children:l.a.node}
g.defaultProps={children:null}
g.pick=function(e,t){var i
d.a.Children.forEach(t,(function(t){Object(p["a"])(t,[e])&&(i=t)}))
return i}},msMH:function(e,t,i){"use strict"
var n=i("rePB")
var r=i("Ff2n")
var o=i("1OyB")
var a=i("vuIU")
var s=i("md7G")
var c=i("foSv")
var _=i("Ji7U")
var d=i("q1tI")
var u=i.n(d)
var l=i("17x9")
var p=i.n(l)
var m=i("TSYQ")
var g=i.n(m)
var f=i("n12J")
var h=i("J2CL")
var b=i("RhCJ")
var v=i("vwVh")
var y=i("KgFQ")
var k=i("jtGx")
var w=i("oXx0")
function z(e){var t=e.borders,i=e.colors,n=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,primaryInverseColor:i.textLightest,primaryColor:i.textDarkest,secondaryColor:i.textDark,secondaryInverseColor:i.textLight,borderPadding:n.xxxSmall,borderColor:i.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}z.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
i.d(t,"a",(function(){return D}))
var S,j,x,C,O,E
var A={componentId:"baiur",template:function(e){return"\n\n.baiur_bGBk{font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0}\n\ninput.baiur_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.baiur_bGBk[type]{text-align:left}\n\n[dir=rtl] input.baiur_bGBk[type]{text-align:right}\n\ninput.baiur_bGBk[type]:focus{outline:none}\n\n.baiur_fCtg{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.baiur_cVrl{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.baiur_dnfM{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.baiur_KGwv{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.baiur_eYKA{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.baiur_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.baiur_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.baiur_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.baiur_drOs{color:inherit}\n\n.baiur_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.baiur_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.baiur_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.baiur_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}")},root:"baiur_bGBk","level--h1":"baiur_fCtg","level--h2":"baiur_cVrl","level--h3":"baiur_dnfM","level--h4":"baiur_KGwv","level--h5":"baiur_eYKA","level--reset":"baiur_dbSc","border--top":"baiur_bACI","border--bottom":"baiur_kWwi","color--inherit":"baiur_drOs","color--primary":"baiur_eCSh","color--secondary":"baiur_buuG","color--primary-inverse":"baiur_bFtJ","color--secondary-inverse":"baiur_dsSB"}
var D=(S=Object(w["a"])(),j=Object(v["a"])(),x=Object(h["i"])(z,A),S(C=j(C=x(C=(E=O=function(e){Object(_["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(a["a"])(t,[{key:"render",value:function(){var e
var i=this.props,o=i.border,a=i.children,s=i.color,c=i.level,_=i.margin,d=i.elementRef,l=Object(r["a"])(i,["border","children","color","level","margin","elementRef"])
var p=Object(y["a"])(t,this.props,(function(){return"reset"===c?"span":c}))
return u.a.createElement(f["a"],Object.assign({},Object(k["b"])(l),{className:g()((e={},Object(n["a"])(e,A.root,true),Object(n["a"])(e,A["level--".concat(c)],true),Object(n["a"])(e,A["color--".concat(s)],s),Object(n["a"])(e,A["border--".concat(o)],"none"!==o),e)),as:p,margin:_,elementRef:d,__dangerouslyIgnoreExperimentalWarnings:true}),a)}}])
t.displayName="Heading"
return t}(d["Component"]),O.propTypes={border:p.a.oneOf(["none","top","bottom"]),children:b["a"],color:p.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:p.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:p.a.elementType,margin:h["c"].spacing,elementRef:p.a.func},O.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},E))||C)||C)||C)},qx8k:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"quizzes":{"show":{"answers":{"correct":"صحيح!","correct_answers":"الإجابات الصحيحة!","incorrect":"غير صحيح","partial":"جزئي","right":"الإجابة الصحيحة","unanswered":"غير مجاب عليه","you_answered":"أنت أجبت"},"buttons":{"already_published":"تم النشر!","publishing":"جارٍ النشر..."},"confirms":{"delete_quiz":"هل ترغب بالتأكيد في حذف هذا الاختبار؟","delete_quiz_submissions_warning":{"one":"تحذير: لقد خضع طالب واحد بالفعل لهذا الاختبار، وإذا قمت بحذفه فسيتم حذف أي عمليات إرسال مكتملة ولن تظهر بعد الآن في دفتر التقييم","other":"تحذير: لقد خضع %{count} من الطلاب بالفعل لهذا الاختبار، وإذا قمت بحذفه فسيتم حذف أي عمليات إرسال مكتملة ولن تظهر بعد الآن في دفتر التقييم"}},"links":{"hide_student_quiz_results":"إخفاء نتائج اختبار الطالب","hide_student_survey_results":"إخفاء نتائج استطلاع الطالب","show_student_quiz_results":"إظهار نتائج اختبار الطالب","show_student_survey_results":"إظهار نتائج استطلاع الطالب"},"students_who_have_not_taken_the_quiz":"الطلاب الذين لم يجيبوا على الاختبار","students_who_have_taken_the_quiz":"الطلاب الذين أجابوا على الاختبار"}}},"cy":{"quizzes":{"show":{"answers":{"correct":"Cywir!","correct_answers":"Atebion Cywir","incorrect":"Anghywir","partial":"Rhannol","right":"Ateb Cywir","unanswered":"Heb ei ateb","you_answered":"Gwnaethoch chi ateb"},"buttons":{"already_published":"Wedi cyhoeddi!","publishing":"Wrthi’n cyhoeddi..."},"confirms":{"delete_quiz":"Ydych chi’n siŵr eich bod am ddileu’r cwis hwn?","delete_quiz_submissions_warning":{"one":"Rhybudd: Mae 1 myfyriwr wedi gwneud y cwis hwn yn barod. Os byddwch chi’n ei ddileu, caiff unrhyw gyflwyniadau sydd wedi’u cwblhau eu dileu, ac ni fyddant yn ymddangos yn y llyfr graddau mwyach.","other":"Rhybudd: %{count} myfyriwr wedi gwneud y cwis hwn yn barod. Os byddwch chi’n ei ddileu, caiff unrhyw gyflwyniadau sydd wedi’u cwblhau eu dileu, ac ni fyddant yn ymddangos yn y llyfr graddau mwyach."}},"links":{"hide_student_quiz_results":"Cuddio canlyniadau cwis myfyrwyr","hide_student_survey_results":"Cuddio canlyniadau arolwg myfyrwyr","show_student_quiz_results":"Dangos canlyniadau cwis myfyrwyr","show_student_survey_results":"Dangos canlyniadau arolwg myfyrwyr"},"students_who_have_not_taken_the_quiz":"Myfyrwyr sydd HEB wneud y cwis","students_who_have_taken_the_quiz":"Myfyrwyr sydd wedi gwneud y cwis"}}},"da":{"quizzes":{"show":{"answers":{"correct":"Korrekt!","correct_answers":"Korrekte svar","incorrect":"Forkert","partial":"Delvis","right":"Korrekt svar","unanswered":"Ikke besvaret","you_answered":"Du svarede"},"buttons":{"already_published":"Offentliggjort!","publishing":"Offentliggør ..."},"confirms":{"delete_quiz":"Er du sikker på, at du vil slette denne test?","delete_quiz_submissions_warning":{"one":"Advarsel: 1 studerende har allerede taget denne test. Hvis du sletter den, slettes alle afsluttede afleveringer og vises ikke længere i karakteroversigten.","other":"Advarsel: %{count} studerende har allerede taget denne test. Hvis du sletter den, slettes alle afsluttede afleveringer og vises ikke længere i karakteroversigten."}},"links":{"hide_student_quiz_results":"Skjul studerendes testresultater","hide_student_survey_results":"Skjul studerendes spørgeundersøgelsesresultater","show_student_quiz_results":"Vis studietestens resultater","show_student_survey_results":"Vis studieundersøgelsens resultater"},"students_who_have_not_taken_the_quiz":"Studerende som IKKE har taget testen","students_who_have_taken_the_quiz":"Studerende som har taget testen"}}},"da-x-k12":{"quizzes":{"show":{"answers":{"correct":"Korrekt!","correct_answers":"Korrekte svar","incorrect":"Forkert","partial":"Delvis","right":"Korrekt svar","unanswered":"Ikke besvaret","you_answered":"Du svarede"},"buttons":{"already_published":"Offentliggjort!","publishing":"Offentliggør ..."},"confirms":{"delete_quiz":"Er du sikker på, at du vil slette denne quiz?","delete_quiz_submissions_warning":{"one":"Advarsel: 1 elev har allerede taget denne quiz. Hvis du sletter den, slettes alle afsluttede afleveringer og vises ikke længere i vurderingsoversigten.","other":"Advarsel: %{count} elever har allerede taget denne quiz. Hvis du sletter den, slettes alle afsluttede afleveringer og vises ikke længere i vurderingsoversigten."}},"links":{"hide_student_quiz_results":"Skjul elevernes quizresultater","hide_student_survey_results":"Skjul elevernes spørgeundersøgelsesresultater","show_student_quiz_results":"Vis studiequizzens resultater","show_student_survey_results":"Vis studieundersøgelsens resultater"},"students_who_have_not_taken_the_quiz":"Elever, som IKKE har taget quizzen","students_who_have_taken_the_quiz":"Elever, som har taget quizzen"}}},"de":{"quizzes":{"show":{"answers":{"correct":"Richtig!","correct_answers":"Richtige Antworten","incorrect":"Falsch","partial":"Teilweise","right":"Richtige Antwort","unanswered":"Unbeantwortet","you_answered":"Sie antworteten"},"buttons":{"already_published":"Veröffentlicht!","publishing":"Wird veröffentlicht ..."},"confirms":{"delete_quiz":"Möchten Sie dieses Quiz wirklich löschen?","delete_quiz_submissions_warning":{"one":"Warnung: 1 Student hat an diesem Quiz bereits teilgenommen. Wenn Sie dieses Quiz löschen, werden alle Abgaben ebenfalls gelöscht und nicht länger im Notenbuch angezeigt.","other":"Warnung: %{count} Studenten haben an diesem Quiz bereits teilgenommen. Wenn Sie dieses Quiz löschen, werden alle Abgaben ebenfalls gelöscht und nicht länger im Notenbuch angezeigt."}},"links":{"hide_student_quiz_results":"Quiz-Ergebnisse des Studenten ausblenden","hide_student_survey_results":"Befragungsergebnisse des Studenten ausblenden","show_student_quiz_results":"Quizergebnisse des Studenten anzeigen","show_student_survey_results":"Befragungsergebnisse des Student anzeigen"},"students_who_have_not_taken_the_quiz":"Studenten, die das Quiz NICHT absolviert haben","students_who_have_taken_the_quiz":"Studenten, die das Quiz absolviert haben"}}},"el":{"quizzes":{"show":{"answers":{"correct":"Σωστά!","correct_answers":"Σωστές Απαντήσεις","incorrect":"Λάθος","partial":"Μερικός","right":"Σωστή Απάντηση","unanswered":"Δεν έχουν απαντηθεί","you_answered":"Απαντήσατε"},"buttons":{"already_published":"Δημοσιεύθηκε!","publishing":"Η δημοσίευση βρίσκεται σε εξέλιξη..."},"confirms":{"delete_quiz":"Είσαστε σίγουροι πως θέλετε να αφαιρέσετε αυτό το quiz;","delete_quiz_submissions_warning":{"one":"\\u003cmrk mid=\\"8105\\" mtype=\\"seg\\"\\u003eΠροειδοποίηση:\\u003c/mrk\\u003e \\u003cmrk mid=\\"8106\\" mtype=\\"seg\\"\\u003e1 σπουδαστής έχει ήδη συμπληρώσει αυτό το κουίζ.\\u003c/mrk\\u003e \\u003cmrk mid=\\"8107\\" mtype=\\"seg\\"\\u003eΑν το διαγράψετε, τυχόν ολοκληρωμένες υποβολές θα διαγραφούν και δεν θα εμφανίζονται πια στο βιβλίο βαθμών.\\u003c/mrk\\u003e","other":"\\u003cmrk mid=\\"8108\\" mtype=\\"seg\\"\\u003eΠροειδοποίηση:\\u003c/mrk\\u003e \\u003cmrk mid=\\"8109\\" mtype=\\"seg\\"\\u003e%{count} σπουδαστές έχουν ήδη συμπληρώσει αυτό το κουίζ.\\u003c/mrk\\u003e \\u003cmrk mid=\\"8110\\" mtype=\\"seg\\"\\u003eΑν το διαγράψετε, τυχόν ολοκληρωμένες υποβολές θα διαγραφούν και δεν θα εμφανίζονται πια στο βιβλίο βαθμών.\\u003c/mrk\\u003e"}},"links":{"hide_student_quiz_results":"Απόκρυψη Αποτελεσμάτων Κουίζ Σπουδαστή","hide_student_survey_results":"Απόκρυψη Αποτελεσμάτων Δημοσκόπησης Σπουδαστή","show_student_quiz_results":"Εμφάνιση Αποτελεσμάτων Κουίζ Σπουδαστή","show_student_survey_results":"Εμφάνιση Αποτελεσμάτων Δημοσκόπησης Σπουδαστή"},"students_who_have_not_taken_the_quiz":"Μαθητές που ΔΕΝ έχουν κάνει το κουίζ","students_who_have_taken_the_quiz":"Οι φοιτητές/ες που έχουν λάβει μέρος στο quiz"}}},"en-AU":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct Answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this quiz?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Quiz Results","hide_student_survey_results":"Hide Student Survey Results","show_student_quiz_results":"Show Student Quiz Results","show_student_survey_results":"Show Student Survey Results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the quiz","students_who_have_taken_the_quiz":"Students who have taken the quiz"}}},"en-AU-x-unimelb":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct Answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this quiz?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Quiz Results","hide_student_survey_results":"Hide Student Survey Results","show_student_quiz_results":"Show Student Quiz Results","show_student_survey_results":"Show Student Survey Results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the quiz","students_who_have_taken_the_quiz":"Students who have taken the quiz"}}},"en-CA":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct Answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this quiz?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Quiz Results","hide_student_survey_results":"Hide Student Survey Results","show_student_quiz_results":"Show Student Quiz Results","show_student_survey_results":"Show Student Survey Results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the quiz","students_who_have_taken_the_quiz":"Students who have taken the quiz"}}},"en-GB":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this quiz?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Quiz Results","hide_student_survey_results":"Hide Student Survey Results","show_student_quiz_results":"Show student quiz results","show_student_survey_results":"Show student survey results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the quiz","students_who_have_taken_the_quiz":"Students who have taken the quiz"}}},"en-GB-x-lbs":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this survey?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this survey. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this survey. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Survey Results","hide_student_survey_results":"Hide Student Poll Results","show_student_quiz_results":"Show student survey results","show_student_survey_results":"Show student poll results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the survey","students_who_have_taken_the_quiz":"Students who have taken the survey"}}},"en-GB-x-ukhe":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Correct Answers","incorrect":"Incorrect","partial":"Partial","right":"Correct answer","unanswered":"Unanswered","you_answered":"You Answered"},"buttons":{"already_published":"Published!","publishing":"Publishing..."},"confirms":{"delete_quiz":"Are you sure you want to delete this quiz?","delete_quiz_submissions_warning":{"one":"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.","other":"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."}},"links":{"hide_student_quiz_results":"Hide Student Quiz Results","hide_student_survey_results":"Hide Student Survey Results","show_student_quiz_results":"Show student quiz results","show_student_survey_results":"Show student survey results"},"students_who_have_not_taken_the_quiz":"Students who have NOT taken the quiz","students_who_have_taken_the_quiz":"Students who have taken the quiz"}}},"es":{"quizzes":{"show":{"answers":{"correct":"¡Correcto!","correct_answers":"Respuestas correctas","incorrect":"Incorrecto","partial":"Parcial","right":"Respuesta correcta","unanswered":"Sin responder","you_answered":"Respondido"},"buttons":{"already_published":"¡Publicado!","publishing":"Publicando..."},"confirms":{"delete_quiz":"¿Está seguro de que desea eliminar este examen?","delete_quiz_submissions_warning":{"one":"Advertencia: 1 estudiante ya ha tomado este examen. Si lo elimina, cualquier entrega completa será eliminada y no aparecerá en su libro de calificaciones.","other":"Advertencia: %{count} estudiantes ya han tomado este examen. Si lo elimina, cualquier entrega completa será eliminada y no aparecerá en su libro de calificaciones."}},"links":{"hide_student_quiz_results":"Ocultar los resultados de los exámenes de los estudiantes","hide_student_survey_results":"Ocultar los resultados de la encuesta de los estudiantes","show_student_quiz_results":"Mostrar los resultados de los exámenes de los estudiantes","show_student_survey_results":"Mostrar los resultados de la encuesta de los estudiantes"},"students_who_have_not_taken_the_quiz":"Estudiantes que NO han realizado el examen","students_who_have_taken_the_quiz":"Estudiantes que han realizado el examen"}}},"fa":{"quizzes":{"show":{"answers":{"correct":"درست است!","correct_answers":"پاسخ های درست","incorrect":"نادرست","partial":"جزئی","right":"پاسخ درست","unanswered":"پاسخ داده نشده","you_answered":"پاسخ دادید"},"buttons":{"already_published":"منتشر شد!","publishing":"درحال انتشار..."},"confirms":{"delete_quiz":"مطمئنید که می خواهید این آزمون حذف شود؟","delete_quiz_submissions_warning":{"one":"هشدار: %{count} دانشجو قبلا این آزمون را داده اند. اگر آن را حذف کنید، هر گونه مورد ارسالی تکمیل شده حذف می شود و دیگر در دفتر نمره ظاهر نمی شود.","other":"هشدار: %{count} دانشجو قبلا این آزمون را داده اند. اگر آن را حذف کنید، هر گونه مورد ارسالی تکمیل شده حذف می شود و دیگر در دفتر نمره ظاهر نمی شود."}},"links":{"hide_student_quiz_results":"مخفی کردن نتایج آزمون دانشجو","hide_student_survey_results":"مخفی کردن نتایج نظرسنجی دانشجو","show_student_quiz_results":"نمایش نتایج آزمون دانشجو","show_student_survey_results":"نمایش نتایج نظرسنجی دانشجو"},"students_who_have_not_taken_the_quiz":"دانشجویانی که امتحان نداده اند","students_who_have_taken_the_quiz":"دانشجویانی که امتحان داده اند"}}},"fi":{"quizzes":{"show":{"answers":{"correct":"Oikein!","correct_answers":"Oikeat vastaukset","incorrect":"Väärin","partial":"Osittainen","right":"Oikea vastaus","unanswered":"Vastaamaton","you_answered":"Vastasit"},"buttons":{"already_published":"Julkaistu!","publishing":"Julkaistaan..."},"confirms":{"delete_quiz":"Haluatko varmasti poistaa tämän tietovisan?","delete_quiz_submissions_warning":{"one":"Varoitus: 1 opiskelija on jo osallistunut tähän kyselyyn. Jos poistat sen, kaikki valmiit lähetykset poistetaan eikä niitä näy enää arvosanakirjassa.","other":"Varoitus: %{count} opiskelijaa on jo sallistunut tähän tietovisaan. Jos poistat sen, kaikki valmiit lähetykset poistetaan eikä niitä näy enää arvosanakirjassa."}},"links":{"hide_student_quiz_results":"Piilota opiskelijan tietovisan tulokset","hide_student_survey_results":"Piilota opiskelijan tietovisan tulokset","show_student_quiz_results":"Näytä opiskelijan tietovisan tulokset","show_student_survey_results":"Näytä opiskelijan tietovisan tulokset"},"students_who_have_not_taken_the_quiz":"Opiskelijat, jotka EIVÄT OLE suorittaneet tietovisaa","students_who_have_taken_the_quiz":"Opiskelijat, jotka ovat suorittaneet tietovisan"}}},"fr":{"quizzes":{"show":{"answers":{"correct":"Correct !","correct_answers":"Réponses correctes","incorrect":"Incorrect","partial":"Partiel","right":"Bonne réponse","unanswered":"Sans réponse","you_answered":"Vous avez répondu"},"buttons":{"already_published":"Publication terminée.","publishing":"Publication en cours..."},"confirms":{"delete_quiz":"Voulez-vous vraiment supprimer ce questionnaire ?","delete_quiz_submissions_warning":{"one":"Avertissement: 1 étudiant a déjà complété ce questionnaire. Si vous le supprimez, tous les envois complétés seront supprimés et n’apparaîtront plus dans le relevé de notes.","other":"Avertissement : %{count} étudiants ont déjà complété ce questionnaire. Si vous le supprimez, tous les envois complétés seront supprimés et n’apparaîtront plus dans le relevé de notes."}},"links":{"hide_student_quiz_results":"Masquer les résultats du questionnaire pour l’étudiant","hide_student_survey_results":"Masquer les résultats de l’enquête pour l’étudiant","show_student_quiz_results":"Afficher les résultats du questionnaire pour l’étudiant","show_student_survey_results":"Afficher les résultats de l’enquête pour l’étudiant"},"students_who_have_not_taken_the_quiz":"Étudiants qui n’ont PAS complété le questionnaire","students_who_have_taken_the_quiz":"Étudiants qui ont complété le questionnaire"}}},"fr-CA":{"quizzes":{"show":{"answers":{"correct":"Correct!","correct_answers":"Réponses correctes","incorrect":"Incorrect","partial":"Partiel","right":"Réponse correcte","unanswered":"Sans réponse","you_answered":"Vous avez répondu"},"buttons":{"already_published":"Publication terminée.","publishing":"Publication en cours..."},"confirms":{"delete_quiz":"Voulez-vous vraiment supprimer ce questionnaire?","delete_quiz_submissions_warning":{"one":"Avertissement: 1 étudiant a déjà complété ce questionnaire. Si vous le supprimez, tous les envois complétés seront supprimés et n’apparaîtront plus dans le relevé de notes.","other":"Avertissement : %{count} étudiants ont déjà complété ce questionnaire. Si vous le supprimez, tous les envois complétés seront supprimés et n’apparaîtront plus dans le relevé de notes."}},"links":{"hide_student_quiz_results":"Masquer les résultats du questionnaire pour l’étudiant","hide_student_survey_results":"Masquer les résultats de l’enquête pour l’étudiant","show_student_quiz_results":"Afficher les résultats du questionnaire pour l’étudiant","show_student_survey_results":"Afficher les résultats de l’enquête pour l’étudiant"},"students_who_have_not_taken_the_quiz":"Étudiants qui n’ont PAS complété le questionnaire","students_who_have_taken_the_quiz":"Étudiants qui ont complété le questionnaire"}}},"he":{"quizzes":{"show":{"answers":{"correct":"נכון!","correct_answers":"תשובות נכונות","incorrect":"לא נכון","partial":"חלקי","right":"תשובה נכונה","unanswered":"ללא מענה","you_answered":"השבת"},"buttons":{"already_published":"פורסם!","publishing":"מפרסם..."},"confirms":{"delete_quiz":"האם אתם בטוחים שרוצים לבטל בוחן זה?","delete_quiz_submissions_warning":{"one":"אזהרה: תלמידים אחד כבר לקח את הבוחן. אם יתבטל, תבוטלנה גם כל ההגשות שהושלמו ולא תופענה בספר הציונים.","other":"אזהרה: %{count} תלמידים כבר עשו את הבוחן. אם יתבטל, יבוטלו גם כל ההגשות שהושלמו ולא יופיעו בספר הציונים."}},"links":{"hide_student_quiz_results":"הסתרת תוצאות בוחן תלמיד","hide_student_survey_results":"הסתרת תוצאות סקר תלמיד","show_student_quiz_results":"הצגת תוצאות בוחן תלמיד ","show_student_survey_results":"הצגת תוצאות סקר תלמיד "},"students_who_have_not_taken_the_quiz":"תלמידים שלא עשו את הבוחן","students_who_have_taken_the_quiz":"תלמידים שעשו את הבוחן"}}},"ht":{"quizzes":{"show":{"answers":{"correct":"Kòrèk!","correct_answers":"Repons Kòrèk","incorrect":"Enkòrèk","partial":"Pasyèl","right":"Bon Repons","unanswered":"San Repons","you_answered":"Ou Reponn"},"buttons":{"already_published":"Pibliye!","publishing":"Piblikasyon..."},"confirms":{"delete_quiz":"Ou kwè vrèman ou vle efase quiz sa a?","delete_quiz_submissions_warning":{"one":"Avètisman: 1 elèv pran quiz sa a deja. Si w efase li, tout soumisyon ki konplete deja yo ap efase e yo pa p parèt nan Gradebook la ankò.","other":"Avètisman: %{count} elèv pran quiz sa a deja. Si w efase li, tout soumisyon ki konplete deja yo ap efase e yo pa p parèt nan Gradebook la ankò."}},"links":{"hide_student_quiz_results":"Kache Rezilta Quiz Elèv","hide_student_survey_results":"Kache Rezilta Ankèt Elèv","show_student_quiz_results":"Afiche Rezilta Quiz Elèv","show_student_survey_results":"Afiche Rezilta Ankèt Elèv"},"students_who_have_not_taken_the_quiz":"Elèv ki PA pran quiz la","students_who_have_taken_the_quiz":"Elèv ki pran quiz la"}}},"hu":{"quizzes":{"show":{"answers":{"correct":"Helyes!","correct_answers":"Helyes válaszok","incorrect":"Helytelen","partial":"Részleges","right":"Helyes válasz","unanswered":"Nincs megválaszolva","you_answered":"Megadott válasz"},"buttons":{"already_published":"Publikálva!","publishing":"Publikálás alatt..."},"confirms":{"delete_quiz":"Biztos, hogy törölni szeretné ezt a kvízt?","delete_quiz_submissions_warning":{"one":"Figyelmeztetés: 1 hallgató már kitöltötte ezt a kvízt. Ha törli, minden teljesített feladat törlődik és többé nem jelenik meg az eredménye a naplóban.","other":"Figyelem! %{count} hallgató már kitöltötte ezt a kvízt. Ha ezt törli, minden beadott feladat törlődik, és többé nem jelenik meg az eredmény az osztálynaplóban."}},"links":{"hide_student_quiz_results":"A hallgató kvízeredményeinek elrejtése","hide_student_survey_results":"A hallgatói felmérés eredményeinek elrejtése","show_student_quiz_results":"A hallgatói kvíz eredményeinek megjelenítése","show_student_survey_results":"A hallgatói felmérés eredményeinek megjelenítése"},"students_who_have_not_taken_the_quiz":"Hallgatók, akik NEM töltötték ki a kvízt","students_who_have_taken_the_quiz":"Hallgatók, akik kitöltötték a kvízt"}}},"hy":{"quizzes":{"show":{"answers":{"correct":"Ճիշտ է:","correct_answers":"Ճիշտ պատասխաններ","incorrect":"Սխալ է","partial":"Մասամբ","right":"Ճիշտ պատասխան","unanswered":"Պատասխան չկա","you_answered":"Ձեր պատասխանը"},"buttons":{"already_published":"Հրատարակված է","publishing":"Հրատարակվում է..."},"confirms":{"delete_quiz":"Դուք իսկապե՞ս ցանկանում եք ջնջել այս թեստը:","delete_quiz_submissions_warning":{"one":"Նախազգուշացում. 1  ուսանող արդեն կատարել է այս ստուգողական աշխատանքը: Եթե այն ջնջեք, ցանկացած ուղարկված աշխատանքներ կջնջվեն և այլևս չեն երևա ստուգարքի գրքույկում:","other":"Նախազգուշացում. %{count}  ունկնդիր արդեն կատարել են այս թեստը: Եթե այն ջնջեք, բոլոր ուղարկված աշխատանքները կջնջվեն և այլևս չեն երևա գնահատականների մատյանում:"}},"links":{"hide_student_quiz_results":"Թաքցնել ունկնդրի թեստի արդյունքները","hide_student_survey_results":"Թաքցնել ունկնդրի հարցման արդյունքները","show_student_quiz_results":"Ցույց տալ ունկնդրի թեստի արդյունքները","show_student_survey_results":"Ցույց տալ ունկնդրի հարցման արդյունքները"},"students_who_have_not_taken_the_quiz":"Այն ունկնդիրները, ովքեր ՉԵՆ ստացել թեստը","students_who_have_taken_the_quiz":"Այն ունկնդիրները, ովքեր ստացել են թեստը"}}},"is":{"quizzes":{"show":{"answers":{"correct":"Rétt!","correct_answers":"Rétt svör","incorrect":"Rangt","partial":"Að hluta","right":"Rétt svar","unanswered":"Ósvarað","you_answered":"Þú svaraðir"},"buttons":{"already_published":"Birt!","publishing":"Birti..."},"confirms":{"delete_quiz":"Viltu örugglega eyða þessu prófi?","delete_quiz_submissions_warning":{"one":"Viðvörun: 1 nemandi hefur þegar tekið þetta próf. Ef þú eyðir því, verður loknum skilum eytt og birtast ekki framar í einkunnabókinni.","other":"Viðvörun: %{count} nemendur hafa þegar tekið þetta próf. Ef þú eyðir því, verður loknum skilum eytt og birtast ekki framar í einkunnabókinni."}},"links":{"hide_student_quiz_results":"Fela prófniðurstöður nemenda","hide_student_survey_results":"Fela könnunarniðurstöður nemenda","show_student_quiz_results":"Sýna prófniðurstöður nemenda","show_student_survey_results":"Sýna könnunarniðurstöður nemenda"},"students_who_have_not_taken_the_quiz":"Nemendur sem hafa EKKI tekið prófið","students_who_have_taken_the_quiz":"Nemendur sem hafa tekið prófið"}}},"it":{"quizzes":{"show":{"answers":{"correct":"Corretto.","correct_answers":"Risposte corrette","incorrect":"Errato","partial":"Parziale","right":"Risposta corretta","unanswered":"Senza risposta","you_answered":"Hai risposto"},"buttons":{"already_published":"Pubblicato.","publishing":"Pubblicazione in corso..."},"confirms":{"delete_quiz":"Vuoi eliminare questo quiz?","delete_quiz_submissions_warning":{"one":"Avviso: 1 studente ha già eseguito questo quiz. Se lo elimini, tutte le consegne completate verranno eliminate e non verranno più visualizzate nel registro dei voti.","other":"Avviso: %{count} studenti hanno già eseguito questo quiz. Se lo elimini, tutte le consegne completate verranno eliminate e non verranno più visualizzate nel registro dei voti."}},"links":{"hide_student_quiz_results":"Nascondi risultati quiz studenti","hide_student_survey_results":"Nascondi risultati sondaggio studenti","show_student_quiz_results":"Mostra risultati quiz studenti","show_student_survey_results":"Mostra risultati sondaggio studenti"},"students_who_have_not_taken_the_quiz":"Studenti che NON hanno eseguito il quiz","students_who_have_taken_the_quiz":"Studenti che hanno eseguito il quiz"}}},"ja":{"quizzes":{"show":{"answers":{"correct":"正解です!","correct_answers":"正解","incorrect":"不正解","partial":"部分的","right":"正解","unanswered":"未解答","you_answered":"解答済み"},"buttons":{"already_published":"公開されました!","publishing":"公開しています..."},"confirms":{"delete_quiz":"このクイズを削除してもよろしいですか?","delete_quiz_submissions_warning":{"one":"警告: %{count} 人の受講生が既にこのクイズに答えています。このクイズを削除すると、提出記録が削除され、成績表に表示されなくなります。","other":"警告: %{count} 人の受講生が既にこのクイズに答えています。このクイズを削除すると、提出記録が削除され、成績表に表示されなくなります。"}},"links":{"hide_student_quiz_results":"受講生のクイズの結果を非表示","hide_student_survey_results":"受講生のサーベイの結果を非表示","show_student_quiz_results":"受講生のクイズの結果を表示","show_student_survey_results":"受講生のサーベイの結果を表示"},"students_who_have_not_taken_the_quiz":"まだこのクイズを受けていない受講生","students_who_have_taken_the_quiz":"すでにこのクイズを受けた受講生"}}},"ko":{"quizzes":{"show":{"answers":{"correct":"정답입니다!","correct_answers":"정답","incorrect":"오답","partial":"부분","right":"정답","unanswered":"답변 안 함","you_answered":"여러분의 답변은"},"buttons":{"already_published":"게시되었습니다!","publishing":"게시 중..."},"confirms":{"delete_quiz":"이 퀴즈를 삭제하시겠습니까?","delete_quiz_submissions_warning":{"one":"주의: 학생 %{count}명이 이미 이 퀴즈를 치렀습니다. 이를 삭제하면 완료된 제출물이 삭제되어 평가 기록부에 나타나지 않습니다.","other":"주의: 학생 %{count}명이 이미 이 퀴즈를 치렀습니다. 이를 삭제하면 완료된 제출물이 삭제되어 평가 기록부에 나타나지 않습니다."}},"links":{"hide_student_quiz_results":"학생 퀴즈 결과를 숨기기","hide_student_survey_results":"학생 설문 결과를 숨기기","show_student_quiz_results":"학생 퀴즈 결과 표시","show_student_survey_results":"학생 설문 결과 표시"},"students_who_have_not_taken_the_quiz":"이 퀴즈를 치르지 않은 학생","students_who_have_taken_the_quiz":"이 퀴즈를 치른 학생"}}},"mi":{"quizzes":{"show":{"answers":{"correct":"Tika!","correct_answers":"whakautu tika","incorrect":"hē","partial":"Motunga","right":"Whakautu Tika","unanswered":"Kaore i whakautua","you_answered":"Whakautua koe"},"buttons":{"already_published":"I whakaputaina!","publishing":"Whakaputa ..."},"confirms":{"delete_quiz":"E tino hiahia ana koe ki te muku i tēnei quiz?","delete_quiz_submissions_warning":{"one":"Whakatūpato: Kua tangohia kē 1 ngā ākonga i tēnei quiz. Ki te muku koe, ka mukua tētahi tāpaetanga oti a heoi kaore e puta i roto i te pukakōeke.","other":"Whakatūpato: Kua tangohia kē %{count} ngā ākonga i tēnei quiz. Ki te muku, ka mukua tētahi tāpaetanga oti a heoi kaore e puta i roto i te pukakōeke."}},"links":{"hide_student_quiz_results":"Huna Ākonga Quiz Hua","hide_student_survey_results":"Huna rangahau Ākonga Hua","show_student_quiz_results":"Whakāturia Ākonga Quiz Hua","show_student_survey_results":"Whakāturia rangahau Ākonga Hua"},"students_who_have_not_taken_the_quiz":"Ngā ākonga nei KAORE tangohia te quiz","students_who_have_taken_the_quiz":"Ngā ākonga nei i tango i te quiz"}}},"nb":{"quizzes":{"show":{"answers":{"correct":"Riktig!","correct_answers":"Riktige svar","incorrect":"Feil","partial":"Delvis","right":"Riktig svar","unanswered":"Ubesvart","you_answered":"Du svarte"},"buttons":{"already_published":"Publisert!","publishing":"Publiserer…"},"confirms":{"delete_quiz":"Er du sikker på at du ønsker å slette denne testen?","delete_quiz_submissions_warning":{"one":"Advarsel: 1 student har allerede tatt denne testen. Om du sletter den vil alle fullførte innleveringer slettes og fjernes fra karakteroversikten.","other":"Advarsel: %{count} studenter har allerede tatt denne testen. Om du sletter den vil alle fullførte innleveringer slettes og fjernes fra karakteroversikten."}},"links":{"hide_student_quiz_results":"Skjul studentens testeresultater","hide_student_survey_results":"Skjul resultatene av studentundersøkelsen","show_student_quiz_results":"Vis studentens testeresultater","show_student_survey_results":"Vis resultater fra studentundersøkelsen"},"students_who_have_not_taken_the_quiz":"Studenter som IKKE har tatt testen","students_who_have_taken_the_quiz":"Studenter som har tatt testen"}}},"nb-x-k12":{"quizzes":{"show":{"answers":{"correct":"Riktig!","correct_answers":"Riktige svar","incorrect":"Feil","partial":"Delvis","right":"Riktig svar","unanswered":"Ubesvart","you_answered":"Du svarte"},"buttons":{"already_published":"Publisert!","publishing":"Publiserer…"},"confirms":{"delete_quiz":"Er du sikker på at du ønsker å slette denne testen?","delete_quiz_submissions_warning":{"one":"Advarsel: 1 elev har allerede tatt denne testen. Om du sletter den vil alle fullførte innleveringer slettes og fjernes fra vurderingsoversikten.","other":"Advarsel: %{count} elever har allerede tatt denne testen. Om du sletter den vil alle fullførte innleveringer slettes og fjernes fra vurderingsoversikten."}},"links":{"hide_student_quiz_results":"Skjul elevens testeresultater","hide_student_survey_results":"Skjul resultatene av elevundersøkelsen","show_student_quiz_results":"Vis elevens testeresultater","show_student_survey_results":"Vis resultater fra elevundersøkelsen"},"students_who_have_not_taken_the_quiz":"Elever som IKKE har tatt testen","students_who_have_taken_the_quiz":"Elever som har tatt testen"}}},"nl":{"quizzes":{"show":{"answers":{"correct":"Juist!","correct_answers":"Juiste antwoord","incorrect":"Onjuist","partial":"Gedeeltelijk","right":"Juiste antwoord","unanswered":"Onbeantwoord","you_answered":"Je antwoordde"},"buttons":{"already_published":"Gepubliceerd!","publishing":"Bezig met publiceren..."},"confirms":{"delete_quiz":"Weet je zeker dat je deze toets wilt verwijderen?","delete_quiz_submissions_warning":{"one":"Waarschuwing: 1 cursist heeft deze toets al afgelegd. Bij het verwijderen hiervan zal iedere voltooide inzending verwijderd worden en zal niet langer zichtbaar zijn in het cijferoverzicht.","other":"Waarschuwing: %{count} cursisten hebben deze toets al afgelegd. Bij het verwijderen hiervan zullen alle inzendingen verwijderd worden en zullen niet langer zichtbaar zijn in het cijferoverzicht."}},"links":{"hide_student_quiz_results":"Toetsresultaten van cursisten verbergen","hide_student_survey_results":"Enquêteresultaten van cursisten verbergen","show_student_quiz_results":"Toetsresultaten van cursisten tonen","show_student_survey_results":"Enquêteresultaten van cursisten tonen"},"students_who_have_not_taken_the_quiz":"Cursisten die de toets nog NIET afgelegd hebben","students_who_have_taken_the_quiz":"Cursisten die de toets afgelegd hebben"}}},"nn":{"quizzes":{"show":{"answers":{"correct":"Rett!","correct_answers":"Rette svar","incorrect":"Feil","partial":"Delvis","right":"Rett svar","unanswered":"Ikkje svart på","you_answered":"Du har svart"},"buttons":{"already_published":"Publisert!","publishing":"Publiserer..."},"confirms":{"delete_quiz":"Er du sikker på at du vil slette denne quizen?","delete_quiz_submissions_warning":{"one":"Åtvaring: 1 student har allereie tatt quizen. Dersom du slettar, vil alle fullførte innleveringar bli sletta og dei vil ikkje lenger vere synlege i karakterboka.","other":"Åtvaring: %{count} studentar har allereie tatt quizen. Dersom du slettar, vil alle fullførte innleveringar bli sletta og dei vil ikkje lenger vere synlege i vurderingsoversikta."}},"links":{"hide_student_quiz_results":"Skjul studenten sine quizresultat","hide_student_survey_results":"Skjul resultata frå studentundersøkinga","show_student_quiz_results":"Vis studentane sine resultat frå quizen","show_student_survey_results":"Vis studentane sine resultat frå undersøkinga"},"students_who_have_not_taken_the_quiz":"Studentar som IKKJE har tatt quizen","students_who_have_taken_the_quiz":"Studentar som har tatt quizen"}}},"pl":{"quizzes":{"show":{"answers":{"correct":"Poprawnie!","correct_answers":"Prawidłowe Odpowiedzi","incorrect":"Niepoprawnie","partial":"Częściowo","right":"Prawidłowa odpowiedź","unanswered":"Bez odpowiedzi","you_answered":"Odpowiedziano"},"buttons":{"already_published":"Opublikowano!","publishing":"Trwa publikowanie..."},"confirms":{"delete_quiz":"Czy na pewno chcesz usunąć ten test?","delete_quiz_submissions_warning":{"one":"Ostrzeżenie: 1 uczestnik rozwiązał ten quiz. Jeśli go usuniesz, wszystkie przekazane rozwiązania zostaną usunięte i nie będą dłużej widoczne  w dzienniku.","other":"Ostrzeżenie: %{count} uczestników rozwiązało ten test. Jeśli go usuniesz, wszystkie przekazane rozwiązania zostaną usunięte i nie będą dłużej widoczne  w dzienniku."}},"links":{"hide_student_quiz_results":"Ukryj rezultaty testu uczestnika","hide_student_survey_results":"Ukryj wyniki ankiety uczestnika","show_student_quiz_results":"Wyświetl wyniki testu uczestnika","show_student_survey_results":"Wyświetl wyniki ankiety uczestnika"},"students_who_have_not_taken_the_quiz":"Uczestnicy, którzy NIE napisali testu","students_who_have_taken_the_quiz":"Uczestnicy, którzy już napisali test"}}},"pt":{"quizzes":{"show":{"answers":{"correct":"Correto!","correct_answers":"Respostas corretas","incorrect":"Incorreto","partial":"Parcial","right":"Resposta correta","unanswered":"Sem resposta","you_answered":"Respondeu"},"buttons":{"already_published":"Publicado!","publishing":"A publicar..."},"confirms":{"delete_quiz":"Tem certeza de que deseja excluir este teste?","delete_quiz_submissions_warning":{"one":"Aviso: 1 aluno já realizou este teste. Se eliminar o teste, todos os envios concluídos serão eliminados e deixarão de aparecer no livro de notas.","other":"Aviso: %{count} alunos já realizaram este teste. Se eliminar o teste, todos os envios concluídos serão eliminados e deixarão de aparecer no livro de notas."}},"links":{"hide_student_quiz_results":"Ocultar resultados do teste do aluno","hide_student_survey_results":"Ocultar resultados do questionário do aluno","show_student_quiz_results":"Exibir resultados do teste do aluno","show_student_survey_results":"Exibir resultados do questionário do aluno"},"students_who_have_not_taken_the_quiz":"Alunos que NÃO fizeram o teste","students_who_have_taken_the_quiz":"Alunos que fizeram o teste"}}},"pt-BR":{"quizzes":{"show":{"answers":{"correct":"Correto!","correct_answers":"Respostas corretas","incorrect":"Incorreta","partial":"Parcial","right":"Resposta correta","unanswered":"Não respondida","you_answered":"Você respondeu"},"buttons":{"already_published":"Publicado!","publishing":"Publicando..."},"confirms":{"delete_quiz":"Tem certeza de que deseja excluir este teste?","delete_quiz_submissions_warning":{"one":"Aviso: 1 aluno já fez este teste. Se você excluí-lo, todos os envios concluídos serão excluídos e não apareceram mais no boletim.","other":"Aviso: %{count} alunos já fizeram este teste. Se você excluí-lo, todos os envios concluídos serão excluídos e não apareceram mais no boletim."}},"links":{"hide_student_quiz_results":"Ocultar os resultados do teste do aluno","hide_student_survey_results":"Ocultar resultados da pesquisa do aluno","show_student_quiz_results":"Exibir resultados do teste do aluno","show_student_survey_results":"Exibir resultados da pesquisa do aluno"},"students_who_have_not_taken_the_quiz":"Alunos que NÃO fizeram o teste","students_who_have_taken_the_quiz":"Alunos que fizeram o teste"}}},"ru":{"quizzes":{"show":{"answers":{"correct":"Верно!","correct_answers":"Правильные ответы","incorrect":"Неверно","partial":"Частично","right":"Это правильный ответ","unanswered":"Нет ответа","you_answered":"Ваш ответ"},"buttons":{"already_published":"Опубликовано!","publishing":"Публикация..."},"confirms":{"delete_quiz":"Действительно хотите удалить эту контрольную работу?","delete_quiz_submissions_warning":{"one":"Предупреждение: 1 студент уже прошел данный тест. Если вы удалите его, любое завершенное задание будет удалено и не будет отображаться в зачетной книжке.","other":"Предупреждение: %{count} студента/ов уже прошли данный тест. Если вы удалите его, любое завершенное задание будет удалено и не будет отображаться в зачетной книжке."}},"links":{"hide_student_quiz_results":"Скрыть результаты контрольной работы студента","hide_student_survey_results":"Скрыть результаты опроса студента","show_student_quiz_results":"Показать результаты контрольной работы студента","show_student_survey_results":"Показать результаты опроса студента"},"students_who_have_not_taken_the_quiz":"Студенты, НЕ взявшие контрольную работу","students_who_have_taken_the_quiz":"Студенты, взявшие контрольную работу"}}},"sl":{"quizzes":{"show":{"answers":{"correct":"Pravilno.","correct_answers":"Pravilni odgovori","incorrect":"Nepravilno","partial":"Delno","right":"Pravilen odgovor","unanswered":"Neodgovorjeno","you_answered":"Odgovorili ste."},"buttons":{"already_published":"Objavljeno.","publishing":"Objavljanje ..."},"confirms":{"delete_quiz":"Ali ste prepričani, da želite izbrisati ta kviz?","delete_quiz_submissions_warning":{"one":"Opozorilo: 1 študent je že opravil ta kviz. Če ga izbrišete, bodo vse zaključene oddaje izbrisane in se ne bodo več pojavile v redovalnici.","other":"Opozorilo: %{count} študentov je že opravilo ta kviz. Če ga izbrišete, bodo vse zaključene oddaje izbrisane in se ne bodo več pojavile v redovalnici."}},"links":{"hide_student_quiz_results":"Skrij rezultate kviza študentov","hide_student_survey_results":"Skrij rezultate ankete študentov","show_student_quiz_results":"Pokaži rezultate kviza študentov","show_student_survey_results":"Pokaži rezultate ankete študentov"},"students_who_have_not_taken_the_quiz":"Študenti, ki NISO opravljali kviza.","students_who_have_taken_the_quiz":"Študenti, ki so opravljali kviz."}}},"sv":{"quizzes":{"show":{"answers":{"correct":"Korrekt!","correct_answers":"Korrekta svar","incorrect":"Inkorrekt","partial":"Delvis","right":"Rätt svar","unanswered":"Obesvarad","you_answered":"Du svarade"},"buttons":{"already_published":"Publicerad!","publishing":"Publicerar..."},"confirms":{"delete_quiz":"Är du säker på att du vill radera detta Quiz?","delete_quiz_submissions_warning":{"one":"Varning: 1 student har redan tagit detta Quiz. Om du raderar den kommer även färdiga inlämningar raderas och inte längre synas i omdömesboken.","other":"Varning: %{count} har redan tagit detta Quiz. Om du raderar den kommer även färdig inlämningar att raderas och inte längre synas i omdömesboken."}},"links":{"hide_student_quiz_results":"Dölj studentens quizresultat","hide_student_survey_results":"Dölj studentens undersökningsresultat","show_student_quiz_results":"Visa studentens quizresultat","show_student_survey_results":"Visa studentens undersökningsresultat"},"students_who_have_not_taken_the_quiz":"Studenter som INTE har tagit Quiz","students_who_have_taken_the_quiz":"Studenter som har tagit Quiz"}}},"sv-x-k12":{"quizzes":{"show":{"answers":{"correct":"Korrekt!","correct_answers":"Korrekta svar","incorrect":"Inkorrekt","partial":"Delvis","right":"Rätt svar","unanswered":"Obesvarad","you_answered":"Du svarade"},"buttons":{"already_published":"Publicerad!","publishing":"Publicerar..."},"confirms":{"delete_quiz":"Är du säker på att du vill radera detta Quiz?","delete_quiz_submissions_warning":{"one":"Varning: 1 elev har redan tagit detta Quiz. Om du raderar den kommer även fullgjorda inlämningar raderas och inte längre synas i bedömningsöversikten.","other":"Varning: %{count} har redan tagit detta Quiz. Om du raderar den kommer även fullgjorda inlämningar att raderas och inte längre synas i bedömningsöversikten."}},"links":{"hide_student_quiz_results":"Dölj elevens quizresultat","hide_student_survey_results":"Dölj elevens undersökningsresultat","show_student_quiz_results":"Visa elevens quizresultat","show_student_survey_results":"Visa elevens undersökningsresultat"},"students_who_have_not_taken_the_quiz":"Elever som INTE har tagit Quiz","students_who_have_taken_the_quiz":"Elever som har tagit Quiz"}}},"tr":{"quizzes":{"show":{"answers":{"correct":"Doğru!","correct_answers":"Doğru Cevaplar","incorrect":"Yanlış","partial":"Kısmi","right":"Doğru Cevap","unanswered":"Cevaplanmamış","you_answered":"Sizin Cevabınız"},"buttons":{"already_published":"Yayınlandı!","publishing":"Yayınlanıyor..."},"confirms":{"delete_quiz":"Kısa sınavı silmek istediğinize emin misiniz?","delete_quiz_submissions_warning":{"one":"Uyarı : 1 öğrenci zaten bu kısa sınava giriş yaptı. Eğer silerseniz , tamamlanmış gönderiler silinecek ve notlar kısmında gözükmeyecektir.","other":"Uyarı : %{count} öğrenci zaten bu kısa sınava giriş yaptı. Eğer silerseniz , tamamlanmış gönderiler silinecek ve notlar kısmında gözükmeyecektir."}},"links":{"hide_student_quiz_results":"Öğrenci Kısa Sınav Sonuçlarını Gizle","hide_student_survey_results":"Öğrenci Anket Sonuçlarını Gizle","show_student_quiz_results":"Kısa Sınav İçin Öğrenci Cevaplarını Göster","show_student_survey_results":"Öğrenci Anket Sonuçlarını Göster"},"students_who_have_not_taken_the_quiz":"Kısa sınavı ALMAYAN öğrenciler","students_who_have_taken_the_quiz":"Kısa sınavı alan öğrenciler"}}},"uk":{"quizzes":{"show":{"answers":{"correct":"Правильно!","correct_answers":"Правильні відповіді","incorrect":"Неправильно","partial":"Частково","right":"Правильна відповідь","unanswered":"Без відповіді","you_answered":"Ви відповіли"},"buttons":{"already_published":"Опубліковано!","publishing":"Публікація..."},"confirms":{"delete_quiz":"Ви впевнені, що хочете видалити цей тест?","delete_quiz_submissions_warning":{"one":"Попередження: 1 студент вже виконав цю контрольну роботу. Якщо ви її видалите, всі завершені подання також будуть видалені і більше не відображатимуться у журналі оцінок.","other":"Попередження: %{count} студентів вже виконали цю контрольну роботу. Якщо ви її видалите, всі завершені подання будуть видалені і більше не відображатимуться у журналі оцінок."}},"links":{"hide_student_quiz_results":"Сховати результати контрольної роботи студентів","hide_student_survey_results":"Сховати результати опитування студентів","show_student_quiz_results":"Показати результати студентської контрольної роботи","show_student_survey_results":"Показати результати опитування студентів"},"students_who_have_not_taken_the_quiz":"Студенти, які НЕ виконали контрольну роботу","students_who_have_taken_the_quiz":"Студенти які виконали контрольну роботу"}}},"zh-Hans":{"quizzes":{"show":{"answers":{"correct":"正确!","correct_answers":"正确答案","incorrect":"错误","partial":"部分","right":"正确回答","unanswered":"未回答","you_answered":"您已回答"},"buttons":{"already_published":"已发布!","publishing":"正在发布..."},"confirms":{"delete_quiz":"是否确定要删除此测验?","delete_quiz_submissions_warning":{"one":"警告：%{count} 个学生已参加此测验。若删除，则任何已完成的提交文件也将被删除，再也不会出现在评分册中。","other":"警告：%{count} 个学生已参加此测验。若删除，则任何已完成的提交文件也将被删除，再也不会出现在评分册中。"}},"links":{"hide_student_quiz_results":"隐藏学生测验结果","hide_student_survey_results":"隐藏学生调查结果","show_student_quiz_results":"显示学生测验结果","show_student_survey_results":"显示学生调查结果"},"students_who_have_not_taken_the_quiz":"尚未进行测验的学生","students_who_have_taken_the_quiz":"已进行测验的学生"}}},"zh-Hant":{"quizzes":{"show":{"answers":{"correct":"正確！","correct_answers":"正確答案","incorrect":"不正確","partial":"部分","right":"正確答案","unanswered":"未回答","you_answered":"您已回答"},"buttons":{"already_published":"已發佈！","publishing":"正在發佈…"},"confirms":{"delete_quiz":"您是否確定要刪除此測驗？","delete_quiz_submissions_warning":{"one":"警告：%{count} 個學生已參加了此測驗。如果刪除它，任何已完成的提交件均將被刪除，並且不再出現在成績冊中。","other":"警告：%{count} 個學生已參加了此測驗。如果刪除測驗，任何已完成的提交件均將被刪除，並且不再出現在成績冊中。"}},"links":{"hide_student_quiz_results":"隱藏學生測驗結果","hide_student_survey_results":"隱藏學生調查結果","show_student_quiz_results":"顯示學生測驗結果","show_student_survey_results":"顯示學生調查結果"},"students_who_have_not_taken_the_quiz":"尚未參加測驗的學生","students_who_have_taken_the_quiz":"已參加測驗的學生"}}}}'))
i("jQeR")
i("0sPK")
t["a"]=n["default"].scoped("quizzes.show")},teYS:function(e,t,i){const n=i("ouhR")
var r,o,a,s=n({})
n.subscribe=r=function(e,t){if(n.isPlainObject(e))return n.each(e,(function(e,t){r(e,t)}))
function i(){return t.apply(this,Array.prototype.slice.call(arguments,1))}i.guid=t.guid=t.guid||n.guid++
s.bind(e,i)}
n.unsubscribe=o=function(){s.unbind.apply(s,arguments)}
n.publish=a=function(){s.trigger.apply(s,arguments)}
e.exports={subscribe:r,unsubscribe:o,publish:a}},w8vW:function(e,t,i){"use strict"
i.d(t,"a",(function(){return n}))
function n(e,t){for(let i=0;i<e.length;i++){const n=e[i]
if(n===t){e.splice(i,1)
break}}return e}},wWL5:function(e,t,i){"use strict"
i.r(t)
var n=i("ouhR")
var r=i.n(n)
var o=i("lkPJ")
var a=i("qx8k")
var s=i("VS9R")
var c=i("LqrG")
var _=i("PHBv")
var d=i("7FZx")
var u=i("gl9/")
var l=i("GXQz")
i("UlQx")
i("YGE8")
i("TBRb")
i("MWZS")
i("p6Wi")
i("vpJZ")
i("1Lgu")
var p=i("H4Sz")
r()(document).ready((function(){ENV.QUIZ_SUBMISSION_EVENTS_URL&&Object(u["a"])(true)
r()("#preview_quiz_button").click(e=>{r()("#js-sequential-warning-dialogue div a").attr("href",r()("#preview_quiz_button").attr("href"))})
function e(e){return r()("#quiz_details").length?e():r.a.get(ENV.QUIZ_DETAILS_URL,t=>{r()("#quiz_details_wrapper").html(t)
e()})}const t=new c["a"]
t.applyArrows()
if(!r()(".allow-inputs").length){o["a"].disableInputs("[type=radio], [type=checkbox]")
o["a"].setWidths()}r()("form.edit_quizzes_quiz").on("submit",(function(e){e.preventDefault()
e.stopImmediatePropagation()
r()(this).find(".loading").removeClass("hidden")
const t=r()(this).serializeArray()
const i=r()(this).attr("action")
r.a.ajax({url:i,data:t,type:"POST",success(){r()(".edit_quizzes_quiz").parents(".alert").hide()}})}))
r()(".delete_quiz_link").click((function(e){e.preventDefault()
let t=a["a"].t("confirms.delete_quiz","Are you sure you want to delete this quiz?")
const i=parseInt(r()("#quiz_details_wrapper").data("submitted-count"))
i>0&&(t+="\n\n"+a["a"].t("confirms.delete_quiz_submissions_warning",{one:"Warning: 1 student has already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook.",other:"Warning: %{count} students have already taken this quiz. If you delete it, any completed submissions will be deleted and no longer appear in the gradebook."},{count:i}))
r()("nothing").confirmDelete({url:r()(this).attr("href"),message:t,success(){window.location.href=ENV.QUIZZES_URL}})}))
let i=false
r()(".quiz_details_link").click(t=>{t.preventDefault()
r()("#quiz_details_wrapper").disableWhileLoading(e(()=>{const e=r()("#quiz_details_text")
r()("#quiz_details").slideToggle()
i?ENV.IS_SURVEY?e.text(a["a"].t("links.show_student_survey_results","Show Student Survey Results")):e.text(a["a"].t("links.show_student_quiz_results","Show Student Quiz Results")):ENV.IS_SURVEY?e.text(a["a"].t("links.hide_student_survey_results","Hide Student Survey Results")):e.text(a["a"].t("links.hide_student_quiz_results","Hide Student Quiz Results"))
i=!i}))})
r()(".message_students_link").click(t=>{t.preventDefault()
e(()=>{const e=ENV.QUIZ_SUBMISSION_LIST
const t=e.UNSUBMITTED_STUDENTS
const i=e.SUBMITTED_STUDENTS
const n=a["a"].t("students_who_have_taken_the_quiz","Students who have taken the quiz")
const r=a["a"].t("students_who_have_not_taken_the_quiz","Students who have NOT taken the quiz")
const o=new s["a"]({context:ENV.QUIZ.title,recipientGroups:[{name:n,recipients:i},{name:r,recipients:t}]})
o.open()})})
r()("#let_students_take_this_quiz_button").ifExists((function(e){const t=r()("#unlock_for_how_long_dialog")
e.click(()=>{t.dialog("open")
return false})
const i=r()(this).find(".datetime_field")
t.dialog({autoOpen:false,modal:true,resizable:false,width:400,buttons:{Unlock(){r()("#quiz_unlock_form").append(r()(this).dialog("destroy")).find("#quiz_lock_at").val(i.data("iso8601")).end().submit()}}})
i.datetime_field()}))
r()("#lock_this_quiz_now_link").ifExists(e=>{e.click(e=>{e.preventDefault()
r()("#quiz_lock_form").submit()})})
r()("ul.page-action-list").find("li").length>0&&r()("ul.page-action-list").show()
r()("#publish_quiz_form").formSubmit({beforeSubmit(e){r()(this).find("button").attr("disabled",true).text(a["a"].t("buttons.publishing","Publishing..."))},success(e){r()(this).find("button").text(a["a"].t("buttons.already_published","Published!"))
location.reload()}})
const n=r()("#quiz-publish-link")
const m=new _["a"](r.a.extend(ENV.QUIZ,{unpublishable:!n.hasClass("disabled")}))
const g=new d["a"]({model:m,el:n})
const f=function(){location.href=location.href}
g.on("publish",f)
g.on("unpublish",f)
g.render()
const h=document.getElementById("crs-graphs")
const b=document.getElementById("not_right_side")
l["default"].init(h,b)
r()("#assignment_external_tools").length&&p["a"].attach(r()("#assignment_external_tools")[0],"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.QUIZ.assignment_id,10))}))
i("2wuA")
i("/j35")
var m=i("y8OA")
const g=new m["default"]
g.init({itemType:"quiz",page:"show"})
r()(()=>{o["a"].setWidths()
r()(".answer input[type=text]").each((function(){r()(this).width(9.5*(r()(this).val().length||11))}))
r()(".download_submissions_link").click((function(e){e.preventDefault()
INST.downloadSubmissions(r()(this).attr("href"))}))
if(ENV.SUBMISSION_VERSIONS_URL&&!ENV.IS_SURVEY){const e=r()("#quiz-submission-version-table")
e.css({height:"100px"})
const t=r.a.get(ENV.SUBMISSION_VERSIONS_URL,t=>{e.html(t)
e.css({height:"auto"})})
e.disableWhileLoading(t)}r()("#module_sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Quiz",assetID:ENV.QUIZ.id,location:location})})},we39:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M903.53 0v903.53H0v112.94h903.53V1920h112.94v-903.53H1920V903.53h-903.53V0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconPlus",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconPlusLine"
return t}(_["Component"])
p.glyphName="plus"
p.variant="Line"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},xDdU:function(e,t,i){var n=i("4fRq")
var r=i("I2ZF")
var o
var a
var s=0
var c=0
function _(e,t,i){var _=t&&i||0
var d=t||[]
e=e||{}
var u=e.node||o
var l=void 0!==e.clockseq?e.clockseq:a
if(null==u||null==l){var p=n()
null==u&&(u=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]])
null==l&&(l=a=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime()
var g=void 0!==e.nsecs?e.nsecs:c+1
var f=m-s+(g-c)/1e4
f<0&&void 0===e.clockseq&&(l=l+1&16383);(f<0||m>s)&&void 0===e.nsecs&&(g=0)
if(g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
s=m
c=g
a=l
m+=122192928e5
var h=(1e4*(268435455&m)+g)%4294967296
d[_++]=h>>>24&255
d[_++]=h>>>16&255
d[_++]=h>>>8&255
d[_++]=255&h
var b=m/4294967296*1e4&268435455
d[_++]=b>>>8&255
d[_++]=255&b
d[_++]=b>>>24&15|16
d[_++]=b>>>16&255
d[_++]=l>>>8|128
d[_++]=255&l
for(var v=0;v<6;++v)d[_+v]=u[v]
return t||r(d)}e.exports=_},xHhu:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M1581.176 1750.588c0 31.06-25.411 56.47-56.47 56.47H395.294c-31.059 0-56.47-25.41-56.47-56.47V564.706H225.882v1185.882c0 93.403 76.01 169.412 169.412 169.412h1129.412c93.402 0 169.412-76.01 169.412-169.412V564.706h-112.942v1185.882zm-903.529-169.412h112.941V677.647h-112.94v903.53zm451.765 0h112.94V677.647h-112.94v903.53zm211.211-1242.352L1217.065 0H694.6L571.268 338.824H.01v112.94h1920v-112.94h-579.388zm-649.299 0l82.334-225.883h364.462l82.334 225.883h-529.13z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconTrash",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconTrashLine"
return t}(_["Component"])
p.glyphName="trash"
p.variant="Line"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},y2yB:function(e,t,i){"use strict"
i.d(t,"a",(function(){return p}))
var n=i("VTBJ")
var r=i("1OyB")
var o=i("vuIU")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("hPGw")
var l=d.a.createElement("path",{d:"M.08 568.062l176.13-176.13 783.988 783.865 783.74-783.864 176.13 176.13-959.87 960.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(c["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return d.a.createElement(u["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),l)}}])
t.displayName="IconArrowOpenDownSolid"
return t}(_["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=Object(n["a"])({},u["a"].propTypes)},yE80:function(e,t,i){"use strict"
var n=i("pQTu")
t["a"]={strings(e,t){let i=n["default"].locale||"en-US"
const r={zh_Hant:"zh-Hant"}
i=r[i]||i
return e.localeCompare(t,i,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,i)=>this.strings(e(t),e(i))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},yJLO:function(e,t,i){"use strict"
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","update":"تحديث"}},"cy":{"buttons":{"cancel":"Canslo","update":"Diweddaru"}},"da":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"da-x-k12":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"el":{"buttons":{"cancel":"Ακύρωση","update":"Ενημέρωση"}},"en-AU":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-CA":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","update":"Update"}},"es":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"fa":{"buttons":{"cancel":"لغو","update":"بهنگام سازی"}},"fi":{"buttons":{"cancel":"Peruuta","update":"Päivitä"}},"fr":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"fr-CA":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"he":{"buttons":{"cancel":"ביטול","update":"עדכון"}},"ht":{"buttons":{"cancel":"Anile","update":"Aktyalize"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","update":"Թարմացնել"}},"is":{"buttons":{"cancel":"Hætta við","update":"Uppfæra"}},"it":{"buttons":{"cancel":"Annulla","update":"Aggiorna"}},"ja":{"buttons":{"cancel":"キャンセル","update":"更新"}},"ko":{"buttons":{"cancel":"취소","update":"업데이트"}},"mi":{"buttons":{"cancel":"Whakakore","update":"Whakahōu"}},"nb":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nl":{"buttons":{"cancel":"Annuleren","update":"Bijwerken"}},"nn":{"buttons":{"cancel":"Avbryt","update":"Oppdatering"}},"pl":{"buttons":{"cancel":"Anuluj","update":"Aktualizuj"}},"pt":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"pt-BR":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"ru":{"buttons":{"cancel":"Отменить","update":"Обновить"}},"sl":{"buttons":{"cancel":"Prekliči","update":"Posodobi"}},"sv":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"tr":{"buttons":{"cancel":"İptal","update":"Güncelle"}},"uk":{"buttons":{"cancel":"Скасувати","update":"Оновлення"}},"zh-Hans":{"buttons":{"cancel":"取消","update":"更新"}},"zh-Hant":{"buttons":{"cancel":"取消","update":"更新"}}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("dialog")
var a=i("ouhR")
var s=i.n(a)
var c=i("GLiE")
var _=i.n(c)
var d=i("FIFq")
var u=i.n(d)
i("YGE8")
var l=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var i in t)m.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},m={}.hasOwnProperty
t["a"]=function(e){p(t,e)
function t(){this.cancel=l(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=_.a.extend({},this.defaultOptions(),{buttons:[{text:o.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:o.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},_.a.result(this,"dialogOptions"))
var t
this.dialog=s()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
s()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(u.a.View)},zpiH:function(e,t,i){"use strict"
i.d(t,"a",(function(){return T}))
var n=i("Ff2n")
var r=i("vuIU")
var o=i("1OyB")
var a=i("md7G")
var s=i("foSv")
var c=i("Ji7U")
var _=i("q1tI")
var d=i.n(_)
var u=i("17x9")
var l=i.n(u)
var p=i("u9uf")
var m=i("jsCG")
var g=i("FOOe")
var f=i("dpqJ")
var h=i("cClk")
var b=i("AdN2")
var v=i("lzgt")
var y=i("J2CL")
var k=i("oXx0")
var w,z,S,j,x,C,O,E,A,D,N,M,P
var q=(w=Object(k["a"])(),w(z=(j=S=function(e){Object(c["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}return t}(v["a"]),S.displayName="PopoverTrigger",j))||z)
var B=(x=Object(k["a"])(),x(C=(E=O=function(e){Object(c["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}return t}(v["a"]),O.displayName="PopoverContent",E))||C)
var T=(A=Object(k["a"])(),D=Object(g["a"])(),A(N=D(N=(P=M=function(e){Object(c["a"])(t,e)
function t(){var e
var i
Object(o["a"])(this,t)
for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c]
i=Object(a["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(r)))
i.show=function(e){i._popover&&i._popover.show(e)}
i.hide=function(e,t){i._popover&&i._popover.hide(e,t)}
i.toggle=function(e){i._popover&&i._popover.toggle(e)}
return i}Object(r["a"])(t,[{key:"render",value:function(){var e=this
var i=this.props,r=i.show,o=i.defaultShow,a=i.label,s=i.variant,c=i.alignArrow,_=i.trackPosition,u=i.onShow,l=i.onDismiss,p=i.onToggle,g=i.children,f=Object(n["a"])(i,["show","defaultShow","label","variant","alignArrow","trackPosition","onShow","onDismiss","onToggle","children"])
var h=v["a"].pick(t.Trigger,g)
var b=v["a"].pick(t.Content,g)
return d.a.createElement(m["a"],Object.assign({},f,{isShowingContent:r,defaultIsShowingContent:o,screenReaderLabel:a,color:"inverse"===s?"primary-inverse":"primary",shouldAlignArrow:c,shouldTrackPosition:_,onRequestShowContent:function(){return p(true)},onRequestHideContent:function(e,t){var i=t.documentClick
l(e,i)
p(false)},onPositioned:u,ref:function(t){return e._popover=t},renderTrigger:h,__dangerouslyIgnoreExperimentalWarnings:true}),b)}},{key:"placement",get:function(){return this._popover&&this._popover.placement}},{key:"shown",get:function(){return this._popover&&this._popover.shown}},{key:"defaultFocusElement",get:function(){return this._popover&&this._popover.defaultFocusElement}}])
t.displayName="Popover"
return t}(_["Component"]),M.Trigger=q,M.Content=B,M.propTypes={children:f["a"].oneOf([q,B]),placement:p["a"].placement,on:l.a.oneOfType([l.a.oneOf(["click","hover","focus"]),l.a.arrayOf(l.a.oneOf(["click","hover","focus"]))]),variant:l.a.oneOf(["default","inverse"]),shadow:y["c"].shadow,stacking:y["c"].stacking,defaultShow:l.a.bool,show:Object(h["a"])(l.a.bool,"onToggle","defaultShow"),contentRef:l.a.func,onToggle:l.a.func,onClick:l.a.func,onFocus:l.a.func,onBlur:l.a.func,onKeyDown:l.a.func,onShow:l.a.func,onMouseOver:l.a.func,onMouseOut:l.a.func,onDismiss:l.a.func,withArrow:l.a.bool,label:l.a.string,defaultFocusElement:l.a.oneOfType([l.a.element,l.a.func]),shouldRenderOffscreen:l.a.bool,shouldContainFocus:l.a.bool,shouldReturnFocus:l.a.bool,shouldCloseOnDocumentClick:l.a.bool,shouldCloseOnEscape:l.a.bool,offsetX:l.a.oneOfType([l.a.string,l.a.number]),offsetY:l.a.oneOfType([l.a.string,l.a.number]),onPositionChanged:l.a.func,onPositioned:l.a.func,trackPosition:l.a.bool,constrain:p["a"].constrain,mountNode:p["a"].mountNode,insertAt:l.a.oneOf(["bottom","top"]),liveRegion:l.a.oneOfType([l.a.arrayOf(l.a.element),l.a.element,l.a.func]),positionTarget:l.a.oneOfType([b["a"],l.a.func]),alignArrow:l.a.bool,id:l.a.string,shouldFocusContentOnTriggerBlur:l.a.bool},M.defaultProps={children:null,onToggle:function(e){},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onShow:function(e){},onDismiss:function(e,t){},placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,variant:"default",on:["hover","focus"],contentRef:function(e){},defaultShow:false,withArrow:true,trackPosition:true,constrain:"window",onPositioned:function(e){},onPositionChanged:function(e){},shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,defaultFocusElement:null,label:null,mountNode:null,insertAt:"bottom",liveRegion:null,positionTarget:null,alignArrow:false,id:void 0,show:void 0,closeButtonRef:void 0,closeButtonLabel:void 0,onKeyDown:void 0},P))||N)||N)},zrOs:function(e,t){if("".concat(location.search).match(/[?&]debug_js=1/))e.exports=console
else{function i(){}e.exports=["debug","info","log","warn","error"].reduce((e,t)=>{e[t]=i
return e},{})}}}])

//# sourceMappingURL=quiz_show-c-312e9c0f07.js.map