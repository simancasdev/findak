import user from "./slices/user";
import auth from "./slices/auth";
import offer from "./slices/offer";
import trade from "./slices/trade";
import alert from "./slices/alert";
import popUp from "./slices/pop-up";
import loader from "./slices/loader";
import dialog from "./slices/dialog";
import report from "./slices/report";
import search from "./slices/search";
import layout from "./slices/layout";
import product from "./slices/product";
import trending from "./slices/trending";
import location from "./slices/location";
import feedback from "./slices/feedback";
import category from "./slices/category";
import sideMenu from "./slices/side-menu";
import inventory from "./slices/inventory";
import messenger from "./slices/messenger";
import navigator from "./slices/navigator";
import multimedia from "./slices/multimedia";
import {configureStore} from "@reduxjs/toolkit";
import bottomSheet from "./slices/bottom-sheet";
import createSearch from "./slices/create-search";
import notifications from "./slices/notifications";
import recoverPassword from "./slices/recover-password";

export const store = configureStore({
  reducer: {
    alert,
    auth,
    bottomSheet,
    category,
    createSearch,
    dialog,
    feedback,
    inventory,
    layout,
    loader,
    location,
    messenger,
    multimedia,
    navigator,
    notifications,
    offer,
    popUp,
    product,
    recoverPassword,
    report,
    search,
    sideMenu,
    trade,
    trending,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});
