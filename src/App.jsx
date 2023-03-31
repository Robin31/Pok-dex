import PokemonCard from "./components/PokemonCard"
import DisplayButton from "./components/NavBar"
import { useState } from "react";


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


    const [pokemonIndex, setpokemonIndex] = useState(0);

    const handleNext = () => {
      setpokemonIndex(pokemonIndex + 1)
    }

    const handleBack = () => {
      setpokemonIndex(pokemonIndex - 1)
    }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      
      {pokemonIndex > 0 && (
        <button onClick={handleBack}>prédécent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>suivant</button>
      )}
    </div>
  
  )


export default App

