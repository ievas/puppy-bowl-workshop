import { useState } from "react";

function PlayerCard({ playerData }) {
  console.log(playerData);
  // if (!playerData || !playerData.player) {
  //   console.log("the same");
  //   console.log(playerData);
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      {playerData.player && (
        <div className="player-card">
          <div className="player-details">
            <div className="player-name">{playerData.player.name}</div>
            <div className="player-info">
              <div className="team">
                Team:{" "}
                {playerData.player.team ? (
                  playerData.player.team.name
                ) : (
                  <>no team</>
                )}
              </div>
              <div className="breed">Breed: {playerData.player.breed}</div>
              <div className="status">Status: {playerData.player.status}</div>
            </div>
          </div>
          <img
            className="player-img"
            src={playerData.player.imageUrl}
            alt={playerData.player.breed}
          />
        </div>
      )}
    </>
  );
}

export default PlayerCard;
