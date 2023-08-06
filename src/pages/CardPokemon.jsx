import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const CardPokemon = ({ pokemon }) => {
  const [poke, setPoke] = useState([]);
  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPoke(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        toast.error("Error bro", {});
      });
  }, [pokemon.url]);

  return (
    <div>
      {poke && (
        <Card className="mt-4">
          <Card.Img src={poke?.sprites?.front_default} alt="gambar pokemon" />
          <Card.Body className="text-center">
            <Card.Title>{poke?.name}</Card.Title>

            <Link to={`/detailpokemon/${poke?.name}`}>
              <Button className="btn btn-primary mt-3">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      )}

      <ToastContainer />
    </div>
  );
};

export default CardPokemon;
