import {Fragment} from "react";
import {STYLES} from "./styles";
import {BarChart} from "src/svg";
import {View} from "react-native";
import {TValue} from "src/languages";
import {PALETTE, styleOS} from "src/styles";
import {Search} from "src/components/@searches";
import {useAppSelector, useLang} from "src/hooks";
import {selectTrendingState} from "src/redux/slices";
import {Column, Row, Typography} from "src/components/@system";

interface SearchesByCategoryProps {}

export const SearchesByCategory: React.FC<SearchesByCategoryProps> = () => {
  const {t} = useLang();
  const {statistics} = useAppSelector(selectTrendingState);

  return (
    <View style={STYLES["container"]}>
      <Row style={{paddingHorizontal: 10}}>
        <Typography fontSize={16} fontWeight={styleOS("500")}>
          Todas las búsquedas de hoy
        </Typography>
      </Row>
      {statistics.map(({searches, category}, key) => (
        <Fragment key={key}>
          <Row style={STYLES["category_head"]}>
            <BarChart strokeWidth={2} color={PALETTE["WHITE"]} />
            <Typography style={{color: PALETTE["WHITE"]}}>
              {t(category["name"] as TValue)}
            </Typography>
          </Row>
          <Column>
            <Column>
              {searches.map((search, key) => (
                <Search showComments={false} key={key} search={search} />
              ))}
            </Column>
          </Column>
        </Fragment>
      ))}
    </View>
  );
};
