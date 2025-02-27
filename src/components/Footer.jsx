import { FaFacebookF, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="grid grid-cols-4 gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold">About</h2>
          <p className="text-gray-400 mt-2 text-sm">
            MusicFreak is a website that has been created for over <span className="text-pink-500">5 year's</span> now and it is one of the most famous music player <span className="text-pink-500">website's</span> in the world. In this website you can listen and download songs for free. Also if you want no limitation you can buy our <span className="text-blue-500">premium pass's</span>.
          </p>
        </div>

        {/* Melodies Section */}
        <div>
          <h2 className="text-lg font-bold border-b border-gray-600 inline-block pb-1">MusicFreak</h2>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Songs</li>
            <li>Radio</li>
            <li>Podcast</li>
          </ul>
        </div>

        {/* Access Section */}
        <div>
          <h2 className="text-lg font-bold border-b border-gray-600 inline-block pb-1">Access</h2>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Explore</li>
            <li>Artists</li>
            <li>Playlists</li>
            <li>Albums</li>
            <li>Trending</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold border-b border-gray-600 inline-block pb-1">Contact</h2>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>About</li>
            <li>Policy</li>
            <li>Social Media</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center mt-6 border-t border-gray-700 pt-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">MusicFreak</h2>
        <div className="flex space-x-4 text-xl text-gray-400">
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaPhone className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
