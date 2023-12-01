import * as Yup from "yup";
import {CreateCategoryPayload} from "interfaces";

export const initialValues: CreateCategoryPayload = {
  name: "category_",
  type: "product",
};

export const loginSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  type: Yup.string().required("This field is required"),
});
