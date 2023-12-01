import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {ViewParam} from "src/interfaces";
import {Item} from "src/components/@inventory";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {ChevronLeft, ChevronRight, Plus} from "src/svg";
import {ComponentSeparator, NavigatorView} from "src/hoc";
import {
  removeCollection,
  getMyCollection,
  selectInventoryState,
  toggleButtonLoader,
} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppSelector,
  useAppDispatch,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";
import {
  Screen,
  TopBar,
  Divider,
  RowButton,
  Guideline,
  ComponentManager,
} from "src/components/@system";

interface ManageCollectionProps {}

export const ManageCollection: React.FC<ManageCollectionProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {myCollection, APIStatus} = useAppSelector(selectInventoryState);
  const {isLoading, error} = APIStatus["myCollection"];
  const {goBack, navigate} = useNavigation<ViewParam<"CreateCollection">>();

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getMyCollection());
  }, []);

  return (
    <NavigatorView viewName="ManageCollection">
      <Screen
        contentStyle={{paddingHorizontal: 15}}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getMyCollection()),
        }}
      >
        <TopBar
          style={{marginBottom: 20}}
          back={{
            onPress: goBack,
            label: t("manage_your_collections"),
            icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          }}
        />
        <RowButton
          label={t("create_collection")}
          onPress={() => navigate("CreateCollection")}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          icon={<Plus size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
        />
        <Divider marginVertical={15} />
        <Guideline>{t("your_collections")}</Guideline>
        <ComponentManager
          isError={error}
          data={myCollection}
          isLoading={isLoading}
          error={{tryAgain: () => dispatch(getMyCollection())}}
          skeleton={{
            howMany: 6,
            placeholder: <Skeleton.ListItem width={WIDTH_SCREEN - 30} />,
          }}
          emptyUI={{
            title: t("you_have_no_collections_created_yet"),
            icon: require("src/images/png/empty-folder.png"),
          }}
        >
          {myCollection.map((collection, key) => (
            <ComponentSeparator
              key={key}
              marginVertical={4}
              show={key + 1 !== myCollection.length}
            >
              <Item
                collection={collection}
                onEdit={(collection) =>
                  navigate("CreateCollection", {collection})
                }
                onRemove={({id}, loaderId) => {
                  dispatch(toggleButtonLoader(loaderId));
                  dispatch(
                    removeCollection({
                      collectionId: id,
                      loaderId,
                    })
                  );
                }}
              />
            </ComponentSeparator>
          ))}
        </ComponentManager>
      </Screen>
    </NavigatorView>
  );
};
