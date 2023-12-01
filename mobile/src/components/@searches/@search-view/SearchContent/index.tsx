import {PALETTE, styleOS} from "src/styles";
import {Tag as TagIcon, Gallery} from "src/svg";
import {openMultimedia, selectSearchState} from "src/redux/slices";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  Tag,
  Row,
  Column,
  RowImages,
  Guideline,
  Typography,
} from "src/components/@system";

interface SearchContentProps {}

export const SearchContent: React.FC<SearchContentProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {description, references_url, budget, category, user} =
    useAppSelector(selectSearchState)["search"];
  const areReferences = references_url && !!references_url.length;

  return (
    <Column marginTop={10} gap={areReferences ? 15 : 4}>
      <Typography fontSize={18}>{description}</Typography>
      {areReferences && (
        <Column gap={0}>
          <Guideline
            marginBottom={10}
            icon={<Gallery size={15} color={colors["WHITE_BLACK"]} />}
          >
            {t("reference_images")}
          </Guideline>
          <RowImages
            size={130}
            sources={references_url}
            onImagePress={(initialSource) =>
              dispatch(
                openMultimedia({
                  sources: references_url ?? [],
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
        </Column>
      )}
      <Row gap={20} justifyContent="space-between" fullWidth>
        <Column gap={0}>
          <Typography fontSize={20} fontWeight={styleOS("600")}>
            ${budget}
          </Typography>
          <Typography fontWeight={styleOS("400")} fontSize={10}>
            {t("budget")}
          </Typography>
        </Column>
        <Tag
          label={t(category["name"])}
          icon={<TagIcon color={PALETTE["WHITE"]} />}
        />
      </Row>
    </Column>
  );
};
