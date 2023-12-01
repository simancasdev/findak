import {useEffect} from "react";
import {useFormikContext} from "formik";
import {useAppDispatch} from "src/hooks";
import {NewSearchPayload} from "src/interfaces";
import {resetCreateSearchState, setSheetBackdrop} from "src/redux/slices";

export const useInitCreateSearchFlow = (): void => {
  const dispatch = useAppDispatch();
  const {resetForm} = useFormikContext<NewSearchPayload>();

  // When the initial step from create search flow is mounted
  // we set on the BottomSheet backdrop a callback to reset
  // both states: redux create-search slice and Formik state
  useEffect(() => {
    dispatch(
      setSheetBackdrop(() => {
        resetForm();
        setTimeout(() => {
          dispatch(resetCreateSearchState());
        }, 100);
      })
    );
  }, []);
};
