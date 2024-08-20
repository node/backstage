/*! For license information please see e2090dc4.d1485f7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[717427],{76279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(785893),a=o(511151);const s={title:"Announcing the Backstage Search platform: a customizable search tool built just for you",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},r=void 0,i={permalink:"/blog/2021/06/24/announcing-backstage-search-platform",source:"@site/blog/2021-06-24-announcing-backstage-search-platform.mdx",title:"Announcing the Backstage Search platform: a customizable search tool built just for you",description:"Backstage Search platform",date:"2021-06-24T00:00:00.000Z",tags:[],readingTime:6.825,hasTruncateMarker:!0,authors:[{name:"Emma Indal, Spotify",url:"https://www.linkedin.com/in/emma-indal"}],frontMatter:{title:"Announcing the Backstage Search platform: a customizable search tool built just for you",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},unlisted:!1,prevItem:{title:"Software Templates is now in Beta",permalink:"/blog/2021/07/26/software-templates-are-now-in-beta"},nextItem:{title:"How Spotify is helping more companies adopt Backstage",permalink:"/blog/2021/06/22/spotify-backstage-is-growing"}},c={authorsImageUrls:[void 0]},l=[{value:"Search and explore",id:"search-and-explore",level:2},{value:"Rethinking search, inside and out",id:"rethinking-search-inside-and-out",level:2},{value:"Say hello to the Backstage Search platform",id:"say-hello-to-the-backstage-search-platform",level:2},{value:"Bring your own search engine",id:"bring-your-own-search-engine",level:3},{value:"Collators for easily indexing content from plugins and other sources",id:"collators-for-easily-indexing-content-from-plugins-and-other-sources",level:3},{value:"Composable search page experiences",id:"composable-search-page-experiences",level:3},{value:"Customize the look and feel of each search result",id:"customize-the-look-and-feel-of-each-search-result",level:3},{value:"Getting started with Backstage Search",id:"getting-started-with-backstage-search",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Backstage Search platform",src:o(705289).Z+"",width:"8002",height:"4502"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TLDR;"})," The new Backstage Search is now available in alpha, ready for you to start building on. A total rethinking of the core search feature in Backstage, it\u2019s more than just a box you type into \u2014 it\u2019s a mini platform all by itself. With its composable frontend and extensible backend, you can design and build the search tool that suits your organization\u2019s needs."]}),"\n",(0,n.jsx)(t.p,{children:"So, you don\u2019t just get an improved out-of-the-box experience for searching whatever is in your software catalog. You can also add support for searching other sources, too. Customize it the way you want and you can search your catalog, your plugins and docs \u2014 and even external sources, like Stack Overflow and Confluence \u2014 all at once, all right inside Backstage."}),"\n",(0,n.jsx)(t.p,{children:"With one query, your teams can find exactly what they\u2019re looking for: anything and everything."}),"\n","\n",(0,n.jsx)(t.h2,{id:"search-and-explore",children:"Search and explore"}),"\n",(0,n.jsxs)(t.p,{children:["Being able to easily explore your ecosystem \u2014 to discover software, tools, documentation, and other valuable knowledge \u2014 is one of ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2021/05/20/adopting-backstage#three-jobs-create-manage-explore",children:"the three main jobs of Backstage"}),". Teams should be able to find what other teams have already built, so they can reuse and contribute to components instead of unknowingly duplicating them. Data endpoints should be shared, not siloed away. Services and their APIs should be easily discoverable. Best practices and technical documentation should be easily found."]}),"\n",(0,n.jsxs)(t.p,{children:["Along with the ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha",children:"Backstage Service Catalog"}),", Backstage Search is essential to enabling this discoverability \u2014 allowing new hires and old hands alike to explore your infrastructure instead of getting lost inside it."]}),"\n",(0,n.jsx)(t.p,{children:"We also quickly realized that search looks different from organization to organization. Therefore, we built a search platform that lets you plug in your own search engine, index any information you like, or build a customized search page experience that fits your users\u2019 needs."}),"\n",(0,n.jsx)(t.p,{children:"Since finding what you are looking for in Backstage is critical for success, we started by identifying the needs and goals of search."}),"\n",(0,n.jsx)(t.h2,{id:"rethinking-search-inside-and-out",children:"Rethinking search, inside and out"}),"\n",(0,n.jsxs)(t.p,{children:["Spotify\u2019s internal version of Backstage has had some of the features of Backstage Search for a while, and open sourcing them has been top of mind since day one. But we didn\u2019t want to just port our internal version to the open source version. We wanted to take the opportunity to apply what we\u2019ve learned inside Spotify over the last year, address the needs we\u2019ve observed in the community, and ultimately open source not just a search feature but a search platform. We started the process by looking at the ",(0,n.jsx)(t.a,{href:"https://hbr.org/2016/09/know-your-customers-jobs-to-be-done",children:"jobs to be done"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Backstage Search platform",src:o(688323).Z+"",width:"8122",height:"2975"}),"\n",(0,n.jsx)(t.em,{children:"A high-level overview of the process, identifying all the jobs of search."})]}),"\n",(0,n.jsx)(t.p,{children:"First, we looked at which jobs to be done belonged to the search plugin itself (e.g., \u201ccollect documents to index\u201d) and which belonged to the other plugins (e.g., \u201cformat documents for indexing\u201d), and then whether those jobs belonged to the frontend (\u201cdisplay results\u201d) or the backend (\u201cschedule indexing\u201d)."}),"\n",(0,n.jsx)(t.p,{children:"Looking at all these various jobs, we defined four goals for the platform:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Flexibility:"})," Be search engine\u2013agnostic"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simplicity:"})," Make it easy for content owners to make their content searchable/discoverable"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Control:"})," Allow plugin developers to customize their search results components"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Reusability:"})," Offer reusable components/APIs that other devs can leverage"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Beginning our journey this way \u2014 by identifying the jobs to be done first, then defining the product goals from there \u2014 we could make sure that the search platform addressed real needs and improved the search experience for both users and plugin developers."}),"\n",(0,n.jsx)(t.p,{children:"This approach not only created a better search tool for the open source community, but for Spotify, as well. So, instead of just open sourcing our internal version of search, we ended up with an even better solution \u2014 one that we can all use and build on together, both inside and outside Spotify."}),"\n",(0,n.jsx)(t.h2,{id:"say-hello-to-the-backstage-search-platform",children:"Say hello to the Backstage Search platform"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Backstage Search platform",src:o(614287).Z+"",width:"1230",height:"681"})}),"\n",(0,n.jsxs)(t.p,{children:["We are now happy and proud to announce our alpha version of the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/search/architecture",children:"Backstage Search Platform"}),", featuring:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bring your own search engine (Flexibility)"}),"\n",(0,n.jsx)(t.li,{children:"Collators for easily indexing content from plugins and other sources (Simplicity)"}),"\n",(0,n.jsx)(t.li,{children:"Composable search page experiences (Control, Reusability)"}),"\n",(0,n.jsx)(t.li,{children:"Customize the look and feel of each search result (Control, Reusability)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"bring-your-own-search-engine",children:"Bring your own search engine"}),"\n",(0,n.jsx)(t.p,{children:"By introducing a Search Integration Layer, we have been able to keep the query translation of the search term and filters close to the search engine itself. This makes our search backend less focused on how a set of terms and filters should be translated to fit a certain search engine interface and more focused on querying and retrieving results as well as collecting results to index."}),"\n",(0,n.jsx)(t.p,{children:"With the Search Integration Layer, your organization can bring your search engine of choice to Backstage \u2014 instead of relying on Backstage to support a specific search engine that might not fit the needs of your organization, either today or in the future."}),"\n",(0,n.jsx)(t.p,{children:"But that doesn\u2019t mean \u201cbatteries not included\u201d. The current version of Backstage Search ships with Lunr support built-in \u2014 and support for ElasticSearch is not very far off. And we hope the number of supported search engines will continue to grow with the community\u2019s help."}),"\n",(0,n.jsx)(t.h3,{id:"collators-for-easily-indexing-content-from-plugins-and-other-sources",children:"Collators for easily indexing content from plugins and other sources"}),"\n",(0,n.jsx)(t.p,{children:"Since Backstage\u2019s functionality comes from its plugins, we wanted the process of making plugin content searchable to be as frictionless as possible. Therefore we decided on a concept we call collators. Collators are responsible for collecting documents to index from a plugin. Your collators live inside your own plugin, but are registered in the Backstage app\u2019s search backend."}),"\n",(0,n.jsxs)(t.p,{children:["Collators can also be used to index external sources, like Stack Overflow and Confluence. You can watch a demo of how easy it is to extend search with collators ",(0,n.jsx)(t.a,{href:"https://youtu.be/Z78FFaObTfk?t=339",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"composable-search-page-experiences",children:"Composable search page experiences"}),"\n",(0,n.jsx)(t.p,{children:"Every engineering org has different needs \u2014 that is something we have definitely learned over the last year. Your software catalog might be set up differently than ours and therefore your needs for how search results look and how the search filters work will also differ."}),"\n",(0,n.jsx)(t.p,{children:"That's why we have put effort into making your search page experience composable to your organization's needs. What do we mean by that? When you adopt Backstage and set up your app, you can set up \u2014 or, compose \u2014 your search page by using existing components or by creating your own custom ones."}),"\n",(0,n.jsx)(t.h3,{id:"customize-the-look-and-feel-of-each-search-result",children:"Customize the look and feel of each search result"}),"\n",(0,n.jsx)(t.p,{children:"A good example of the level of customization the platform allows is how list items are displayed in search results. A search result component can be a list, this list can consist of different list items (search results returned from the search engine) \u2014 but these list items could look different depending on what the search result returns in terms of its fields."}),"\n",(0,n.jsxs)(t.p,{children:["Let\u2019s say that for an entity returned from the software catalog maybe the most important information to show is the name, while a result returned from the TechDocs plugin should maybe show the text content as the most important information. This can be customized by creating ",(0,n.jsx)(t.code,{children:"<CustomResultListItem />"})," components (like ",(0,n.jsx)(t.code,{children:"TechDocsResultListItem"})," or ",(0,n.jsx)(t.code,{children:"CatalogResultListItem"})," or whatever list item component you want) and configuring them in the app."]}),"\n",(0,n.jsxs)(t.p,{children:["If there is no need to customize your search result list items, the ",(0,n.jsx)(t.code,{children:"<DefaultResultListItem />"})," component is there for you to reuse."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-backstage-search",children:"Getting started with Backstage Search"}),"\n",(0,n.jsxs)(t.p,{children:["We put together ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/search/getting-started",children:"a getting started guide"})," that provides two different ways to set up Backstage Search:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a new app and get the most out of the search setup right out of the box, or"}),"\n",(0,n.jsx)(t.li,{children:"Add the new Backstage Search setup to your existing Backstage app."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Whichever situation you\u2019re in, we have you covered."}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What\u2019s next?"}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve built the foundation for the Backstage Search platform, and we can't wait to see the exciting engines, collators, and components the community builds on the platform."}),"\n",(0,n.jsxs)(t.p,{children:["You can check out our ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/search/#project-roadmap",children:"project roadmap"})," in our search documentation or track the progress of our ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestone/27",children:"Beta milestone"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestone/28",children:"GA milestone"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For any questions, feedback or ideas about the Backstage Search platform, join us in the #search channel on ",(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"}),"!"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},675251:(e,t,o)=>{var n=o(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,s={},l=null,h=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:h,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},785893:(e,t,o)=>{e.exports=o(675251)},705289:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/backstage-search-platform-a2c925e7e7fa9aa3cc6e1e24d01bce7d.png"},688323:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/jobs-to-be-done-017935cc673ca82e9d43760ab2acbcbf.png"},614287:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/search-results-7958b00b1c30bfeb3de84cb5707cf5da.png"},511151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var n=o(667294);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);