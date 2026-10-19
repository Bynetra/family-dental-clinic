import type { Locale } from "./config";
import { dictionaries, type Dictionary } from "./translations";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
