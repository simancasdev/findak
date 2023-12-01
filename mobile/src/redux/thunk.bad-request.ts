import {showAlert} from "./slices";
import {Error} from "../interfaces";
import {TValue} from "src/languages";

export const thunkBadRequest = (
  error: unknown,
  thunkAPI: any,
  customMessage?: TValue
): void => {
  const message = customMessage ?? (error as Error).message;
  thunkAPI.dispatch(
    showAlert({
      message,
      type: "error",
      translate: typeof customMessage !== "undefined",
    })
  );
  throw new Error(message);
};
