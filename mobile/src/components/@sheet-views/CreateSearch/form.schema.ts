import * as Yup from "yup";
import {NewSearchPayload} from "src/interfaces";

export const initialValues: NewSearchPayload = {
  budget: 0,
  description: "",
  category_id: "",
  type: "product",
  references_url: [],
  accept_prices_higher_than_my_budget: true,
};

export const createSearchSchema = Yup.object().shape({
  type: Yup.string().required("validation_this_field_is_required"),
  category_id: Yup.string().required("validation_this_field_is_required"),
  budget: Yup.number().required("validation_this_field_is_required").min(0.1),
  description: Yup.string()
    .required("validation_this_field_is_required")
    .min(10, "validation_create_search_longer")
    .max(300, "validation_create_search_max_longer"),
});
