if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),a={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>a[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar-TN-917a8102.js",revision:null},{url:"assets/be-BY-e27002d9.js",revision:null},{url:"assets/ca-ES-450231bf.js",revision:null},{url:"assets/collect-9cb57440.js",revision:null},{url:"assets/colorworker-9f272d25.js",revision:null},{url:"assets/da-DK-fecf3d76.js",revision:null},{url:"assets/de-DE-c44b440e.js",revision:null},{url:"assets/el-GR-cf1cb156.js",revision:null},{url:"assets/en-GB-1ebb0134.js",revision:null},{url:"assets/en-US-14af226a.js",revision:null},{url:"assets/es-ES-8cdc11e3.js",revision:null},{url:"assets/filehandling-e9a81a95.js",revision:null},{url:"assets/fr-FR-dff4346a.js",revision:null},{url:"assets/he-IL-3b82a749.js",revision:null},{url:"assets/id-ID-d5dc62f7.js",revision:null},{url:"assets/index-567ccd08.js",revision:null},{url:"assets/install-49bda3c1.js",revision:null},{url:"assets/it-IT-24240090.js",revision:null},{url:"assets/ja-JP-6b72f65f.js",revision:null},{url:"assets/ko-KR-9fdbc612.js",revision:null},{url:"assets/languages-e8d9835d.js",revision:null},{url:"assets/module-workers-polyfill.min-53ae82b3.js",revision:null},{url:"assets/monochromeworker-f4bfce91.js",revision:null},{url:"assets/nl-NL-f6a4c727.js",revision:null},{url:"assets/no-NO-cb14a155.js",revision:null},{url:"assets/pl-PL-9ac090e3.js",revision:null},{url:"assets/preprocessworker-83ff0da1.js",revision:null},{url:"assets/preprocessworker-b268b8a0.js",revision:null},{url:"assets/pt-BR-30fb79a1.js",revision:null},{url:"assets/ru-RU-e5f207da.js",revision:null},{url:"assets/share-8dfeeb31.js",revision:null},{url:"assets/style-02ad85c7.css",revision:null},{url:"assets/svgoworker-7ff1a964.js",revision:null},{url:"assets/uk-UA-87a01182.js",revision:null},{url:"assets/windowcontrols-56fcfc9e.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-148f9e59.js",revision:null},{url:"index.html",revision:"058d89bd5dfd7c24f37112a6d3c427a5"},{url:"sharetargetsw.js",revision:"fe6035ce16732cd07fe629f4f0959ef6"},{url:"manifest.webmanifest",revision:"7a2ef1bd424eb0509a90f05dee6fc11d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
