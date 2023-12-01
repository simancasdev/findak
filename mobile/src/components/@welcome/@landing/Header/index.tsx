import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {FindakLogo} from "src/svg";
import {Column, ToggleLanguage, Typography} from "src/components/@system";

interface LandingHeaderProps {}

export const LandingHeader: React.FC<LandingHeaderProps> = () => {
  const {t} = useLang();

  return (
    <Column gap={30} alignItems="center" style={[STYLES["landing_header"]]}>
      <ToggleLanguage
        labelIconColor={PALETTE["WHITE"]}
        style={{backgroundColor: PALETTE["WHITE01"]}}
      />
      <Column alignItems="center">
        <FindakLogo color={PALETTE["WHITE"]} width={120} />
        <Typography style={STYLES["title"]}>
          {t("tell_people_what_you_want_and_get_what_you_need")}
        </Typography>
      </Column>
    </Column>
  );
};
