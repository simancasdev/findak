import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {HEIGHT_SCREEN} from "src/utils";
import {Categories, Location} from "./lib";
import {useLang, useAppDispatch} from "src/hooks";
import {SEARCH_FILTER_LOADER, getSearches} from "src/redux/slices";
import {Button, Container, Accordion} from "src/components/@system";

interface SearchFilterProps {}

export const SearchFilter: React.FC<SearchFilterProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();

  return (
    <Container style={STYLES["search_filter"]}>
      <Accordion
        mode="one-by-one"
        contentStyle={{maxHeight: HEIGHT_SCREEN / 1.6}}
        sections={[
          {
            id: 0,
            title: t("categories"),
            content: <Categories />,
          },
          {
            id: 1,
            title: t("location"),
            content: <Location />,
          },
        ]}
      />
      <Button
        label={t("search")}
        labelStyle={{fontSize: 17}}
        labelColor={PALETTE["WHITE"]}
        loaderColor={PALETTE["WHITE"]}
        style={STYLES["button_submit"]}
        loaderId={SEARCH_FILTER_LOADER}
        onPress={() => dispatch(getSearches())}
      />
    </Container>
  );
};
