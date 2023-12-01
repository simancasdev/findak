import {STYLES} from "./styles";
import {ViewParam} from "src/interfaces";
import {searchTypesOptions} from "src/utils";
import {useAppDispatch, useLang} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {getSearches, onChangeSearchFilter} from "src/redux/slices";
import {
  Column,
  SearchBar,
  BoxButton,
  RowScrollable,
} from "src/components/@system";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"Result" | "MeetPeople">>();

  return (
    <Column gap={20} style={[STYLES["header"]]}>
      <SearchBar
        onSearch={(text) => {
          dispatch(onChangeSearchFilter({query: text}));
          dispatch(getSearches());
          navigate("Result");
        }}
      />
      <RowScrollable rowHeight={80} fullWidth>
        {searchTypesOptions.map(({label, image, searchType}, key) => (
          <BoxButton
            size={80}
            key={key}
            image={image}
            imageSize={40}
            label={t(label)}
            labelStyle={{fontSize: 12}}
            onPress={() => {
              // prettier-ignore
              dispatch(onChangeSearchFilter({query: "", searchType, cities: [], categories: []}));
              dispatch(getSearches());
              navigate("Result");
            }}
          />
        ))}
      </RowScrollable>
    </Column>
  );
};
