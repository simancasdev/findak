import {View} from "react-native";
import {showSeparator} from "src/utils";
import {ComponentSeparator} from "src/hoc";
import {PALETTE, styleOS} from "src/styles";
import {Offer} from "src/components/@offers";
import {useAppSelector, useLang} from "src/hooks";
import {selectSearchState} from "src/redux/slices";
import {
  Row,
  Empty,
  Column,
  Typography,
  NumberIndicator,
} from "src/components/@system";

interface OffersReceivedProps {}

export const OffersReceived: React.FC<OffersReceivedProps> = () => {
  const {t} = useLang();
  const {offers} = useAppSelector(selectSearchState)["search"];

  return !offers.length ? (
    <Empty
      emptyUI={{
        title: t("this_search_has_not_received_offers"),
        icon: require("src/images/png/empty-folder.png"),
        helperText: t("be_the_first_to_submit_an_offer"),
      }}
    />
  ) : (
    <Column>
      <Row style={{marginBottom: 10}}>
        <NumberIndicator number={offers.length} />
        <Typography fontWeight={styleOS("500")} fontSize={18}>
          {t("offers_received")}
        </Typography>
      </Row>
      {offers.map((offer, key) => (
        <ComponentSeparator
          key={key}
          show={showSeparator(key, offers)}
          children={
            <Offer
              offer={offer}
              style={{backgroundColor: PALETTE["TRANSPARENT"]}}
            />
          }
        />
      ))}
    </Column>
  );
};
