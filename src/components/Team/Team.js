import { useContext, useState } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./team.scss";
import { useLocation } from "react-router-dom";

import BtnDetails from "../BtnDetails/BtnDetails";
const Team = () => {
  const [state, dispatch] = useContext(PokemonContext);
  const location = useLocation();
  const isOnTeamPage = location.pathname === "/team";
  // Fonction à executer au click sur remove
  const removeFromTeam = (index) => {
    // Appel au réducer pour supprimer le pokemon à l'index clické
    dispatch({ type: "REMOVE_FROM_TEAM", payload: index });
  };
  //Pour affichagede details  on hover sur un pokemon
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const handlePokemonHover = (pokemon) => {
    setHoveredPokemon(pokemon);
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setHoveredPokemon(null);
    setIsHovered(false);
  };

  return (
    <section id="team">
      <h2>Team</h2>
      <main>
        {state.myTeam.length === 0 && <p>Team is empty.</p>}
        {state.myTeam.length > 0 &&
          state.myTeam.map((pokemon, i) => (
            <article
              key={i}
              onMouseOver={() => handlePokemonHover(pokemon)}
              onMouseOut={handleMouseOut}
            >
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <div className="name-and-btn">
                <span>{pokemon.name}</span>
                {/* Si on est dans l'url team et que le pokemon est survolé, affichage des détails */}
                {isOnTeamPage && hoveredPokemon === pokemon && (
                  <div
                    className={`hovered-pokemon-details ${
                      isHovered ? "active" : ""
                    }`}
                  >
                    {" "}
                    <h3>Types</h3>
                    {pokemon.types.map((item, i) => (
                      <p key={i}>{item.type.name}</p>
                    ))}
                    <h3>Abilities</h3>
                    {pokemon.abilities.map((item, i) => (
                      <p key={i}>{item.ability.name}</p>
                    ))}
                    <h3>Stats</h3>
                    {pokemon.stats.map((item, i) => (
                      <p key={i}>
                        {item.stat.name}: {item.base_stat}
                      </p>
                    ))}
                  </div>
                )}
                {/* Si pas sur la page Team, affichage des boutons */}
                {!isOnTeamPage && (
                  <>
                    <BtnDetails pokemonName={pokemon.name} />
                    <button
                      className="btn-remove"
                      onClick={() => removeFromTeam(i)}
                    >
                      remove
                    </button>
                  </>
                )}
              </div>
            </article>
          ))}
      </main>
    </section>
  );
};
export default Team;
