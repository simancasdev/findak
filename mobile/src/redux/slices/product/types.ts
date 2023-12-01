import {APIStatus, ProductModel} from "src/interfaces";

export interface ProductSlice {
  product: ProductModel;
  APIStatus: {
    product: APIStatus;
  };
}
