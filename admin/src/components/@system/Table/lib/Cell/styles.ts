import {styled} from "styled-components";

export const CellStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: all ease 0.3s;
  &.row-child {
  }
  &.head-child {
    span {
      font-weight: 600;
    }
  }
`;
