import * as Yup from "yup";
import {LoginPayload} from "interfaces";

export const initialValues: LoginPayload = {email: "", password: ""};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});
