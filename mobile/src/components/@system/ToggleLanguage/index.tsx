import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {ChevronDown, Globe} from "src/svg";
import {Language, Style} from "src/interfaces";
import {closeSheet, openSheet} from "src/redux/slices";
import {useAppDispatch, useLang, useStorage, useTheme} from "src/hooks";
import {Column, List, Row, Touchable, Typography} from "src/components/@system";

interface ToggleLanguageProps extends Style {
  onPress?: () => void;
  labelIconColor?: string;
}

export const ToggleLanguage: React.FC<ToggleLanguageProps> = ({
  onPress,
  style,
  labelIconColor,
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {save} = useStorage();
  const dispatch = useAppDispatch();
  const {language, changeLanguage} = useLang();

  return (
    <Touchable
      style={[
        STYLES["toggle"],
        {backgroundColor: colors["LANGUAGE_TOGGLE"]},
        style,
      ]}
      onPress={() => {
        if (typeof onPress !== "undefined") onPress();

        dispatch(
          openSheet({
            snapPoints: ["25%", "28%"],
            view: (
              <Column>
                <Typography fontSize={18} fontWeight={styleOS("500")}>
                  {t("change_language")}
                </Typography>
                <List
                  defaultValue={language}
                  defaultIcon={Globe}
                  onSelect={async (id) => {
                    await save("@language", id);
                    changeLanguage(id as Language);
                    dispatch(closeSheet());
                  }}
                  data={[
                    {id: "en", name: t("english")},
                    {id: "es", name: t("spanish")},
                  ]}
                />
              </Column>
            ),
          })
        );
      }}
    >
      <Row gap={5} justifyContent="space-between">
        <Typography
          style={{
            color: labelIconColor ?? colors["WHITE_BLACK"],
            fontWeight: styleOS("500"),
          }}
        >
          {t(language === "en" ? "english" : "spanish")}
        </Typography>
        <ChevronDown color={labelIconColor ?? colors["WHITE_BLACK"]} />
      </Row>
    </Touchable>
  );
};
