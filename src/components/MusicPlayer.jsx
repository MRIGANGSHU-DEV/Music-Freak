import { FaPlayCircle, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from "react-icons/fa";
import { IoPlayForwardSharp, IoPlayBackSharp } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

const MusicPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong && currentSong.audioUrl) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="fixed bottom-0 w-full p-4 flex items-center justify-between px-10 bg-gray-900 border-4 border-transparent " style={{ borderImage: "linear-gradient(to right, #ec4899, #3b82f6) 1" }}>
      <div className="flex items-center gap-4 text-white min-w-[200px] min-h-[50px]">
        {currentSong ? (
          <>
            <img src={currentSong.imageUrl} alt={currentSong.title} className="w-12 h-12 rounded-md" />
            <div>
              <div className="text-white font-semibold">{currentSong.title}</div>
              <div className="text-gray-400 text-sm">{currentSong.artist}</div>
            </div>
          </>
        ) : (
          <div className="w-12 h-12 rounded-md bg-gray-800"></div>
        )}
      </div>

      <div className="flex flex-col items-center w-full max-w-lg">
        <div className="flex gap-6 text-white text-2xl">
          <IoPlayBackSharp className="cursor-pointer" />
          {isPlaying ? (
            <FaPause className="cursor-pointer" onClick={togglePlay} />
          ) : (
            <FaPlayCircle className="cursor-pointer" onClick={togglePlay} />
          )}
          <IoPlayForwardSharp className="cursor-pointer" />
        </div>
        <input
          type="range"
          className="w-full mt-2 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
      </div>

      <div className="text-white flex items-center gap-2">
        <FaVolumeUp />
        <input
          type="range"
          className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer border-2 border-transparent" 
          style={{ borderImage: "linear-gradient(to right, #ec4899, #3b82f6) 1" }}
          min="0"
          max="100"
          value={volume * 100}
          onChange={(e) => setVolume(e.target.value / 100)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
