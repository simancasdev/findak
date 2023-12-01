import {STYLES} from "./styles";
import {Touchable} from "../Touchable";
import {Typography} from "../Typography";
import {PALETTE, styleOS} from "src/styles";
import {Image, ImageStyle, StyleProp, View} from "react-native";

interface AvatarProps {
  src: string;
  size?: number;
  name?: string;
  onPress?: () => void;
  style?: StyleProp<ImageStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  style,
  onPress,
  size = 50,
}) => {
  return (
    <Touchable
      onPress={onPress}
      disabled={typeof onPress === "undefined"}
      style={[STYLES["avatar"], {width: size, height: size}]}
    >
      {src ? (
        <Image
          style={[STYLES["image"], {width: size, height: size}, style]}
          source={{uri: src}}
        />
      ) : (
        <View
          style={[
            STYLES["image"],
            STYLES["placeholder"],
            {width: size, height: size},
            style,
          ]}
        >
          <Typography
            fontSize={size / 2.2}
            fontWeight={styleOS("500")}
            style={{color: PALETTE["WHITE"]}}
          >
            {name?.slice(0, 1)}
          </Typography>
        </View>
      )}
    </Touchable>
  );
};
