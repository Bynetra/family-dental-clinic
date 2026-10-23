import { dictionaries, type Dictionary } from "./translations";
import { defaultLocale, type Locale } from "./config";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}
