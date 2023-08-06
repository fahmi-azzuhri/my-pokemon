import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CardPokemon from "./pages/CardPokemon";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detailpokemon" element={<CardPokemon />} />
    </Routes>
  );
}

export default App;
