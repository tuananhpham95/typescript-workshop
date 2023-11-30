import { Props } from "./interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

const PokemonCollection = ({ pokemons, viewDetail, setViewDetail }: Props) => {
  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setViewDetail({
        id: id,
        isOpened: true,
      });
    }
  };

  return (
    <div>
      <section
        className={
          viewDetail.isOpened
            ? "collection-container-actice"
            : "collection-container"
        }
      >
        {viewDetail.isOpened ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} onClick={() => selectPokemon(pokemon.id)}>
              <PokemonList
                name={pokemon.name}
                id={pokemon.id}
                abilities={pokemon.abilities}
                image={pokemon.sprites.front_default}
                viewDetail={viewDetail}
                setViewDetail={setViewDetail}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
