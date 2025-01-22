import React from 'react'

function Recap() {
const obj = {
  firstName : 'Sakeenah',
  lastName : 'Yusoh'
}
obj.address = 'BKK'
// console.log(obj.firstName)

const obj2 = {
  street : '1234',
  zipcode: '5678'
}
const mergeObj ={...obj,...obj2}
// console.log(mergeObj)



const arr =['sakeenah','yusoh']
arr[2] = 'BKK'
// console.log(arr)
const arr2 =['1234','5678']
const mergeArr =[...arr,...arr2]
// console.log(mergeArr)

const products =[
  {id: 1, title:'ASUS', price: 40000},
  {id: 2, title: 'Lenovo', price: 70000 }
];
console.log(products[1].title)
const newProduct = {id: 3, titlt: 'MSI', price : 20000}
// const mergeNewProduct = [{...products},{...newProduct}]
const mergeNewProduct = [...products,newProduct]
// console.log(mergeNewProduct)



  return (
    <div>Recap</div>
  )
}

export default Recap