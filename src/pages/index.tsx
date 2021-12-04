import type { NextPage } from "next";
import Link from "next/Link";
import Layout from "../components/Layout";
import Pokedex from "../components/Pokedex";
import TopBar from "../components/Topbar";

export default function Home({ pokemons }: any) {
  return (
    <div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const { results } = await res.json();
  const pokemons = results.map((result: any, index: any) => {
    const paddedIndex = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    return {
      ...result,
      image,
    };
  });

  return {
    props: { pokemons },
  };
}
