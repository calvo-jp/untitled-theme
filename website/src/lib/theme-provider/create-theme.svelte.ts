import {
  DARK_MEDIA_QUERY,
  LOCAL_STORAGE_KEY,
  NO_TRANSITION_CLASSNAME,
} from './constants';
import {parseTheme} from './parse-theme';
import type {Theme} from './types';

export interface CreateThemeReturn {
  current: Theme;
}

export function createTheme(): CreateThemeReturn {
  let theme: Theme = $state('system');

  $effect(function setup() {
    theme = parseTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  });

  $effect(function themeChanged() {
    const html = document.documentElement;

    html.classList.add(NO_TRANSITION_CLASSNAME);

    const originalTheme = theme;
    const resolvedTheme =
      originalTheme === 'system'
        ? window.matchMedia(DARK_MEDIA_QUERY).matches
          ? 'dark'
          : 'light'
        : originalTheme;

    const removeClass = resolvedTheme === 'dark' ? 'light' : 'dark';

    html.classList.remove(removeClass);
    html.classList.add(resolvedTheme);
    html.style.colorScheme = resolvedTheme;

    window.localStorage.setItem(LOCAL_STORAGE_KEY, originalTheme);

    setTimeout(() => {
      html.classList.remove(NO_TRANSITION_CLASSNAME);
    }, 1);
  });

  $effect(function storageChanged() {
    function handler(e: StorageEvent) {
      if (e.key === LOCAL_STORAGE_KEY) {
        theme = parseTheme(e.newValue);
      }
    }

    window.addEventListener('storage', handler);

    return () => window.removeEventListener('storage', handler);
  });

  return {
    get current() {
      return theme;
    },
    set current(newTheme) {
      theme = newTheme;
    },
  };
}
