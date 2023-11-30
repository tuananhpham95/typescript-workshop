import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCollection from "./components/PokemonCollection";
import { Detail, Pokemon } from "./components/interface";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, SetLoading] = useState<boolean>(true);
  const [viewDetails, setViewDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
        );
        console.log("res", res.data);

        setNextUrl(res.data.next);

        const pokemonDetails: Pokemon[] = [];
        for (const pokemon of res.data.results) {
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );

          pokemonDetails.push(poke.data);
        }
        setPokemons(pokemonDetails);
        SetLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    getPokemon();
  }, []);

  const nextPage = async () => {
    SetLoading(true);
    try {
      let res = await axios.get(nextUrl);
      setNextUrl(res.data.next);

      const pokemonDetails: Pokemon[] = [];

      for (const pokemon of res.data.results) {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        pokemonDetails.push(poke.data);
      }
      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonDetails]);
      SetLoading(false);
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <header className="pokemon-header">Pokemon</header>
          <PokemonCollection
            pokemons={pokemons}
            viewDetail={viewDetails}
            setViewDetail={setViewDetail}
          />
          <div className="btn">
            <button onClick={nextPage}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
