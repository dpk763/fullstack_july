import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    const {title, img, desc, id}=props;
   
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    {/* <h5 className="card-title">{name}</h5> */}
                    <h5 className="card-title">{title.slice(0,10)}...</h5>
                    <p className="card-text">{desc.slice(0,80)}...</p>
                    {/* <p className="card-text">{age>=18?'Yes':'No'}</p> */}
                    {/* <button onClick={()=>msg(name)} className={`btn btn-${color?"primary":"danger"}`}>More</button> */}
                    <Link to={`/details/${id}`}>More</Link>
                </div>
        </div>
    )
}

export default Card
