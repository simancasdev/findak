import i18n from "i18next";
import {JSONKeys} from "../interfaces";
import esJSON from "./translations/es.json";
import enJSON from "./translations/en.json";
import {initReactI18next} from "react-i18next";
import {getLocales} from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type TValue = JSONKeys<typeof enJSON>;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: enJSON,
    },
    es: {
      translation: esJSON,
    },
  },
  lng: getLocales()[0]["languageCode"],
  fallbackLng: getLocales()[0]["languageCode"],
  interpolation: {
    escapeValue: false,
  },
});

AsyncStorage.getItem("@language").then((lang) => {
  if (lang) i18n.changeLanguage(JSON.parse(lang));
});
