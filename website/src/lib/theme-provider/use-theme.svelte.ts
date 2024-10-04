import {getContext} from 'svelte';
import {CONTEXT_KEY} from './constants';
import type {CreateThemeReturn} from './create-theme.svelte';

export function useTheme() {
	return getContext<CreateThemeReturn>(CONTEXT_KEY);
}
