import * as Yup from "yup";
import {LoginPayload} from "src/interfaces";

export const initialValues: LoginPayload = {email: "", password: ""};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("validation_invalid_mail_format")
    .required("validation_this_field_is_required"),
  password: Yup.string().required("validation_this_field_is_required"),
});
