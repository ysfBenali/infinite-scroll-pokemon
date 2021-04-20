import { useEffect, useState } from "react";
import { API_IMG_baseURL } from "../../helpers/utils/constants";
import { CardContainer, CardIndex, Avatar } from "../styles";

const PokemonCard = ({ name, url, handleClick }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    url: "",
    index: "",
    imageUrl: "",
  });

  useEffect(() => {
    let index = url.split("/")[url.split("/").length - 2];
    let imageUrl = `${API_IMG_baseURL}/${index}.svg`;
    setPokemon({ name, url, index, imageUrl });
  }, []);

  return (
    <CardContainer onClick={handleClick} data-testid='pokemonId'>
      <CardIndex>
        <span>#</span>
        {pokemon.index}
      </CardIndex>
      <Avatar src={pokemon.imageUrl} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </CardContainer>
  );
};

export default PokemonCard;
