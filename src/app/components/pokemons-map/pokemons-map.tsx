import { getPokemonsDetails, PokemonDetails } from "@/app/api/pocemons/route";
import Pokemon from "../pokemons/pokemon";

export default async function PokemonsMap() {
  const data: PokemonDetails[] = await getPokemonsDetails();

  return (
    <ul>
      {data.map((item) => (
        <Pokemon
          key={item.id}
          name={item.name}
          url={item.sprites.other?.dream_world?.front_default || ""}
        />
      ))}
    </ul>
  );
}
