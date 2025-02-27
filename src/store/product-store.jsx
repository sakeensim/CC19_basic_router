import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const productStore = (set) => ({
    products:[],
    cart:[],
    actionGetData : async() =>{
        try{
            const resp = await axios.get('https://dummyjson.com/products')
            // console.log(resp.data.products)
            set({products: resp.data.products});
        } catch (error){
            console.log(error.message)
        }
    },
    actionAddtoCart :(product)=>{
        // console.log(product)
        set((state)=>({cart:[...state.cart, product]}))
    },
    actionClear:()=>{
        set({cart: [] });
    }, 
});

const persisStore ={
    name: 'product-store',
    partialize : (state)=>({
        cart: state.cart,
        
    })
}

const useProductStore = create(persist(productStore,persisStore));

export default useProductStore;