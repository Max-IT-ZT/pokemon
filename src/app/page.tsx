import Header from "./components/header/header";
import PokemonsMap from "./components/pokemons-map/pokemons-map";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main>
        <PokemonsMap />
      </main>
    </div>
  );
}
