const API_BASE_URL = "https://pokeapi.co/api/v2/";
interface PokemonsResults {
  name: string;
  url: string;
}

interface PokemonsData {
  count: number;
  next: string;
  previous: number | null;
  results: [PokemonsResults];
}
export interface OtherSprites {
  dream_world?: {
    front_default?: string;
  };
}
export type Sprites = {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  other?: OtherSprites;
};
export type PokemonDetails = {
  base_experiance?: number;
  height?: number;
  id: number;
  is_default?: boolean;
  location_area_encounters?: string;
  name: string;
  order?: number;
  sprites: Sprites;
};

export async function getPokemons(): Promise<PokemonsData> {
  try {
    const response = await fetch(`${API_BASE_URL}pokemon?offset=20&limit=20`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PokemonsData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts from API");
  }
}
export async function getPokemonsDetails(): Promise<PokemonDetails[]> {
  const baseList = await getPokemons();
  const detailFetches = baseList.results.map((item) => fetch(item.url));
  const responses = await Promise.all(detailFetches);

  for (const response of responses) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  const detailedDataPromises = responses.map((response) => response.json());
  const detailedPokemonList: PokemonDetails[] = await Promise.all(
    detailedDataPromises
  );
  return detailedPokemonList;
}
