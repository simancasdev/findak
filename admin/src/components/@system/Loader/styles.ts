import {styled} from "styled-components";

export const LoaderStyled = styled.div`
  display: inline-block;
  position: relative;

  div {
    display: block;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
