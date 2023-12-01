import {X} from "svg";
import {PanelStyled} from "./styles";
import {Row, IconBox, Typography} from "../";
import {useAppDispatch, useAppSelector} from "hooks";
import {closePanel, selectPanelState} from "redux/slices";

interface PanelProps {}

export const Panel: React.FC<PanelProps> = () => {
  const dispatch = useAppDispatch();
  const {component} = useAppSelector(selectPanelState);

  return (
    <PanelStyled>
      <Row justifyContent="space-between" marginBottom={10}>
        <Typography variant="subtitle">Panel</Typography>
        <IconBox onClick={() => dispatch(closePanel())} icon={<X />} />
      </Row>
      {component}
    </PanelStyled>
  );
};
