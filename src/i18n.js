import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const defaultLang = "tr";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/translations/{{lng}}/{{ns}}.json",
    },
    ns: ["homePage"],
    fallbackLng: defaultLang,
    debug: false,
    lng: defaultLang,
    defaultNS: "homePage",
    fallbackNS: ["homePage"],
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "tr"],
  });

export default i18n;
