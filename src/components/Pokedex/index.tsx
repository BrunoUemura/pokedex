/* eslint-disable @next/next/no-img-element */
import Link from "next/Link";
import Layout from "../Layout";

export default function Pokedex({ pokemons }: any) {
  return (
    <Layout title="Pokedex">
      <>
        <h1 className="text-4xl mb-8 text-center">Pokedex</h1>
        <ul>
          {pokemons?.map((pokemon: any, index: any) => (
            <li key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <a className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
                  <img
                    className="w-20 h-20 mr-3"
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <span className="mr-2 font-bold">{index + 1}.</span>
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
