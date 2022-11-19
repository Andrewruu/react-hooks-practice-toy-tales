import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(t => setToys(t))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    const updatedToysArray = [...toys, newToy];
    setToys(updatedToysArray);
  }

  function handleRemoveToy(id){
    const removedToyArray = toys.filter((toy)=> toy.id !== id)
    setToys(removedToyArray)
  }

  function handleUpdateToy(updatedToy) {
    const updatedToysArray = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToys(updatedToysArray);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} removeToy={handleRemoveToy} updateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
