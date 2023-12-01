import {PALETTE} from "@/styles/palette";
import {styled} from "styled-components";

export const Landing = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;

export const Hero = styled.section`
  background-color: ${PALETTE["PRIMARY"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;

  @media (max-width: 840px) {
    padding: 1rem 2rem;
    gap: 0.5rem;
    .logotype {
      width: 150px;
    }
  }
`;

export const Assets = styled.div`
  position: relative;
  width: 80%;
  height: 75%;

  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 840px) {
    height: 500px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
`;

export const Slogan = styled.h2`
  color: ${PALETTE["WHITE"]};
  font-weight: 300;
`;
