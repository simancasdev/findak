import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {HandsCelebrate} from "src/svg";
import {ViewParam} from "src/interfaces";
import {useAppSelector, useLang} from "src/hooks";
import {selectTradeState} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Column, Row, Typography} from "src/components/@system";

interface UsersProps {}

export const Users: React.FC<UsersProps> = () => {
  const {t} = useLang();
  const {trade} = useAppSelector(selectTradeState);
  const {seller, buyer} = trade;
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();

  return (
    <Row justifyContent="center" style={STYLES["users"]}>
      <Column gap={5} alignItems="center">
        <Avatar
          size={60}
          src={buyer["avatar_url"]}
          name={buyer["first_name"]}
          onPress={() => navigate("UserProfile", {userId: buyer["id"]})}
        />
        <Column gap={0} alignItems="center">
          <Typography fontWeight={styleOS("600")}>
            {buyer["first_name"]}
          </Typography>
          <Typography fontSize={12}>{t("buyer")}</Typography>
        </Column>
      </Column>
      <HandsCelebrate size={45} />
      <Column gap={5} alignItems="center">
        <Avatar
          size={60}
          src={seller["avatar_url"]}
          name={seller["first_name"]}
          onPress={() => navigate("UserProfile", {userId: seller["id"]})}
        />
        <Column gap={0} alignItems="center">
          <Typography fontWeight={styleOS("600")}>
            {seller["first_name"]}
          </Typography>
          <Typography fontSize={12}>{t("seller")}</Typography>
        </Column>
      </Column>
    </Row>
  );
};
