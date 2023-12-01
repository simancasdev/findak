import {MultimediaUIProps} from "src/interfaces";

export interface SideMenuSlice {
  show: boolean;
  sources?: string[];
  activeIndex: number;
  UIProps?: MultimediaUIProps;
}
