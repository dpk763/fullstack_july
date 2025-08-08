import React from 'react'

function Card(props) {
    const {name, title, desc, msg, img, color, age}=props;
   
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">{age>=18?'Yes':'No'}</p>
                    <button onClick={()=>msg(name)} className={`btn btn-${color?"primary":"danger"}`}>More</button>
                </div>
        </div>
    )
}

export default Card
