import "react-native-gesture-handler";
import Main from "./Main";
import {AppRegistry} from "react-native";
import {name as appName} from "./app.json";

AppRegistry.registerComponent(appName, () => Main);
