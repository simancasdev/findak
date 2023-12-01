import {STYLES} from "./styles";
import {Eye, Send} from "src/svg";
import {useSearch} from "../../context";
import {ViewParam} from "src/interfaces";
import {canISendOffer} from "src/redux/thunks";
import {Button, Row} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useLang, useTheme} from "src/hooks";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {search} = useSearch();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"Search">>();

  return (
    <Row gap={0} style={STYLES["actions"]} justifyContent="space-between">
      <Button
        label={t("see_details")}
        labelStyle={{fontSize: 13}}
        icon={<Eye size={14} color={colors["WHITE_BLACK"]} />}
        onPress={() => navigate("Search", {searchId: search["id"]})}
        style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
      />
      <Button
        label={t("send_offer")}
        labelStyle={{fontSize: 13}}
        labelColor={colors["WHITE_BLACK"]}
        loaderId={`loader-${search["id"]}`}
        icon={<Send size={14} color={colors["WHITE_BLACK"]} />}
        style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
        onPress={() => {
          dispatch(canISendOffer({loaderId: `loader-${search["id"]}`, search}));
        }}
      />
    </Row>
  );
};
