import {Fragment} from "react";
import {Pending} from "src/svg";
import {Sent} from "src/components/@offers";
import {Empty} from "src/components/@system";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface WaitingProps {}

export const Waiting: React.FC<WaitingProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {sent} = useAppSelector(selectOfferState);
  const {waiting} = sent;

  return (
    <Fragment>
      {!waiting.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_not_sent_new_offers"),
            helperText: t("its_time_to_keep_selling"),
            icon: <Pending size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        waiting.map((offer, key) => <Sent offer={offer} key={key} />)
      )}
    </Fragment>
  );
};
