import {TValue} from "src/languages";
import {BoxItems} from "src/components/@system";
import {Calendar, Dollar, Pending} from "src/svg";
import {selectOfferState} from "src/redux/slices";
import {useTheme, useAppSelector, useLang, useMoment} from "src/hooks";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {moment, dateFormat} = useMoment();
  const {price, createdAt, status} = useAppSelector(selectOfferState)["offer"];

  return (
    <BoxItems
      sectionUI={{title: t("offer_details")}}
      items={[
        {
          label: t("price"),
          value: `$${price}`,
          icon: <Dollar size={20} color={colors["WHITE_BLACK"]} />,
        },
        {
          label: t("status"),
          value: t(status as TValue),
          icon: <Pending size={20} color={colors["WHITE_BLACK"]} />,
        },
        {
          border: false,
          label: t("creation_date"),
          value: moment(createdAt).format(dateFormat),
          icon: <Calendar size={20} color={colors["WHITE_BLACK"]} />,
        },
      ]}
    />
  );
};
