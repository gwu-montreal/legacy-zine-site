(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(21),l=a(20),c=a(10),i=a(16);a(121);t.a=Object(o.withSiteData)(function(e){var t=e.tableOfContents;return r.a.createElement("div",{className:"toc-wrapper"},r.a.createElement(l.Location,null,function(e){var a=e.location,n=Object(i.a)(a.pathname);return t[n].map(function(e){var t=e.route,n=e.title,o="unionfaqs"===e.articleType?r.a.createElement("span",{className:"toc-unionfaqs"},c.a.t("unionfaqs_prefix")," "):null;return r.a.createElement("span",{className:"toc-item",key:t},a.pathname===t||a.pathname===t+"/"?r.a.createElement("span",{className:"toc-item-active"},o,n):r.a.createElement(l.Link,{to:t},o,n))})}))})},131:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),l=a(20),c=a(16);a(122);t.a=function(){return r.a.createElement(l.Location,null,function(e){var t=e.location,a=(e.navigate,t.pathname),n=Object(c.a)(a);return r.a.createElement("div",null,r.a.createElement("h2",{className:"tc"},o.a.t("download_zine")),r.a.createElement("div",{className:"downloadzines-container"},r.a.createElement("a",{title:o.a.t("download_zine_waluigi"),href:o.a.t("urls.pdf_waluigi")},r.a.createElement("img",{className:"downloadzines-cover",src:o.a.t("urls.cover_waluigi")})),r.a.createElement("a",{title:o.a.t("download_zine_isabelle"),href:o.a.t("urls.pdf_isabelle")},r.a.createElement("img",{className:"downloadzines-cover",src:o.a.t("urls.cover_isabelle")})),r.a.createElement("a",{title:o.a.t("download_zine_unionize"),href:o.a.t("urls.pdf_unionize")},r.a.createElement("img",{className:"downloadzines-cover",src:o.a.t("urls.cover_unionize")})),r.a.createElement("a",{title:o.a.t("download_zine_egg"),href:o.a.t("urls.pdf_egg")},r.a.createElement("img",{className:"downloadzines-cover",src:o.a.t("urls.cover_egg")}))),r.a.createElement("h3",{className:"tc"},o.a.t("four_cover_variants"),r.a.createElement("br",null),o.a.t("print_and_share")),r.a.createElement("p",{className:"tc downloadzines-notes"},r.a.createElement("span",null,r.a.createElement("a",{href:"/".concat(n,"/endnotes")},o.a.t("references_page"))),r.a.createElement("span",null,r.a.createElement("a",{href:"/".concat(n,"/how-to-print")},o.a.t("printing_hints")))),r.a.createElement("p",{className:"tc downloadzines-gwuintl"},r.a.createElement("a",{href:"https://gameworkersunite.org"},r.a.createElement("span",null,o.a.t("gwu_international")),r.a.createElement("img",{title:o.a.t("gwu_international"),className:"gwu-intl-image",src:"/images/gwu-logo.svg"}))))})}},132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(21),l=a(10),c=(a(123),function(){return r.a.createElement("div",{className:"clearfix"})}),i=a(20),s=a(16),m=(a(124),function(e){var t=e.prevPages,a=e.nextPages;return t?r.a.createElement(i.Location,null,function(e){var n=e.location.pathname,o=Object(s.a)(n),l=t[o],c=a[o];return r.a.createElement("div",{className:"prev-next-wrapper"},l?r.a.createElement(i.Link,{to:l.route},"<"," ",l.name):null,c?r.a.createElement(i.Link,{to:c.route},c.name," ",">"):null)}):null}),u=a(130),p=a(131),d=function(e){var t=e.prevPages,a=e.nextPages;return r.a.createElement("div",{style:{marginBottom:"2rem"}},r.a.createElement(m,{prevPages:t,nextPages:a}),r.a.createElement(u.a,null),r.a.createElement(p.a,null))};a(125),t.a=Object(o.withRouteData)(function(e){var t=e.title,a=e.contents,n=e.description,i=e.prevPages,s=e.nextPages,m=e.header,p=e.type,f=e.containerClassName,h=void 0===f?"":f,v=e.headerClassName,E=void 0===v?"":v,g=e.contentClassName,w=void 0===g?"":g,_=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Head,{title:"".concat(l.a.t("site_title")," - ").concat(t)},r.a.createElement("meta",{property:"og:title",content:"".concat("unionfaqs"===p?l.a.t("unionfaqs_prefix")+" ":"").concat(t)}),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{property:"og:description",content:n})),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{width:"100%",position:"relative"}},r.a.createElement("div",{className:"nav_sidebar"},r.a.createElement(u.a,null))),r.a.createElement("div",{className:"page ".concat(h)},m?m(t):r.a.createElement("h2",{className:E},t),_||r.a.createElement("div",{className:"page-content ".concat(w),dangerouslySetInnerHTML:{__html:a}}),r.a.createElement(c,null)),r.a.createElement(d,{prevPages:i,nextPages:s})))})},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(151),l=a.n(o),c=a(10),i=a(132);a(126);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}window.WORLD_110M_JSON_PATH="/world-110m.json",window.WORLD_50M_JSON_PATH="/world-50m.json";var f=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=u(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?d(n):r).state={zoom:.9},a.handleZoomIn=a.handleZoomIn.bind(d(d(a))),a.handleZoomOut=a.handleZoomOut.bind(d(d(a))),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),a=t,(n=[{key:"handleZoomIn",value:function(){this.setState(function(e){return{zoom:Math.min(e.zoom+.5,20)}})}},{key:"handleZoomOut",value:function(){this.setState(function(e){return{zoom:Math.max(e.zoom-.5,1)}})}},{key:"render",value:function(){var e=this.state.zoom;return r.a.createElement(i.a,{containerClassName:"map_container"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}},r.a.createElement("div",{style:{width:"100%",position:"relative"}},r.a.createElement("div",{style:{position:"absolute",right:10,top:10,display:"flex",flexDirection:"column"}},r.a.createElement("button",{disabled:e>=20,style:{marginBottom:10,opacity:e>=20?.3:1},onClick:this.handleZoomIn},"➕"),r.a.createElement("button",{disabled:e<=1,style:{opacity:e<=1?.3:1},onClick:this.handleZoomOut},"➖"))),r.a.createElement(l.a,{className:"chapter_map",centerLat:18,centerLng:13,height:450,markerScale:.1,scale:205,width:780,enablePanning:!0,zoom:this.state.zoom,tooltipClassName:"chapter_map_tooltip"}),r.a.createElement("p",{style:{textAlign:"center",fontSize:"1.4rem",marginTop:"1rem"}},c.a.t("find_local_chapter"))))}}])&&m(a.prototype,n),o&&m(a,o),t}();t.default=f}}]);
//# sourceMappingURL=src-containers-Map.cc2226fc.js.map