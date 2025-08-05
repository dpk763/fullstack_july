import React from 'react'

function Piet(props) {
const {name, age}=props;
  return (
    <>
      <h1>Hello {name}</h1>
      <p>age : {age}</p>
    </>
  )
}

export default Piet
