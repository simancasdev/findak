import * as Yup from "yup";
import {CreateCountryPayload} from "interfaces";

export const initialValues: CreateCountryPayload = {name: ""};

export const loginSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
});
