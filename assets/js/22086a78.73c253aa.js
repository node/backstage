/*! For license information please see 22086a78.73c253aa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[508681],{724738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},i=void 0,s={id:"integrations/datadog-rum/installation",title:"Datadog RUM Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App",source:"@site/../docs/integrations/datadog-rum/installation.md",sourceDirName:"integrations/datadog-rum",slug:"/integrations/datadog-rum/installation",permalink:"/docs/integrations/datadog-rum/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/datadog-rum/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Datadog RUM Installation",sidebar_label:"Installation",description:"Adding Datadog Real User Monitoring (RUM) to Your App"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/bitbucketServer/discovery"},next:{title:"Locations",permalink:"/docs/integrations/gerrit/locations"}},c={},u=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Datadog Real User Monitoring (RUM) allows you to visualize and analyze the\nreal-time performance and user journeys of your application's individual users.\nThis is an option to profile and monitor the user experience of your Backstage\ninstallation."}),"\n",(0,r.jsxs)(t.p,{children:["There is a basic ",(0,r.jsx)(t.a,{href:"https://docs.datadoghq.com/real_user_monitoring/",children:"Datadog RUM"}),"\nintegration built into Backstage. You can enable it by adding the following to\nyour ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"app:\n  datadogRum:\n    clientToken: '123456789'\n    applicationId: qwerty\n  #   site: datadoghq.eu\n  #   env: 'staging'\n  #   sessionSampleRate: 100\n  #   sessionReplaySampleRate: 0\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If your ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/app-config.yaml#L5",children:(0,r.jsx)(t.code,{children:"app-config.yaml"})})," file does not have this configuration, you may have to adjust your ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/e0506af8fc54074a160fb91c83d6cae8172d3bb3/packages/app/public/index.html#L69",children:(0,r.jsx)(t.code,{children:"packages/app/public/index.html"})})," to include the Datadog RUM ",(0,r.jsx)(t.code,{children:"init()"})," section manually."]}),"\n",(0,r.jsx)(t.p,{children:"Please note that the env value MUST be specified at build time"}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["In case after a proper configuration, the events still are not being captured: Copy and paste this section in to your ",(0,r.jsx)(t.code,{children:"packages/app/public/index.html"})," under the ",(0,r.jsx)(t.code,{children:"<head>"})," tag."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<% if (config.has('app.datadogRum')) { %>\n<script>\n  (function (h, o, u, n, d) {\n    h = h[d] = h[d] || {\n      q: [],\n      onReady: function (c) {\n        h.q.push(c);\n      },\n    };\n    d = o.createElement(u);\n    d.async = 1;\n    d.src = n;\n    n = o.getElementsByTagName(u)[0];\n    n.parentNode.insertBefore(d, n);\n  })(\n    window,\n    document,\n    'script',\n    'https://www.datadoghq-browser-agent.com/datadog-rum-v3.js',\n    'DD_RUM',\n  );\n  DD_RUM.onReady(function () {\n    DD_RUM.init({\n      clientToken: '<%= config.getString(\"app.datadogRum.clientToken\") %>',\n      applicationId: '<%= config.getString(\"app.datadogRum.applicationId\") %>',\n      site: '<%= config.getOptionalString(\"app.datadogRum.site\") || \"datadoghq.com\" %>',\n      service: 'backstage',\n      env: '<%= config.getString(\"app.datadogRum.env\") %>',\n      sampleRate:\n        '<%= config.getOptionalNumber(\"app.datadogRum.sessionSampleRate\") || 100 %>',\n      sessionReplaySampleRate:\n        '<%= config.getOptionalNumber(\"app.datadogRum.sessionReplaySampleRate\") || 0 %>',\n      trackInteractions: true,\n    });\n  });\n<\/script>\n<% } %>\n"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"clientToken"})," and ",(0,r.jsx)(t.code,{children:"applicationId"})," are generated from the Datadog RUM page\nfollowing\n",(0,r.jsx)(t.a,{href:"https://docs.datadoghq.com/real_user_monitoring/browser/",children:"these instructions"}),"."]}),(0,r.jsx)(t.p,{children:"There are two optional arguments:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"site"}),": The Datadog site of your organization; defaults to ",(0,r.jsx)(t.code,{children:"datadoghq.com"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"env"}),": The application environment for Datadog events (no default)"]}),"\n"]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=_.prototype=new b;v.constructor=_,y(v,m.prototype),v.isPureReactComponent=!0;var R=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+D(c,0):a,R(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",R(e))for(var u=0;u<e.length;u++){var l=a+D(s=e[u],u);c+=C(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=C(s=s.value,t,o,l=a+D(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function U(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},$={transition:null},O={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:U,forEach:function(e,t,n){U(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return U(e,(function(){t++})),t},toArray:function(e){return U(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=_,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);