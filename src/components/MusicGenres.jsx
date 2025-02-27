import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import "../styles/index.css";

const MusicGenres = ({ setCurrentSong }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songsCollection = collection(db, "Music Genres");
      const songSnapshot = await getDocs(songsCollection);
      const songList = songSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSongs(songList);
    };
    fetchSongs();
  }, []);

  return (
    <div className="px-10 py-8 bg-black text-white">
      <h2 className="text-3xl font-bold">
        Music <span className="text-pink-500">Genres</span>
      </h2>
      <div className="flex overflow-x-auto mt-6 space-x-4">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-gray-800 p-2 rounded-lg w-64 flex-shrink-0 shadow-lg cursor-pointer hover:bg-gray-700"
             // Set current song on click
          >
            <img
              src={song.imageUrl || "/default-image.jpg"}
              alt={song.title}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
        ))}
        
        {/* View All Button */}
        <div className="flex flex-col ml-2 items-center justify-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700">
            <span className="text-3xl text-white">+</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">View All</p>
        </div>
      </div>
    </div>
  );
};

export default MusicGenres;
