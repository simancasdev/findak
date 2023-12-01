import {APIStatus, CollectionModel, ProductModel} from "src/interfaces";

export type ProductsByCollection = {
  products: ProductModel[];
  collection: CollectionModel;
};
export interface InventorySlice {
  myProducts: ProductModel[];
  myCollection: CollectionModel[];
  productsByCollection: ProductsByCollection[];
  APIStatus: {
    myProducts: APIStatus;
    myCollection: APIStatus;
  };
}
