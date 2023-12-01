import {Formik} from "formik";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {NavigatorView} from "src/hoc";
import {ViewParam} from "src/interfaces";
import {login, LOGIN_LOADER} from "src/redux/slices";
import {useNavigation} from "@react-navigation/native";
import {initialValues, loginSchema} from "./form.schema";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {ChevronLeft, ChevronRight, FindakIsotype} from "src/svg";
import {
  Row,
  Input,
  Button,
  Column,
  Screen,
  TopBar,
  Touchable,
  Typography,
} from "src/components/@system";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack, navigate} = useNavigation<ViewParam<"ForgotPassword">>();
  const dispatch = useAppDispatch();

  return (
    <NavigatorView viewName="Login">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => dispatch(login(values))}
      >
        {({handleSubmit, handleChange, handleBlur, dirty, isValid, errors}) => (
          <Screen style={{paddingHorizontal: 15}}>
            <TopBar
              back={{
                onPress: goBack,
                label: t("log_in"),
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
                helperText={t(errors["email"] as TValue)}
                onChangeText={handleChange("email")}
              />
              <Input
                secureTextEntry
                placeholder={t("password")}
                onBlur={handleBlur("password")}
                helperText={t(errors["password"] as TValue)}
                onChangeText={handleChange("password")}
              />
            </Column>
            <Button
              label={t("log_in")}
              loaderId={LOGIN_LOADER}
              labelColor={PALETTE["WHITE"]}
              loaderColor={PALETTE["WHITE"]}
              disabled={!(dirty && isValid)}
              onPress={() => handleSubmit()}
            />

            <Touchable
              onPress={() => navigate("ForgotPassword")}
              style={STYLES["forgot_password"]}
            >
              <Row justifyContent="center">
                <Typography style={STYLES["forgot_password_label"]}>
                  {t("i_forgot_my_password")}
                </Typography>
                <ChevronRight size={20} color={PALETTE["PRIMARY"]} />
              </Row>
            </Touchable>
          </Screen>
        )}
      </Formik>
    </NavigatorView>
  );
};
