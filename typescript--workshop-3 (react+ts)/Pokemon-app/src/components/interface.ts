export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: string;
    name: string;
  }[];
}
export interface Detail {
  id: number;
  isOpened: boolean;
}
export interface Props {
  pokemons: Pokemon[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
