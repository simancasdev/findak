import {STYLES} from "./styles";
import {View} from "react-native";
import {useTheme} from "src/hooks";
import {PALETTE} from "src/styles";
import {ProgressBar as IProgressBar} from "src/interfaces";
import {Column, Touchable, Typography} from "../../@system";

interface ProgressBarProps extends IProgressBar {
  onPress: (param: any) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  name,
  onPress,
  progress,
  barColor = PALETTE["PRIMARY"],
}) => {
  const {colors} = useTheme();

  return (
    <Touchable
      onPress={onPress}
      disabled={typeof onPress === "undefined"}
      style={{width: "100%"}}
    >
      <Column>
        {name && <Typography fontSize={13}>{name}</Typography>}
        <View
          style={[STYLES["bar"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          children={
            <View
              style={[
                STYLES["progress"],
                {backgroundColor: barColor, width: `${progress - 1}%`},
              ]}
            />
          }
        />
      </Column>
    </Touchable>
  );
};
