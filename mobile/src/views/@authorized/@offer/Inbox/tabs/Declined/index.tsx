import {X} from "src/svg";
import {Fragment} from "react";
import {showSeparator} from "src/utils";
import {ComponentSeparator} from "src/hoc";
import {Empty} from "src/components/@system";
import {Received} from "src/components/@offers";
import {selectOfferState} from "src/redux/slices";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface DeclinedProps {}

export const Declined: React.FC<DeclinedProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {received} = useAppSelector(selectOfferState);
  const {declined} = received;

  return (
    <Fragment>
      {!declined.length ? (
        <Empty
          emptyUI={{
            title: t("you_have_not_rejected_any_offer"),
            helperText: t("all_the_offers_that_you_have_rejected"),
            icon: <X size={50} color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        declined.map((offer, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={10}
            show={showSeparator(key, declined)}
            children={<Received offer={offer} />}
          />
        ))
      )}
    </Fragment>
  );
};
