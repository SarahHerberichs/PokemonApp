import { useContext, useState } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./team.scss";
import { useLocation } from "react-router-dom";

import BtnDetails from "../BtnDetails/BtnDetails";
const Team = () => {
  // On recupere le state et le dispatch grace au context fourni par le Provider
  const [state, dispatch] = useContext(PokemonContext);
  const location = useLocation();
  const isOnTeamPage = location.pathname === "/team";
  // On déclare la fonction à executer au click sur le bouton "remove"
  const removeFromTeam = (index) => {
    // On demande au reducer d'utiliser le switch case qui supprime le pokemon de l'equipe
    // ( celui qui se trouve à l'index donné )
    dispatch({ type: "REMOVE_FROM_TEAM", payload: index });
  };

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
