import styled from "styled-components";

export const Navbar = styled.header`
  height: 3.125rem;
  background-color: #ef5350;
`;

export const Container = styled.div`
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
  margin: 5px;
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
