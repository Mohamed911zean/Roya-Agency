import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, isLocale } from './locales';

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const requestedLocale = locale ?? (await requestLocale) ?? defaultLocale;

  if (!isLocale(requestedLocale)) notFound();

  return {
    locale: requestedLocale,
    messages: (await import(`../messeges/${requestedLocale}.json`)).default,
  };
});

export { defaultLocale, isLocale, locales } from './locales';
export type { Locale } from './locales';