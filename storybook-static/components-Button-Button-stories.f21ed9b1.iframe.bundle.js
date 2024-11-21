/*! For license information please see components-Button-Button-stories.f21ed9b1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkvanilla_react_dkbrownn=self.webpackChunkvanilla_react_dkbrownn||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllStyles:()=>AllStyles,DisabledButton:()=>DisabledButton,SizeButton:()=>SizeButton,TypeButton:()=>TypeButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Button组件",component:_button__WEBPACK_IMPORTED_MODULE_0__.$,parameters:{layout:"centered"}},AllStyles=(()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Default Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"danger",children:"Danger Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"primary",children:"Primary Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"link",href:"https://baidu.com",target:"_blank",children:"Link Baidu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{size:"lg",children:"Large Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{size:"sm",children:"Small Button"})]})).bind({});AllStyles.storyName="全部样式的Button";const TypeButton={args:{size:"lg"},render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"default",children:"Default Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"primary",children:"Primary Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"danger",children:"Danger Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{btnType:"link",href:"https://baidu.com",children:"Link Baidu"})]}),storyName:"不同类型的Button"},SizeButton={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{size:"lg",children:"Large Button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{size:"sm",children:"Small Button"})]}),storyName:"不同大小的Button"},DisabledButton={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_button__WEBPACK_IMPORTED_MODULE_0__.$,{disabled:!0,children:"Disabled Button"}),storyName:"可禁用的Button"},__namedExportsOrder=["AllStyles","TypeButton","SizeButton","DisabledButton"];AllStyles.parameters={...AllStyles.parameters,docs:{...AllStyles.parameters?.docs,source:{originalSource:'() => <>\r\n    <Button>Default Button</Button>\r\n    <Button btnType="danger">Danger Button</Button>\r\n    <Button btnType="primary">Primary Button</Button>\r\n    <Button btnType="link" href="https://baidu.com" target="_blank">Link Baidu</Button>\r\n    <Button size="lg">Large Button</Button>\r\n    <Button size="sm">Small Button</Button>\r\n  </>',...AllStyles.parameters?.docs?.source}}},TypeButton.parameters={...TypeButton.parameters,docs:{...TypeButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  },\n  render: () => <>\r\n      <Button btnType="default">Default Button</Button>\r\n      <Button btnType="primary">Primary Button</Button>\r\n      <Button btnType="danger">Danger Button</Button>\r\n      <Button btnType="link" href="https://baidu.com">Link Baidu</Button>\r\n      \r\n    </>\n}',...TypeButton.parameters?.docs?.source}}},SizeButton.parameters={...SizeButton.parameters,docs:{...SizeButton.parameters?.docs,source:{originalSource:'{\n  render: () => <>\r\n      <Button size="lg">Large Button</Button>\r\n      <Button size="sm">Small Button</Button>\r\n    </>\n}',...SizeButton.parameters?.docs?.source}}},DisabledButton.parameters={...DisabledButton.parameters,docs:{...DisabledButton.parameters?.docs,source:{originalSource:"{\n  render: () => <Button disabled>Disabled Button</Button>\n}",...DisabledButton.parameters?.docs?.source}}}},"./src/components/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{btnType="default",disabled=!1,size,children,href,className,...restProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("vanilla-btn",className,{[`vanilla-btn-${btnType}`]:btnType,[`vanilla-btn-${size}`]:size,disabled:"link"===btnType&&disabled});return"link"===btnType&&href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classes,href,...restProps,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:classes,disabled,...restProps,children})};Button.__docgenInfo={description:'页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性\r\n##引用方法\r\n~~~js\r\nimport { Button } from "vanilla-react-dkbrownn"\r\n~~~',methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:"可以扩展的类名"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"}]},description:"Button 的尺寸"},btnType:{required:!1,tsType:{name:"union",raw:"'primary' | 'default' | 'danger' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'link'"}]},description:"按钮类型，共有四种分别为 'primary' | 'default' | 'danger' | 'link'",defaultValue:{value:'"default"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:"当按钮类型为link时，跳转的链接"}},composes:["BaseButtonProps"]}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);