<script lang="ts">
	import type {SVGAttributes} from 'svelte/elements';

	let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik02IDNIMThNNiA4SDE4TTE0LjUgMjFMNiAxM0g5QzE1LjY2NyAxMyAxNS42NjcgMyA5IDMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+) -->

<svg
	width="16"
	height="16"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<path
		d="M6 3H18M6 8H18M14.5 21L6 13H9C15.667 13 15.667 3 9 3"
		stroke="currentColor"
		stroke-width="1.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
