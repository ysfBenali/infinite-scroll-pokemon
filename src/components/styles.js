import styled from "styled-components";

export const Navbar = styled.header`
  height: 3.125rem;
  background-color: #ef5350;
  padding: .25em .5em;
  img{
    height: 100%;
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  /* 
  #### its also working with grid :) ####
    display: grid;
    grid-template-columns: repeat(auto-fill, 12rem); 
  */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
`;

export const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 9rem auto;
  margin: 4px;
  padding: 2rem;
  border-radius: 10px;
  border-top: 0.5px solid #ef5350;
  border-bottom: 0.5px solid #ef5350;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  overflow: hidden;
  &:hover {
    transform: scale(1.04);
    transition: transform 0.15s ease-in;
  }
  & p::first-letter {
    text-transform: uppercase;
  }
`;

export const CardIndex = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #333;
  background: #ef5350;
  width: 3rem;
  padding: 0.1rem;
  font-weight: 700;
  border-radius: 0 0 10px 0;
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
`;

export const ModalCardWrapper = styled.div`
  /* background: black; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(100px, 0.5fr));
  gap: 1px 10px;
  width: 100%;
  grid-template-areas:
    "avatar top"
    "avatar bottom";
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    grid-template-rows: 200px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "top"
      "bottom";
    align-items: start;
    gap: 15px 5px;
  }
`;

export const ImgContainer = styled.div`
  grid-area: avatar;
  background: linear-gradient(#ff6966, #ffff);
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  max-height: 95%;
`;

export const PokeName = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 0.01em;
  text-transform: capitalize;
`;

export const PokeId = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.6rem;
  font-size: 2.2rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #fc4230;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 120px;
  @media (max-width: 480px) {
    max-height: 90px;
  }
`;

export const TopCard = styled.div`
  /* background-color: red; */
  grid-area: top;
  font-size: 5px;
`;

export const Tuple = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

export const Category = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  margin: 0.3rem;
`;

export const Value = styled.p`
  font-size: 0.75rem;
  margin: 0.3rem;
`;

export const BottomCard = styled.div`
  /* background-color: green; */
  grid-area: bottom;
  padding-bottom: 1rem;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const Intro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.65rem;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 480px) {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
`;

export const CloseModal = styled.span`
  position: absolute;
  cursor: pointer;
  color: #dc143c;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  top: 10px;
  right: 10px;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 900;
  user-select: none;
  outline: none;
  &:hover {
    transform: scale(1.125);
  }
`;

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;
