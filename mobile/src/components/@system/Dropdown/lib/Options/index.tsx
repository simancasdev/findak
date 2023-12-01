import {STYLES} from "./styles";
import {Sent} from "src/svg";
import {useLang} from "src/hooks";
import {Typography, Touchable, Row, Container} from "src/components/@system";

interface OptionsProps {}

export const Options: React.FC<OptionsProps> = () => {
  const {t} = useLang();
  return (
    <Container style={STYLES["options"]}>
      <Touchable style={STYLES["option"]}>
        <Row>
          <Sent size={10} />
          <Typography>{t("products")}</Typography>
        </Row>
      </Touchable>
      <Touchable style={STYLES["option"]}>
        <Row>
          <Sent size={10} />
          <Typography>{t("services")}</Typography>
        </Row>
      </Touchable>
    </Container>
  );
};
