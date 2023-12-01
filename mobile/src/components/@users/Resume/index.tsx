import {Level} from "..";
import {memo} from "react";
import {STYLES} from "./styles";
import {PALETTE, styleOS} from "src/styles";
import {Send, Tag as TagIcon} from "src/svg";
import {Stars} from "src/components/@feedback";
import {PremiumInsight} from "src/components/@premium";
import {StyleProp, View, ViewStyle} from "react-native";
import {StarValue, Style, UserModel} from "src/interfaces";
import {compareIds, getDefaultStarValue, isPremium} from "src/utils";
import {Tag, Column, Avatar, Button, Typography} from "../../@system";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  openMultimedia,
  selectAuthState,
  createConversation,
  SEND_REGULAR_MESSAGE_LOADER,
} from "src/redux/slices";

interface ResumeProps extends Style {
  user: UserModel;
  enableMessengerButton?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

export const Resume: React.FC<ResumeProps> = memo(
  ({user, style, enableMessengerButton = true, contentStyle}) => {
    const {t} = useLang();
    const {colors} = useTheme();
    const dispatch = useAppDispatch();
    const {authUserId} = useAppSelector(selectAuthState);
    const {
      id,
      level,
      location,
      last_name,
      biography,
      feedbacks,
      first_name,
      avatar_url,
      preferences,
      subscription,
    } = user;
    const {city, country} = location;

    return (
      <View
        style={[
          style,
          STYLES["user_resume"],
          {backgroundColor: colors["MAIN_THEME"]},
        ]}
      >
        <View style={[STYLES["user_content"], contentStyle]}>
          <Avatar
            size={150}
            src={avatar_url}
            name={first_name}
            style={[STYLES["user_avatar"], {borderColor: colors["MAIN_THEME"]}]}
            onPress={() =>
              dispatch(
                openMultimedia({
                  initialSource: avatar_url,
                  sources: [avatar_url],
                })
              )
            }
          />
          <PremiumInsight isPremium={isPremium(subscription)} size={25}>
            <Typography fontSize={20} fontWeight={styleOS("600")}>
              {first_name} {last_name}
            </Typography>
          </PremiumInsight>
          <Typography
            style={{
              fontSize: 16,
              color: PALETTE["GREY"],
              fontWeight: styleOS("500"),
            }}
          >
            {country["name"]} — {city["name"]}
          </Typography>
          <Stars
            gap={2}
            starSize={15}
            style={{marginTop: 4}}
            defaultValue={getDefaultStarValue(feedbacks) as StarValue}
          />
          <Typography fontSize={15} marginTop={5} marginBottom={12}>
            {!biography.length ? t("hey_there_i_am_using_findak") : biography}
          </Typography>
          <Column marginBottom={15}>
            <Typography fontWeight={styleOS("300")} fontSize={12}>
              {t("i_dedicate_work_with")}
            </Typography>
            <Tag
              maxLabelLength={35}
              icon={<TagIcon color={PALETTE["WHITE"]} />}
              label={t(preferences["search_alert"]["name"])}
            />
          </Column>
          <Column
            alignItems="flex-end"
            style={{position: "absolute", top: 90, right: 0}}
          >
            <Level level={level} />
          </Column>
          {compareIds([authUserId, id], "unequal") && enableMessengerButton && (
            <Button
              label={t("send_message")}
              labelColor={PALETTE["WHITE"]}
              loaderColor={PALETTE["WHITE"]}
              style={STYLES["send_message"]}
              loaderId={SEND_REGULAR_MESSAGE_LOADER}
              icon={<Send color={PALETTE["WHITE"]} />}
              onPress={() => dispatch(createConversation({receiver_id: id}))}
            />
          )}
        </View>
      </View>
    );
  }
);
