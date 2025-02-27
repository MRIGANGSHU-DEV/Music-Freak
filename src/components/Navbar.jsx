const Navbar = () => {
    return (
      <div className="p-4 bg-transparent flex justify-between items-center absolute top-0 left-0 w-full z-20">
        <input
          type="text"
          placeholder="Search for Music, Artists..."
          className="px-3 py-2 bg-gray-700 text-white rounded w-1/3"
        />
        <div className="flex items-center gap-4">
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Contact</a>
          <a href="#" className="text-white">Premium</a>
          <button className="border border-pink-500 text-white px-4 py-2 rounded">Login</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    );
  };
export default Navbar;
