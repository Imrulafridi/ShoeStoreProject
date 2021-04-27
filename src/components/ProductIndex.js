import React from "react";
import { Link } from "react-router-dom";
import Sneakers from "../sneakers.json";

const ProductIndex = () => {
  const { sneakers } = Sneakers;

  return (
    <div className="card-continer">
      {sneakers.map((sneaker, i) => {
        return (
          <Link to={`/product/${i}`} className="card" key={sneaker.id}>
            <img src={sneaker.grid_picture_url} alt="Shoes" />
            <h2>NAME </h2>
            <p>{sneaker.nickname}</p>
            <h4>BRAND : {sneaker.brand_name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductIndex;
