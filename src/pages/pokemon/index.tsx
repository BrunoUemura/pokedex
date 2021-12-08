/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import Link from "next/link";
import { typesBackground, typesColor } from "../../utils/typesBg";

export default function index({ pokemon }: any) {
  return (
    <Layout title={pokemon.name}>
      <div
        className={`${
          typesBackground[pokemon.types[0].type.name]
        } rounded-3xl shadow-lg`}
      >
        <h1 className="text-4xl mt-2 mb-2 text-center capitalize">
          #{pokemon.id}
        </h1>
        <img className="mx-auto z-50" src={pokemon.image} alt={pokemon.name} />

        <div className="w-full bg-white rounded-t-3xl p-4 shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl mt-2 mb-2 text-center capitalize">
              {pokemon.name}
            </h1>
            <div className="flex flex-row">
              {pokemon.types.map((type: any, index: any) => (
                <p
                  key={index}
                  className={`${
                    typesColor[type.type.name]
                  } capitalize text-center w-20 h-8 mr-2 rounded-full`}
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <p>
            <span className="font-bold mr-2">Weight: </span>
            {pokemon.weight}
          </p>
          <p>
            <span className="font-bold mr-2">Height: </span>
            {pokemon.height}
          </p>

          {/* <h2 className="text-2xl mt-6 mb-2">Types</h2> */}

          <p className="mt-10 text-center">
            <Link href="/">
              <a className="text-2xl underline">Home</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  const id = query.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const paddedIndex = ("00" + id).slice(-3);

  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
  pokemon.image = image;

  return {
    props: {
      pokemon,
    },
  };
}
