import { useContext } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./team.scss";

import BtnDetails from "../BtnDetails/BtnDetails";
const Team = () => {
  // On recupere le state et le dispatch grace au context fourni par le Provider
  const [state, dispatch] = useContext(PokemonContext);

  // On déclare la fonction à executer au click sur le bouton "remove"
  const removeFromTeam = (index) => {
    // On demande au reducer d'utiliser le switch case qui supprime le pokemon de l'equipe
    // ( celui qui se trouve à l'index donné )
    dispatch({ type: "REMOVE_FROM_TEAM", payload: index });
  };

  return (
    <section id="team">
      <h2>Team</h2>
      <main>
        {state.myTeam.length === 0 && <p>Team is empty.</p>}
        {state.myTeam.length > 0 &&
          state.myTeam.map((pokemon, i) => (
            <article key={i}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <div className="name-and-btn">
                <span>{pokemon.name}</span>
                <BtnDetails pokemonName={pokemon.name} />
                <button
                  className="btn-remove"
                  onClick={() => removeFromTeam(i)}
                >
                  remove
                </button>
              </div>
            </article>
          ))}
      </main>
    </section>
  );
};
export default Team;
