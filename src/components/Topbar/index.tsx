/* eslint-disable @next/next/no-img-element */
import { BiSearchAlt2 } from "react-icons/bi";

const handleHamburgerMenuClick = () => {
  console.log("Hamburger clicked");
};

const handleProfileMenuClick = () => {
  console.log("Profile clicked");
};

const TopBar = () => {
  return (
    <div className="fixed z-50 top-0 h-24 w-screen flex flex-row justify-between items-center bg-red-800 shadow-sm">
      <h1 className="text-white text-center cursor-pointer text-3xl ml-12">
        ポケモン図鑑 Pokédex
      </h1>

      <div className="border-2 py-1 px-3 flex justify-between rounded-full bg-white">
        <input
          className="flex-grow outline-none text-gray-600 focus:text-blue-600"
          type="text"
          placeholder="Search Pokemon..."
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

      <div
        className="w-14 h-14 cursor-pointer mr-12"
        onClick={handleProfileMenuClick}
      >
        <img
          className="rounded-full"
          src="https://github.com/BrunoUemura.png"
          alt="profile-photo"
        />
      </div>
    </div>
  );
};

export default TopBar;
