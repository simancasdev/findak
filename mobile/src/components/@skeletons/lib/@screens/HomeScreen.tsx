import {useTheme} from "src/hooks";
import {WIDTH_SCREEN} from "src/utils";
import {SkeletonProps} from "../../types";
import {Column} from "src/components/@system";
import {SKELETON_ANIMATION_SPEED} from "../../config";
import {SearchAlertSkeleton} from "../@components/SearchAlert";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export const HomeScreenSkeleton: React.FC<SkeletonProps> = () => {
  const {colors} = useTheme();
  return (
    <Column gap={0} style={{marginTop: -20}}>
      <SkeletonPlaceholder
        borderRadius={4}
        speed={SKELETON_ANIMATION_SPEED}
        highlightColor={colors["BACKGROUND_SKELETON_HIGHLIGHT"]}
        backgroundColor={colors["BACKGROUND_SKELETON"]}
      >
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          padding={15}
        >
          <SkeletonPlaceholder.Item width={WIDTH_SCREEN / 1.3} height={30} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <Column>
        <SearchAlertSkeleton />
        <SearchAlertSkeleton />
        <SearchAlertSkeleton />
        <SearchAlertSkeleton />
      </Column>
    </Column>
  );
};
