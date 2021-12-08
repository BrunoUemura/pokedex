/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import { SearchContent, useSearchContext } from "../../context/SearchContext";

export default function Pokedex({ pokemons }: any) {
  const { searchPokemon }: SearchContent = useSearchContext();

  return (
    <Layout title="Pokédex - ポケモン図鑑">
      <div className="mt-28">
        <ul className="grid grid-cols-3 gap-4">
          {pokemons?.map((pokemon: any, index: any) => {
            if (pokemon.name.startsWith(searchPokemon)) {
              return (
                <PokemonCard key={index} pokemon={pokemon} index={index} />
              );
            }
          })}
        </ul>
      </div>
    </Layout>
  );
}
