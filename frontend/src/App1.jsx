import React, { useState } from 'react'
import './App.css'
// import Piet from './components/Piet'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card'
function App() {
  const students = [
    {
      name: "mohan",
      title: "this is title 1",
      desc: "this is description",
      src:"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
      color:true,
      age:18
    },
    {
      name: "rohan",
      title: "this is title 2",
      desc: "this is description",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
      color:true,
      age:17
    },
    {
      name: "sonu",
      title: "this is title 3",
      desc: "this is description",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
      color:false,
      age:21
    }, {
      name: "rohit",
      title: "this is title 4",
      desc: "this is description",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s",
      color:true,
      age:19
    }
  ]
   const msg = (a)=>{
        alert(`Hello ${a}`);
    }

    let [num,setNum]=useState(1);

    const incr = ()=>{
      setNum(num+1);
    }
    const decr = ()=>{
      setNum(num-1);
    }
  return (
    <>
      {/* <h1 className='box'>hello PIET</h1> */}
      {/* <Welcome/> */}
      {/* <Piet name="Aman" age="20"/>
      <Piet name="Ankit" age="30"/> */}

      {/* <div className="container-fluid">
      <h1 className='bg-primary text-light p-4 text-center'>Hello Piet</h1>
     </div> */}

      <div className="row">
        {students.map((item, index)=>{
            return (
              <div className="col" key={index}>
                <Card name={item.name} title={item.title} desc={item.desc} msg={msg} img={item.src} color={item.color} age={item.age}/>
              </div>
            )
        })}

      </div>
        <p>{num}</p>
        <button onClick={incr}>click</button>
        <button onClick={decr}>click</button>
    </>
  )
}

// const Welcome = ()=>{
//   return <h1>Hello</h1>
// }

export default App
