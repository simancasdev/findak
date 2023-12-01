import {useMemo} from "react";
import {STYLES} from "./styles";
import {Body, Details} from "./lib";
import {OfferVariant} from "./types";
import {OfferContext} from "./context";
import {Touchable} from "../../@system";
import {OfferModel, Style} from "src/interfaces";

interface OfferProps extends Style {
  offer: OfferModel;
  variant?: OfferVariant;
  onPress?: (OfferId: string) => void;
}

export const Offer: React.FC<OfferProps> = ({
  offer,
  style,
  onPress,
  variant = "search_detail",
}) => {
  const values = useMemo(() => ({offer, variant}), [offer]);

  return (
    <OfferContext.Provider value={values}>
      <Touchable
        disabled={typeof onPress === "undefined"}
        style={[STYLES["offer"], STYLES[variant], style]}
        onPress={() => {
          if (typeof onPress === "undefined") return;
          onPress(offer.id);
        }}
      >
        <Body />
        <Details />
      </Touchable>
    </OfferContext.Provider>
  );
};
