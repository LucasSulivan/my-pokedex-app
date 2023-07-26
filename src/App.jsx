import PokemonCard from './Components/PokemonCard'
import NavBar from './Components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  
  useEffect(()=>{
    return alert("Hello Pokemon trainer :)")
  },[])

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    
    /*--------------STATES ------------*/
    

  return (
    <>
      <NavBar index={index} setIndex={setIndex}/>
      <PokemonCard pokemon={pokemonList[index]} />
    </>
  )

}


export default App
