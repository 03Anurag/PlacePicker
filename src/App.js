import React from 'react';
import { useState , useRef } from 'react';
import './App.css';
import Header from './Components/Header';
import { AVAILABLE_PLACES } from './Data';
import Places from './Components/Places';
import Modal from './Components/Modal';

const App = () => {
  const [pickedPlaces , setpickedPlaces] = useState([]);

  const modal = useRef();
  const selectedPlace = useRef();

  function handleStartRemovePlace(id){
    selectedPlace.current = id;
    modal.current.showModal();
  }


  function handleStopRemovePlace(){
    modal.current.close();
  }

  function handleRemovePlace(){
    setpickedPlaces((prevPlace) => prevPlace.filter((place) => place.id !== selectedPlace.current))

    modal.current.close();
  }

  function handleSelectedPlace(id){
    setpickedPlaces((prevPlace) => {
      if(prevPlace.some((place) => place.id === id)){
        return prevPlace
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [...prevPlace , place]
    })
  }
  return (
    <>
      <Modal ref={modal} onConfirm={handleRemovePlace} onCancel={handleStopRemovePlace}/>
      <Header />
      <main>
        <Places 
          title={"I'd like to visit..."}
          fallbackText={"Select the places you would like to visit below"}
          places={pickedPlaces}
          onselectPlace={handleStartRemovePlace}
        />

        <Places 
          title={"Available Places"}
          places={AVAILABLE_PLACES}
          onselectPlace={handleSelectedPlace}
        />
      </main>
    </>
  )
}

export default App
