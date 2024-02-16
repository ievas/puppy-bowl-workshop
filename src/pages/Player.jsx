import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import Remove from "../components/Remove";

function Player() {
  let { id } = useParams();
  let [playerData, setPlayerData] = useState(null);
  useEffect(() => {
    async function fetchPlayer() {
      try {
        let response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`
        );
        let result = await response.json();

        if (result) {
          console.log(result.data);
          setPlayerData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, [id]);

  return (
    <>
      {playerData ? (
        <div>
          <PlayerCard playerData={playerData} />
          <Remove playerId={playerData.player.id} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Player;
