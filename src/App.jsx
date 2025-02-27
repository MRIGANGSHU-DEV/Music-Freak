import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import "./styles/index.css";
import Home from "./pages/Home";
import WeeklyTopSongs from "./components/WeeklyTopSongs";
import HotHitsHindi from "./components/HotHitsHindi";
import PopularArtists from "./components/PopularArtists";
import MusicGenres from "./components/MusicGenres";
import MoodPlaylist from "./components/MoodPlaylist";
import TrendingSongs from "./components/TrendingSongs";
import Footer from "./components/Footer";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <Router>
      <div className="flex bg-black text-white min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <WeeklyTopSongs setCurrentSong={setCurrentSong} />
                <HotHitsHindi setCurrentSong={setCurrentSong} />
                <PopularArtists />
                <TrendingSongs setCurrentSong={setCurrentSong}/>
                <Footer/>
                
              </>
            } />
            <Route path="/discover" element={
              <>
                <MusicGenres/>
                <MoodPlaylist/>
                <PopularArtists/>
                <TrendingSongs setCurrentSong={setCurrentSong}/>
                <Footer/>
              </>
            } />
            <Route path="/artists" element={
              <>
                <PopularArtists/>
                <Footer/>
              </>
            }/>
          </Routes>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <MusicPlayer currentSong={currentSong}/>
    </Router>
  );
}


export default App;
