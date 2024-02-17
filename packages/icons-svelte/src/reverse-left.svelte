<script lang="ts">
	import type {SVGAttributes} from 'svelte/elements';

	let {...props} = $props<SVGAttributes<SVGSVGElement>>();
</script>

<!-- @component ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik00IDdIMTRDMTcuMzEzNyA3IDIwIDkuNjg2MjkgMjAgMTNDMjAgMTYuMzEzNyAxNy4zMTM3IDE5IDE0IDE5SDRNNCA3TDggM000IDdMOCAxMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=) -->

<svg
	width="16"
	height="16"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<path
		d="M4 7H14C17.3137 7 20 9.68629 20 13C20 16.3137 17.3137 19 14 19H4M4 7L8 3M4 7L8 11"
		stroke="currentColor"
		stroke-width="1.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
