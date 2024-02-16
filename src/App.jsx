import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import Player from "./pages/Player";
import AddPlayer from "./pages/AddPlayer";

function App() {
  // let [selectedPlayerId, setSelectedPlayerId] = useState(null);
  // let [teams, setTeams] = useState([]);

  let [players, setPlayers] = useState([]);

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

  // useEffect(() => {
  //   async function fetchTeams() {
  //     try {
  //       let response = await fetch(
  //         "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/teams"
  //       );
  //       let result = await response.json();
  //       console.log(result.data.teams);

  //       setTeams(result.data.teams);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchTeams();
  // }, []);

  return (
    <>
      <div className="container">
        <Navbar players={players} />
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players/:id" element={<Player />} />
            <Route path="/teams/:id" element={<Team />} />
            <Route path="/add" element={<AddPlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
