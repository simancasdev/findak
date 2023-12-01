import * as Yup from "yup";
import {EditProfilePayload} from "src/interfaces";

export const initialValues: EditProfilePayload = {
  slogan: "",
  last_name: "",
  biography: "",
  first_name: "",
  avatar_url: "",
};

export const editProfileSchema = Yup.object().shape({
  last_name: Yup.string().required(),
  first_name: Yup.string().required(),
  slogan: Yup.string().max(60, "validation_slogan_longer"),
  biography: Yup.string().max(140, "validation_biography_longer"),
});
