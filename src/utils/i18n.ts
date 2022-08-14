import i18n from "i18next";
import enTranslation from "../lang/en.json";
import csTranslation from "../lang/cs.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  cs: csTranslation,
  en: enTranslation,
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
