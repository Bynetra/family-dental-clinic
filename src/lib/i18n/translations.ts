import type { Locale } from "./config";
import en from "../../../messages/en.json";
import ur from "../../../messages/ur.json";

export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ur,
};
