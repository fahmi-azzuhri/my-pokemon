import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPokemon from "../pages/CardPokemon";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const [pokedexs, setPokedexs] = React.useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_POKEMON}/pokemon/`)
      .then((response) => {
        setPokedexs(response.data.results);
      })
      .catch((error) => {
        toast.error("Error bro", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {pokedexs.map((pokemon, index) => {
            return (
              <Col lg={3} sm={12} key={index}>
                <CardPokemon pokemon={pokemon} />
              </Col>
            );
          })}
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Main;
