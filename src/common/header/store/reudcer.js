import * as actionType from "./actionType";

import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1, // 当前页
  totalPage: 1, // 总页数
});

export const HeaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUSE:
      return state.set("focused", true);
    case actionType.SEARCH_Blur:
      return state.set("focused", false);
    case actionType.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionType.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionType.CHANG_PAGE:
      return state.set("page", action.page);
    case actionType.CHNAGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });
    default:
      return state;
  }
};
