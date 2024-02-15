import { useState } from "react";

function PlayerList({ players, teams }) {
  let [selectedPlayerId, setSelectedPlayerId] = useState(null);

  function handleClick() {
    setSelectedPlayerId(null);
  }

  function findTeam(teamId) {
    console.log(teamId);
    console.log(teams);
    let team = teams.find((t) => t.id === teamId);
    // console.log(team.name);
    return "hello";
  }

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table width="50%">
          <thead>
            <tr>
              <th colSpan="3">
                <h2>Players</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="40%">
                <h2>Name</h2>
              </td>
              <td width="30%">
                <h2>Status</h2>
              </td>
              <td width="30%">
                <h2>Team</h2>
              </td>
            </tr>
            {players.map((player) => {
              return (
                <tr key={player.id} onClick={handleClick}>
                  <td>
                    <img
                      className="small"
                      src={player.imageUrl}
                      alt={player.breed}
                    />
                    {player.name[0].toUpperCase() + player.name.slice(1)}
                  </td>
                  <td>{player.status}</td>
                  <td>{findTeam(player.teamId)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PlayerList;
