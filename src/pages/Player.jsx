import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";

function Player() {
  let { id } = useParams();
  let [player, setPlayer] = useState([]);
  useEffect(() => {
    async function fetchPlayer() {
      try {
        let response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`
        );
        let result = await response.json();
        console.log(result);
        setPlayer([]);
      } catch (error) {
        console.error(error);
      }
    }
    // fetchPlayer();
  }, []);

  return (
    <>
      <div>
        <h2>The player</h2>
      </div>
    </>
  );
}

export default Player;
