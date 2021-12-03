/* eslint-disable @next/next/no-img-element */
import Link from "next/Link";
import Layout from "../../components/Layout";

export default function Pokedex({ pokemons }: any) {
  return (
    <Layout title="NextJS Pokedex">
      <>
        <h1 className="text-4xl mb-8 text-center">NextJS Pokedex</h1>
        <div className="grid grid-cols-3 gap-4">
          {pokemons?.map((pokemon: any, index: any) => (
            <div key={index}>
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
            </div>
          ))}
        </div>
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
