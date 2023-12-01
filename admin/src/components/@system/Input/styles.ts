import {PALETTE} from "styles";
import {styled} from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const FieldInput = styled.input`
  border: unset;
  border: 1px solid ${PALETTE["BLACK03"]};
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
`;
