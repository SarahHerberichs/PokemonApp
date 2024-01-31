import {useContext} from "react";
import PokemonContext from "../../data/PokemonContext";
import './btnDetails.scss'

const BtnDetails = ( { pokemonName } ) => {

    const [state, dispatch] = useContext(PokemonContext)
    const setPokemonToDisplay = () => {
        // on récupère le detail du pokemon sur lequel on a cliqué
        fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonName }`)
            .then( response => response.json() )
            .then( APIPokemon => {
                // On demande au reducer d'utiliser le cas ou le type d'action est 'SET_POKEMON_TO_DISPLAY'
                // en lui fournissant le détail du pokemon à afficher dans action.payload
                dispatch( { type: 'SET_POKEMON_TO_DISPLAY', payload: APIPokemon } )
            })
    }

    return (
        <button
            className="btn-details"
            onClick={ setPokemonToDisplay }
        >
            Details
        </button>
    )
}

export default BtnDetails;