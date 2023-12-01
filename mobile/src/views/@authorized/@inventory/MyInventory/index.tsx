import {NavigatorView} from "src/hoc";
import {Header, Inventory} from "./lib";
import {Screen} from "src/components/@system";
import {getMyProducts, selectInventoryState} from "src/redux/slices";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface MyInventoryProps {}

export const MyInventory: React.FC<MyInventoryProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {APIStatus} = useAppSelector(selectInventoryState);
  const {isLoading} = APIStatus["myProducts"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getMyProducts());
  }, []);

  return (
    <NavigatorView viewName="MyInventory">
      <Screen
        title={t("my_inventory")}
        style={{paddingHorizontal: 15}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getMyProducts()),
        }}
      >
        <Header />
        <Inventory />
      </Screen>
    </NavigatorView>
  );
};
