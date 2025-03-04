import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-transparent flex justify-between items-center relative top-0 left-0 w-full z-20">
      <input
        type="text"
        placeholder="Search for Music, Artists..."
        className="px-3 py-2 bg-gray-700 text-white rounded w-1/3"
      />
      <div className="flex items-center gap-4">
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Contact</a>
        
        <Link to="/login">
          <button className="border border-pink-500 text-white px-4 py-2 rounded">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
