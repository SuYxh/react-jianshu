## React实战仿简书

### 1. 项目搭建

1. 使用styled-components布局
   - createGlobalStyle方法中使用reset.css清除默认样式

2. createGlobalStyle方法是组件的形式使用

### 2. styled-components完成Header组件布局

1. 在src/common/header/**index.jsx**中创建Header组件
2. 在src//common/header/**style.js**中使用styled-components完成Header组件布局

### 3. 使用iconfont嵌入头部图标

1. 下载完图标以后iconfont.css中@font-face里面url的路径加一个./ 相对路径
2. 使用createGlobalStyle方法把iconfont.css改成iconfont.js全局样式
3. 把Aa换成图标
4. 添加放大镜图标
   - 把后缀eot、svg、ttf、woff、css文件拷贝到statics文件

### 4. 搜索框动画效果实现

1. 添加state属性focused
2. 通过获取失去焦点事件设置focused的true/false来显示搜索框
3. 使用react-transition-group实现动画效果

### 5. 使用react-redux进行应用数据的管理

1. 创建store
2. 创建reducer
3. 使用react-redux替换原来的写法
4. 把状态组件改成UI组件