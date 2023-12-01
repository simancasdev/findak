import {StatusBarStyle} from "react-native";

export interface LayoutSlice {
  drawerOpened: boolean;
  statusBarColor: StatusBarStyle | undefined | null;
  cofetti: {
    fired: boolean;
  };
  edges: {
    topColor: string | undefined;
    bottomColor?: string;
  };
}
