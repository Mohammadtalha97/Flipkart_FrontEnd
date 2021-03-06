import axios from "../../helpers/axios";
import { productConstant } from "../constant";

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.get(`/products/${slug}`);

    if (res.status === 200) {
      dispatch({
        type: productConstant.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
    }
  };
};

export const getProductPage = (payload) => {
  try {
    return async (dispatch) => {
      dispatch({
        type: productConstant.GET_PRODUCT_PAGE_REQUEST,
      });
      const { cid, type } = payload.params;
      const res = await axios.get(`/page/${cid}/${type}`);
      if (res.status === 200) {
        const { page } = res.data;
        dispatch({
          type: productConstant.GET_PRODUCT_PAGE_SUCCESS,
          payload: { page },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstant.GET_PRODUCT_PAGE_FAILUER,
          payload: { error },
        });
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: productConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST,
    });
    let res;

    try {
      const { productId } = payload.params;
      res = await axios.get(`/product/${productId}`);
      dispatch({
        type: productConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: {
          productDetails: res.data.product,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstant.GET_PRODUCT_DETAILS_BY_ID_FAILUER,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
