import {PALETTE} from "src/styles";
import {containerStyle} from "../styles";
import {ViewParam} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {ChevronRight, Inventory, X} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {Column, RowButton, Section} from "src/components/@system";

interface MyInventoryProps {}

export const MyInventory: React.FC<MyInventoryProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"MyInventory">>();

  return (
    <Section
      marginTop={20}
      title={t("my_inventory")}
      containerStyle={containerStyle}
    >
      <Column>
        <RowButton
          iconBoxColor={PALETTE["SECONDARY"]}
          onPress={() => navigate("MyInventory")}
          label={t("see_my_products_and_services")}
          icon={
            <Inventory size={14} strokeWidth={3} color={PALETTE["WHITE"]} />
          }
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
        />
      </Column>
    </Section>
  );
};
