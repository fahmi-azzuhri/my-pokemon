import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPokemon from "./CardPokemon";

const Main = () => {
  const [pokedexs, setPokedexs] = React.useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_POKEMON}/pokemon/`)
      .then((response) => {
        setPokedexs(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
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
      </Container>
    </div>
  );
};

export default Main;
