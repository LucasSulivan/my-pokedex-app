import PropTypes from "prop-types"

function PokemonCard ({pokemon}) {
    
    return  (       
    <div>
        {(pokemon.name !== "" && pokemon.imgSrc) 
        ?
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc:PropTypes.string,
    }).isRequired
}


export default PokemonCard