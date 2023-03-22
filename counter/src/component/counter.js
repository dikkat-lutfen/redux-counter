
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {increment,decrement,amount} from "../redux/counter/counterSlice"


function Counter() {


    const[amn,setAmn]=useState(0)

    const countValue = useSelector( state =>state.counter1.value)  // state.name.value ile cagırdım
    // console.log(countValue)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>{countValue}</h1> 
      <button onClick= {()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <br/><br/>
      <input type="number" value={amn} onChange={(e)=>setAmn(e.target.value)}/>
       <button onClick={()=>dispatch(amount(amn))}>increment by amount</button>
    </div>
  )
}



export default Counter
