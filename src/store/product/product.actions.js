// Product actions here
import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "./product.types";

import axios from "axios";

export const getProducts = (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });

    axios.get("http://localhost:8080/products")
        .then(res => {
            console.log("getting products");
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: GET_PRODUCTS_ERROR })
        })
}
