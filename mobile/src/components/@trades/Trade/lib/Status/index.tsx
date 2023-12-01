import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {STATUS_LABEL} from "./helper";
import {useTrade} from "../../context";
import {CheckCircle, X} from "src/svg";
import {SvgProps} from "src/interfaces";
import {PALETTE, styleOS} from "src/styles";
import {Row, Typography} from "src/components/@system";

interface StatusProps {}

export const Status: React.FC<StatusProps> = () => {
  const {t} = useLang();
  const {status} = useTrade()["trade"];
  const STATUS_COLOR =
    status === "completed" ? PALETTE["PRIMARY"] : PALETTE["ERROR"];

  const svgProps: SvgProps = {
    size: 15,
    color: PALETTE["WHITE"],
  };

  return status !== "in_progress" ? (
    <Row fullWidth style={[STYLES["status"], {backgroundColor: STATUS_COLOR}]}>
      {status === "completed" ? (
        <CheckCircle {...svgProps} />
      ) : (
        <X {...svgProps} />
      )}

      <Typography
        fontSize={12}
        fontWeight={styleOS("400")}
        style={{color: PALETTE["WHITE"]}}
      >
        {t(STATUS_LABEL[status])}
      </Typography>
    </Row>
  ) : null;
};
