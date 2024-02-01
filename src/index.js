import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PokemonProvider from "./data/PokemonProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Utilisation du provider permettant la recherche et modification du state de
    toute l'appli dans toutes les pages */}
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);

reportWebVitals();
