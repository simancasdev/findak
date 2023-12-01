import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {ViewParam} from "src/interfaces";
import {useReceived} from "../../context";
import {iconStatus, iconStatusColor} from "./helper";
import {Avatar, Column} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  const {offer} = useReceived();
  const {sender, status} = offer;
  const Icon = iconStatus[status];
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();

  return (
    <Column style={STYLES["sender_status"]}>
      <Avatar
        size={35}
        src={sender["avatar_url"]}
        name={sender["first_name"]}
        onPress={() => navigate("UserProfile", {userId: sender["id"]})}
      />
      <View
        style={[STYLES["status"], {backgroundColor: iconStatusColor[status]}]}
      >
        <Icon size={15} color={PALETTE["WHITE"]} />
      </View>
    </Column>
  );
};
