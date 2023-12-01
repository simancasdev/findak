import {STYLES} from "./styles";
import {View} from "react-native";
import {Style} from "src/interfaces";
import {Typography} from "../../@system";

interface TagProps extends Style {
  label: string;
  icon: JSX.Element;
  maxLabelLength?: number;
}

export const Tag: React.FC<TagProps> = ({
  icon,
  style,
  label,
  maxLabelLength = label.length,
}) => {
  return (
    <View style={[STYLES["tag"], style]}>
      {icon}
      <Typography style={[STYLES["label"]]}>
        {label.slice(0, maxLabelLength)}
        {label.length > maxLabelLength ? "..." : ""}
      </Typography>
      <View style={STYLES["decorator"]} />
    </View>
  );
};
