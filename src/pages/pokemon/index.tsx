/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import Link from "next/link";
import { typesBackground, typesColor } from "../../utils/typesBg";
import TypeTag from "../../components/TypeTag";

export default function index({ pokemon, paddedIndex }: any) {
  console.log(pokemon);

  return (
    <Layout title={pokemon.name}>
      <div
        className={`${typesBackground[pokemon.types[0].type.name]} shadow-lg`}
      >
        <h1 className="text-4xl pt-4 text-center capitalize">#{paddedIndex}</h1>
        <img
          className="mx-auto z-50 lg:w-2/4 md:w-2/4 sm:w-2/4"
          src={pokemon.image}
          alt={pokemon.name}
        />

        <div className="w-full bg-white rounded-t-3xl p-4 shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl mt-2 mb-8 text-center capitalize">
              {pokemon.name}
            </h1>
            <div className="flex flex-row mb-8">
              {pokemon.types.map((type: any, index: any) => (
                <TypeTag
                  key={index}
                  type={type}
                  size={"w-20"}
                  textSize={"text-xl"}
                />
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

          <p className="mt-10 text-center">
            <Link href="/">
              <a className="text-2xl p-2 bg-gray-400 text-white rounded-md">
                🡠 Go Back
              </a>
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
      paddedIndex,
    },
  };
}
