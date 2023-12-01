import React from "react";
import {People, Header} from "./lib";
import {NavigatorView} from "src/hoc";
import {Screen} from "src/components/@system";
import {useViewActions} from "./useViewActions";
import {
  useAppDispatch,
  useAppSelector,
  useEffectOnlyOnceWhenUserIsReady,
} from "src/hooks";
import {
  getPeople,
  closeSheet,
  getCategories,
  selectUserState,
  selectBottomSheetState,
} from "src/redux/slices";

interface MeetPeopleProps {}

export const MeetPeople: React.FC<MeetPeopleProps> = () => {
  useViewActions();
  const dispatch = useAppDispatch();
  const {APIStatus} = useAppSelector(selectUserState);
  const {snapIndex} = useAppSelector(selectBottomSheetState)["main"];
  const {isLoading} = APIStatus["people"];

  useEffectOnlyOnceWhenUserIsReady(() => {
    dispatch(getPeople());
    dispatch(getCategories());
  }, []);

  return (
    <NavigatorView viewName="MeetPeople">
      <Screen
        contentInset={{bottom: !snapIndex ? 200 : 400}}
        onScreenUnMount={() => dispatch(closeSheet())}
        refreshControl={{
          refreshing: isLoading,
          onRefresh: () => dispatch(getPeople()),
        }}
      >
        <Header />
        <People />
      </Screen>
    </NavigatorView>
  );
};
