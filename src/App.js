import React, { Component, Fragment } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont";

import Header from "./common/header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle /> {/* 清理默认样式 */}
        <GlobalStyleIcon />
        <Header />
        <div className="App">app</div>
      </Fragment>
    );
  }
}

export default App;
