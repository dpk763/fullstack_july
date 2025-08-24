import React, { useState } from 'react'
import Card from '../components/Card'
import State from '../components/State';
import Form from '../components/Form';

function Home() {
    const handleClick =(a,b)=>{
        alert(`Hello ${a} : ${b}`);
    }

    const [data,setData]=useState([
        {
            name:"mohan",
            age:20,
            desc:"this is demo desc 1",
            src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
        {
            name:"Rohan",
            age:21,
            desc:"this is demo desc 2",
            src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
        {
            name:"Rohit",
            age:22,
            desc:"this is demo desc 3",
            src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
        {
            name:"Ronak",
            age:26,
            desc:"this is demo desc 4",
            src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        }
    ]);

  return (
    <>
        {/* <State/> */}

        <div className="row">

        {data.map((item, index)=>{
            return (
                <div className="col" key={index}>
                    <Card item={item} fun={handleClick}/>
                </div>
            )
        })}
        </div>

        <Form/>
    </>
  )
}

export default Home
