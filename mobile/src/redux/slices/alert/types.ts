import {TValue} from "src/languages";
import {AlertType, AutoComplete} from "src/interfaces";

export interface AlertSlice {
  show: boolean;
  translate: boolean;
  message: AutoComplete<TValue> | undefined;
  type: AlertType | undefined;
  icon: JSX.Element | undefined;
}

export type ShowAlertPayload = {
  type: AlertType;
  message: AutoComplete<TValue>;
  translate?: boolean;
  icon?: JSX.Element;
};
