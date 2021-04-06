import axiosInstance from "../api/axios";

export const fetchInfinitePokemons = async ({ pageParam = 1 }) => {
  const { data } = await axiosInstance.get(
    `?limit=20&offset=${(pageParam - 1) * 20}`
  );
  const { results } = data;

  return { pokemons: results, pageParam: pageParam + 1 };
};
