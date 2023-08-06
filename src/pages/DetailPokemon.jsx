import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, Col, Container, Row } from "react-bootstrap";
const DetailPokemon = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_POKEMON}/pokemon/${name}`)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Error bro", {});
      });
  }, [name]);
  return (
    <div>
      {pokemonData ? (
        <Container>
          <Row className="border-1 rounded-3 align-items-center justify-content-center ">
            <Col lg={6} sm={12}>
              <Button
                onClick={() => navigate("/")}
                className="bg-transparent text-black border-0 mt-5"
              >
                Back
              </Button>
              <img
                className="bg-monster"
                src={pokemonData?.sprites?.front_default}
                alt=""
              />
            </Col>
            <Col lg={6} sm={12}>
              <h2 className="">Monster Details</h2>

              <h5 className="mt-5"> Name : {pokemonData?.name}</h5>
              <h5>Species : {pokemonData?.species?.name}</h5>
              <h5>Weight : {pokemonData?.weight}</h5>
              <h5>
                Ability :{" "}
                {pokemonData?.abilities?.map((ability) => {
                  return (
                    <Button className="me-3">{ability?.ability?.name}</Button>
                  );
                })}
              </h5>
              <h5>
                Type :{" "}
                {pokemonData?.types?.map((type) => {
                  return (
                    <Button className="me-3 btn btn-warning">
                      {type?.type?.name}
                    </Button>
                  );
                })}
              </h5>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default DetailPokemon;
