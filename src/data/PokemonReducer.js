// On export par defaut un state initial ( qui contient les valeurs par defaut des données de l'application )
export const initialState = {
  pokemons: [],
  pokemonToDisplay: null,
  //Recup de la team crée et stockée dans le localStorage
  myTeam: JSON.parse(localStorage.getItem("myTeam")) || [],
  error: false,
};
const PokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "SET_POKEMON_TO_DISPLAY":
      return {
        ...state,
        pokemonToDisplay: action.payload,
      };
    case "ADD_POKEMON_TO_TEAM":
      let updatedTeam = [...state.myTeam];
      updatedTeam.push(action.payload);

      const newState = {
        ...state,
        myTeam: updatedTeam,
      };
      // Stockage dans le localStorage
      localStorage.setItem("myTeam", JSON.stringify(updatedTeam));
      return newState;

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_FROM_TEAM":
      //copie du state myTeam
      let updatedTeamAfterRemove = [...state.myTeam];
      //On stocke la copie de team à laquelle on retire le pokemon à l'index contenu par le payload
      updatedTeamAfterRemove = updatedTeamAfterRemove.filter(
        (pokemon, index) => index !== action.payload
      );
      localStorage.setItem("myTeam", JSON.stringify(updatedTeamAfterRemove));

      //myTeam mise à jour
      return {
        ...state,
        myTeam: updatedTeamAfterRemove,
      };
    // Mise à jour du localStorage

    default:
      return state;
  }
};
export default PokemonReducer;
