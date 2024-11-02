"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,O,y)=>{y.r(O),y.d(O,{startInputShims:()=>Z});var A=y(467),l=y(8476),T=y(909),m=y(4920),R=y(4379);y(8438);const P=new WeakMap,I=(e,t,r,s=0,o=!1)=>{P.has(e)!==r&&(r?G(e,t,s,o):H(e,t))},G=(e,t,r,s=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,s&&(n.disabled=!0),o.appendChild(n),P.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${r}px,0) scale(0)`},H=(e,t)=>{const r=P.get(e);r&&(P.delete(e),r.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",F="$ionPaddingTimer",p=(e,t,r)=>{const s=e[F];s&&clearTimeout(s),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[F]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),r&&r()},120)},N=(e,t,r)=>{e.addEventListener("focusout",()=>{t&&p(t,0,r)},{once:!0})};let D=0;const B="data-ionic-skip-scroll-assist",V=(e,t,r,s,o,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?U(e,t,r,s,S.detail.keyboardHeight,_,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)},h=function(){var S=(0,A.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(U(e,t,r,s,o,_,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},U=function(){var e=(0,A.A)(function*(t,r,s,o,n,i,a=!1,_=0,L=!0){if(!s&&!o)return;const u=((e,t,r,s)=>{var o;return((e,t,r,s)=>{const o=e.top,n=e.bottom,i=t.top,_=i+15,u=Math.min(t.bottom,s-r)-50-n,f=_-o,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,o-i),w=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:r,inputSafeY:4-(o-_)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),r,s)})(t,s||o,n,_);if(s&&Math.abs(u.scrollAmount)<4)return x(r),void(i&&null!==s&&(p(s,D),N(r,s,()=>D=0)));if(I(t,r,!0,u.inputSafeY,a),x(r),(0,m.r)(()=>t.click()),i&&s&&(D=u.scrollPadding,p(s,D)),typeof window<"u"){let f;const c=function(){var S=(0,A.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),s&&(yield(0,T.c)(s,0,u.scrollAmount,u.scrollDuration)),I(t,r,!1,u.inputSafeY),x(r),i&&N(r,s,()=>D=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(s){const S=yield(0,T.g)(s);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===r.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(r,s,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,A.A)(function*(t,r){if(void 0===l.d)return;const s="ios"===r,o="android"===r,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",s),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,A.A)(function*(d){yield new Promise(M=>(0,m.c)(d,M));const K=d.shadowRoot||d,g=K.querySelector("input")||K.querySelector("textarea"),b=(0,T.f)(d),W=b?null:d.closest("ion-footer");if(g){if(b&&a&&!f.has(d)){const M=((e,t,r)=>{if(!r||!t)return()=>{};const s=a=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,a)},o=()=>I(e,t,!1),n=()=>s(!0),i=()=>s(!1);return(0,m.a)(r,"ionScrollStart",n),(0,m.a)(r,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(r,"ionScrollStart",n),(0,m.b)(r,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,g,b);f.set(d,M)}if("date"!==g.type&&"datetime-local"!==g.type&&(b||W)&&i&&!c.has(d)){const M=V(d,g,b,W,n,L,h,o);c.set(d,M)}}});return function(K){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const r=document;(0,m.a)(r,"ionScrollStart",()=>{t=!0}),r.addEventListener("focusin",()=>{e=!0},!0),r.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=r.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(r,s){return e.apply(this,arguments)}}()}}]);