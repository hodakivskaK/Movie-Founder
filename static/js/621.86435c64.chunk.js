"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{633:function(e,t,n){n.d(t,{LZ:function(){return v},cd:function(){return g},eK:function(){return f},kK:function(){return h},l2:function(){return d}});var a=n(861),r=n(757),c=n.n(r),s=n(243),i="c93a6a4d3a553d1e7ad5324e4c95943f";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="/trending/movie/week",o="/search/movie",p="/movie",m="/credits",l="/reviews",v=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,s.Z.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,s.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(p,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(m,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},446:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(861),r=n(439),c=n(757),s=n.n(c),i=n(791),u=n(689),o=n(633),p={movieCastList:"Cast_movieCastList__4KLZ8",movieCastItem:"Cast_movieCastItem__8JisQ",movieCastImg:"Cast_movieCastImg__5Lcw9",movieCastDescr:"Cast_movieCastDescr__7lh6z",movieCastText:"Cast_movieCastText__8W45g"},m=n.p+"static/media/actor_not_found.c41e862b0d928c505702.jpg",l=n(184);function v(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1],v=(0,i.useState)(null),f=(0,r.Z)(v,2),d=f[0],h=f[1],g=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.kK)(g);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h("ERROR");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)("div",{children:d}),(0,l.jsx)("ul",{className:p.movieCastList,children:n&&n.map((function(e){return(0,l.jsxs)("li",{className:p.movieCastItem,children:[(0,l.jsx)("div",{className:p.movieCastImgBox,children:null===e.profile_path?(0,l.jsx)("img",{src:m,alt:"".concat(e.name," "),className:p.movieCastImg,width:"100",height:"150"}):(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.profile_path),alt:"".concat(e.name," portrait"),className:p.movieCastImg,width:"100",height:"150"})}),(0,l.jsxs)("div",{className:p.movieCastDescr,children:[(0,l.jsxs)("p",{className:p.movieCastText,children:["Name: ",(0,l.jsx)("span",{children:e.name})]}),(0,l.jsxs)("p",{className:p.movieCastText,children:["Character: ",(0,l.jsx)("span",{children:e.character})]})]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=621.86435c64.chunk.js.map