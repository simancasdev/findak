import {SideMenuView} from "src/interfaces";

export interface SideMenuSlice {
  show: boolean;
  view: SideMenuView | undefined;
}
