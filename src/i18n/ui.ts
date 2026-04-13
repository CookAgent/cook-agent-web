import translations from "./translations";

export const locales = ["en", "es", "ca"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ca: "Català",
};

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  ca: "ca_ES",
};

export const hreflangMap: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
  ca: "ca-ES",
};

export const t = (lang: Locale) => {
  const dict = (translations as Record<string, Record<string, string>>)[lang];
  const fallback = translations[defaultLocale];
  return (key: string): string => dict?.[key] ?? fallback[key] ?? "";
};

export type TranslationKey = keyof typeof translations.en;
