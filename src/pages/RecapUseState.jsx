import React from 'react'
import { useState } from 'react'

function RecapUseState() {
    const num = 5
    const [number, setNumber] = useState(4)
    const [number2, setNumber2] = useState({
        num : 9
    })
    // console.log(number)
    console.log(number2.num)

    const hdlIncrease =() =>{
        console.log('Easy, useState')
        setNumber((prev)=> prev + 1)
    }
    const hdlDecrease =()=>{
        setNumber ((prev)=> prev-1)
    }
    const hdlIncrease2 =() =>{
        setNumber2((prev)=> ({num: prev.num + 1}))
    }
    const hdlDecrease2 =() =>{
        setNumber2((prev)=>({num: prev.num - 1}))
    }
    const hdlTimes = ()=>{
        setNumber2((prev)=> ({num: prev.num * 2}))
    }
    const hdlDivide =() =>{
        setNumber2((state)=>({num: state.num / 2}))
    }
  return (
    <>
    <div>RecapUseState</div>
    <h1 className='text-8xl'>{number}</h1>
    <br/>
    <button 
    onClick={hdlIncrease}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md'
    >Increase</button>
     <button 
    onClick={hdlDecrease}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md ml-2'
    >Decrease</button>
    <p className='text-8xl'>{number2.num}</p>
    <button 
    onClick={hdlIncrease2}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md'
    >Increase2</button>
    <button 
    onClick={hdlDecrease2}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md ml-2'
    >Decrease2</button>
    <button 
    onClick={hdlTimes}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md ml-2'
    >Times</button>
    <button 
    onClick={hdlDivide}
    className='bg-green-400 p-2 hover:scale-105 
    hover:duration-300 hover:bg-green-700 rounded-md shadow-md ml-2'
    >Divide</button>
    </>
  )
}

export default RecapUseState