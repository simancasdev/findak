import {useCallback} from "react";
import {FormikHelpers} from "formik";
import {sendOffer} from "src/redux/slices";
import {SendOfferPayload} from "src/interfaces";
import {Asset} from "react-native-image-picker";
import {useAppDispatch, useFirebaseStorage} from "src/hooks";

export const useAction = () => {
  const {uploadPhotos} = useFirebaseStorage();
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    async (
      values: SendOfferPayload,
      {resetForm}: FormikHelpers<SendOfferPayload>
    ) => {
      let {references_url} = values;
      references_url = (await uploadPhotos(
        references_url as Asset[],
        "photos/offers"
      )) as string[];
      dispatch(sendOffer({...values, references_url}));
      resetForm();
    },
    []
  );
  return {onSubmit};
};
