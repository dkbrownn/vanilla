"use strict";(self.webpackChunkvanilla_react_dkbrownn=self.webpackChunkvanilla_react_dkbrownn||[]).push([[631],{"./src/components/Alert/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllStyles:()=>AllStyles,CanClose:()=>CanClose,NotClose:()=>NotClose,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),transition=__webpack_require__("./src/components/Transition/transition.tsx"),icon=__webpack_require__("./src/components/Icon/icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=_ref=>{let{className,close=!0,alType="default",title="title",desc,onClose}=_ref;const classes=classnames_default()("vanilla-alert",className,{[`vanilla-alert-${alType}`]:alType}),[hide,setHide]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(transition.e,{in:!hide,unmountOnExit:!0,timeout:300,animation:"zoom-in-top",children:(0,jsx_runtime.jsxs)("div",{className:classes,children:[(0,jsx_runtime.jsxs)("p",{className:"vanilla-alert-title",children:[title," "]}),desc?(0,jsx_runtime.jsx)("p",{className:"vanilla-alert-desc",children:desc}):null,close?(0,jsx_runtime.jsx)(icon.I,{className:"vanilla-alert-close",onClick:()=>{onClose&&onClose(),setHide(!0)},icon:"times"}):null]})})};Alert.__docgenInfo={description:'用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失\r\n##引用方法\r\n~~~js\r\nimport { Alert } from "vanilla-react-dkbrownn"\r\n~~~',methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:"自定义标题"},close:{required:!1,tsType:{name:"boolean"},description:"是否可以手动关闭",defaultValue:{value:"true",computed:!1}},alType:{required:!1,tsType:{name:"union",raw:"'success' | 'default' | 'danger' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"}]},description:"类型 四种可选 针对四种不同的场景",defaultValue:{value:'"default"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"alert标题",defaultValue:{value:'"title"',computed:!1}},desc:{required:!1,tsType:{name:"string"},description:"内容描述"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭alert时触发的事件"}}};const alert_stories={title:"Alert组件",component:Alert},AllStyles=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Alert,{title:"default",alType:"default"}),(0,jsx_runtime.jsx)(Alert,{title:"success",alType:"success"}),(0,jsx_runtime.jsx)(Alert,{title:"warning",alType:"warning",desc:"this is warning infomation"}),(0,jsx_runtime.jsx)(Alert,{title:"danger",alType:"danger"}),(0,jsx_runtime.jsx)(Alert,{title:"default",alType:"default",close:!1})]});AllStyles.storyName="全部样式的Alert";const CanClose={args:{alType:"success",close:!0,title:"which alert can be closed"},storyName:"可以关闭的Alert"},NotClose={args:{alType:"success",close:!1,title:"which alert can not be closed"},storyName:"不可以关闭的Alert"},__namedExportsOrder=["AllStyles","CanClose","NotClose"];AllStyles.parameters={...AllStyles.parameters,docs:{...AllStyles.parameters?.docs,source:{originalSource:'() => <>\r\n    <Alert title="default" alType="default"></Alert>\r\n    <Alert title="success" alType="success"></Alert>\r\n    <Alert title="warning" alType="warning" desc="this is warning infomation"></Alert>\r\n    <Alert title="danger" alType="danger"></Alert>\r\n    <Alert title="default" alType="default" close={false}></Alert>\r\n  </>',...AllStyles.parameters?.docs?.source}}},CanClose.parameters={...CanClose.parameters,docs:{...CanClose.parameters?.docs,source:{originalSource:'{\n  args: {\n    alType: "success",\n    close: true,\n    title: "which alert can be closed"\n  }\n}',...CanClose.parameters?.docs?.source}}},NotClose.parameters={...NotClose.parameters,docs:{...NotClose.parameters?.docs,source:{originalSource:'{\n  args: {\n    alType: "success",\n    close: false,\n    title: "which alert can not be closed"\n  }\n}',...NotClose.parameters?.docs?.source}}}},"./src/components/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=_ref=>{let{theme,className,...restProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("vanilla-icon",className,{[`vanilla-icon-${theme}`]:theme});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{className:classes,...restProps})};Icon.__docgenInfo={description:'提供了一套常用的图标集合 基y于react-fontawesome。\r\n\r\n支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic\r\n\r\n支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free\r\n\r\n##引用方法\r\n~~~js\r\nimport { Icon } from "vanilla-react-dkbrownn"\r\n~~~',methods:[],displayName:"Icon",props:{theme:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"图标主题色"},size:{required:!1,tsType:{name:"SizeProp"},description:"图标尺寸"},icon:{required:!0,tsType:{name:"IconProp"},description:"图标类型"}},composes:["FontAwesomeIconProps"]}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Transition});__webpack_require__("./node_modules/react/index.js");var react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=_ref=>{let{children,classNames,animation,appear=!0,wrapper,unmountOnExit=!0,...restProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.A,{classNames:classNames||animation,appear:!0,unmountOnExit:!0,...restProps,children:wrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children}):children})};Transition.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:"'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'",elements:[{name:"literal",value:"'zoom-in-top'"},{name:"literal",value:"'zoom-in-left'"},{name:"literal",value:"'zoom-in-bottom'"},{name:"literal",value:"'zoom-in-right'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wrapper:{required:!1,tsType:{name:"boolean"},description:""},appear:{defaultValue:{value:"true",computed:!1},required:!1},unmountOnExit:{defaultValue:{value:"true",computed:!1},required:!1}}}}}]);