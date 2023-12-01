import auth from "./slices/auth";
import users from "./slices/users";
import panel from "./slices/panel";
import alert from "./slices/alert";
import location from "./slices/location";
import category from "./slices/category";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    alert,
    auth,
    category,
    location,
    panel,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});
