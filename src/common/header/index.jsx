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

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       focused: false,
//     };
//     this.handleInputFocused = this.handleInputFocused.bind(this);
//     this.handleInputBlur = this.handleInputBlur.bind(this);
//   }

//   handleInputFocused() {
//     console.log("focused");
//     this.setState({
//       focused: true,
//     });
//   }

//   handleInputBlur() {
//     console.log("blur");
//     this.setState({
//       focused: false,
//     });
//   }
//   render() {
//     // const { focused } = this.props;
//     return (
//       <div>
//         <HeaderWrapper>
//           <Logo />
//           <Nav>
//             <NavItem className="left active">首页</NavItem>
//             <NavItem className="left">下载App</NavItem>
//             <NavItem className="right">登录</NavItem>
//             <NavItem className="right">
//               <i className="iconfont">&#xe636;</i>
//             </NavItem>
//             <SearchWrapper>
//               <CSSTransition
//                 in={this.state.focused}
//                 timeout={200}
//                 classNames="slide" // 这里一定要是 classNames ，需要加s
//               >
//                 <NavSearch
//                   onFocus={this.handleInputFocused}
//                   onBlur={this.handleInputBlur}
//                   className={this.state.focused ? "focused" : ""}
//                 ></NavSearch>
//               </CSSTransition>
//               <i
//                 className={
//                   this.state.focused ? "focused iconfont zoom" : "iconfont zoom"
//                 }
//                 // className="iconfont zoom"
//               >
//                 &#xe617;
//               </i>
//               {/* {this.getSearchList()} */}
//             </SearchWrapper>
//           </Nav>
//           <Addtion>
//             <Button className="write">
//               <i className="iconfont">&#xe60e;</i>
//               写文章
//             </Button>
//             <Button className="reg">注册</Button>
//           </Addtion>
//         </HeaderWrapper>
//       </div>
//     );
//   }
// }

// 改成函数式组件

const Header = (props) => {
  console.log("props", props);
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
    focused: state.header.focused,
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
