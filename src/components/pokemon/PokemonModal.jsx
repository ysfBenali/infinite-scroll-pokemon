import { useQuery } from "react-query";
import ReactModal from "react-modal";
import Loading from "../common/Loading";
import { RiCloseCircleFill } from "react-icons/ri";
import { API_IMG_baseURL } from "../../helpers/utils/constants";
import getPokemonIntro from "../../helpers/getPokemonIntro";
import {
  ModalCardWrapper,
  Img,
  TopCard,
  BottomCard,
  PokeName,
  PokeId,
  Tuple,
  Category,
  Value,
  Title,
  Intro,
  CloseModal,
  ImgContainer
} from "../styles";
import { fetchPokemonItem, fetchPokemonSpecies } from "../../api/pokemon";

const customStyles = {
  content: {
    display: "fixed",
    position: "relative",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // height: '400px',
    width: "70%",
    // height: '100%',
    overflow: "auto",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    maxHeight: "calc(100% - 5rem)",
    maxWidth: "calc(100% - 2rem)",
    transform: "translate(-50%, -50%)",
  },
};

const PokemonModal = ({ isOpen, closeModal, url, pokemonId }) => {
  const { isLoading, isError, isSuccess, data: dataP } = useQuery(
    ["pokemon", url],
    () => fetchPokemonItem(url)
  );

  const { data: dataS } = useQuery(["pokemonSpecies", pokemonId], () =>
    fetchPokemonSpecies(pokemonId)
  );
  if(dataS)getPokemonIntro(dataP, dataS);

  return isOpen ? (
    <ReactModal {...{ isOpen, closeModal, url }} style={customStyles} appElement={document.getElementById('root')}>
      {isSuccess && (
        <>
          <ModalCardWrapper>
            <ImgContainer>
            <PokeId>#{dataP.id}</PokeId>
              <Img src={`${API_IMG_baseURL}/${dataP.id}.svg`} />
              <PokeName>{dataP.name}</PokeName></ImgContainer>
            <TopCard>
              <Title>Bio</Title>
                {dataS ? (
                  <Intro>
                    {getPokemonIntro(dataP, dataS)}
                  </Intro>
                ) : null}
              <Tuple>
                <Category>Height:</Category>
                <Value>{dataP.height / 10}m</Value>
              </Tuple>
              <Tuple>
                <Category>Weight:</Category>
                <Value>{dataP.weight / 10}m</Value>
              </Tuple>
              <Tuple>
                <Category>Abilities:</Category>
                <Value> {dataP.abilities[0].ability.name}</Value>
              </Tuple>
            </TopCard>
            <BottomCard>
              <Title>Stats</Title>
              <Tuple>
                <Category>HP:</Category>
                <Value>{dataP.stats[0].base_stat}</Value>
              </Tuple>
              <Tuple>
                <Category>Atk:</Category>
                <Value>{dataP.stats[1].base_stat}</Value>
              </Tuple>
              <Tuple>
                <Category>Speed:</Category>
                <Value>{dataP.stats[5].base_stat}</Value>
              </Tuple>
            </BottomCard>
            <CloseModal onClick={closeModal} data-testid="closeModal">
              <RiCloseCircleFill />
            </CloseModal>
          </ModalCardWrapper>
        </>
      )}
      {isLoading && <Loading/>}
      {isError && <p>Error</p>}
    </ReactModal>
  ) : null;
};

export default PokemonModal;
