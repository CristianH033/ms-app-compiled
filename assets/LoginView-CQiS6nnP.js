import{d as C,f as q,r as F,a8 as L,m as N,o,c,a as t,b as e,w as s,e as a,l,_ as m,p as g,q as h,j as T,a9 as V,M as j,L as B,s as G}from"./index-DXD8wtHT.js";import{a as M,b as I,c as P,_ as R}from"./CardTitle.vue_vue_type_script_setup_true_lang-CVVyWI8u.js";import{_ as A,a as D}from"./CardFooter.vue_vue_type_script_setup_true_lang-CBt8eQKG.js";import{t as z,o as O,s as v,u as U,F as w,_ as b,a as x,b as $,c as y,d as S}from"./Input.vue_vue_type_script_setup_true_lang-CIZM56Aq.js";import{C as H,a as J,_ as K}from"./google-DwUiuZ8t.js";const Q=["aria-disabled"],W=["disabled"],X={class:"grid grid-cols-2 gap-6"},Y=t("div",{class:"relative"},[t("div",{class:"absolute inset-0 flex items-center"},[t("span",{class:"w-full border-t"})]),t("div",{class:"relative flex justify-center text-xs uppercase"},[t("span",{class:"bg-background px-2 text-muted-foreground"}," O continuar con correo electrónico ")])],-1),Z=t("span",null,"Iniciar sesión",-1),ee={class:"text-left self-end text-sm text-muted-foreground"},ae=C({__name:"LoginForm",setup(E){const _=q(),r=F(!1),k=z(O({email:v({required_error:"Email es requerido"}).min(5,{message:"Minimo 5 caracteres"}).email({message:"Email invalido"}),password:v({required_error:"Password es requerido"}).min(6,{message:"Minimo 6 caracteres"})})),u=U({validationSchema:k}),f=u.handleSubmit(async d=>{r.value=!0,u.setFieldError("email",""),await new Promise(i=>setTimeout(i,500)),_.login(d.email,d.password).then(()=>{}).catch(i=>{i instanceof L?u.setFieldError("email","Credenciales incorrectas"):console.log("Unknown Error",i)}).finally(()=>{r.value=!1})});return(d,i)=>{const p=N("auto-animate");return o(),c("form",{onSubmit:i[0]||(i[0]=G((...n)=>a(f)&&a(f)(...n),["prevent"])),class:"w-full","aria-disabled":r.value},[t("fieldset",{disabled:r.value},[e(a(R),{class:"w-full"},{default:s(()=>[e(a(M),{class:"space-y-1"},{default:s(()=>[e(a(I),{class:"text-2xl"},{default:s(()=>[l(" Iniciar Sesión ")]),_:1}),e(a(A),null,{default:s(()=>[l(" Inicia sesión para comenzar. ")]),_:1})]),_:1}),e(a(P),{class:"grid gap-4"},{default:s(()=>[t("div",X,[e(a(m),{type:"button",variant:"outline"},{default:s(()=>[e(a(H),{class:"mr-2 h-4 w-4"}),l(" Github ")]),_:1}),e(a(m),{type:"button",variant:"outline"},{default:s(()=>[e(a(J),{class:"mr-2 h-4 w-4"}),l(" Google ")]),_:1})]),Y,e(a(w),{name:"email"},{default:s(({componentField:n})=>[e(b,null,{default:s(()=>[e(x,null,{default:s(()=>[l("Email")]),_:1}),e($,null,{default:s(()=>[e(a(y),g({type:"email",placeholder:"mail@example.com"},n,{required:""}),null,16)]),_:2},1024),h((o(),c("div",null,[e(S)])),[[p]])]),_:2},1024)]),_:1}),e(a(w),{name:"password"},{default:s(({componentField:n})=>[e(b,null,{default:s(()=>[e(x,null,{default:s(()=>[l("Contraseña")]),_:1}),e($,null,{default:s(()=>[e(a(y),g({type:"password"},n,{required:""}),null,16)]),_:2},1024),h((o(),c("div",null,[e(S)])),[[p]])]),_:2},1024)]),_:1})]),_:1}),e(a(D),{class:"flex-col gap-4"},{default:s(()=>[e(a(m),{type:"submit",class:"w-full"},{default:s(()=>[r.value?(o(),T(a(V),{key:0,class:"mr-2 h-4 w-4"})):j("",!0),Z]),_:1}),e(a(K)),t("p",ee,[l(" No tienes una cuenta? "),e(a(B),{class:"underline underline-offset-4",to:{name:"register"}},{default:s(()=>[l("Registrarse")]),_:1})])]),_:1})]),_:1})],8,W)],40,Q)}}}),se={class:"w-full max-w-md md:max-w-lg flex flex-col items-center justify-center gap-4"},oe=C({__name:"LoginView",setup(E){return(_,r)=>(o(),c("div",se,[e(ae)]))}});export{oe as default};
