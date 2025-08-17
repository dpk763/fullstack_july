import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    const {title, description, thumbnail, id}=props.item;
    
  return (
      <div className="card my-2" style={{ width: "18rem" }}>
          <img src={thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title.slice(0,10)}...</h5>
              <p className="card-text">{description.slice(0,75)}...</p>
              {/* {age>18?<button onClick={()=>fun(title)} className="btn btn-primary">More Info</button>:""} */}
              {/* <button onClick={()=>fun(title)} className={`btn btn-${age>18?'primary':'danger'}`}>More Info</button> */}
              <Link to={`/productDetails/${id}`} className={`btn btn-primary`}>More Info</Link>
          </div>
</div>
  )
}

export default Card
