/* eslint-disable @next/next/no-img-element */
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { SearchContent, useSearchContext } from "../../context/SearchContext";

export default function Pokedex({ pokemons }: any) {
  const { searchPokemon }: SearchContent = useSearchContext();

  const filterPokemon = (pokemon: any, index: number) => {
    if (pokemon.name.startsWith(searchPokemon)) {
      return <Card key={index} pokemon={pokemon} index={index} />;
    }
  };

  return (
    <Layout title="Pokédex - ポケモン図鑑">
      <div className="mx-10 pt-28">
        <ul className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {pokemons?.map((pokemon: any, index: number) => {
            return filterPokemon(pokemon, index);
          })}
        </ul>
      </div>
    </Layout>
  );
}
