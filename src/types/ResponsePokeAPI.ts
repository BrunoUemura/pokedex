export type PokemonDetails = {
  types: PokemonType[];
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
