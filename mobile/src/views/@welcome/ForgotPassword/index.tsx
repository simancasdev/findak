import {Formik} from "formik";
import {PALETTE} from "src/styles";
import {ChevronLeft} from "src/svg";
import {TValue} from "src/languages";
import {NavigatorView} from "src/hoc";
import {forgotPassword} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {FORGOT_PASSWORD_LOADER} from "src/redux/slices";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {forgotPasswordSchema, initialValues} from "./form.schema";
import {Button, Column, Input, Screen, TopBar} from "src/components/@system";

interface ForgotPasswordProps {}

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <NavigatorView viewName="ForgotPassword">
      <Screen style={{paddingHorizontal: 15}}>
        <TopBar
          back={{
            label: t("recover_password"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            onPress: goBack,
          }}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordSchema}
          onSubmit={(values) => dispatch(forgotPassword(values))}
        >
          {({
            dirty,
            errors,
            isValid,
            handleBlur,
            handleSubmit,
            handleChange,
          }) => (
            <Column gap={15} alignItems="center" marginVertical={20}>
              <Input
                autoFocus
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={t("email")}
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                helperText={t(errors["email"] as TValue)}
                onChangeText={handleChange("email")}
              />

              <Button
                label={t("find_me")}
                labelColor={PALETTE["WHITE"]}
                loaderColor={PALETTE["WHITE"]}
                disabled={!(dirty && isValid)}
                onPress={() => handleSubmit()}
                loaderId={FORGOT_PASSWORD_LOADER}
              />
            </Column>
          )}
        </Formik>
      </Screen>
    </NavigatorView>
  );
};
