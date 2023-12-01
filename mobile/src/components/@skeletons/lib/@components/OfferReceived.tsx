import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const OfferReceivedSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          height={35}
          width={35}
          borderRadius={100}
          marginLeft={10}
          marginBottom={0}
        />
        <SkeletonPlaceholder.Item
          height={80}
          marginLeft={10}
          marginBottom={0}
          width={WIDTH_SCREEN - 90}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
