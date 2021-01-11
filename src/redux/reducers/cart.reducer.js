import { cartConstants } from "../constant";

const initialState = {
  cartItems: {
    // 123:{
    //   id,name,img,price
    // }
  },
  updatingCart: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        updatingCart: true,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false,
      };
      break;
    case cartConstants.ADD_TO_CART_FAILUER:
      state = {
        ...state,
        updatingCart: false,
        error: action.payload.error,
      };
      break;
    case cartConstants.RESET_CART:
      state = {
        ...initialState,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default cartReducer;
