import router from "next/router";
import { ReactChild } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";

type Props = {
  label: string;
  icon: ReactChild;
  onClick: Function;
};

const handlePokedexClick = () => {
  router.push("pokedex");
};

const handleProfileClick = () => {
  console.log("Profile");
};

const handleSignOut = () => {
  console.log("Sign out");
};

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 flex flex-col bg-red-800">
      <div className="flex flex-col justify-center items-center mt-32">
        <Divisor />
        <div
          className="w-full h-10 flex items-center text-center text-white hover:bg-red-900 cursor-pointer"
          onClick={handlePokedexClick}
        >
          <AiOutlineUnorderedList className="ml-4" />
          <button className="ml-2">Pokedex</button>
        </div>

        <Divisor />
        <div
          className="w-full h-10 flex items-center text-center text-white hover:bg-red-900 cursor-pointer"
          onClick={handleProfileClick}
        >
          <FaUserCircle className="ml-4" />
          <button className="ml-2">Profile</button>
        </div>

        <Divisor />

        <div className="bg-red-900 w-full absolute bottom-10 h-px mt-4 opacity-50"></div>
        <div
          className="w-full h-10 absolute bottom-0 flex items-center text-center text-white hover:bg-red-900 cursor-pointer"
          onClick={handleSignOut}
        >
          <GoSignOut className="ml-4" />
          <button className="ml-2">Sign out</button>
        </div>
      </div>
    </div>
  );
};

const Divisor = () => <div className="bg-red-900 w-full h-px opacity-50"></div>;

export default SideBar;
