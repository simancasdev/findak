import i18next from "i18next";
import {useCallback} from "react";
import {TValue} from "../languages";
import {useTranslation} from "react-i18next";
import {Language, UseLang} from "../interfaces";

export const useLang = (): UseLang => {
  const {t: translation} = useTranslation();
  const language = i18next.language as Language;

  const t = useCallback((word: TValue): string => translation(word), []);
  const changeLanguage = useCallback((lang: Language): void => {
    i18next.changeLanguage(lang);
  }, []);

  return {t, language, changeLanguage};
};
