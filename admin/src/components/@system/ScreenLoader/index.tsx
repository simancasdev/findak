import {PALETTE} from "styles";
import {Style} from "interfaces";
import {Loader} from "../Loader";
import {FindakIsotype} from "svg";
import {ScreenLoaderStyled} from "./styles";

interface ScreenLoaderProps extends Style {}

export const ScreenLoader: React.FC<ScreenLoaderProps> = () => {
  return (
    <ScreenLoaderStyled>
      <FindakIsotype size={80} color={PALETTE["BLACK"]} />
      <Loader color={PALETTE["BLACK"]} size={35} />
    </ScreenLoaderStyled>
  );
};
