import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {HandsCelebrate} from "src/svg";
import {ViewParam} from "src/interfaces";
import {useAppSelector} from "src/hooks";
import {selectOfferState} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Column, Row, Typography} from "src/components/@system";
import {Image} from "react-native";

interface UsersProps {}

export const Users: React.FC<UsersProps> = () => {
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();
  const {sender, receiver} = useAppSelector(selectOfferState)["offer"];

  return (
    <Row justifyContent="center" style={STYLES["users"]} gap={18}>
      <Column gap={5} alignItems="center">
        <Avatar
          size={60}
          src={sender["avatar_url"]}
          name={sender["first_name"]}
          onPress={() => navigate("UserProfile", {userId: sender["id"]})}
        />
        <Column gap={0} alignItems="center">
          <Typography fontWeight={styleOS("600")}>
            {sender["first_name"]}
          </Typography>
        </Column>
      </Column>
      <Image
        style={{width: 35, resizeMode: "contain"}}
        source={require("src/images/png/send.png")}
      />
      <Column gap={5} alignItems="center">
        <Avatar
          size={60}
          src={receiver["avatar_url"]}
          name={receiver["first_name"]}
          onPress={() => navigate("UserProfile", {userId: receiver["id"]})}
        />
        <Column gap={0} alignItems="center">
          <Typography fontWeight={styleOS("600")}>
            {receiver["first_name"]}
          </Typography>
        </Column>
      </Column>
    </Row>
  );
};
