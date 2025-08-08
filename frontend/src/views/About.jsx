import React, { useEffect, useState } from 'react'

function About() {
    useEffect(()=>{
        console.log("hello");
    },[])

    let [num, setNum]=useState(1);

    const msg=()=>{
        setNum(num+1);
    }
  return (
    <div>
      <h1>This is about page</h1>
      <p>{num}</p>
      <button onClick={msg}>click</button>
    </div>
  )
}

export default About
