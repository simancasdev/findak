import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {Talking, Map} from "src/svg";
import {useSearchPreview} from "../../context";
import {useLang, useMoment, useTheme} from "src/hooks";
import {Guideline, Row, Touchable, Typography} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {moment} = useMoment();
  const {colors} = useTheme();
  const {search, onPress, bodyStyle, descriptionNumeberOfLines} =
    useSearchPreview();
  const {description, budget, id, location, createdAt} = search;
  const {city} = location;
  const disableOnPress = typeof onPress === "undefined";

  return (
    <Touchable
      disabled={disableOnPress}
      style={[STYLES["body"], bodyStyle]}
      onPress={() => {
        if (disableOnPress) return;
        onPress(id);
      }}
    >
      <Row justifyContent="space-between">
        <Guideline
          fontSize={11}
          icon={<Talking size={14} color={colors["WHITE_BLACK"]} />}
        >
          {t("looking_for")}
        </Guideline>
        <Typography fontSize={11}>{moment(createdAt).fromNow()}</Typography>
      </Row>
      <Typography
        fontSize={15}
        marginVertical={6}
        numberOfLines={descriptionNumeberOfLines}
      >
        {description}
      </Typography>
      <Row justifyContent="space-between">
        <Row>
          <Typography fontWeight={styleOS("500")} fontSize={15}>
            {t("i_have")}
          </Typography>
          <Typography fontSize={15} fontWeight={styleOS("500")}>
            ${budget}
          </Typography>
        </Row>
        <Row>
          <Map strokeWidth={3} size={14} color={colors["WHITE_BLACK"]} />
          <Typography fontSize={14} fontWeight={styleOS("500")}>
            {city["name"]}
          </Typography>
        </Row>
      </Row>
    </Touchable>
  );
};
