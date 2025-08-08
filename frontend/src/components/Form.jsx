import React, { useState } from 'react'

function Form() {
    let [name, setName]=useState('');
    let [lname, setLname]=useState('');
    const show=()=>{
        console.log(name, lname);
    }
  return (
    <div>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="" id="" value={lname} onChange={(e)=>setLname(e.target.value)}/>
        <button onClick={show}>click</button>
        <p>{name}</p>
    </div>
  )
}

export default Form
