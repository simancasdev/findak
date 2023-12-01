import {SidebarStyled} from "./styles";
import {Brand, Navigation} from "./lib";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <SidebarStyled>
      <Brand />
      <Navigation />
    </SidebarStyled>
  );
};
