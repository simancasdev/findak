import {STYLES} from "./styles";
import {View} from "react-native";
import {useSent} from "../../context";
import {ViewParam} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {
  Row,
  Avatar,
  Divider,
  Guideline,
  Touchable,
  Typography,
} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {offer} = useSent();
  const {colors} = useTheme();
  const {search} = offer;
  const {user, description: searchDescription} = search;
  const {navigate} = useNavigation<ViewParam<"UserProfile" | "Search">>();

  return (
    <View style={STYLES["body"]}>
      <Divider marginBottom={5} />
      <Touchable
        style={STYLES["search_of"]}
        onPress={() => {
          navigate("Search", {searchId: search["id"]});
        }}
      >
        <Guideline>
          {t("to_the_search_of")} {user["first_name"]}
        </Guideline>
        <Row marginVertical={5}>
          <Avatar
            size={30}
            src={user["avatar_url"]}
            name={user["first_name"]}
            onPress={() => navigate("UserProfile", {userId: user["id"]})}
          />
          <Typography
            numberOfLines={1}
            style={{fontSize: 12, color: colors["WHITE_BLACK"]}}
          >
            {searchDescription}
          </Typography>
        </Row>
      </Touchable>
    </View>
  );
};
