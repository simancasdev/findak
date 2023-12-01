import {Send} from "src/svg";
import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {useReceived} from "../../context";
import {openMultimedia} from "src/redux/slices";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {
  Row,
  Column,
  Guideline,
  RowImages,
  Typography,
} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {offer} = useReceived();
  const dispatch = useAppDispatch();
  const {sender, description, price, references_url} = offer;

  return (
    <Row style={STYLES["body"]} justifyContent="space-between">
      <Column gap={0} style={STYLES["content"]}>
        <Guideline
          labelStyle={{fontWeight: styleOS("600")}}
          icon={<Send size={12} color={colors["WHITE_BLACK"]} />}
        >
          {sender["first_name"]} {t("sent_you_an_offer")}
        </Guideline>
        <Typography marginVertical={10}>{description}</Typography>
        <RowImages
          size={80}
          sources={references_url}
          onImagePress={(uri) =>
            dispatch(
              openMultimedia({
                sources: references_url,
                initialSource: uri,
                UIProps: {
                  title: `${t("offer_from")} ${sender["first_name"]}`,
                  helperText: `${t("cost")} $${price}`,
                },
              })
            )
          }
        />
      </Column>
      <Column alignItems="center">
        <Typography fontWeight={styleOS("700")} fontSize={18} marginRight={5}>
          ${price}
        </Typography>
        <Typography fontSize={12}>{t("cost")}</Typography>
      </Column>
    </Row>
  );
};
