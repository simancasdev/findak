import {STYLES} from "./styles";
import {LogOut, X} from "src/svg";
import {PALETTE} from "src/styles";
import {containerStyle} from "../styles";
import {Confirm} from "src/components/@dialog-views";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {deleteAccount, logOut, openDialog} from "src/redux/slices";
import {
  Column,
  Section,
  RowButton,
  ToggleLanguage,
} from "src/components/@system";

interface AccountProps {}

export const Account: React.FC<AccountProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  return (
    <Section title={t("my_account")} containerStyle={containerStyle}>
      <Column>
        <RowButton
          label={t("log_out")}
          icon={<LogOut size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
          onPress={() => {
            dispatch(
              openDialog({
                view: (
                  <Confirm
                    title={t("are_you_sure_you_want_to_go_out")}
                    icon={require("src/images/png/question-mark.png")}
                  />
                ),
                actions: [
                  {
                    label: t("yes_log_out"),
                    type: "primary",
                    onPress: () => {
                      dispatch(logOut());
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
        <RowButton
          label={t("delete_account")}
          labelColor={PALETTE["ERROR"]}
          iconBoxColor={PALETTE["ERROR"]}
          icon={<X size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
          onPress={() => {
            dispatch(
              openDialog({
                view: (
                  <Confirm
                    icon={<X size={35} color={PALETTE["ERROR"]} />}
                    title={t("are_you_sure_you_want_to_delete_your_account")}
                  />
                ),
                actions: [
                  {
                    label: t("yes_delete"),
                    type: "primary",
                    labelStyle: {color: PALETTE["ERROR"]},
                    style: {backgroundColor: colors["HOVER_LIGHT"]},
                    onPress: () => {
                      dispatch(deleteAccount());
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
        <ToggleLanguage
          style={[
            STYLES["toggle_language"],
            {backgroundColor: colors["HOVER_LIGHT"]},
          ]}
        />
      </Column>
    </Section>
  );
};
