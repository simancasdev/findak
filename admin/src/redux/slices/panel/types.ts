import {PanelType} from "interfaces";

export interface PanelSlice {
  show: boolean;
  type: PanelType | undefined;
  component: JSX.Element | JSX.Element[] | undefined;
}

export type ShowPanelPayload = {
  type: PanelType;
  component: JSX.Element | JSX.Element[];
};
