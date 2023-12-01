import {
  readNotifications,
  getMyNotifications,
  onReadNotifications,
  selectNotificationState,
} from "src/redux/slices";
import {
  useAppDispatch,
  useAppSelector,
  useEffectWhenIsFocused,
} from "src/hooks";

export const useViewActions = (): void => {
  const dispatch = useAppDispatch();
  const {unReadNotifications} = useAppSelector(selectNotificationState);

  // refresh notification data
  useEffectWhenIsFocused(() => {
    dispatch(getMyNotifications());
  }, []);

  useEffectWhenIsFocused(() => {
    if (!unReadNotifications.length) return;
    // call read-notification endpoint when Notifications view is mounted
    dispatch(readNotifications());
    setTimeout(() => {
      dispatch(onReadNotifications());
    }, 2000);
  }, [unReadNotifications]);
};
