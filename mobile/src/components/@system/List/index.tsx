import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {ListProps} from "src/interfaces";
import {useLang, useTheme} from "src/hooks";
import {CheckCircle, Circle} from "src/svg";
import {ScrollView, View} from "react-native";
import {Fragment, useEffect, useState} from "react";
import {Row, Column, TopBar, Touchable, Typography} from "../../@system";

export const List: React.FC<ListProps> = ({
  data,
  UIProps,
  onSelect,
  emptyMessage,
  contentInset,
  defaultValue,
  autoTranslate = false,
  defaultIcon: DefaultIcon,
  multipleSelection = false,
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const [selectedIds, setSelectedIds] = useState<string | string[] | undefined>(
    []
  );

  useEffect(() => {
    setSelectedIds(defaultValue);
  }, [defaultValue]);

  return (
    <Fragment>
      {UIProps && (
        <TopBar
          back={{
            icon: UIProps["icon"],
            label: UIProps["title"],
            onPress: UIProps["onPress"],
            helperText: UIProps["helperText"],
          }}
        />
      )}
      <View style={STYLES["bottom_list"]}>
        {!data.length ? (
          <Column style={{paddingVertical: 10}}>
            <Typography>{emptyMessage ?? t("no_results")}</Typography>
          </Column>
        ) : (
          <ScrollView
            contentInset={contentInset}
            showsVerticalScrollIndicator={false}
          >
            {data.map((item, key) => {
              const {name, id, icon: Icon} = item;
              // prettier-ignore
              const isSelected = multipleSelection ? (selectedIds as string[]).includes(id) : (selectedIds as string) === id;
              const iconProps = {
                color: isSelected ? PALETTE["WHITE"] : colors["WHITE_BLACK"],
                size: 20,
              };

              return (
                <Touchable
                  key={key}
                  onPress={() => {
                    let updatedIds: string | string[] = [];
                    if (multipleSelection) {
                      const ids = selectedIds as string[];
                      const duplicated = ids?.findIndex(
                        (prevId) => prevId === id
                      );
                      if (duplicated === -1) {
                        updatedIds = [...ids, id];
                      } else {
                        updatedIds = ids.filter((prevId) => prevId !== id);
                      }
                    } else {
                      updatedIds = id;
                    }

                    setSelectedIds(updatedIds);
                    onSelect(updatedIds);
                  }}
                  style={[
                    STYLES["item"],
                    {
                      backgroundColor: isSelected
                        ? PALETTE["PRIMARY"]
                        : colors["HOVER_LIGHT"],
                    },
                  ]}
                >
                  <Row justifyContent="space-between">
                    <Row>
                      {DefaultIcon ? (
                        <DefaultIcon {...iconProps} />
                      ) : Icon ? (
                        // @ts-expect-error
                        <Icon {...iconProps} />
                      ) : null}

                      <Typography
                        marginLeft={5}
                        style={{
                          color: isSelected
                            ? PALETTE["WHITE"]
                            : colors["WHITE_BLACK"],
                        }}
                      >
                        {autoTranslate ? t(name as TValue) : name}
                      </Typography>
                    </Row>
                    {isSelected ? (
                      <CheckCircle {...iconProps} />
                    ) : (
                      <Circle {...iconProps} />
                    )}
                  </Row>
                </Touchable>
              );
            })}
          </ScrollView>
        )}
      </View>
    </Fragment>
  );
};
