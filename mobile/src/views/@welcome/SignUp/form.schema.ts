import * as Yup from "yup";
import {SignUpPayload} from "src/interfaces";

export const initialValues: SignUpPayload = {
  email: "",
  password: "",
  confirm_password: "",
};

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("validation_invalid_mail_format")
    .required("validation_this_field_is_required"),
  password: Yup.string()
    .min(5, "validation_password_longer")
    .required("validation_this_field_is_required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "validation_passwords_must_match")
    .required("validation_this_field_is_required"),
});
