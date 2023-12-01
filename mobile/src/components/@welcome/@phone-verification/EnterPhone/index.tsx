import {STYLES} from "./styles";
import {useEffect, useState} from "react";
import {CountryPhone, codes} from "./helper";
import {Image, Keyboard} from "react-native";
import {useAppDispatch, useLang} from "src/hooks";
import {closeSheet, openSheet} from "src/redux/slices";
import {
  Row,
  List,
  Input,
  Column,
  Touchable,
  Typography,
} from "src/components/@system";

type OnChange = {
  phoneNumber: string;
  isValid: boolean;
};

interface EnterPhoneProps {
  onChange: ({phoneNumber, isValid}: OnChange) => void;
}

export const EnterPhone: React.FC<EnterPhoneProps> = ({onChange}) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [{prefix, flag, mask, id}, setCode] = useState<CountryPhone>(codes[0]);

  useEffect(() => {
    onChange({
      phoneNumber: `${prefix}${phoneNumber}`,
      isValid: !(phoneNumber.length >= 10),
    });
  }, [phoneNumber]);

  return (
    <Row gap={15} style={STYLES["enter_phone"]} justifyContent="center">
      <Touchable
        onPress={() => {
          Keyboard.dismiss();
          dispatch(
            openSheet({
              snapPoints: ["30%", "40%"],
              view: (
                <List
                  defaultValue={id}
                  UIProps={{title: t("select_your_country")}}
                  data={codes.map(({id, label}) => ({name: label, id}))}
                  onSelect={(id) => {
                    setCode(codes.find((code) => code.id === id)!);
                    dispatch(closeSheet());
                  }}
                />
              ),
            })
          );
        }}
      >
        <Column style={{position: "relative", width: 90}}>
          <Row>
            <Image style={STYLES["flag"]} source={flag} />
            <Typography style={STYLES["prefix"]}>{prefix}</Typography>
          </Row>
          <Typography style={STYLES["change_country"]}>
            {t("change_country")}
          </Typography>
        </Column>
      </Touchable>
      <Input
        autoFocus
        maxLength={12}
        placeholder={mask}
        style={STYLES["input"]}
        keyboardType="number-pad"
        containerStyle={{width: "auto"}}
        onChangeText={(text) => setPhoneNumber(text)}
      />
    </Row>
  );
};
