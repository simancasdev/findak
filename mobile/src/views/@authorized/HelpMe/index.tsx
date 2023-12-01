import {useLang} from "src/hooks";
import {Edit, Support} from "src/svg";
import {NavigatorView} from "src/hoc";
import {MyReports, Report} from "./tabs";
import {Screen, Tabs} from "src/components/@system";

interface HelpMeProps {}

export const HelpMe: React.FC<HelpMeProps> = () => {
  const {t} = useLang();

  return (
    <NavigatorView viewName="HelpMe">
      <Screen
        title={t("help_me")}
        style={{paddingHorizontal: 15}}
        headStyle={{paddingHorizontal: 0}}
      >
        <Tabs
          tabs={[
            {title: t("create"), icon: Edit, view: <Report />},
            {title: t("my_reports"), icon: Support, view: <MyReports />},
          ]}
        />
      </Screen>
    </NavigatorView>
  );
};
