import * as Yup from "yup";
import {SendOfferPayload} from "src/interfaces";

export const initialValues: SendOfferPayload = {
  price: 0,
  search_id: "",
  receiver_id: "",
  description: "",
  references_url: [],
};

export const sendOfferSchema = Yup.object().shape({
  search_id: Yup.string().required(),
  receiver_id: Yup.string().required(),
  description: Yup.string()
    .required("validation_this_field_is_required")
    .min(20, "validation_send_offer_longer")
    .max(300, "validation_send_offer_max_longer"),
});
