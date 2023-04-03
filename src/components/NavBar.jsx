import React from 'react';


const NavBar = ({pokemonIndex, setPokemonIndex, index}) => {

    const handleClick = () => {
        setPokemonIndex(pokemonIndex = index);
    }
    
    return (
        <div>
            <button className="button" onClick={handleClick} key={pokemonIndex.name}>{pokemonIndex.name}</button>
        </div>

    );
};

export default NavBar;
  