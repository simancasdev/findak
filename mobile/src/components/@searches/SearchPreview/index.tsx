import {useMemo} from "react";
import {STYLES} from "./styles";
import {Body, Head} from "./lib";
import {Row} from "../../@system";
import {SearchPreviewProps} from "./types";
import {SearchPreviewContext} from "./context";

export const SearchPreview: React.FC<SearchPreviewProps> = ({
  style,
  search,
  onPress,
  bodyStyle,
  avatarRedirection = true,
  descriptionNumeberOfLines,
}) => {
  const values = useMemo(
    () => ({
      search,
      onPress,
      bodyStyle,
      avatarRedirection,
      descriptionNumeberOfLines,
    }),
    [search, bodyStyle]
  );

  return (
    <SearchPreviewContext.Provider value={values}>
      <Row
        alignItems="flex-start"
        justifyContent="space-between"
        style={[STYLES["search_alert"], style]}
      >
        <Head />
        <Body />
      </Row>
    </SearchPreviewContext.Provider>
  );
};
