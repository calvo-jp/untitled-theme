<script lang="ts">
	import type {SVGAttributes} from 'svelte/elements';

	let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDJMNCA0TTIyIDJMMjAgNE0yMiAyMkwyMCAyME0yIDIyTDQgMjBNMiAxNkgzLjVNOCAyVjMuNU0yMiA4SDIwLjVNMTYgMjJWMjAuNU0xOCAxNkgyMS41TTE2IDJWNk0yIDhINk04IDIyVjE4TTE2IDEyQzE2IDE0LjIwOTEgMTQuMjA5MSAxNiAxMiAxNkM5Ljc5MDg2IDE2IDggMTQuMjA5MSA4IDEyQzggOS43OTA4NiA5Ljc5MDg2IDggMTIgOEMxNC4yMDkxIDggMTYgOS43OTA4NiAxNiAxMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+) -->

<svg
	width="16"
	height="16"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<path
		d="M2 2L4 4M22 2L20 4M22 22L20 20M2 22L4 20M2 16H3.5M8 2V3.5M22 8H20.5M16 22V20.5M18 16H21.5M16 2V6M2 8H6M8 22V18M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
		stroke="currentColor"
		stroke-width="1.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
