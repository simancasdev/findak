import {Fragment} from "react";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {getHistoryMessages} from "./helper";
import {Calendar, CheckCircle, Trades, X} from "src/svg";
import {selectAuthState, selectTradeState} from "src/redux/slices";
import {useAppSelector, useLang, useMoment, useTheme} from "src/hooks";
import {Row, IconBox, Section, Typography} from "src/components/@system";

interface HistoryProps {}

export const History: React.FC<HistoryProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {moment, dateFormat} = useMoment();
  const {authUserId} = useAppSelector(selectAuthState);
  const {trade} = useAppSelector(selectTradeState);
  const {
    buyer,
    createdAt,
    rejected_by,
    approved_by_buyer_at,
    approved_by_seller_at,
  } = trade;

  const {sellerBoughtMessage, buyerBoughtMessage, rejectedByUserMessage} =
    getHistoryMessages(trade, authUserId);

  return (
    <Section
      title={t("record")}
      marginVertical={0}
      containerStyle={{paddingVertical: 4}}
    >
      <Fragment>
        <Row style={STYLES["li"]} gap={10}>
          <IconBox
            backgroundColor={PALETTE["SECONDARY"]}
            icon={<Calendar size={16} color={PALETTE["WHITE"]} />}
          />
          <Typography style={STYLES["notification"]}>
            {t("deal_started_on")} {moment(createdAt).format(dateFormat)} —{" "}
            {t("by_the_buyer")} {buyer["first_name"]}
          </Typography>
        </Row>
        {approved_by_seller_at && (
          <Row style={STYLES["li"]} gap={10}>
            <IconBox
              icon={<CheckCircle size={16} color={colors["WHITE_BLACK"]} />}
            />
            <Typography style={STYLES["notification"]}>
              {sellerBoughtMessage}
            </Typography>
          </Row>
        )}
        {approved_by_buyer_at && (
          <Row style={STYLES["li"]} gap={10}>
            <IconBox
              icon={<CheckCircle size={16} color={colors["WHITE_BLACK"]} />}
            />
            <Typography style={STYLES["notification"]}>
              {buyerBoughtMessage}
            </Typography>
          </Row>
        )}
        {approved_by_buyer_at && approved_by_seller_at && (
          <Row style={STYLES["li"]} gap={10}>
            <IconBox
              backgroundColor={PALETTE["PRIMARY"]}
              icon={<Trades size={16} color={PALETTE["WHITE"]} />}
            />
            <Typography style={STYLES["notification"]}>
              {t("deal_done")}
            </Typography>
          </Row>
        )}
        {rejected_by && (
          <Row style={STYLES["li"]} gap={10}>
            <IconBox
              backgroundColor={PALETTE["ERROR"]}
              icon={<X size={16} color={PALETTE["WHITE"]} />}
            />
            <Typography style={STYLES["notification"]}>
              {rejectedByUserMessage}
            </Typography>
          </Row>
        )}
      </Fragment>
    </Section>
  );
};
