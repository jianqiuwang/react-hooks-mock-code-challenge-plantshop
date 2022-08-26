import React from "react";
import PlantCard from "./PlantCard";

function PlantList({showPlantsArray}) {
  let plantCards=showPlantsArray.map((plant)=><PlantCard image={plant.image} name={plant.name} price={plant.price}/>)
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
