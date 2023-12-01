import {styled} from "styled-components";
import {TypographyStyled} from "../Typography/styles";

export const TableStyled = styled.div``;

export const Common = styled.div`
  display: grid;
  align-items: center;
`;

export const Head = styled(Common)``;

export const Empty = styled(TypographyStyled)`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
