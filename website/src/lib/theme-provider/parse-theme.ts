import type {Theme} from './types';

export function parseTheme(value: unknown): Theme {
  if (typeof value !== 'string') return 'system';
  value = value.toLowerCase().trim();
  if (value === 'dark') return 'dark';
  if (value === 'light') return 'light';
  return 'system';
}
