import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {Column, Typography} from "src/components/@system";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const {t} = useLang();

  return (
    <Column>
      <Typography style={STYLES["title"]}>{t("today_trending")}</Typography>
    </Column>
  );
};
