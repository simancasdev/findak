import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const UserPresentationSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();

  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <SkeletonPlaceholder.Item
          height={80}
          marginLeft={14}
          width={WIDTH_SCREEN - 25}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
