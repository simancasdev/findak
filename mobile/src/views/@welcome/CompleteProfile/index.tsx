import {Formik} from "formik";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {Keyboard} from "react-native";
import {NavigatorView} from "src/hoc";
import {useViewActions} from "./useViewActions";
import {UpdateAvatar} from "src/components/@users";
import {UPDATE_USER_LOADER} from "src/redux/slices";
import {completeProfileSchema, initialValues} from "./form.schema";
import {Button, Column, Input, Screen, TopBar} from "src/components/@system";

interface CompleteProfileProps {}

export const CompleteProfile: React.FC<CompleteProfileProps> = () => {
  const {t} = useLang();
  const {onUpdateUser} = useViewActions();

  return (
    <NavigatorView viewName="CompleteProfile">
      <Formik
        initialValues={initialValues}
        validationSchema={completeProfileSchema}
        onSubmit={(values) => onUpdateUser(values)}
      >
        {({handleSubmit, handleChange, handleBlur, dirty, isValid, errors}) => (
          <Screen style={{paddingHorizontal: 15}}>
            <TopBar
              style={{paddingVertical: 10}}
              back={{
                label: t("tell_us_about_yourself"),
              }}
            />
            <Column gap={15} marginVertical={20}>
              <UpdateAvatar
                onPress={() => Keyboard.dismiss()}
                onAvatarChange={(asset) =>
                  handleChange({target: {name: "avatar_url", value: asset}})
                }
              />
              <Input
                autoFocus
                autoCapitalize="words"
                placeholder={t("first_name")}
                onBlur={handleBlur("first_name")}
                onChangeText={handleChange("first_name")}
                helperText={
                  t(errors["first_name"] as TValue) ??
                  t("your_name_cannot_be_changed_again")
                }
              />
              <Input
                autoCapitalize="words"
                placeholder={t("last_name")}
                onBlur={handleBlur("last_name")}
                onChangeText={handleChange("last_name")}
                helperText={
                  t(errors["last_name"] as TValue) ??
                  t("your_last_name_cannot_be_changed_again")
                }
              />
              <Input
                multiline
                placeholder={t("biography")}
                onBlur={handleBlur("biography")}
                onChangeText={handleChange("biography")}
                helperText={t(errors["biography"] as TValue)}
              />
            </Column>
            <Button
              label={t("next")}
              loaderId={UPDATE_USER_LOADER}
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
