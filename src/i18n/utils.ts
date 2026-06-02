import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Ricava la lingua dal primo segmento dell'URL (/en/... → 'en', altrimenti default IT). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Restituisce t(key): usa la lingua data, con fallback alla lingua di default. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
