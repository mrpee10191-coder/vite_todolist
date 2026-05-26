import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import TranslationEN from "../locales/en/translation.json";
import TranslationRU from "../locales/ru/translation.json";


const resources = {
    ru: {
        translation: TranslationRU
    },
    en: {
        translation: TranslationEN
    },
}


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;