import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {compareIds} from "src/utils";
import {CheckCircle, Stop} from "src/svg";
import {Confirm} from "src/components/@dialog-views";
import {Button, Column, Section} from "src/components/@system";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  openDialog,
  acceptOffer,
  declineOffer,
  selectOfferState,
  selectAuthState,
  ACCEPT_OFFER_LOADER,
  DECLINE_OFFER_LOADER,
} from "src/redux/slices";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {offer} = useAppSelector(selectOfferState);
  const {status, id, sender, receiver} = offer;
  // prettier-ignore
  const showActions = compareIds([authUserId, receiver["id"]]) && status === "waiting";

  return showActions ? (
    <Section
      gap={0}
      title={t("actions")}
      helperText={`${t("what_do_you_want_to_do_with_this_offer")} ${
        sender["first_name"]
      }?`}
      containerStyle={{
        backgroundColor: PALETTE["TRANSPARENT"],
        paddingHorizontal: 0,
      }}
    >
      <Column style={STYLES["actions"]}>
        <Button
          label={t("accept")}
          icon={<CheckCircle color={colors["WHITE_BLACK"]} />}
          style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          onPress={() => {
            dispatch(
              openDialog({
                view: (
                  <Confirm
                    icon={require("src/images/png/question-mark.png")}
                    title={`${t(
                      "are_you_sure_you_want_to_accept_this_offer"
                    )} ${sender["first_name"]}?`}
                  />
                ),
                actions: [
                  {
                    type: "primary",
                    loaderColor: PALETTE["WHITE"],
                    loaderId: ACCEPT_OFFER_LOADER,
                    label: t("yes_start_transaction"),
                    onPress: () => {
                      dispatch(acceptOffer(id));
                    },
                  },
                  {
                    label: t("no"),
                  },
                ],
              })
            );
          }}
        />
        <Button
          label={t("decline")}
          labelColor={PALETTE["ERROR"]}
          icon={<Stop color={PALETTE["ERROR"]} />}
          style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          onPress={() => {
            dispatch(
              openDialog({
                view: (
                  <Confirm
                    title={t("decline_this_offer")}
                    icon={<Stop size={50} color={PALETTE["ERROR"]} />}
                  />
                ),
                actions: [
                  {
                    type: "primary",
                    label: t("yes_reject"),
                    loaderColor: PALETTE["ERROR"],
                    loaderId: DECLINE_OFFER_LOADER,
                    labelStyle: {color: PALETTE["ERROR"]},
                    style: {
                      backgroundColor: colors["HOVER_LIGHT"],
                    },
                    onPress: () => {
                      dispatch(declineOffer(id));
                    },
                  },
                  {
                    label: t("no"),
                  },
                ],
              })
            );
          }}
        />
      </Column>
    </Section>
  ) : null;
};
