import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sneakers from "../sneakers.json";

const Products = () => {
  let { sneakers } = Sneakers;

  // console.log(sneakers)

  return (
    <div className="card-continer">
      {sneakers.map((sneaker) => {
        return (
          <Link to={`/product/${sneaker.id}`} className="card" key={sneaker.id}>
            <img src={sneaker.grid_picture_url} alt="Shoes" />
            <h2>NAME </h2>
            <p>{sneaker.nickname}</p>
            <h4>BRAND : {sneaker.brand_name}</h4>
          </Link>
        );
      })}
      <Outlet/>
    </div>
  );
};

export default Products;
