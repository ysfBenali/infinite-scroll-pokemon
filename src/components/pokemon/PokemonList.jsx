import PokemonCard from "./PokemonCard";
import { useInfiniteQuery } from "react-query";
import { fetchInfinitePokemons } from "../../api/pokemon";
import { Container } from "../styles";

const PokemonList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("pokemons", fetchInfinitePokemons, {
    getNextPageParam: (lastPage) => lastPage.pageParam,
  });

  return (
    <Container>
      {status === "loading" && <p>Loading ...</p>}
      {status === "error" && <p>Error fetching data</p>}
      {status === "success" &&
        data.pages.map((page) =>
          page.pokemons.map(({ name, url }) => (
            <PokemonCard key={name} {...{ name, url }} />
          ))
        )}
    </Container>
  );
};

export default PokemonList;
