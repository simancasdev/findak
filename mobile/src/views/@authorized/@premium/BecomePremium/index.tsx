import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {useChangeStatusBar, useTheme} from "src/hooks";
import {PremiumPackage, Payment} from "src/components/@premium";

interface BecomePremiumProps {}

export const BecomePremium: React.FC<BecomePremiumProps> = () => {
  const {colors} = useTheme();
  useChangeStatusBar({
    bottomEdgeColor: colors["BACKGROUND_VIEW"],
    topEdgeColor: PALETTE["PRIMARY"],
  });

  return (
    <NavigatorView viewName="BecomePremium">
      <PremiumPackage />
      <Payment />
    </NavigatorView>
  );
};
