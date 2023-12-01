import {STYLES} from "./styles";
import {View} from "react-native";
import {Row, Typography} from "..";
import {PALETTE, styleOS} from "src/styles";

interface BadgeProps {
  label: string;
  dotColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  dotColor = PALETTE["PRIMARY"],
}) => {
  return (
    <Row style={STYLES["badge"]}>
      <View style={[STYLES["dot"], {backgroundColor: dotColor}]} />
      <Typography fontWeight={styleOS("500")}>{label}</Typography>
    </Row>
  );
};
