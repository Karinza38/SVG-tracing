if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>l(s,i),t={module:{uri:i},exports:o,require:u};e[i]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-fd57e60c"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/colorworker.0ed47b01.js",revision:null},{url:"assets/de-DE.d72cf94b.js",revision:null},{url:"assets/directory-open.4fa36e51.js",revision:null},{url:"assets/directory-open.f7d7c076.js",revision:null},{url:"assets/el-GR.a0843493.js",revision:null},{url:"assets/en-US.211e9cba.js",revision:null},{url:"assets/file-open.38a61ae8.js",revision:null},{url:"assets/file-open.73377f9f.js",revision:null},{url:"assets/file-save.1c3d3b86.js",revision:null},{url:"assets/file-save.36107878.js",revision:null},{url:"assets/filehandling.21fbddf3.js",revision:null},{url:"assets/index.22fcce24.css",revision:null},{url:"assets/index.72ce9cb1.js",revision:null},{url:"assets/install.9bde16fc.js",revision:null},{url:"assets/monochromeworker.a3227215.js",revision:null},{url:"assets/preprocessworker.b53406ee.js",revision:null},{url:"assets/preprocessworker.faa146aa.js",revision:null},{url:"assets/svgoworker.4755cfed.js",revision:null},{url:"assets/vendor.741bd9a9.js",revision:null},{url:"assets/windowcontrols.8e602982.js",revision:null},{url:"index.html",revision:"749a872528f980eb9c9e38fa0dde89dd"},{url:"manifest.webmanifest",revision:"8f55931d509c95acbf712eec7000d50e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
