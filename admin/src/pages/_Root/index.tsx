import clsx from "clsx";
import {useAppSelector} from "hooks";
import {Outlet} from "react-router-dom";
import {Panel} from "components/@system";
import {Sidebar} from "components/Sidebar";
import {selectPanelState} from "redux/slices";
import {RootLayout, Main, Content} from "./styles";

interface RootProps {}

export const Root: React.FC<RootProps> = () => {
  const {show} = useAppSelector(selectPanelState);

  return (
    <RootLayout>
      <Sidebar />
      <Main className={clsx(show && "show-panel")}>
        <Content>
          <Outlet />
        </Content>
        {show && <Panel />}
      </Main>
    </RootLayout>
  );
};
