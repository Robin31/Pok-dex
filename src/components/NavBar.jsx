function NavBar({indexPokemon,setIndexPokemon,pokemonList}){
    
    function  handleClickChangePokemon(index) {
        setIndexPokemon(indexPokemon = index)
      }
   
    
      return (
        <>
        {pokemonList.map((pokemon,index)=>
         <button 
          key={pokemon.name} 
          onClick={() => handleClickChangePokemon(index)}> {pokemon.name} </button>)}
       
        {/* {(indexPokemon > 0) ?(<button onClick={handleClickBack}>Back</button>) : ""}
        {(indexPokemon < pokemonList.leng - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" } */}
        </>
      )
}

export default NavBar;
  