(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3565],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5386:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(4034),r=n(7294),l=n(2389),s=n(8578);var o=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(9558),u=n(6010),c="tabItem_2kG2";function m(e){var t,n,a,l=e.lazy,s=e.block,m=e.defaultValue,p=e.values,g=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),d=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(d.length>0)throw new Error('Docusaurus error: Duplicate values "'+d.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),k=y.tabGroupChoices,L=y.setTabGroupChoices,C=(0,r.useState)(v),T=C[0],M=C[1],w=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=k[g];null!=E&&E!==T&&h.some((function(e){return e.value===E}))&&M(E)}var G=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==T&&(N(t),M(a),null!=g&&L(g,a))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:B,onFocus:G,onClick:G},null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8578:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},1989:function(e,t,n){"use strict";var a=n(7294),r=n(2263);t.Z=function(e){var t=e.className,n=e.py,l=e.scala,s=e.sourceLink,o=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+o+"/pyspark/"+n,u="https://mmlspark.blob.core.windows.net/docs/"+o+"/scala/"+l;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:i},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:u},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:s},t)))))}},9074:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return d}});var a=n(4034),r=n(9973),l=(n(7294),n(3905)),s=n(5386),o=n(1332),i=n(1989),u=["components"],c=[{value:"LightGBMClassifier",id:"lightgbmclassifier",children:[],level:2},{value:"LightGBMRanker",id:"lightgbmranker",children:[],level:2},{value:"LightGBMRegressor",id:"lightgbmregressor",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lightgbmclassifier"},"LightGBMClassifier"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmClassifier = (LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmClassifier = (new LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n')))),(0,l.kt)(i.Z,{className:"LightGBMClassifier",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMClassifier",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmranker"},"LightGBMRanker"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRanker = (LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(False)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRanker = (new LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(false)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRanker",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRanker",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmregressor"},"LightGBMRegressor"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRegressor = (LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRegressor = (new LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRegressor",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRegressor",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var g=["components"],f={title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},b="LightGBM",h={unversionedId:"documentation/estimators/estimators_lightgbm",id:"version-0.9.1/documentation/estimators/estimators_lightgbm",isDocsHomePage:!1,title:"Estimators - LightGBM",description:"export const toc = [...LightGBMTOC]",source:"@site/versioned_docs/version-0.9.1/documentation/estimators/estimators_lightgbm.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_lightgbm",permalink:"/SynapseML/docs/documentation/estimators/estimators_lightgbm",tags:[],version:"0.9.1",frontMatter:{title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},sidebar:"version-0.9.1/docs",previous:{title:"Core",permalink:"/SynapseML/docs/documentation/estimators/estimators_core"},next:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/documentation/estimators/estimators_vw"}},d=[].concat(c),v={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,l.kt)(p,{mdxType:"LightGBM"}))}y.isMDXComponent=!0}}]);