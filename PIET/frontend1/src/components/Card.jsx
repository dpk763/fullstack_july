import React from 'react'

function Card(props) {
  const {name, age, desc, src}=props.item;
  return (
    <>
     <div className="card">
       <img src={src} alt=""/>
      <h1>Hello {name} : {age}</h1>
      <p>{desc}</p>
      <button onClick={()=>fun(name,age)}>click</button>
     </div>
    </>
  )
}

export default Card
