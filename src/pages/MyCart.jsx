import React from 'react'
import useProductStore from '../store/product-store'
import ProductCard from '../components/ProductCard';

function MyCart() {

    const cart = useProductStore((state)=> state.cart);
    const actionClear = useProductStore((state)=> state.actionClear)
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
        <button onClick={actionClear}> Clear</button>
    </div>
  )
}

export default MyCart