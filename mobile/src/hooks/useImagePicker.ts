import {useCallback} from "react";
import {LaunchPickerType} from "../interfaces";
import {
  Asset,
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from "react-native-image-picker";

export const useImagePicker = () => {
  const launch = useCallback(
    async (type: LaunchPickerType): Promise<Asset[] | undefined> => {
      let pickerResponse: ImagePickerResponse;

      switch (type) {
        case "camera":
          pickerResponse = await launchCamera({
            mediaType: "photo",
            quality: 0.1,
          });
          break;
        default:
          pickerResponse = await launchImageLibrary({
            selectionLimit: 1,
            mediaType: "photo",
            quality: 0.1,
          });
      }

      const {assets} = pickerResponse;

      if (assets) {
        return assets;
      }
    },
    []
  );

  return {launch};
};
