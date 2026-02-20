import zh from "./locales/zh-CN.json";
import zhTW from "./locales/zh-TW.json";
import en from "./locales/en-US.json";
import jp from "./locales/ja-JP.json";
import kr from "./locales/ko-KR.json";
import es from "./locales/es-ES.json";
import fr from "./locales/fr-FR.json";
import de from "./locales/de-DE.json";
import ru from "./locales/ru-RU.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "system",
  messages: { 
    "zh-CN": zh, 
    "zh-TW": zhTW,
    "ja-JP": jp, 
    "ko-KR": kr, 
    "es-ES": es,
    "fr-FR": fr,
    "de-DE": de,
    "ru-RU": ru,
    en 
  },
  fallbackLocale: "en",
  // 语言偏好
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: true,
    fallbackLocale: "en",
    redirectOn: "root",
  },
}));
