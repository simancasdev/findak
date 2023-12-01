import {STYLES} from "./styles";
import {useChat} from "../context";
import {ChevronLeft} from "src/svg";
import {WIDTH_SCREEN} from "src/utils";
import {ViewParam} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Container, TopBar} from "../../../@system";

interface ToolBarProps {}

export const ToolBar: React.FC<ToolBarProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {withUser, partnerType} = useChat();
  const {first_name, last_name, avatar_url, id} = withUser;
  const {goBack, navigate} = useNavigation<ViewParam<"UserProfile">>();

  return (
    <Container
      style={[
        STYLES["box"],
        {
          backgroundColor: colors["BACKGROUND_TAB_VIEWS"],
          borderBottomColor: colors["BORDER"],
        },
      ]}
    >
      <TopBar
        style={{width: WIDTH_SCREEN / 1.4}}
        back={{
          onPress: goBack,
          label: `${first_name} ${last_name}`,
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          helperText:
            typeof partnerType !== "undefined"
              ? t(partnerType === "buyer" ? "your_buyer" : "your_seller")
              : undefined,
        }}
      />
      <Avatar
        size={40}
        src={avatar_url}
        name={first_name}
        onPress={() =>
          navigate("UserProfile", {userId: id, enableMessengerButton: false})
        }
      />
    </Container>
  );
};
