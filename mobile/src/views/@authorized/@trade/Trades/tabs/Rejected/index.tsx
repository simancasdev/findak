import {X} from "src/svg";
import {showSeparator} from "src/utils";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {Trade} from "src/components/@trades";
import {selectTradeState} from "src/redux/slices";
import {Column, Empty} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";

interface RejectedProps {}

export const Rejected: React.FC<RejectedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"Trade">>();
  const {trades} = useAppSelector(selectTradeState);
  const {rejected} = trades;

  return (
    <Column>
      {!rejected.length ? (
        <Empty
          emptyUI={{
            title: t("no_canceled_transactions"),
            helperText: t("here_you_will_have_their_history"),
            icon: <X size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        rejected.map((trade, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, rejected)}
            children={
              <Trade
                trade={trade}
                onPress={(tradeId) => navigate("Trade", {tradeId})}
              />
            }
          />
        ))
      )}
    </Column>
  );
};
