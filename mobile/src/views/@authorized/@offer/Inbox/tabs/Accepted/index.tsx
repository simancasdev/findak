import {Fragment} from "react";
import {CheckCircle} from "src/svg";
import {showSeparator} from "src/utils";
import {ComponentSeparator} from "src/hoc";
import {Empty} from "src/components/@system";
import {Received} from "src/components/@offers";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface AcceptedProps {}

export const Accepted: React.FC<AcceptedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {received} = useAppSelector(selectOfferState);
  const {accepted} = received;

  return (
    <Fragment>
      {!accepted.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_not_accepted_any_offer"),
            helperText: t("when_you_start_a_transaction_you_can"),
            icon: <CheckCircle size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        accepted.map((offer, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, accepted)}
            children={<Received offer={offer} />}
          />
        ))
      )}
    </Fragment>
  );
};
