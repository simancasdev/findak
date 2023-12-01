import {useMemo} from "react";
import {STYLES} from "./styles";
import {Column, Row} from "../../@system";
import {SearchAlertProps} from "./types";
import {Actions, Body, Head} from "./lib";
import {SearchAlertContext} from "./context";

export const SearchAlert: React.FC<SearchAlertProps> = ({search, onPress}) => {
  const values = useMemo(() => ({search, onPress}), [search]);

  return (
    <SearchAlertContext.Provider value={values}>
      <Row
        alignItems="flex-start"
        justifyContent="space-between"
        style={[STYLES["search_alert"]]}
      >
        <Head />
        <Column>
          <Body />
          <Actions />
        </Column>
      </Row>
    </SearchAlertContext.Provider>
  );
};
