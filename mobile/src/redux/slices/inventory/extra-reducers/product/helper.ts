import {ProductsByCollection} from "../../types";
import {CollectionModel, ProductModel} from "src/interfaces";

export const getProductsByCollection = (
  list: ProductModel[]
): ProductsByCollection[] => {
  const collectionIds: string[] = [];
  const all: ProductsByCollection[] = [];
  const uniqueCollections: CollectionModel[] = [];

  for (let i = 0; i < list.length; i++) {
    const collectionId: string = list[i]["collection_id"];
    if (!collectionIds.includes(collectionId)) {
      collectionIds.push(list[i]["collection_id"]);
      uniqueCollections.push(list[i]["product_collection"]);
    }
  }

  for (const collection of uniqueCollections) {
    const productsByCollection = list.filter((product) => {
      return product["collection_id"] === collection["id"];
    });
    const block: ProductsByCollection = {
      collection: collection,
      products: productsByCollection,
    };
    all.push(block);
  }

  return all;
};
