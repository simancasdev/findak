import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {ChevronLeft, Link} from "src/svg";
import {FINDAK_VARIABLES} from "src/constants";
import {useLang, useShare, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {
  TopBar,
  Column,
  IconBox,
  Touchable,
  Typography,
} from "src/components/@system";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const {t} = useLang();
  const {share} = useShare();
  const {colors} = useTheme();
  const {goBack} = useNavigation();

  return (
    <View style={STYLES["header"]}>
      <TopBar
        style={STYLES["top_bar"]}
        back={{
          onPress: goBack,
          label: t("meet_people"),
          helperText: t("and_make_deals_with_them"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
        }}
      />
      <Touchable
        style={STYLES["share"]}
        onPress={() => {
          share(
            `${t("findak_share_message")}: ${FINDAK_VARIABLES["DOWNLOAD_URL"]}`
          );
        }}
      >
        <Column alignItems="center">
          <IconBox
            size={30}
            icon={<Link size={20} color={PALETTE["WHITE"]} />}
          />
          <Typography style={STYLES["share_label"]}>
            {t("invite_friend")}
          </Typography>
        </Column>
      </Touchable>
    </View>
  );
};
