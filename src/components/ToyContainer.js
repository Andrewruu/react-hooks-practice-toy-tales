import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,removeToy,updateToy}) {
  return (
    <div id="toy-collection">{
      toys.map((toy)=>(
         <ToyCard key={toy.id} toy={toy} removeToy={removeToy} updateToy={updateToy}/>
      ))
      }</div>
  );
}

export default ToyContainer;
