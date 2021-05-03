import { createStore, applyMiddleware } from "redux";
import reducer from "./reudcer";
import thunk from "redux-thunk";
// redux-thunk的作用: https://blog.csdn.net/qq_42339350/article/details/111599426
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
