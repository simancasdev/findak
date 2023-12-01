import {memo} from "react";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {ViewParam} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {PremiumInsight} from "src/components/@premium";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {selectAuthState, toggleDrawer} from "src/redux/slices";
import {Avatar, Column, Row, Touchable, Typography} from "../../@system";

interface UserNavProps {}

export const UserNav: React.FC<UserNavProps> = memo(() => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"Profile">>();
  const {avatar_url, first_name, last_name, location} = useAppSelector(selectAuthState)["user"];
  const {city, country} = location;

  return (
    <Touchable
      onPress={() => {
        navigate("Profile");
        dispatch(toggleDrawer(false));
      }}
    >
      <Row gap={10} style={[STYLES["user_nav"]]}>
        <Avatar
          size={45}
          src={avatar_url}
          name={first_name}
          style={{borderWidth: 1.5, borderColor: PALETTE["WHITE"]}}
        />
        <Column gap={0}>
          <PremiumInsight size={18}>
            <Typography style={STYLES["name"]}>
              {first_name} {last_name}
            </Typography>
          </PremiumInsight>
          <Row>
            <Typography style={STYLES["location_label"]}>
              {country["name"]} — {city["name"]}
            </Typography>
          </Row>
        </Column>
      </Row>
    </Touchable>
  );
});
