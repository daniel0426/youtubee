(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,function(e,t,n){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},function(e,t,n){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L"}},function(e,t,n){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},,,,,,,function(e,t,n){e.exports={videos:"video_list_videos__1VCw_"}},function(e,t,n){},,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(10),i=n.n(s),r=(n(19),n(8)),o=n(2),l=n.n(o),u=n(0),d=Object(c.memo)((function(e){var t,n=e.video,c=e.video.snippet,a=e.onVideoClick,s="list"===e.display?l.a.grid:l.a.list;return Object(u.jsxs)("li",{className:"".concat(l.a.container," ").concat(s),onClick:function(){return a(n)},children:[Object(u.jsx)("div",{className:l.a.video,children:Object(u.jsx)("img",{className:l.a.thumbnail,src:c.thumbnails.medium.url,alt:""})}),Object(u.jsxs)("div",{className:l.a.metadata,children:[Object(u.jsx)("p",{className:l.a.title,children:(t=c.title,t.length>30?t=t.slice(0,25).concat("..."):t)}),Object(u.jsx)("p",{className:l.a.channel,children:c.channelTitle})]})]})})),h=n(11),p=n.n(h),j=function(e){var t=e.videos,n=e.onVideoClick,c=e.display;return Object(u.jsx)("ul",{className:p.a.videos,children:t.map((function(e){return Object(u.jsx)(d,{video:e,onVideoClick:n,display:c},e.id)}))})},m=n(4),b=n.n(m),_=n(3),v=n.n(_),O=Object(c.memo)((function(e){var t=e.onSearch,n=Object(c.useRef)(),a=function(){var e=n.current.value;t(e)};return Object(u.jsxs)("header",{className:v.a.header,children:[Object(u.jsxs)("div",{className:v.a.logo,children:[Object(u.jsx)("img",{className:v.a.img,src:"/images/logo.png",alt:"logo"}),Object(u.jsx)("h1",{className:v.a.title,children:"YouTubee"})]}),Object(u.jsx)("input",{ref:n,onKeyPress:function(e){"Enter"===e.key&&a()},className:v.a.input,type:"search",placeholder:"Search..."}),Object(u.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){a()},children:Object(u.jsx)("img",{className:v.a.buttonImg,src:"/images/search.png",alt:"search"})})]})})),f=n(12),x=n.n(f),g=function(e){var t=e.video;return Object(u.jsxs)("section",{className:"styles.detail",children:[Object(u.jsx)("iframe",{className:x.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(u.jsx)("h2",{children:t.snippet.title}),Object(u.jsx)("h4",{children:t.snippet.channelTitle}),Object(u.jsx)("p",{children:t.snippet.description})]})};var w=function(e){var t=e.network,n=Object(c.useState)([]),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(null),l=Object(r.a)(o,2),d=l[0],h=l[1],p=Object(c.useCallback)((function(e){t.search(e).then((function(e){i(e),h(null)})).catch((function(e){return console.log("error",e)}))}),[t]);return Object(c.useEffect)((function(){t.mostPopular().then((function(e){return i(e)})).catch((function(e){return console.log("error",e)}))}),[t]),Object(u.jsxs)("div",{className:b.a.app,children:[Object(u.jsx)(O,{onSearch:p}),Object(u.jsxs)("section",{className:b.a.content,children:[d&&Object(u.jsx)("div",{className:b.a.detail,children:Object(u.jsx)(g,{video:d})}),Object(u.jsx)("div",{className:b.a.list,children:Object(u.jsx)(j,{videos:s,onVideoClick:function(e){h(e)},display:d?"list":"grid"})})]})]})},y=n(9),k=n(5),N=n.n(k),C=n(7),S=n(13),I=n(14),P=new(function(){function e(t){Object(S.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(I.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(N.a.mark((function e(t){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c.items.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDPpl4M-Fr1wKscqvrKXgcG8xZHWeV1-Ok");i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{network:P})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.eebbcdc9.chunk.js.map