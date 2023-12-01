import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {styleOS} from "src/styles";
import {useOffer} from "../../context";
import {iconStatus, iconStatusColor} from "./helper";
import {Column, Typography} from "src/components/@system";

interface DetailsProps {}

export const Details: React.FC<DetailsProps> = () => {
  const {t} = useLang();
  const {price, status} = useOffer().offer;
  const Icon = iconStatus[status];

  return (
    <Column alignItems="flex-end" style={STYLES["details"]}>
      <Column gap={0} alignItems="flex-end">
        <Typography fontSize={18} fontWeight={styleOS("600")}>
          ${price}
        </Typography>
        <Typography fontSize={12} marginBottom={10}>
          {t("cost")}
        </Typography>
      </Column>
      <Icon color={iconStatusColor[status]} />
    </Column>
  );
};
