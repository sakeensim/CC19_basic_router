import React, { useEffect } from 'react'
import useProductStore from '../store/product-store'
import ProductCard from '../components/ProductCard'

function Product() {
    const products = useProductStore((state)=>state.products)
    // console.log(product)
    const actionGetData = useProductStore((state)=> state.actionGetData)
    console.log(products)
    useEffect(()=>{
        actionGetData()
    },[])
  return (
    <div>
    <button 
    onClick ={actionGetData}
    className='bg-green-500 p-2 rounded-md mt-3'>
    Data
    </button>
    <br />
    <hr />
    <br/>
    {
        products?.map((product)=>{
            console.log(product)
            return <ProductCard key ={product.id} product = {product}/>
        })
    }
    </div>

  )
}

export default Product