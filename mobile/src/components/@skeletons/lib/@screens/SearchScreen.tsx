import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SearchScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={10} marginVertical={10}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            width={180}
            height={45}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginLeft={5}
            width={150}
            height={45}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>

      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              width={50}
              height={50}
              borderRadius={100}
            />
            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              marginLeft={15}
              width={200}
              height={65}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginTop={10}
            width={WIDTH_SCREEN - 50}
            height={90}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>

      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item flexDirection="column">
          <SkeletonPlaceholder.Item width={100} height={30} marginBottom={10} />
          <SkeletonPlaceholder.Item
            height={80}
            marginBottom={10}
            width={WIDTH_SCREEN - 100}
          />
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 100} height={80} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Column>
  );
};
