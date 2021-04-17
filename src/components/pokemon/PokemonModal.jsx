import { useQuery } from "react-query";
import ReactModal from "react-modal";
import { RiCloseCircleFill } from "react-icons/ri";
import {
  ModalCardWrapper,
  LeftCard,
  RigthCard,
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
} from "../styles";
import { fetchPokemonItem } from "../../api/pokemon";

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

const PokemonModal = ({ isOpen, closeModal, url }) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["pokemon", url],
    () => fetchPokemonItem(url)
  );

  return isOpen ? (
    <ReactModal {...{ isOpen, closeModal, url }} style={customStyles}>
      {isSuccess && (
        <>
          <ModalCardWrapper>
            <LeftCard>
              <PokeId>#12</PokeId>
              <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
              <PokeName>Name</PokeName>
            </LeftCard>
            <TopCard>
              <Title>Bio</Title>
              <Intro>
                Lorem ipsum dolor sithgjhgjhgjgjghjhg amet consectetur
                adipisicing elit.
              </Intro>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
            </TopCard>
            <BottomCard>
              <Title>Stats</Title>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
              <Tuple>
                <Category>Category</Category>
                <Value>Value</Value>
              </Tuple>
            </BottomCard>
            <CloseModal onClick={closeModal}>
              <RiCloseCircleFill />
            </CloseModal>
          </ModalCardWrapper>
        </>
      )}
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error</p>}
    </ReactModal>
  ) : null;
};

export default PokemonModal;
