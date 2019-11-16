(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[593],{ppAs:function(t,a,n){"use strict"
var e=n("ouhR")
var o=n.n(e)
var r=n("GLiE")
var c=n.n(r)
var s=n("5Ky4")
var _=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var u=_["default"].scoped("user_content")
const f={translateMathmlForScreenreaders(t){const a=o()("<div/>").html(t.attr("x-canvaslms-safe-mathml")).html()
const n=o()('<span class="hidden-readable"></span>')
n.html(a)
return n},toMediaCommentLink(t){const a=o()("<a\n        id='media_comment_".concat(Object(s["a"])(o()(t).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(s["a"])(o()(t).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(s["a"])(t.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(s["a"])(o()(t).attr("data-alt")),"'\n      />"))
a.html(o()(t).html())
return a},convert(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=o()("<div />").html(t)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return f.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!a.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const t=o()(this)
if(!t.data("uc_snippet")||!t.data("uc_sig"))return this
const a=c.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const e=o()("<form\n            action='".concat(Object(s["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(s["a"])(a),"'\n            id='form-").concat(Object(s["a"])(a),"'\n          />"))
e.append(o()("<input type='hidden'/>").attr({name:"object_data",value:t.data("uc_snippet")}))
e.append(o()("<input type='hidden'/>").attr({name:"s",value:t.data("uc_sig")}))
o()("body").append(e)
setTimeout(()=>e.submit(),0)
return o()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(s["a"])(a),"'\n            style='width: ").concat(Object(s["a"])(t.data("uc_width")),"; height: ").concat(Object(s["a"])(t.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(s["a"])(u.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((t,a)=>{const n=o()(a)
const e=f.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(e)})}return n.html()}}
a["a"]=f}}])

//# sourceMappingURL=593-c-cf8efb2ad7.js.map