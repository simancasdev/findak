import {compareIds} from "src/utils";
import {TValue} from "src/languages";
import {BoxItems} from "src/components/@system";
import {selectTradeState} from "src/redux/slices";
import {Calendar, Identifier, Map, Trades} from "src/svg";
import {useAppSelector, useLang, useMoment, useTheme} from "src/hooks";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {moment, dateFormat} = useMoment();
  // prettier-ignore
  const {createdAt, buyer, seller, status, identifier} = useAppSelector(selectTradeState)["trade"];
  const sameCityLabel = compareIds([buyer["city"]["id"], seller["city"]["id"]])
    ? `${t("yes")} - ${buyer["city"]["name"]}`
    : t("no");

  return (
    <BoxItems
      sectionUI={{title: t("deal_details")}}
      items={[
        {
          label: t("start_date"),
          value: moment(createdAt).format(dateFormat),
          icon: <Calendar size={20} color={colors["WHITE_BLACK"]} />,
        },
        {
          label: t("same_city"),
          value: sameCityLabel,
          icon: <Map size={20} color={colors["WHITE_BLACK"]} />,
        },
        {
          label: t("status"),
          value: t(status as TValue),
          icon: <Trades size={20} color={colors["WHITE_BLACK"]} />,
        },
        {
          border: false,
          label: t("id"),
          icon: <Identifier size={20} color={colors["WHITE_BLACK"]} />,
          value: `${identifier.slice(0, 15)}...`,
        },
      ]}
    />
  );
};
