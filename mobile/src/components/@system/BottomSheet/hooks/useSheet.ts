import {useCallback, useEffect} from "react";
import {BottomSheetLayer} from "src/interfaces";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {
  closeSheet,
  setSheetView,
  setSnapIndex,
  selectBottomSheetState,
} from "src/redux/slices";

type UseSheet = {
  onSheetChange: (index: number, layer: BottomSheetLayer) => void;
};

export const useSheet = (): UseSheet => {
  const dispatch = useAppDispatch();
  const {main, optional} = useAppSelector(selectBottomSheetState);

  // This layer dispatch changes to the redux slice
  // state from the BottomSheet onChange action
  const onSheetChange = useCallback(
    (index: number, layer: BottomSheetLayer) => {
      switch (index) {
        case 0:
          dispatch(setSnapIndex({snapIndex: index, layer}));
          // prettier-ignore
          if (!main["enablePanDownToClose"] || !optional["enablePanDownToClose"]) return;
          dispatch(closeSheet(layer));
        case 1:
          dispatch(setSnapIndex({snapIndex: index, layer}));
          break;

        default:
          dispatch(closeSheet(layer));
          if (main["onBackdrop"] && layer === "main") {
            main["onBackdrop"]();
          }
          if (optional["onBackdrop"] && layer === "optional") {
            optional["onBackdrop"]();
          }
      }
    },
    [main, optional]
  );

  // Clean view component when the sheet is closed. we are waiting
  // for 150ms just to not blank the sheet view when is being closed
  useEffect(() => {
    setTimeout(() => {
      // prettier-ignore
      if (!main["show"]) dispatch(setSheetView({view: undefined, layer: "main"}));
      // prettier-ignore
      if (!optional["show"]) dispatch(setSheetView({view: undefined, layer: "optional"}));
    }, 150);
  }, [main, optional]);

  return {onSheetChange};
};
