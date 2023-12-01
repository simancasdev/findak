import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const OfferScreenSkeleton: React.FC<SkeletonProps> = () => {
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
          <SkeletonPlaceholder.Item
            flexDirection="row"
            width={WIDTH_SCREEN - 35}
            alignItems="center"
            justifyContent="center"
          >
            <SkeletonPlaceholder.Item
              width={60}
              height={60}
              borderRadius={100}
            />
            <SkeletonPlaceholder.Item
              width={50}
              height={50}
              borderRadius={100}
              marginHorizontal={10}
            />
            <SkeletonPlaceholder.Item
              width={60}
              height={60}
              borderRadius={100}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 20} marginTop={20}>
            <SkeletonPlaceholder.Item
              marginBottom={10}
              width={150}
              height={30}
            />
            <SkeletonPlaceholder.Item height={150} width={WIDTH_SCREEN - 35} />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 20} marginTop={20}>
            <SkeletonPlaceholder.Item
              marginBottom={10}
              width={150}
              height={30}
            />
            <SkeletonPlaceholder.Item height={95} width={WIDTH_SCREEN - 35} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Column>
  );
};
