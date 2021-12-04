/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../../components/Layout";
import PokemonListItem from "../../components/PokemonListItem";

export default function Pokedex({ pokemons }: any) {
  return (
    <Layout title="Pokedex">
      <>
        <h1 className="text-4xl mb-8 text-center">ポケモン図鑑 - Pokedex</h1>
        <ul className="grid grid-cols-3 gap-4">
          {pokemons?.map((pokemon: any, index: any) => (
            <PokemonListItem key={index} pokemon={pokemon} index={index} />
          ))}
        </ul>
      </>
    </Layout>
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
