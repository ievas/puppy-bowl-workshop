import { useState, useEffect } from "react";
import PlayerList from "../components/PlayerList";

function Teams({ teams }) {
  let [teamPlayers, setTeamPlayers] = useState([]);
  let [selectedTeamId, SetSelectedTeamId] = useState(null);

  return (
    <>
      {/* <h1>Puppy Bowl Teams</h1>
      <ul>
        {teams.map((team) => {
          return <li>{team.name}</li>;
        })}
      </ul> */}
      <ol>
        <li>
          <h3>Fluff</h3>
        </li>
        <li>
          <h3>Ruff</h3>
        </li>
      </ol>
    </>
  );
}

export default Teams;
