import {CheckCircle} from "src/svg";
import {showSeparator} from "src/utils";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {Trade} from "src/components/@trades";
import {selectTradeState} from "src/redux/slices";
import {Column, Empty} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {useLang, useTheme, useAppSelector} from "src/hooks";

interface CompletedProps {}

export const Completed: React.FC<CompletedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"Trade">>();
  const {trades} = useAppSelector(selectTradeState);
  const {completed} = trades;

  return (
    <Column>
      {!completed.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_not_completed_any_transactions"),
            helperText: t("here_you_will_have_their_history"),
            icon: <CheckCircle size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        completed.map((trade, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, completed)}
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
