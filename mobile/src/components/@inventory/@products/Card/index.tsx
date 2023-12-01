import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Image, View} from "react-native";
import {ProductModel} from "src/interfaces";
import {Column, Row, Touchable, Typography} from "src/components/@system";

interface CardProps {
  onPress: () => void;
  product: ProductModel;
}

export const Card: React.FC<CardProps> = ({onPress, product}) => {
  const {t} = useLang();
  const {title, description, references_url, price, discount} = product;

  return (
    <Touchable onPress={onPress} style={STYLES["card"]}>
      <View style={STYLES["card_head"]}>
        <Image
          style={STYLES["card_imagen"]}
          source={{uri: references_url[0]}}
        />
        {discount > 0 && (
          <View style={STYLES["badge_off"]}>
            <Typography style={STYLES["off_label"]}>
              {discount}% {t("discount")}
            </Typography>
          </View>
        )}
      </View>
      <Column style={STYLES["card_body"]}>
        <Row fullWidth justifyContent="space-between">
          <Typography style={[STYLES["body_label"], {maxWidth: "60%"}]}>
            {title}
          </Typography>
          <Typography style={STYLES["body_label"]}>
            $ {price.toLocaleString("en-US")}
          </Typography>
        </Row>
        <Typography numberOfLines={2} style={STYLES["card_description"]}>
          {description}
        </Typography>
      </Column>
    </Touchable>
  );
};
