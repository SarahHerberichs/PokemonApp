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
  //Affiche chaque pokemon avec filtre (recherche vide ou renseignée)
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
