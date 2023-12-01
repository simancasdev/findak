import * as Yup from "yup";
import {CreateCityPayload} from "interfaces";

export const initialValues: CreateCityPayload = {name: "", country_id: ""};

export const loginSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  country_id: Yup.string().required("This field is required"),
});
