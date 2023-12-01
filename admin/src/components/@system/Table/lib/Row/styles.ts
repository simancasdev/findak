import {PALETTE} from "styles";
import {Common} from "../../styles";
import {styled} from "styled-components";

export const RowStyled = styled(Common)`
  border-top: 0.3px solid ${PALETTE["BLACK01"]};
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
