import {Formik} from "formik";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {Fragment, useState} from "react";
import {Check, ChevronLeft, Sms} from "src/svg";
import {ViewNavigationProps} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {VERIFY_SMS_CODE_LOADER} from "src/redux/slices";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {resendOTPSMS, verifySMScode} from "src/redux/thunks";
import {initialValues, verifyCodeSchema} from "./form.schema";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  Row,
  Input,
  Column,
  TopBar,
  Button,
  Snackbar,
  Touchable,
  Typography,
} from "src/components/@system";

interface VerifyCodeProps extends ViewNavigationProps<"VerifyCode"> {}

export const VerifyCode: React.FC<VerifyCodeProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {phoneNumber, onVerificationSucceed} = route["params"];
  const [cooldown, setCooldown] = useState<boolean>(false);

  return (
    <NavigatorView viewName="VerifyCode">
      <Formik
        initialValues={initialValues}
        validationSchema={verifyCodeSchema}
        onSubmit={({code}) =>
          dispatch(
            verifySMScode({
              code,
              onVerificationSucceed,
              phone_number: phoneNumber,
            })
          )
        }
      >
        {({handleSubmit, handleChange, dirty, isValid}) => (
          <Fragment>
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
                  {t("enter_the_verification_code")}
                </Typography>
              </Column>
              <Column alignItems="center">
                <Input
                  autoFocus
                  maxLength={5}
                  placeholder="* * * * *"
                  style={STYLES["input"]}
                  keyboardType="number-pad"
                  containerStyle={{width: "auto"}}
                  onChangeText={handleChange("code")}
                />
                <Column alignItems="center">
                  {cooldown ? (
                    <Row>
                      <CircularProgress
                        value={0}
                        radius={12}
                        maxValue={10}
                        duration={30000}
                        initialValue={10}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                        showProgressValue={false}
                        activeStrokeColor={PALETTE["PRIMARY"]}
                        onAnimationComplete={() => setCooldown(false)}
                      />
                      <Typography style={STYLES["try_again"]}>
                        {t("try_again")}
                      </Typography>
                    </Row>
                  ) : (
                    <Fragment>
                      <Typography>
                        {t("message_sent_to")} {phoneNumber}
                      </Typography>
                      <Touchable
                        onPress={() => {
                          dispatch(resendOTPSMS(phoneNumber));
                          setCooldown(true);
                        }}
                      >
                        <Typography
                          style={{
                            color: PALETTE["PRIMARY"],
                          }}
                        >
                          {t("didnt_get_the_message_send_again")}
                        </Typography>
                      </Touchable>
                    </Fragment>
                  )}
                </Column>
              </Column>
            </View>
            <Column gap={20} alignItems="center">
              <Snackbar
                width="90%"
                message={`${t("to_continue_enter_this_code")}: 99911`}
              />
              <Button
                label={t("confirm")}
                style={{width: "85%"}}
                labelColor={PALETTE["WHITE"]}
                loaderColor={PALETTE["WHITE"]}
                disabled={!(dirty && isValid)}
                onPress={() => handleSubmit()}
                loaderId={VERIFY_SMS_CODE_LOADER}
                icon={<Check color={PALETTE["WHITE"]} />}
              />
            </Column>
          </Fragment>
        )}
      </Formik>
    </NavigatorView>
  );
};
