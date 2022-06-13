import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const [length, setLength] = React.useState(0);
  const { data } = useSelector((state) => state.cart);
  // console.log(data.length);
  // useEffect(() => {
  //   setLength(data.length);
  // });
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-link">
          Logo
        </Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">item count : {length}</div>
        <button data-cy="navbar-login-logout-button">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
