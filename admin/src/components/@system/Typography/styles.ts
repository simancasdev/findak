import {styled} from "styled-components";

export const TypographyStyled = styled.span`
  display: flex;
  &.title {
    font-weight: 600;
    font-size: 24px;
  }

  &.subtitle {
    font-weight: 500;
    font-size: 18px;
  }

  &.regular {
    font-weight: 400;
    font-size: 14px;
  }
`;
