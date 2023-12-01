import {Formik} from "formik";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {NavigatorView} from "src/hoc";
import {resetPassword} from "src/redux/slices";
import {useAppDispatch, useLang} from "src/hooks";
import {ViewNavigationProps} from "src/interfaces";
import {RESET_PASSWORD_LOADER} from "src/redux/slices";
import {initialValues, resetPasswordSchema} from "./form.schema";
import {Input, Button, Column, Screen, TopBar} from "src/components/@system";

interface ResetPasswordProps extends ViewNavigationProps<"ResetPassword"> {}

export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();

  return (
    <NavigatorView viewName="ResetPassword">
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={(values) =>
          dispatch(resetPassword({password: values["password"]}))
        }
      >
        {({handleSubmit, handleChange, handleBlur, dirty, isValid, errors}) => (
          <Screen style={{paddingHorizontal: 15}}>
            <TopBar back={{label: t("set_password")}} />
            <Column gap={15} alignItems="center" marginVertical={20}>
              <Input
                placeholder={t("password")}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                helperText={t(errors["password"] as TValue)}
              />
              <Input
                placeholder={t("repeat_password")}
                onBlur={handleBlur("repeat_password")}
                onChangeText={handleChange("repeat_password")}
                helperText={t(errors["repeat_password"] as TValue)}
              />
            </Column>
            <Button
              label={t("change_password")}
              labelColor={PALETTE["WHITE"]}
              loaderColor={PALETTE["WHITE"]}
              disabled={!(dirty && isValid)}
              onPress={() => handleSubmit()}
              loaderId={RESET_PASSWORD_LOADER}
            />
          </Screen>
        )}
      </Formik>
    </NavigatorView>
  );
};
