import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlayerList({ players }) {
  let [searchTerm, setSearchTerm] = useState("");

  let navigate = useNavigate();

  function handleClick(id) {
    let path = `/players/${id}`;
    navigate(path);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  let filteredPlayers = players.filter((player) => {
    return player.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <div style={{ overflowX: "auto" }}>
        <table width="65%">
          <thead>
            <tr>
              <th colSpan="3">
                <h2>Players</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderLeft: "white" }} width="50%">
                <h2>Name</h2>
              </td>
              <td width="25%">
                <h2>Status</h2>
              </td>
              <td style={{ borderRight: "white" }} width="25%">
                <h2>Team</h2>
              </td>
            </tr>
            {filteredPlayers.map((player) => {
              return (
                <tr
                  key={player.id}
                  onClick={() => {
                    handleClick(player.id);
                  }}
                >
                  <td
                    style={{ borderLeft: "white" }}
                    className="player-info-name"
                  >
                    <img
                      className="small"
                      src={player.imageUrl}
                      alt={player.breed}
                    />
                    {player.name[0].toUpperCase() + player.name.slice(1)}
                  </td>
                  <td>{player.status}</td>
                  {player.id % 2 ? (
                    <td style={{ borderRight: "white" }}>Fluff</td>
                  ) : (
                    <td style={{ borderRight: "white" }}>Ruff</td>
                  )}
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
