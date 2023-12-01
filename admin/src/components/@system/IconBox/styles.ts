import {PALETTE} from "styles";
import {styled} from "styled-components";

export const IconBoxStyled = styled.button`
  background-color: unset;
  outline: unset;
  border: unset;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100%;
  background-color: ${PALETTE["HOVER"]};
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
