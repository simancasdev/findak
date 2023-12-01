import {Send} from "src/svg";
import {useSearchAlert} from "../../context";
import {canISendOffer} from "src/redux/thunks";
import {Button, Column} from "src/components/@system";
import {useAppDispatch, useLang, useTheme} from "src/hooks";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {search} = useSearchAlert();

  return (
    <Column style={{width: "100%"}}>
      <Button
        label={t("send_offer")}
        loaderId={`loader-${search["id"]}`}
        icon={<Send color={colors["WHITE_BLACK"]} />}
        style={{backgroundColor: colors["HOVER_LIGHT"]}}
        onPress={() =>
          dispatch(canISendOffer({loaderId: `loader-${search["id"]}`, search}))
        }
      />
    </Column>
  );
};
