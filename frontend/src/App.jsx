import React from 'react'
import './App.css'
// import Piet from './components/Piet'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card'
function App() {
  const students = [
    {
      name: "mohan",
      title: "this is title 1",
      desc: "this is description"
    },
    {
      name: "rohan",
      title: "this is title 2",
      desc: "this is description"
    },
    {
      name: "sonu",
      title: "this is title 3",
      desc: "this is description"
    }, {
      name: "rohit",
      title: "this is title 4",
      desc: "this is description"
    }
  ]
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
                <Card name={item.name} title={item.title} desc={item.desc}/>
              </div>
            )
        })}
      </div>
    </>
  )
}

// const Welcome = ()=>{
//   return <h1>Hello</h1>
// }

export default App
