import {X} from "src/svg";
import {Fragment} from "react";
import {Sent} from "src/components/@offers";
import {Empty} from "src/components/@system";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface DeclinedProps {}

export const Declined: React.FC<DeclinedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {sent} = useAppSelector(selectOfferState);
  const {declined} = sent;

  return (
    <Fragment>
      {!declined.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_not_been_rejected_any_offer"),
            helperText: t("all_the_offers_that_have_rejected_you_will_be_here"),
            icon: <X size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        declined.map((offer, key) => <Sent offer={offer} key={key} />)
      )}
    </Fragment>
  );
};
