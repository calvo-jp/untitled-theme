import {getContext} from 'svelte';
import type {CreateThemeReturn} from './create-theme.svelte';

export function useTheme() {
	return getContext<CreateThemeReturn>('theme');
}
