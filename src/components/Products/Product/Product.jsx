import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Product.module.css";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = ({ info }) => {
  const [count, setCount] = useState(0);
  const id = null;

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    setCount(count + 1);
    addItemToCart(dispatch, item);
  };

  return (
    <div data-cy={`product-${info.id}`}>
      <h3 data-cy="product-name">{info.name}</h3>
      <h6 data-cy="product-description">{info.description}</h6>
      <button
        onClick={() => addToCartHandler(info)}
        data-cy="product-add-item-to-cart-button"
        className={count >= 1 ? style.none : style.display}
      >
        add to cart
      </button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          className={count >= 1 ? style.display : style.none}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span
          data-cy="product-count"
          className={count >= 1 ? style.display : style.none}
        >
          {count}
        </span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          className={count >= 1 ? style.display : style.none}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          data-cy="product-remove-cart-item-button"
          className={count >= 1 ? style.display : style.none}
          onClick={() => {
            setCount(0);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
