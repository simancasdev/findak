import {ChevronLeft} from "src/svg";
import {showSeparator} from "src/utils";
import {useViewActions} from "./useViewActions";
import {ListItem} from "src/components/@inventory";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {ComponentSeparator, NavigatorView} from "src/hoc";
import {getMyProducts, selectInventoryState} from "src/redux/slices";
import {ComponentManager, Screen, TopBar} from "src/components/@system";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface MyProductsListProps {}

export const MyProductsList: React.FC<MyProductsListProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {openProductOptions} = useViewActions();
  const {APIStatus, myProducts} = useAppSelector(selectInventoryState);
  const {isLoading, error} = APIStatus["myProducts"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getMyProducts());
  }, []);

  return (
    <NavigatorView viewName="MyProductsList">
      <Screen
        refreshControl={{
          refreshing: false,
          onRefresh: () => dispatch(getMyProducts()),
        }}
      >
        <TopBar
          style={{paddingHorizontal: 15}}
          back={{
            onPress: goBack,
            label: t("my_products_list"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <ComponentManager
          isError={error}
          isLoading={isLoading}
          data={myProducts}
          skeleton={{placeholder: <Skeleton.ProductListItem />}}
          error={{tryAgain: () => dispatch(getMyProducts())}}
        >
          {myProducts.map((product, key) => (
            <ComponentSeparator
              key={key}
              show={showSeparator(key, myProducts)}
              children={
                <ListItem
                  product={product}
                  onPress={(product) => openProductOptions(product)}
                />
              }
            />
          ))}
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
