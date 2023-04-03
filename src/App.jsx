import PokemonCard from "./components/PokemonCard"
import DisplayButton from "./components/NavBar"
import { useState } from "react";

function App() {
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


  const [indexPokemon,setIndexPokemon]= useState(0);

  // function handleClickNext() {
  //   setIndexPokemon(indexPokemon + 1)
  // }
  // function handleClickBack() {
  //   setIndexPokemon(indexPokemon - 1)
  // }


  return (
    <div>
      <NavBar  indexPokemon={indexPokemon} setIndexPokemon={setIndexPokemon} pokemonList={pokemonList}/>
      <PokemonCard name={pokemonList[indexPokemon].name} img= {pokemonList[indexPokemon].imgSrc} />
    </div>
  )
  }

export default App;

