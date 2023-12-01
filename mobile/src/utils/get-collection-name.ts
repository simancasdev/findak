import {CollectionModel} from "../interfaces";

export const getCollectionName = (
  list: CollectionModel[] = [],
  collectionId: string
): string => {
  return list.find((collection) => collection.id === collectionId)?.name!;
};
