(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var s=o.props[f],p=r[f]||new Set;p.has(s)?a=!1:(p.add(s),r[f]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=a.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(f(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){i(f,u);var c=s(f);function f(e){var a;return r(this,f),a=c.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("TqRt"),s=n("284h");t.__esModule=!0,t.default=void 0;var l,p=s(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=f(n("nOHt")),y=n("elyg");function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,g=window.IntersectionObserver,_={};function b(){return l||(g?l=new g((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,y.addBasePath)(m(e)),as:t?(0,y.addBasePath)(m(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,u=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),u=u?(0,d.resolve)(c,u):i,e.preventDefault();var f=o.props.scroll;null==f&&(f=u.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,u,{shallow:o.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=k},hdTg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=(n("8Kt/"),n("jS2O")),i=n.n(a),u=o.a.createElement;function c(e){var t=e.children;e.home;return u("div",{className:i.a.layout},u("main",null,t))}},jS2O:function(e,t,n){e.exports={layout:"layout_layout__2edI9"}},kAiW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/first-project",function(){return n("oVJ/")}])},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},"oVJ/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("8Kt/"),c=n.n(u),f=n("hdTg"),s=o.a.createElement;function l(){return s(f.a,null,s(c.a,null,s("title",null,"A Project")),s("h1",null," This would be a project page."),s("h2",null,s(i.a,{href:"/"},s("a",null," Back to home "))))}}},[["kAiW",0,2,1]]]);