import React from 'react'

function Card(props) {
    const {name, title, desc}=props;
    const msg = (a)=>{
        alert(`Hello ${a}`);
    }
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button onClick={()=>msg(name)} className="btn btn-primary">More</button>
                </div>
        </div>
    )
}

export default Card
