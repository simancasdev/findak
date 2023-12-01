import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Image} from "react-native";
import {styleOS} from "src/styles";
import {Stars} from "src/components/@feedback";
import {StarValue, UserModel} from "src/interfaces";
import {PremiumInsight} from "src/components/@premium";
import {getDefaultStarValue, isPremium, searchTypeIcon} from "src/utils";
import {
  Row,
  Avatar,
  Column,
  Touchable,
  Typography,
} from "src/components/@system";

interface PresentationProps {
  user: UserModel;
  onPress: (userId: string) => void;
}

export const Presentation: React.FC<PresentationProps> = ({user, onPress}) => {
  const {
    id,
    city,
    slogan,
    country,
    last_name,
    avatar_url,
    first_name,
    preferences,
    subscription,
    feedbacks = [],
  } = user;
  const {t} = useLang();
  const {type, name} = preferences["search_alert"];

  return (
    <Touchable style={{width: "100%"}} onPress={() => onPress(id)}>
      <Row
        gap={15}
        alignItems="flex-start"
        style={STYLES["user_presentation"]}
        fullWidth
      >
        <Avatar size={45} src={avatar_url} name={first_name} />
        <Column style={{flexShrink: 1}}>
          <Row>
            <PremiumInsight isPremium={isPremium(subscription)}>
              <Typography fontWeight={styleOS("500")}>
                {first_name} {last_name}
              </Typography>
            </PremiumInsight>
            <Stars
              gap={4}
              starSize={12}
              mountWithAnimation
              defaultValue={getDefaultStarValue(feedbacks) as StarValue}
            />
          </Row>

          <Typography fontSize={12}>
            {country["name"]} — {city["name"]}
          </Typography>
          {slogan && (
            <Typography fontSize={15} fontWeight={styleOS("500")}>
              {slogan}
            </Typography>
          )}
          <Row>
            <Image
              source={searchTypeIcon[type]}
              style={{width: 18, height: 18}}
            />
            <Typography fontSize={13}>{t(name)}</Typography>
          </Row>
        </Column>
      </Row>
    </Touchable>
  );
};
