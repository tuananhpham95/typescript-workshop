import { useEffect, useState } from "react";
import { Detail } from "./interface";
import "./pokemon.css";
interface Props {
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}

const PokemonList = ({
  id,
  name,
  image,
  abilities,
  viewDetail,
  setViewDetail,
}: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);
  const closeDetail = () => {
    setViewDetail({
      id: 0,
      isOpened: false,
    });
  };
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities: </p>
              {abilities?.map((ab: any, index: number) => {
                return <div key={index}>{ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
