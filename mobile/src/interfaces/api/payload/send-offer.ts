import {Asset} from "react-native-image-picker";

export type SendOfferPayload = {
  search_id: string;
  receiver_id: string;
  description: string;
  price: number;
  references_url: (Asset | string)[];
};
