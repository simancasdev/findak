import {STYLES} from "./styles";
import {Talking} from "src/svg";
import {useLang} from "src/hooks";
import {Image} from "react-native";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {Row, Column, Guideline, Typography} from "src/components/@system";

interface SearchMockupProps {
  text: TValue;
  avatarUrl: any;
}

export const SearchMockup: React.FC<SearchMockupProps> = ({
  avatarUrl,
  text,
}) => {
  const {t} = useLang();
  return (
    <Row style={[STYLES["search_mockup"]]}>
      <Image source={avatarUrl} style={STYLES["avatar"]} />
      <Column style={STYLES["body"]}>
        <Guideline
          fontSize={10}
          icon={<Talking size={14} color={PALETTE["WHITE"]} />}
          labelStyle={{color: PALETTE["WHITE"]}}
        >
          {t("looking_for")}
        </Guideline>
        <Typography style={STYLES["search_text"]}>{t(text)}</Typography>
      </Column>
    </Row>
  );
};
