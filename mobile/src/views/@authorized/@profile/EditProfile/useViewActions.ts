import {useCallback} from "react";
import {Asset} from "react-native-image-picker";
import {EditProfilePayload} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useFirebaseStorage} from "src/hooks";
import {showAlert, syncUser, updateUser} from "src/redux/slices";

export const useViewActions = () => {
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {uploadPhotos} = useFirebaseStorage();

  const onSubmit = useCallback(async (values: EditProfilePayload) => {
    let {avatar_url} = values;
    if (typeof avatar_url !== "string") {
      avatar_url = (
        await uploadPhotos([avatar_url] as Asset[], "photos/avatars", false)
      )[0] as string;
    }

    dispatch(
      updateUser({
        user: {...values, avatar_url},
        callback: () => {
          goBack();
          dispatch(syncUser());
          dispatch(
            showAlert({
              type: "success",
              message: "your_profile_has_been_successfully_updated",
            })
          );
        },
      })
    );
  }, []);

  return {onSubmit};
};
