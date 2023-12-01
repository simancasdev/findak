import {STYLES} from "./styles";
import {compareIds} from "src/utils";
import {PALETTE, styleOS} from "src/styles";
import {useAppSelector, useLang} from "src/hooks";
import {UserModel, ViewParam} from "src/interfaces";
import {ChevronRight, MessageCircle} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {Row, Touchable, Typography} from "src/components/@system";
import {selectAuthState, selectTradeState} from "src/redux/slices";

interface ChatShortcutProps {}

export const ChatShortcut: React.FC<ChatShortcutProps> = () => {
  const {t} = useLang();
  const {authUserId} = useAppSelector(selectAuthState);
  const {trade} = useAppSelector(selectTradeState);
  const {seller, buyer, conversation_id} = trade;
  const {navigate} = useNavigation<ViewParam<"Chat">>();
  const partner: UserModel = compareIds([seller["id"], authUserId])
    ? buyer
    : seller;

  return (
    <Touchable
      style={STYLES["button"]}
      onPress={() =>
        navigate("Chat", {withUser: partner, conversation_id, type: "trade"})
      }
    >
      <Row justifyContent="space-between">
        <Row>
          <MessageCircle size={18} color={PALETTE["WHITE"]} />
          <Typography
            style={{color: PALETTE["WHITE"], fontWeight: styleOS("500")}}
          >
            {`${t("talk_to")} ${partner["first_name"]}`}
          </Typography>
        </Row>
        <ChevronRight color={PALETTE["WHITE"]} />
      </Row>
    </Touchable>
  );
};
