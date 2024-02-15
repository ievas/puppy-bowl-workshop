import { useState } from "react";
import PlayerList from "../components/PlayerList";

function Teams() {
  let [teamPlayers, setTeamPlayers] = useState([]);
  let [selectedTeamId, SetSelectedTeamId] = useState(null);

  return (
    <>
      <PlayerList players={players} />
    </>
  );
}

export default Teams;
