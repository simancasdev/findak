import {styled} from "styled-components";
import {PALETTE} from "styles";

export const AvatarStyled = styled.div``;

export const Placeholder = styled.div`
  background-color: ${PALETTE["PRIMARY"]};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 100%;
`;
