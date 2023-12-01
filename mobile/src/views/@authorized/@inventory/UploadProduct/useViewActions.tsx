import {useCallback} from "react";
import {FormikHelpers} from "formik";
import {assetsToUpload} from "./helper";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useFirebaseStorage} from "src/hooks";
import {updateProduct, uploadProduct} from "src/redux/slices";
import {ProductModel, UploadProductPayload} from "src/interfaces";

export const useViewActions = (product?: ProductModel) => {
  const {goBack} = useNavigation();
  const dispatch = useAppDispatch();
  const {uploadPhotos} = useFirebaseStorage();

  const CRUD = useCallback(
    async (
      values: UploadProductPayload,
      {resetForm}: FormikHelpers<UploadProductPayload>
    ) => {
      let {references_url, price, discount} = values;
      values["price"] = Number(price);
      values["discount"] = Number(discount);

      const toUpload = assetsToUpload(references_url);
      const URLs = references_url.filter((asset) => typeof asset === "string");

      if (!!toUpload.length) {
        references_url = [
          ...URLs,
          ...((await uploadPhotos(toUpload, "photos/products")) as string[]),
        ];
      }

      if (product) {
        dispatch(
          updateProduct({
            ...values,
            references_url,
            id: product["id"],
            onSuccessCallback: () => {
              goBack();
              resetForm();
            },
          })
        );
      } else {
        dispatch(
          uploadProduct({
            ...values,
            references_url,
            onSuccessCallback: () => {
              goBack();
              resetForm();
            },
          })
        );
      }
    },
    []
  );

  return {CRUD};
};
