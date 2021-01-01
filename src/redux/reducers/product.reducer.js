import { productConstant } from "../constant";

const initialState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstant.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productByPrice,
        },
      };
      break;
    default:
      return state;
  }
  return state;
};

export default productReducer;
