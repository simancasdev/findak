import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import {FeedbackSkeleton} from "../@components/Feedback";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const ProfileScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={10} marginVertical={10}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            width={70}
            height={70}
            borderRadius={100}
            marginRight={10}
          />
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 120}>
            <SkeletonPlaceholder.Item
              height={45}
              flexDirection="row"
              alignItems="center"
            />
            <SkeletonPlaceholder.Item
              height={35}
              width={120}
              marginTop={10}
              flexDirection="row"
              alignItems="center"
            />
            <SkeletonPlaceholder.Item
              height={120}
              width={250}
              marginTop={10}
              flexDirection="row"
              alignItems="center"
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>

      <SkeletonPlaceholder
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item
            width={140}
            height={170}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            marginLeft={5}
            width={140}
            height={170}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            marginLeft={5}
            width={140}
            height={170}
            borderRadius={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>

      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          width={120}
          height={50}
        />
      </SkeletonPlaceholder>
      <FeedbackSkeleton />
      <FeedbackSkeleton />
      <FeedbackSkeleton />
    </Column>
  );
};
