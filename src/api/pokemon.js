import axios from "axios";
import axiosInstance from "../api/axios";
import { API_SPECIES_baseURL } from "../helpers/utils/constants";

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

export const fetchPokemonSpecies = async (id) => {
  const { data } = await axios.get(
    `${API_SPECIES_baseURL}/${id}`
  );
  return data;
};
