import * as actionType from "./actionType";

import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
});

export const HeaderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUSE:
      return state.set("focused", true);
    case actionType.SEARCH_Blur:
      return state.set("focused", false);
    default:
      return state;
  }
};
