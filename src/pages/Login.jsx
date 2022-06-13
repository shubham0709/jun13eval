import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../store/auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth.data);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    loginAPI(dispatch, creds);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          name="email"
          data-cy="login-email"
          placeholder="email"
          onChange={changeHandler}
        />
        <input
          name="password"
          data-cy="login-password"
          placeholder="password"
          onChange={changeHandler}
        />
        <button data-cy="login-submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
