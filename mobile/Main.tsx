import "./src/languages";
import {Provider} from "react-redux";
import {Findak} from "./src/navigation";
import {store} from "./src/redux/store";
import {SafeAreaView} from "react-native";
import {ThemeProvider} from "./src/context";
import {Edges, STYLES, StatusBar} from "./src/styles";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {
  Alert,
  PopUp,
  Dialog,
  Drawer,
  Confetti,
  SideMenu,
  Navigator,
  Multimedia,
  BottomSheet,
  ScreenLoader,
} from "./src/components/@system";

const Main = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={STYLES["flex"]}>
        <ThemeProvider>
          <NavigationContainer>
            <SafeAreaProvider>
              <SafeAreaView style={STYLES["flex"]}>
                <Findak />
                {/* 🌎 global components */}
                <Alert />
                <PopUp />
                <Edges />
                <Drawer />
                <Dialog />
                <SideMenu />
                <Navigator />
                <StatusBar />
                <Multimedia />
                <BottomSheet />
                <ScreenLoader />
                <Confetti />
              </SafeAreaView>
            </SafeAreaProvider>
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default Main;
