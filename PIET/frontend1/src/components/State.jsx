import React, { useState } from 'react'

function State() {
    let [count,setCount]=useState(1);
    const handleChange = ()=>{
        setCount(count+1);
    }

    const handleDec =()=>{
        setCount(count-1);
    }
  return (
    <div>
      <p style={count>0?{color:"green"}:{color:"red"}}>{count}</p>

        {count>0?<p>Hello PIET</p>:<p>Wrong number</p>}
        

      <button onClick={handleChange}>click</button>
      <button onClick={handleDec}>click</button>
    </div>
  )
}

export default State
