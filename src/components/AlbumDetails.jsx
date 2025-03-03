import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import { FaHeart } from "react-icons/fa";

const AlbumDetails = ({ setCurrentSong }) => {
    const { albumName } = useParams();
    const [album, setAlbum] = useState(null);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchAlbum = async () => {
        const docRef = doc(db, "Albums", albumName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        const albumData = docSnap.data();
        const songRefs = albumData.songs;

        const songPromises = songRefs.map((songRef) => getDoc(songRef));
        const songDocs = await Promise.all(songPromises);

        const songList = songDocs.map((songDoc) => ({
            id: songDoc.id,
            ...songDoc.data(),
        }));

        setAlbum(albumData);
        setSongs(songList);
        }
    };

    fetchAlbum();
    }, [albumName]);
    

  const playSong = (song) => {
    setCurrentSong(song); // Update global state with selected song
  };

  return (
    <div className="px-10 py-8 bg-black text-white">
      <h2 className="text-3xl font-bold">
        Album <span className="text-pink-500">{albumName}</span>
      </h2>
      <br/>

      <div className="grid grid-cols-12 text-gray-400 text-sm pb-2 border-b border-gray-700">
        <div className="col-span-1"></div>
        <div className="col-span-4">Title</div>
        <div className="col-span-2">Release Date</div>
        <div className="col-span-3">Album</div>
        <div className="col-span-1">Time</div>
        <div className="col-span-1"></div>
      </div>

      {songs.map((song, index) => (
        <div
          key={song.id}
          className="grid grid-cols-12 items-center py-3 border-b border-gray-800 hover:bg-gray-900 rounded-lg px-2 transition cursor-pointer"
          onClick={() => playSong(song)}
        >
          <div className="col-span-1 text-gray-400">#{index+1}</div>
          <div className="col-span-4 flex items-center gap-3">
            <img src={song.imageUrl} alt={song.title} className="w-12 h-12 rounded-md" />
            <div>
              <div className="text-white font-semibold">{song.title}</div>
              <div className="text-gray-400 text-sm">{song.artist}</div>
            </div>
          </div>
          <div className="col-span-2">{song.releaseDate}</div>
          <div className="col-span-3">{song.album}</div>
          <div className="col-span-1">{song.duration}</div>
          <div className="col-span-1 text-pink-500 text-lg cursor-pointer">
            <FaHeart />
          </div>
        </div>
      ))}

      <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg w-full">
        + View All
      </button>
    </div>
  );
};

export default AlbumDetails;
