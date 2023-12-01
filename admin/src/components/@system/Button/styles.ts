import {PALETTE} from "styles";
import {styled} from "styled-components";

export const ButtonStyled = styled.button`
  background-color: unset;
  border: unset;
  background-color: ${PALETTE["PRIMARY"]};
  color: ${PALETTE["WHITE"]};
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
