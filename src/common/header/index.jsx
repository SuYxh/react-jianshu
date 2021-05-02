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
import { connect } from "react-redux";
import { headerAction } from "./store";

const Header = (props) => {
  console.log("props", props);
  // 热门搜索样式
  const getSearchList = (focused) => {
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              <i className="iconfont spin">&#xe626;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>yxh</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    }
  };
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
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide" // 这里一定要是 classNames ，需要加s
            >
              <NavSearch
                onFocus={props.handleInputFocused}
                onBlur={props.handleInputBlur}
                className={props.focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                props.focused ? "focused iconfont zoom" : "iconfont zoom"
              }
            >
              &#xe617;
            </i>
            {getSearchList(props.focused)}
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
};

const mapStateProps = (state) => {
  return {
    // focused: state.get("header").get("focused"),
    focused: state.getIn(["header", "focused"]),
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(headerAction.getFocuseAction());
    },
    handleInputBlur() {
      dispatch(headerAction.getBlurAction());
    },
  };
};

export default connect(mapStateProps, mapDispatchProps)(Header);
