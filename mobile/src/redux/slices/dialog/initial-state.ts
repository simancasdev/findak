import {DialogSlice} from "./types";
import {DialogUIProps} from "src/interfaces";

export const initialState: DialogSlice = {
  show: false,
  view: undefined,
  actions: [],
  UIProps: {} as DialogUIProps,
};
