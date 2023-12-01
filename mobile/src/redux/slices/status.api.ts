import {APIStatus} from "../../interfaces";

type Status = "initial" | "success" | "error";

export const SET_API_STATUS = (
  status: Status,
  initial: APIStatus = {
    isLoading: true,
    success: false,
    error: false,
  }
): APIStatus => {
  let API_STATUS = {} as APIStatus;

  switch (status) {
    case "error":
      API_STATUS["error"] = true;
      API_STATUS["success"] = false;
      API_STATUS["isLoading"] = false;
      break;
    case "success":
      API_STATUS["error"] = false;
      API_STATUS["success"] = true;
      API_STATUS["isLoading"] = false;
      break;
    default:
      API_STATUS["error"] = initial["error"];
      API_STATUS["success"] = initial["success"];
      API_STATUS["isLoading"] = initial["isLoading"];
  }
  return API_STATUS;
};
