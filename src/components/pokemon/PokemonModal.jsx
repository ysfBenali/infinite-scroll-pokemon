import { useQuery } from "react-query";
import ReactModal from "react-modal";
import { fetchPokemonItem } from "../../api/pokemon";

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    height: "50%",
    maxWidth: "calc(100% - 80px)",
    maxHeight: "calc(100% - 80px)",
    marginRight: "-40%",
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
      <button onClick={closeModal}>Close Modal</button>
      <p>{url}</p>
      {isLoading && <p>Loading ...</p>}
      {isSuccess && <p>{data.height}</p>}
      {isError && <p>Error</p>}
    </ReactModal>
  ) : null;
};

export default PokemonModal;
