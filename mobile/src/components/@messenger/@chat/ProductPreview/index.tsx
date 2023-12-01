import {STYLES} from "./styles";
import {svgProps} from "./helper";
import {PALETTE} from "src/styles";
import {useChat} from "../context";
import {WIDTH_SCREEN} from "src/utils";
import {useCallback, useState} from "react";
import {Animated, Image} from "react-native";
import {ChevronRight, Inventory} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {useTheme, useTransitionAnimation} from "src/hooks";
import {ProductModel, ViewParam} from "src/interfaces";
import {
  Row,
  Column,
  IconBox,
  Touchable,
  Typography,
} from "src/components/@system";

interface ProductPreviewProps {}

export const ProductPreview: React.FC<ProductPreviewProps> = () => {
  const [translateX, execute] = useTransitionAnimation(0);
  const [hidden, setHidden] = useState<boolean>(false);
  const {navigate} = useNavigation<ViewParam<"ProductDetails">>();
  const {colors} = useTheme();
  const {references_url, title, description, price, id} = useChat()[
    "product"
  ] as ProductModel;

  const onTransition = useCallback(() => {
    setHidden(!hidden);
    if (!hidden) {
      execute({toValue: WIDTH_SCREEN - 42, duration: 300});
      return;
    } else {
      execute({toValue: 0, duration: 300});
    }
  }, [hidden]);

  return (
    <Animated.View style={[STYLES["overlap"], {transform: [{translateX}]}]}>
      <Row>
        <IconBox
          size={30}
          onPress={onTransition}
          backgroundColor={PALETTE["SECONDARY"]}
          icon={
            hidden ? (
              <Inventory {...svgProps} size={18} />
            ) : (
              <ChevronRight {...svgProps} />
            )
          }
        />
        <Touchable
          onPress={() =>
            navigate("ProductDetails", {productId: id, hideActions: true})
          }
        >
          <Row
            gap={10}
            style={[
              STYLES["product_preview"],
              {backgroundColor: colors["BACKGROUND_VIEW"]},
            ]}
          >
            <Image
              style={STYLES["product_cover"]}
              source={{uri: references_url[0]}}
            />

            <Column style={{flexShrink: 1}}>
              <Typography style={STYLES["title"]}>{title}</Typography>
              <Typography style={STYLES["desciption"]} numberOfLines={2}>
                {description}
              </Typography>
              <Typography style={STYLES["price"]}>$ {price}</Typography>
            </Column>
          </Row>
        </Touchable>
      </Row>
    </Animated.View>
  );
};
