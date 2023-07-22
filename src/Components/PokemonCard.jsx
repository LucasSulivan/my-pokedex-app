function PokemonCard () {
    const pokemon = pokemonList[1]
    return (
        <div>
            {pokemon.name == "bulbasaur" ?
            <figure>                
                    <img src={pokemon.imgSrc} alt={pokemon.name}>
                    </img>
                    <figcaption>{pokemon.name}</figcaption>
            </figure> 
            :
             <div>
                <p> ??? </p>
                <figcaption>{pokemon.name}</figcaption>
            </div> }
        </div>
    )
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard