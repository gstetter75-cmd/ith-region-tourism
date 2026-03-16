import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Route mapping DE <-> EN
 * Key: DE path, Value: EN path (without /en prefix)
 */
const routeMap: Record<string, string> = {
  "/": "/",
  "/erleben/": "/experience/",
  "/erleben/wandern/": "/experience/hiking/",
  "/erleben/radfahren/": "/experience/cycling/",
  "/erleben/klettern/": "/experience/climbing/",
  "/erleben/natur/": "/experience/nature/",
  "/erleben/kultur/": "/experience/culture/",
  "/erleben/familien/": "/experience/families/",
  "/entdecken/": "/discover/",
  "/entdecken/salzhemmendorf/": "/discover/salzhemmendorf/",
  "/entdecken/coppenbruegge/": "/discover/coppenbruegge/",
  "/entdecken/karte/": "/discover/map/",
  "/planen/": "/plan/",
  "/planen/unterkuenfte/": "/plan/accommodation/",
  "/planen/gastronomie/": "/plan/dining/",
  "/planen/anreise/": "/plan/getting-here/",
  "/planen/barrierefrei/": "/plan/accessibility/",
  "/veranstaltungen/": "/events/",
  "/regional/": "/regional/",
  "/ueber-uns/": "/about/",
  "/kontakt/": "/contact/",
  "/impressum/": "/imprint/",
  "/datenschutz/": "/privacy/",
};

// Reverse map (EN -> DE)
const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([de, en]) => [en, de])
);

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const currentLang = currentPath.startsWith("/en/") ? "en" : "de";

  if (currentLang === targetLang) return currentPath;

  if (currentLang === "de" && targetLang === "en") {
    const enPath = routeMap[currentPath];
    return enPath ? `/en${enPath}` : `/en${currentPath}`;
  }

  if (currentLang === "en" && targetLang === "de") {
    const pathWithoutPrefix = currentPath.replace(/^\/en/, "") || "/";
    return reverseRouteMap[pathWithoutPrefix] ?? pathWithoutPrefix;
  }

  return currentPath;
}
