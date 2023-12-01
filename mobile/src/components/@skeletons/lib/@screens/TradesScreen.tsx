import {useTheme} from "src/hooks";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {TradeSkeleton} from "../@components/Trade";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const TradesScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={15} style={{marginTop: 0}}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={100} height={45} borderRadius={5} />
          <SkeletonPlaceholder.Item
            width={100}
            height={45}
            borderRadius={5}
            marginLeft={5}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={45}
            borderRadius={5}
            marginLeft={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <Column>
        <TradeSkeleton />
        <TradeSkeleton />
        <TradeSkeleton />
        <TradeSkeleton />
      </Column>
    </Column>
  );
};
