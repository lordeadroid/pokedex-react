import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(({ number }) => ({ number: number + 4 }));
  }

  render() {
    const pokemons = this.props.pokemons.map((pokemonDetails, index) => {
      return <Pokemon pokemonDetails={pokemonDetails} key={index} />;
    });

    return <div className="content">{pokemons}</div>;
  }
}

export default Pokedex;
