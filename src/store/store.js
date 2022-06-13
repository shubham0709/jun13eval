// TODO: use this store variable to create a store.
import { legacy_createStore, combineReducers } from "redux";
import { productReducer } from "./product/product.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { authReducer } from "./auth/auth.reducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  auth: authReducer
})
export const store = legacy_createStore(rootReducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
