import { useContext } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./btnAddToTeam.scss";

const BtnAddToTeam = ({ pokemonName }) => {
  const [state, dispatch] = useContext(PokemonContext);
  const addPokemonToTeam = () => {
    // On vérifie s'il reste de la place dans l'équipe (maximum 6 dans l'équipe)
    if (state.myTeam.length < 6) {
      const isPokemonInTeam = state.myTeam.some(
        (pokemon) => pokemon.name === pokemonName
      );
      if (!isPokemonInTeam) {
        // Fetch details of the Pokemon to be added using the API
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => response.json())
          .then((APIPokemon) => {
            // Ask the reducer to add this Pokemon to state.myTeam
            dispatch({ type: "ADD_POKEMON_TO_TEAM", payload: APIPokemon });
          });
      } else {
        // If the Pokemon is already in the team, show an error
        dispatch({
          type: "SET_ERROR",
          payload: "Pokemon is already in the team.",
        });

        // After 2 seconds, reset the error
        setTimeout(() => {
          dispatch({ type: "SET_ERROR", payload: false });
        }, 2000);
      }
    } else {
      // If there is no space in the team
      dispatch({ type: "SET_ERROR", payload: "Team is full." });

      // After 2 seconds, reset the error
      setTimeout(() => {
        dispatch({ type: "SET_ERROR", payload: false });
      }, 2000);
    }
  };
  return (
    <>
      <button className="btn-add" onClick={addPokemonToTeam}>
        Add to team
      </button>
    </>
  );
};

export default BtnAddToTeam;
