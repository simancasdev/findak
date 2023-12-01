import {RootStackParamList} from "src/interfaces";

export interface NavigatorSlice {
  to: string | undefined;
  onNavigated?: () => void;
  currentView: keyof RootStackParamList;
  previousView: keyof RootStackParamList;
  params: RootStackParamList[keyof RootStackParamList];
  viewFromDrawerNavigation: keyof RootStackParamList | undefined;
}
