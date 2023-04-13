import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import BackEnd from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationIT from "./locales/it/translation.json";
import translationFR from "./locales/fr/translation.json";
import { LANG } from "../data/constants";

i18n
  .use(BackEnd)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.values(LANG),
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      it: {
        translation: translationIT,
      },
      fr: {
        translation: translationFR,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
