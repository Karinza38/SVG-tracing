if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),t={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar-TN.e1dccb50.js",revision:null},{url:"assets/be-BY.bd991399.js",revision:null},{url:"assets/ca-ES.2838dd1b.js",revision:null},{url:"assets/collect.6b4b7dfe.js",revision:null},{url:"assets/colorworker.1537294c.js",revision:null},{url:"assets/da-DK.51f62f0b.js",revision:null},{url:"assets/de-DE.ba71fa3d.js",revision:null},{url:"assets/el-GR.0dd19d65.js",revision:null},{url:"assets/en-GB.853d8783.js",revision:null},{url:"assets/en-US.f79902e3.js",revision:null},{url:"assets/es-ES.3c1eb861.js",revision:null},{url:"assets/filehandling.246aa396.js",revision:null},{url:"assets/fr-FR.39a0aad9.js",revision:null},{url:"assets/he-IL.5d3648df.js",revision:null},{url:"assets/id-ID.64e137e4.js",revision:null},{url:"assets/index.bf062212.js",revision:null},{url:"assets/install.f5c6f0d6.js",revision:null},{url:"assets/it-IT.b34aa3df.js",revision:null},{url:"assets/ja-JP.fbc8c2fd.js",revision:null},{url:"assets/ko-KR.b67c9752.js",revision:null},{url:"assets/languages.d01e4060.js",revision:null},{url:"assets/module-workers-polyfill.min.dc7647fd.js",revision:null},{url:"assets/monochromeworker.7268595a.js",revision:null},{url:"assets/nl-NL.1e75ebff.js",revision:null},{url:"assets/no-NO.374358df.js",revision:null},{url:"assets/pl-PL.5a2aa4c1.js",revision:null},{url:"assets/preprocessworker.c15347fd.js",revision:null},{url:"assets/preprocessworker.c16fd16a.js",revision:null},{url:"assets/pt-BR.0a3bc8e3.js",revision:null},{url:"assets/ru-RU.fcfaa9d5.js",revision:null},{url:"assets/share.be623ec1.js",revision:null},{url:"assets/style.3ed75d94.css",revision:null},{url:"assets/svgoworker.c8c14599.js",revision:null},{url:"assets/uk-UA.a19e27cd.js",revision:null},{url:"assets/windowcontrols.83059f14.js",revision:null},{url:"assets/zh-CN.96ead65d.js",revision:null},{url:"index.html",revision:"fed5c06d690484894d52e206cb20346c"},{url:"sharetargetsw.js",revision:"fe6035ce16732cd07fe629f4f0959ef6"},{url:"manifest.webmanifest",revision:"65598c351bb39347e6b7ba54f3e0410c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
