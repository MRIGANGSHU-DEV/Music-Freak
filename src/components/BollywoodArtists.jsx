import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../styles/index.css";

const BollywoodArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const querySnapshot = await getDocs(collection(db, "Bollywood Artists"));
      const artistList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArtists(artistList);
    };

    fetchArtists();
  }, []);

  return (
    <div className="px-10 py-8 bg-black text-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          Bollywood <span className="text-pink-500">Artists</span>
        </h2>
      </div>
      <div className="flex overflow-x-auto mt-6 space-x-4"> 
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col items-center flex-shrink-0 mr-8" 
          >
            <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg cursor-pointer hover:opacity-90">
              <img
                src={artist.imageUrl || "/default-image.jpg"}
                alt={artist.id}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2"> {artist.id} </h3>
          </div>
        ))}
        <div className="flex flex-col ml-2 items-center justify-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700">
            <span className="text-3xl text-white">+</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">View All</p>
        </div>
      </div>
      <br/>
      
    </div>
  );
};

export default BollywoodArtists;