import {Asset} from "react-native-image-picker";

export const assetsToUpload = (assets: (Asset | string)[]): Asset[] => {
  let toUpload: Asset[] = [];
  for (const asset of assets) {
    if (typeof asset !== "string") toUpload.push(asset);
  }

  return toUpload;
};
