import {STYLES} from "./styles";
import {Tag as TagIcon} from "src/svg";
import {UserModel} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {PALETTE, styleOS} from "src/styles";
import {Avatar, Column, Tag, Touchable, Typography} from "../../@system";

interface UserCardProps {
  user: UserModel;
  onPress: (userId: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({user, onPress}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {first_name, last_name, avatar_url, id, preferences, location} = user;

  return (
    <Touchable
      onPress={() => onPress(id)}
      style={[
        STYLES["user_card"],
        {
          borderColor: colors["BORDER"],
          backgroundColor: colors["BACKGROUND_VIEW"],
        },
      ]}
    >
      <Column alignItems="center" gap={5}>
        <Avatar src={avatar_url} name={first_name} />
        <Tag
          maxLabelLength={15}
          icon={<TagIcon color={PALETTE["WHITE"]} size={15} />}
          label={t(preferences["search_alert"]["name"])}
        />
        <Typography fontWeight={styleOS("500")} numberOfLines={1} fontSize={12}>
          {first_name} {last_name}
        </Typography>
        <Typography fontSize={12}>{location["city"]["name"]}</Typography>
      </Column>
    </Touchable>
  );
};
