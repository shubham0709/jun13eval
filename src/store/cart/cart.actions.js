// Cart Actions here
import {
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_ERROR,

    ADD_ITEM_TO_CART_LOADING,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_ERROR,

    REMOVE_CART_ITEMS_LOADING,
    REMOVE_CART_ITEMS_SUCCESS,
    REMOVE_CART_ITEMS_ERROR,

    UPDATE_CART_ITEMS_LOADING,
    UPDATE_CART_ITEMS_SUCCESS,
    UPDATE_CART_ITEMS_ERROR
} from "./cart.types";

import axios from "axios";

export const getCartItems = (dispatch) => {
    dispatch({ type: GET_CART_ITEMS_LOADING });

    axios.get("http://localhost:8080/cartItems")
        .then(res => {
            dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: GET_CART_ITEMS_ERROR })
        })
}
export const addItemToCart = (dispatch, item) => {
    console.log(item);
    let id = item.id;
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });

    axios.post(`http://localhost:8080/cartItems/`, item)
        .then(res => {
            dispatch({
                type: ADD_ITEM_TO_CART_SUCCESS,
                payload: res.data
            })
            console.log(res);
        }).catch(err => {
            dispatch({ type: ADD_ITEM_TO_CART_ERROR })
        })
}
export const removeCartItems = (dispatch, item) => {
    let id = item.id;
    dispatch({ type: REMOVE_CART_ITEMS_LOADING });

    axios.post(`http://localhost:8080/cartItems/${id}`)
        .then(res => {
            dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: REMOVE_CART_ITEMS_ERROR })
        })
}

export const updateCartItems = (dispatch, item) => {
    let id = item.id;
    dispatch({ type: UPDATE_CART_ITEMS_LOADING });

    axios.post("http://localhost:8080/cartItems")
        .then(res => {
            dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: UPDATE_CART_ITEMS_ERROR })
        })
}