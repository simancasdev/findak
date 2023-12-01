import {PALETTE} from "src/styles";
import {containerStyle} from "../styles";
import {ViewParam} from "src/interfaces";
import {selectAuthState} from "src/redux/slices";
import {Bell, ChevronRight, Map, Edit} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";
import {Column, Section, RowButton} from "src/components/@system";

interface PreferencesProps {}

type NavigateView = ViewParam<"EditProfile" | "MyLocation" | "MySearchAlert">;

export const Preferences: React.FC<PreferencesProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {user} = useAppSelector(selectAuthState);
  const {navigate} = useNavigation<NavigateView>();

  return (
    <Section title={t("my_preferences")} containerStyle={containerStyle}>
      <Column>
        <RowButton
          label={t("edit_profile")}
          iconBoxColor={PALETTE["PRIMARY"]}
          onPress={() => navigate("EditProfile")}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          icon={<Edit size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
        />
        <RowButton
          helperText={t("your_location")}
          iconBoxColor={PALETTE["TERTIARY"]}
          onPress={() => navigate("MyLocation")}
          icon={<Map size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          label={`${user["location"]["country"]["name"]} — ${user["location"]["city"]["name"]}`}
        />
        <RowButton
          helperTextStyle={{fontSize: 11}}
          iconBoxColor={PALETTE["QUATERNARY"]}
          onPress={() => navigate("MySearchAlert")}
          helperText={t("notify_me_when_people_search_for")}
          label={t(user["preferences"]["search_alert"]["name"])}
          icon={<Bell size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
        />
      </Column>
    </Section>
  );
};
