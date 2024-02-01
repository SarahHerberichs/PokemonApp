import { useReducer } from "react";
import PokemonReducer, { initialState } from "./PokemonReducer";
import PokemonContext from "./PokemonContext";

//Création du Provider qui fournira le state + possibilité d'utiliser les actions sur le state via le dispatch
const PokemonProvider = ({ children }) => {
  // state et dispatch utilisant le reducer PokemonReducer
  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  //Pour encadrement de l'appli dans le Provider dont la valeur est le state et dispatch utilisable sur PokemonReducer
  return (
    <PokemonContext.Provider value={[state, dispatch]}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
