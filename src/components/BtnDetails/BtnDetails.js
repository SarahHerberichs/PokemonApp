import { useContext } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./btnDetails.scss";

const BtnDetails = ({ pokemonName }) => {
  const [state, dispatch] = useContext(PokemonContext);
  const setPokemonToDisplay = () => {
    //Récuperation des détails du pokemon clické
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((APIPokemon) => {
        // Utilisation de l'action du reducer en lui fournissant le détail du pokemon
        dispatch({ type: "SET_POKEMON_TO_DISPLAY", payload: APIPokemon });
      });
  };

  return (
    <button className="btn-details" onClick={setPokemonToDisplay}>
      Details
    </button>
  );
};

export default BtnDetails;
