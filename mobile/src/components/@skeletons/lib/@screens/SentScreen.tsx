import {useTheme} from "src/hooks";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import {OfferSentSkeleton} from "../@components/OfferSent";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const SentScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={15} style={{marginTop: 0}}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item
          paddingHorizontal={10}
          flexDirection="row"
          alignItems="center"
        >
          <SkeletonPlaceholder.Item width={100} height={50} borderRadius={2} />
          <SkeletonPlaceholder.Item
            width={100}
            height={50}
            borderRadius={2}
            marginLeft={5}
          />
          <SkeletonPlaceholder.Item
            width={100}
            height={50}
            borderRadius={2}
            marginLeft={5}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <Column>
        <OfferSentSkeleton />
        <OfferSentSkeleton />
        <OfferSentSkeleton />
      </Column>
    </Column>
  );
};
