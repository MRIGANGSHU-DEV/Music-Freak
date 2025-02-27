import { FaHome, FaCompass, FaMusic, FaUser } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-full min-h-screen p-5 flex flex-col border-r border-pink-500 fixed">
      <h1 className="ml-4 text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">MusicFreak</h1>
      <nav className="mt-5 flex-1">
        <ul className="ml-4 space-y-2">
          {[
            { to: "/", icon: <FaHome className="mr-3" />, label: "Home" },
            { to: "/discover", icon: <FaCompass className="mr-3" />, label: "Discover" },
            { to: "/albums", icon: <FaMusic className="mr-3" />, label: "Albums" },
            { to: "/artists", icon: <FaUser className="mr-3" />, label: "Artists" },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-lg py-2 px-3 rounded flex items-center cursor-pointer ${
                    isActive ? "bg-gray-800 text-pink-500" : "text-white hover:bg-gray-800"
                  }`
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
