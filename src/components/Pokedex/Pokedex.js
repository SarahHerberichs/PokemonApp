import { useContext, useState } from "react";
import PokemonContext from "../../data/PokemonContext";
import PokedexItem from "../PokedexItem/PokedexItem";
import "./pokedex.scss";
const Pokedex = () => {
  const [state, dispatch] = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPokemonsName = state.pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  // On récupère le state et le dispatch dans le context fourni par le Provider

  // On retourne le template qui map sur la liste de pokemons contenu dans le state
  // Et on affiche un composant PokedexItem pour chacun d'entre eux en lui fournissant le pokemon
  // qu'il doit afficher grace à une props
  return (
    <section id="pokedex">
      <h2>Pokedex</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="pokemon-list">
        {filteredPokemonsName.length > 0 ? (
          filteredPokemonsName.map((pokemon, i) => (
            <PokedexItem key={i} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokemon found.</p>
        )}
      </div>
    </section>
  );
};
export default Pokedex;
