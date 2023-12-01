import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {colors, icons} from "./helper";
import {Row, Typography} from "../../@system";
import {Margins, SnackbarType, Style} from "src/interfaces";

interface SnackbarProps extends Style, Margins {
  message: string;
  type?: SnackbarType;
  width?: string | number;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  style,
  message,
  marginTop,
  marginBottom,
  type = "info",
  marginVertical,
  width,
}) => {
  const Icon = icons[type];
  const backgroundColor = colors[type];
  return (
    <Row
      style={[
        STYLES["snackbar"],
        style,
        {width, marginBottom, marginTop, marginVertical, backgroundColor},
      ]}
    >
      <Icon size={20} color={PALETTE["WHITE"]} />
      <Typography style={STYLES["message"]}>{message}</Typography>
    </Row>
  );
};
