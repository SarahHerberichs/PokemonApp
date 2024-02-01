import "./pokemonDetails.scss";
import BtnAddToTeam from "../BtnAddToTeam/BtnAddToTeam";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../../data/PokemonContext";
import "./pokemonDetails.scss";

const PokemonDetails = () => {
  const [state] = useContext(PokemonContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //Déclenchement au chargement, une seule fois
  useEffect(() => {
    //Index d'interval pour changement des images
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1000);

    //Nettoyage de l'interval au démontage composant
    return () => clearInterval(intervalId);
  }, []);

  const getImageUrl = () => {
    //Utilisation de l'index en cours (s'incrémente toutes les sc)
    switch (currentImageIndex) {
      case 0:
        return state.pokemonToDisplay.sprites.front_default;
      case 2:
        return state.pokemonToDisplay.sprites.back_default;
      case 3:
        return state.pokemonToDisplay.sprites.front_shiny;
      case 1:
        return state.pokemonToDisplay.sprites.back_shiny;
      default:
        return state.pokemonToDisplay.sprites.front_default;
    }
  };

  return (
    <section id="pokemon-details">
      {state.pokemonToDisplay && (
        <>
          <div className=" pokemon-details name-and-btn">
            <h2>{state.pokemonToDisplay.name} </h2>
            <BtnAddToTeam pokemonName={state.pokemonToDisplay.name} />
          </div>
          <img
            src={getImageUrl()}
            alt={state.pokemonToDisplay.name}
            className="pokemon-img"
          />
          <h3>Stats</h3>
          {state.pokemonToDisplay.stats.map((item, i) => (
            <p key={i}>
              {item.stat.name}: {item.base_stat}
            </p>
          ))}
          <h3>Types</h3>
          {state.pokemonToDisplay.types.map((item, i) => (
            <p key={i}>{item.type.name}</p>
          ))}
          <h3>Capacités</h3>
          {state.pokemonToDisplay.abilities.map((item, i) => (
            <p key={i}>{item.ability.name}</p>
          ))}
        </>
      )}
    </section>
  );
};

export default PokemonDetails;
