import {STYLES} from "./styles";
import {compareIds} from "src/utils";
import {HandsCelebrate} from "src/svg";
import {selectAuthState} from "src/redux/slices";
import {useAppSelector, useLang} from "src/hooks";
import {TradeModel, UserModel} from "src/interfaces";
import {Avatar, Column, Row, Typography} from "../../@system";

interface FinishTradeProps {
  trade: TradeModel;
}

export const FinishTrade: React.FC<FinishTradeProps> = ({trade}) => {
  const {t} = useLang();
  const {user, authUserId} = useAppSelector(selectAuthState);
  const {buyer, seller} = trade;
  // prettier-ignore
  const tradeWith: UserModel = compareIds([authUserId, buyer["id"]], "unequal") ? buyer : seller;

  return (
    <Column gap={15} style={[STYLES["finish_transaction"]]}>
      <Row justifyContent="center">
        <Avatar size={70} src={user["avatar_url"]} name={user["first_name"]} />
        <HandsCelebrate size={50} />
        <Avatar
          size={70}
          name={tradeWith["first_name"]}
          src={tradeWith["avatar_url"]}
        />
      </Row>
      <Typography style={STYLES["title"]}>
        {t("i_confirm_that_i_have_completed_my_transaction_successfully")}
      </Typography>
    </Column>
  );
};
