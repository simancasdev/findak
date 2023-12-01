import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {ViewParam} from "src/interfaces";
import {useSearchAlert} from "../../context";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Column, Typography} from "src/components/@system";

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  const {search} = useSearchAlert();
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();
  const {user} = search;

  return (
    <Column alignItems="center" style={STYLES["user"]}>
      <Avatar
        size={35}
        src={user["avatar_url"]}
        name={user["first_name"]}
        onPress={() => navigate("UserProfile", {userId: user["id"]})}
      />
      <Typography numberOfLines={1} fontSize={12} fontWeight={styleOS("500")}>
        {user["first_name"]}
      </Typography>
    </Column>
  );
};
