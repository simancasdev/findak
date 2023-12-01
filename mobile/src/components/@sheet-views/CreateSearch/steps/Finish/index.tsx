import {STYLES} from "./styles";
import {useEffect} from "react";
import {PALETTE} from "src/styles";
import {useFormikContext} from "formik";
import {ChevronLeft, Send} from "src/svg";
import {NewSearchPayload} from "src/interfaces";
import {Search} from "src/components/@searches";
import {FINISH_STEP_SNAP_POINTS, buildMockSearch} from "./helper";
import {Button, Column, TopBar, Typography} from "src/components/@system";
import {useLang, useTheme, useAppDispatch, useAppSelector} from "src/hooks";
import {
  setSnapPoints,
  selectAuthState,
  selectCategoryState,
  CREATE_SEARCH_LOADER,
  onChangeCreateSearchStep,
} from "src/redux/slices";

interface FinishProps {}

export const Finish: React.FC<FinishProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);
  const {categories} = useAppSelector(selectCategoryState);
  const {values, handleSubmit, isValid} = useFormikContext<NewSearchPayload>();
  const mockSearch = buildMockSearch(values, user, categories["data"]);

  useEffect(() => {
    const {references_url} = values;
    dispatch(setSnapPoints(FINISH_STEP_SNAP_POINTS[references_url.length]));
  }, []);

  return (
    <Column gap={0}>
      <TopBar
        style={STYLES["top_bar"]}
        back={{
          label: t("preview"),
          icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
          onPress: () => {
            dispatch(onChangeCreateSearchStep("describe"));
          },
        }}
      />
      <Search
        search={mockSearch}
        showActions={false}
        showComments={false}
        avatarRedirection={false}
        allowShowMoreBehavior={false}
        style={STYLES["preview_search"]}
        footerStyle={{paddingHorizontal: 10}}
      />
      <Column marginVertical={5} style={{width: "100%"}}>
        <Button
          disabled={!isValid}
          onPress={handleSubmit}
          label={t("send_search")}
          loaderId={CREATE_SEARCH_LOADER}
          labelColor={PALETTE["WHITE"]}
          loaderColor={PALETTE["WHITE"]}
          icon={<Send color={PALETTE["WHITE"]} />}
        />
        <Typography
          fontSize={12}
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          {t("we_will_first_review_your_search_content")}
        </Typography>
      </Column>
    </Column>
  );
};
