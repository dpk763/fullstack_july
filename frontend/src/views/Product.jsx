import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

function Product() {
    const [data, setData]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=>setData(res.data.products))
        .catch((err)=>console.log(err));
    },[])
    console.log(data);
  return (
    <>
     <div className="container">
        <div className="row">
            {data.map((item, index)=>{
                return(
                    <Card id={item.id} title={item.title} desc={item.description} img={item.thumbnail}/>
                )
            })}
        </div>
        </div> 
    </>
  )
}

export default Product
