import {Send} from "src/svg";
import {STYLES} from "./styles";
import {useSent} from "../../context";
import {WIDTH_SCREEN} from "src/utils";
import {getOfferStatus} from "./helper";
import {PALETTE, styleOS} from "src/styles";
import {useLang, useMoment, useTheme} from "src/hooks";
import {Row, IconBox, Touchable, Typography} from "src/components/@system";
import {useOfferAction} from "src/components/@offers/hooks/useOfferAction";

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  const {t} = useLang();
  const {offer} = useSent();
  const {moment} = useMoment();
  const {colors} = useTheme();
  const {description, createdAt, status} = offer;
  const {Icon, statusLabel} = getOfferStatus(status);
  const {askDeletion} = useOfferAction(offer);

  return (
    <Touchable disabled={status !== "waiting"} onPress={() => askDeletion()}>
      <Row justifyContent="space-between" style={STYLES["head"]}>
        <Row gap={10} style={{flexShrink: 1, width: WIDTH_SCREEN / 1.8}}>
          <IconBox
            backgroundColor={PALETTE["PRIMARY"]}
            icon={<Send size={12} color={PALETTE["WHITE"]} />}
          />
          <Typography fontWeight={styleOS("400")} fontSize={11}>
            {t("offer_sent")} {moment(createdAt).fromNow()}
          </Typography>
        </Row>
      </Row>
      <Typography marginBottom={10} numberOfLines={1}>
        {description}
      </Typography>
      <Row>
        <Icon color={colors["WHITE_BLACK"]} size={15} />
        <Typography fontWeight={styleOS("400")} fontSize={12}>
          {t(statusLabel)}
        </Typography>
      </Row>
    </Touchable>
  );
};
