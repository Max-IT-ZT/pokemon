import PokemonsMap from "./components/pokemons-map/pokemons-map";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <PokemonsMap />
        <h1>Pocemon</h1>
      </main>
    </div>
  );
}
