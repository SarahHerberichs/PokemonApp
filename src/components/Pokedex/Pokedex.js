import {useContext} from "react";
import PokemonContext from "../../data/PokemonContext";
import PokedexItem from "../PokedexItem/PokedexItem";
import './pokedex.scss'
const Pokedex = () => {

    // On récupère le state et le dispatch dans le context fourni par le Provider
    const [state, dispatch] = useContext(PokemonContext)

    // On retourne le template qui map sur la liste de pokemons contenu dans le state
    // Et on affiche un composant PokedexItem pour chacun d'entre eux en lui fournissant le pokemon
    // qu'il doit afficher grace à une props
    return (
        <section id="pokedex">
            <h2>Pokedex</h2>
            <div className="pokemon-list">
                { state.pokemons.length > 0 && state.pokemons.map( (pokemon, i) => (
                    <PokedexItem key={i} pokemon={pokemon}/>
                ))}
            </div>
        </section>
    )
}
export default Pokedex;