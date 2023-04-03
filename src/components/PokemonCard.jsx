import PropTypes from "prop-types";

function PokemonCard(pokemon) {

  return (
    <figure>
      {pokemon.img ? (<img src={pokemon.img} alt={pokemon.name} />) : (<p>???</p>)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );

}
PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;