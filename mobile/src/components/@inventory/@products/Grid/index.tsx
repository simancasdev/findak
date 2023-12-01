import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Image, View} from "react-native";
import {ProductModel} from "src/interfaces";
import {PALETTE, styleOS} from "src/styles";
import LinearGradient from "react-native-linear-gradient";
import {Empty, Row, Touchable, Typography} from "src/components/@system";

interface GridProps {
  products: ProductModel[];
  onItemPress: (productId: string) => void;
}

export const Grid: React.FC<GridProps> = ({onItemPress, products}) => {
  const {t} = useLang();

  return !products.length ? (
    <Empty emptyUI={{helperText: t("there_are_no_products_to_show")}} />
  ) : (
    <Row style={STYLES["grid"]} gap={5}>
      {products.map(({title, references_url, id}, key) => (
        <Touchable
          key={key}
          style={STYLES["iventory_item"]}
          onPress={() => onItemPress(id)}
        >
          <Image
            style={STYLES["inventory_image"]}
            source={{
              uri: references_url[0],
            }}
          />
          <LinearGradient
            colors={["rgba(0,0,0, .02)", "rgba(0,0,0, .5)", "rgba(0,0,0, .8)"]}
            style={STYLES["item_description"]}
          >
            <View>
              <Typography
                numberOfLines={2}
                fontWeight={styleOS("600")}
                style={{color: PALETTE["WHITE"]}}
              >
                {title}
              </Typography>
            </View>
          </LinearGradient>
        </Touchable>
      ))}
    </Row>
  );
};
