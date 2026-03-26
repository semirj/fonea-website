import type { Locale } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
