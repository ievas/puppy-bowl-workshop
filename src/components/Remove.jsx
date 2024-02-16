import { useState } from "react";
import { useActionData } from "react-router-dom";

function Remove({ playerId }) {
  let [deleted, setDeleted] = useState(false);
  async function handleClick(id) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
      setDeleted(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {deleted ? (
        <div>Player removed</div>
      ) : (
        <button
          onClick={() => {
            handleClick(playerId);
          }}
        >
          Remove Player
        </button>
      )}
    </>
  );
}

export default Remove;
