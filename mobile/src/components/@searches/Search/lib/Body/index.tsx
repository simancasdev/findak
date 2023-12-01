import {Images} from "..";
import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {useSearch} from "../../context";
import {Fragment, useState} from "react";
import {Touchable, Typography} from "src/components/@system";

interface BodyProps {}

const MAX_PREVIEW_DESCRIPTION = 100;

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {search, allowShowMoreBehavior} = useSearch();
  const {references_url, description} = search;
  const [showMore, setShowMore] = useState<boolean>(false);
  const showMoreBehavior = description.length > MAX_PREVIEW_DESCRIPTION;

  return (
    <View style={STYLES["body"]}>
      <Touchable
        style={STYLES["search_description"]}
        onPress={() => setShowMore(!showMore)}
        disabled={!showMoreBehavior || !allowShowMoreBehavior}
      >
        <Typography fontSize={16}>
          {description.slice(
            0,
            !showMore ? MAX_PREVIEW_DESCRIPTION : description.length
          )}
          {showMoreBehavior ? (!showMore ? "..." : "") : null}
        </Typography>
        {showMoreBehavior ? (
          !showMore ? (
            <Typography style={{color: PALETTE["PRIMARY"]}}>
              {t("see_more")}
            </Typography>
          ) : null
        ) : null}
      </Touchable>

      {typeof references_url !== "undefined" ? (
        <Images sources={references_url} />
      ) : (
        <Fragment />
      )}
    </View>
  );
};
