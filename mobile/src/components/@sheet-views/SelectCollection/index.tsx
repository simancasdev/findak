import {Fragment} from "react";
import {ChevronDown} from "src/svg";
import {WIDTH_SCREEN} from "src/utils";
import {ViewParam} from "src/interfaces";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {Button, ComponentManager, List, TopBar} from "src/components/@system";
import {
  closeSheet,
  getMyCollection,
  selectInventoryState,
} from "src/redux/slices";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";

interface SelectCollectionProps {
  onCollection: (collectionId: string) => void;
}

export const SelectCollection: React.FC<SelectCollectionProps> = ({
  onCollection,
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"ManageCollection">>();
  const {myCollection, APIStatus} = useAppSelector(selectInventoryState);
  const {error, isLoading} = APIStatus["myCollection"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getMyCollection());
  }, []);

  return (
    <Fragment>
      <TopBar
        back={{
          label: t("select_a_collection"),
          onPress: () => dispatch(closeSheet()),
          icon: <ChevronDown color={colors["WHITE_BLACK"]} />,
        }}
      />
      <ComponentManager
        isError={error}
        data={myCollection}
        isLoading={isLoading}
        error={{tryAgain: () => dispatch(getMyCollection())}}
        skeleton={{
          placeholder: <Skeleton.ListItem width={WIDTH_SCREEN - 20} />,
          howMany: 5,
        }}
        emptyUI={{
          title: t("you_have_no_collections_created"),
          icon: require("src/images/png/empty-folder.png"),
          helperText: t("to_upload_a_product_you_need_to_create_a_collection"),
          body: (
            <Button
              label={t("create")}
              variant="text_only"
              onPress={() => {
                navigate("ManageCollection");
                dispatch(closeSheet());
              }}
            />
          ),
        }}
      >
        <List
          data={myCollection}
          onSelect={(id) => onCollection(id as string)}
        />
      </ComponentManager>
    </Fragment>
  );
};
