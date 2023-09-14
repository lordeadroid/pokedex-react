import React from 'react';
import * as data from './template.json';
import Pokemon from './pokemon';

const Pokedex = () => {
  const pokemonsDetails = data.default;
  const pokemons = pokemonsDetails.map((pokemonDetails, index) => {
    return <Pokemon pokemonDetails={pokemonDetails} key={index} />;
  });

  return (
    <div className="page">
      <div className="pokedex-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M0BOtxmfhtmI84X8C5T37LLnd8Z68dOJ8g&usqp=CAU"
          alt="pokedex-logo"
        />
      </div>
      <div className="content">{pokemons}</div>
    </div>
  );
};

export default Pokedex;
