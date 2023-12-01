import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const FeedbackSkeleton: React.FC<SkeletonProps> = ({style}) => {
  const {colors} = useTheme();

  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item
        style={style}
        flexDirection="row"
        alignItems="center"
      >
        <SkeletonPlaceholder.Item width={25} height={25} borderRadius={100} />
        <SkeletonPlaceholder.Item
          marginLeft={10}
          width={WIDTH_SCREEN - 70}
          height={60}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
