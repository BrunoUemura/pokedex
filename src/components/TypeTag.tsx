import { PokemonType } from "../types/ResponsePokeAPI";
import { typesColor } from "../utils/typesBg";

type Props = {
  type: PokemonType;
  size: string;
  textSize: string;
};

export default function TypeTag({ type, size, textSize }: Props) {
  return (
    <span
      className={`${
        typesColor[type.type.name]
      } ${size} ${textSize} capitalize text-center mr-2 px-2 py-0 rounded-full`}
    >
      {type.type.name}
    </span>
  );
}
