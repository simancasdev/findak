import {RowButtonProps} from "../../components/@system";

export type OptionUIProps = {
  title: string;
  icon?: JSX.Element;
  helperText?: string;
  onPress?: () => void;
};

export interface Option extends RowButtonProps {}
