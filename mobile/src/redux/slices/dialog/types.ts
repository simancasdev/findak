import {DialogButtonAction, DialogUIProps} from "src/interfaces";

export interface DialogSlice {
  show: boolean;
  view: JSX.Element | undefined;
  actions: DialogButtonAction[];
  UIProps: DialogUIProps | undefined;
}
