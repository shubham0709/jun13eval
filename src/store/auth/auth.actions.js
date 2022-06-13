// Auth Actions here
import {
    AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT
} from "./auth.types.js";
import axios from "axios";

export const loginAPI = (dispatch, creds) => {
    console.log(creds);
    dispatch({ type: AUTH_SIGN_IN_LOADING });

    axios.post("https://reqres.in/api/login", creds)
        .then(res => {
            console.log(res.data);
            dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: res.data.token });
        }).catch(err => {
            dispatch({ type: AUTH_SIGN_IN_ERROR })
        })
}

export const logoutAPI = (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT });
}