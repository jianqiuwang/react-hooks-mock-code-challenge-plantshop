import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantCard from "./PlantCard";

function PlantPage() {
  const [plantCards, setPlantCards] = useState([])
  const [search, setSearch]=useState("")
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(resp=>resp.json())
    .then((plantCards)=>setPlantCards(plantCards))
  },[])

  function handleAddPlant(newPlantCard){
    setPlantCards([...plantCards, newPlantCard])
  }

  function handleOnChange(e){
    setSearch(e.target.value)
  }

  const displaySearch=plantCards.filter((plantCard)=>plantCard.name.toLowerCase().includes(search.toLowerCase()))

  plantCards.map((plantCard)=><PlantCard key={plantCard.id} plantCard={plantCard}/>)


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search plantCards={plantCards} handleOnChange={handleOnChange}/>
      <PlantList showPlantsArray={displaySearch}/>
    </main>
  );
}

export default PlantPage;
