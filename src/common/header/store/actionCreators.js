import * as actionType from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

export const getFocuseAction = () => ({
  type: actionType.SEARCH_FOCUSE,
});
export const getBlurAction = () => ({
  type: actionType.SEARCH_Blur,
});

export const changeList = (data) => ({
  type: actionType.CHNAGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        dispatch(changeList(res.data.data));
      })
      .catch((err) => {
        console.log("error" + err);
      });
  };
};
