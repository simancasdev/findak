import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const TradeSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <SkeletonPlaceholder
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          height={35}
          marginBottom={2}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          width={WIDTH_SCREEN - 20}
        />
        <SkeletonPlaceholder.Item
          height={100}
          marginBottom={0}
          width={WIDTH_SCREEN - 20}
          borderBottomLeftRadius={5}
          borderBottomRightRadius={5}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
