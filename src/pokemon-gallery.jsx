import React from 'react';
import Pokedex from './pokedex';
import Input from './input-box';

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onRandomClick = this.onRandomClick.bind(this);
  }

  handleChange(filter) {
    this.setState(() => ({ filter }));
  }

  filteredPokemon() {
    return this.props.pokemons.filter((pokemon) =>
      pokemon.name.includes(this.state.filter)
    );
  }

  getRandomPokemon() {
    return Math.floor(Math.random() * 200);
  }

  onRandomClick() {
    const pokemon = this.props.pokemons[this.getRandomPokemon()];
    this.setState(() => ({ filter: pokemon.name }));
  }

  header() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '1750px',
          margin: '0 auto',
        }}
      >
        <div className="card">
          <p style={{ fontSize: '1.25em' }}>
            {this.filteredPokemon().length} Pokemons
          </p>
        </div>
        <input
          style={{ fontSize: '1.25em', alignSelf: 'center' }}
          type="button"
          value="Suprise Me"
          className="card"
          onClick={this.onRandomClick}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="pokedex-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M0BOtxmfhtmI84X8C5T37LLnd8Z68dOJ8g&usqp=CAU"
          alt="pokedex-logo"
        />
        {this.header()}
        <Input value={this.state.filter} onChange={this.handleChange} />
        <Pokedex number={8} pokemons={this.filteredPokemon()} />
      </div>
    );
  }
}

export default PokemonGallery;
