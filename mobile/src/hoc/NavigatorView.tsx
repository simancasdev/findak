import {Fragment, memo} from "react";
import {onChangeCurrentView} from "src/redux/slices";
import {Children, RootStackParamList} from "src/interfaces";
import {useAppDispatch, useEffectWhenIsFocused} from "src/hooks";

interface NavigatorViewProps extends Children {
  viewName: keyof RootStackParamList;
}

export const NavigatorView: React.FC<NavigatorViewProps> = memo(
  ({children, viewName}) => {
    const dispatch = useAppDispatch();
    useEffectWhenIsFocused(() => {
      dispatch(onChangeCurrentView(viewName));
    }, [viewName]);

    return <Fragment>{children}</Fragment>;
  }
);
