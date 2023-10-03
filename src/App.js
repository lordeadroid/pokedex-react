import * as data from './template.json';
import PokemonGallery from './pokemon-gallery';

import React, { useState } from 'react';

const GetPokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((pokemonDetails) => pokemonDetails.json())
    .then(({ name, sprites }) => {
      setPokemon({ name, imgUrl: sprites.front_default });
    });

  return pokemon === null ? (
    <></>
  ) : (
    <div>
      <img src={pokemon.imgUrl} />
    </div>
  );
};

const Pokemon = () => {
  const pokemons = new Array(2).fill(0).map((_, index) => index + 1);

  const pokemonsElements = pokemons.map((id) => (
    <GetPokemon id={id} key={id} />
  ));

  return <div>{pokemonsElements}</div>;
};

// const App = () => <Pokemon />; 
const App = () => <PokemonGallery pokemons={data.default} />;

export default App;
