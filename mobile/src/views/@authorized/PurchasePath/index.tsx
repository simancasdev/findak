import {useLang} from "src/hooks";
import {NavigatorView} from "src/hoc";
import {Screen} from "src/components/@system";
import {AvailableSoon} from "src/components/AvailableSoon";

interface PurchasePathProps {}

export const PurchasePath: React.FC<PurchasePathProps> = () => {
  const {t} = useLang();
  return (
    <NavigatorView viewName="PurchasePath">
      <Screen title={t("purchase_path")} style={{paddingHorizontal: 15}}>
        <AvailableSoon />
      </Screen>
    </NavigatorView>
  );
};
