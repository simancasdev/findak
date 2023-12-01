import * as Yup from "yup";
import {Asset} from "react-native-image-picker";
import {UpdateUserPayload} from "src/interfaces";

export type InitialCompleteProfile = UpdateUserPayload["user"] & {
  avatar_url: string | Asset;
};

export const initialValues: InitialCompleteProfile = {
  first_name: "",
  last_name: "",
  biography: "",
  avatar_url: "",
};

export const completeProfileSchema = Yup.object().shape({
  biography: Yup.string().max(140, "validation_biography_longer"),
  first_name: Yup.string().required("validation_this_field_is_required"),
  last_name: Yup.string().required("validation_this_field_is_required"),
});
