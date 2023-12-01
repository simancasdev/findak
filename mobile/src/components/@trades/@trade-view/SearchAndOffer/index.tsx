import {Fragment} from "react";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {Search, Sent} from "src/svg";
import {ViewParam} from "src/interfaces";
import {Offer} from "src/components/@offers";
import {selectTradeState} from "src/redux/slices";
import {SearchPreview} from "src/components/@searches";
import {useNavigation} from "@react-navigation/native";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {Column, Divider, Guideline} from "src/components/@system";

interface SearchAndOfferProps {}

export const SearchAndOffer: React.FC<SearchAndOfferProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"Offer" | "Search">>();
  const {trade} = useAppSelector(selectTradeState);
  const {search, offer} = trade;

  return (
    <Fragment>
      <Divider marginTop={25} marginBottom={20} />
      <Column gap={20} style={STYLES["content"]}>
        <Column gap={20}>
          <Guideline
            icon={
              <Search
                strokeWidth={0.1}
                size={22}
                color={colors["WHITE_BLACK"]}
              />
            }
          >
            {t("initial_search")}
          </Guideline>
          <SearchPreview
            search={search}
            bodyStyle={{width: "83%"}}
            style={{paddingHorizontal: 0}}
            descriptionNumeberOfLines={3}
            onPress={() => navigate("Search", {searchId: search["id"]})}
          />
        </Column>
        <Column gap={20}>
          <Guideline
            icon={
              <Sent strokeWidth={2.5} size={18} color={colors["WHITE_BLACK"]} />
            }
          >
            {t("offer_sent")}
          </Guideline>
          <Offer
            offer={offer}
            style={{backgroundColor: PALETTE["TRANSPARENT"]}}
            onPress={() => navigate("Offer", {offerId: offer["id"]})}
          />
        </Column>
      </Column>
    </Fragment>
  );
};
