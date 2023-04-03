import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
  console.log(pokemon.imgSrc);
  return (
      <figure className={`pokemon_card ${pokemon.type}`} >
          { pokemon.imgSrc ?
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          :<p>???</p>
          }
          <figcaption className="pokename">{pokemon.name}</figcaption>
      </figure>);
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
  }).isRequired,
}




export default PokemonCard;