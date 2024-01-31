import React, { useState, useEffect } from "react";
import "./pokedexItem.scss";
import BtnDetails from "../BtnDetails/BtnDetails";
import BtnAddToTeam from "../BtnAddToTeam/BtnAddToTeam";
import { useContext } from "react";
import PokemonContext from "../../data/PokemonContext";

const PokedexItem = ({ pokemon }) => {
  const [state, dispatch] = useContext(PokemonContext);
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const apiPokemon = await response.json();
        setPokemonImage(apiPokemon.sprites.front_default);
      } catch (error) {
        console.error("Error fetching Pokemon image", error);
      }
    };

    fetchPokemonImage();
  }, [pokemon.name]);

  return (
    <div className="pokedex-item">
      <div className="pokemon-name">{pokemon.name}</div>
      {pokemonImage && <img src={pokemonImage} alt={pokemon.name} />}
      <BtnDetails pokemonName={pokemon.name} />
      <BtnAddToTeam pokemonName={pokemon.name} />
    </div>
  );
};

export default PokedexItem;
