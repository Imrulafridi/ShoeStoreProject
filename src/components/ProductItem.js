import React from "react";
import { Link, useParams } from "react-router-dom";
import Sneakers from "../sneakers.json";

const ProductItem = () => {
  const { slug } = useParams();
  const { sneakers } = Sneakers;
  const shoe = sneakers[slug];

  console.log(shoe);

  return (
    <div>
      <Link to="/product">
        <button>BACK</button>
      </Link>
    </div>
  );
};

export default ProductItem;
