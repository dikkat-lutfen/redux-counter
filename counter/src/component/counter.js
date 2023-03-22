import React from 'react'
import { useSelector } from 'react-redux';



function Counter() {

    const countValue = useSelector( state =>state.counter1.value)  // state.name.value ile cagırdım
    // console.log(countValue)


  return (
    <div>
      <h1>{countValue}</h1> 
    </div>
  )
}

export default Counter
