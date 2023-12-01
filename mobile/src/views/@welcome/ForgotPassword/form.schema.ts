import * as Yup from "yup";
import {ForgotPasswordPayload} from "src/interfaces";

export const initialValues: ForgotPasswordPayload = {email: ""};

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("validation_invalid_mail_format"),
});
