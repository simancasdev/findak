import {Fragment} from "react";
import {Image} from "react-native";
import {Touchable} from "../Touchable";
import {RowScrollable} from "../RowScrollable";
import {BROKEN_IMAGE_PLACEHOLDER} from "src/components/@searches/Search/lib";

interface RowImagesProps {
  sources?: string[];
  size?: number;
  borderRadius?: number;
  onImagePress: (uri: string) => void;
}

export const RowImages: React.FC<RowImagesProps> = ({
  size = 50,
  sources = [],
  onImagePress,
  borderRadius = 5,
}) => {
  return !sources.length || typeof sources === "undefined" ? (
    <Fragment />
  ) : (
    <RowScrollable rowHeight={size + 5}>
      {sources.map((uri, key) => (
        <Touchable disabled={!uri} onPress={() => onImagePress(uri)} key={key}>
          <Image
            source={uri ? {uri} : BROKEN_IMAGE_PLACEHOLDER}
            style={{
              resizeMode: "cover",
              width: size,
              height: size,
              borderRadius,
            }}
          />
        </Touchable>
      ))}
    </RowScrollable>
  );
};
