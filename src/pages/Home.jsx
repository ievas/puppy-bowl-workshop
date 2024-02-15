import { useState, useEffect } from "react";
import PlayerList from "../components/PlayerList";

function Home() {
  let [players, setPlayers] = useState([]);
  let [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        let response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players"
        );
        let result = await response.json();
        // console.log(result);
        setPlayers(result.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  useEffect(() => {
    async function fetchTeams() {
      try {
        let response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/teams"
        );
        let result = await response.json();

        setTeams(result.data.teams);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <>
      <h1>Puppy Bowl Roster</h1>
      <PlayerList players={players} teams={teams} />;
    </>
  );
}

export default Home;
