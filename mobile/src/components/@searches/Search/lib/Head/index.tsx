import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {isPremium} from "src/utils";
import {useSearch} from "../../context";
import {ViewParam} from "src/interfaces";
import {useMoment, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Column, Row, Typography} from "src/components/@system";
import {PremiumInsight} from "src/components/@premium";

interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  const {colors} = useTheme();
  const {moment} = useMoment();
  const {search, avatarRedirection} = useSearch();
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();
  const {createdAt, user} = search;
  const {subscription} = user;

  return (
    <Row gap={10} style={STYLES["head"]}>
      <Avatar
        size={30}
        src={user["avatar_url"]}
        name={user["first_name"]}
        onPress={() => {
          if (!avatarRedirection) return;
          navigate("UserProfile", {userId: user["id"]});
        }}
      />
      <Column gap={0}>
        <PremiumInsight isPremium={isPremium(subscription)}>
          <Typography fontSize={14}>{user["first_name"]}</Typography>
        </PremiumInsight>
        <Typography
          fontSize={10}
          fontWeight={styleOS("400")}
          style={{color: colors["TEXT_TRANSPARENCY"]}}
        >
          {moment(createdAt).fromNow()}
        </Typography>
      </Column>
    </Row>
  );
};
