import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from "./product.types";
// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_LOADING: return {
      ...state,
      loading: true,
      error: false,
      data: [],
    }
    case GET_PRODUCTS_SUCCESS: return {
      ...state,
      loading: false,
      error: false,
      data: payload,

    }
    case GET_PRODUCTS_ERROR: return {
      ...state,
      loading: false,
      error: true,
      data: [],
    }
    default: return state;
  }
};
