import axios from "axios";
import axiosInstance from "../api/axios";

export const fetchInfinitePokemons = async ({ pageParam = 1 }) => {
  const { data } = await axiosInstance.get(
    `?limit=20&offset=${(pageParam - 1) * 20}`
  );
  const { results } = data;
  console.log(pageParam);

  return { pokemons: results, pageParam: pageParam + 1 };
};

export const fetchPokemonItem = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
