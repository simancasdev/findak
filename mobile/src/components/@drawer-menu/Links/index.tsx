import {memo} from "react";
import {links} from "./links";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {useNavigation} from "@react-navigation/native";
import {selectNavigatorState, toggleDrawer} from "src/redux/slices";
import {Column, Guideline, Row, Touchable, Typography} from "../../@system";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";

interface LinksProps {}

export const Links: React.FC<LinksProps> = memo(() => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<any>();
  const {currentView} = useAppSelector(selectNavigatorState);

  return (
    <Column gap={0} style={[STYLES["links"]]}>
      <Guideline style={{marginHorizontal: 10}}>{t("navigation")}</Guideline>
      {links.map(({path, label, Icon}, key) => {
        const isHighlighted: boolean = currentView === path;
        // prettier-ignore
        const iconColor = isHighlighted ? PALETTE["PRIMARY"] : colors["WHITE_BLACK"];
        // prettier-ignore
        const textColor = isHighlighted ? PALETTE["PRIMARY"] : colors["TEXT"];

        return (
          <Touchable
            key={key}
            style={STYLES["link"]}
            onPress={() => {
              navigate(path as any);
              dispatch(toggleDrawer(false));
            }}
          >
            <Row gap={18}>
              <Icon size={20} strokeWidth={1.7} color={iconColor} />
              <Typography style={[STYLES["link_label"], {color: textColor}]}>
                {t(label)}
              </Typography>
            </Row>
          </Touchable>
        );
      })}
    </Column>
  );
});
