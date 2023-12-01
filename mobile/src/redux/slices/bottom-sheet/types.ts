import {BaseSheetProps} from "src/interfaces";

type BaseSheetSliceProps = BaseSheetProps & {show: boolean};

export interface BottomSheetSlice {
  main: BaseSheetSliceProps;
  optional: BaseSheetSliceProps;
}
