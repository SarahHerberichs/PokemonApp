// On export par defaut un state initial ( qui contient les valeurs par defaut des données de l'application )
export const initialState = {
  pokemons: [],
  pokemonToDisplay: null,
  //   myTeam: [],
  myTeam: JSON.parse(localStorage.getItem("myTeam")) || [],
  error: false,
};
// On créer le reducer qui permettra d'agir sur les données du state auquel la fonction "useReducer" l'aura lié
const PokemonReducer = (state, action) => {
  // on regarde quel type d'action est demandée par le dispatch
  switch (action.type) {
    case "SET_POKEMONS":
      // on retourne une copie du state mise à jour
      // en stockant la liste stockée dans action.payload dans state.pokemons
      return {
        ...state,
        pokemons: action.payload,
      };
    case "SET_POKEMON_TO_DISPLAY":
      // on retourne une copie du state mise à jour
      // en enregistre le detail du pokemon a afficher (contenu par action.payload)
      // dans state.pokemonToDisplay
      return {
        ...state,
        pokemonToDisplay: action.payload,
      };
    case "ADD_POKEMON_TO_TEAM":
      let updatedTeam = [...state.myTeam];
      updatedTeam.push(action.payload);
      // Mise à jour du state
      const newState = {
        ...state,
        myTeam: updatedTeam,
      };
      // Stockage local
      localStorage.setItem("myTeam", JSON.stringify(updatedTeam));
      return newState;
    // case 'ADD_POKEMON_TO_TEAM':
    //     // On fait une copie de state.myTeam
    //     let updatedTeam = [...state.myTeam];
    //     // On ajoute le pokemon à la liste
    //     updatedTeam.push( action.payload );
    //     // on retourne une copie du state mise à jour
    //     // En indiquant que state.myTeam prend pour valeur le tableau mis à jour
    //     return {
    //         ...state,
    //         myTeam: updatedTeam
    //     }
    case "SET_ERROR":
      // on retourne une copie du state mise à jour
      // en indiquant que state.error prend la valeur contenue par action.payload
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_FROM_TEAM":
      // On fait une copie du tableau state.myTeam
      let updatedTeamAfterRemove = [...state.myTeam];
      // On lui donne une nouvelle valeur qui est lui meme filtré
      // En récuperant tous les elements qui ne sont pas à l'index contenu dans action.payload
      updatedTeamAfterRemove = updatedTeamAfterRemove.filter(
        (pokemon, index) => index !== action.payload
      );
      // on retourne une copie du state mise à jour
      // en precisant que myTeam prend pour valeur la nouvelle version du tableau
      return {
        ...state,
        myTeam: updatedTeamAfterRemove,
      };
    default:
      // on retourne le state
      return state;
  }
};
export default PokemonReducer;
