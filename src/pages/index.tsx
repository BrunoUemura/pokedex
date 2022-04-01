import { useState } from "react";
import Navbar from "../components/Navbar";
import { SearchContext } from "../context/SearchContext";
import Pokedex from "./pokedex";

export default function Home({ pokemons }: any) {
  const [searchPokemon, setSearchPokemon] = useState("");

  return (
    <SearchContext.Provider value={{ searchPokemon, setSearchPokemon }}>
      <Navbar />
      <Pokedex pokemons={pokemons} />
    </SearchContext.Provider>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898");
  const { results } = await res.json();

  const pokemons = results.map((result: any, index: any) => {
    const paddedIndex = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    return {
      ...result,
      image,
      paddedIndex,
    };
  });

  return {
    props: { pokemons },
  };
}
