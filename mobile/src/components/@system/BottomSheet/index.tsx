import {Container} from "..";
import {STYLES} from "./styles";
import {Backdrop, Optional} from "./lib";
import Sheet from "@gorhom/bottom-sheet";
import {useSheet} from "./hooks/useSheet";
import {Fragment, memo, useEffect, useRef} from "react";
import {useAppSelector, useTheme} from "src/hooks";
import {selectBottomSheetState} from "src/redux/slices";
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";

interface BottomSheetProps {}

export const BottomSheet: React.FC<BottomSheetProps> = memo(() => {
  const {colors} = useTheme();
  const {onSheetChange} = useSheet();
  const sheetRef = useRef<Sheet>(null);
  const {main} = useAppSelector(selectBottomSheetState);
  useEffect(() => {
    if (main["snapIndex"] === 0) sheetRef.current?.close();
  }, [main["snapIndex"]]);

  return (
    <Sheet
      ref={sheetRef}
      style={STYLES["sheet"]}
      index={main["snapIndex"]}
      snapPoints={main["snapPoints"]!}
      onChange={(index) => onSheetChange(index, "main")}
      enablePanDownToClose={main["enablePanDownToClose"]}
      handleStyle={{backgroundColor: colors["HANDLE_SHEET"]}}
      handleIndicatorStyle={{backgroundColor: colors["WHITE_BLACK"]}}
      backdropComponent={(props) => (
        <Backdrop
          {...props}
          sheetLayer="main"
          onPress={() => {
            if (typeof main["onBackdrop"] !== "undefined") {
              main["onBackdrop"]();
            }
          }}
        />
      )}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <Container style={{flex: 1, backgroundColor: colors["HANDLE_SHEET"]}}>
            <View style={STYLES["main_container"]}>{main["view"]}</View>
            {/* 🧩 Optional Sheet Component */}
            <Optional />
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </Sheet>
  );
});
