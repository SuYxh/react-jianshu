import React, { Component } from "react";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition classNames="slide">
                <NavSearch></NavSearch>
              </CSSTransition>
              <i
                // className={focused ? "focused iconfont zoom" : "iconfont zoom"}
                className="iconfont zoom"
              >
                &#xe617;
              </i>
              {/* {this.getSearchList()} */}
            </SearchWrapper>
          </Nav>
          <Addtion>
            <Button className="write">
              <i className="iconfont">&#xe60e;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addtion>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
