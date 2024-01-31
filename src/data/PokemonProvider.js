import {useReducer} from "react";
import PokemonReducer, {initialState} from "./PokemonReducer";
import PokemonContext from "./PokemonContext";

// On créer le Provider qui fournira le state et de quoi agir dessus ( dispatch )
const PokemonProvider = ( { children } ) => {

    // on met en lien le reducer avec le state "initialState"
    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    // On retourne le template qui permet d'insérer des balises enfants dans le Provider
    // en lui indiquant sa value, c'est à dire quel state et quel dispatch il doit fournir
    return (
        <PokemonContext.Provider value={[state, dispatch]}>
            { children }
        </PokemonContext.Provider>
    )
}
export default PokemonProvider;