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
import BollywoodArtists from "./components/BollywoodArtists";
import PopularAlbums from "./components/PopularAlbums";
import AlbumDetails from "./components/AlbumDetails";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <Router>
      <div className="flex bg-black text-white min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <Routes>
            <Route path="/login" element={
              <LoginForm/>
            }/>
            <Route path="/signup" element={
              <Signup/>
            }/>

            <Route path="/" element={
              
                <ProtectedRoute>
                  <WeeklyTopSongs setCurrentSong={setCurrentSong} />
                  <HotHitsHindi setCurrentSong={setCurrentSong} />
                  <PopularArtists />
                  <TrendingSongs setCurrentSong={setCurrentSong}/>
                  <Footer/>
                </ProtectedRoute>
                
              
            } />
            <Route path="/discover" element={
            
                <ProtectedRoute>
                  <MusicGenres/>
                  <MoodPlaylist/>
                  <PopularArtists/>
                  <TrendingSongs setCurrentSong={setCurrentSong}/>
                  <Footer/>
                </ProtectedRoute>
              
            } />
            <Route path="/albums" element={
                <ProtectedRoute>
                  <PopularAlbums/>
                  <Footer/>
                </ProtectedRoute>
            }/>

            <Route path="/albums/:albumName" element={<AlbumDetails setCurrentSong={setCurrentSong} />} />

            <Route path="/artists" element={
              <ProtectedRoute>
                <PopularArtists/>
                <BollywoodArtists/>
                <Footer/>
              </ProtectedRoute>
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
