import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {View} from "react-native";
import {Typography, Input, Row, InputProps} from "src/components/@system";

interface BudgetProps extends InputProps {
  guideline?: string;
}

export const Budget: React.FC<BudgetProps> = (props) => {
  const {guideline, ...rest} = props;
  const {colors} = useTheme();

  return (
    <View>
      {guideline && <Typography>{guideline}</Typography>}
      <Row gap={0} alignItems="flex-start" style={{position: "relative"}}>
        <Typography
          fontSize={34}
          style={{
            position: "absolute",
            top: 14,
            color: props["value"]
              ? colors["WHITE_BLACK"]
              : colors["INPUT_PLACEHOLDER"],
          }}
        >
          $
        </Typography>
        <Input
          {...rest}
          placeholder="0,00"
          returnKeyType="done"
          style={STYLES["input"]}
          keyboardType="decimal-pad"
        />
      </Row>
    </View>
  );
};
