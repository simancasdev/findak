import {Asset} from "react-native-image-picker";
import {SearchType} from "src/interfaces/models";

export type UploadProductPayload = {
  references_url: (string | Asset)[];
  title: string;
  price: number;
  type: SearchType;
  category_id: string;
  collection_id: string;
  description: string;
};
