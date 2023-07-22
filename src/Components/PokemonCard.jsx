
function PokemonCard ({name , img}) {
    return  (       
    <div>
        {name == "bulbasaur" 
        ?
        <figure>                
            <img src={img} alt={name}>
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




export default PokemonCard