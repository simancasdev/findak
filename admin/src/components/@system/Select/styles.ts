import {PALETTE} from "styles";
import {styled} from "styled-components";

export const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const FieldSelect = styled.select`
  border: unset;
  border: 1px solid ${PALETTE["BLACK03"]};
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const Option = styled.option``;
