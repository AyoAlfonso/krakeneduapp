_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{oT8e:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetPassword",function(){return t("ze8x")}])},ze8x:function(e,r,t){"use strict";t.r(r);var n=t("cpVT"),s=t("vJKn"),o=t.n(s),a=t("rg98"),c=t("xvhg"),u=t("j+1P"),i=t.n(u),p=t("q1tI"),w=t("20a2"),f=t("YFqc"),d=t.n(f),b=t("9Hbq"),l=t("Hzj1"),h=t("rk+T"),y=t("0CBl");function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j={header:"Reset Password",button:"Reset Password",passwordInput:"New Password",confirmInput:"Confirm Password",error:i()(h.b,["Looks like that link is expired or invalid, please try to ",i()(d.a,{href:"/login?reset"},i()("a","reset your password"))," again"])};r.default=function(){var e=Object(p.useState)({password:"",confirmPassword:""}),r=e[0],t=e[1],n=Object(y.b)([r]),s=Object(c.a)(n,2),u=s[0],f=s[1],O=Object(w.useRouter)(),P=O.query.key;if(Object(p.useEffect)((function(){"success"===u&&setTimeout((function(){O.push("/login")}),3500)})),!P||"string"!==typeof P)return j.error;var m=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f("/api/user/resetPassword/reset",{key:P,password:r.password});case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();switch(u){case"normal":case"loading":return i()(b.d,{onSubmit:m,width:400,ma:!0},[i()("h1",j.header),i()(b.e,{gap:8},[i()("div",[i()("h4",j.passwordInput),i()("small.textSecondary","Minimum length 8 characters")]),i()(h.e,{type:"password",minLength:8,value:r.password,onChange:function(e){return t(g(g({},r),{},{password:e.target.value}))}})]),i()(l.f,{type:"submit",status:u,style:{justifySelf:"end"}},"Submit")]);case"success":return i()(b.b,[i()("h1","Great"),i()("p","You can now log in with your new password"),i()(d.a,{href:"/login"},i()("a",i()(l.f,"Log In")))]);case"error":return j.error}}}},[["oT8e",0,2,1,3,4]]]);
//# sourceMappingURL=resetPassword-5c111c9ea64d86982342.js.map