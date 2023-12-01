import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const ProductScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={0}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN} height={300} />
          <SkeletonPlaceholder.Item
            marginTop={15}
            height={100}
            width={WIDTH_SCREEN - 80}
          />
          <SkeletonPlaceholder.Item
            marginTop={15}
            height={50}
            width={WIDTH_SCREEN}
          />
          <SkeletonPlaceholder.Item
            marginTop={15}
            height={35}
            marginLeft={25}
            width={WIDTH_SCREEN - 50}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Column>
  );
};
