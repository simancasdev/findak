import {STYLES} from "./styles";
import {useLang, useTheme} from "src/hooks";
import {PALETTE, styleOS} from "src/styles";
import {ProgressBoxValue} from "src/interfaces";
import {Column, Touchable, Typography} from "../../@system";
import CircularProgress from "react-native-circular-progress-indicator";

interface ProgressBoxProps {
  onPress?: () => void;
  progress: ProgressBoxValue;
}

export const ProgressBox: React.FC<ProgressBoxProps> = ({
  progress,
  onPress,
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {value, title, valueLabel, useCircularProgress = false} = progress;

  return (
    <Touchable style={STYLES["box"]} disabled={typeof onPress === "undefined"}>
      <Column
        alignItems="center"
        style={{
          padding: 15,
          height: 120,
        }}
      >
        {useCircularProgress ? (
          <CircularProgress
            radius={30}
            value={value}
            initialValue={0}
            title={valueLabel}
            activeStrokeWidth={12}
            showProgressValue={false}
            progressValueStyle={{fontSize: 18}}
            activeStrokeColor={PALETTE["PRIMARY"]}
            inActiveStrokeColor={colors["HOVER_LIGHT"]}
            titleStyle={{
              color: colors["WHITE_BLACK"],
              fontWeight: styleOS("600"),
              fontSize: valueLabel?.includes("%")
                ? valueLabel.includes("100")
                  ? 12
                  : 14
                : 17,
            }}
          />
        ) : (
          <Typography style={STYLES["value_label"]}>{value}</Typography>
        )}
        <Column gap={0}>
          <Typography
            fontSize={12}
            style={{
              textAlign: "center",
              fontWeight: styleOS("600"),
              color: colors["WHITE_BLACK"],
            }}
          >
            {t(title)}
          </Typography>
        </Column>
      </Column>
    </Touchable>
  );
};
