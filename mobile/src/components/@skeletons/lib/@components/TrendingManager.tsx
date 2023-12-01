import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const TrendingManagerSkeleton: React.FC<SkeletonProps> = ({style}) => {
  const {colors} = useTheme();

  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item
        style={[{paddingHorizontal: 20, marginTop: 10}, style]}
      >
        <SkeletonPlaceholder.Item width={200} height={30} marginBottom={5} />
        <SkeletonPlaceholder.Item
          marginBottom={5}
          width={WIDTH_SCREEN - 40}
          height={30}
        />
        <SkeletonPlaceholder.Item
          marginBottom={5}
          width={WIDTH_SCREEN - 40}
          height={30}
        />
        <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 40} height={30} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
