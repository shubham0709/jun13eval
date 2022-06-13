import {
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT
} from "./auth.types.js";
// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, action) => {
  let { type, payload } = action;
  switch (type) {
    case AUTH_SIGN_IN_LOADING: return {
      ...state,
      loading: true,
      data: {
        token: "",
        isAuthenticated: false,
      },
      error: false

    }
    case AUTH_SIGN_IN_SUCCESS: return {
      ...state,
      loading: false,
      data: {
        token: payload,
        isAuthenticated: true,
      },
      error: false

    }
    case AUTH_SIGN_IN_ERROR: return {
      ...state,
      loading: false,
      data: {
        token: "",
        isAuthenticated: false,
      },
      error: true
    }
    case AUTH_SIGN_OUT: return {
      ...state,
      loading: false,
      data: {
        token: "",
        isAuthenticated: false,
      },
      error: false
    }
    default: return state;
  }
};
