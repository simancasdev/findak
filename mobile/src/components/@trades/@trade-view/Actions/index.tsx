import {Fragment} from "react";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {compareIds} from "src/utils";
import {CheckCircle, X} from "src/svg";
import {Button, Column, Section} from "src/components/@system";
import {CancelTransaction, FinishTrade} from "src/components/@dialog-views";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  openDialog,
  declineTrade,
  approveTrade,
  selectAuthState,
  selectTradeState,
  APPROVE_TRADE_LOADER,
  DECLINE_TRADE_LOADER,
} from "src/redux/slices";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {trade} = useAppSelector(selectTradeState);
  const {authUserId} = useAppSelector(selectAuthState);
  const {status, approved_by_buyer_at, approved_by_seller_at, seller, buyer} =
    trade;

  if (compareIds([authUserId, seller["id"]]) && approved_by_seller_at) {
    return <Fragment />;
  }
  if (compareIds([authUserId, buyer["id"]]) && approved_by_buyer_at) {
    return <Fragment />;
  }

  return status === "in_progress" ? (
    <Section
      gap={0}
      title={t("actions")}
      containerStyle={{
        backgroundColor: PALETTE["TRANSPARENT"],
        paddingHorizontal: 0,
      }}
    >
      <Column style={STYLES["actions"]}>
        <Button
          label={t("completed_transaction")}
          icon={<CheckCircle color={colors["WHITE_BLACK"]} size={16} />}
          style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          onPress={() =>
            dispatch(
              openDialog({
                view: <FinishTrade trade={trade} />,
                actions: [
                  {
                    type: "primary",
                    loaderColor: PALETTE["WHITE"],
                    loaderId: APPROVE_TRADE_LOADER,
                    label: t("finish_transaction"),
                    onPress: () => dispatch(approveTrade(trade["id"])),
                  },
                  {
                    label: t("not_yet"),
                  },
                ],
              })
            )
          }
        />
        <Button
          labelColor={PALETTE["ERROR"]}
          label={t("cancel_transaction")}
          icon={<X color={PALETTE["ERROR"]} size={16} />}
          style={[STYLES["button"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          onPress={() =>
            dispatch(
              openDialog({
                view: <CancelTransaction />,
                actions: [
                  {
                    type: "primary",
                    label: t("yes_cancel"),
                    loaderColor: PALETTE["ERROR"],
                    loaderId: DECLINE_TRADE_LOADER,
                    labelStyle: {color: PALETTE["ERROR"]},
                    style: {backgroundColor: colors["HOVER_LIGHT"]},
                    onPress: () => dispatch(declineTrade(trade["id"])),
                  },
                  {
                    label: t("no"),
                  },
                ],
              })
            )
          }
        />
      </Column>
    </Section>
  ) : null;
};
