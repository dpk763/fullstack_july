import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

function About() {
  const [data, setData]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setData(res.data.products))
    .catch((err)=>console.log(err));
  },[]);

  console.log(data);
  return (
    <>
    <div className="container">
    <div className="row">
      {data.map((item, index)=>{
        return (
          <div className="col my-4">
            <Card id={item.id} title={item.title} img={item.thumbnail} desc={item.description}/>
          </div>
        )
      })}
    </div>
      </div>
    </>
  )
}

export default About
