import {RootStackParamList} from "src/interfaces";

export const preventCleanViews: (keyof RootStackParamList)[] = [
  "Chat",
  "UserProfile",
];
