import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SearchAlertSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      speed={SKELETON_ANIMATION_SPEED}
      highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
      backgroundColor={colors["BACKGROUND_SKELETON"]}
    >
      <SkeletonPlaceholder.Item
        marginBottom={8}
        flexDirection="row"
        paddingHorizontal={15}
        alignItems="flex-start"
      >
        <SkeletonPlaceholder.Item width={35} height={35} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 80} height={80} />
          <SkeletonPlaceholder.Item
            width={WIDTH_SCREEN - 80}
            height={40}
            marginTop={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
