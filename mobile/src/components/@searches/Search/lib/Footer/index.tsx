import {STYLES} from "./styles";
import {View} from "react-native";
import {useLang} from "src/hooks";
import {Tag as TagIcon} from "src/svg";
import {useSearch} from "../../context";
import {PALETTE, styleOS} from "src/styles";
import {Column, Row, Tag, Typography} from "src/components/@system";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const {t} = useLang();
  const {search, footerStyle} = useSearch();
  const {budget, category} = search;

  return (
    <View style={[STYLES["footer"], footerStyle]}>
      <Row gap={8} justifyContent="space-between" fullWidth>
        <Column gap={0}>
          <Typography fontSize={18} fontWeight={styleOS("600")}>
            ${budget}
          </Typography>
          <Typography fontWeight={styleOS("400")} fontSize={10}>
            {t("budget")}
          </Typography>
        </Column>
        <Tag
          maxLabelLength={25}
          label={t(category["name"])}
          icon={<TagIcon color={PALETTE["WHITE"]} />}
        />
      </Row>
    </View>
  );
};
