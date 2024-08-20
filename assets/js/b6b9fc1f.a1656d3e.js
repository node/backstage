/*! For license information please see b6b9fc1f.a1656d3e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[945996],{932196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(824246),i=n(511151);const o={id:"creating",title:"Creating Utility APIs",sidebar_label:"Creating APIs",description:"Creating new utility APIs in your plugins and app"},a=void 0,s={id:"frontend-system/utility-apis/creating",title:"Creating Utility APIs",description:"Creating new utility APIs in your plugins and app",source:"@site/../docs/frontend-system/utility-apis/02-creating.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/creating",permalink:"/docs/frontend-system/utility-apis/creating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/utility-apis/02-creating.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"creating",title:"Creating Utility APIs",sidebar_label:"Creating APIs",description:"Creating new utility APIs in your plugins and app"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/frontend-system/utility-apis/index"},next:{title:"Consuming APIs",permalink:"/docs/frontend-system/utility-apis/consuming"}},c={},u=[{value:"Creating the Utility API contract",id:"creating-the-utility-api-contract",level:2},{value:"Providing an extension through your plugin",id:"providing-an-extension-through-your-plugin",level:2},{value:"Adding configurability",id:"adding-configurability",level:2},{value:"Adding inputs",id:"adding-inputs",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This section describes how to make a Utility API from scratch, or to add configurability and inputs to an existing one. If you are instead interested in migrating an existing Utility API from the old frontend system, check out the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/building-plugins/migrating#migrating-apis",children:"Migrating APIs section"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-the-utility-api-contract",children:"Creating the Utility API contract"}),"\n",(0,r.jsxs)(t.p,{children:["The first step toward exposing a utility API is to define its TypeScript contract, as well as an API reference for consumers use to access the implementation. If you want your API to be accessible by other plugins this should be done in ",(0,r.jsxs)(t.a,{href:"/docs/architecture-decisions/adrs-adr011",children:["your plugin's ",(0,r.jsx)(t.code,{children:"-react"})," package"]}),", so that it can be imported separately. If you just want to use the API within your own plugin it is fine to place the definition within the plugin itself. In this example, we have an Example plugin that wants to expose a utility API for performing some type of work."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example-react"',children:"import { createApiRef } from '@backstage/frontend-plugin-api';\n\n/**\n * The work interface for the Example plugin.\n * @public\n */\nexport interface WorkApi {\n  /**\n   * Performs some work.\n   */\n  doWork(): Promise<void>;\n}\n\n/**\n * API Reference for {@link WorkApi}.\n * @public\n */\nexport const workApiRef = createApiRef<WorkApi>({\n  id: 'plugin.example.work',\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Both of these are properly exported publicly from the package, so that consumers can reach them."}),"\n",(0,r.jsx)(t.h2,{id:"providing-an-extension-through-your-plugin",children:"Providing an extension through your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["The plugin itself now wants to provide this API and its default implementation, in the form of an API extension. Doing so means that when users install the Example plugin, an instance of the Work utility API will also be automatically available in their apps - both to the Example plugin itself, and to others. We do this in the main plugin package, not the ",(0,r.jsx)(t.code,{children:"-react"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"import {\n  ApiBlueprint,\n  createApiFactory,\n  createFrontendPlugin,\n  storageApiRef,\n  StorageApi,\n} from '@backstage/frontend-plugin-api';\nimport { WorkApi, workApiRef } from '@internal/plugin-example-react';\n\nclass WorkImpl implements WorkApi {\n  constructor(options: { storageApiRef: StorageApi }) {\n    /* TODO */\n  }\n  async doWork() {\n    /* TODO */\n  }\n}\n\nconst workApi = ApiBlueprint.make({\n  name: 'work',\n  params: {\n    factory: createApiFactory({\n      api: workApiRef,\n      deps: { storageApi: storageApiRef },\n      factory: ({ storageApi }) => {\n        return new WorkImpl({ storageApi });\n      },\n    }),\n  },\n});\n\n/**\n * The Example plugin.\n * @public\n */\nexport default createFrontendPlugin({\n  id: 'example',\n  extensions: [exampleWorkApi],\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"For illustration we make a skeleton implementation class and the API extension and factory for it, in the same file. These are not exported to the public surface of the plugin package; only the plugin is, as the default export. Users who install the plugin will now get the utility API automatically as well."}),"\n",(0,r.jsx)(t.p,{children:"The code also illustrates how the API factory declares a dependency on another utility API - the core storage API in this case. An instance of that utility API is then provided to the factory function."}),"\n",(0,r.jsxs)(t.p,{children:["The extension ID of the work API will be the kind ",(0,r.jsx)(t.code,{children:"api:"})," followed by the plugin ID as the namespace, a ",(0,r.jsx)(t.code,{children:"/"})," separator, and lastly the name we used of the extension. In this case we end up with ",(0,r.jsx)(t.code,{children:"api:example/work"}),". Check out ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"the naming patterns doc"})," for more information on how this works. You can now use this ID to refer to the API in app-config and elsewhere. In case there is a single API that is a central to the functionality of the plugin, most typically an API client, you can choose to omit the name of the extension so that you end up with just ",(0,r.jsx)(t.code,{children:"api:<pluginId>"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-configurability",children:"Adding configurability"}),"\n",(0,r.jsxs)(t.p,{children:["Here we will describe how to amend a utility API with the capability of having extension config, which is driven by ",(0,r.jsx)(t.a,{href:"/docs/conf/writing",children:"your app-config"}),". You do this by giving an extension config schema to your API extension factory function. Let's refactory the example above to also accept configuration, which will require us to use the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-blueprints#creating-an-extension-from-a-blueprint-with-overrides",children:"override method of the blueprint"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"const exampleWorkApi = ApiBlueprint.makeWithOverrides({\n  config: {\n    schema: {\n      goSlow: z => z.boolean().default(false),\n    },\n  },\n  factory(originalFactory, { config }) {\n    return originalFactory({\n      factory: createApiFactory({\n        api: workApiRef,\n        deps: { storageApi: storageApiRef },\n        factory: ({ storageApi }) => {\n          return new WorkImpl({\n            storageApi,\n            goSlow: config.goSlow,\n          });\n        },\n      }),\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We wanted users to be able to set a ",(0,r.jsx)(t.code,{children:"goSlow"})," extension config parameter for our API instances, which we declared in our new configuration schema. The actual extension config values will then be passed in a type safe manner in to the blueprint ",(0,r.jsx)(t.code,{children:"factory"}),", wherein we can use them to create our API factory and pass as our blueprint parameters."]}),"\n",(0,r.jsxs)(t.p,{children:['Note that the expression "extension config" as used here, is ',(0,r.jsx)(t.em,{children:"not"})," the same thing as the ",(0,r.jsx)(t.code,{children:"configApi"})," which gives you access to the full app-config. The extension config discussed here is instead the particular configuration settings given to your utility API instance. This is discussed more ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"in the Configuring section"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Note also that the extension config schema contained a default value fo the ",(0,r.jsx)(t.code,{children:"goSlow"})," field. This is an important consideration. You want users of your API to be able to get maximum value out of it, without having to dive deep into how to configure it. For that reason you generally want to provide as many sane defaults as possible, while letting users override them rarely but with purpose, only when called for. If you have an extension config schema without defaults, the framework will refuse to instantiate the utility API on startup unless the user had configured those values explicitly. Since it had a default value, the TypeScript code and interfaces also don't have to defensively allow ",(0,r.jsx)(t.code,{children:"undefined"})," - we know that it'll have either the default value or an overridden value when we start consuming the extension config data."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-inputs",children:"Adding inputs"}),"\n",(0,r.jsx)(t.p,{children:"Inputs are added to Utility APIs in the same way as other extension blueprints:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:".makeWithOverrides"})," and declare a set of ",(0,r.jsx)(t.code,{children:"inputs"})," for your extension."]}),"\n",(0,r.jsx)(t.li,{children:"If needed, create custom extension data types to be used in those inputs."}),"\n",(0,r.jsxs)(t.li,{children:["If needed, create and export an ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-blueprints#creating-an-extension-blueprint",children:"extension blueprint"})," for creating that particular attachment type."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is a power use case and not very commonly used."}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/consuming",children:"the Consuming section"})," to see how to consume this new utility API in various ways. If you wish to configure and add inputs to it, check out ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"the Configuring section"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var b=w.prototype=new x;b.constructor=w,y(b,m.prototype),b.isPureReactComponent=!0;var v=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)A.call(t,i)&&!j.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===o[i]&&(o[i]=c[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+S(c,0):o,v(a)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),C(a,t,i,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",v(e))for(var u=0;u<e.length;u++){var l=o+S(s=e[u],u);c+=C(s,t,i,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=C(s=s.value,t,i,l=o+S(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},O={transition:null},$={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=a,t.PureComponent=w,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)A.call(t,u)&&!j.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=I,t.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);