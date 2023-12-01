import {useMemo} from "react";
import {STYLES} from "./styles";
import {TradeContext} from "./context";
import {Touchable} from "../../@system";
import {Head, Body, Record, Status} from "./lib";
import {Style, TradeModel} from "../../../interfaces";

interface TradeProps extends Style {
  trade: TradeModel;
  onPress?: (tradeId: string) => void;
}

export const Trade: React.FC<TradeProps> = ({trade, onPress, style}) => {
  const values = useMemo(() => ({trade}), [trade]);
  const enableOnPress = typeof onPress !== "undefined";

  return (
    <TradeContext.Provider value={values}>
      <Touchable
        disabled={!enableOnPress}
        style={[STYLES["trade"], style]}
        onPress={() => {
          if (enableOnPress) onPress(trade["id"]);
        }}
      >
        <Record />
        <Head />
        <Body />
        <Status />
      </Touchable>
    </TradeContext.Provider>
  );
};
