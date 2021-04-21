import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { SpinnerContainer } from "../styles";

const Loading = () => {
  return (
    <SpinnerContainer>
      <ClipLoader loading={true} size={40} />
    </SpinnerContainer>
  );
};

export default Loading;
