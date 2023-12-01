import {useLayoutEffect} from "react";
import {loggedRouter, welcomeRouter} from ".";
import {ScreenLoader} from "components/@system";
import {RouterProvider} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks";
import {authenticate, selectAuthState} from "redux/slices";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const dispatch = useAppDispatch();
  const {isLogged, authenticating} = useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    dispatch(authenticate());
  }, []);

  return authenticating ? (
    <ScreenLoader />
  ) : (
    <RouterProvider router={isLogged ? loggedRouter : welcomeRouter} />
  );
};

export default Navigation;
export * from "./logged";
export * from "./welcome";
