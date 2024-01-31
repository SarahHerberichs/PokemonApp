import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import PokemonContext from "./data/PokemonContext";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";

const App = () => {
  // On récupère le state et le dispatch qui permet d'agir sur ce state
  // Ils viennent du context qui est fourni par le Provider
  const [state, dispatch] = useContext(PokemonContext);

  // On utilise useEffect pour que le code qu'il contient ne s'execute qu'une fois
  // au 1er rendu du composant. ( il ne le fait qu'une fois car le tableau de dépendances en
  // 2e argument de useEffect est vide, on ne surveille aucune donnée du state )
  useEffect(() => {
    // On fait un call API pour récupérer les 151 1ers pokemons
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0", {
      method: "GET",
    })
      .then((response) => response.json()) // on recupere le json de la reponse de l'API
      .then((data) => {
        // on stock les pokemons recupérés dans un variable
        let APIPokemons = data.results;
        // on enregistre les pokemons de l'API dans le state
        dispatch({ type: "SET_POKEMONS", payload: APIPokemons });
      });
  }, []);
  // Mise à jour du contenu de l'élément "error-box" si state.error est défini
  useEffect(() => {
    const errorBox = document.getElementById("error-box");

    if (state.error) {
      errorBox.textContent = state.error;
    } else {
      errorBox.textContent = ""; // Efface le contenu si state.error est faux ou nul
    }
  }, [state.error]);

  return (
    <BrowserRouter>
      <Header />
      <main id="app_main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
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
