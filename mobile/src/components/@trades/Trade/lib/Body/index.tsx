import {Tag} from "src/svg";
import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {compareIds} from "src/utils";
import {useTrade} from "../../context";
import {selectAuthState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {Row, Column, Guideline, Typography} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {offer, buyer} = useTrade().trade;
  const {authUserId} = useAppSelector(selectAuthState);
  const authUserIsBuyer = compareIds([authUserId, buyer["id"]]);

  return (
    <Row justifyContent="space-between" style={STYLES["body"]}>
      <Column gap={10} style={STYLES["content"]}>
        <Typography numberOfLines={4}>{offer["description"]}</Typography>
        <Row gap={5}>
          <Guideline labelStyle={{fontWeight: styleOS("500")}}>
            {authUserIsBuyer ? t("total_to_pay") : t("sale_profit")} $
            {offer["price"]}
          </Guideline>
          <Typography>—</Typography>
          <Guideline
            labelStyle={{fontWeight: styleOS("500")}}
            icon={<Tag size={15} color={colors["WHITE_BLACK"]} />}
          >
            {authUserIsBuyer ? t("purchase") : t("sale")}
          </Guideline>
        </Row>
      </Column>
    </Row>
  );
};
