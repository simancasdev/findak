import {useState} from "react";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {OTPSMS} from "src/redux/thunks";
import {ChevronLeft, Sms} from "src/svg";
import {SEND_SMS_LOADER} from "src/redux/slices";
import {EnterPhone} from "src/components/@welcome";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {
  Button,
  Column,
  TopBar,
  Snackbar,
  Typography,
} from "src/components/@system";

interface PhoneVerificationProps {}

export const PhoneVerification: React.FC<PhoneVerificationProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <NavigatorView viewName="PhoneVerification">
      <TopBar
        style={{paddingHorizontal: 15}}
        back={{
          onPress: goBack,
          label: t("otp_verification"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
        }}
      />
      <View style={STYLES["header"]}>
        <Column gap={20} alignItems="center">
          <Sms size={55} color={PALETTE["PRIMARY"]} />
          <Typography style={STYLES["title"]}>
            {t("we_will_send_a_code_to_your_phone")}
          </Typography>
        </Column>
        <EnterPhone
          onChange={({phoneNumber, isValid}) => {
            setDisabled(isValid);
            setPhoneNumber(phoneNumber);
          }}
        />
      </View>
      <Column gap={20} alignItems="center">
        <Snackbar
          width="90%"
          message={`${t(
            "hey_thanks_for_helping_us_test_findak_use_this_number"
          )}: 4125242438 (VE)`}
        />
        <Button
          label={t("next")}
          disabled={disabled}
          style={{width: "80%"}}
          loaderId={SEND_SMS_LOADER}
          labelColor={PALETTE["WHITE"]}
          loaderColor={PALETTE["WHITE"]}
          onPress={() => dispatch(OTPSMS(phoneNumber))}
        />
      </Column>
    </NavigatorView>
  );
};
