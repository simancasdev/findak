import * as Yup from "yup";
import {UploadProductPayload} from "src/interfaces";

export const initialValues: UploadProductPayload = {
  price: 0,
  title: "",
  discount: 0,
  category_id: "",
  description: "",
  type: "product",
  collection_id: "",
  references_url: [],
};

export const uploadProductSchema = Yup.object().shape({
  title: Yup.string().required("validation_this_field_is_required"),
  description: Yup.string().required("validation_this_field_is_required"),
  category_id: Yup.string().required("validation_this_field_is_required"),
  references_url: Yup.array().min(1, "validation_this_field_is_required"),
  collection_id: Yup.string().required("validation_this_field_is_required"),
  price: Yup.number().required("validation_this_field_is_required").min(0.1),
  discount: Yup.number().max(100, "validation_discount"),
});
