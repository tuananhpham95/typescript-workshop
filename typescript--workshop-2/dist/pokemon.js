"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiUrl = "https://pokeapi.co/api/v2/pokemon";
// hämta Pokemon-lista
const fetchPokemonList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(apiUrl);
        const data = yield response.json();
        const pokemons = data.results;
        const pokemonList = document.getElementById("pokemon-list");
        if (pokemonList) {
            for (const pokemon of pokemons) {
                console.log(pokemon.url);
                const details = yield fetchPokemonDetails(pokemon.url);
                console.log("details", details);
                const listItem = document.createElement("li");
                listItem.textContent = `Name: ${details.name}, Height: ${details.height}, Weight: ${details.weight}, Types: ${details.types.join(", ")}`;
                pokemonList.appendChild(listItem);
            }
        }
        return pokemons;
    }
    catch (error) {
        console.error("Error fetching Pokemon list:", error);
        return [];
    }
});
const fetchPokemonDetails = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log("data", data);
        return {
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type) => type.type.name),
        };
    }
    catch (error) {
        console.error(`Error fetching details for Pokemon with URL ${url}:`, error);
        return {
            name: "Unknown",
            height: 0,
            weight: 0,
            types: [],
        };
    }
});
fetchPokemonList();
