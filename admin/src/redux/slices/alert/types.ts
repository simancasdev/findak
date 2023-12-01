import {AlertType} from "interfaces/alert";

export interface AlertSlice {
  show: boolean;
  translate: boolean;
  message: string | undefined;
  type: AlertType | undefined;
  icon: JSX.Element | undefined;
}

export type ShowAlertPayload = {
  type: AlertType;
  message: string;
  translate?: boolean;
  icon?: JSX.Element;
};
