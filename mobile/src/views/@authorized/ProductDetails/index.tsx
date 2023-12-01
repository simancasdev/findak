import {ChevronLeft} from "src/svg";
import {compareIds} from "src/utils";
import {NavigatorView} from "src/hoc";
import {Fragment, useLayoutEffect} from "react";
import {Skeleton} from "src/components/@skeletons";
import {ViewNavigationProps} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {ComponentManager, Screen, TopBar} from "src/components/@system";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  Images,
  Actions,
  Description,
  PeopleLiked,
} from "src/components/@product-details";
import {
  getProduct,
  resetProduct,
  selectAuthState,
  selectProductState,
} from "src/redux/slices";

interface ProductDetailsProps extends ViewNavigationProps<"ProductDetails"> {}

export const ProductDetails: React.FC<ProductDetailsProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {productId, hideActions = false} = route["params"];
  const {product, APIStatus} = useAppSelector(selectProductState);
  const {references_url, user_id} = product;
  const {isLoading, error} = APIStatus["product"];

  useLayoutEffect(() => {
    dispatch(getProduct(productId));
    return () => {
      dispatch(resetProduct());
    };
  }, [productId]);

  return (
    <NavigatorView viewName="ProductDetails">
      <Screen
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getProduct(productId)),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 10, marginBottom: 15}}
          back={{
            onPress: goBack,
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
            label: isLoading ? t("loading") : t("product_details"),
          }}
        />
        <ComponentManager
          data={product}
          isError={error}
          isLoading={isLoading}
          preventLoadingStateOnRefresh={false}
          skeleton={{placeholder: <Skeleton.ProductScreen />}}
          error={{tryAgain: () => dispatch(getProduct(productId))}}
        >
          <Images sources={references_url} />
          <Description />
          <PeopleLiked />
          {!hideActions && compareIds([authUserId, user_id], "unequal") ? (
            <Actions />
          ) : (
            <Fragment />
          )}
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
