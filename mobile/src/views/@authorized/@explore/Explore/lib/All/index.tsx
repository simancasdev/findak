import {STYLES} from "./styles";
import {showSeparator} from "src/utils";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {Search} from "src/components/@searches";
import {Skeleton} from "src/components/@skeletons";
import {useNavigation} from "@react-navigation/native";
import {useLang, useAppSelector, useAppDispatch} from "src/hooks";
import {getExplore, openSideMenu, selectSearchState} from "src/redux/slices";
import {
  Row,
  Button,
  Column,
  Typography,
  ComponentManager,
} from "src/components/@system";

interface AllProps {}

export const All: React.FC<AllProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"Search">>();
  const {APIStatus, explore} = useAppSelector(selectSearchState);
  const {isLoading, error} = APIStatus["explore"];

  return (
    <Column gap={0}>
      <Row style={STYLES["head"]} justifyContent="space-between">
        <Typography style={STYLES["head_label"]}>
          {t("all_searches")}
        </Typography>
      </Row>
      <ComponentManager
        isError={error}
        isLoading={isLoading}
        data={explore["data"]}
        preventLoadingStateOnRefresh={false}
        error={{tryAgain: () => dispatch(getExplore())}}
        skeleton={{placeholder: <Skeleton.Search />, howMany: 5}}
        emptyUI={{
          icon: require("src/images/png/nothing-found.png"),
          title: t("we_have_nothing_to_show"),
          helperText: t("you_can_try_another_category_or_city"),
          body: (
            <Button
              variant="text_only"
              label={t("change")}
              onPress={() => dispatch(openSideMenu({view: "search-filter"}))}
            />
          ),
        }}
      >
        {explore["data"].map((search, key) => (
          <ComponentSeparator
            key={key}
            show={showSeparator(key, explore["data"])}
            children={
              <Search
                search={search}
                showComments={false}
                onPress={(searchId) => navigate("Search", {searchId})}
              />
            }
          />
        ))}
      </ComponentManager>
    </Column>
  );
};
