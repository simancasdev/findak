import {Fragment, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {cleanNavigator, selectNavigatorState} from "src/redux/slices";

interface NavigatorProps {}

export const Navigator: React.FC<NavigatorProps> = () => {
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
  const {to, params, onNavigated} = useAppSelector(selectNavigatorState);

  useEffect(() => {
    if (typeof to === "undefined") return;
    // @ts-expect-error
    navigate(to, params);
    if (typeof onNavigated !== "undefined") {
      onNavigated();
      return;
    }
    dispatch(cleanNavigator());
  }, [to]);

  return <Fragment />;
};
