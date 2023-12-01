import {useCallback} from "react";
import {ViewParam} from "src/interfaces";
import {updateUser} from "src/redux/slices";
import {Asset} from "react-native-image-picker";
import {InitialCompleteProfile} from "./form.schema";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useFirebaseStorage} from "src/hooks";

export const useViewActions = () => {
  const dispatch = useAppDispatch();
  const {uploadPhotos} = useFirebaseStorage();
  const {navigate} = useNavigation<ViewParam<"SetLocation">>();

  const onUpdateUser = useCallback(async (values: InitialCompleteProfile) => {
    let {avatar_url} = values;
    if (typeof avatar_url !== "string") {
      avatar_url = (
        await uploadPhotos([avatar_url] as Asset[], "photos/avatars", false)
      )[0] as string;
    }
    dispatch(
      updateUser({
        user: {...values, avatar_url, sign_up_status: "set_location"},
        callback: () => {
          navigate("SetLocation");
        },
      })
    );
  }, []);

  return {onUpdateUser};
};
