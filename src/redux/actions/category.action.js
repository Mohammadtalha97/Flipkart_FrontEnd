import axios from "../../helpers/axios";
import { categoryConstant } from "../constant";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstant.GET_ALL_CATEGORIES_REQUEST,
    });

    const res = await axios.get(`category/getcategory`);
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          categories: categoryList,
        },
      });
    } else {
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_FAILUER,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
