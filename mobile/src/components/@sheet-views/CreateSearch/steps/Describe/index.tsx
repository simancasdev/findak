import {useEffect} from "react";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {ChevronLeft} from "src/svg";
import {TValue} from "src/languages";
import {useFormikContext} from "formik";
import {NewSearchPayload} from "src/interfaces";
import {Asset} from "react-native-image-picker";
import ToggleSwitch from "toggle-switch-react-native";
import {CREATE_SEARCH_SNAP_POINTS} from "../../sheet-snap-points";
import {useAppDispatch, useAppSelector, useLang, useTheme} from "src/hooks";
import {
  setSnapPoints,
  selectCategoryState,
  onChangeCreateSearchStep,
} from "src/redux/slices";
import {
  Row,
  Input,
  Budget,
  Column,
  TopBar,
  Uploader,
  Typography,
} from "src/components/@system";

interface DescribeProps {}

export const Describe: React.FC<DescribeProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {colors, theme} = useTheme();
  const isDarkTheme = theme === "dark";
  const {categories} = useAppSelector(selectCategoryState);
  const {handleBlur, handleChange, errors, values, isValid} =
    useFormikContext<NewSearchPayload>();

  useEffect(() => {
    dispatch(setSnapPoints(CREATE_SEARCH_SNAP_POINTS["describe"]));
  }, []);

  return (
    <Column gap={0}>
      <TopBar
        style={STYLES["top_bar"]}
        back={{
          label: t("your_search"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          onPress: () => {
            dispatch(onChangeCreateSearchStep("select-category"));
          },
        }}
        action={{
          disabled: !isValid,
          label: t("next"),
          onPress: () => {
            dispatch(onChangeCreateSearchStep("finish"));
          },
        }}
      />
      <Column marginBottom={10} style={{width: "100%"}}>
        <Uploader
          sheetLayer="optional"
          style={{marginBottom: 10}}
          defaultValue={values["references_url"] as Asset[]}
          onAssetsChange={(assets) =>
            handleChange({target: {name: "references_url", value: assets}})
          }
        />
        <Input
          autoFocus
          multiline
          returnKeyType="done"
          value={values["description"]}
          onBlur={handleBlur("description")}
          placeholder={t("new_search_placeholder")}
          onChangeText={handleChange("description")}
          helperText={t(errors["description"] as TValue)}
          style={[
            STYLES["input"],
            {
              color: colors["WHITE_BLACK"],
            },
          ]}
        />
      </Column>
      <Column>
        <Budget
          guideline={t("budget")}
          onChangeText={handleChange("budget")}
          value={!values["budget"] ? "" : String(values["budget"])}
        />
        <Row fullWidth justifyContent="space-between">
          <Typography fontSize={12}>
            {t("accept_prices_higher_than_my_budget")}
          </Typography>
          <ToggleSwitch
            size="small"
            offColor={PALETTE["RED"]}
            onColor={PALETTE["PRIMARY"]}
            isOn={values["accept_prices_higher_than_my_budget"]}
            circleColor={isDarkTheme ? PALETTE["WHITE"] : PALETTE["WHITE"]}
            onToggle={(accepted) => {
              handleChange({
                target: {
                  name: "accept_prices_higher_than_my_budget",
                  value: accepted,
                },
              });
            }}
          />
        </Row>
      </Column>
    </Column>
  );
};
