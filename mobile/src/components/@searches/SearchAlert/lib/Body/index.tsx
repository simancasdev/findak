import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {Talking, Map} from "src/svg";
import {useSearchAlert} from "../../context";
import {openMultimedia} from "src/redux/slices";
import {useAppDispatch, useLang, useMoment, useTheme} from "src/hooks";
import {
  Row,
  Guideline,
  RowImages,
  Touchable,
  Typography,
} from "src/components/@system";

interface BodyProps {}

export const Body: React.FC<BodyProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {moment} = useMoment();
  const dispatch = useAppDispatch();
  const {search, onPress} = useSearchAlert();
  const {description, budget, id, location, createdAt, references_url, user} =
    search;
  const {city} = location;

  return (
    <Touchable
      onPress={() => onPress(id)}
      style={[STYLES["body"], {backgroundColor: colors["CARD"]}]}
    >
      <Row>
        <Guideline
          fontSize={11}
          icon={<Talking size={14} color={colors["WHITE_BLACK"]} />}
        >
          {t("looking_for")} ―
        </Guideline>
        <Typography fontSize={11}>{moment(createdAt).fromNow()}</Typography>
      </Row>
      <Typography marginVertical={6}>{description}</Typography>
      {references_url && !!references_url.length && (
        <RowImages
          size={100}
          sources={references_url}
          onImagePress={(initialSource) =>
            dispatch(
              openMultimedia({
                sources: references_url,
                initialSource,
                UIProps: {
                  title: t("reference_images"),
                  helperText: `${user["first_name"]} ${t(
                    "is_willing_to_pay"
                  )} $${budget}`,
                },
              })
            )
          }
        />
      )}
      <Row marginTop={5} justifyContent="space-between">
        <Row>
          <Typography fontWeight={styleOS("500")} fontSize={12}>
            {t("budget")}
          </Typography>
          <Typography fontWeight={styleOS("600")}>${budget}</Typography>
        </Row>
        <Row>
          <Map strokeWidth={3} size={12} color={colors["WHITE_BLACK"]} />
          <Typography fontSize={12} fontWeight={styleOS("500")}>
            {city["name"]}
          </Typography>
        </Row>
      </Row>
    </Touchable>
  );
};
