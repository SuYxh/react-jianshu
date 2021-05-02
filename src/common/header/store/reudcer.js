import * as actionType from "./actionType";

const defaultState = {
  focused: false,
};

export const HeaderReducer = (state = defaultState, action) => {
  if (action.type === actionType.SEARCH_FOCUSE) {
    return {
      focused: true,
    };
  }
  if (action.type === actionType.SEARCH_Blur) {
    return {
      focused: false,
    };
  }

  return state;
};
