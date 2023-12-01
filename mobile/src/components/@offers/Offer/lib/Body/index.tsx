import {STYLES} from "./styles";
import {View} from "react-native";
import {Paperclip} from "src/svg";
import {styleOS} from "src/styles";
import {useOffer} from "../../context";
import {ViewParam} from "src/interfaces";
import {openMultimedia} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useLang, useTheme, useMoment} from "src/hooks";
import {
  Row,
  Avatar,
  Column,
  Touchable,
  Typography,
} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {moment} = useMoment();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {offer, variant} = useOffer();
  const {sender, description, references_url, createdAt} = offer;
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();

  return (
    <Row alignItems="flex-start" style={STYLES["body"]}>
      <Avatar
        src={sender["avatar_url"]}
        name={sender["first_name"]}
        size={variant === "search_detail" ? 45 : 25}
        onPress={() => navigate("UserProfile", {userId: sender["id"]})}
      />
      <View style={STYLES["content"]}>
        <Row gap={5}>
          <Typography fontWeight={styleOS("500")}>
            {sender["first_name"]} {sender["last_name"]}
          </Typography>
          <Typography>—</Typography>
          <Typography fontSize={11} fontWeight={styleOS("400")}>
            {moment(createdAt).fromNow()}
          </Typography>
        </Row>
        <Typography fontSize={13} marginTop={8}>
          {description}
        </Typography>
        {!!references_url.length && (
          <Touchable
            style={STYLES["attached"]}
            onPress={() => {
              dispatch(
                openMultimedia({
                  sources: references_url,
                  UIProps: {
                    title: t("reference_images"),
                    helperText: `${t("offer_from")} ${
                      sender["first_name"]
                    } - ${t("cost")} $${offer["price"]}`,
                  },
                })
              );
            }}
          >
            <Paperclip color={colors["WHITE_BLACK"]} />
            <Typography
              style={[STYLES["attached_label"], {color: colors["WHITE_BLACK"]}]}
            >
              {references_url.length} {t("photos_attached")}
            </Typography>
          </Touchable>
        )}
      </View>
    </Row>
  );
};
