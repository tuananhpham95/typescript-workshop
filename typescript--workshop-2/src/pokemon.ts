interface Pokemon {
  name: string;
  url: string;
}
interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  types: string[];
}
const apiUrl = "https://pokeapi.co/api/v2/pokemon";

// hämta Pokemon-lista
const fetchPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const pokemons: Pokemon[] = data.results;

    const pokemonList = document.getElementById(
      "pokemon-list"
    ) as HTMLDivElement;

    if (pokemonList) {
      for (const pokemon of pokemons) {
        console.log(pokemon.url);

        const details = await fetchPokemonDetails(pokemon.url);
        console.log("details", details);

        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${details.name}, Height: ${
          details.height
        }, Weight: ${details.weight}, Types: ${details.types.join(", ")}`;
        pokemonList.appendChild(listItem);
      }
    }

    return pokemons;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
};
const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);

    return {
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map(
        (type: { type: { name: string } }) => type.type.name
      ),
    };
  } catch (error) {
    console.error(`Error fetching details for Pokemon with URL ${url}:`, error);
    return {
      name: "Unknown",
      height: 0,
      weight: 0,
      types: [],
    };
  }
};

fetchPokemonList();
