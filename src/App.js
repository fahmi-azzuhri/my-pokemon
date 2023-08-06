import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import DetailPokemon from "./pages/DetailPokemon";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailpokemon/:name" element={<DetailPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
