import {Fragment} from "react";
import {styleOS} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {RowScrollableProps} from "./types";
import {ScrollView, View} from "react-native";
import {Typography, Button, Row, Column} from "../";

export const RowScrollable: React.FC<RowScrollableProps> = ({
  style,
  topBar,
  gap = 5,
  children,
  marginTop,
  rowHeight,
  marginBottom,
  fullWidth = false,
  marginVertical = 0,
  alignItems = "center",
  contentInset = {right: 15},
  justifyContent = "flex-start",
}) => {
  const showTopBar = typeof topBar !== "undefined";

  return (
    <Column style={style} gap={showTopBar ? 5 : 0}>
      {showTopBar && (
        <Row justifyContent="space-between" fullWidth marginBottom={10}>
          <Typography
            style={[
              {fontSize: 15, fontWeight: styleOS("600")},
              topBar["titleStyle"],
            ]}
          >
            {topBar["title"]}
          </Typography>
          {topBar["action"] && (
            <Button
              variant="text_only"
              label={topBar["action"]["label"]}
              onPress={topBar["action"]["onPress"]}
            />
          )}
        </Row>
      )}
      <View style={{height: rowHeight}}>
        <ScrollView
          horizontal
          contentInset={contentInset}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop,
            marginBottom,
            marginVertical,
            height: 200,
            width: fullWidth ? WIDTH_SCREEN : "auto",
          }}
          contentContainerStyle={[
            {
              alignItems,
              justifyContent,
              flexDirection: "row",
            },
          ]}
        >
          {"length" in children
            ? children.map((child, key) => {
                return (
                  <Fragment key={key}>
                    {child}
                    {children.length !== key + 1 && (
                      <View style={{width: gap}} />
                    )}
                  </Fragment>
                );
              })
            : children}
        </ScrollView>
      </View>
    </Column>
  );
};
