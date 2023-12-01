import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {Mail, Users} from "src/svg";
import {ViewParam} from "src/interfaces";
import {Column, Button} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";

interface AuthActionsProps {}

export const AuthActions: React.FC<AuthActionsProps> = () => {
  const {t} = useLang();
  const {navigate} = useNavigation<ViewParam<"SignUp" | "Login">>();

  return (
    <Column gap={15} style={STYLES["container"]}>
      <Button
        label={t("sign_up")}
        justifyContent="flex-start"
        labelColor={PALETTE["WHITE"]}
        onPress={() => navigate("SignUp")}
        icon={<Users color={PALETTE["WHITE"]} />}
        style={[
          STYLES["default_button"],
          {backgroundColor: PALETTE["SECONDARY"]},
        ]}
      />
      <Button
        label={t("log_in")}
        justifyContent="flex-start"
        labelColor={PALETTE["BLACK"]}
        onPress={() => navigate("Login")}
        icon={<Mail color={PALETTE["BLACK"]} />}
        style={[STYLES["default_button"], {backgroundColor: PALETTE["WHITE"]}]}
      />
    </Column>
  );
};
