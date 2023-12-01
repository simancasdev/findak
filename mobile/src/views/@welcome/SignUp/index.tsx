import {Formik} from "formik";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {NavigatorView} from "src/hoc";
import {ChevronLeft, FindakIsotype} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {signUp, SIGN_UP_LOADER} from "src/redux/slices";
import {initialValues, signUpSchema} from "./form.schema";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {Button, Column, Input, Screen, TopBar} from "src/components/@system";

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <NavigatorView viewName="SignUp">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => dispatch(signUp(values))}
      >
        {({handleSubmit, handleChange, handleBlur, dirty, isValid, errors}) => (
          <Screen style={{paddingHorizontal: 15}}>
            <TopBar
              back={{
                onPress: goBack,
                label: t("a_great_start"),
                icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
              }}
            />
            <Column gap={15} alignItems="center" marginVertical={20}>
              <FindakIsotype size={50} color={PALETTE["BLACK"]} />
              <Input
                autoFocus
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={t("email")}
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                helperText={t(errors["email"] as TValue)}
              />
              <Input
                secureTextEntry
                placeholder={t("password")}
                textContentType="oneTimeCode"
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                helperText={t(errors["password"] as TValue)}
              />
              <Input
                secureTextEntry
                textContentType="oneTimeCode"
                placeholder={t("confirm_password")}
                onBlur={handleBlur("confirm_password")}
                onChangeText={handleChange("confirm_password")}
                helperText={t(errors["confirm_password"] as TValue)}
              />
            </Column>
            <Button
              label={t("sign_up")}
              loaderId={SIGN_UP_LOADER}
              labelColor={PALETTE["WHITE"]}
              loaderColor={PALETTE["WHITE"]}
              disabled={!(dirty && isValid)}
              onPress={() => handleSubmit()}
            />
          </Screen>
        )}
      </Formik>
    </NavigatorView>
  );
};
