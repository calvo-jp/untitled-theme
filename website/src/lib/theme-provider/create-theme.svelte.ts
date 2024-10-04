import {parseTheme} from './parse-theme';
import type {Theme} from './types';

export interface CreateThemeReturn {
	current: Theme;
}

export function createTheme(): CreateThemeReturn {
	let theme: Theme = $state('system');

	$effect(function setup() {
		theme = parseTheme(window.localStorage.getItem('theme'));
	});

	$effect(function themeChanged() {
		const html = document.documentElement;

		html.classList.add('svelte-os-themes__no-transition');

		const originalTheme = theme;
		const resolvedTheme =
			originalTheme === 'system'
				? window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
				: originalTheme;

		const removeClass = resolvedTheme === 'dark' ? 'light' : 'dark';

		html.classList.remove(removeClass);
		html.classList.add(resolvedTheme);
		html.style.colorScheme = resolvedTheme;

		window.localStorage.setItem('theme', originalTheme);

		setTimeout(() => {
			html.classList.remove('svelte-os-themes__no-transition');
		}, 1);
	});

	$effect(function storageChanged() {
		function handler(e: StorageEvent) {
			if (e.key === 'theme') {
				theme = parseTheme(e.newValue);
			}
		}

		window.addEventListener('storage', handler);

		return () => {
			window.removeEventListener('storage', handler);
		};
	});

	return {
		get current(): Theme {
			return theme;
		},
		set current(newTheme: Theme) {
			theme = newTheme;
		},
	};
}
