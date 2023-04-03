const NavBar = ({pokemonIndex, setPokemonIndex, index}) => {

    const handleClick = () => {
        setPokemonIndex(pokemonIndex = index);
    }

    // const handleClickPrevious = () => {
    //     setPokemonIndex(pokemonIndex -1);
    // }
    // const handleClickNext = () => {
    //     setPokemonIndex(pokemonIndex + 1);
    // }
    
    return (
        <div>
            <button className="button" onClick={handleClick} key={pokemonIndex.name}>{pokemonIndex.name}</button>
        </div>


        // <div>
        //     {pokemonIndex > 0 ? <button className="button" onClick={handleClickPrevious}>Previous</button> : <button>No more item</button>}
        //     {pokemonIndex < pokemonList.length -1 ? <button className="button" onClick={handleClickNext}>Next</button> : <button>No more item</button>}
        // </div>
    );
};

export default NavBar;
  