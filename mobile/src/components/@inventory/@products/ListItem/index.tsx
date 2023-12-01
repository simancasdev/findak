import {STYLES} from "./styles";
import {Image} from "react-native";
import {useMoment} from "src/hooks";
import {ProductModel} from "src/interfaces";
import {PALETTE, styleOS} from "src/styles";
import {Column, Row, Touchable, Typography} from "src/components/@system";

interface ListItemProps {
  onPress: (item: ProductModel) => void;
  product: ProductModel;
}

export const ListItem: React.FC<ListItemProps> = ({onPress, product}) => {
  const {moment} = useMoment();
  const {title, description, references_url, price, createdAt} = product;
  return (
    <Touchable onPress={() => onPress(product)} style={STYLES["list_item"]}>
      <Row gap={15}>
        <Image style={STYLES["image"]} source={{uri: references_url[0]}} />
        <Column style={{flexWrap: "wrap", flexShrink: 1}}>
          <Typography fontSize={12}>{moment(createdAt).fromNow()}</Typography>
          <Typography fontWeight={styleOS("500")}>{title}</Typography>
          <Typography style={{color: PALETTE["GREY"]}} numberOfLines={2}>
            {description}
          </Typography>
          <Row>
            <Typography fontWeight={styleOS("500")}>
              ${price.toLocaleString("en-US")}
            </Typography>
          </Row>
        </Column>
      </Row>
    </Touchable>
  );
};
