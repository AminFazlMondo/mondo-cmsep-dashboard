"use strict";(()=>{var r="scriptsLoaded";var s="jsEnv";window.SCRIPTS_ENV=E();window.setScriptsENV=o=>{if(o!=="dev"&&o!=="prod"){console.error("Invalid environment. Pass `dev` or `prod`");return}localStorage.setItem(s,o),window.SCRIPTS_ENV=o,console.log(`Environment successfully set to ${o}`)};function E(){return localStorage.getItem(s)||"prod"}var i="http://localhost:3000/";window.PRODUCTION_BASE="https://cdn.jsdelivr.net/gh/igniteagency/mondo-cmsep-dashboard/dist/prod/";window.JS_SCRIPTS=new Set;var c=[];window.addEventListener("DOMContentLoaded",w);function w(){console.log(`Current script mode: ${window.SCRIPTS_ENV}`),window.SCRIPTS_ENV==="dev"?p():d()}function d(){var e;let o=window.SCRIPTS_ENV==="dev"?i:window.PRODUCTION_BASE;(e=window.JS_SCRIPTS)==null||e.forEach(n=>{let t=document.createElement("script");t.src=o+n,t.defer=!0;let l=new Promise((S,a)=>{t.onload=S,t.onerror=()=>{console.error(`Failed to load script: ${n}`)}});c.push(l),document.body.appendChild(t)}),Promise.allSettled(c).then(()=>{console.debug("All scripts loaded"),window.dispatchEvent(new CustomEvent(r))})}function p(){let e=new AbortController,n=setTimeout(()=>{e.abort()},300);fetch(i,{signal:e.signal}).then(t=>{if(!t.ok)throw console.error({response:t}),new Error("localhost response not ok")}).catch(()=>{console.error("localhost not resolved. Switching to production"),window.setScriptsENV("prod")}).finally(()=>{clearTimeout(n),d()})}})();
