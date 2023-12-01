import {Fragment} from "react";
import {STYLES} from "./styles";
import {BarChart, List} from "src/svg";
import {ProgressBar} from "../ProgressBar";
import {PALETTE, styleOS} from "src/styles";
import {useLang, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {ProgressBar as IProgressBar, Style, ViewParam} from "src/interfaces";
import {
  Row,
  Empty,
  Column,
  RowButton,
  Typography,
} from "src/components/@system";

interface ProgressBarManagerProps<T> extends Style {
  data: T[];
  headText?: string;
  maxBarsNumber?: number;
  onItemPress: (item: T) => void;
}

export const ProgressBarManager = <T extends IProgressBar>({
  data,
  style,
  headText,
  onItemPress,
  maxBarsNumber = data.length,
}: ProgressBarManagerProps<T>) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {navigate} = useNavigation<ViewParam<"TodayTrending">>();

  return (
    <Column gap={10} style={[STYLES["progress_bar_manager"], style]}>
      {headText && (
        <Row>
          <BarChart strokeWidth={2} size={18} color={colors["WHITE_BLACK"]} />
          <Typography fontWeight={styleOS("500")} fontSize={16}>
            {headText}
          </Typography>
        </Row>
      )}
      {!data.length ? (
        <Empty
          emptyUI={{
            helperText: t("no_trends_for_today"),
            icon: <BarChart color={colors["WHITE_BLACK"]} />,
          }}
        />
      ) : (
        <Fragment>
          <Column style={STYLES["bars"]} gap={10}>
            {data.slice(0, maxBarsNumber).map((bar, key) => (
              <ProgressBar
                key={key}
                {...bar}
                onPress={() => onItemPress(bar)}
              />
            ))}
          </Column>
          {data.length > maxBarsNumber && (
            <RowButton
              label={t("see_all_trends")}
              iconBoxColor={PALETTE["TRANSPARENT"]}
              onPress={() => navigate("TodayTrending")}
              style={{marginTop: 15, paddingVertical: 8}}
              icon={<List color={colors["WHITE_BLACK"]} />}
            />
          )}
        </Fragment>
      )}
    </Column>
  );
};
