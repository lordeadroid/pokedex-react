import React from 'react';
import Pokedex from './pokedex';
import Input from './input-box';

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    this.setState(() => ({ filter }));
  }

  filteredPokemon() {
    return this.props.pokemons.filter((pokemon) =>
      pokemon.name.includes(this.state.filter)
    );
  }

  render() {
    return (
      <div className="page">
        <div className="pokedex-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M0BOtxmfhtmI84X8C5T37LLnd8Z68dOJ8g&usqp=CAU"
            alt="pokedex-logo"
          />
          <Input
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </div>
        <Pokedex number={8} pokemons={this.filteredPokemon()} />
      </div>
    );
  }
}

export default PokemonGallery;
