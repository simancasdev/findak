import {Heart} from "src/svg";
import {STYLES} from "./styles";
import {View} from "react-native";
import {useIsLiked} from "../hooks";
import {ComponentSeparator} from "src/hoc";
import {PALETTE, styleOS} from "src/styles";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {Column, IconBox, Row, Typography} from "src/components/@system";
import {
  selectProductState,
  UPDATING_PRODUCT_LIKE_LOADER,
} from "src/redux/slices";

interface DescriptionProps {}

export const Description: React.FC<DescriptionProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {product} = useAppSelector(selectProductState);
  const {title, description, price, discount} = product;
  const {liked, fill, toggleLike} = useIsLiked();
  const withDiscount = discount > 0;

  return (
    <ComponentSeparator marginVertical={0}>
      <Column style={STYLES["description"]}>
        <Row
          fullWidth
          gap={withDiscount ? 5 : 0}
          justifyContent={withDiscount ? "space-between" : "flex-start"}
        >
          {withDiscount && (
            <View style={STYLES["off"]}>
              <Typography style={STYLES["off_label"]}>
                {discount}% {t("discount").toLowerCase()}
              </Typography>
            </View>
          )}
          <IconBox
            size={40}
            icon={<Heart size={22} fill={fill} />}
            loaderId={UPDATING_PRODUCT_LIKE_LOADER}
            onPress={() => toggleLike(product["id"])}
            style={[
              STYLES["heart_box"],
              {backgroundColor: liked ? "transparent" : colors["HOVER_LIGHT"]},
            ]}
          />
        </Row>
        <Typography fontSize={24} fontWeight={styleOS("600")}>
          {title}
        </Typography>
        <Typography
          style={{color: PALETTE["GREY"], fontWeight: styleOS("500")}}
        >
          {description}
        </Typography>
        <Row marginTop={10}>
          <Typography style={{fontSize: 20, fontWeight: styleOS("600")}}>
            $ {price.toLocaleString("en-US")}
          </Typography>
        </Row>
      </Column>
    </ComponentSeparator>
  );
};
