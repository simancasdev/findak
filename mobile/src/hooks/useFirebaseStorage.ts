import {useCallback} from "react";
import {useLang} from "./useLang";
import {Folder} from "../interfaces";
import {Asset} from "react-native-image-picker";
import {useAppDispatch} from "./useAppDispatch";
import storage from "@react-native-firebase/storage";
import {showAlert, showScreenLoader} from "../redux/slices";

export const useFirebaseStorage = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const uploadPhotos = useCallback(
    async (
      assets: Asset[],
      folder: Folder = "photos/default",
      showDefaultLoader: boolean = true
    ) => {
      if (!assets.length) return [];
      if (showDefaultLoader)
        dispatch(showScreenLoader({show: true, message: "uploading_images"}));

      const references_url = await Promise.all(
        assets.map(async (asset): Promise<string | undefined> => {
          try {
            const reference = storage().ref(`/${folder}/${asset.fileName}`);
            await reference.putFile(asset.uri as string);
            return await reference.getDownloadURL();
          } catch (error) {
            dispatch(
              showAlert({type: "error", message: t("something_went_wrong")})
            );
          }
        })
      );
      return references_url;
    },
    []
  );

  return {uploadPhotos};
};
