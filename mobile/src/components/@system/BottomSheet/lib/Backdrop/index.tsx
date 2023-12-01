import {Fragment, memo} from "react";
import {BottomSheetLayer} from "src/interfaces";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {closeSheet, selectBottomSheetState} from "src/redux/slices";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

interface BackdropProps extends BottomSheetBackdropProps {
  onPress: () => void;
  sheetLayer: BottomSheetLayer;
}

export const Backdrop: React.FC<BackdropProps> = memo((props) => {
  const dispatch = useAppDispatch();
  const {onPress, sheetLayer} = props;
  const {main, optional} = useAppSelector(selectBottomSheetState);

  if (sheetLayer === "main") {
    if (!main["showBackdrop"]) return <Fragment />;
  } else {
    if (!optional["showBackdrop"]) return <Fragment />;
  }

  return (
    <BottomSheetBackdrop
      {...props}
      opacity={0.5}
      enableTouchThrough={true}
      onPress={() => {
        dispatch(closeSheet(sheetLayer));
        onPress();
      }}
    />
  );
});
