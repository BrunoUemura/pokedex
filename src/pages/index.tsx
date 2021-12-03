import type { NextPage } from "next";
import Link from "next/Link";
import Layout from "../components/Layout";

export default function Home({ pokemons }: any) {
  return (
    <Layout title="NextJS Pokedex">
      <>
        <h1 className="text-4xl mb-8 text-center">NextJS Pokedex</h1>
        <ul>
          {pokemons?.map((pokemon: any, index: any) => (
            <li key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <a>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <span>{index + 1}.</span>
                  {pokemon.name}
                </a>
              </Link>
            </li>
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
