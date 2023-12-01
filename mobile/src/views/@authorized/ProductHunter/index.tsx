import {useLang} from "src/hooks";
import {NavigatorView} from "src/hoc";
import {Screen} from "src/components/@system";
import {AvailableSoon} from "src/components/AvailableSoon";

interface ProductHunterProps {}

export const ProductHunter: React.FC<ProductHunterProps> = () => {
  const {t} = useLang();
  return (
    <NavigatorView viewName="ProductHunter">
      <Screen title={t("product_hunter")} style={{paddingHorizontal: 15}}>
        <AvailableSoon />
      </Screen>
    </NavigatorView>
  );
};
