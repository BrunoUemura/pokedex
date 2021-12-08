/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function PokemonCard({ pokemon, index }: any) {
  return (
    <li key={index}>
      <Link href={`/pokemon?id=${index + 1}`} passHref>
        <div className="border p-4 border-gray my-2 capitalize flex flex-col items-center text-lg bg-gray-100 rounded-md cursor-pointer transition duration-300 transform hover:scale-105 shadow-md">
          <img
            className="w-20 h-20 mr-3"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div className="flex flex-row">
            <span className="mr-2 font-bold">{`#${index + 1}`}.</span>
            <span>{pokemon.name}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
