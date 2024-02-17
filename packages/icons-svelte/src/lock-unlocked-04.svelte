<script lang="ts">
	import type {SVGAttributes} from 'svelte/elements';

	let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik03IDEwVjhDNyA1LjIzODU4IDkuMjM4NTggMyAxMiAzQzEzLjYzNTggMyAxNS4wODgyIDMuNzg1NTUgMTYuMDAwNCA1TTEyIDE0VjE2TTE5IDE1QzE5IDE4Ljg2NiAxNS44NjYgMjIgMTIgMjJDOC4xMzQwMSAyMiA1IDE4Ljg2NiA1IDE1QzUgMTEuMTM0IDguMTM0MDEgOCAxMiA4QzE1Ljg2NiA4IDE5IDExLjEzNCAxOSAxNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+) -->

<svg
	width="16"
	height="16"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<path
		d="M7 10V8C7 5.23858 9.23858 3 12 3C13.6358 3 15.0882 3.78555 16.0004 5M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
		stroke="currentColor"
		stroke-width="1.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
