import {ChevronLeft} from "src/svg";
import {TValue} from "src/languages";
import {Keyboard} from "react-native";
import {useFormikContext} from "formik";
import {EditProfilePayload} from "src/interfaces";
import {UpdateAvatar} from "src/components/@users";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";
import {Input, Column, TopBar} from "src/components/@system";
import {UPDATE_USER_LOADER, selectAuthState} from "src/redux/slices";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const {user} = useAppSelector(selectAuthState);
  const {first_name, last_name, biography, avatar_url, slogan} = user;
  const {handleBlur, handleSubmit, isValid, handleChange, errors} =
    useFormikContext<EditProfilePayload>();

  return (
    <KeyboardAwareScrollView>
      <TopBar
        back={{
          onPress: () => goBack(),
          label: t("edit_profile"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
        }}
        action={{
          label: t("update"),
          disabled: !isValid,
          onPress: handleSubmit,
          loaderId: UPDATE_USER_LOADER,
        }}
      />
      <UpdateAvatar
        defaultUrl={avatar_url}
        onPress={() => Keyboard.dismiss()}
        onAvatarChange={(asset) =>
          handleChange({target: {name: "avatar_url", value: asset}})
        }
      />
      <Column gap={8} style={{padding: 10, marginVertical: 35}}>
        <Input
          editable={false}
          defaultValue={first_name}
          selectTextOnFocus={false}
          headText={t("first_name")}
          placeholder={t("first_name")}
        />
        <Input
          editable={false}
          defaultValue={last_name}
          selectTextOnFocus={false}
          headText={t("last_name")}
          placeholder={t("last_name")}
        />
        <Input
          multiline
          maxLength={150}
          defaultValue={biography}
          headText={t("biography")}
          placeholder={t("biography")}
          onBlur={handleBlur("biography")}
          onChangeText={handleChange("biography")}
          helperText={
            t(errors["biography"] as TValue) ??
            t("tell_a_little_about_yourself")
          }
        />
        <Input
          multiline
          maxLength={60}
          defaultValue={slogan}
          headText={t("slogan")}
          placeholder={t("slogan_example")}
          onBlur={handleBlur("slogan")}
          onChangeText={handleChange("slogan")}
          helperText={
            t(errors["slogan"] as TValue) ?? t("tell_a_little_about_yourself")
          }
        />
      </Column>
    </KeyboardAwareScrollView>
  );
};
