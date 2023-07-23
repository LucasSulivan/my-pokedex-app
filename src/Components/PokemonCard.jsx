import PropTypes from "prop-types"

function PokemonCard ({pokemon}) {

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc:PropTypes.string,
        }).isRequired
    }
    
    return  (       
    <div>
        {pokemon.name == "bulbasaur" 
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




export default PokemonCard