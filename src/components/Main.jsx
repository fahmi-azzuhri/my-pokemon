import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CardPokemon from "../pages/CardPokemon";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const [previousPokemon, setPreviousPokemon] = useState(false);
  const [nextPokemon, setNextPokemon] = useState(true);
  const [pokedexs, setPokedexs] = useState([]);
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
  const handlePrev = () => {
    if (previousPokemon) {
      axios
        .get(`${process.env.REACT_APP_POKEMON}/pokemon`)
        .then((response) => {
          setPokedexs(response.data.results);
          setPreviousPokemon(response.data.previous);
          setNextPokemon(response.data.next);
        })
        .catch((error) => {
          toast.error("Error bro", {});
        });
    }
  };

  const handleNext = () => {
    if (nextPokemon) {
      axios
        .get(`${process.env.REACT_APP_POKEMON}/pokemon/?offset=20&limit=20`)
        .then((response) => {
          setPokedexs(response?.data?.results);
          setPreviousPokemon(response?.data?.previous);
          setNextPokemon(response?.data?.next);
        })
        .catch((error) => {
          toast.error("Error bro", {});
        });
    }
  };
  return (
    <div>
      <Container>
        <Row>
          {pokedexs?.map((pokemon, index) => {
            return (
              <Col lg={3} sm={12} key={index}>
                <CardPokemon pokemon={pokemon} />
              </Col>
            );
          })}
        </Row>
        <ToastContainer />
        <div className="mt-5 text-center">
          <Button className="me-3" onClick={handlePrev}>
            Prev
          </Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </div>
      </Container>
    </div>
  );
};

export default Main;
