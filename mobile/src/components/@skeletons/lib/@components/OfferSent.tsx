import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const OfferSentSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item
        height={120}
        marginLeft={10}
        marginBottom={0}
        width={WIDTH_SCREEN - 40}
      />
    </SkeletonPlaceholder>
  );
};
