import {SearchModel, Style} from "src/interfaces";

export interface Context extends SearchAlertProps {}

export interface SearchAlertProps extends Style {
  search: SearchModel;
  onPress: (searchId: string) => void;
}
