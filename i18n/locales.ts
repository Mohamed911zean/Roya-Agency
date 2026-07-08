export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(locale: string | undefined): locale is Locale {
  return !!locale && locales.includes(locale as Locale);
}
