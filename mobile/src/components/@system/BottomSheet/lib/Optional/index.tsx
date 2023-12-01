import {STYLES} from "./styles";
import {Backdrop} from "../Backdrop";
import {useSheet} from "../../hooks";
import {Container} from "src/components/@system";
import OptionalSheet from "@gorhom/bottom-sheet";
import {useAppSelector, useTheme} from "src/hooks";
import {selectBottomSheetState} from "src/redux/slices";
import {Fragment, memo, useLayoutEffect, useRef} from "react";

interface OptionalProps {}

export const Optional: React.FC<OptionalProps> = memo(() => {
  const {colors} = useTheme();
  const {onSheetChange} = useSheet();
  const optionalSheetRef = useRef<OptionalSheet>(null);
  const {optional} = useAppSelector(selectBottomSheetState);

  useLayoutEffect(() => {
    const {snapIndex, enablePanDownToClose} = optional;
    if (snapIndex === 0 && enablePanDownToClose) {
      optionalSheetRef.current?.close();
    }
  }, [optional]);

  return optional["view"] ? (
    <OptionalSheet
      ref={optionalSheetRef}
      style={STYLES["sheet"]}
      index={optional["snapIndex"]}
      snapPoints={optional["snapPoints"]!}
      onChange={(index) => onSheetChange(index, "optional")}
      handleStyle={{backgroundColor: colors["HANDLE_SHEET"]}}
      enablePanDownToClose={optional["enablePanDownToClose"]}
      handleIndicatorStyle={{backgroundColor: colors["WHITE_BLACK"]}}
      backdropComponent={(props) => (
        <Backdrop
          sheetLayer="optional"
          {...props}
          onPress={() => {
            if (typeof optional["onBackdrop"] !== "undefined") {
              optional["onBackdrop"]();
            }
          }}
        />
      )}
    >
      <Container style={STYLES["container_optional"]}>
        {optional["view"]}
      </Container>
    </OptionalSheet>
  ) : null;
});
