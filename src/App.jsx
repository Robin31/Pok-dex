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

  function App() {
    useEffect(
      () => {
        alert('Hello pokemon trainer ! ٩(◕‿◕｡)۶');
      },
      []
    );
  
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    pokemonList[pokemonIndex].name === 'pikachu' ? alert('Pika pikachuuu !!') : "";
  
    return (<div className="pokemonBox">
      <div className="pokeball">
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      </div>
      <div className="navbar">
        {pokemonList.map((pokemonIndex, index) =>
        <NavBar key={pokemonIndex.name} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} index={index}/>
        )}
      </div>
      </div>
    )
  }
  
  
  
  export default App;

