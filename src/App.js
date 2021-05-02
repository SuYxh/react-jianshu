import React, { Component } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./common/header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle /> {/* 清理默认样式 */}
        <GlobalStyleIcon />
        <Header />
        <div className="App">app</div>
      </Provider>
    );
  }
}

export default App;
