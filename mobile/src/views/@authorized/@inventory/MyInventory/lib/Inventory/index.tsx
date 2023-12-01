import {Fragment} from "react";
import {styleOS} from "src/styles";
import {ViewParam} from "src/interfaces";
import {Card} from "src/components/@inventory";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {getMyProducts, selectInventoryState} from "src/redux/slices";
import {
  Typography,
  RowScrollable,
  ComponentManager,
} from "src/components/@system";

interface InventoryProps {}

export const Inventory: React.FC<InventoryProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus, productsByCollection} =
    useAppSelector(selectInventoryState);
  const {isLoading, error} = APIStatus["myProducts"];
  const {navigate} = useNavigation<ViewParam<"ProductDetails">>();

  return (
    <Fragment>
      <Typography fontSize={18} fontWeight={styleOS("600")} marginBottom={10}>
        {t("all_your_collections")}
      </Typography>
      <ComponentManager
        isError={error}
        isLoading={isLoading}
        data={productsByCollection}
        skeleton={{placeholder: <Skeleton.MyInventoryScreen />, howMany: 2}}
        error={{tryAgain: () => dispatch(getMyProducts())}}
        emptyUI={{
          title: t("theres_nothing_to_show"),
          icon: require("src/images/png/empty-folder.png"),
        }}
      >
        {productsByCollection.map(({collection, products}, key) => (
          <RowScrollable
            gap={20}
            key={key}
            fullWidth
            rowHeight={250}
            alignItems="flex-start"
            style={{marginBottom: 15}}
            topBar={{
              title: collection["name"],
            }}
          >
            {products.map((product, key) => (
              <Card
                key={key}
                product={product}
                onPress={() =>
                  navigate("ProductDetails", {productId: product["id"]})
                }
              />
            ))}
          </RowScrollable>
        ))}
      </ComponentManager>
    </Fragment>
  );
};
