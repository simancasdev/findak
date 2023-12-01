import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SearchSkeleton} from "../@components/Search";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const TodayTrendingScreenSkeleton: React.FC<SkeletonProps> = ({
  style,
}) => {
  const {colors} = useTheme();

  return (
    <Column>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item
          style={[
            {paddingHorizontal: 15, marginTop: 10, marginBottom: 20},
            style,
          ]}
        >
          <SkeletonPlaceholder.Item
            marginBottom={5}
            width={WIDTH_SCREEN - 40}
            height={30}
          />
          <SkeletonPlaceholder.Item
            marginBottom={5}
            width={WIDTH_SCREEN - 40}
            height={30}
          />
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN - 40} height={30} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SearchSkeleton />
      <SearchSkeleton />
      <SearchSkeleton />
    </Column>
  );
};
