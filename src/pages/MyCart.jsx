import React from 'react'
import useProductStore from '../store/product-store'
import ProductCard from '../components/ProductCard';

function MyCart() {

    const cart = useProductStore((state)=> state.cart);
    console.log(cart)
  return (
    <div>
        {
            cart.map((products) =>{
                return <ProductCard 
                key = {products.id}
                product ={products}/>
            })
        }
    </div>
  )
}

export default MyCart