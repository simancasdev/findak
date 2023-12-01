import {useCallback} from "react";
import {OfferModel} from "src/interfaces";
import {PALETTE, styleOS} from "src/styles";
import {Confirm} from "src/components/@dialog-views";
import {Options, Typography} from "src/components/@system";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {CheckCircle, ChevronDown, QuestionMark, Stop, X} from "src/svg";
import {
  openSheet,
  openDialog,
  closeSheet,
  acceptOffer,
  declineOffer,
  deleteMyOffer,
} from "src/redux/slices";

export const useOfferAction = (offer: OfferModel) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {id, sender} = offer;

  // open sheet to show deletion flow to user
  const askDeletion = useCallback(() => {
    dispatch(
      openSheet({
        snapPoints: ["1%", "25%"],
        view: (
          <Options
            UIProps={{
              title: t("your_offer_options"),
              icon: <ChevronDown color={colors["WHITE_BLACK"]} />,
              onPress: () => dispatch(closeSheet()),
            }}
            options={[
              {
                icon: <X color={colors["WHITE_BLACK"]} />,
                label: t("delete"),
                helperText: t("it_will_be_removed_from_your_client_tray"),
                onPress: () => {
                  dispatch(
                    openDialog({
                      view: (
                        <Typography
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            fontWeight: styleOS("500"),
                          }}
                        >
                          {t(
                            "are_you_sure_you_want_to_delete_this_offer_you_submitted"
                          )}
                        </Typography>
                      ),
                      actions: [
                        {
                          type: "primary",
                          label: t("yes_delete"),
                          labelStyle: {color: PALETTE["ERROR"]},
                          style: {backgroundColor: colors["HOVER_LIGHT"]},
                          onPress: () => dispatch(deleteMyOffer(id)),
                        },
                        {
                          label: t("no"),
                        },
                      ],
                    })
                  );
                },
              },
            ]}
          />
        ),
      })
    );
  }, []);

  // open sheet to show acceptation flow to user
  const askAccept = useCallback(() => {
    dispatch(
      openSheet({
        snapPoints: ["1%", "35%"],
        view: (
          <Options
            UIProps={{
              title: t("accept_this_offer"),
              icon: <ChevronDown color={colors["WHITE_BLACK"]} />,
              onPress: () => dispatch(closeSheet()),
            }}
            options={[
              {
                style: {marginBottom: 5},
                icon: <CheckCircle color={colors["WHITE_BLACK"]} />,
                label: t("accept"),
                helperText: t("you_will_start_a_transaction"),
                onPress: () => {
                  dispatch(
                    openDialog({
                      view: (
                        <Confirm
                          title={`${t(
                            "are_you_sure_you_want_to_accept_this_offer"
                          )} ${sender["first_name"]}?`}
                          icon={
                            <QuestionMark
                              size={60}
                              color={colors["WHITE_BLACK"]}
                            />
                          }
                        />
                      ),
                      actions: [
                        {
                          label: t("yes_start_transaction"),
                          type: "primary",
                          onPress: () => {
                            dispatch(acceptOffer(offer["id"]));
                          },
                        },
                        {
                          label: t("no"),
                        },
                      ],
                    })
                  );
                },
              },
              {
                icon: <Stop color={colors["WHITE_BLACK"]} />,
                label: t("decline"),
                helperText: t("it_will_be_removed_from_your_list"),
                onPress: () => {
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
                },
              },
            ]}
          />
        ),
      })
    );
  }, []);

  return {askAccept, askDeletion};
};
