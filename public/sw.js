if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"92936b217ba4f983d4d4e9723dcffe5d"},{url:"/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/_next/static/Cyb_KkEqEBkY-uVTTU9_4/_buildManifest.js",revision:"f2dfe0787adfd3e4dd8527626cfbd57f"},{url:"/_next/static/Cyb_KkEqEBkY-uVTTU9_4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/4bd1b696-dc53661a9e7a1ea0.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/517-6fd397a5a924557d.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/app/_not-found/page-7b9967b815b28552.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/app/layout-786aeff61f152846.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/app/page-8c21e3de6777f143.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/main-app-cb11e5678553c22c.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/main-ce7cd729a2d5e405.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5ee195367b3a8e17.js",revision:"Cyb_KkEqEBkY-uVTTU9_4"},{url:"/_next/static/css/6c685e72c1f63e55.css",revision:"6c685e72c1f63e55"},{url:"/_next/static/css/fd28f4b9b5065dc2.css",revision:"fd28f4b9b5065dc2"},{url:"/_next/static/media/31dd38bdb4daced8-s.woff2",revision:"f73d708ec96ee9a1529da3fc3a19f617"},{url:"/_next/static/media/3511decdf5d10790-s.woff2",revision:"fdecb4b272000f23b3834018b3948b31"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/60c1b9efbca49fe9-s.woff2",revision:"402b95e6a9996cd78478be754ec479bb"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/999f4d94c8b14f83-s.woff2",revision:"12faead930981cbd7eb1c7a7349e6332"},{url:"/_next/static/media/9b8c15de1de72117-s.p.woff2",revision:"6fb0b09a8f49ac61224f379739698ffc"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon-192x192.png",revision:"767ab20f1c0bbdf70cfb9086a04bd694"},{url:"/icon-512x512.png",revision:"b2702a4c2b08dc2ec6bd27f61c7e9d74"},{url:"/manifest.json",revision:"859eae51e6eda08a995ae88031ea0d95"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/space-bg(1).jpg",revision:"96020d53bc4733795899e92607c35b5b"},{url:"/space-bg.jpg",revision:"782fe79371a69cf9db3a34f6a7bc580d"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
