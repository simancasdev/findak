import {Send} from "src/svg";
import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {Image} from "react-native";
import {TValue} from "src/languages";
import {Row, Column, Guideline, Typography} from "src/components/@system";

interface OfferMockupProps {
  text: string;
  avatarUrl: any;
}

export const OfferMockup: React.FC<OfferMockupProps> = ({avatarUrl, text}) => {
  const {t} = useLang();
  return (
    <Row style={[STYLES["offer_mockup"]]}>
      <Column style={STYLES["body"]}>
        <Guideline
          fontSize={10}
          icon={<Send size={14} color={PALETTE["WHITE"]} />}
          labelStyle={{color: PALETTE["WHITE"]}}
        >
          {t("sent_an_offer")}
        </Guideline>
        <Typography style={STYLES["offer_text"]}>
          {t(text as TValue)}
        </Typography>
      </Column>
      <Image source={avatarUrl} style={STYLES["avatar"]} />
    </Row>
  );
};
