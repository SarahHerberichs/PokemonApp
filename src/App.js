import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Router from "./Routes/Router";
//Déjà englobé par le Provider qui utilise le Context relié au Reducer (permet acces au state et dispatch)
const App = () => {
  // Execution une seule fois au chargement
  useEffect(() => {
    // On fait un call API pour récupérer les 151 1ers pokemons
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let APIPokemons = data.results;
        // Enregistrement des pokémons dans le state
        dispatch({ type: "SET_POKEMONS", payload: APIPokemons });
      });
  }, []);
  // Mise à jour du contenu de l'élément "error-box" si state.error est défini
  useEffect(() => {
    const errorBox = document.getElementById("error-box");

    if (state.error) {
      errorBox.textContent = state.error;
    } else {
      errorBox.textContent = ""; // Efface le contenu si state.error est faux ou null
    }
  }, [state.error]);

  return (
    <BrowserRouter>
      <Header />
      <main id="app_main">
        <Router />
        {!state.error ? (
          <div id="error-box" className="invisible">
            {state.error}
          </div>
        ) : (
          <div id="error-box" className="visible">
            {state.error}
          </div>
        )}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
