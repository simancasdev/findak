import {Fragment} from "react";
import {CheckCircle} from "src/svg";
import {Sent} from "src/components/@offers";
import {Empty} from "src/components/@system";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface AcceptedProps {}

export const Accepted: React.FC<AcceptedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {sent} = useAppSelector(selectOfferState);
  const {accepted} = sent;

  return (
    <Fragment>
      {!accepted.length ? (
        <Empty
          emptyUI={{
            title: t("no_offer_has_been_accepted_yet"),
            helperText: t("here_you_will_have_their_history"),
            icon: <CheckCircle size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        accepted.map((offer, key) => <Sent offer={offer} key={key} />)
      )}
    </Fragment>
  );
};
