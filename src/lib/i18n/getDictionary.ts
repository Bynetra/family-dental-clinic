import { isLocale } from "./config";
import { dictionaries, type Dictionary } from "./translations";

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries.en;
}
