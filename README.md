# 使用 React+typescript 打造的组件库

### 安装试试
~~~js
npm install vanilla-react-dkbrown --save
~~~
### 使用
~~~js
// 加载样式
import 'vanilla-react-dkbrown/dist/index.css'
// 引入组件
import { Button } from 'vanilla-react-dkbrown'
~~~
### 亮点
* 🔥typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)
* 🌹样式（Sass）文件从零开始，使用大型应用的 CSS 组织方法
* 🎉提供 husky提交发布前验证，travis CI/CD 集成等

###本地开发命令
``bash
#安装项目依赖
npm install

#启动本地环境
npm run stroybook

#单元测试
npm test

#生成静态文件
npm run build

#发布到 npm
npm publish
```

