!function(e){function n(n){for(var r,i,c=n[0],l=n[1],s=n[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(n);p.length;)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"templates/"+({2:"src-containers-Article",3:"src-containers-BareArticle",4:"src-containers-Map",5:"src-containers-OpeningStatement",6:"src-containers-Redirect",7:"src-containers-UnionFAQs",8:"src-pages-404",10:"vendors~src-containers-Map"}[e]||e)+"."+{2:"de4dcdd2",3:"fc470f8a",4:"091eff76",5:"4659d831",6:"648d84c6",7:"180fdc31",8:"063598f8",10:"983d339e"}[e]+".js"}(e),a=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,t[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;a.push([56,0,9]),t()}({120:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(29),i=t.n(a),c=t(21),l=t(11),s=t(8),u=t(46),f=t.n(u),p=t(17),d=(t(116),function(){return o.a.createElement(l.Location,null,function(e){var n=e.location,t=e.navigate,r=n.pathname,a=Object(p.a)(r);return o.a.createElement(f.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"head"},o.a.createElement("div",null,o.a.createElement(l.Link,{to:"/".concat(a)},o.a.createElement("img",{alt:"Game Workers Unite",className:"header-logo-image",src:"/images/gwu-mag-logo.svg"}),o.a.createElement("span",{className:"header-after-logo"},s.a.t("header_title")))),o.a.createElement("div",{className:"head-right"},o.a.createElement("select",{value:a,onChange:function(e){var n=e.target.value;s.a.changeLanguage(n),t(Object(p.b)(r,n))},name:"language",id:"lang-select"},o.a.createElement("option",{value:"en"},"EN"),o.a.createElement("option",{value:"fr"},"FR"))))))})}),m=(t(117),t(118),t(119),t(47)),h=t(48);function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n){return!n||"object"!==v(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var O=function(e){function n(e){var t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t=y(this,_(n).call(this,e));var r=Object(p.a)(t.props.location.pathname);return s.a.init({lng:r,resources:{en:{translation:m},fr:{translation:h}}}),t}var t,r,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(n,o.a.PureComponent),t=n,(r=[{key:"render",value:function(){return o.a.createElement(c.Root,null,o.a.createElement(c.Head,{title:s.a.t("meta.title")},o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),o.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),o.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),o.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),o.a.createElement("meta",{name:"description",content:s.a.t("meta.description")}),o.a.createElement("meta",{property:"og:title",content:s.a.t("meta.title")}),o.a.createElement("meta",{property:"og:description",content:s.a.t("meta.description")})),o.a.createElement(d,null),o.a.createElement("div",{className:"container"},o.a.createElement(c.Routes,null)))}}])&&b(t.prototype,r),a&&b(t,a),n}();function j(e){return o.a.createElement(l.Location,null,function(n){return o.a.createElement(O,g({},e,n))})}var w;n.default=j;if("undefined"!=typeof document){var P=i.a.hydrate||i.a.render;w=j,P(o.a.createElement(w,null),document.getElementById("root"))}},17:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a});var r=["en","fr"];function o(e){var n=e.slice(1,3);return-1===r.indexOf(n)?(console.warn("Unrecognized language code in pathname (".concat(e,")")),"en"):n}function a(e,n){return"/".concat(n,"/").concat(e.slice(4))}},30:function(e,n,t){"use strict";t.r(n);n.default=[{location:"/home/ben/Documents/Code/zine-gdc-2019-site",plugins:[],hooks:{}}]},38:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"notFoundTemplate",function(){return v});var r=t(5),o=t.n(r),a=t(6),i=t.n(a),c=t(9),l=t.n(c);Object(c.setHasBabelPlugin)();var s={loading:function(){return null},error:function(e){return console.error(e.error),React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")}},u=l()(i()({id:"../src/pages/404.js",load:function(){return Promise.all([t.e(8).then(t.bind(null,49))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/404.js")},resolve:function(){return 49},chunkName:function(){return"src-pages-404"}}),s),f=l()(i()({id:"../src/containers/Article",load:function(){return Promise.all([Promise.all([t.e(0),t.e(2)]).then(t.bind(null,50))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/Article")},resolve:function(){return 50},chunkName:function(){return"src-containers-Article"}}),s),p=l()(i()({id:"../src/containers/Redirect",load:function(){return Promise.all([t.e(6).then(t.bind(null,51))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/Redirect")},resolve:function(){return 51},chunkName:function(){return"src-containers-Redirect"}}),s),d=l()(i()({id:"../src/containers/BareArticle",load:function(){return Promise.all([Promise.all([t.e(0),t.e(3)]).then(t.bind(null,52))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/BareArticle")},resolve:function(){return 52},chunkName:function(){return"src-containers-BareArticle"}}),s),m=l()(i()({id:"../src/containers/Map",load:function(){return Promise.all([Promise.all([t.e(0),t.e(10),t.e(4)]).then(t.bind(null,53))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/Map")},resolve:function(){return 53},chunkName:function(){return"src-containers-Map"}}),s),h=l()(i()({id:"../src/containers/UnionFAQs",load:function(){return Promise.all([Promise.all([t.e(0),t.e(7)]).then(t.bind(null,54))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/UnionFAQs")},resolve:function(){return 54},chunkName:function(){return"src-containers-UnionFAQs"}}),s),g=l()(i()({id:"../src/containers/OpeningStatement",load:function(){return Promise.all([Promise.all([t.e(0),t.e(5)]).then(t.bind(null,55))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/OpeningStatement")},resolve:function(){return 55},chunkName:function(){return"src-containers-OpeningStatement"}}),s);n.default={"../src/pages/404.js":u,"../src/containers/Article":f,"../src/containers/Redirect":p,"../src/containers/BareArticle":d,"../src/containers/Map":m,"../src/containers/UnionFAQs":h,"../src/containers/OpeningStatement":g};var v="../src/pages/404.js"}.call(this,"/")},47:function(e){e.exports={meta:{title:"Game Workers Unite Zine - GDC 2019",description:"Read the latest zine from Game Workers Unite!"},"404_message":"404! Couldn't find that page.",read_the_zine:"Read the Zine!",site_title:"GWU GDC 2019 Zine",header_title:"GDC 2019 Zine",unionfaqs_prefix:"UnionFAQs:",unionfaqs_title:"UnionFAQs",download_zine:"Download the printable PDF version to share with your coworkers and friends!",references_page:"Links and references for the print version",printing_hints:"Printing hints",older_versions:"Previous editions",gwu_international:"Game Workers Unite International",find_local_chapter:"Find your local chapter and get involved!"}},48:function(e){e.exports={meta:{title:"Game Workers Unite Zine - GDC 2019",description:"Lisez le dernier zine de Game Workers Unite!"},"404_message":"404! Cette page est introuvable.",read_the_zine:"Lisez le Zine!",site_title:"Zine GWU GDC 2019",header_title:"Zine GDC 2019",unionfaqs_prefix:"UnionFAQs:",unionfaqs_title:"UnionFAQs",download_zine:"Téléchargez le zine!",references_page:"Page de référence",printing_hints:"Astuces pour l'impression",older_versions:"Éditions précédentes",gwu_international:"Game Workers Unite International",find_local_chapter:"Trouvez votre chapitre local et engagez vous!"}},56:function(e,n,t){t(57),t(84),e.exports=t(91)},86:function(e,n,t){var r={".":18,"./":18,"./index":18,"./index.js":18};function o(e){var n=a(e);return t(n)}function a(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=86}});
//# sourceMappingURL=main.061fdc74.js.map