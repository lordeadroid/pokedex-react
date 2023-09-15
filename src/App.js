import * as data from './template.json';
import PokemonGallery from './pokemon-gallery';

const pokemons = data.default;

const App = () => <PokemonGallery number={8} pokemons={pokemons} />;

export default App;
