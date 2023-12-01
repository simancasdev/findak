import {TValue} from "src/languages";
import {ButtonLoaderId} from "src/interfaces";

export interface LoaderSlice {
  buttonLoaderIds: ButtonLoaderId[];
  showOverlapAuthenticatingScreen: boolean;
  showScreenLoader: {
    show: boolean;
    message?: TValue;
  };
}
