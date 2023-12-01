import {PALETTE} from "src/styles";
import {NavigatorView} from "src/hoc";
import {useChangeStatusBar} from "src/hooks";
import {Screen} from "src/components/@system";
import {AuthActions, Hero, LandingHeader} from "src/components/@welcome";

interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  useChangeStatusBar({
    bottomEdgeColor: PALETTE["PRIMARY"],
    topEdgeColor: PALETTE["PRIMARY"],
  });

  return (
    <NavigatorView viewName="Landing">
      <Screen style={{backgroundColor: PALETTE["PRIMARY"]}}>
        <LandingHeader />
        <Hero />
        <AuthActions />
      </Screen>
    </NavigatorView>
  );
};
