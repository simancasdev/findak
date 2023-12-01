import {Link} from "react-router-dom";
import {styled} from "styled-components";

export const NavigationStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-weight: 300;
  /* width: 95%; */
  &.highlighted {
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.15);
  }

  transition: all ease 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
