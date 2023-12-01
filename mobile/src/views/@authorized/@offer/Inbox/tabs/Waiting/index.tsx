import {Fragment} from "react";
import {Pending} from "src/svg";
import {showSeparator} from "src/utils";
import {ComponentSeparator} from "src/hoc";
import {Empty} from "src/components/@system";
import {Received} from "src/components/@offers";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface WaitingProps {}

export const Waiting: React.FC<WaitingProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {received} = useAppSelector(selectOfferState);
  const {waiting} = received;

  return (
    <Fragment>
      {!waiting.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_no_offers_waiting"),
            helperText: t("we_will_notify_you_when_you_receive_a_new_one"),
            icon: <Pending size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        waiting.map((offer, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, waiting)}
            children={<Received offer={offer} />}
          />
        ))
      )}
    </Fragment>
  );
};
