import {Check} from "src/svg";
import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {PALETTE, styleOS} from "src/styles";
import {Touchable, Typography} from "src/components/@system";
import {Image, StyleProp, TextStyle, View} from "react-native";

interface BoxButtonProps {
  image?: any;
  size?: number;
  label: string;
  svg?: JSX.Element;
  imageSize?: number;
  onPress: () => void;
  isSelected?: boolean;
  labelStyle?: StyleProp<TextStyle>;
}

export const BoxButton: React.FC<BoxButtonProps> = ({
  svg,
  image,
  label,
  onPress,
  isSelected,
  labelStyle,
  size = 100,
  imageSize = 50,
}) => {
  const {colors} = useTheme();
  const selectable = typeof isSelected !== "undefined";
  const highlighted = selectable && isSelected;

  return (
    <Touchable
      onPress={onPress}
      style={[
        STYLES["box_button"],
        {
          width: size,
          height: size,
          borderWidth: highlighted ? 1.5 : 0.5,
          borderColor: highlighted ? PALETTE["PRIMARY"] : colors["BORDER"],
        },
      ]}
    >
      {image ? (
        <Image
          defaultSource={image}
          style={[STYLES["image"], {width: imageSize, height: imageSize}]}
        />
      ) : svg ? (
        svg
      ) : null}
      <Typography
        fontWeight={styleOS("500")}
        style={[
          labelStyle,
          {
            color: highlighted ? PALETTE["PRIMARY"] : colors["TEXT"],
          },
        ]}
      >
        {label}
      </Typography>
      {highlighted && (
        <View style={STYLES["is_selected"]}>
          <Check size={15} color={PALETTE["WHITE"]} strokeWidth={3} />
        </View>
      )}
    </Touchable>
  );
};
