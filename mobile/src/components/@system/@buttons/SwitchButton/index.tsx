import {useState} from "react";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {useTheme} from "src/hooks";
import {SvgProps} from "src/interfaces";
import {Touchable, Typography, Container} from "src/components/@system";

type SwitchButton = {
  label: string;
  onPress: () => void;
  icon: (props: SvgProps) => JSX.Element;
};

interface SwitchButtonProps {
  guideline?: string;
  defaultSelected?: number;
  buttons: [SwitchButton, SwitchButton];
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({
  buttons,
  guideline,
  defaultSelected,
}) => {
  const {colors} = useTheme();
  const [selected, setSelected] = useState<number>(defaultSelected ?? 0);
  return (
    <Container>
      {guideline && <Typography marginBottom={5}>{guideline}</Typography>}
      <View
        style={[
          STYLES["switch_button"],
          {backgroundColor: colors["HOVER_LIGHT"]},
        ]}
      >
        {buttons.map(({label, onPress, icon: Icon}, key) => {
          const buttonSelected = key === selected;
          return (
            <Touchable
              key={key}
              style={[
                STYLES["button"],
                STYLES[buttonSelected ? "selected" : "placeholder"],
              ]}
              onPress={() => {
                onPress();
                setSelected(key);
              }}
            >
              <Icon
                // prettier-ignore
                color={buttonSelected ? PALETTE["WHITE"] : colors['WHITE_BLACK']}
              />
              <Typography
                style={[
                  STYLES["button_label"],
                  // prettier-ignore
                  {color: buttonSelected ? PALETTE["WHITE"] : colors['WHITE_BLACK']},
                ]}
              >
                {label}
              </Typography>
            </Touchable>
          );
        })}
      </View>
    </Container>
  );
};
