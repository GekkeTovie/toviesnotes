(() => {
  const preferenceKey = 'toviesnotes-language';
  const supported = new Set(['nl', 'en']);
  const currentUrl = new URL(window.location.href);
  const requested = currentUrl.searchParams.get('lang');
  let preferred = supported.has(requested) ? requested : null;

  try {
    if (preferred) {
      localStorage.setItem(preferenceKey, preferred);
      currentUrl.searchParams.delete('lang');
      history.replaceState(history.state, '', currentUrl);
    } else {
      const saved = localStorage.getItem(preferenceKey);
      if (supported.has(saved)) preferred = saved;
    }
  } catch {
    // The current link still works when browser storage is unavailable.
  }

  if (!preferred) {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    preferred = browserLanguages.map(language => language?.split('-')[0].toLowerCase())
      .find(language => supported.has(language)) || 'en';
  }

  if (document.documentElement.lang === 'nl' && preferred === 'en') {
    const translationPath = document.querySelector('meta[name="toviesnotes-translation"]')?.content;
    if (!translationPath) return;
    const translation = new URL(translationPath, currentUrl.origin);
    if (translation.origin !== currentUrl.origin) return;
    translation.search = currentUrl.search;
    translation.hash = currentUrl.hash;
    window.location.replace(translation.href);
  }
})();
