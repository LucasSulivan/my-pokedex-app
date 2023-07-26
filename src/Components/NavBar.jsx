import PropTypes from 'prop-types'


function NavBar ({pokemonList , setIndex}) {

const showPokemon =(indx)=>{
   return setIndex(indx)
}
    return (
        <div>
            {pokemonList.map((poke,indx)=> (
                <button onClick={()=> showPokemon(indx)} key={poke.name}>{poke.name}</button>
                
        
            ))}
        </div>
    )
}

NavBar.propTypes = {
    pokemonList: PropTypes.array,
    setIndex: PropTypes.elementType
}

export default NavBar