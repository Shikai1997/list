(function(){"use strict";var n={2569:function(n,t,e){var r=e(9242),o=e(3396);const a={class:"max-w-screen-md mx-auto p-4"},i=(0,o._)("h1",{class:"text-2xl mb-2"},"doggy8088 ropo list",-1),u={ref:"cardEnd"};function s(n,t,e,r,s,c){const l=(0,o.up)("Card");return(0,o.wg)(),(0,o.iD)("div",a,[i,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.state.repoData,(n=>((0,o.wg)(),(0,o.j4)(l,{key:n.id,data:n},null,8,["data"])))),128)),(0,o._)("div",u,null,512)])}var c=e(4870),l=e(6265),f=e.n(l);const p=f().create({baseURL:"https://api.github.com"}),d={async get(n,t={}){try{const e=await p.get(n,{params:t});return new Promise((n=>{e.status,n(e)}))}catch(e){console.log(e)}return null}},v=(n,t)=>d.get(`/users/${n}/repos`,t),g={class:"bg-white rounded shadow-md mb-4 p-4 h-40 flex flex-col justify-around"},h=["innerHTML"],b=["innerHTML"],m=["href","innerHTML"];function w(n,t,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h2",{innerHTML:r.title,class:"text-xl truncate"},null,8,h),(0,o._)("p",{innerHTML:r.description,class:"text-sm truncate"},null,8,b),(0,o._)("a",{href:r.link,innerHTML:r.link,class:"text-sm text-blue-700 hover:underline truncate",target:"_blank"},null,8,m)])}var x={name:"App",props:["data"],setup(n){return{title:n.data.name,description:n.data.description||"暫無內容...",link:n.data.html_url}}},y=e(89);const O=(0,y.Z)(x,[["render",w]]);var k=O,_={name:"App",components:{Card:k},setup(){const n=(0,c.qj)({repoData:[],currentPage:0,listCount:6}),t=(0,c.iH)(null),e=(e,r)=>{e[0].isIntersecting&&(n.currentPage+=1,v("doggy8088",{per_page:n.listCount,page:n.currentPage}).then((e=>{n.repoData=n.repoData.concat(e.data),e.data.length<n.listCount&&r.unobserve(t.value)})))},r={root:null,rootMargin:"40px",threshold:.2};return(0,o.bv)((()=>{const n=new IntersectionObserver(e,r);n.observe(t.value)})),{state:n,cardEnd:t}}};const j=(0,y.Z)(_,[["render",s]]);var H=j;const M=(0,r.ri)(H);M.mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){n.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(s)var l=s(e)}for(t&&t(r);c<i.length;c++)a=i[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(l)},r=self["webpackChunklist"]=self["webpackChunklist"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2569)}));r=e.O(r)})();
//# sourceMappingURL=app.15bfb50f.js.map