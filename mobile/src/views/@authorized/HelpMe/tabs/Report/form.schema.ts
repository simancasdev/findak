import * as Yup from "yup";
import {HelpMePayload} from "src/interfaces";

export const initialValues: HelpMePayload = {reason: "", description: ""};

export const helpMeSchema = Yup.object().shape({
  reason: Yup.string().required("validation_this_field_is_required"),
  description: Yup.string().required("validation_this_field_is_required"),
});
