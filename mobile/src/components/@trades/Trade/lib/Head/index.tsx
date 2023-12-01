import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {compareIds} from "src/utils";
import {useTrade} from "../../context";
import {UserModel} from "src/interfaces";
import {selectAuthState} from "src/redux/slices";
import {Avatar, Row, Typography} from "src/components/@system";
import {useAppSelector, useLang, useMoment, useTheme} from "src/hooks";

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  const {t} = useLang();
  const {moment} = useMoment();
  const {colors} = useTheme();
  const {buyer, seller, createdAt} = useTrade().trade;
  const {authUserId} = useAppSelector(selectAuthState);
  const partner: UserModel = compareIds([authUserId, seller["id"]])
    ? buyer
    : seller;

  return (
    <Row fullWidth style={STYLES["head"]}>
      <Row>
        <Avatar
          size={20}
          src={partner["avatar_url"]}
          name={partner["first_name"]}
        />
        <Typography fontSize={11} fontWeight={styleOS("600")}>
          {t("trade_with")} {partner["first_name"]}
        </Typography>
      </Row>
      <Typography fontSize={11}>— {moment(createdAt).fromNow()}</Typography>
    </Row>
  );
};
