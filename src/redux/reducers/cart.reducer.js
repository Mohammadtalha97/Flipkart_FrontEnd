import { cartConstants } from "../constant";

const initialState = {
  cartItems: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default cartReducer;
