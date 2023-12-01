import {PALETTE} from "styles";
import {styled} from "styled-components";

export const LoginLayout = styled.main`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 1fr 1fr;
`;

export const Branding = styled.section`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  background-color: ${PALETTE["BLACK"]};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
