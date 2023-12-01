import {Typography} from "..";
import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {ScreenProps} from "./types";
import {useEffect, useState} from "react";
import {View, ScrollView, RefreshControl} from "react-native";
import {useEffectWhenIsFocused, useEffectWhenLeave, useTheme} from "src/hooks";

export const Screen: React.FC<ScreenProps> = ({
  title,
  style,
  header,
  children,
  headStyle,
  contentStyle,
  refreshControl,
  onScreenMounted,
  onScreenUnMount,
  contentInset = {bottom: 70},
}) => {
  const {colors} = useTheme();
  const [showRefreshControl, setShowRefreshControl] = useState<boolean>(false);

  useEffect(() => {
    setShowRefreshControl(false);
    if (typeof refreshControl === "undefined") return;
    const {refreshing} = refreshControl;
    if (!refreshing) setShowRefreshControl(true);
  }, [refreshControl]);

  useEffectWhenIsFocused(() => {
    if (onScreenMounted) onScreenMounted();
  }, []);

  useEffectWhenLeave(() => {
    if (onScreenUnMount) onScreenUnMount();
  }, []);

  return (
    <ScrollView
      contentInset={contentInset}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      style={[{flexGrow: 1, paddingTop: styleOS(0, 15)}, style]}
      refreshControl={
        refreshControl && (
          <RefreshControl
            onRefresh={refreshControl["onRefresh"]}
            refreshing={refreshControl["refreshing"] && showRefreshControl}
            tintColor={refreshControl["tintColor"] ?? colors["WHITE_BLACK"]}
            style={{
              backgroundColor:
                refreshControl["backgroundColor"] ?? colors["HEADER"],
            }}
          />
        )
      }
    >
      {title || header ? (
        <View style={{backgroundColor: colors["HEADER"]}}>
          {title && (
            <View style={[STYLES["screen_head"], headStyle]}>
              <Typography style={STYLES["title"]}>{title}</Typography>
            </View>
          )}
          {typeof header !== "undefined" && header}
        </View>
      ) : null}
      <View style={contentStyle}>{children}</View>
    </ScrollView>
  );
};
