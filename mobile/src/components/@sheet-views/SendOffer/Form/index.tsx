import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {useFormikContext} from "formik";
import {useLang, useTheme} from "src/hooks";
import {Asset} from "react-native-image-picker";
import {SendOfferPayload} from "src/interfaces";
import {
  Input,
  Budget,
  Divider,
  Section,
  Uploader,
} from "src/components/@system";

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {handleBlur, handleChange, errors, values} =
    useFormikContext<SendOfferPayload>();

  return (
    <View style={STYLES["form_offer"]}>
      <Uploader
        defaultValue={values["references_url"] as Asset[]}
        onAssetsChange={(assets) =>
          handleChange({target: {name: "references_url", value: assets}})
        }
      />
      <Input
        autoFocus
        multiline
        returnKeyType="done"
        placeholder={t("new_offer_placeholder")}
        value={values["description"]}
        onBlur={handleBlur("description")}
        helperText={t(errors["description"] as TValue)}
        onChangeText={handleChange("description")}
        style={[
          STYLES["input"],
          {
            color: colors["WHITE_BLACK"],
          },
        ]}
      />
      <Divider marginTop={15} />
      <Section
        title={t("price")}
        marginVertical={0}
        gap={0}
        containerStyle={{
          padding: 0,
          paddingHorizontal: 5,
          backgroundColor: PALETTE["TRANSPARENT"],
        }}
      >
        <Budget
          onBlur={handleBlur("description")}
          onChangeText={handleChange("price")}
          helperText={t(errors["price"] as TValue)}
          value={!values["price"] ? "" : String(values["price"])}
        />
      </Section>
    </View>
  );
};
