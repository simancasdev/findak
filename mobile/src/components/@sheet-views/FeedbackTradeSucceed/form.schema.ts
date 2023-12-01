import * as Yup from "yup";
import {FeedbackPayload} from "src/interfaces";

export const initialValues: FeedbackPayload["feedback"] = {
  to: "",
  from: "",
  stars: 0,
  feedback: "",
};

export const feedbackSchema = Yup.object().shape({
  to: Yup.string().required(),
  from: Yup.string().required(),
  feedback: Yup.string().required("validation_this_field_is_required"),
  stars: Yup.number().required().min(1),
});
