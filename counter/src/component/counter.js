
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {increment,decrement} from "../redux/counter/counterSlice"


function Counter() {

    const countValue = useSelector( state =>state.counter1.value)  // state.name.value ile cagırdım
    // console.log(countValue)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>{countValue}</h1> 
      <button onClick= {()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
     
    </div>
  )
}



export default Counter
