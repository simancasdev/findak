import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {PALETTE, styleOS} from "src/styles";
import {Style, SvgProps} from "src/interfaces";
import {useLayoutEffect, useState} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {Touchable, RowScrollable, Typography, Column} from "..";

type Tab = {
  title: string;
  view: JSX.Element;
  icon: (props: SvgProps) => JSX.Element;
};

interface TabsProps extends Style {
  tabs: Tab[];
  gap?: number;
  rowTabStyle?: StyleProp<ViewStyle>;
}

const INITIAL_TAB = 0;

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  style,
  gap = 10,
  rowTabStyle,
}) => {
  const {colors} = useTheme();
  const [tabIndex, setTabIndex] = useState<number>();
  const [view, setView] = useState<JSX.Element>();

  useLayoutEffect(() => {
    setTabIndex(tabIndex ?? INITIAL_TAB);
    setView(tabs[tabIndex ?? INITIAL_TAB].view);
  }, [tabs, tabIndex]);

  return (
    <Column gap={gap} style={[STYLES["tabs"], style]}>
      <RowScrollable rowHeight={45} fullWidth gap={5} style={rowTabStyle}>
        {tabs.map(({title, icon: Icon}, key) => {
          const isSelected = tabIndex === key;
          return (
            <Touchable
              key={key}
              style={[
                STYLES["href"],
                {
                  backgroundColor: isSelected
                    ? colors["CARD"]
                    : PALETTE["TRANSPARENT"],
                },
              ]}
              onPress={() => {
                setView(tabs[key]["view"]);
                setTabIndex(key);
              }}
            >
              <Icon size={15} color={colors["WHITE_BLACK"]} />
              <Typography
                marginLeft={5}
                fontWeight={isSelected ? styleOS("500") : styleOS("400")}
              >
                {title}
              </Typography>
              {isSelected && <View style={STYLES["highlighted"]} />}
            </Touchable>
          );
        })}
      </RowScrollable>
      <View style={{width: "100%"}}>{view}</View>
    </Column>
  );
};
