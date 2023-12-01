import {Cancel} from "src/svg";
import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {Column, Row, Typography} from "../../@system";

interface CancelTransactionProps {}

export const CancelTransaction: React.FC<CancelTransactionProps> = () => {
  const {t} = useLang();
  return (
    <Column alignItems="center" gap={15}>
      <Row justifyContent="center" fullWidth>
        <Cancel size={80} color={PALETTE["ERROR"]} />
      </Row>
      <Typography style={STYLES["title"]}>
        {t("are_you_sure_you_cancel_this_ongoing_transaction")}
      </Typography>
    </Column>
  );
};
