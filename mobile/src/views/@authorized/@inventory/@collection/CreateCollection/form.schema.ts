import * as Yup from "yup";
import {CreateCollectionPayload} from "src/interfaces";

export const initialValues: CreateCollectionPayload = {
  name: "",
};

export const createCollectionSchema = Yup.object().shape({
  name: Yup.string().required("validation_this_field_is_required"),
});
