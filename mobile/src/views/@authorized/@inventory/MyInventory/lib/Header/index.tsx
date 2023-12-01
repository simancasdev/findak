import {PALETTE} from "src/styles";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {useLang, useTheme} from "src/hooks";
import {ChevronRight, Edit, List, Plus} from "src/svg";
import {useNavigation} from "@react-navigation/native";
import {Column, RowButton} from "src/components/@system";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} =
    useNavigation<
      ViewParam<"UploadProduct" | "ManageCollection" | "MyProductsList">
    >();

  return (
    <ComponentSeparator marginVertical={20}>
      <Column>
        <RowButton
          iconBoxColor={PALETTE["PRIMARY"]}
          label={t("my_products_list")}
          onPress={() => navigate("MyProductsList")}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          icon={<List size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
        />
        <RowButton
          iconBoxColor={PALETTE["SECONDARY"]}
          label={t("new_product_or_service")}
          onPress={() => navigate("UploadProduct")}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          icon={<Plus size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
        />
        <RowButton
          iconBoxColor={PALETTE["TERTIARY"]}
          label={t("manage_collections")}
          onPress={() => navigate("ManageCollection")}
          rightIcon={<ChevronRight color={colors["WHITE_BLACK"]} />}
          icon={<Edit size={14} strokeWidth={3} color={PALETTE["WHITE"]} />}
        />
      </Column>
    </ComponentSeparator>
  );
};
