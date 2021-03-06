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


### 6. 使用combineReducers完成对数据的拆分管理

2. 把store拆分到header中
3. 用combineReducers组合store
4. 修改header中state的调用


### 7. actionCreators和actionType拆分action

1. 把reducer、actionCreators、actionType拆分出来汇总到store的index中暴露出去
2. 调用store中的index修改外部使用

### 8. 使用immutable.js来管理store中的数据

- 作用

​	immutable对象是不可直接赋值的对象，它可以有效的避免错误赋值的问题

- 安装

```undefined
npm install immutable
```

- 使用

  在react中，immutable主要是防止state对象被错误赋值。

  - 将js对象转成immutable对象

  ```js
  import { fromJS } from 'immutable';
  const defaultState = fromJS({
    todoList: []
  });
  ```

  - 获取属性

  ```csharp
  state.get('todoList'); // 获取store中的todoList
  statae.get(['Main', 'todoList']); // 获取Main组件中store的todoList
  ```

  - 改变属性

  ```csharp
  state.set('todoList', action.value);  // 设置单个属性值
  // 设置多个属性
  state.merge({
    todoList: fromJS(action.value), // 由于action.value是js对象所以要转成immutable对象
  });
  ```

  - 将immutable对象转成js对象

  ```csharp
  state.get('todoList').toJS(); // 把todoList转成js数组
  ```

1. 安装immutable获取fromJS方法

2. 初始state用fromJS方法包裹

3. 在组件中获取用get方法

   ```js
   state.header.get('foucsed')
   ```

4. 在reducer中设置用set方法

   ```js
   // immutable对象的set方法,会结合之前immutable对象的值和set的值，返回一个新的对象
   	state.set('focused',true)
   ```


### 9. 使用redux-immutable统一数据格式

- 因为获取state的时候还不是immutable对象，可以使用redux-immutable把state变成immutable对象

1. 安装redux-immutable

2. 把combineReducers换成从redux-immutable

   ```js
   import { combineReducers } from "redux-immutable";
   ```

3. 使用immutable的getIn方法获取state

   ```js
   const mapStateProps = state => {
     return {
       focused: state.getIn(["header", "focused"])
     };
   };
   ```

   ### 10. 热门搜索样式布局

1. 完成热门搜索样式布局
2. 根据focused属性来决定是否显示


### 11. ajax获取推荐数据

1. 把header组件从UI组件改成普通组件
2. 安装redux-thunk 并且使用
3. 当失去焦点的时候调用actionCreator里的getList方法实现异步操作
4. public目录下定义模拟数据
5. 发送axios获取到数据(**因为获取的数据不是immutable所以要用fromJS方法包装**)给action然后派发action
6. 在reducer中使用state.set方法把数据赋值给list
7. 在header组件拿到lis使用map循环渲染数据


### 12. 代码优化微调

1. header使用this.props结构赋值
2. reducer使用switch语句

### 13. 热门搜索换页功能

- 渲染10条数据

1. 在store声明page,totalPage存当前页和总页数
2. 获取数据算出多少条赋值给action的totalPage
3. 在reducer中使用set方法修改stata的totalPage
4. header中获取page,根据page算出显示10条
5. 循环list显示10条数据（**list现在是immutable对象,用toJS方法转成js对象才能循环**）

- 换一换的显示隐藏

1. SearchInfo添加onMouseEnter和onMouseLeave事件

2. 在store添加mouseIn属性控制SearchInfo的显示隐藏

3. 触发事件>action>dispatch(action)>reducer来改变mouseIn的值,判断mouseIn为true/false来显示隐藏

   ```js
    if (focused || mouseIn) {
         return (
           <SearchInfo onMouseEnter={handlerMouseEnter}onMouseLeave={handlerMouseLeave} >
           // ...
           </SearchInfo>  )};        
   ```

- 实现换一换

1. 组件中获取totalPage属性出入换一换事件函数page和totalPage进行判断显示页数
2. aciton存页数>dispatch(action)>reudcer>action.page改变store.page
