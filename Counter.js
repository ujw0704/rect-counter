import React, { useState } from 'react'

function Counter() {
  let [counter, setcounter] = useState(0)


  function inc() {
    if (counter >= 0){

      setcounter(counter++)
    }
  }



  function dec() {
    if (counter >= 0) {

      setcounter(counter--)
    }

  }





  return (
    <div>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <p>{counter}</p>


    </div>
  )
}

export default Counter;