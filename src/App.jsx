import PokemonCard from './Components/PokemonCard'
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
    const [prevVisible, setPrevDisplay] = useState({display:'none'})
    const [nextVisible, setNextDisplay] = useState({display:'inline'})


    const handlerClickNext=()=>{
      if(index <= 3){ 
        setIndex( index + 1)}

        if(index == 3){
          setNextDisplay({display:'none'})
        }

        setPrevDisplay({display : 'inline'})
    }


    const handlerClickPrev=()=>{
      if(index < 2 ){
        setPrevDisplay({display:'none'})
      }
      if(index >= 1){
          setIndex( index - 1)
        }
        setNextDisplay({display:'inline'})
    }


  return (
    <>
      <PokemonCard pokemon={pokemonList[index]} />
      {
        <div>
          <button style={prevVisible}onClick={handlerClickPrev}>Prev</button>
          <button style={nextVisible} onClick={handlerClickNext}>Next</button>

        </div>
      }
      
      
    </>
  )

}


export default App
