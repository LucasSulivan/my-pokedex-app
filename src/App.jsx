import PokemonCard from './Components/PokemonCard'
import NavBar from './Components/NavBar';
import { useState } from 'react';
import './App.css'

function App() {

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
    const [index, setIndex] = useState(0)

  return (
    <>
      <NavBar setIndex={setIndex} pokemonList={pokemonList}/>
      <PokemonCard {...pokemonList[index]} />
    </>
  )

}


export default App
