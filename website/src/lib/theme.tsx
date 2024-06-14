'use client';

import {createContext, useContext, useEffect, useState, type PropsWithChildren} from 'react';

type Theme = 'light' | 'dark' | 'system';
type TThemeContext = [theme: Theme | undefined, setTheme: (theme: Theme | (string & {})) => void];

export const ThemeContext = createContext<TThemeContext>([] as unknown as TThemeContext);

const STORAGE_KEY = 'theme';
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const NO_TRANSITION_STYLE =
	'*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

const FLASH_FIX_SCRIPT = `
(function() {
  const k = '${STORAGE_KEY}';
  const h = document.documentElement;
  const q = window.matchMedia('${DARK_MEDIA_QUERY}')
  const s = window.localStorage.getItem(k)?.toLowerCase().trim();

  const l = [
    'dark',
    'light',
    'system'
  ];

  const v = l.includes(s) ? s : l[2];
  const t = v === 'system' ? q.matches ? 'dark' : 'light' : v;

  if (t === 'dark') {
    h.classList.add('dark');
  } else if (t === 'light') {
    h.classList.remove('dark');
  } else {
    if (q.matches) {
      h.classList.add('dark');
    } else {
      h.classList.remove('dark');
    }
  }

  window.localStorage.setItem(k, v);
})();
`;

export function ThemeProvider(props: PropsWithChildren) {
	const [theme, setTheme] = useState<Theme>();

	useEffect(function assignCorrectTheme() {
		setTheme(parseTheme(localStorage.getItem('theme')));
	}, []);

	useEffect(
		function handleThemeChanges() {
			/* Wait for theme to be assigned */
			if (!theme) return;

			const style = document.createElement('style');

			style.innerHTML = NO_TRANSITION_STYLE;

			document.head.appendChild(style);

			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else if (theme === 'light') {
				document.documentElement.classList.remove('dark');
			} else {
				if (window.matchMedia(DARK_MEDIA_QUERY).matches) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}

			localStorage.setItem(STORAGE_KEY, theme);

			setTimeout(() => {
				document.head.removeChild(style);
			}, 1);
		},
		[theme],
	);

	useEffect(function syncTabs() {
		function handler(e: StorageEvent) {
			if (e.key === STORAGE_KEY) {
				setTheme(parseTheme(e.newValue));
			}
		}

		window.addEventListener('storage', handler);

		return () => {
			window.removeEventListener('storage', handler);
		};
	}, []);

	useEffect(function syncSystem() {
		const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);

		function handler(e: MediaQueryListEvent) {
			setTheme(e.matches ? 'dark' : 'light');
		}

		mediaQuery.addEventListener('change', handler);

		return () => {
			mediaQuery.removeEventListener('change', handler);
		};
	}, []);

	return (
		<ThemeContext.Provider
			value={[
				theme,
				function changeTheme(theme: Theme | (string & {})) {
					setTheme(parseTheme(theme));
				},
			]}
		>
			<script
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: FLASH_FIX_SCRIPT,
				}}
			/>

			{props.children}
		</ThemeContext.Provider>
	);
}

function parseTheme<T extends string>(value: T | null | undefined) {
	if (value === 'light') return 'light';
	if (value === 'dark') return 'dark';
	return 'system';
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) throw new Error("'useTheme' must be used within a 'ThemeProvider'");

	return context;
}
