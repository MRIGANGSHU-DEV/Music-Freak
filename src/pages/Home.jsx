import bgImage from "../assets/background.jpg";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div 
      className="h-screen flex flex-col justify-center items-start px-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <Navbar />
      <div className="relative z-10">
        <h2 className="text-6xl font-bold text-white">
          All the <span className="text-pink-500">Best Songs</span> <br/> in One Place
        </h2>
        <p className="text-gray-300 mt-4 max-w-lg">
          Access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions.
        </p>
        <div className="mt-6 flex">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg">Discover Now</button>
          <button className="ml-4 border border-pink-500 text-white px-6 py-3 rounded-lg text-lg">Create Playlist</button>
        </div>
      </div>
    </div>
  );
};


export default Home;