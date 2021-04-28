import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <br />
      <h1>Products</h1>
      <br />

      <Outlet />
    </div>
  );
};

export default Products;
