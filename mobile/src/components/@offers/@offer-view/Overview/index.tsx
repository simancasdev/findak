import {Offer} from "../..";
import {PALETTE} from "src/styles";
import {Section} from "src/components/@system";
import {useAppSelector, useLang} from "src/hooks";
import {selectOfferState} from "src/redux/slices";

interface OverviewProps {}

export const Overview: React.FC<OverviewProps> = () => {
  const {t} = useLang();
  const {offer} = useAppSelector(selectOfferState);

  return (
    <Section
      title={t("offer_view")}
      containerStyle={{
        padding: 0,
        backgroundColor: PALETTE["TRANSPARENT"],
      }}
    >
      <Offer style={{width: "100%"}} offer={offer} />
    </Section>
  );
};
