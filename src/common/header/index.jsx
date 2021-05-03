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

class Header extends Component {
  getSearchList() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handlerMouseEnter,
      handlerMouseLeave,
      handlerchangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    // 根据page算出显示10条数据
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handlerchangePage(page, totalPage)}
            >
              <i className="iconfont spin">&#xe626;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }

  render() {
    const { handleInputFocused, handleInputBlur, focused } = this.props;
    console.log("this.props", this.props);
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
                in={focused}
                timeout={200}
                classNames="slide" // 这里一定要是 classNames ，需要加s
              >
                <NavSearch
                  onFocus={handleInputFocused}
                  onBlur={handleInputBlur}
                  className={focused ? "focused" : ""}
                ></NavSearch>
              </CSSTransition>
              <i
                className={focused ? "focused iconfont zoom" : "iconfont zoom"}
              >
                &#xe617;
              </i>
              {this.getSearchList()}
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

const mapStateProps = (state) => {
  return {
    // focused: state.get("header").get("focused"),
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(headerAction.getList());
      dispatch(headerAction.getFocuseAction());
    },
    handleInputBlur() {
      dispatch(headerAction.getBlurAction());
    },
    handlerMouseEnter() {
      dispatch(headerAction.getMouseEnter());
    },
    handlerMouseLeave() {
      dispatch(headerAction.getMouseLeave());
    },
    handlerchangePage(page, totalPage, spin) {
      // console.log(spin);
      // // 每次点击让角度旋转360
      // let orginAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      // if (orginAngle) {
      //   orginAngle = parseInt(orginAngle, 10);
      // } else {
      //   orginAngle = 0;
      // }
      // spin.style.transform = `rotate(${orginAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(headerAction.changePage(page + 1));
      } else {
        dispatch(headerAction.changePage(1));
      }
    },
  };
};

export default connect(mapStateProps, mapDispatchProps)(Header);
