import {useLang} from "./useLang";
import {Share} from "react-native";
import {showAlert} from "../redux/slices";
import {useAppDispatch} from "./useAppDispatch";

export const useShare = (): {share: (message: string) => void} => {
  const {t} = useLang();
  const dispatch = useAppDispatch();

  const share = async (message: string) => {
    try {
      const result = await Share.share({message});

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of result.activityType");
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error: any) {
      dispatch(showAlert({message: t("something_went_wrong"), type: "error"}));
    }
  };

  return {share};
};
