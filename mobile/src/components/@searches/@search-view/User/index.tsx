import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {getDefaultStarValue} from "src/utils";
import {Stars} from "src/components/@feedback";
import {useAppSelector, useTheme} from "src/hooks";
import {selectSearchState} from "src/redux/slices";
import {StarValue, ViewParam} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Column, Row, Typography} from "src/components/@system";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();
  const {user} = useAppSelector(selectSearchState)["search"];
  const {avatar_url, first_name, last_name, feedbacks, id, city, country} =
    user;

  return (
    <Row gap={15} style={STYLES["user"]}>
      <Avatar
        size={40}
        src={avatar_url}
        name={first_name}
        onPress={() => navigate("UserProfile", {userId: id})}
      />
      <Column gap={0}>
        <Stars
          gap={2}
          starSize={14}
          defaultValue={getDefaultStarValue(feedbacks) as StarValue}
        />
        <Typography fontSize={14} fontWeight={styleOS("500")}>
          {first_name} {last_name}
        </Typography>
        <Typography fontSize={12}>
          {country["name"]}, {city["name"]}
        </Typography>
      </Column>
    </Row>
  );
};
