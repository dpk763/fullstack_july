import React,{useEffect, useState} from 'react'
import Card from '../components/Card'
import axios from 'axios';
function Shop() {

    const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err));
  },[]);

  
  return (
     <div className="container my-4">
        <div className="row">
          {products.map((item, index) => {
            return (
              <div key={index} className="col">
                <Card item={item} />
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default Shop
