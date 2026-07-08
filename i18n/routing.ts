import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "./locales";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export { defaultLocale, isLocale, locales } from "./locales";
export type { Locale } from "./locales";