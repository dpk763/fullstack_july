import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(()=>{
    axios.get('http://localhost:5000/api/users')
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  })
  return (
    <div>
      
    </div>
  )
}

export default App
