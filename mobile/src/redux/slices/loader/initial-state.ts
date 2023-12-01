import {LoaderSlice} from "./types";

export const initialState: LoaderSlice = {
  buttonLoaderIds: [],
  showOverlapAuthenticatingScreen: false,
  showScreenLoader: {
    show: false,
    message: undefined,
  },
};
