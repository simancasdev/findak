import {STYLES} from "./styles";
import {Style} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {CornerDownRight, Crown} from "src/svg";
import {Column, Row, Touchable, Typography} from "../../@system";

interface BannerProps extends Style {
  onPress: () => void;
}

export const Banner: React.FC<BannerProps> = ({onPress, style}) => {
  const {t} = useLang();
  const {colors} = useTheme();

  return (
    <Touchable onPress={onPress} style={[{padding: 10, width: "100%"}, style]}>
      <Column>
        <Row>
          <Crown size={20} />
          <Typography style={STYLES["title"]}>
            {t("get")} Findak Premium
          </Typography>
        </Row>
        <Row>
          <CornerDownRight color={colors["WHITE_BLACK"]} size={15} />
          <Typography style={STYLES["helper_text"]}>
            {t("offers_unlimited_searches_and_more")}
          </Typography>
        </Row>
      </Column>
    </Touchable>
  );
};
