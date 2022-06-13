import React, { useState, useEffect } from "react";
import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/product.actions";

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <div>
      {data.map((info) => (
        <div key={info.id}>
          <Product info={info} />
        </div>
      ))}
    </div>
  );
};

export default Products;
