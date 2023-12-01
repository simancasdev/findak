import {RootStackParamList, SignUpStatus} from "src/interfaces";

export const PREFIX = "auth";

type AvailablePath = Exclude<SignUpStatus, "completed">;

export const SIGN_UP_PATH_REDIRECTION: {
  [P in AvailablePath]: keyof RootStackParamList;
} = {
  set_alert: "SetAlert",
  set_location: "SetLocation",
  complete_profile: "CompleteProfile",
  otp_verification: "PhoneVerification",
};
