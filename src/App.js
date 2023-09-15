import * as data from './template.json';
import PokemonGallery from './filter-pokedex';

const pokemons = data.default;

const App = () => <PokemonGallery number={8} pokemons={pokemons} />;

export default App;
