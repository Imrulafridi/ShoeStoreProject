import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Sneakers from "../sneakers.json";


const ProductItem = () => {
  let { id } = useParams();
  let { sneakers } = Sneakers;
  let shoe = sneakers[id]

  console.log(id)
  console.log(shoe);

  return (
    <div>
      <Link to='/product'>
      <button>BACK</button>
      </Link>
    </div>
  )
}

export default ProductItem
