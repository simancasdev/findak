import {TValue} from "../../languages";

export type ProgressBoxValue = {
  title: TValue;
  value: number;
  valueLabel?: string;
  helperText?: TValue;
  useCircularProgress?: boolean;
};
