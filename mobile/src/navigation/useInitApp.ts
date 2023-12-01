import {useLayoutEffect} from "react";
import {useAppTheme} from "src/context";
import {AppTheme} from "src/interfaces";
import {useAppDispatch} from "../hooks";
import {useAppSelector, useStorage} from "../hooks";
import {
  authenticate,
  selectAuthState,
  resetLayoutColors,
  getMyConversations,
  getMyNotifications,
} from "../redux/slices";

export const useInitApp = () => {
  const {read} = useStorage();
  const {toggleTheme} = useAppTheme();
  const dispatch = useAppDispatch();
  const {isLogged, authenticating} = useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    dispatch(authenticate());
  }, []);

  useLayoutEffect(() => {
    if (authenticating) return;

    if (isLogged) {
      // Reset the styles that we set on the welcome flow
      dispatch(resetLayoutColors());
      // Getting conversations to display if user have some unread messages on home view
      dispatch(getMyConversations());
      // Getting notifications to display if user have some unread notifications on home view
      dispatch(getMyNotifications());
      // set theme saved on storage
      read<AppTheme>("@theme").then((theme) => {
        if (theme) toggleTheme(theme);
      });
    } else {
      toggleTheme("light", false);
    }
  }, [isLogged, authenticating]);
};
