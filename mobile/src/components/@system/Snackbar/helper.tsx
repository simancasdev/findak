import {PALETTE} from "src/styles";
import {SnackbarType, SvgProps} from "src/interfaces";
import {AlertTriangle, CheckCircle, Info, X} from "src/svg";

export const icons: {[K in SnackbarType]: (icon: SvgProps) => JSX.Element} = {
  error: X,
  success: CheckCircle,
  info: Info,
  warning: AlertTriangle,
};

export const colors: {[K in SnackbarType]: string} = {
  info: PALETTE["INFO"],
  error: PALETTE["ERROR"],
  warning: PALETTE["WARNING"],
  success: PALETTE["SUCCESS"],
};
