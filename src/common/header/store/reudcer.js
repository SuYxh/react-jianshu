const defaultState = {
  focused: false,
};

export const HeaderReducer = (state = defaultState, action) => {
  if (action.type === "search_focused") {
    return {
      focused: true,
    };
  }
  if (action.type === "search_blur") {
    return {
      focused: false,
    };
  }

  return state;
};
