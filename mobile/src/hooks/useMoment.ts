import "moment/locale/es";
import moment from "moment";
import {useLang} from "./useLang";
import {Language} from "src/interfaces";

const FORMATS: {[L in Language]: `${string}/${string}/${string}`} = {
  en: "MM/DD/YYYY",
  es: "DD/MM/YYYY",
};

export const useMoment = () => {
  const {language} = useLang();
  moment.locale(language);
  const dateFormat = FORMATS[language];

  return {moment, dateFormat};
};
