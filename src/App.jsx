import { useState } from "react";
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
  let [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players/:id/>" element={<Player />} />
            <Route path="/teams/:id" element={<Team />} />
            <Route path="/add" element={<AddPlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
