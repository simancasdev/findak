import {Info} from "src/svg";
import {Fragment} from "react";
import {STYLES} from "./styles";
import {useTrade} from "../../context";
import {selectAuthState} from "src/redux/slices";
import {WIDTH_SCREEN, compareIds} from "src/utils";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {IconBox, Row, Typography} from "src/components/@system";

interface RecordProps {}

export const Record: React.FC<RecordProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {authUserId} = useAppSelector(selectAuthState);
  const {buyer, seller, status, approved_by_buyer_at, approved_by_seller_at} =
    useTrade()["trade"];
  const authUserIsSeller = compareIds([authUserId, seller["id"]]);

  return status === "in_progress" ? (
    <Row gap={0} marginBottom={4} style={{width: WIDTH_SCREEN / 1.2}}>
      {authUserIsSeller && approved_by_seller_at && (
        <Fragment>
          <IconBox icon={<Info size={18} color={colors["WHITE_BLACK"]} />} />
          <Typography style={STYLES["record_label"]}>
            {t("you_have_approved_the_transaction_awaiting_the_approval_of")}{" "}
            {buyer["first_name"]}
          </Typography>
        </Fragment>
      )}
      {!authUserIsSeller && approved_by_buyer_at && (
        <Fragment>
          <IconBox icon={<Info size={18} color={colors["WHITE_BLACK"]} />} />
          <Typography style={STYLES["record_label"]}>
            {t("you_have_approved_the_transaction_awaiting_the_approval_of")}{" "}
            {seller["first_name"]}
          </Typography>
        </Fragment>
      )}
    </Row>
  ) : (
    <Fragment />
  );
};
