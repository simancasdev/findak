import {Crown} from "src/svg";
import {Children} from "src/interfaces";
import {useAppSelector} from "src/hooks";
import {Row} from "src/components/@system";
import {selectAuthState} from "src/redux/slices";

interface PremiumInsightProps extends Children {
  size?: number;
  isPremium?: boolean;
}

export const PremiumInsight: React.FC<PremiumInsightProps> = ({
  size = 15,
  children,
  isPremium,
}) => {
  const {isAuthUserPremium} = useAppSelector(selectAuthState);
  const showInsight = isPremium ?? isAuthUserPremium;
  return (
    <Row gap={showInsight ? 5 : 0}>
      {showInsight && <Crown size={size} />}
      {children}
    </Row>
  );
};
