/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TiDelete } from "react-icons/ti";
import { SearchContent, useSearchContext } from "../../context/SearchContext";

export default function TopBar() {
  const { searchPokemon, setSearchPokemon }: SearchContent = useSearchContext();

  function handleClear() {
    setSearchPokemon("");
  }

  return (
    <div className="fixed z-50 top-0 h-24 w-screen flex flex-row justify-evenly items-center bg-red-800 shadow-sm">
      <Link href="/" passHref>
        <h1 className="text-white text-center cursor-pointer text-3xl ml-12">
          ポケモン図鑑 - Pokédex
        </h1>
      </Link>

      <div className="border-2 py-1 px-3 flex justify-between rounded-full bg-white">
        <input
          className="flex-grow outline-none text-gray-600 focus:text-blue-600"
          type="text"
          placeholder="Search Pokemon..."
          value={searchPokemon}
          onChange={(event) => {
            setSearchPokemon(event.target.value);
          }}
        />
        <span
          className="text-2xl cursor-pointer flex justify-center items-center text-gray-500"
          onClick={handleClear}
        >
          <TiDelete />
        </span>
      </div>
    </div>
  );
}
