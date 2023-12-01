import {styled} from "styled-components";

export const RootLayout = styled.main`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 300px auto;
`;

export const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  &.show-panel {
    grid-template-columns: minmax(500px, auto) minmax(200px, 380px);
  }
`;

export const Content = styled.section`
  padding: 1rem;
  overflow-y: auto;
`;
