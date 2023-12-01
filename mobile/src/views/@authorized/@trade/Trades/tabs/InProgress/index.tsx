import {Pending} from "src/svg";
import {showSeparator} from "src/utils";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {Trade} from "src/components/@trades";
import {selectTradeState} from "src/redux/slices";
import {Column, Empty} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";

interface InProgressProps {}

export const InProgress: React.FC<InProgressProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"Trade">>();
  const {trades} = useAppSelector(selectTradeState);
  const {inProgress} = trades;

  return (
    <Column>
      {!inProgress.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_no_transactions_in_progress"),
            helperText: t("we_notify_you_when_you_start_a"),
            icon: <Pending size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        inProgress.map((trade, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, inProgress)}
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
