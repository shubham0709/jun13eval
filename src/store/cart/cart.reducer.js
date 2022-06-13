import {
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR
} from "./cart.types";
// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, action) => {
  let { type, payload } = action;

  switch (type) {
    case ADD_ITEM_TO_CART_SUCCESS: return {
      ...state,
      data: [...state.data, payload]
    }
    default: return state;
  }

  return state;
};
