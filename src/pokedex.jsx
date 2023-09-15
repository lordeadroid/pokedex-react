import React from 'react';
import * as data from './template.json';
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
    const pokemonsDetails = data.default.slice(0, this.state.number);
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
        <div className="content">
          {pokemons}
          <input
            type="button"
            value="Load More..."
            className="load-more-button"
            onClick={this.loadMore}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;
