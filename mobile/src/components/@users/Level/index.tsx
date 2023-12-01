import {STYLES} from "./styles";
import {getSvg} from "./helper";
import {UserLevel} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {Column, Touchable, Typography} from "../../@system";

interface LevelProps {
  level: UserLevel;
  iconSize?: number;
}

export const Level: React.FC<LevelProps> = ({level, iconSize = 30}) => {
  const {t} = useLang();
  const {colors} = useTheme();

  return (
    <Column alignItems="center">
      <Touchable
        style={[STYLES["user_level"], {borderColor: colors["BORDER"]}]}
      >
        {getSvg(level, iconSize)}
      </Touchable>
      <Typography>{t(level)}</Typography>
    </Column>
  );
};
