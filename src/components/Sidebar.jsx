import { FaHome, FaCompass, FaMusic, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';  // Make sure this path is correct
import { signOut } from 'firebase/auth';

const Sidebar = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="w-64 bg-gray-900 h-full min-h-screen p-5 flex flex-col border-r border-pink-500 fixed">
      <h1 className="ml-4 text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">MusicFreak</h1>
      <nav className="mt-5 flex-1">
        <ul className="ml-4 space-y-2">
          {[
            { to: '/', icon: <FaHome className="mr-3" />, label: 'Home' },
            { to: '/discover', icon: <FaCompass className="mr-3" />, label: 'Discover' },
            { to: '/albums', icon: <FaMusic className="mr-3" />, label: 'Albums' },
            { to: '/artists', icon: <FaUser className="mr-3" />, label: 'Artists' },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-lg py-2 px-3 rounded flex items-center cursor-pointer ${
                    isActive ? 'bg-gray-800 text-pink-500' : 'text-white hover:bg-gray-800'
                  }`
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}

          {/* Horizontal Line */}
          <li>
            <hr className="border-t border-gray-700 my-3 mx-3" />
          </li>

          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-lg py-2 px-3 rounded flex items-center cursor-pointer text-white hover:bg-gray-800 w-full text-left"
              >
                <FaSignOutAlt className="mr-3" /> Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-lg py-2 px-3 rounded flex items-center cursor-pointer ${
                    isActive ? 'bg-gray-800 text-pink-500' : 'text-white hover:bg-gray-800'
                  } w-full`
                }
              >
                <FaSignInAlt className="mr-3" /> Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
