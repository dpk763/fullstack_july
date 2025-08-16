import React from 'react'

function Card(props) {
    const {title, desc, src}=props.item;
    const {fun}=props;
  return (
      <div className="card" style={{ width: "12rem" }}>
          <img src={src} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <button onClick={()=>fun(title)} className="btn btn-primary">More Info</button>
          </div>
</div>
  )
}

export default Card
