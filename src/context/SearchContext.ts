import { createContext, useContext } from "react";

export type SearchContent = {
  searchPokemon: string;
  setSearchPokemon: (s: string) => void;
};

export const SearchContext = createContext<SearchContent>({
  searchPokemon: "",
  setSearchPokemon: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
