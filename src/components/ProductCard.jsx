import React from 'react'
import useProductStore from '../store/product-store'
// import { ShoppingCart } from 'lucide-react';



function ProductCard({product}) {
const actionAddtoCart = useProductStore((state)=> state.actionAddtoCart)
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
    <figure className="px-10 pt-10">
    <img src = {product.images[0]}
    className="rounded-xl"/>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{product.title}</h2>
      <p>{product.description.slice(0,100)}</p>
      <p> Price : {product.price}</p>
      <div className="card-actions">
        <button 
        onClick = {()=>actionAddtoCart(product)}
        className="btn btn-primary">Buy Now</button>
        {/* <ShoppingCart /> */}
      </div>
    </div>
  </div>
  )
}

export default ProductCard