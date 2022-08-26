import React,{useState} from "react";

function PlantCard({image, name, price}) {
  const [stock, setStock]=useState(true)
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={()=>setStock(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
