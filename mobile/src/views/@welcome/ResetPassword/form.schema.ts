import * as Yup from "yup";
import {ResetPasswordPayload} from "src/interfaces";

export const initialValues: Omit<ResetPasswordPayload, "phone_number"> & {
  repeat_password: string;
} = {
  password: "",
  repeat_password: "",
};

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("validation_this_field_is_required")
    .min(5, "validation_password_longer"),
  repeat_password: Yup.string()
    .required("validation_this_field_is_required")
    .oneOf([Yup.ref("password")], "passwords_must_match"),
});
