/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { PokemonDetails, PokemonType } from "../types/ResponsePokeAPI";
import TypeTag from "./TypeTag";

export default function Card({ pokemon, index }: any) {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemonDetails = async () => {
    const res = await fetch(pokemon.url);
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      const { types }: PokemonDetails = await fetchPokemonDetails();
      setTypes(types);
    })();
  }, []);

  return (
    <li key={index}>
      <Link href={`/pokemon?id=${index + 1}`} passHref>
        <div className="border p-4 border-gray my-2 capitalize flex flex-col items-center text-lg bg-gray-100 rounded-md cursor-pointer transition duration-300 transform hover:scale-105 shadow-md">
          <span className="mr-2 font-bold">{`#${pokemon.paddedIndex}`}</span>
          <img
            className="w-20 h-20 mr-3"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <div className="flex flex-col justify-center items-center">
            <span>{pokemon.name}</span>
            <div className="flex justify-center items-center">
              {types.map((type, index) => (
                <TypeTag
                  key={index}
                  type={type}
                  size={"w-12"}
                  textSize={"text-xs"}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
