import React, { useState } from 'react'

function Form() {
    let [name,setName]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

      <input name='fname' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form
