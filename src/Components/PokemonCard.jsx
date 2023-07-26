import PropTypes from "prop-types"

function PokemonCard ({name,imgSrc}) {

    return  (       
    <div>
        {(name !== "" && imgSrc) 
        ?
        <figure>                
            <img src={imgSrc} alt={name}>
            </img>
            <figcaption>{name}</figcaption>
        </figure> 
        :
     <div>
        <p> ??? </p>
        <figcaption>{name}</figcaption>
    </div> }
    </div>
    )

}

PokemonCard.propTypes = {
        name: PropTypes.string.isRequired,
        imgSrc:PropTypes.string,
}


export default PokemonCard