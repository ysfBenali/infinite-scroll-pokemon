import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { fetchInfinitePokemons } from "../../api/pokemon";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";
import Loading from "../common/Loading";
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

  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (url) => {
    openModal();
    setSelectedPokemonUrl(url);
  };
  return (
    <>
      <PokemonModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        url={selectedPokemonUrl}
        pokemonId={selectedPokemonUrl.split("/")[selectedPokemonUrl.split("/").length - 2]}
      />
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Loading key={0}/>}
      >
        <Container>
          {status === "loading" && <Loading/>}
          {status === "error" && <p>Error fetching data</p>}
          {status === "success" &&
            data.pages.map((page) =>
              page.pokemons.map(({ name, url }) => (
                <PokemonCard
                  key={name}
                  {...{ name, url }}
                  handleClick={() => handleClick(url)}
                />
              ))
            )}
        </Container>
      </InfiniteScroll>
    </>
  );
};

export default PokemonList;
