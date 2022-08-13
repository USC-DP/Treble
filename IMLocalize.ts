import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import en from './languages/en'

const LANGUAGES = {
  en
}


i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    compatibilityJSON: 'v3',
    resources: LANGUAGES
  });