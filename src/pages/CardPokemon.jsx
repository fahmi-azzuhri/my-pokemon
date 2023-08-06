import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
const CardPokemon = ({ pokemon }) => {
  const [poke, setPoke] = useState([]);
  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPoke(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon.url]);
  return (
    <div>
      <Card className="mt-4">
        <Card.Img src={poke?.sprites?.front_default} alt="gambar pokemon" />
        <Card.Body className="text-center">
          <Card.Title>{poke?.name}</Card.Title>
          <Button className="btn btn-primary mt-3">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPokemon;
